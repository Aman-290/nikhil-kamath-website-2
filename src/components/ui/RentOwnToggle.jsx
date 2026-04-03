import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RentOwnToggle() {
  const [mode, setMode] = useState('RENT'); // 'RENT' or 'OWN'

  return (
    <div className="relative w-full rounded-2xl overflow-hidden min-h-[70vh] border border-white/10 transition-colors duration-1000">
      
      {/* Background Layer */}
      <AnimatePresence>
        {mode === 'OWN' && (
          <motion.div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/textures/kingfisher-towers-bg.jpg')" }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
      
      <div className={`absolute inset-0 z-0 transition-colors duration-1000 ${mode === 'RENT' ? 'bg-surface-bg' : 'bg-black/70'}`} />

      {/* Content Layer */}
      <div className="relative z-10 p-8 md:p-16 h-full flex flex-col items-center text-center justify-center">
        
        {/* Toggle UI */}
        <div className="flex items-center space-x-1 bg-black/40 p-1 rounded-full border border-white/10 mb-12 backdrop-blur-md">
          {['RENT', 'OWN'].map((t) => (
            <button
              key={t}
              onClick={() => setMode(t)}
              className={`px-8 py-3 rounded-full font-mono text-sm tracking-widest transition-all duration-500 ${
                mode === t 
                ? 'bg-accent-chartreuse text-black shadow-[0_0_15px_rgba(212,255,0,0.4)]' 
                : 'text-secondary-text hover:text-primary-text'
              }`}
            >
              {t} MODE
            </button>
          ))}
        </div>

        {/* Narrative Content */}
        <div className="max-w-2xl min-h-[250px]">
          <AnimatePresence mode="wait">
            {mode === 'RENT' ? (
              <motion.div 
                key="rent"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4 font-satoshi text-lg text-primary-text leading-relaxed"
              >
                <p>For years, his position was public and unambiguous.</p>
                <p className="font-semibold text-xl">Renting is financially superior.</p>
                <p className="text-secondary-text">Liquidity. Capital allocation efficiency. The opportunity cost of a down payment.</p>
                <p className="text-secondary-text">He said it in interviews.<br/>He said it on the podcast.<br/>He wrote it on X.</p>
                <p className="font-semibold italic">He meant it.</p>
              </motion.div>
            ) : (
              <motion.div 
                key="own"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4 font-satoshi text-lg text-primary-text leading-relaxed drop-shadow-md"
              >
                <p>October 2024.</p>
                <p className="font-semibold text-xl text-accent-gold">He purchased 7,000 square feet in Kingfisher Towers, Bengaluru.</p>
                <p className="text-primary-text/80">One of the most exclusive addresses in India.</p>
                
                <div className="my-6 block border-l-2 border-accent-gold pl-6 text-left space-y-2">
                  <p className="text-secondary-text text-sm">His neighbour: Kiran Mazumdar-Shaw. Who jokes:</p>
                  <p className="italic">"I'm like the older mother — I tell him he should get married. He asks why."</p>
                </div>

                <p className="text-secondary-text">The internet called it a U-turn. He responded:</p>
                <p className="font-garamond italic text-2xl text-accent-chartreuse py-4">
                  "Hypocrisy, I believe, is good. With new information, with new data, if you are able to change your mind quickly — that has served me well."
                </p>
                <p>He cited: stability.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-12">
          <p className="text-xs text-secondary-text tracking-widest uppercase font-mono border-b border-white/10 pb-1">
            He defended it calmly. He was right. This is how minds should work.
          </p>
        </div>
        
      </div>
    </div>
  );
}
