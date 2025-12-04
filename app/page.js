// src/app/page.js
import Typewriter from '../components/Typewriter';
import Link from 'next/link'; 

export default function Home() {
  const welcomeMsg = "It works on my machine.\nIf it breaks on yours, it's definitely a Hardware Issue";

  return (
    <section className="intro">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
        Build Success...?
      </h2>
      <Typewriter text={welcomeMsg} speed={50} />
      <div style={{ 
          marginTop: '40px',
          display: 'flex',        /* 1. 플렉스 모드 켜기 */
          flexDirection: 'column', /* 2. 세로(수직) 방향으로 정렬 */
          gap: '10px',             /* 3. 두 단어 사이의 간격 */
          textDecoration: 'underline'
      }}>

            <Link href={"/posts"}><span>^ Posts</span></Link>
            <Link href={"/resume"}><span>^ Resume</span></Link>
            <Link href={"/project"}><span>^ Project</span></Link>
        </div>
    </section>

    
  );
}