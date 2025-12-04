'use client'; 

import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false); // 타이핑 완료 여부 확인
  const [dots, setDots] = useState(''); // 점(...) 애니메이션 상태

  // 1. 메인 텍스트 타이핑 효과
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(interval);
        setIsTypingDone(true); // 타이핑이 끝나면 true로 변경
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  // 2. 타이핑이 끝난 후 점 6개 무한 반복 효과
  useEffect(() => {
    if (!isTypingDone) return; // 아직 타이핑 중이면 실행 안 함

    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length < 10 ? prev + '.' : '')); // 6개까지 늘어났다가 초기화
    }, 80); 

    return () => clearInterval(dotInterval);
  }, [isTypingDone]);

  return (
    <p style={{ whiteSpace: 'pre-line', color: '#666', lineHeight: '1.6' }}>
      {displayedText}
      {/* 타이핑이 끝났을 때만 점을 보여줌 */}
      {isTypingDone && <span>{dots}</span>}
    </p>
  );
};

export default Typewriter;