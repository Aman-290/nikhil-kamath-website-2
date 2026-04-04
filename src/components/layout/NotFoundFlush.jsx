import React, { useEffect, useState } from 'react';
import LottiePlayer from '../ui/LottiePlayer';

export default function NotFoundFlush() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/assets/animations/toilet-flush-anim.json')
      .then((res) => res.json())
      .then((json) => setAnimationData(json))
      .catch(() => setAnimationData(null));
  }, []);

  return (
    <section className="min-h-screen bg-primary-bg text-primary-text flex items-center justify-center px-6 py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        {animationData && <LottiePlayer animationData={animationData} loop={true} className="w-full h-full" />}
      </div>

      <div className="relative z-10 max-w-xl text-center">
        <h1 className="font-clash text-6xl md:text-8xl mb-6">Page Not Found.</h1>
        <p className="font-satoshi text-secondary-text text-lg mb-10">
          Much like Nikhil's first business plan, this link has been flushed.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-accent-chartreuse text-black px-8 py-3 font-mono text-xs uppercase tracking-widest"
        >
          Start Over (Like he did)
        </a>
      </div>
    </section>
  );
}
