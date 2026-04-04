import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    title: "PENNY STOCKS",
    boldLine: "Blind luck. Both ways.",
    desc: "Marsoft: ₹4 → ₹20. No reason. He was hooked anyway."
  },
  {
    title: "FUNDAMENTALS",
    boldLine: "Companies are sentiment.",
    desc: "Benjamin Graham was right about value. Wrong about timing."
  },
  {
    title: "TECHNICALS",
    boldLine: "The signal arrives late.",
    desc: "By the time the chart shows the move, it's already over."
  },
  {
    title: "QUANTITATIVE",
    boldLine: "55% post-tax. Year on year.",
    desc: "Pair trading. Delta hedging. Kamath & Associates. No MBA required."
  },
  {
    title: "SENTIMENT",
    boldLine: "Understand the humans.",
    desc: "Promoter behavior. Geopolitical shifts. The market is people."
  }
];


const PhaseBackground = ({ index }) => {
  if (index === 0) {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30 select-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-white/40"
            style={{
              width: '2px', height: '2px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    );
  }
  if (index === 1) {
    return (
      <div 
        className="absolute inset-0 z-0 opacity-50"
        style={{
          background: 'repeating-linear-gradient(transparent, transparent 31px, rgba(255,255,255,0.04) 31px, rgba(255,255,255,0.04) 32px)'
        }}
      />
    );
  }
  if (index === 2) {
    return (
      <div className="absolute right-0 bottom-0 z-0 opacity-[0.08]">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="40" width="10" height="30" fill="white" />
          <line x1="25" y1="20" x2="25" y2="80" stroke="white" strokeWidth="2" />
          <rect x="45" y="25" width="10" height="40" fill="white" />
          <line x1="50" y1="10" x2="50" y2="70" stroke="white" strokeWidth="2" />
          <rect x="70" y="50" width="10" height="20" fill="white" />
          <line x1="75" y1="30" x2="75" y2="90" stroke="white" strokeWidth="2" />
        </svg>
      </div>
    );
  }
  if (index === 3) {
    return (
      <div className="absolute right-[-10%] top-1/4 z-0 opacity-[0.05] select-none font-mono text-xl whitespace-pre" style={{fontFamily: 'JetBrains Mono, monospace'}}>
        correlation(A,B) = 0.87<br />mean_revert()<br />delta_hedge()
      </div>
    );
  }
  if (index === 4) {
    return (
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 60%)'
        }}
      />
    );
  }
  return null;
};

