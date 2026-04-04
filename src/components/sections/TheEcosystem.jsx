import React from 'react';
import { motion } from 'framer-motion';
import StartupConstellation from '../ui/StartupConstellation';

export default function TheEcosystem() {
  return (
    <section id="section-ecosystem" className="relative w-full py-32 z-10 min-h-screen">
      
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#050505]/95 z-10" />
        <img 
          src="/assets/images/tranquility-office.webp" 
          alt="Tranquility Office" 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10" />
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
          <h2 className="font-clash text-5xl md:text-7xl text-white mb-6 font-medium tracking-tight">The Ecosystem</h2>
          <p className="font-satoshi text-2xl text-white/50 leading-relaxed max-w-2xl">
            Zerodha was the instrument.<br/>
            <span className="text-white font-medium">What he built with it tells a different story.</span>
          </p>
        </motion.div>

        {/* True Beacon & Gruhas Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          
          {/* True Beacon */}
          <motion.div 
            className="group relative bg-[#0A0A0A] border border-white/5 p-10 md:p-12 rounded-[2rem] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4FF00]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10">
              <span className="text-white/40 font-mono text-[10px] tracking-[0.2em] uppercase mb-6 block">Founded Sept 2019</span>
              <h3 className="font-clash text-4xl text-white mb-8 font-medium">True Beacon</h3>
              
              <div className="space-y-6 font-satoshi text-white/60 leading-relaxed text-sm md:text-base">
                <p>With Richard Pattle LVO (former Vice Chairman, Standard Chartered Private Bank).</p>
                <ul className="space-y-3 border-l pb-2 border-white/10 pl-6 my-8">
                  <li><span className="text-white/40 uppercase tracking-widest text-[10px] mr-3">Client req.</span> <span className="text-white">₹10 crore min</span></li>
                  <li><span className="text-white/40 uppercase tracking-widest text-[10px] mr-3">Mgmt fee</span> <span className="text-white">Zero</span></li>
                  <li><span className="text-white/40 uppercase tracking-widest text-[10px] mr-3">Perform fee</span> <span className="text-white">10% on profits</span></li>
                  <li><span className="text-white/40 uppercase tracking-widest text-[10px] mr-3">Load</span> <span className="text-white">Zero Entry/Exit</span></li>
                </ul>
                <p className="font-medium text-white italic text-lg border-b border-white/5 pb-6">"If you don't make money, we don't either."</p>
                <p className="pt-2">That is not how this industry works. That was the point. Strategy: 60% long-only in fundamentally strong large-caps. 40% long-short derivative portfolio via algorithmic trading.</p>
                <div className="mt-8 inline-flex items-center gap-3 bg-[#D4FF00]/10 text-[#D4FF00] px-5 py-3 rounded-full font-mono text-[11px] uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse"/>
                  32% outperformance (2020)
                </div>
              </div>
            </div>
          </motion.div>

          {/* Gruhas */}
          <motion.div 
            className="group relative bg-[#0A0A0A] border border-white/5 p-10 md:p-12 rounded-[2rem] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col">
              <span className="text-white/40 font-mono text-[10px] tracking-[0.2em] uppercase mb-6 block">Co-founded 2021 with Abhijeet Pai</span>
              <div className="flex justify-between items-start mb-8">
                <h3 className="font-clash text-4xl text-white font-medium">Gruhas</h3>
                <div className="bg-white/5 px-4 py-2 rounded-full border border-white/10 font-mono text-[10px] text-white/50 tracking-widest">
                  64 PORTFOLIO COS.
                </div>
              </div>
              
              <p className="font-satoshi text-white/60 text-base mb-10 leading-relaxed">
                PropTech. CleanTech. Consumer Brands. DeepTech.<br/>
                <span className="text-white block mt-2">Earth Fund: ₹300 crore for sustainability.</span>
              </p>
              
              <div className="mt-auto space-y-2">
                {[
                  { name: "Nothing", desc: "$21M in Series C. His largest single check.", color: "bg-[#8B5CF6]/20 border-[#8B5CF6]/30 text-[#8B5CF6]" },
                  { name: "Rare Rabbit", desc: "Premium apparel, the new Indian consumer.", color: "bg-[#F59E0B]/20 border-[#F59E0B]/30 text-[#F59E0B]" },
                  { name: "SolarSquare", desc: "India's #1 home rooftop solar.", color: "bg-[#10B981]/20 border-[#10B981]/30 text-[#10B981]" },
                  { name: "Ather Energy", desc: "1.85% stake. Bengaluru-made EVs.", color: "bg-[#10B981]/20 border-[#10B981]/30 text-[#10B981]" },
                  { name: "D'yavol", desc: "5% stake. Luxury lifestyle.", color: "bg-[#F59E0B]/20 border-[#F59E0B]/30 text-[#F59E0B]" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] transition-colors">
                    <span className={`px-2.5 py-1 rounded text-[10px] font-mono tracking-widest border font-medium ${item.color} whitespace-nowrap`}>
                      {item.name}
                    </span>
                    <span className="text-sm font-satoshi text-white/50">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Network Constellation Map */}
        <div className="mb-40">
          <div className="flex items-center gap-6 mb-12">
            <h3 className="font-clash text-4xl text-white font-medium">Startup Constellation</h3>
            <div className="h-px bg-white/10 flex-grow" />
          </div>
          <StartupConstellation />
        </div>

        {/* WTFund & Foundery */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch pt-20 border-t border-white/5">
          
          {/* WTFund */}
          <motion.div 
            className="lg:col-span-7 bg-[#0A0A0A] p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-10 w-full h-[240px] rounded-xl overflow-hidden relative group bg-black">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img 
                src="/assets/images/young-founders-goa.webp" 
                alt="WTFund founders" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
            
            <h3 className="font-clash text-5xl text-white font-medium mb-3 tracking-tight">WTFund</h3>
            <span className="text-white/40 font-mono text-[11px] uppercase tracking-widest block mb-12">Launched April 15, 2024. For founders under 25.</span>
            
            <div className="border-l-[3px] border-[#D4FF00] pl-6 mb-12">
              <p className="font-satoshi text-xl text-white leading-relaxed font-normal">
                ₹20 lakh. No equity taken. No strings attached. You keep 100% of your company.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
              {[
                "Cancer detection via saliva test: ₹100, under 5 minutes",
                "Rehabilitation robots for neurological recovery",
                "Hands-free audio computing earbuds",
                "AI diagnostics for pathology labs"
              ].map((text, i) => (
                <div key={i} className="bg-[#111] border border-white/5 p-6 rounded-xl flex items-center min-h-[100px]">
                  <p className="font-satoshi text-[15px] leading-snug text-white/70">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* The Foundery */}
          <motion.div 
            className="lg:col-span-5 bg-[#0A0A0A] p-8 md:p-12 border border-white/10 rounded-[2rem] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-clash text-5xl text-white font-medium mb-4 tracking-tight">The Foundery</h3>
            <p className="font-satoshi text-white/50 text-[15px] leading-relaxed mb-12 pb-10 border-b border-white/10">
              Co-founded with Kishore Biyani (Future Group) + Ronnie Screwvala. December 2024.
            </p>
            
            <ul className="space-y-8 font-satoshi text-white text-[17px] leading-snug mb-16 flex-grow">
              <li className="flex gap-6 items-start">
                <span className="text-[#D4FF00] font-mono mt-1 text-xl">—</span>
                <span className="opacity-90">90 days. Residential campus.</span>
              </li>
              <li className="flex gap-6 items-start">
                <span className="text-[#D4FF00] font-mono mt-1 text-xl">—</span>
                <span className="opacity-90">Not a classroom. Not an incubator. A co-founder factory.</span>
              </li>
              <li className="flex gap-6 items-start">
                <span className="text-[#D4FF00] font-mono mt-1 text-xl">—</span>
                <span className="opacity-90">You arrive with an idea. You leave as a co-founder of a funded business.</span>
              </li>
              <li className="flex gap-6 items-start">
                <span className="text-[#D4FF00] font-mono mt-1 text-xl">—</span>
                <span className="opacity-90">Seed funding up to ₹4 crore.</span>
              </li>
            </ul>

            <div className="bg-[#111] p-8 rounded-xl border border-white/5 mt-auto relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#D4FF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4FF00] mb-4 block font-mono">The School of Life</span>
              <p className="font-satoshi text-[15px] text-white/60 leading-relaxed italic border-l-2 border-white/10 pl-4">
                Resilience, decision-making, founder psychology.
                <br/><br/>
                <span className="text-white/90">"MBAs create managers. We need people who can build, break, fail, and rebuild. The Foundery is for them."</span>
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
