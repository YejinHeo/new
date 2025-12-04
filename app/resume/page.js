import Link from 'next/link';
import './Resume.css';
import Activity from '../../components/Activity';
import Awards from '../../components/Awards';

export default function Resume() {
  return (
    <main className="resume-container">
      
      {/* 상단 정보 영역 */}
      <section className="top-info">
        
        {/* 왼쪽 컬럼 */}
        <div className="info-column">
          <h2 className="label"># NAME</h2>
          <div className="info-content">
            <p className="text-item">허예진</p>
            <p className="text-item">2004.11.29</p>
          </div>
        </div>

        {/* 오른쪽 컬럼 */}
        <div className="info-column">
          <h2 className="label"># CONTACT</h2>
          <div className="info-content">
            <a href="mailto:yejinheo29@gmail.com" className="text-item link-item">
              yejinheo29@gmail.com
            </a>
          </div>
        </div>

      </section>

      <hr className="divider" />

      {/* 하단 경력 영역 */}
      <section className="experience-section">
        <h2 className="label title-spacing"># WORK EXPERIENCE</h2>
        
        <article className="job-entry">
          <div className="company-wrapper">
            <Link href="https://www.apple.com" target="_blank" className="text-item company-link">
              @Apple
            </Link>
          </div>
          
          <div className="job-details">
            <p className="text-item">Specialist</p>
            <p className="text-item">Apple Hongdae</p>
            <p className="text-item job-period">2024 - 2025</p>
          </div>
        </article>
      </section>
      <hr className="divider" />
        <Awards/>
        <hr className="divider" />
        <Activity />

    </main>
  );
}