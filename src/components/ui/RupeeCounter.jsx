import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function RupeeCounter({ value, onComplete }) {
  // Value is 8000
  const digits = value.toString().split(''); // ['8', '0', '0', '0']
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, 500); // Small delay before counting starts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center text-6xl md:text-8xl font-mono text-accent-chartreuse font-bold">
      <span>₹</span>
      <div className="flex ml-2">
        {digits.map((digit, i) => (
          <DigitColumn key={i} targetDigit={parseInt(digit, 10)} start={start} delay={i * 0.2} isLast={i === digits.length - 1} onComplete={onComplete} />
        ))}
      </div>
    </div>
  );
}

function DigitColumn({ targetDigit, start, delay, isLast, onComplete }) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  return (
    <div className="h-[1em] overflow-hidden relative" style={{ width: '0.6em' }}>
      <motion.div
        initial={{ y: 0 }}
        animate={start ? { y: `-${targetDigit * 10}0%` } : { y: 0 }}
        transition={{ duration: 2, delay: delay, ease: [0.16, 1, 0.3, 1] }}
        onAnimationComplete={() => {
          if (isLast && onComplete) onComplete();
        }}
        className="absolute inset-x-0 top-0 flex flex-col"
      >
        {/* We output numbers 0-9 10 times to simulate the spinning */}
        {Array.from({ length: 10 }).map((_, iteration) => 
          numbers.map((num) => (
            <span key={`${iteration}-${num}`} className="h-[1em] leading-none text-center">
              {num}
            </span>
          ))
        )}
      </motion.div>
    </div>
  );
}
