import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHAPTERS = [
  { id: 'hero', name: 'THE LINE', year: '2003' },
  { id: 'origins', name: 'ORIGINS', year: '1986' },
  { id: 'the-flush', name: '1ST VENTURE', year: '2000' },
  { id: 'the-fake', name: 'FAKE TRADE', year: '2001' },
  { id: 'five-phases', name: '5 PHASES', year: '2002' },
  { id: 'the-big-spike', name: 'ZERODHA', year: '2010' },
  { id: 'the-plateau', name: 'PLATEAU', year: '2018' },
  { id: 'the-ecosystem', name: 'ECOSYSTEM', year: '2020' },
  { id: 'conversations', name: 'WTF POD', year: '2021' },
  { id: 'the-giving', name: 'GIVING', year: '2022' },
  { id: 'the-person', name: 'PERSON', year: 'NOW' },
  { id: 'philosophy', name: 'PHILOSOPHY', year: '—' },
  { id: 'finale', name: 'FINALE', year: '∞' },
];

export default function StoryProgressBar() {
  const [currentChapter, setCurrentChapter] = useState(CHAPTERS[0]);
  const [isVisible, setIsVisible] = useState(false);
  const hideTimeout = useRef(null);
  const lastScroll = useRef(0);

  // Detect scroll to show/hide
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Don't show at very top (hero section)
      if (scrollY < 200) {
        setIsVisible(false);
        return;
      }

      setIsVisible(true);

      // Auto-hide after 3s of no scroll to keep UI pristine
      // During actual reading, it disappears completely to maximize focus.
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(() => setIsVisible(false), 3000);

      lastScroll.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  // Sync current chapter to scroll depth
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-chapter-id');
            const chapter = CHAPTERS.find((c) => c.id === id);
            if (chapter) setCurrentChapter(chapter);
          }
        });
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: 0 }
    );

    const sections = document.querySelectorAll('[data-chapter-id]');
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-8 left-1/2 -translate-x-1/2 z-[9999] pointer-events-none"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Subtle wrapper to ensure text readability on complex backgrounds without being intrusive */}
          <div className="flex items-center gap-3 bg-[#050505]/60 backdrop-blur-md border border-white/[0.05] rounded-full px-5 py-2 shadow-2xl">
            
            <AnimatePresence mode="wait">
              <motion.span
                key={currentChapter.name}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-[10px] md:text-xs text-white/50 tracking-[0.2em] uppercase"
              >
                {currentChapter.name}
              </motion.span>
            </AnimatePresence>

            {/* Tiny minimalistic separator dot */}
            <div className="w-[3px] h-[3px] rounded-full bg-white/20" />

            <AnimatePresence mode="wait">
              <motion.span
                key={currentChapter.year}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="font-clash text-xs md:text-sm font-medium text-white/80"
              >
                {currentChapter.year}
              </motion.span>
            </AnimatePresence>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
