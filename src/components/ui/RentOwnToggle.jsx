import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RentOwnToggle() {
  const [mode, setMode] = useState('RENT'); // 'RENT' or 'OWN'

  return (
    <div className="relative w-full rounded-[2rem] overflow-hidden min-h-[80vh] border border-white/5 transition-colors duration-1000 group">
      
      {/* Background Layer */}
      <AnimatePresence>
        {mode === 'OWN' && (
          <motion.div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/textures/kingfisher-towers-bg.jpg')" }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
      
      <div className={`absolute inset-0 z-0 transition-colors duration-1000 ${mode === 'RENT' ? 'bg-[#0A0A0A]' : 'bg-[#050505]/95'}`} />
      
      {/* Ambient Glows */}
      <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none transition-colors duration-1000 ${mode === 'RENT' ? 'bg-[#D4FF00]/[0.02]' : 'bg-[#F59E0B]/[0.05]'}`} />

      {/* Content Layer */}
      <div className="relative z-10 p-8 md:p-16 h-full flex flex-col justify-between min-h-[80vh]">
        
        {/* Toggle UI */}
        <div className="flex justify-center w-full mb-16">
          <div className="flex items-center space-x-1 bg-[#111] p-1 rounded-full border border-white/10 backdrop-blur-md relative overflow-hidden">
            {mode === 'RENT' && (
              <motion.div layoutId="pill-bg" className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-[#D4FF00] rounded-full z-0 shadow-[0_0_15px_rgba(212,255,0,0.3)]" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
            )}
            {mode === 'OWN' && (
              <motion.div layoutId="pill-bg" className="absolute top-1 bottom-1 right-1 w-[calc(50%-4px)] bg-[#F59E0B] rounded-full z-0 shadow-[0_0_15px_rgba(245,158,11,0.3)]" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
            )}
            
            {['RENT', 'OWN'].map((t) => (
              <button
                key={t}
                onClick={() => setMode(t)}
                className={`px-10 py-3 rounded-full font-mono text-[11px] tracking-widest uppercase transition-colors duration-500 relative z-10 font-bold ${
                  mode === t ? 'text-black' : 'text-white/40 hover:text-white/80'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Narrative Content */}
        <div className="w-full flex-grow flex items-center justify-center">
          <AnimatePresence mode="wait">
            {mode === 'RENT' ? (
              <motion.div 
                key="rent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center text-center max-w-4xl w-full"
              >
                <h3 className="font-clash text-5xl md:text-7xl font-medium text-white mb-8 tracking-tight">
                  "Renting is<br/>financially superior."
                </h3>
                
                <p className="font-satoshi text-xl sm:text-2xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-12">
                  For years, his position was public and unambiguous. Liquidity. Capital allocation efficiency. The opportunity cost of a down payment. He said it in interviews, on podcasts, on X.
                </p>
                
                <div className="bg-[#111] border border-white/5 p-6 rounded-2xl">
                  <span className="font-satoshi text-white/80 text-lg uppercase tracking-widest font-bold">He meant it.</span>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="own"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="grid lg:grid-cols-12 gap-12 w-full max-w-6xl mx-auto"
              >
                <div className="lg:col-span-7">
                   <div className="inline-block mb-6 px-4 py-2 border border-[#F59E0B]/20 bg-[#F59E0B]/10 text-[#F59E0B] font-mono text-[10px] tracking-[0.2em] rounded-full uppercase">
                     October 2024
                   </div>
                   <h3 className="font-clash text-5xl md:text-[5rem] leading-[1.1] font-medium text-white tracking-tight mb-8">
                     7,000 sq ft in Kingfisher Towers.
                   </h3>
                   <p className="font-satoshi text-xl text-white/60">
                     One of the most exclusive pieces of real estate in India. The internet immediately called it a U-turn.
                   </p>
                </div>
                
                <div className="lg:col-span-5 flex flex-col space-y-6 justify-center">
                  <div className="bg-white/[0.02] border border-white/10 p-8 rounded-2xl relative overflow-hidden group-hover:border-[#F59E0B]/20 transition-colors">
                    <span className="text-[#F59E0B] font-serif text-5xl absolute top-4 left-4 opacity-50">"</span>
                    <p className="font-satoshi italic text-white/80 text-lg leading-relaxed relative z-10 pt-4">
                      Hypocrisy, I believe, is good. With new information, with new data, if you are able to change your mind quickly — that has served me well.
                    </p>
                    <span className="block mt-6 text-white/40 font-mono text-[10px] uppercase tracking-widest">On changing his mind for stability</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-16 w-full flex justify-center">
          <div className="inline-flex items-center gap-3">
             <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20" />
             <p className="text-[10px] text-white/30 tracking-[0.3em] uppercase font-mono text-center">
               He was right both times
             </p>
             <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/20" />
          </div>
        </div>
        
      </div>
    </div>
  );
}
