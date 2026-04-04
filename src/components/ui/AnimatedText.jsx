import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * AnimatedText — A versatile text animation component.
 *
 * @param {string} mode — 'split-chars' | 'split-words' | 'typewriter' | 'blur-in' | 'slide-up'
 * @param {string} text — The text content (use children for JSX)
 * @param {string} className — Applied to the outer wrapper
 * @param {string} tag — HTML tag for wrapper: 'h1','h2','p','span', etc.
 * @param {number} delay — Additional delay before animation starts (seconds)
 * @param {number} stagger — Stagger between items (seconds)
 * @param {boolean} once — Only animate once (default true)
 * @param {React.ReactNode} children — Alternative to text prop for JSX children
 */
export default function AnimatedText({
  mode = 'slide-up',
  text = '',
  className = '',
  tag = 'div',
  delay = 0,
  stagger = 0.03,
  once = true,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-80px' });
  const content = text || (typeof children === 'string' ? children : '');
  const Tag = tag;

  // ── Split Characters ─────────────────────────────────────────
  if (mode === 'split-chars' && content) {
    const chars = content.split('');
    return (
      <Tag ref={ref} className={`${className}`} aria-label={content} {...rest}>
        {chars.map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
            initial={{ opacity: 0, y: 40, rotateX: -60 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: delay + i * (stagger || 0.025),
              ease: [0.215, 0.61, 0.355, 1],
            }}
          >
            {char}
          </motion.span>
        ))}
      </Tag>
    );
  }

  // ── Split Words ───────────────────────────────────────────────
  if (mode === 'split-words' && content) {
    const words = content.split(' ');
    return (
      <Tag ref={ref} className={`${className}`} aria-label={content} {...rest}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.3em] align-bottom">
            <motion.span
              className="inline-block"
              initial={{ y: '110%' }}
              animate={isInView ? { y: '0%' } : {}}
              transition={{
                duration: 0.7,
                delay: delay + i * (stagger || 0.08),
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Tag>
    );
  }

  // ── Typewriter ────────────────────────────────────────────────
  if (mode === 'typewriter' && content) {
    return <TypewriterText ref={ref} content={content} className={className} tag={Tag} delay={delay} isInView={isInView} {...rest} />;
  }

  // ── Blur In ───────────────────────────────────────────────────
  if (mode === 'blur-in') {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, filter: 'blur(16px)', y: 20 }}
        animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
        transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
        {...rest}
      >
        {children || content}
      </motion.div>
    );
  }

  // ── Slide Up (default) ────────────────────────────────────────
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...rest}
    >
      {children || content}
    </motion.div>
  );
}


// ── Typewriter sub-component ───────────────────────────────────
const TypewriterText = React.forwardRef(({ content, className, tag: Tag, delay, isInView, ...rest }, ref) => {
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let index = 0;
    const delayMs = delay * 1000;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        index++;
        setDisplayed(content.slice(0, index));
        if (index >= content.length) {
          clearInterval(interval);
          // Hide cursor after 2 seconds
          setTimeout(() => setShowCursor(false), 2000);
        }
      }, 55);
      return () => clearInterval(interval);
    }, delayMs);

    return () => clearTimeout(timeout);
  }, [isInView, content, delay]);

  return (
    <Tag ref={ref} className={`${className}`} {...rest}>
      <span>{displayed}</span>
      {showCursor && (
        <span className="inline-block w-[2px] h-[1em] bg-accent-chartreuse ml-1 align-middle animate-pulse" />
      )}
    </Tag>
  );
});

TypewriterText.displayName = 'TypewriterText';
