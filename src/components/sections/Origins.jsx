import React from 'react';
import { motion } from 'framer-motion';
import { useEasterEggStore, EGG_IDS } from '../../hooks/useEasterEgg';

export default function Origins() {
  const { unlockEgg } = useEasterEggStore();

  const handleVeenaClick = () => {
    unlockEgg(EGG_IDS.MATRIARCH_VEENA);
    // Future: trigger overlay
    window.dispatchEvent(new CustomEvent('show-matriarch'));
  };

  return (
    <section className="relative w-full py-32 z-10">
      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-7xl">
        
        {/* Intro */}
        <div className="w-full flex flex-col items-center justify-center py-20 mb-24 relative">
          {/* Subtle Background Glow */}
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
            className="flex flex-col group lg:mt-32 w-full"
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
                className="absolute top-6 right-6 w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-[#D4FF00]/20 hover:border-[#D4FF00]/50 transition-all duration-500 z-20 tooltip-trigger group/btn"
                title="There's more to this story."
              >
                <img src="/assets/icons/veena-line-art.svg" alt="Veena" className="w-6 h-6 opacity-70 group-hover/btn:opacity-100 group-hover/btn:scale-110 transition-transform duration-300" />
              </button>
            </div>
            <div className="max-w-[28rem] mx-auto w-full">
              <h3 className="font-clash text-3xl text-white mb-2 tracking-tight">
                Revathi Kamath 
              </h3>
              <span className="text-gray-500 font-mono text-sm tracking-widest uppercase mb-6 block">Veena maestro · Entrepreneur</span>
              <p className="font-satoshi text-gray-400 text-lg leading-relaxed">
                She started a flower business with ₹500. Borrowed ₹5,000 from a friend to pitch Wipro. Left with a ₹45,000 contract.<br/><br/>
                Built Calyx — events for HP, Bosch, Leela Palace. Moved into landscaping: Chinnaswamy Stadium, Intel, CBRE. Planted over one lakh trees.<br/><br/>
                Appointed 7th Director of Rally For Rivers. Is currently writing her autobiography.<br/>
              </p>
              <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="text-gray-500 text-xs uppercase tracking-widest block mb-2">Her Instagram bio:</span>
                <span className="text-white italic font-garamond text-xl">'Environmentalist and Veena player.'</span><br/>
                <span className="text-gray-400 text-sm mt-3 block">No mention of her sons.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Chess */}
        <div className="mb-32">
          <motion.div 
            className="w-full min-h-[70vh] relative flex items-center justify-center overflow-hidden rounded-[2rem] bg-[#050505] group border border-white/10 shadow-2xl"
            style={{ cursor: "url('/assets/icons/chess-knight-cursor.svg'), auto" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            {/* Background Board */}
            <div className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-1000">
              <img 
                src="/assets/images/chess-board-dramatic.webp" 
                alt="Chess Board" 
                className="w-full h-full object-cover mix-blend-luminosity scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-transparent to-[#0A0A0F]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F]/80 via-transparent to-[#0A0A0F]/80" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full max-w-6xl px-6 md:px-12 py-24 flex flex-col items-center">
              
              <div className="inline-flex items-center space-x-3 mb-10 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <span className="w-2 h-2 rounded-full bg-accent-gold shadow-[0_0_10px_rgba(234,179,8,0.8)] animate-pulse" />
                <span className="font-mono text-xs tracking-widest text-gray-300 uppercase">Age 5 · National Level Competitor</span>
              </div>

              <h3 className="font-clash text-4xl md:text-5xl lg:text-6xl text-white text-center leading-[1.1] mb-16 drop-shadow-2xl">
                The dropout who studied <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-yellow-600 italic">chess</span>,<br className="hidden md:block"/> became the trader who studied <span className="text-[#D4FF00]">derivatives</span>.
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full text-left">
                
                {/* Left Glass Card */}
                <div className="p-8 md:p-10 rounded-[1.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.06] transition-colors duration-500 shadow-2xl h-full flex flex-col justify-center">
                  <p className="font-satoshi text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                    He dropped out partly to pursue a professional chess career. His idol was <span className="text-white font-medium">Garry Kasparov</span>. He competed at district, city, state, and national levels but ultimately fell short of the international tier.<br/><br/>
                    <span className="text-gray-500 text-sm font-mono tracking-widest uppercase">The Pattern Was The Same</span>
                  </p>
                </div>

                {/* Right Quote Area */}
                <div className="p-8 md:p-10 flex flex-col justify-center relative rounded-[1.5rem] bg-gradient-to-br from-accent-gold/10 to-transparent border border-accent-gold/20 backdrop-blur-sm h-full shadow-[0_0_40px_rgba(234,179,8,0.05)]">
                  <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-[url('/assets/textures/noise-overlay.png')] mix-blend-overlay pointer-events-none rounded-[1.5rem]" />
                  <p className="text-accent-gold/80 uppercase tracking-widest text-xs font-mono mb-6 flex items-center">
                    <span className="block w-6 h-[1px] bg-accent-gold/50 mr-3" />
                    What the game taught him
                  </p>
                  <blockquote className="font-garamond text-2xl md:text-4xl italic text-white leading-tight drop-shadow-lg">
                    "Chess teaches you how to work under a structure, in a system, but yet <span className="text-accent-gold">try and be creative within that system.</span>"
                    <br/><br/>
                    <span className="text-white/60 not-italic font-satoshi font-normal text-lg md:text-xl tracking-wide uppercase">That became everything.</span>
                  </blockquote>
                </div>

              </div>
              
            </div>
          </motion.div>
        </div>

        {/* The Exit / School */}
        <div className="flex flex-col md:flex-row items-center pt-24 pb-12">
          {/* Left Side: Dramatic Typography / Visual */}
          <div className="w-full md:w-1/2 p-6 flex justify-center md:justify-center items-center relative">
            {/* Ambient Background Glow matching the red theme */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ef5350]/10 blur-[100px] rounded-full pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-center relative z-10"
            >
              <h2 className="text-[10rem] md:text-[16rem] font-clash leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] filter drop-shadow">
                6<span className="text-[5rem] md:text-[8rem] text-white/50 ml-1">/100</span>
              </h2>
              <div className="mt-8 flex items-center justify-center space-x-4">
                <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#ef5350]" />
                <p className="font-mono text-sm tracking-[0.3em] text-[#ef5350] uppercase drop-shadow-[0_0_8px_rgba(239,83,80,0.5)]">
                  Mathematics Score
                </p>
                <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#ef5350]" />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-1/2 mt-16 md:mt-0 relative z-10 flex items-center">
            <motion.div 
              className="border-l-2 border-[#ef5350]/30 pl-8 md:pl-12 py-4 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Decorative Dot */}
              <div className="absolute -left-[5px] top-4 w-2 h-2 rounded-full bg-[#ef5350] shadow-[0_0_10px_#ef5350]" />
              
              <h3 className="font-clash text-3xl md:text-4xl text-white mb-6">Oxford Senior Secondary School</h3>
              <span className="font-mono text-sm tracking-widest text-gray-500 uppercase mb-8 block">JP Nagar, Bangalore</span>
              
              <div className="space-y-6 font-satoshi text-lg text-gray-400 leading-relaxed">
                <p>The school refused to let him sit for board exams. Reason: <span className="text-white">total disinterest in studies.</span></p>
                <p>Not because he couldn't do it. Because he was already thinking about something else.</p>
                
                <blockquote className="font-garamond italic text-2xl md:text-3xl text-white py-6 border-l-2 border-white/20 pl-6 my-8">
                  "I hated school. Always did.<br/>I had no plan when I dropped out — the only plan was to make money."
                </blockquote>
                
                <div className="pt-8 border-t border-white/5">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] mb-4 block text-[#ef5350]">His one regret</span>
                  <p className="text-gray-300">
                    "I have more regrets about having dropped out than people think. Not the education. The friendships. The best times in people's lives happen in college. I've never had that experience. Nor will I ever."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
