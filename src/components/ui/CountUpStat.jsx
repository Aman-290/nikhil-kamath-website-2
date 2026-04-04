import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

/**
 * CountUpStat — Animated counter that counts up when entering viewport.
 *
 * @param {string} value — The target display value (e.g., "16M+", "₹9,372Cr", "15.8%")
 * @param {number} duration — Animation duration in ms. Default 2000
 * @param {string} className — Classes for the number display
 * @param {number} delay — Delay before counting starts in ms. Default 0
 */
export default function CountUpStat({
  value = '0',
  duration = 2000,
  className = '',
  delay = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('');
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    // Parse the value to extract the numeric part and decorators
    const parsed = parseValue(value);

    const delayTimeout = setTimeout(() => {
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);

        const currentNum = parsed.start + (parsed.end - parsed.start) * eased;

        let formatted;
        if (parsed.hasDecimals) {
          formatted = currentNum.toFixed(parsed.decimals);
        } else {
          formatted = Math.floor(currentNum).toLocaleString('en-IN');
        }

        setDisplayValue(`${parsed.prefix}${formatted}${parsed.suffix}`);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Set final value exactly as provided
          setDisplayValue(value);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [isInView, value, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {displayValue || value.replace(/[0-9.,]/g, '0').slice(0, 1)}
    </span>
  );
}

/**
 * Parse a stat value like "₹9,372Cr" or "16M+" or "15.8%"
 * into { prefix, end, suffix, hasDecimals, decimals, start }
 */
function parseValue(value) {
  // Extract prefix (non-numeric leading chars like ₹)
  const prefixMatch = value.match(/^([^\d]*)/);
  const prefix = prefixMatch ? prefixMatch[1] : '';

  // Extract suffix (non-numeric trailing chars like Cr, M+, %)
  const suffixMatch = value.match(/([^\d.,]*$)/);
  const suffix = suffixMatch ? suffixMatch[1] : '';

  // Extract the numeric part
  const numStr = value.slice(prefix.length, value.length - (suffix.length || 0));
  const cleanNum = numStr.replace(/,/g, '');
  const num = parseFloat(cleanNum);

  const hasDecimals = cleanNum.includes('.');
  const decimals = hasDecimals ? cleanNum.split('.')[1].length : 0;

  return {
    prefix,
    suffix,
    start: 0,
    end: isNaN(num) ? 0 : num,
    hasDecimals,
    decimals,
  };
}
