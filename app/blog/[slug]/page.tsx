    // app/blog/[slug]/page.js
    import { notFound } from 'next/navigation';
    import yaml from 'js-yaml';
    import { Divider,Container } from '@mui/material';
    import MarkdownRenderer from '@/components/markdown-renderer';

    async function getPostData(slug) {
    // 先获取索引找到文章slug
    const indexRes = await fetch('https://blog-posts.api.limitz.top/index.yml');
    const indexText = await indexRes.text();
    const index = yaml.load(indexText);
    
    const postMeta = index.find(item => item.slug === slug);
    
    if (!postMeta) {
        return null;
    }
    
    // 获取文章内容
    const contentUrl = `https://blog-posts.api.limitz.top/posts/${postMeta.slug}.mdx`;
    const contentRes = await fetch(contentUrl);
    const content = await contentRes.text();

    return {
        ...postMeta,
        content
    };
    }

    export default async function BlogPostPage({ params }) {
    const post = await getPostData(params.slug);
    
    if (!post) {
        notFound();
    }
    
    return (
        <div>
            <Container>
        <article>
            <h1>{post.title}</h1>
            <time>
            文章写作时间：{new Date(post.date).toLocaleDateString('zh-CN')} 作者：LimitZ_
            </time>
            <Divider />
            <br />
            <div>
            <MarkdownRenderer content=
            {post.content}
            ></MarkdownRenderer>
            </div>
        </article>
            </Container>
        </div>
    );
    }

    // 生成静态参数
    export async function generateStaticParams() {
    const indexRes = await fetch('https://blog-posts.api.limitz.top/index.yml');
    const indexText = await indexRes.text();
    const index = yaml.load(indexText);
    
    return index.map((post) => ({
        slug: post.slug || post.id.toString(),
    }));
    }