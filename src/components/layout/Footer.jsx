import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useEasterEggStore, EGG_IDS } from '../../hooks/useEasterEgg';

export default function Footer() {
  const { unlockEgg } = useEasterEggStore();
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleVeenaClick = () => {
    unlockEgg(EGG_IDS.MATRIARCH_VEENA);
    window.dispatchEvent(new CustomEvent('show-matriarch'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="w-full bg-[#050508] border-t border-transparent py-12 z-20 relative overflow-hidden">
      
      {/* Animated gradient border */}
      <div className="absolute top-0 inset-x-0 h-[1px] overflow-hidden">
        <motion.div
          className="h-full w-[200%]"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), rgba(255,255,255,0.3), rgba(255,255,255,0.1), transparent, transparent)',
            backgroundSize: '50% 100%',
          }}
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        
        {/* Mini Stat */}
        <motion.div
          className="flex items-center justify-center mb-8 gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs text-secondary-text tracking-widest">₹8,000</span>
          <motion.span
            className="text-accent-chartreuse text-sm"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            →
          </motion.span>
          <span className="font-mono text-xs text-primary-text tracking-widest font-medium">₹27,000 Cr</span>
        </motion.div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs text-secondary-text tracking-widest">Built by</span>
            <a href="https://www.brokailabs.com" target="_blank" rel="noreferrer" className="font-clash text-sm text-primary-text hover:text-accent-chartreuse transition-colors">
              Brokai Labs
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {/* Back to top */}
            {showBackToTop && (
              <motion.button
                onClick={scrollToTop}
                className="text-xs font-mono text-secondary-text hover:text-accent-chartreuse transition-colors uppercase tracking-widest flex items-center gap-2 group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ y: -2 }}
              >
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  ↑
                </motion.span>
                Back to top
              </motion.button>
            )}

            {/* Veena button */}
            <button 
              onClick={handleVeenaClick}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors group relative"
            >
               <img src="/assets/icons/veena-line-art.svg" alt="Veena" className="w-5 h-5 opacity-50 group-hover:opacity-100 animate-pulse" />
               <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-white/10 px-3 py-2 rounded text-xs whitespace-nowrap pointer-events-none text-primary-text font-satoshi shadow-xl">
                There's more to this story.
               </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
