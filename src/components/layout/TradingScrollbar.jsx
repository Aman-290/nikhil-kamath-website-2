import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

function Candle({ index, numCandles, smoothProgress, onJump }) {
  const start = index / numCandles;
  const end = (index + 1) / numCandles;

  const fillAmount = useTransform(smoothProgress, [start, end], [0, 1]);
  const isPassedOrActive = useTransform(smoothProgress, [start, end], [0.3, 1]);
  
  // Create a glow opacity for the current active candle
  const glowOpacity = useTransform(smoothProgress, [start - 0.1, start, end, end + 0.1], [0, 1, 1, 0]);

  const fillHeight = useTransform(fillAmount, (val) => `${val * 100}%`);

  const labels = [
    "OPEN", "EARLY", "HUSTLE", "BUILD", 
    "SCALE", "PLATEAU", "REBIRTH", "CLOSE"
  ];

  return (
    <div 
      onClick={() => onJump(index)}
      className="relative w-12 h-full flex flex-col items-center justify-center cursor-pointer group py-1"
    >
      {/* Individual Wick - Top & Bottom */}
      <div className="absolute top-0 bottom-0 w-[1px] bg-white/10 transition-colors group-hover:bg-white/30" />

      {/* Candle Body Container - Glassmorphism */}
      <motion.div 
        className="w-3 md:w-4 h-10 border border-white/20 bg-black/40 backdrop-blur-md rounded-[2px] overflow-hidden relative z-10 group-hover:border-[#D4FF00]/60 transition-all duration-500 shadow-lg"
        style={{ opacity: isPassedOrActive }}
      >
        {/* Inside Fill Box */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#D4FF00] to-[#bfe600]"
          style={{ height: fillHeight }}
        />

        {/* Inner Glare / Reflection */}
        <div className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] pointer-events-none" />
      </motion.div>

      {/* Active Glow behind the candle */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-12 bg-[#D4FF00]/40 blur-xl pointer-events-none rounded-full"
        style={{ opacity: glowOpacity }}
      />

      {/* Premium Tooltip on hover */}
      <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex items-center">
        <div className="bg-black/60 backdrop-blur-lg border border-white/10 px-3 py-1.5 rounded-sm flex items-center space-x-3 shadow-2xl">
          <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">VOL_{index + 1}</span>
          <div className="w-px h-3 bg-white/20" />
          <span className="font-mono text-xs tracking-widest text-[#D4FF00] uppercase font-bold drop-shadow-[0_0_5px_rgba(212,255,0,0.5)]">
            {labels[index] || `VOL_${index}`}
          </span>
        </div>
        {/* Pointer Triangle */}
        <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[4px] border-l-white/10 ml-[1px]" />
      </div>
    </div>
  );
}

export default function TradingScrollbar() {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll progress for the animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const numCandles = 8;
  const candles = Array.from({ length: numCandles }, (_, i) => i);

  // Jump to section logic
  const handleJump = (index) => {
    // Math to jump exactly to the proportion of the page
    const targetPercentage = index / (numCandles - 1);
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    
    window.scrollTo({
      top: maxScroll * targetPercentage,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed right-2 md:right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-center py-4 isolate hidden md:flex mix-blend-normal">
      
      {/* Background / Unfilled Global Wick */}
      <div className="absolute top-0 bottom-0 w-[1px] bg-white/5 -z-10" />

      {/* Filled Wick - fills from top to bottom as user scrolls */}
      <motion.div 
        className="absolute top-0 w-[2px] bg-gradient-to-b from-[#D4FF00]/80 to-[#D4FF00] shadow-[0_0_15px_rgba(212,255,0,0.8)] -z-10 origin-top rounded-full"
        style={{ 
          height: '100%',
          scaleY: smoothProgress 
        }}
      />

      <div className="flex flex-col items-center justify-between h-[60vh] min-h-[400px] max-h-[800px] w-12 bg-black/10 backdrop-blur-sm rounded-full py-4 border border-white/5 shadow-2xl">
        {candles.map((index) => (
          <Candle 
            key={index} 
            index={index} 
            numCandles={numCandles} 
            smoothProgress={smoothProgress} 
            onJump={handleJump} 
          />
        ))}
      </div>
    </div>
  );
}