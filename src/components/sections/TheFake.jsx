import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TheFake() {
  return (
    <section data-chapter-id="the-fake" className="relative w-full py-40 z-10 min-h-screen flex flex-col justify-center bg-[#050505] overflow-hidden">

      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4FF00]/[0.03] blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]/95 z-10" />
        <img
          src="/assets/images/nikhil-call-centre-2003.webp" 
          alt="Call Centre 2003"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[rgba(5,5,5,0.8)] to-[#050505] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-[1400px] relative z-20">

        {/* Massive Typographic Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-32 max-w-5xl"
        >
          <div className="mb-8 flex items-center gap-6">
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4FF00] to-transparent rounded-full" />
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#D4FF00]">Origin: Bangalore, 2003</span>
          </div>

          <h2 className="font-clash text-6xl md:text-[8rem] lg:text-[10rem] text-white leading-[0.9] font-medium tracking-tight mb-6">
            He was 17.
          </h2>
          <h2 className="font-clash text-4xl md:text-[5rem] lg:text-[7rem] text-white/30 leading-[1] font-medium tracking-tight">
            The minimum age was 18.
          </h2>
        </motion.div>

        {/* Narrative Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">      

          {/* Left Column: The Job & The Trade */}
          <div className="lg:col-span-7 space-y-8">

            {/* The Setup Card with Birth Certificate Mockup */}
            <motion.div
              className="bg-[#0A0A0A] p-10 md:p-12 rounded-[2rem] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] group hover:border-white/20 transition-colors relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
               <span className="text-white/40 font-mono text-[11px] tracking-[0.2em] uppercase mb-8 block relative z-20">The Setup</span>
               
               {/* The Fake Certificate Visual - Positioned Absolutely to save space */}
               <div className="absolute right-[-20px] top-8 w-48 md:right-4 md:top-12 md:w-60 lg:w-64 shrink-0 z-10 hidden sm:block pointer-events-none">
                 <div className="absolute inset-0 bg-[#D4FF00]/20 blur-[50px] rounded-full" />
                 <img
                   src="/assets/props/fake-birth-certificate-mockup.png"      
                   alt="Forged Certificate"
                   className="w-full h-auto relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] rotate-6 pointer-events-auto transition-transform duration-500 hover:rotate-0"
                 />
               </div>

               <div className="relative z-20 flex flex-col">
                 <h3 className="font-satoshi text-2xl md:text-3xl text-white/90 leading-relaxed mb-10 font-medium sm:pr-40 md:pr-56 lg:pr-64">
                   He forged his birth certificate. Got a job at 24/7 (now [24]7.ai) in Bangalore. UK shift. Selling accidental health insurance to British customers. 4PM to 1AM.
                 </h3>

                 <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                   <div className="bg-[#D4FF00]/10 border border-[#D4FF00]/20 px-8 py-4 rounded-xl backdrop-blur-sm shrink-0">
                     <p className="text-[#D4FF00] font-clash text-4xl font-medium tracking-tight">₹8,000</p>
                     <p className="text-[#D4FF00]/60 font-mono text-[10px] uppercase tracking-widest mt-1">Per Month Salary</p>
                   </div>
                   <p className="font-satoshi text-white/50 text-lg leading-relaxed flex-1 sm:border-l-2 border-white/10 sm:pl-6 shrink">
                     While colleagues slept, he traded penny stocks with what was left of his salary. The market was open. He was in it before he was legally allowed to be.
                   </p>
                 </div>
               </div>
            </motion.div>

            {/* The Hook Card */}
            <motion.div
              className="bg-[#0A0A0A] p-10 md:p-12 rounded-[2rem] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
               <div className="absolute right-0 top-0 w-64 h-64 bg-white/[0.02] rounded-bl-full pointer-events-none" />
               <span className="text-white/40 font-mono text-[11px] tracking-[0.2em] uppercase mb-8 block">The Hook</span>
               <h3 className="font-clash text-4xl md:text-5xl text-white font-medium mb-6">The First Trade</h3>

               <div className="flex items-center gap-4 mb-8">
                 <div className="px-4 py-1.5 rounded bg-white/5 border border-white/10 font-mono text-white/60 text-xs">Marsoft</div>
                 <div className="text-white/30 text-sm">→</div>
                 <div className="px-4 py-1.5 rounded bg-white/5 border border-white/10 font-mono text-[#FF4444] text-xs">Bought ₹4</div>
                 <div className="text-white/30 text-sm">→</div>
                 <div className="px-4 py-1.5 rounded bg-[#D4FF00]/10 border border-[#D4FF00]/20 font-mono text-[#D4FF00] text-xs">Sold ₹20</div>
               </div>

               <div className="border-l-[3px] border-[#D4FF00] pl-6 py-2 mb-8 bg-gradient-to-r from-[#D4FF00]/5 to-transparent pr-4 rounded-r-lg">
                 <p className="font-satoshi text-white/80 text-lg md:text-xl italic leading-relaxed">
                   "There was absolutely no reason why it should have gone up. It was blind luck. But even if I were to lose money 20 times in the future... I knew this is a profession I would continue for the rest of my life."
                 </p>
               </div>

               <p className="font-satoshi text-white/60 text-xl font-medium">He was hooked. <span className="text-white">The ₹8,000 salary was already a side project.</span></p>
            </motion.div>

          </div>

          {/* Right Column: The Leverage & Prop */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">

            {/* The Manager Card */}
            <motion.div
              className="bg-[#D4FF00] p-10 md:p-12 rounded-[2rem] shadow-[0_0_50px_rgba(212,255,0,0.15)] relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
               <span className="text-black/50 font-mono text-[11px] tracking-[0.2em] uppercase mb-8 block">The Leverage</span>
               <h3 className="font-clash text-4xl md:text-5xl text-black font-medium mb-6 leading-tight">The Manager's Deal</h3>

               <p className="font-satoshi text-black/80 text-xl leading-relaxed mb-8">
                 He got so good that his call centre manager stopped requiring him to show up. Just marked him present every day.
                 <br/><br/><span className="font-semibold text-black">Let him manage the entire team's money instead.</span>
               </p>

               <div className="bg-black/5 border border-black/10 p-6 rounded-2xl">
                 <p className="font-satoshi text-black/70 text-lg leading-relaxed mix-blend-multiply">
                   Then an American investor gave him ₹25 lakhs to manage. The call centre was never really about the call centre.
                 </p>
               </div>
            </motion.div>

            {/* The Quote Block */}
            <motion.div
              className="bg-[#0A0A0A] p-10 md:p-12 rounded-[2rem] border border-white/10 relative overflow-hidden flex items-center justify-center min-h-[300px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
               <span className="absolute top-6 left-6 text-white/10 font-serif text-[8rem] leading-none">"</span>
               <p className="font-garamond italic text-3xl md:text-4xl text-white/90 leading-snug text-center relative z-10 px-4">
                 When you move away from the family ecosystem and the judgement of relatives, you get down to the real stuff.
               </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
