import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

/**
 * SectionDivider — Animated transition between story sections.
 *
 * @param {string} year — The year/era label (e.g., "2003", "2010")
 * @param {string} chapter — Chapter name (e.g., "THE ORIGINS")
 * @param {boolean} accent — Whether to use chartreuse accent color. Default false (white)
 * @param {string} className — Additional classes
 */
export default function SectionDivider({
  year = '',
  chapter = '',
  accent = false,
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Line width animates with scroll progress
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.6], ['0%', '100%']);
  const glowOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);

  const accentColor = accent ? '#D4FF00' : 'rgba(255,255,255,0.3)';

  return (
    <div ref={ref} className={`relative py-20 md:py-28 flex items-center justify-center overflow-hidden ${className}`}>

      {/* Central horizontal line that grows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center px-8 md:px-24">
        <motion.div
          className="h-[1px] relative"
          style={{
            width: lineWidth,
            background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
          }}
        >
          {/* Glow pulse */}
          <motion.div
            className="absolute inset-0 blur-md"
            style={{
              opacity: glowOpacity,
              background: accent
                ? 'linear-gradient(90deg, transparent, rgba(212,255,0,0.4), transparent)'
                : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
            }}
          />
        </motion.div>
      </div>

      {/* Chapter & Year labels */}
      <div className="relative z-10 flex flex-col items-center space-y-3">
        {chapter && (
          <motion.span
            className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase"
            style={{ color: accent ? '#D4FF00' : 'rgba(255,255,255,0.4)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {chapter}
          </motion.span>
        )}

        {year && (
          <motion.span
            className="font-clash text-2xl md:text-3xl font-medium tracking-tight"
            style={{ color: accent ? '#D4FF00' : 'rgba(255,255,255,0.15)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {year}
          </motion.span>
        )}

        {/* Small diamond marker */}
        <motion.div
          className="w-2 h-2 rotate-45"
          style={{ backgroundColor: accent ? '#D4FF00' : 'rgba(255,255,255,0.2)' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        />
      </div>

      {/* Ambient vertical glow */}
      <motion.div
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] pointer-events-none"
        style={{
          opacity: glowOpacity,
          background: accent
            ? 'linear-gradient(180deg, transparent, rgba(212,255,0,0.15), transparent)'
            : 'linear-gradient(180deg, transparent, rgba(255,255,255,0.05), transparent)',
        }}
      />
    </div>
  );
}
