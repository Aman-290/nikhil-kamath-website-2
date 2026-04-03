import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LottiePlayer from '../ui/LottiePlayer';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    title: "PENNY STOCKS",
    years: "2003-2005",
    desc: "Betting blindly. Hoping a company does well. The market rewards beginners to keep them gambling. It rewarded him: Marsoft, ₹4 → ₹20. It also punished him. Many times.",
    visualType: "chaotic",
  },
  {
    title: "FUNDAMENTALS",
    years: "2005-2008",
    desc: "He read Graham. He thought fundamentals were the answer. 'Companies do not move based on how well they are doing fundamentally. Companies are a factor of sentiment.' The lesson: the market is not rational. It is human.",
    visualType: "structured",
  },
  {
    title: "TECHNICAL ANALYSIS",
    years: "2008-2011",
    desc: "Moving average crossovers. 20-50 interval. Steve Nison's candlestick books. 'Technical analysis is a lagging indicator.' By the time the signal appears, the move has already started.",
    visualType: "candlestick",
  },
  {
    title: "QUANTITATIVE",
    years: "2011-2015",
    desc: "Pair trading. Delta hedging. Statistical arbitrage. Writing algorithms for correlation and mean regression. Shifted from big directional bets to 'catching smaller pieces — 20-30 basis points — many times over.' Kamath & Associates: 55% post-tax returns, year on year.",
    visualType: "algo",
  },
  {
    title: "SENTIMENT",
    years: "2015-Present",
    desc: "Promoter behavior. Institutional money flows. Geopolitical shifts. Interest rate cycles. The market is a human system. Understand the humans, and the system follows.",
    visualType: "fluid",
  }
];

export default function FivePhases() {
  const containerRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  const [basketballAnim, setBasketballAnim] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    fetch('/assets/animations/basketball-bounce.json')
      .then(res => res.json())
      .then(data => setBasketballAnim(data))
      .catch(err => console.error("Could not load basketball animation", err));
  }, []);

  useEffect(() => {
    if (!isDesktop || !containerRef.current || !scrollWrapperRef.current) return;

    // We get the total width to translate by getting the wrapper's scrollWidth minus the window width
    const getScrollAmount = () => {
      let wrapperWidth = scrollWrapperRef.current.scrollWidth;
      return -(wrapperWidth - window.innerWidth);
    };

    const tween = gsap.to(scrollWrapperRef.current, {
      x: getScrollAmount,
      ease: "none",
      // Using ScrollTrigger to pin and scrub the horizontal movement
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      tween.kill();
    };
  }, [isDesktop]);

  if (!isDesktop) {
    return (
      <section className="relative w-full bg-primary-bg py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-lg mb-12">
            <h2 className="font-clash text-4xl text-primary-text mb-4">The Five Phases</h2>
            <p className="font-satoshi text-secondary-text text-base">
              He did not learn to trade. He evolved through five distinct phases. Each lasting roughly 3-4 years.
            </p>
          </div>

          <div className="space-y-6">
            {phases.map((phase, i) => (
              <React.Fragment key={phase.title}>
                <div className="bg-surface-bg border border-white/5 rounded-2xl p-6">
                  <span className="text-secondary-text font-mono text-xs tracking-widest">{phase.years}</span>
                  <h3 className="text-2xl font-clash text-primary-text mt-2 mb-4">0{i + 1}. {phase.title}</h3>
                  <p className="font-satoshi text-secondary-text leading-relaxed">{phase.desc}</p>
                </div>

                {i < phases.length - 1 && basketballAnim && (
                  <div className="w-full flex items-center justify-center opacity-50">
                    <LottiePlayer animationData={basketballAnim} className="w-16 h-16" loop={true} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-10 border-l-2 border-accent-chartreuse pl-6">
            <p className="font-satoshi text-primary-text leading-relaxed">
              From one borrowed laptop in a call centre to managing High Net Worth portfolios for India's elite.
              The progression took seven years. No MBA. No Bloomberg terminal training program.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-primary-bg overflow-hidden flex flex-col justify-center">
      
      {/* Intro Overlay Text pinned to the left */}
      <div className="absolute top-12 md:top-24 left-6 md:left-12 xl:left-24 z-20 max-w-lg">
        <h2 className="font-clash text-4xl text-primary-text mb-4">The Five Phases</h2>
        <p className="font-satoshi text-secondary-text text-lg">
          He did not learn to trade. He evolved through five distinct phases.<br/>
          Each lasting roughly 3-4 years.<br/>
          Each discarding what the previous one taught him.
        </p>
      </div>

      {/* The Horizontal Scrolling Wrapper */}
      <div ref={scrollWrapperRef} className="flex flex-row items-center h-full pt-32 pb-12 pl-6 md:pl-24 w-max shrink-0 space-x-12 md:space-x-24 will-change-transform">
        
        {phases.map((phase, i) => (
          <React.Fragment key={i}>
            <div className="w-[80vw] max-w-md md:max-w-lg shrink-0 h-[60vh] md:h-[65vh] bg-surface-bg border border-white/5 rounded-2xl p-8 relative flex flex-col justify-between overflow-hidden group">
              
              {/* Background Visual Effects abstracting the phase */}
              <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                {phase.visualType === 'chaotic' && (
                  <div className="w-full h-full bg-[url('/assets/textures/noise-overlay.png')] mix-blend-overlay" />
                )}
                {phase.visualType === 'algo' && (
                  <div className="w-full h-full flex items-center justify-center font-mono text-xs text-accent-green overflow-hidden flex-wrap opacity-50 p-4">
                    {Array.from({ length: 400 }).map(() => (Math.random() > 0.5 ? '1' : '0')).join(' ')}
                  </div>
                )}
                {phase.visualType === 'structured' && (
                  <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-1 p-4">
                    {Array.from({ length: 16 }).map((_, j) => <div key={j} className="bg-white/5" />)}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-bg to-transparent" />
              </div>

              <div>
                <span className="text-secondary-text font-mono text-xs tracking-widest">{phase.years}</span>
                <h3 className="text-3xl font-clash text-primary-text mt-2 mb-6">0{i+1}. {phase.title}</h3>
                <p className="font-satoshi text-lg text-secondary-text leading-relaxed relative z-10">
                  {phase.desc}
                </p>
              </div>

              <div className="text-right pointer-events-none opacity-10">
                <span className="text-9xl font-mono text-primary-text">{i+1}</span>
              </div>
            </div>

            {/* Basketball Lottie transition between cards */}
            {i < phases.length - 1 && (
              <div className="w-32 shrink-0 flex items-center justify-center opacity-40">
                {basketballAnim && <LottiePlayer animationData={basketballAnim} className="w-24 h-24" loop={true} />}
              </div>
            )}
          </React.Fragment>
        ))}

        {/* Conclusion pad at the end of the scroll */}
        <div className="w-[80vw] max-w-sm shrink-0 flex flex-col justify-center pl-12 md:pl-24 pr-24">
           <p className="font-satoshi text-xl text-primary-text leading-relaxed border-l-2 border-accent-chartreuse pl-6">
            From one borrowed laptop in a call centre to managing High Net Worth portfolios for India's elite.<br/><br/>
            The progression took seven years.<br/>No MBA. No Bloomberg terminal training program.<br/>
            <span className="font-semibold">Just the market and the willingness to be wrong, expensively, repeatedly.</span>
           </p>
        </div>

      </div>
    </section>
  );
}
