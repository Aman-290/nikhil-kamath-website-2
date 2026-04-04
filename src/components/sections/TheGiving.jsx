import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TheGiving() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section id="section-giving" className="relative w-full z-10 min-h-[120vh] bg-[#050505] flex flex-col justify-center overflow-hidden py-32 rounded-t-[3rem] shadow-[0_-20px_60px_rgba(0,0,0,0.8)] border-t border-white/5">

      {/* Dynamic Background with Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/textures/giving-pledge-bg.webp" 
          alt="Giving Pledge Background"
          className="w-full h-full object-cover opacity-[0.03] mix-blend-luminosity"
        />
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-gold/5 blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-white/10 blur-[120px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 md:px-16 xl:px-24 max-w-[1400px] relative z-10">

        {/* Massive Hero Statement with Moment Image */}
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center max-w-7xl mx-auto mb-32">
          
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12">
              <img src="/assets/logos/logo-giving-pledge.webp" alt="The Giving Pledge" className="h-16 opacity-60 mb-10 mix-blend-screen" />
            </div>

            <h2 className="font-clash text-5xl md:text-8xl lg:text-[7rem] text-white leading-[0.9] tracking-tight mb-8 drop-shadow-xl">
              He pledged half <br className="hidden md:block"/>
              <span className="text-white/30 italic font-medium">of everything.</span>
            </h2>
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <span className="font-mono text-5xl md:text-7xl text-white tracking-tighter drop-shadow-md shadow-white/5">At 36.</span>
              <p className="font-satoshi text-xl md:text-2xl text-gray-400 max-w-lg leading-snug border-l border-white/10 pl-6">
                Before most people have made their first crore. India's youngest ever signatory to The Giving Pledge.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/3 shrink-0 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-white/10 blur-[60px] rounded-full mix-blend-screen z-0" />
            <div className="relative z-10 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] aspect-square lg:aspect-[4/5] bg-[#0A0A0A] group">
              <img src="/assets/images/giving-pledge-moment.webp" alt="Giving Pledge Moment" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <p className="absolute bottom-6 left-6 text-white/50 font-mono text-[10px] tracking-[0.2em] uppercase">The Commitment</p>
            </div>
          </motion.div>

        </div>

        {/* Minimalist Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">       

          {/* Metric Card 1 */}
          <motion.div
            className="group relative p-10 rounded-3xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-colors duration-500 overflow-hidden flex flex-col justify-between min-h-[360px] shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-white mb-4 block">The Giving Pledge</span>
              <h3 className="font-clash text-4xl text-white mb-2 tracking-tight">4th Signatory</h3>
              <p className="font-satoshi text-gray-500 text-sm">Joining Gates and Buffett.</p>
            </div>
            <p className="font-garamond italic text-2xl md:text-3xl text-gray-300 leading-snug pt-8 border-t border-white/5">
              "I cannot predict if I may live to see the change I hope to create. But I can act decisively."
            </p>
          </motion.div>

          {/* Metric Card 2 */}
          <motion.div
            className="group relative p-10 rounded-3xl bg-gradient-to-b from-white/40/10 to-transparent border border-white/10 hover:border-white/30 transition-colors duration-500 overflow-hidden flex flex-col justify-between min-h-[360px] shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <img src="/assets/logos/logo-rainmatter.webp" alt="Rainmatter" className="h-6 opacity-80 mix-blend-screen" />
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-clash text-5xl lg:text-7xl text-white tracking-tight">$200</span>
                <span className="font-clash text-3xl text-white/60">M</span>
              </div>
              <h3 className="font-satoshi text-lg text-white font-medium">Committed Capital</h3>
            </div>
            <div className="pt-8 space-y-3 relative z-10">
              <p className="font-satoshi text-gray-400 text-sm leading-relaxed">
                Climate action. Afforestation. Ecological restoration. Rural livelihoods.
              </p>
              <div className="inline-flex py-1.5 px-3 rounded-md bg-black border border-white/10 font-mono text-[10px] text-gray-300 uppercase tracking-widest mt-2">
                15-year duration • No exit mandate
              </div>
            </div>
          </motion.div>

          {/* Metric Card 3 */}
          <motion.div
            className="group relative p-10 rounded-3xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-colors duration-500 overflow-hidden flex flex-col justify-between min-h-[360px] shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-white/50 mb-4 block">Y.I.P.P.</span>
              <h3 className="font-clash text-3xl text-white mb-4 tracking-tight">Young India <br/>Philanthropic Pledge</h3>
              <p className="font-satoshi text-gray-500 text-sm mb-6 leading-relaxed">
                He felt the Giving Pledge's bar was too high for younger wealth creators, so he invented a junior version.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/10 rounded-[1rem] overflow-hidden border border-white/10 mt-auto">
              <div className="bg-[#111] p-4 lg:p-5 text-center group-hover:bg-[#151515] transition-colors">
                <span className="block text-2xl lg:text-3xl font-clash text-white mb-1 tracking-tight">25%</span>
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Min. Donated</span>
              </div>
              <div className="bg-[#111] p-4 lg:p-5 text-center group-hover:bg-[#151515] transition-colors">
                <span className="block text-2xl lg:text-3xl font-clash text-white mb-1 tracking-tight">₹1 Cr</span>
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Annual Min.</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
