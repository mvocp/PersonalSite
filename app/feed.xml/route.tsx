    import RSS from 'rss';
    import yaml from 'js-yaml';

    interface BlogPost {
    title: string;
    date: string;
    slug: string;
    excerpt: string;
    }

    export async function GET() {
    const feed = new RSS({
        title: 'Limitz_\'s SPACE',
        description: '记得给我的世界加上故事与咖啡.',
        site_url: 'https://limitz.top',
        feed_url: 'https://limitz.top/feed.xml',
        language: 'zh-CN',
        image_url: 'https://q1.qlogo.cn/g?b=qq&nk=66870019&s=100',
        generator: 'Next.js with RSS',
    });
    
    try {
        //fetch
        const response = await fetch('https://blog-posts.api.limitz.top/index.yml', {
        next: { revalidate: 300 }
        });
        
        if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const yamlText = await response.text();
        const posts = yaml.load(yamlText) as BlogPost[];
        
        //日期降序
        const sortedPosts = posts.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        
        //加入feed
        sortedPosts.forEach((post, index) => {
        const postUrl = `https://limitz.top/blog/${post.slug}`;
        const postDate = new Date(post.date);
        
        feed.item({
            title: post.title,
            guid: post.slug,
            url: postUrl,
            description: post.excerpt,
            date: postDate,
            author: 'Limitz_',
        });
        });

        return new Response(feed.xml({ indent: true }), {
        status: 200,
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800'
        }
        });
        
    } catch (error) {
        console.error('RSS generation error:', error);
        
        // 包含错误信息的RSS返回（debug
        feed.item({
        title: 'Error generating RSS feed',
        description: 'There was an error generating the RSS feed. Please try again later.',
        date: new Date(),
        url: 'https://limitz.top'
        });
        
        return new Response(feed.xml({ indent: true }), {
        status: 500,
        headers: {
            'Content-Type': 'application/xml; charset=utf-8'
        }
        });
    }
    }