import PostCard from "@/components/Postcard";
import { getSortedPostsData } from "@/lib/posts";
import Link from 'next/link';
import './posts.css'; 

export default function FeedPage() {
  const allPosts = getSortedPostsData();

  return (
    <main className="container">
      {/* 상단 타이틀 영역 */}
      <section className="feed-header">
        <h1>POSTS</h1>
        <Link href="/"># HOME</Link>
      </section>

      {/* 리스트 헤더 */}
      <div className="posts-list-header grid-row">
        <span># DATE</span>
        <span># TITLE</span>
      </div>

      {/* 포스트 목록 */}
      <div className="posts-list">
        {allPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}