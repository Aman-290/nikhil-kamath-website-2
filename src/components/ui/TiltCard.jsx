import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

/**
 * TiltCard — 3D hover tilt effect with spotlight.
 *
 * @param {string} className — Container classes
 * @param {number} tiltMax — Maximum tilt angle in degrees. Default 8
 * @param {number} spotlightSize — Size of the spotlight gradient in px. Default 300
 * @param {boolean} glare — Enable spotlight/glare effect. Default true
 * @param {React.ReactNode} children
 */
export default function TiltCard({
  className = '',
  tiltMax = 8,
  spotlightSize = 300,
  glare = true,
  children,
  ...rest
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) { rafRef.current = null; return; }

      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateY = (x - 0.5) * tiltMax * 2;
      const rotateX = (0.5 - y) * tiltMax * 2;

      setTilt({ rotateX, rotateY });
      setSpotlight({ x: x * 100, y: y * 100 });
      rafRef.current = null;
    });
  }, [tiltMax]);

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  // Disable on touch devices
  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window;

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      animate={!isTouchDevice ? {
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
      onMouseMove={!isTouchDevice ? handleMouseMove : undefined}
      onMouseEnter={!isTouchDevice ? handleMouseEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
      {...rest}
    >
      {children}

      {/* Spotlight / Glare effect */}
      {glare && !isTouchDevice && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-30 transition-opacity duration-300"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(${spotlightSize}px circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.1), transparent 60%)`,
          }}
        />
      )}

      {/* Border glow */}
      {!isTouchDevice && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-20 transition-opacity duration-500"
          style={{
            opacity: isHovering ? 1 : 0,
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)',
          }}
        />
      )}
    </motion.div>
  );
}
