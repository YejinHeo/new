import { getPostData, getAllPostIds } from "@/lib/posts";
import Link from 'next/link';
import '../posts.css'; 

// 빌드 시점에 경로 생성 (이 부분은 그대로 두셔도 됩니다)
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

// [수정 1] 메타데이터 생성 함수도 await params 필요
export async function generateMetadata({ params }) {
  // params를 먼저 await로 풀어줍니다.
  const resolvedParams = await params;
  const postData = await getPostData(resolvedParams.id);
  
  return {
    title: postData.title,
  };
}

// [수정 2] 페이지 컴포넌트
export default async function PostPage({ params }) {
  // ★ 핵심: Next.js 15에서는 params가 Promise이므로 await가 필수입니다!
  const resolvedParams = await params;
  const postData = await getPostData(resolvedParams.id);

  return (
    <main className="container">
      <article className="post-article">
        <div className="post-meta-header">
          <Link href="/posts"># BACK TO LIST</Link>
        </div>
        <h1 className="article-title">{postData.title}</h1>
        <time className="post-meta-header" dateTime={postData.date}>{postData.date}</time>
        <hr className="divider" />
        
        {/* 마크다운 본문 */}
        <div 
          className="markdown-body" 
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
      </article>
    </main>
  );
}