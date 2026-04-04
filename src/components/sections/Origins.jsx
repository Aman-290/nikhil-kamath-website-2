import React from 'react';
import { motion } from 'framer-motion';
import { useEasterEggStore, EGG_IDS } from '../../hooks/useEasterEgg';

export default function Origins() {
  const { unlockEgg } = useEasterEggStore();

  const handleVeenaClick = () => {
    unlockEgg(EGG_IDS.MATRIARCH_VEENA);
    window.dispatchEvent(new CustomEvent('show-matriarch'));
  };

  return (
    <section id="section-origins" className="relative w-full py-32 z-10 bg-[#050505]">
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

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-clash text-center text-white tracking-tight leading-[1.1] z-10"
          >
            An ecosystem built by<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-700 italic">institutions and independence.</span>
          </motion.h2>
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
            <div className="relative w-full aspect-[4/5] max-w-[28rem] mx-auto overflow-hidden rounded-[2rem] bg-[#0A0A0F] border border-white/5 shadow-2xl mb-8">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
              <img
                src="/assets/images/raghuram-kamath-banker.jpg"
                alt="Raghuram Kamath"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 ease-out"
              />
            </div>
            <div className="max-w-[28rem] mx-auto w-full">
              <h3 className="font-clash text-3xl text-white mb-2 tracking-tight">
                Raghuram Kamath
              </h3>
              <span className="text-gray-500 font-mono text-sm tracking-widest uppercase mb-6 block">Canara Bank Executive</span>
              <p className="font-satoshi text-gray-400 text-lg leading-relaxed">
                Disciplined. Conventional. Transferred across Karnataka until the family settled in Bangalore when Nikhil was nine. Built a career on institutions, rules, and incremental progression.<br/><br/>
                <span className="text-white">His son would build the opposite.</span><br/><br/>
                His single greatest investment: Handing his personal savings to an 18-year-old school dropout with no track record. No questions asked.<br/>    
              </p>
              <div className="mt-8 border-l-2 border-[#D4FF00] pl-6">
                <span className="text-white italic text-xl font-garamond block">"That leap of faith changed everything."</span>
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
            <div className="relative w-full aspect-[4/5] max-w-[28rem] mx-auto overflow-hidden rounded-[2rem] bg-[#0A0A0F] border border-white/5 shadow-2xl mb-8">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
              <img
                src="/assets/images/revathi-kamath-temple.webp"
                alt="Revathi Kamath"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 ease-out"
              />
              <button
                onClick={handleVeenaClick}
                className="absolute top-6 right-6 w-14 h-14 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-xl border border-white/20 hover:bg-[#D4FF00]/20 hover:border-[#D4FF00]/50 transition-all duration-500 z-20 tooltip-trigger group/btn"
                title="There's more to this story."
              >
                <img src="/assets/icons/veena-line-art.svg" alt="Veena" className="w-6 h-6 opacity-70 group-hover/btn:opacity-100 group-hover/btn:scale-110 transition-transform duration-300 invert" />
              </button>
            </div>
            <div className="max-w-[28rem] mx-auto w-full relative z-20">
              <h3 className="font-clash text-3xl text-white mb-2 tracking-tight">
                Revathi Kamath
              </h3>
              <span className="text-gray-500 font-mono text-sm tracking-widest uppercase mb-6 block">Veena maestro · Entrepreneur</span>
              <p className="font-satoshi text-gray-400 text-lg leading-relaxed">
                Started a flower business with ₹500. Borrowed ₹5,000 from a friend to pitch Wipro. Left with a ₹45,000 contract.<br/><br/>
                Built Calyx — events for HP, Bosch, Leela Palace. Moved into landscaping: Chinnaswamy Stadium, Intel, CBRE. Planted over one lakh trees.<br/><br/>
              </p>
              <div className="mt-8 p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/textures/noise-overlay.png')] mix-blend-overlay opacity-20 pointer-events-none" />
                <span className="text-gray-500 text-xs uppercase tracking-widest block mb-2 relative z-10">Her Instagram bio:</span>
                <span className="text-white italic font-garamond text-xl relative z-10">'Environmentalist and Veena player.'</span><br/>
                <span className="text-gray-400 text-sm mt-3 block relative z-10">No mention of her sons.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-24" />
        <p className="font-mono text-[10px] tracking-[0.3em] text-white/20 uppercase text-center mb-24">The other education</p>

        {/* The Exit / School - Now integrating scrapbook */}
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
              <img 
                src="/assets/images/nikhil-young-scrapbook.webp"
                alt="Young Nikhil Scaffold"
                className="relative z-10 w-full h-auto rounded-tl-3xl rounded-br-3xl border text-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700"
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
                <h2 className="text-[8rem] md:text-[12rem] font-clash leading-[0.8] tracking-tighter text-white drop-shadow-[0_10px_30px_rgba(239,83,80,0.2)] flex items-end">
                  6<span className="text-[3rem] md:text-[5rem] text-white/30 ml-2 mb-4">/100</span>
                </h2>
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

                  <blockquote className="font-garamond italic text-2xl md:text-3xl text-white py-6 border-l-2 border-[#ef5350]/50 pl-6 my-8">
                    "I hated school. Always did.<br/>I had no plan when I dropped out — the only plan was to make money."
                  </blockquote>

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

        {/* Chess Panel */}
        <motion.div
          className="relative w-full rounded-[2rem] overflow-hidden mt-32 mb-8"
          style={{ cursor: "url('/assets/icons/chess-knight-cursor.svg') 16 16, crosshair" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Chessboard background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/assets/images/chess-board-dramatic.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.08,
            }}
          />
          <div className="absolute inset-0 bg-[#050505]/70" />

          {/* Kasparov ambient quote */}
          <p className="absolute inset-0 flex items-center justify-center font-garamond italic text-white select-none pointer-events-none px-8 text-center leading-tight"
             style={{ fontSize: '5rem', opacity: 0.05, lineHeight: 1.1 }}>
            "Chess teaches you how to work under a structure, in a system, but yet try and be creative within that system."
          </p>

          {/* Foreground content */}
          <div className="relative z-10 px-8 md:px-20 py-24 flex flex-col items-center text-center">
            <h3 className="font-clash text-3xl md:text-5xl text-white font-medium tracking-tight leading-tight mb-12 max-w-3xl">
              He dropped out to be a chess player.<br />He became a trader instead.<br />
              <span className="text-white/40">The pattern was the same.</span>
            </h3>
            <div className="flex flex-col gap-4 text-white/50 font-satoshi text-lg">
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>Age 5. &nbsp; First game.</motion.p>
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>Age 14. &nbsp; National level.</motion.p>
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>Age 15. &nbsp; Out of school. Out of chess. Into the market.</motion.p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
