    // components/markdown-renderer.tsx
    // generate by deeepseek v3,i just change a little code to adapt it to my site.
    'use client';

    import ReactMarkdown from 'react-markdown';
    import remarkGfm from 'remark-gfm'; // 支持表格、删除线等
    import rehypeHighlight from 'rehype-highlight'; // 代码高亮
    import 'highlight.js/styles/github-dark.css'; // 代码高亮样式

    interface MarkdownRendererProps {
    content: string;
    }

    export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    return (
        <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={
            {

            img: ({ node, ...props }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            {...props}
            alt={props.alt || ''}
            className="max-w-full h-auto rounded-lg my-4"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        ),
        //other uphere

            }
        }
        >
        {content}
        </ReactMarkdown>
    );
    }