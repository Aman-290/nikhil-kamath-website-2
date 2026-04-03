import React from 'react';
import { motion } from 'framer-motion';
import StartupConstellation from '../ui/StartupConstellation';

export default function TheEcosystem() {
  return (
    <section className="relative w-full py-32 z-10 min-h-screen">
      
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-primary-bg/80 z-10" />
        <img 
          src="/assets/images/tranquility-office.webp" 
          alt="Tranquility Office" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-bg via-transparent to-primary-bg z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-7xl relative z-20">
        
        {/* Intro */}
        <motion.div 
          className="max-w-3xl mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-clash text-5xl md:text-7xl text-primary-text mb-6">The Ecosystem</h2>
          <p className="font-satoshi text-2xl text-secondary-text leading-relaxed">
            Zerodha was never the destination.<br/>
            Wait, let me rephrase that. It was the instrument.<br/>
            <span className="text-primary-text">What he built with it tells a different story.</span>
          </p>
        </motion.div>

        {/* True Beacon & Gruhas Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          
          {/* True Beacon */}
          <motion.div 
            className="bg-surface-bg/40 backdrop-blur-sm border-t-4 border-accent-gold p-8 md:p-12 rounded-b-2xl shadow-2xl relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-accent-gold/10 to-transparent pointer-events-none" />
            <span className="text-accent-gold font-mono text-sm tracking-widest uppercase mb-4 block">Founded Sept 2019</span>
            <h3 className="font-clash text-4xl text-primary-text mb-6">True Beacon</h3>
            
            <div className="space-y-4 font-satoshi text-secondary-text leading-relaxed">
              <p>With Richard Pattle LVO (former Vice Chairman, Standard Chartered Private Bank).</p>
              <ul className="space-y-2 border-l border-white/10 pl-4 py-2 my-6 text-primary-text">
                <li><span className="text-secondary-text">Client requirement:</span> ₹10 crore minimum</li>
                <li><span className="text-secondary-text">Management fee:</span> Zero</li>
                <li><span className="text-secondary-text">Performance fee:</span> 10% on annual profits</li>
                <li><span className="text-secondary-text">Entry/Exit load:</span> Zero</li>
              </ul>
              <p className="font-medium text-primary-text pb-4 border-b border-white/5">"If you don't make money, we don't either."</p>
              <p>That is not how this industry works. That was the point.</p>
              <p>Strategy: 60% long-only in fundamentally strong large-caps. 40% long-short derivative portfolio via algorithmic trading. Objective: outperform NIFTY50 by 6% per annum.</p>
              <div className="mt-6 inline-block bg-accent-gold/20 text-accent-gold px-4 py-2 rounded font-mono text-sm">
                2020 result: 32% outperformance. GIFT City's first operational hedge fund.
              </div>
            </div>
          </motion.div>

          {/* Gruhas */}
          <motion.div 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
              <img src="/assets/images/gruhas-office-greenery.png" alt="Gruhas" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-accent-chartreuse font-mono text-sm tracking-widest uppercase mb-2 block">Co-founded 2021 with Abhijeet Pai</span>
              <h3 className="font-clash text-4xl text-primary-text mb-4">Gruhas</h3>
              <p className="font-satoshi text-primary-text text-lg mb-6 leading-relaxed">
                PropTech. CleanTech. Consumer Brands. AI & DeepTech.<br/>
                64 portfolio companies. 1 unicorn: Licious.<br/>
                Earth Fund: ₹300 crore for sustainability.
              </p>
              <div className="space-y-3 font-satoshi text-sm text-secondary-text bg-surface-bg/50 p-6 rounded-xl border border-white/5">
                <p><span className="text-primary-text font-medium">Nothing (Carl Pei)</span> — $21M in Series C. His largest single check.</p>
                <p><span className="text-primary-text font-medium">Rare Rabbit</span> — premium apparel. The brand for the new Indian consumer.</p>
                <p><span className="text-primary-text font-medium">SolarSquare</span> — India's #1 home rooftop solar.</p>
                <p><span className="text-primary-text font-medium">Ather Energy</span> — 1.85% stake. Bengaluru-made EVs.</p>
                <p><span className="text-primary-text font-medium">D'yavol Spirits</span> — 5% stake. Aryan & Shah Rukh Khan's whisky.</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Network Constellation Map */}
        <div className="mb-32">
          <h3 className="font-clash text-3xl text-primary-text mb-8 text-center">Startup Constellation</h3>
          <StartupConstellation />
        </div>

        {/* WTFund & Foundery */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* WTFund */}
          <motion.div 
            className="lg:col-span-7 bg-surface-bg/40 p-8 md:p-12 rounded-2xl border border-white/5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 w-full h-48 rounded-lg overflow-hidden flex items-center bg-black">
              <img src="/assets/images/young-founders-goa.webp" alt="WTFund founders" className="w-full opacity-60 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-700" />
            </div>
            <h3 className="font-clash text-4xl text-primary-text mb-4">WTFund</h3>
            <span className="text-secondary-text font-mono text-sm uppercase block mb-6">Launched April 15, 2024. For founders under 25.</span>
            
            <p className="font-satoshi text-lg text-primary-text leading-relaxed border-l-2 border-accent-chartreuse pl-6 mb-8">
              ₹20 lakh. No equity taken. No strings attached. You keep 100% of your company.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-satoshi text-sm text-secondary-text mb-8">
              <li className="bg-black/30 p-4 rounded text-primary-text">Cancer detection via saliva test: ₹100, under 5 minutes</li>
              <li className="bg-black/30 p-4 rounded text-primary-text">Rehabilitation robots for neurological recovery</li>
              <li className="bg-black/30 p-4 rounded text-primary-text">Hands-free audio computing earbuds</li>
              <li className="bg-black/30 p-4 rounded text-primary-text">AI diagnostics for pathology labs</li>
            </ul>

            <blockquote className="font-garamond italic text-xl text-primary-text">
              "Early-stage funding is often impossible because most investors want to see proof of concept before they step in. But what about when all you've got is an idea and conviction?"
            </blockquote>
          </motion.div>

          {/* The Foundery */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-8 border border-white/10 rounded-2xl bg-gradient-to-br from-surface-bg to-primary-bg">
              <h3 className="font-clash text-3xl text-primary-text mb-4">The Foundery</h3>
              <p className="font-satoshi text-secondary-text text-sm mb-6 pb-6 border-b border-white/10">
                Co-founded with Kishore Biyani (Future Group) + Ronnie Screwvala. December 2024.
              </p>
              
              <ul className="space-y-4 font-satoshi text-primary-text text-lg leading-relaxed mb-8">
                <li className="flex gap-4">
                  <span className="text-accent-chartreuse">—</span>
                  <span>90 days. Residential campus.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-chartreuse">—</span>
                  <span>Not a classroom. Not an incubator. A co-founder factory.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-chartreuse">—</span>
                  <span>You arrive with an idea. You leave as a co-founder of a funded business.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-chartreuse">—</span>
                  <span>Seed funding up to ₹4 crore.</span>
                </li>
              </ul>

              <div className="mt-8 bg-black/40 p-6 rounded-xl border border-white/5">
                <span className="text-xs uppercase tracking-widest text-secondary-text mb-2 block">The School of Life</span>
                <p className="font-satoshi text-sm text-primary-text/80 leading-relaxed italic">
                  Resilience, decision-making, founder psychology.
                  "MBAs create managers. We need people who can build, break, fail, and rebuild. The Foundery is for them."
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
