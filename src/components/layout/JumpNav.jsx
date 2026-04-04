import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DOTS = [
  { id: 'section-origins',       label: 'Origins' },
  { id: 'section-flush',         label: 'The Hustles' },
  { id: 'section-phases',        label: 'The Market' },
  { id: 'section-spike',         label: 'Zerodha' },
  { id: 'section-plateau',       label: 'The Anomaly' },
  { id: 'section-ecosystem',     label: 'The Ecosystem' },
  { id: 'section-conversations', label: 'The Studio' },
  { id: 'section-giving',        label: 'The Pledge' },
  { id: 'section-person',        label: 'The Person' },
];

export default function JumpNav() {
  const [activeId, setActiveId] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, { threshold: 0.5 }); 

    DOTS.forEach(dot => {
      const el = document.getElementById(dot.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    if (window.__lenis) {
      window.__lenis.scrollTo('#' + id, { duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 4) });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3"
        >
          {DOTS.map(dot => {
            const isActive = activeId === dot.id;
            const isHovered = hoveredId === dot.id;

            return (
              <div
                key={dot.id}
                className="relative flex items-center justify-end w-8 h-6 cursor-pointer group"
                onMouseEnter={() => setHoveredId(dot.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleClick(dot.id)}
              >
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute right-5 whitespace-nowrap font-mono text-[10px] tracking-[0.2em] uppercase text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full pointer-events-none"
                  >
                    {dot.label}
                  </motion.div>
                )}
                <div
                  className={`transition-all duration-300 ${
                    isActive
                      ? 'w-2 h-2 rounded-full bg-[#D4FF00] shadow-[0_0_8px_rgba(212,255,0,0.6)] border-none'
                      : 'w-1.5 h-1.5 rounded-full border border-white/20 bg-transparent'
                  }`}
                />
              </div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
