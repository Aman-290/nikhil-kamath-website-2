import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TheMatriarch() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEvent = () => setIsOpen(true);
    window.addEventListener('show-matriarch', handleEvent);
    return () => window.removeEventListener('show-matriarch', handleEvent);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[100] bg-[#1a140d] text-[#e8dcc4] overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="fixed top-8 right-8 z-[110] w-12 h-12 flex items-center justify-center text-4xl font-mono hover:text-[#D4FF00] transition-colors mix-blend-difference"
        >
          ×
        </button>

        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.img 
            src="/assets/images/revathi-kamath-temple.webp" 
            alt="Revathi Kamath" 
            className="w-full h-full object-cover sepia-[.5] opacity-20 origin-center"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a140d] via-[#1a140d]/80 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 py-32 max-w-4xl min-h-screen flex flex-col justify-center">
          
          <motion.h2 
            className="font-clash text-6xl md:text-8xl mb-24 text-[#D4FF00]/80 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Before Zerodha.
          </motion.h2>

          <div className="space-y-8 font-garamond text-2xl md:text-3xl leading-relaxed max-w-2xl">
            <RevealLine delay={2}>Before the podcast.</RevealLine>
            <RevealLine delay={3}>Before the pledge.</RevealLine>
            <RevealLine delay={4}>Before ₹27,000 Crore.</RevealLine>
            
            <div className="h-8" />
            
            <RevealLine delay={6}>There was a woman with ₹500, a flower basket, and an appointment at Wipro.</RevealLine>
            
            <div className="h-8" />
            <RevealLine delay={8} className="font-clash text-4xl md:text-6xl text-white">Revathi Kamath.</RevealLine>
            <div className="h-8" />
            
            <RevealLine delay={10}>Trained under Veena Venkatagiriyappa since childhood. Her day began with the Veena. Music before the market.</RevealLine>
            
            <div className="h-4" />
            
            <RevealLine delay={12}>She started a flower shop in Jayanagar for ₹500 a month. Borrowed ₹5,000 from a friend. Walked into Wipro with a floral arrangement. Left with a ₹45,000 contract.</RevealLine>
            
            <RevealLine delay={14}>Grew Calyx into a multi-crore event company. HP. Bosch. Leela Palace.</RevealLine>
            
            <RevealLine delay={16}>Then landscaping. Chinnaswamy Stadium. Intel. CBRE.</RevealLine>
            
            <RevealLine delay={18}>Then environment. One lakh trees planted. Lake rejuvenation. Appointed 7th Director of Rally For Rivers.</RevealLine>
            
            <div className="h-8" />
            
            <RevealLine delay={20}>She went viral on Reddit in 2025. Playing the Veena at Rama Mandira. Her hands shook with love for the instrument next to an altar worth thousands of crores.</RevealLine>
            
            <div className="h-8" />
            
            <RevealLine delay={22}>She is currently writing her autobiography.</RevealLine>
            <RevealLine delay={23}>Her Instagram bio: <span className="italic">'Environmentalist and Veena player.'</span></RevealLine>
            <RevealLine delay={25}>No mention of her sons.</RevealLine>
            <RevealLine delay={26}>One of them is worth $3.3 billion.</RevealLine>
            
            <div className="h-12" />
            
            <RevealLine delay={28} className="text-[#D4FF00]">
              The entrepreneur in this family did not skip a generation.<br/>
              It began with her.
            </RevealLine>
          </div>
          
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function RevealLine({ children, delay, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 1.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
