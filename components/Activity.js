import Link from 'next/link';
import '../app/resume/Resume.css'; 

export default function Activity() {
  return (
    <section className="experience-section">
      <h2 className="label title-spacing"># ACTIVITIES</h2>

      {/* 활동 1 */}
      <article className="job-entry">
        <div className="company-wrapper">
          <Link 
            href="https://www.instagram.com/edupia_samcheok/" 
            target="_blank" 
            className="text-item company-link"
          >
            @삼척교육발전사업단
          </Link>
        </div>
        <div className="job-details">
          <p className="text-item">교육운영 보조자</p>
          <p className="text-item">한국에너지마이스터고등학교</p>
          <p className="text-item job-period">2025.09 - 2025.11</p>
        </div>
      </article>

      {/* 활동 2 */}
      {/* 항목 간 간격을 위해 style={{ marginTop: '2rem' }} 추가 가능 */}
      <article className="job-entry" style={{ marginTop: '2rem' }}>
        <div className="company-wrapper">
          <Link 
            href="https://www.instagram.com/edupia_samcheok/" 
            target="_blank" 
            className="text-item company-link"
          >
            @삼척교육발전사업단
          </Link>
        </div>
        <div className="job-details">
          <p className="text-item">교육운영 보조자</p>
          <p className="text-item">2025 동해 청소년 진로박람회</p>
          <p className="text-item job-period">2025.09</p>
        </div>
      </article>

      {/* 활동 3 */}
      <article className="job-entry" style={{ marginTop: '2rem' }}>
        <div className="company-wrapper">
          <Link 
            href="https://www.instagram.com/edupia_samcheok/" 
            target="_blank" 
            className="text-item company-link"
          >
            @삼척교육발전사업단
          </Link>
        </div>
        <div className="job-details">
          <p className="text-item">교육운영 보조자</p>
          <p className="text-item">EDUPIA 직업체험박람회</p>
          <p className="text-item job-period">2025.07</p>
        </div>
      </article>
      
    </section>
  );
}