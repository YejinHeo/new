// src/app/layout.js
import Link from 'next/link';
import Header from '../components/Header';
import './globals.css'; // 위에서 만든 CSS 불러오기

export const metadata = {
  title: 'Yejin Heo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div className="layout-container">
          <Link href={'/'}><Header /></Link>
          <main className="site-main">{children}</main>
          <footer className="site-footer">
            © 2025 YejinHeo All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}