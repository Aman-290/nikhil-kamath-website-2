import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

/**
 * ParallaxImage — Cinematic image wrapper with scroll-linked effects.
 *
 * @param {string} src — Image source URL
 * @param {string} alt — Alt text
 * @param {string} className — Container classes
 * @param {number} parallaxSpeed — Parallax intensity (0 = none, 0.2 = subtle, 0.5 = heavy). Default 0.15
 * @param {boolean} reveal — Enable clip-path reveal animation
 * @param {boolean} kenBurns — Enable slow Ken Burns zoom
 * @param {boolean} grain — Enable grain overlay
 * @param {string} revealDirection — 'up' | 'left' | 'right' | 'down'. Default 'up'
 */
export default function ParallaxImage({
  src,
  alt = '',
  className = '',
  parallaxSpeed = 0.15,
  reveal = true,
  kenBurns = true,
  grain = true,
  revealDirection = 'up',
  children,
  ...rest
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax Y offset
  const yOffset = useTransform(scrollYProgress, [0, 1], [parallaxSpeed * 100, -parallaxSpeed * 100]);

  // Clip path directions
  const clipPaths = {
    up: { hidden: 'inset(100% 0 0 0)', visible: 'inset(0% 0 0 0)' },
    down: { hidden: 'inset(0 0 100% 0)', visible: 'inset(0 0 0% 0)' },
    left: { hidden: 'inset(0 100% 0 0)', visible: 'inset(0 0% 0 0)' },
    right: { hidden: 'inset(0 0 0 100%)', visible: 'inset(0 0 0 0%)' },
  };

  const clip = clipPaths[revealDirection] || clipPaths.up;

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} {...rest}>
      <motion.div
        className="relative w-full h-full"
        style={parallaxSpeed > 0 ? { y: yOffset } : {}}
      >
        <motion.div
          className="w-full h-full"
          initial={reveal ? { clipPath: clip.hidden } : {}}
          animate={isInView && reveal ? { clipPath: clip.visible } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover ${kenBurns ? '' : ''}`}
            initial={kenBurns ? { scale: 1.1 } : {}}
            animate={isInView && kenBurns ? { scale: 1.0 } : {}}
            transition={kenBurns ? { duration: 12, ease: 'linear' } : {}}
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      {/* Grain overlay */}
      {grain && (
        <div
          className="absolute inset-0 pointer-events-none z-10 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '128px 128px',
          }}
        />
      )}

      {/* Gradient overlay for readability */}
      {children}
    </div>
  );
}
