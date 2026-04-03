import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    title: "PENNY STOCKS",
    years: "2003-2005",
    desc: "Betting blindly. Hoping a company does well. The market rewards beginners to keep them gambling. It rewarded him: Marsoft, ₹4 → ₹20. It also punished him. Many times.",
  },
  {
    title: "FUNDAMENTALS",
    years: "2005-2008",
    desc: "He read Graham. He thought fundamentals were the answer. 'Companies do not move based on how well they are doing fundamentally. Companies are a factor of sentiment.' The lesson: the market is not rational. It is human.",
  },
  {
    title: "TECHNICAL ANALYSIS",
    years: "2008-2011",
    desc: "Moving average crossovers. 20-50 interval. Steve Nison's candlestick books. 'Technical analysis is a lagging indicator.' By the time the signal appears, the move has already started.",
  },
  {
    title: "QUANTITATIVE",
    years: "2011-2015",
    desc: "Pair trading. Delta hedging. Statistical arbitrage. Writing algorithms for correlation and mean regression. Shifted from big directional bets to 'catching smaller pieces — 20-30 basis points — many times over.' Kamath & Associates: 55% post-tax returns, year on year.",
  },
  {
    title: "SENTIMENT",
    years: "2015-Present",
    desc: "Promoter behavior. Institutional money flows. Geopolitical shifts. Interest rate cycles. The market is a human system. Understand the humans, and the system follows.",
  }
];

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
    <section 
      ref={containerRef} 
      className="relative w-full bg-[#050505] text-white flex flex-col md:h-screen overflow-hidden font-satoshi z-20"
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
              
              <div className="relative z-10">
                <span className="text-white/40 font-mono text-xs tracking-widest uppercase">{phase.years}</span>
                <h3 className="font-clash text-2xl text-white mt-4 mb-4 tracking-tight">
                  <span className="text-white/30 mr-2">0{i+1}.</span>{phase.title}
                </h3>
                <p className="font-satoshi text-gray-400 leading-relaxed text-base">{phase.desc}</p>
              </div>

              {/* Stylized Number Watermark */}
              <div className="absolute -bottom-6 -right-4 pointer-events-none select-none">
                <span 
                  className="font-clash font-bold text-transparent text-8xl" 
                  style={{ WebkitTextStroke: '1px rgba(255,255,255,0.05)' }}
                >
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
            <span className="text-white font-medium mt-4 block">Just the market and the willingness to be wrong, expensively, repeatedly.</span>
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
              
              <div className="relative z-10">
                <span className="text-white/40 font-mono text-sm tracking-[0.2em] uppercase">{phase.years}</span>
                <h3 className="font-clash text-3xl lg:text-4xl text-white mt-6 mb-6 tracking-tight">{phase.title}</h3>
                <p className="font-satoshi text-gray-400 text-lg leading-relaxed font-light">
                  {phase.desc}
                </p>
              </div>

              {/* Huge stylized transparent stroke Phase Number */}
              <div className="absolute -bottom-16 -right-10 pointer-events-none select-none mix-blend-screen">
                <span 
                  className="font-clash text-[14rem] leading-none font-bold text-transparent transition-all duration-700 group-hover:-translate-y-4" 
                  style={{ WebkitTextStroke: '2px rgba(255,255,255,0.06)' }}
                >
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
              <span className="text-white font-medium block mt-2">Just the market and the willingness to be wrong, expensively, repeatedly.</span>
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
