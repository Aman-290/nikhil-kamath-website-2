import React from 'react';
import { motion } from 'framer-motion';
import { useEasterEggStore, EGG_IDS } from '../../hooks/useEasterEgg';
import ParallaxImage from '../ui/ParallaxImage';
import AnimatedText from '../ui/AnimatedText';

export default function Origins() {
  const { unlockEgg } = useEasterEggStore();

  const handleVeenaClick = () => {
    unlockEgg(EGG_IDS.MATRIARCH_VEENA);
    window.dispatchEvent(new CustomEvent('show-matriarch'));
  };

  return (
    <section data-chapter-id="origins" className="relative w-full py-32 z-10 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-7xl">

        {/* Intro */}
        <div className="w-full flex flex-col items-center justify-center py-20 mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex items-center space-x-6 mb-8"
          >
            <div className="w-12 md:w-32 h-[1px] bg-gradient-to-r from-transparent to-[#D4FF00]/60" />
            <span className="text-[#D4FF00] font-mono text-xs md:text-sm tracking-[0.3em] uppercase drop-shadow-[0_0_10px_rgba(212,255,0,0.5)]">
              Before the trade
            </span>
            <div className="w-12 md:w-32 h-[1px] bg-gradient-to-l from-transparent to-[#D4FF00]/60" />
          </motion.div>

          <AnimatedText
            mode="split-words"
            tag="h2"
            className="text-4xl md:text-6xl lg:text-7xl font-clash text-center text-white tracking-tight leading-[1.1] z-10"
            text="An ecosystem built by institutions and independence."
            delay={0.2}
            stagger={0.06}
          />
        </div>

        {/* The Family */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-40 relative z-10 w-full max-w-full overflow-hidden">
          {/* Father */}
          <motion.div
            className="flex flex-col group w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <ParallaxImage
              src="/assets/images/raghuram-kamath-banker.jpg"
              alt="Raghuram Kamath"
              className="relative w-full aspect-[4/5] max-w-[28rem] mx-auto rounded-[2rem] bg-[#0A0A0F] border border-white/5 shadow-2xl mb-8"
              parallaxSpeed={0.12}
              revealDirection="up"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20 rounded-[2rem]" />
            </ParallaxImage>
            <div className="max-w-[28rem] mx-auto w-full">
              <AnimatedText mode="slide-up" delay={0.1}>
                <h3 className="font-clash text-3xl text-white mb-2 tracking-tight">
                  Raghuram Kamath
                </h3>
              </AnimatedText>
              <span className="text-gray-500 font-mono text-sm tracking-widest uppercase mb-6 block">Canara Bank Executive</span>
              <p className="font-satoshi text-gray-400 text-lg leading-relaxed">
                Disciplined. Conventional. Transferred across Karnataka until the family settled in Bangalore when Nikhil was nine. Built a career on institutions, rules, and incremental progression.<br/><br/>
                <span className="text-white">His son would build the opposite.</span><br/><br/>
                His single greatest investment: Handing his personal savings to an 18-year-old school dropout with no track record. No questions asked.<br/>    
              </p>
              <div className="mt-8 border-l-2 border-[#D4FF00] pl-6">
                <AnimatedText mode="blur-in" delay={0.3}>
                  <span className="text-white italic text-xl font-garamond block">"That leap of faith changed everything."</span>
                </AnimatedText>
              </div>
            </div>
          </motion.div>

          {/* Mother */}
          <motion.div
            className="flex flex-col group lg:mt-32 w-full relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <ParallaxImage
              src="/assets/images/revathi-kamath-temple.webp"
              alt="Revathi Kamath"
              className="relative w-full aspect-[4/5] max-w-[28rem] mx-auto rounded-[2rem] bg-[#0A0A0F] border border-white/5 shadow-2xl mb-8"
              parallaxSpeed={0.18}
              revealDirection="left"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20 rounded-[2rem]" />
              <button
                onClick={handleVeenaClick}
                className="absolute top-6 right-6 w-14 h-14 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-xl border border-white/20 hover:bg-[#D4FF00]/20 hover:border-[#D4FF00]/50 transition-all duration-500 z-30 tooltip-trigger group/btn"
                title="There's more to this story."
              >
                <img src="/assets/icons/veena-line-art.svg" alt="Veena" className="w-6 h-6 opacity-70 group-hover/btn:opacity-100 group-hover/btn:scale-110 transition-transform duration-300 invert" />
              </button>
            </ParallaxImage>
            <div className="max-w-[28rem] mx-auto w-full relative z-20">
              <AnimatedText mode="slide-up" delay={0.1}>
                <h3 className="font-clash text-3xl text-white mb-2 tracking-tight">
                  Revathi Kamath
                </h3>
              </AnimatedText>
              <span className="text-gray-500 font-mono text-sm tracking-widest uppercase mb-6 block">Veena maestro · Entrepreneur</span>
              <p className="font-satoshi text-gray-400 text-lg leading-relaxed">
                Started a flower business with ₹500. Borrowed ₹5,000 from a friend to pitch Wipro. Left with a ₹45,000 contract.<br/><br/>
                Built Calyx — events for HP, Bosch, Leela Palace. Moved into landscaping: Chinnaswamy Stadium, Intel, CBRE. Planted over one lakh trees.<br/><br/>
              </p>
              <div className="mt-8 p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/textures/noise-overlay.png')] mix-blend-overlay opacity-20 pointer-events-none" />
                <span className="text-gray-500 text-xs uppercase tracking-widest block mb-2 relative z-10">Her Instagram bio:</span>
                <AnimatedText mode="blur-in" delay={0.2}>
                  <span className="text-white italic font-garamond text-xl relative z-10">'Environmentalist and Veena player.'</span>
                </AnimatedText>
                <br/>
                <span className="text-gray-400 text-sm mt-3 block relative z-10">No mention of her sons.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Exit / School - Scrapbook */}
        <div className="flex flex-col lg:flex-row items-center py-32 relative">
          
          {/* Left Side: Scrapbook */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start items-center min-h-[60vh]">
            <motion.div
              initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative z-20 max-w-md w-full"
            >
              <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl transform rotate-3" />
              <ParallaxImage
                src="/assets/images/nikhil-young-scrapbook.webp"
                alt="Young Nikhil Scaffold"
                className="relative z-10 w-full h-auto rounded-tl-3xl rounded-br-3xl border text-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                parallaxSpeed={0.08}
                kenBurns={true}
                reveal={false}
                grain={true}
              />
            </motion.div>
          </div>

          {/* Right Side: Typography & Text */}
          <div className="w-full lg:w-1/2 mt-20 lg:mt-0 relative z-10 flex flex-col pl-0 lg:pl-16">
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="relative mb-12 group">
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#ef5350] shadow-[0_0_20px_#ef5350] opacity-50 group-hover:opacity-100 transition-opacity" />

                {/* Big "6/100" with typewriter effect */}
                <div className="flex items-end">
                  <AnimatedText
                    mode="typewriter"
                    text="6"
                    tag="span"
                    className="text-[8rem] md:text-[12rem] font-clash leading-[0.8] tracking-tighter text-white drop-shadow-[0_10px_30px_rgba(239,83,80,0.2)]"
                    delay={0.3}
                  />
                  <span className="text-[3rem] md:text-[5rem] text-white/30 ml-2 mb-4 font-clash">/100</span>
                </div>

                <div className="mt-4 flex items-center space-x-4"> 
                  <p className="font-mono text-sm tracking-[0.3em] text-[#ef5350] uppercase drop-shadow-[0_0_8px_rgba(239,83,80,0.5)]">
                    Mathematics Score
                  </p>
                  <div className="flex-1 max-w-[100px] h-[1px] bg-gradient-to-r from-[#ef5350] to-transparent" />
                </div>
              </div>

              <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ef5350]/5 rounded-full blur-[80px]" />
                
                <h3 className="font-clash text-3xl md:text-4xl text-white mb-2">Oxford Senior Secondary School</h3>
                <span className="font-mono text-sm tracking-widest text-gray-500 uppercase mb-8 block">JP Nagar, Bangalore</span>

                <div className="space-y-6 font-satoshi text-lg text-gray-400 leading-relaxed relative z-10">
                  <p>The school refused to let him sit for board exams. Reason: <span className="text-white">total disinterest in studies.</span></p>
                  <p>Not because he couldn't do it. Because he was already thinking about something else.</p>

                  <AnimatedText mode="blur-in" delay={0.2}>
                    <blockquote className="font-garamond italic text-2xl md:text-3xl text-white py-6 border-l-2 border-[#ef5350]/50 pl-6 my-8">
                      "I hated school. Always did.<br/>I had no plan when I dropped out — the only plan was to make money."
                    </blockquote>
                  </AnimatedText>

                  <div className="pt-8 border-t border-white/10">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] mb-4 block text-[#ef5350]">His one regret</span>
                    <p className="text-gray-300">
                      "I have more regrets about having dropped out than people think. Not the education. The friendships. The best times in people's lives happen in college. I've never had that experience. Nor will I ever."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
