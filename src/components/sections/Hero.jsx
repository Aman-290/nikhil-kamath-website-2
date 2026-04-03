import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center pt-24 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 blur-[6px] opacity-40 mix-blend-screen"   
        >
          <source src="/assets/animation/hero-video.mp4" type="video/mp4" />
          <source src="/assets/animations/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-background-dark/30" />
      </div>

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
          className="object-contain object-bottom max-h-[90vh] drop-shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, x: 50, y: 0 }}
          animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
          transition={{ 
            opacity: { duration: 1.5, delay: 0.5, ease: "easeOut" },
            x: { duration: 1.5, delay: 0.5, ease: "easeOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 } 
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 w-full max-w-7xl">
        <motion.div 
          className="max-w-3xl mt-[-5vh]"
          initial={{ opacity: 1 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          {/* Pill / Badge placed above headline */}
          <motion.div 
            className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#D4FF00]" />
            <span className="font-mono text-[11px] md:text-sm tracking-[0.2em] text-gray-300 uppercase">
              2003 &nbsp;·&nbsp; ₹8,000/mo &nbsp;·&nbsp; Age 17
            </span>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-[7.5rem] font-clash mb-10 leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-white block font-medium">The line is</span>
            <span className="text-gray-400 font-light italic block -mt-1 md:-mt-3">the biography.</span>
          </motion.h1>
          
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl font-satoshi text-gray-400 leading-relaxed mb-6">
              From <span className="text-white font-medium">₹8,000 / mo</span> to <span className="text-white font-medium">₹27,000 Cr.</span>
              <br className="hidden md:block"/> No degree, no investors, no advertising.
            </p>
            <p className="text-white font-medium text-xl md:text-2xl tracking-tight flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#D4FF00]" />
              One decision, compounded, twenty years.
            </p>
          </motion.div>
        </motion.div>
      </div>

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
