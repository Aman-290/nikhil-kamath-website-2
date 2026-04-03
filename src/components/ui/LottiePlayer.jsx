import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';

export default function LottiePlayer({ animationData, loop = true, className = '' }) {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);
  const LottieComponent = (typeof Lottie === 'function' ? Lottie : Lottie?.default) || null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {inView && animationData && LottieComponent && (
        <LottieComponent animationData={animationData} loop={loop} />
      )}
    </div>
  );
}
