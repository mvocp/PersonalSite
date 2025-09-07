    import yaml from 'js-yaml';
    import { NextResponse } from 'next/server';

    // 缓存
    let postIndexCache;
    let cacheTimestamp = 0;
    const CACHE_DURATION = 5 * 60 * 1000; // 5分钟缓存

    async function loadPostIndex() {
    const now = Date.now();
    if (postIndexCache && now - cacheTimestamp < CACHE_DURATION) {
        return postIndexCache;
    }
    
    try {
        const response = await fetch('https://blog-posts.api.limitz.top/index.yml', {
        next: { revalidate: 300 } // 5分钟
        });
        
        if (!response.ok) {
        throw new Error(`Failed to fetch index: ${response.status}`);
        }
        const yamlText = await response.text();
        postIndexCache = yaml.load(yamlText);
        cacheTimestamp = now;
        return postIndexCache;
    } catch (error) {
        console.error('Failed to load remote post index:', error);
        return [];
    }
}

    export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = 10;

    try {
        const index = await loadPostIndex();
        
        // 计算分页
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const pageItems = index.slice(startIndex, endIndex);

        // 获取文章
        const posts = await Promise.all(
        pageItems.map(async (item) => {
            try {
            const contentUrl = `https://blog-posts.api.limitz.top/posts/${item.slug}.mdx`;
            const contentResponse = await fetch(contentUrl, {
                next: { revalidate: 300 }
            });
            
            if (!contentResponse.ok) {
                throw new Error(`Failed to fetch content`);
            }
            
            const content = await contentResponse.text();
            
            return {
                ...item,
                content,
            };
            } catch (error) {
            console.error(`Error loading post`, error);
            return {
                ...item,
                content: '## 内容加载失败...',
                error: true
            };
            }
        })
        );

        const totalPages = Math.ceil(index.length / pageSize);
        
        return NextResponse.json({
        posts,
        pagination: {
            currentPage: page,
            totalPages,
            hasNext: page < totalPages,
            hasPrev: page > 1,
        }
        });
    } catch (error) {
        console.error('Error in posts API:', error);
        return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
        );
    }
    }