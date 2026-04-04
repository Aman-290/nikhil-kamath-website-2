import React, { useEffect, useRef, useState } from 'react';
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
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const observerRef = useRef(null);

  // Show nav after scrolling past hero (one viewport height)
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver to track active section
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    DOTS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 12 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Section navigation"
        >
          {DOTS.map(({ id, label }) => {
            const isActive = activeId === id;
            const isHovered = hoveredId === id;
            return (
              <div
                key={id}
                className="relative flex items-center justify-end"
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Hover label */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      className="absolute right-5 whitespace-nowrap font-mono text-[10px] tracking-[0.2em] uppercase text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full"
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.15 }}
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Dot */}
                <button
                  onClick={() => scrollToSection(id)}
                  aria-label={`Go to ${label}`}
                  className={`transition-all duration-300 rounded-full ${
                    isActive
                      ? 'w-2 h-2 bg-[#D4FF00] shadow-[0_0_8px_rgba(212,255,0,0.6)]'
                      : 'w-1.5 h-1.5 border border-white/20 bg-transparent hover:border-white/50'
                  }`}
                />
              </div>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
