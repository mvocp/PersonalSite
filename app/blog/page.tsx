import Link from 'next/link';
import {Card,CardContent,Typography,ToggleButton,ToggleButtonGroup} from '@mui/material'

async function getPostsData(page = 1) {
  const res = await fetch(`https://limitz.top/api/posts?page=${page}`, {
    // 缓存
    next: { revalidate: 300 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  return res.json();
}

export default async function BlogPage({ searchParams }) {
  const page = parseInt(searchParams.page || '1');
  
  try {
    const { posts, pagination } = await getPostsData(page);
    
    return (
      <div>
        
        <div>
          {posts.map((post) => (
            <article key={post.slug}>
                <Link 
                  href={`/blog/${post.slug}`}
                >
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{post.date}</Typography>
              <Typography variant="body2">
                {post.excerpt && (
                      post.excerpt
                    )}
                <br />
              </Typography>
            </CardContent>
          </Card>
                </Link>
                <br />      
            </article>
          ))}
        </div>
        <br />
        
        {/* 分页控件 */}
        <ToggleButtonGroup>
  
    {pagination.hasPrev && (
      <ToggleButton value={'pre'}>
            <Link
              href={`/blog?page=${pagination.currentPage - 1}`}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            >
              上一页
            </Link>
            </ToggleButton>
          )}
  <ToggleButton value={'current'}>
            第 {pagination.currentPage} 页 / 共 {pagination.totalPages} 页
  </ToggleButton>
  {pagination.hasNext && (
    <ToggleButton value={'next'}>
            <Link
              href={`/blog?page=${pagination.currentPage + 1}`}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            >
              下一页
            </Link>
            </ToggleButton>
          )}
</ToggleButtonGroup>

          

  

        </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">错误</h1>
        <p className="text-red-600">加载文章失败：{(error as Error).message}</p>
      </div>
    );
  }
}

// 可选：生成静态参数用于 SSG
export async function generateStaticParams() {
  // 这里可以预生成前几页的静态页面
  return [{ page: '1' }, { page: '2' }, { page: '3' }];
}