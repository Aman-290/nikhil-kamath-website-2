import React from 'react';
import { motion } from 'framer-motion';

export default function TheGiving() {
  return (
    <section className="relative w-full py-32 z-10 min-h-screen overflow-hidden flex flex-col justify-center">
      
      {/* Background Images */}
      <div className="absolute inset-0 z-0 bg-primary-bg">
        <img 
          src="/assets/images/giving-pledge-moment.webp" 
          alt="Giving Pledge signing" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40" 
        />
        <img 
          src="/assets/textures/giving-pledge-bg.webp" 
          alt="Giving Pledge Letter" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/70 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-7xl relative z-10">
        
        {/* Intro */}
        <div className="max-w-4xl mb-24">
          <motion.h2 
            className="font-clash text-5xl md:text-7xl lg:text-8xl text-primary-text leading-tight drop-shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            He pledged half of everything.<br/>
            <span className="text-secondary-text">At 36.</span><br/>
            <span className="text-accent-chartreuse text-4xl md:text-6xl">Before most people have made their first crore.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Main Story */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="font-satoshi text-lg text-primary-text leading-relaxed p-8 bg-surface-bg/60 backdrop-blur-md rounded-2xl border border-white/10">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-mono uppercase tracking-widest text-[#D4FF00] mb-6">June 2023. The Giving Pledge.</span>
              <p className="mb-4">Founded by Warren Buffett, Bill Gates, and Melinda French Gates.</p>
              <p className="mb-6">India's fourth signatory. The youngest it had ever seen.</p>
              
              <blockquote className="border-l-2 border-accent-gold pl-6 py-2 my-8">
                <p className="font-garamond italic text-2xl text-accent-gold/90 leading-snug">
                  "I cannot think of a more personally rewarding and appropriate use of wealth than to give while one is living.<br/><br/>
                  I cannot predict when or if I may live to see the change I hope to create. But what I can do is act decisively while the window exists."
                </p>
              </blockquote>
              
              <div className="mt-8 flex items-center justify-between">
                <span className="font-mono text-sm uppercase tracking-widest text-secondary-text">Recognized By</span>
                <span className="font-clash text-2xl text-primary-text tracking-wider">TIME100 <span className="font-satoshi font-light block text-xs">Philanthropy 2025</span></span>
              </div>
            </div>
          </motion.div>

          {/* Initiatives */}
          <motion.div 
             className="lg:col-span-7 space-y-8"
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.4 }}
          >
            
            {/* Rainmatter */}
            <div className="bg-gradient-to-r from-accent-green/10 to-transparent p-8 rounded-2xl border-l-4 border-accent-green">
               <h3 className="font-clash text-3xl text-primary-text mb-2">Rainmatter Foundation</h3>
               <span className="text-accent-green font-mono text-sm tracking-widest uppercase mb-4 block">$200 million committed.</span>
               
               <p className="font-satoshi text-primary-text/90 mb-6 leading-relaxed">
                 Climate action. Afforestation. Ecological restoration. Rural livelihoods.
               </p>
               
               <div className="space-y-4 font-satoshi text-secondary-text text-sm mb-6">
                 <p className="border-l border-white/20 pl-4">
                   <strong className="text-primary-text">How it started:</strong> In 2013, Kailash Nadh set up waste segregation in the Zerodha office. One man's climate grief sparked years of conversations with Nithin. Those conversations became a $200 million foundation.
                 </p>
                 <p className="border-l border-white/20 pl-4">
                   <strong className="text-primary-text">Investment structure:</strong> ₹1,000 crore AIF. 15-year duration. No exit mandates. No LP pressure. Patient capital for problems that don't have quarterly solutions.
                 </p>
               </div>
               
               <div className="bg-black/40 p-4 rounded-lg inline-block font-mono text-sm text-primary-text border border-white/5">
                 In 2024: ₹120 crore in climate tech across 15 deals — while other Indian VCs retreated from the sector.
               </div>
            </div>

            {/* YIPP */}
            <div className="bg-surface-bg/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 border-l-4 border-white">
               <h3 className="font-clash text-3xl text-primary-text mb-2">YIPP</h3>
               <span className="text-secondary-text font-mono text-sm tracking-widest uppercase mb-4 block">Young India Philanthropic Pledge</span>
               
               <p className="font-satoshi text-primary-text mb-6">
                 He felt the Giving Pledge's bar was too high for younger Indian wealth creators. So he invented a junior version.
               </p>
               
               <div className="grid grid-cols-2 gap-4 mb-6">
                 <div className="bg-primary-bg p-4 rounded text-center">
                   <span className="block text-2xl font-clash text-primary-text">25%</span>
                   <span className="text-xs font-mono text-secondary-text uppercase tracking-widest">Min. Wealth Donated</span>
                 </div>
                 <div className="bg-primary-bg p-4 rounded text-center">
                   <span className="block text-2xl font-clash text-primary-text">₹1 Cr</span>
                   <span className="text-xs font-mono text-secondary-text uppercase tracking-widest">Annual Minimum</span>
                 </div>
               </div>
               
               <p className="font-garamond italic text-xl text-primary-text">
                 "As a young philanthropist, I expect to have more questions than answers."
               </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
