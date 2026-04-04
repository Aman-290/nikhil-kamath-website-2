import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import LottiePlayer from '../ui/LottiePlayer';
import AnimatedText from '../ui/AnimatedText';
import CountUpStat from '../ui/CountUpStat';
import TiltCard from '../ui/TiltCard';

export default function TheBigSpike() {
  const [coffeeAnim, setCoffeeAnim] = useState(null);

  useEffect(() => {
    fetch('/assets/animations/coffee-fill-anim.json')
      .then(res => res.json())
      .then(data => setCoffeeAnim(data))
      .catch(err => console.error("Could not load coffee animation", err));     
  }, []);

  return (
    <section data-chapter-id="the-big-spike" className="relative w-full z-10 bg-[#050505] overflow-hidden">     

      {/* Background ambient glow setup */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

      {/* Intro Blackout Moment */}
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center relative px-6 py-16">
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 opacity-20 pointer-events-none mix-blend-screen filter blur-[2px]">
           {coffeeAnim && <LottiePlayer animationData={coffeeAnim} loop={false} className="w-64 h-64" />}
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4FF00] opacity-[0.04] blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-6 relative z-10 w-full max-w-5xl"
        >
          <div className="flex flex-col items-center justify-center space-y-6"> 
            <AnimatedText
              mode="split-chars"
              text="August 15, 2010."
              tag="h2"
              className="font-clash text-6xl md:text-[8rem] text-white/90 leading-[1] font-medium tracking-tight drop-shadow-xl"
              stagger={0.03}
            />
            <AnimatedText
              mode="split-words"
              text="Independence Day."
              tag="h2"
              className="font-clash text-5xl md:text-[6rem] text-white/40 leading-[1.1] font-medium tracking-tight"
              delay={0.5}
            />
            <AnimatedText
              mode="split-chars"
              text="Zero Barriers."
              tag="h2"
              className="font-clash text-7xl md:text-[9rem] text-[#D4FF00] leading-[1] font-bold tracking-tight mt-12 drop-shadow-[0_0_30px_rgba(212,255,0,0.3)]"
              delay={0.8}
              stagger={0.04}
            />
          </div>

          <div className="mt-12 pt-8 flex flex-col items-center justify-center gap-8">
             <div className="w-[1px] h-32 bg-gradient-to-b from-[#D4FF00] to-transparent" />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-[1400px] py-20 relative z-20">

        {/* Origin Story Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-40">

          {/* New Image Column for First Office */}
          <motion.div
            className="lg:col-span-5 relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
               <div className="absolute inset-0 bg-[#D4FF00]/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <img src="/assets/images/zerodha-first-office-2010.webp" alt="Zerodha First Office 2010" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
               <div className="absolute bottom-8 left-8 right-8 z-20">
                 <p className="text-white font-mono text-[10px] tracking-[0.3em] uppercase mb-2">Bangalore, 2010</p>
                 <p className="text-white/80 font-clash text-2xl font-medium tracking-tight">The 600 sq ft office where it all started.</p>
               </div>
             </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              className="group bg-[#0A0A0A] p-10 md:p-12 rounded-[2rem] border border-white/10 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex-1"        
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4FF00]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <span className="text-white/40 font-mono text-[11px] tracking-[0.2em] uppercase mb-8 block">The Etymology</span>
              
              <div className="flex flex-col xl:flex-row gap-8 xl:items-start mb-10">
                <div className="flex-1">
                  <h3 className="font-clash text-4xl sm:text-5xl text-white mb-6 font-medium">
                     'Zero' + 'Rodha' <br/><span className="text-white/30 text-2xl sm:text-3xl mt-2 block">(Sanskrit: barrier)</span>
                  </h3>
                  <p className="font-satoshi text-lg sm:text-xl text-white/60 leading-relaxed border-l-[3px] border-white/10 pl-6">
                    Named on the day India declared independence from colonial rule. They were declaring independence from the Indian brokerage cartel.
                  </p>
                </div>
                
                {/* Kamath Brothers Working Image embedded here */}
                <div className="w-full xl:w-48 h-48 rounded-xl overflow-hidden shrink-0 border border-white/10 relative">
                  <div className="absolute inset-0 bg-[#D4FF00]/5 mix-blend-overlay" />
                  <img src="/assets/images/kamath-brothers-working.webp" alt="Brothers Working" className="w-full h-full object-cover opacity-80" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-[#111] border border-white/5 p-6 rounded-2xl flex flex-col sm:flex-row gap-6 items-start text-sm">
                    <div className="text-white/40 uppercase tracking-widest font-mono shrink-0 text-xs mt-1 w-24">Cartel</div>
                    <div className="font-satoshi text-white/70 text-base leading-relaxed">
                        <del className="opacity-40 text-white/50">0.5% per trade.</del><br/>
                        On ₹1 lakh × 100 trades/year:<br/>
                        <span className="text-white/90">₹50,000 in fees alone.</span> Before a single rupee of profit.
                    </div>
                </div>
                <div className="bg-[#D4FF00]/10 border border-[#D4FF00]/20 p-6 rounded-2xl flex flex-col sm:flex-row gap-6 items-start text-sm backdrop-blur-sm"> 
                    <div className="text-[#D4FF00] uppercase tracking-widest font-mono shrink-0 text-xs mt-1 w-24">The Fix</div>
                    <div className="font-satoshi text-[#D4FF00] font-medium text-lg leading-relaxed">
                        ₹20 flat fee.<br/>Zero brokerage on equity delivery.      
                    </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group bg-[#0A0A0A] p-10 md:p-12 rounded-[2rem] border border-white/10 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
               <span className="text-white/40 font-mono text-[11px] tracking-[0.2em] uppercase mb-8 block">The Cost</span>
               <h3 className="font-clash text-5xl md:text-6xl text-white mb-10 font-medium tracking-tight">₹10 Lakh</h3>
               <ul className="space-y-5 font-mono text-white/60 mb-10 flex-grow text-sm sm:text-base">
                 <li className="flex justify-between border-b border-white/5 pb-4">
                   <span>Website Development</span>
                   <span className="text-white font-medium">₹2.5 Lakh</span>      
                 </li>
                 <li className="flex justify-between border-b border-white/5 pb-4">
                   <span>Office Interiors</span>
                   <span className="text-white font-medium">₹5.0 Lakh</span>      
                 </li>
                 <li className="flex justify-between border-b border-white/5 pb-4">
                   <span>Miscellaneous</span>
                   <span className="text-white font-medium">₹2.5 Lakh</span>      
                 </li>
               </ul>

               <div className="border-l-[4px] border-[#D4FF00] pl-8 py-4 bg-gradient-to-r from-[#D4FF00]/5 to-transparent pr-4 rounded-r-lg">
                   <p className="font-clash text-2xl sm:text-3xl text-white uppercase tracking-wide leading-tight">
                       Zero external capital.<br/>Then. <span className="text-[#D4FF00]">Or ever.</span>
                   </p>
                   <p className="font-satoshi text-sm sm:text-base text-white/50 mt-4 italic font-medium">
                     Funded entirely by Nikhil's trading profits.
                   </p>
               </div>
            </motion.div>
          </div>

        </div>

        {/* The Numbers Data Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {[
            { value: "16M+", label: "Active Clients" },
            { value: "₹9,372Cr", label: "Revenue FY24" },
            { value: "₹5,496Cr", label: "Profit FY24" },
            { value: "15.8%", label: "Market Share" }
          ].map((stat, i) => (
            <TiltCard key={i} tiltMax={10} className="rounded-[2rem]">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0A0A0A] py-12 px-8 border border-white/10 rounded-[2rem] flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-[#D4FF00]/30 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)] h-full"
              >
                <div className="absolute inset-0 bg-[#D4FF00]/0 group-hover:bg-[#D4FF00]/[0.03] transition-colors duration-500" />
                <CountUpStat
                  value={stat.value}
                  duration={2000}
                  delay={i * 150}
                  className="text-4xl md:text-5xl lg:text-6xl font-clash font-medium text-white mb-4 tracking-tight relative z-10 drop-shadow-lg"
                />
                <div className="text-[#D4FF00] font-mono uppercase tracking-[0.2em] text-[11px] relative z-10 bg-[#D4FF00]/10 px-4 py-1.5 rounded-full">{stat.label}</div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* The Principles (The Code) */}
        <div className="mb-48 grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32 relative">
             <div className="absolute -left-12 top-0 w-24 h-24 bg-[#D4FF00]/20 blur-[50px] rounded-full pointer-events-none" />
             <h3 className="text-white font-clash text-6xl md:text-7xl font-semibold tracking-tight mb-8 relative z-10">The<br/>Code</h3>
             <div className="w-20 h-1.5 bg-[#D4FF00] rounded-full shadow-[0_0_15px_rgba(212,255,0,0.5)]" />
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {[
                "Never raised a single rupee of external capital.",
                "Never ran a single advertisement. Not one.",
                "No revenue targets. No sales targets.",
                "Promotion exclusively from within.",
                "Varsity: India's largest free financial education hub, written by one person.",
                "Nudge: Warns users about bad trades, actively reducing their own revenue.",
                "Complexity is a bug, not a feature.",
                <span className="text-white font-medium text-xl">Cash reserves: ₹22,679 crore. Zero debt.</span>
              ].map((principle, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="flex gap-6 items-center bg-[#111] border border-white/5 p-6 sm:p-8 rounded-2xl hover:bg-[#151515] transition-colors group"
                >
                  <span className="text-[#D4FF00]/50 group-hover:text-[#D4FF00] font-mono text-xl shrink-0 transition-colors">{"//"}</span>
                  <p className="font-satoshi text-white/80 text-lg sm:text-xl leading-relaxed">{principle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* The Ecosystem / Builders */}
        <div>
          <div className="flex items-center gap-8 mb-20">
            <h3 className="font-clash text-5xl text-white font-medium tracking-tight">The Builders</h3>
            <div className="h-px bg-gradient-to-r from-white/20 to-transparent flex-grow" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Nithin */}
            <TiltCard tiltMax={6} className="rounded-[2rem]"><div className="group bg-[#0A0A0A] rounded-[2rem] overflow-hidden p-8 sm:p-10 border border-white/10 hover:border-white/20 transition-all duration-500 relative flex flex-col shadow-[0_0_40px_rgba(0,0,0,0.3)] h-full">
               <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-white/5 via-white/20 to-white/5 group-hover:via-[#F59E0B] transition-colors duration-700" />
               <div className="w-32 h-32 mb-10 rounded-full overflow-hidden mx-auto border-[3px] border-white/10 bg-[#111] group-hover:border-white/30 transition-colors relative shadow-inner">
                 <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 mix-blend-overlay transition-colors z-10 pointer-events-none" />
                 <img src="/assets/images/nithin-kamath-cutout.webp" alt="Nithin Kamath" className="w-full h-full object-cover transition-all duration-700" />
               </div>
               <h4 className="text-3xl sm:text-4xl text-white font-clash text-center mb-3 font-medium tracking-tight">Nithin Kamath</h4>
               <span className="text-white/40 text-[11px] font-mono tracking-[0.2em] text-center block mb-10 uppercase bg-white/5 py-2 px-4 rounded-full mx-auto w-fit">The Operator / CEO</span>

               <p className="font-satoshi text-white/60 text-base leading-relaxed mb-8 text-center flex-grow">
                 Business strategy. Product. Regulatory relations. SEBI's Secondary Market Advisory Committee.
               </p>

               <div className="bg-[#111] border border-white/5 p-6 rounded-2xl relative mt-auto">
                 <span className="absolute -top-3 left-6 bg-[#0A0A0A] text-white/20 px-2 font-serif text-4xl leading-none">"</span>
                 <p className="font-satoshi italic text-white/60 text-[15px] leading-relaxed pt-2">
                   I quickly realised Nikhil is a better trader than me. His profits in the first two years helped us build the company without needing venture capital.
                 </p>
               </div>
            </div></TiltCard>

            {/* Nikhil */}
            <TiltCard tiltMax={6} className="rounded-[2rem] z-10"><div className="group bg-[#0A0A0A] rounded-[2rem] overflow-hidden p-8 sm:p-10 border border-[#D4FF00]/10 hover:border-[#D4FF00]/50 transition-all duration-500 relative flex flex-col shadow-[0_0_40px_rgba(212,255,0,0.03)] hover:shadow-[0_0_60px_rgba(212,255,0,0.15)] h-full">     
               <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#D4FF00]/20 via-[#D4FF00] to-[#D4FF00]/20 transition-colors shadow-[0_0_15px_rgba(212,255,0,0.6)]" />
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4FF00]/5 rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

               <div className="w-32 h-32 mb-10 rounded-full overflow-hidden mx-auto border-[3px] border-[#D4FF00]/30 group-hover:border-[#D4FF00] bg-black flex justify-center items-end transition-all duration-500 relative z-10 shadow-[0_0_30px_rgba(212,255,0,0.2)]">
                  <img src="/assets/images/nikhil-hero-bw-cutout.png" alt="Nikhil Kamath" className="w-[85%] opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-2xl" />
               </div>

               <h4 className="text-3xl sm:text-4xl text-white font-clash text-center mb-3 font-medium tracking-tight relative z-10 drop-shadow-md">Nikhil Kamath</h4>
               <span className="text-[#050505] font-bold text-[11px] font-mono tracking-[0.2em] text-center block mb-10 uppercase bg-[#D4FF00] py-2 px-6 rounded-full mx-auto w-fit shadow-[0_0_15px_rgba(212,255,0,0.4)] relative z-10">The CIO / Trader</span>

               <div className="border-t border-white/5 pt-8 relative z-10 flex-grow flex items-center">
                 <p className="font-satoshi text-white/80 text-[17px] leading-relaxed text-center font-medium">
                   Everything that touches markets, trading, and investing. If it's stock markets, investing, or trading — his call. If it's product, people, or broking — Nithin's.
                 </p>
               </div>
            </div></TiltCard>

            {/* Kailash */}
            <TiltCard tiltMax={6} className="rounded-[2rem]"><div className="group bg-[#0A0A0A] rounded-[2rem] overflow-hidden p-8 sm:p-10 border border-white/10 hover:border-white/20 transition-all duration-500 relative flex flex-col shadow-[0_0_40px_rgba(0,0,0,0.3)] h-full">
               <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-white/5 via-white/20 to-white/5 group-hover:via-[#10B981] transition-colors duration-700" />
               <div className="w-32 h-32 mb-10 rounded-full overflow-hidden mx-auto border-[3px] border-white/10 bg-[#111] group-hover:border-white/30 transition-colors shadow-inner">
                 <img src="/assets/images/kailash-nadh-cutout.jpg" alt="Kailash Nadh" className="w-full h-full object-cover transition-all duration-700" />
               </div>
               <h4 className="text-3xl sm:text-4xl text-white font-clash text-center mb-3 font-medium tracking-tight">Kailash Nadh</h4>
               <span className="text-white/40 text-[11px] font-mono tracking-[0.2em] text-center block mb-10 uppercase bg-white/5 py-2 px-4 rounded-full mx-auto w-fit">The Architect / CTO</span>

               <div className="space-y-6 flex-grow flex flex-col">
                 <p className="font-satoshi text-white/60 text-base leading-relaxed text-center">
                   Built Zerodha's entire technology stack in the early years, effectively alone. Kite. Console. Coin. All of it.
                 </p>
                 <div className="bg-[#111] border border-white/5 p-5 rounded-2xl mt-auto border-l-[3px] border-l-[#10B981]/50 group-hover:border-l-[#10B981] transition-colors">
                   <p className="font-satoshi text-white/60 text-[14px] leading-relaxed">
                     His first act when he joined in 2013: Setting up proper waste segregation. That single act of climate angst became the <span className="text-white font-medium">$200M Rainmatter Foundation</span>.
                   </p>
                 </div>
               </div>
            </div></TiltCard>

          </div>
        </div>

      </div>
    </section>
  );
}
