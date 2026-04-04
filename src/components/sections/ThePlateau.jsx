import React from 'react';
import { motion } from 'framer-motion';
import ChessAccuracyChart from '../ui/ChessAccuracyChart';

export default function ThePlateau() {
  return (
    <section id="section-plateau" className="relative w-full py-32 z-10 bg-[#050505]" style={{ cursor: "url('/assets/icons/chess-knight-cursor.svg') 16 16, crosshair" }}>
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4FF00]/[0.02] to-transparent pointer-events-none" />

      {/* Intro sequence */}
      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-7xl pt-24 mb-48 relative z-10 flex flex-col items-center">
        <motion.div 
          className="w-full text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-clash text-5xl md:text-[7rem] lg:text-[8rem] text-white font-medium tracking-tight leading-[0.9] mb-8 text-center text-balance mx-auto">
            Every great chart<br />has one <span className="text-white/30 italic">anomaly.</span>
          </h2>
          
          <p className="font-satoshi text-2xl md:text-4xl text-white/60 font-medium mb-12">
            Not a crash. A human moment.<br/>
            Priced in. Recovered.
          </p>
          
          <div className="inline-block border border-white/20 rounded-full px-8 py-3 bg-white/[0.02] backdrop-blur-md">
            <span className="font-mono text-[11px] tracking-[0.3em] font-medium text-white/50 uppercase">Filed under: Growth</span>
          </div>
        </motion.div>
      </div>

      {/* Chess-Gate Controversy Card */}
      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-[1400px] mb-48 relative z-10">
        
        <div className="flex items-center gap-6 mb-16">
          <h3 className="font-clash text-4xl sm:text-5xl text-white font-medium tracking-tight">The Anomaly</h3>
          <div className="h-px bg-gradient-to-r from-white/20 to-transparent flex-grow" />
          <span className="text-white/40 font-mono text-[10px] tracking-[0.2em] uppercase shrink-0">June 13, 2021</span>
        </div>

        <div className="bg-[#0A0A0A] rounded-[2.5rem] border border-white/10 p-2 shadow-[0_0_50px_rgba(0,0,0,0.5)] group grid lg:grid-cols-12 gap-0 overflow-hidden relative">
          
          {/* Ambient inner glow */}
          <div className="absolute inset-0 bg-[#FF4444]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Left panel: Graphics & Chart */}
          <motion.div 
            className="lg:col-span-5 bg-[#111] rounded-[2rem] p-8 md:p-10 relative overflow-hidden flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 z-0">
               <img 
                 src="/assets/images/vishy-anand-shadow.png" 
                 alt="Viswanathan Anand shadow" 
                 className="w-full h-full object-cover opacity-[0.15] mix-blend-luminosity group-hover:scale-105 group-hover:opacity-[0.25] transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent" />
            </div>

            <div className="relative z-10 mb-8">
               <div className="inline-block border border-[#FF4444]/20 bg-[#FF4444]/10 text-[#FF4444] px-4 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-widest mb-6">
                 Checkmate Covid Charity Exhibition
               </div>
               <h4 className="font-clash text-4xl md:text-5xl text-white font-medium tracking-tight mb-4">
                 He hadn't played chess in over 15 years.
               </h4>
               <p className="font-satoshi text-white/60 text-lg leading-relaxed">
                 Nikhil beat 5-time World Champion Viswanathan Anand with a 98.9% accuracy score.
               </p>
            </div>

            <div className="relative z-10 bg-[#050505]/80 backdrop-blur-md rounded-2xl border border-white/5 p-6 w-full overflow-hidden">
              <p className="absolute inset-0 font-garamond italic text-white/[0.08] text-[0.7rem] leading-relaxed p-4 select-none pointer-events-none">
                "The game is not about the pieces. It's about the positions you never see coming."
              </p>
              <div className="relative z-10">
                <ChessAccuracyChart />
              </div>
            </div>
          </motion.div>

          {/* Right panel: Timeline */}
          <motion.div 
            className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center relative z-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="space-y-12">
              
              <div className="relative pl-8 before:absolute before:left-0 before:top-4 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-[#D4FF00] before:to-white/10">
                <div className="absolute left-0 top-3 w-[3px] h-8 bg-[#D4FF00] -translate-x-[1px] shadow-[0_0_10px_rgba(212,255,0,0.5)]" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#D4FF00] uppercase mb-2 block">e2-e4 · June 13, 2021</span>
                <p className="font-satoshi text-xl text-white leading-relaxed mb-4">
                  Nine games simultaneously. Viswanathan Anand won eight easily. <span className="text-white/50">Nikhil won.</span>
                </p>
              </div>

              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white/10">
                <div className="absolute left-0 top-3 w-[3px] h-8 bg-[#FF4444] -translate-x-[1px]" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#FF4444] uppercase mb-2 block">Nf3 · Chess.com ban</span>
                <p className="font-satoshi text-xl text-white/80 leading-relaxed mb-6">
                  His previous 30 games on Chess.com ranged between 0.6% and 10.9%. Three novices had routed him in under 12 moves. 
                </p>
                <div className="bg-[#111] p-5 rounded-xl border border-[#FF4444]/20 border-l-[4px] border-l-[#FF4444]">
                  <p className="font-satoshi text-white/80 text-[15px] leading-relaxed">
                    Computer analysis was unambiguous. Chess.com banned his account. Forbes ran <span className="font-medium">"Liar's Chess: Exposing India's Slumdog Billionaire."</span> Top grandmasters piled on.
                  </p>
                </div>
              </div>

              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-white/10 before:to-transparent">
                <div className="absolute left-0 top-3 w-[3px] h-8 bg-white/40 -translate-x-[1px]" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2 block">0-0 · 24 hours later</span>
                <p className="font-satoshi text-xl text-white/80 leading-relaxed mb-6">
                  24 hours later, <span className="text-white font-medium">at Viswanathan Anand's personal request</span>, the account was restored.
                </p>
                <div className="relative">
                  <span className="absolute -left-6 top-0 text-white/20 font-serif text-5xl">"</span>
                  <p className="font-satoshi italic text-white/50 text-[17px] leading-relaxed mb-2">
                    In hindsight, it was quite silly. Apologies.
                  </p>
                  <p className="font-satoshi text-[14px] text-white/30 uppercase tracking-widest font-mono mt-4">
                    — Nikhil Kamath (via X)
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>


    </section>
  );
}
