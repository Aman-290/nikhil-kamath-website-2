import React from 'react';
import { motion } from 'framer-motion';

export default function TheConversations() {
  return (
    <section id="section-conversations" data-chapter-id="conversations" className="relative w-full z-10 py-32 bg-[#050505]">
      
      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-7xl relative">
        
        {/* Two-column hero block */}
        <div className="flex flex-col lg:flex-row w-full rounded-[2rem] border border-white/10 overflow-hidden bg-[#0A0A0A] mb-16">
          
          {/* Left column (60% width on desktop, full width mobile) */}
          <div className="relative w-full lg:w-[60%] h-[400px] lg:h-auto overflow-hidden">
            <motion.img 
              src="/assets/images/wtf-podcast-studio.webp" 
              alt="WTF Podcast Studio" 
              className="absolute inset-0 w-full h-full object-cover transform-gpu"
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.04 }}
              transition={{ duration: 8, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right column (40% width) */}
          <div className="w-full lg:w-[40%] p-10 md:p-14 flex flex-col justify-center relative z-10 bg-[#050505]">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-clash text-5xl lg:text-6xl text-white mb-8 leading-[1.1] tracking-tight">
                He records everything<br/>
                <span className="text-white/50">on one day per month.</span>
              </h2>
              
              <div className="space-y-4 font-satoshi text-lg text-white/60 border-l-[3px] border-[#D4FF00] pl-6 mb-10">
                <p>His approach: play the curious learner. Ask the questions you'd be embarrassed to ask. The basic ones. The ones with no assumed expertise.</p> 
                <p className="text-white font-medium">Guests speak unfiltered because they don't know where to stop. That's the design.</p>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="bg-[#111] px-5 py-3 rounded-xl border border-white/5">
                  <span className="block text-3xl font-mono text-white mb-1">2.08M</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Subscribers</span>
                </div>
                <div className="bg-[#111] px-5 py-3 rounded-xl border border-white/5">
                  <span className="block text-3xl font-mono text-white mb-1">987M</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Total Views</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Three defining stat blocks */}
        <div className="w-full flex flex-col md:flex-row border border-white/10 rounded-[2rem] bg-[#0A0A0A] overflow-hidden mb-12">
          
          <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center">
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase mb-4 block">PM NARENDRA MODI</span>
            <span className="font-clash text-3xl lg:text-4xl text-white tracking-tight">First-ever podcast appearance</span>
          </div>

          <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center">
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase mb-4 block">7,000,000</span>
            <span className="font-clash text-3xl lg:text-4xl text-white tracking-tight">Views. Elon Musk episode. Days.</span>
          </div>

          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase mb-4 block">ONE DAY</span>
            <span className="font-clash text-3xl lg:text-4xl text-white tracking-tight">Per month. That's the operation.</span>
          </div>
          
        </div>

        {/* Bryan Johnson footnote */}
        <div className="w-full text-center">
          <p className="font-satoshi italic text-white/30 text-sm">
            "Bryan Johnson walked out mid-episode. Cited Mumbai air quality. Called Nikhil a courteous host."
          </p>
        </div>

      </div>

    </section>
  );
}
