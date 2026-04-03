import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RupeeCounter from '../ui/RupeeCounter';

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('counting'); // counting, text, dissolving
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    // Show skip after 2 seconds
    const skipTimer = setTimeout(() => setShowSkip(true), 2000);
    return () => clearTimeout(skipTimer);
  }, []);

  const handleCounterComplete = () => {
    // Freeze for 1 second, then show text
    setTimeout(() => {
      setPhase('text');
      
      // Keep text on screen for 4 seconds, then dissolve
      setTimeout(() => {
        setPhase('dissolving');
        setTimeout(onComplete, 1000); // 1s dissolve transition
      }, 4000);
    }, 1000);
  };

  const skipPreloader = () => {
    setPhase('dissolving');
    setTimeout(onComplete, 500);
  };

  return (
    <AnimatePresence>
      {phase !== 'dissolving' && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {phase === 'counting' && (
            <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <RupeeCounter value={8000} onComplete={handleCounterComplete} />
            </motion.div>
          )}

          {phase === 'text' && (
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.h2 
                className="text-4xl md:text-6xl font-clash text-primary-text"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }}
              >
                ₹8,000.
              </motion.h2>
              <motion.p 
                className="text-xl md:text-3xl font-satoshi text-secondary-text"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
              >
                That was the salary.
              </motion.p>
              <motion.p 
                className="text-xl md:text-3xl font-satoshi text-secondary-text"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }}
              >
                That was the beginning.
              </motion.p>
            </div>
          )}

          {showSkip && (
            <button 
              onClick={skipPreloader}
              className="absolute bottom-12 text-sm uppercase tracking-widest text-secondary-text hover:text-accent-chartreuse transition-colors duration-300"
            >
              Skip
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
