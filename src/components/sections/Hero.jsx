import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center pt-24 overflow-hidden">
      {/* Background ambient particles (CSS abstraction) */}
      <div className="absolute inset-x-0 bottom-0 top-32 overflow-hidden pointer-events-none opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent-chartreuse blur-sm"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `particleDrift ${Math.random() * 10 + 10}s linear infinite`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes particleDrift {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-100px) translateX(50px); }
          100% { transform: translateY(-200px) translateX(-50px); opacity: 0; }
        }
      `}} />

      {/* Hero Image */}
      <div className="absolute right-0 bottom-0 w-[50%] md:w-[45%] h-full flex items-end justify-end pointer-events-none z-10 masked-hero">
        <motion.img 
          src="/assets/images/nikhil-hero-bw-cutout.png" 
          alt="Nikhil Kamath" 
          className="object-contain object-bottom max-h-[90vh] grayscale opacity-80 mix-blend-lighten"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 w-full max-w-7xl">
        <div className="max-w-2xl mt-[-10vh]">
          <motion.h1 
            className="text-6xl md:text-8xl font-clash text-primary-text mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            The line is<br/>the biography.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl font-satoshi text-secondary-text max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <span className="text-primary-text font-medium">₹8,000 per month to ₹27,000 Crore.</span><br/>
            No degree. No investors. No advertising.<br/>
            One decision, compounded, twenty years.
          </motion.p>
        </div>
      </div>

      {/* The initial line dot label */}
      <motion.div 
        className="absolute bottom-32 left-6 md:left-[50%] z-20 flex items-center space-x-4 md:-translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-4 h-4 rounded-full bg-accent-chartreuse shadow-[0_0_15px_rgba(212,255,0,0.8)] animate-pulse" />
        <span className="font-mono text-sm tracking-wider text-secondary-text">
          2003 &nbsp;·&nbsp; ₹8,000/month &nbsp;·&nbsp; Age 17
        </span>
      </motion.div>

      {/* CTA Scroll */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <ChevronDown className="w-6 h-6 text-accent-chartreuse animate-bounce mb-2" />
        <span className="text-xs uppercase tracking-widest text-secondary-text font-mono">Scroll to trace the line</span>
      </motion.div>

    </section>
  );
}
