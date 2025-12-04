import Link from 'next/link';
import '../app/posts/posts.css'

export default function PostCard({ post }) {
  return (
    <Link href={`/posts/${post.id}`} className="post-card grid-row">
      {/* 날짜 영역 */}
      <time className="post-date" dateTime={post.date}>
        {post.date}
      </time>
      {/* 제목 영역 */}
      <h2 className="post-title">{post.title}</h2>
    </Link>
  );
}