export default function FivePhases() {
  const containerRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  
  // High-performance GSAP Horizontal Scroll
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Only apply scroll trigger on desktop (md and up)
      let mm = gsap.matchMedia();
      
      mm.add("(min-width: 768px)", () => {
        const wrapper = scrollWrapperRef.current;
        if (!wrapper) return;

        const getScrollAmount = () => {
          let wrapperWidth = wrapper.scrollWidth;
          return -(wrapperWidth - window.innerWidth);
        };

        const tween = gsap.to(wrapper, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${wrapper.scrollWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1
          }
        });

        return () => {
          tween.kill();
        };
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="section-phases" 
      ref={containerRef} 
      className="relative w-full bg-[#050505] text-white flex flex-col md:h-screen overflow-hidden font-satoshi z-20"
      data-chapter-id="five-phases"
    >
      {/* 
        -------------------------------------------
        MOBILE VIEW (Native vertical stack)
        Safest storytelling layout for smaller screens
        ------------------------------------------- 
      */}
      <div className="md:hidden flex flex-col px-6 py-24 space-y-16">
        <div className="max-w-lg">
          <h2 className="font-clash text-4xl tracking-tight text-white mb-6">The Five Phases</h2>
          <p className="font-satoshi text-gray-400 text-lg leading-relaxed">
            He did not learn to trade. He evolved through five distinct phases.<br/>
            Each lasting roughly 3-4 years. Each discarding what the previous one taught him.
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, i) => (
            <div key={i} className="relative bg-white/[0.02] border border-white/10 rounded-3xl p-8 overflow-hidden">
              {/* Subtle Lighting Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
              
              <PhaseBackground index={i} />
              
              <div className="relative z-10 mt-12 pointer-events-none">
                <h3 className="font-clash text-2xl text-white mb-2 tracking-tight uppercase">
                  {phase.title}
                </h3>
                <p className="font-satoshi text-white text-lg leading-snug mb-3 font-medium flex flex-col gap-1">"{phase.boldLine}"</p>
                <p className="font-satoshi text-gray-400 leading-relaxed text-base">{phase.desc}</p>
              </div>

              {/* Decorative Number */}
              <div className="absolute top-6 right-6 pointer-events-none select-none z-[1]">
                <span className="font-clash text-[6rem] leading-none font-bold text-white/[0.06]">
                  0{i+1}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10">
           <p className="font-satoshi text-gray-400 text-lg leading-relaxed border-l-[3px] border-white/20 pl-6">
            From one borrowed laptop in a call centre to managing High Net Worth portfolios for India's elite.<br/>
            The progression took seven years. No MBA. No Bloomberg terminal training program.<br/>
            <span className="text-white font-medium mt-4 block">Only the market and the willingness to be wrong, expensively, repeatedly.</span>
           </p>
        </div>
      </div>

      {/* 
        -------------------------------------------
        DESKTOP VIEW (GSAP precise horizontal scroll)
        ------------------------------------------- 
      */}
      <div className="hidden md:flex w-full h-[100vh] items-center">
        <div 
          ref={scrollWrapperRef} 
          className="flex flex-row flex-nowrap h-full items-center px-[8vw] gap-16 will-change-transform"
        >
          {/* 1. Intro Slide - Now safely inline so it never overlaps */}
          <div className="w-[45vw] shrink-0 flex flex-col justify-center pr-12">
            <h2 className="font-clash text-5xl lg:text-7xl tracking-tight text-white mb-8 leading-[1.1]">
              The Five<br/>Phases
            </h2>
            <p className="font-satoshi text-gray-400 text-xl lg:text-2xl leading-relaxed max-w-lg font-light">
              He did not learn to trade. He evolved through five distinct phases.<br className="hidden lg:block"/>
              Each lasting roughly 3-4 years.<br className="hidden lg:block"/>
              Each discarding what the previous one taught him.
            </p>
          </div>

          {/* 2. Apple/Linear aesthetic Scrolling Cards */}
          {phases.map((phase, i) => (
            <div 
              key={i} 
              className="w-[38vw] max-w-[500px] h-[60vh] shrink-0 bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 rounded-[2rem] p-10 lg:p-14 relative flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-xl group transition-colors hover:border-white/20 hover:from-white/[0.06] hover:to-white/[0.02] duration-700"
            >
              {/* Premium Glow Accents */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 blur-[100px] rounded-full group-hover:bg-white/15 transition-colors duration-700 pointer-events-none" />
              
              <PhaseBackground index={i} />
              
              <div className="relative z-10 mt-12 pointer-events-none">
                <h3 className="font-clash text-3xl lg:text-4xl text-white mb-4 tracking-tight uppercase">{phase.title}</h3>
                <p className="font-satoshi text-white text-2xl leading-snug mb-4 font-medium italic">"{phase.boldLine}"</p>
                <p className="font-satoshi text-gray-400 text-lg leading-relaxed font-light">
                  {phase.desc}
                </p>
              </div>

              {/* Huge stylized transparent stroke Phase Number */}
              <div className="absolute top-6 right-6 pointer-events-none select-none z-[1]">
                <span className="font-clash text-[6rem] leading-none font-bold text-white/[0.06]">
                  0{i+1}
                </span>
              </div>
            </div>
          ))}

          {/* 3. Conclusion Slide */}
          <div className="w-[50vw] shrink-0 flex flex-col justify-center pl-12 pr-[10vw]">
             <p className="font-satoshi text-gray-400 text-2xl lg:text-3xl leading-snug border-l-[3px] border-white/20 pl-10 font-light">
              From one borrowed laptop in a call centre to managing High Net Worth portfolios for India's elite.<br/><br/>
              The progression took seven years.<br/>No MBA. No Bloomberg terminal training program.<br/><br/>
              <span className="text-white font-medium block mt-2">Only the market and the willingness to be wrong, expensively, repeatedly.</span>
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
