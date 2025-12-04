import Link from 'next/link';
import '../app/resume/Resume.css'; // CSS 파일 경로 확인 필수!

export default function Awards() {
  return (
    <section className="experience-section">
      {/* 제목: # Preisverleihung 
        (이전에 영문으로 바꾸고 싶다고 하셨다면 # AWARDS 로 변경하셔도 됩니다)
      */}
      <h2 className="label title-spacing"># AWARDS</h2>

      <article className="job-entry">
        <div className="company-wrapper">
          <Link 
            href="https://www.kiiee.or.kr/" 
            target="_blank" 
            className="text-item company-link"
          >
            @한국조명·전기설비학회
          </Link>
        </div>
        <div className="job-details">
          <p className="text-item">학회장상[우수상]</p>
          <p className="text-item">캡스턴디자인</p>
          <p className="text-item job-period">2025.11</p>
        </div>
      </article>
      {/* 수상 1: 강원대학교 */}
      <article className="job-entry" style={{ marginTop: '2rem' }}>
        <div className="company-wrapper">
          <Link 
            href="https://wwwk.kangwon.ac.kr/www/index.do" 
            target="_blank" 
            className="text-item company-link"
          >
            @강원대학교
          </Link>
        </div>
        <div className="job-details">
          <p className="text-item">동상</p>
          <p className="text-item">캡스톤디자인 경진대회</p>
          <p className="text-item job-period">2025.09</p>
        </div>
      </article>

      {/* 수상 2: 전력전자학술대회 */}
      {/* 항목 간 간격을 위해 marginTop 추가 */}
      <article className="job-entry" style={{ marginTop: '2rem' }}>
        <div className="company-wrapper">
          <Link 
            href="https://conf.kipe.or.kr/2025s/pages/IE.vm" 
            target="_blank" 
            className="text-item company-link"
          >
            @전력전자학술대회
          </Link>
        </div>
        <div className="job-details">
          <p className="text-item">우수상</p>
          <p className="text-item">I.E 경진대회</p>
          <p className="text-item job-period">2025.07</p>
        </div>
      </article>

    </section>
  );
}