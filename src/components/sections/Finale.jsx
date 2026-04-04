import React from 'react';
import { motion } from 'framer-motion';

export default function Finale() {
  // The actual line breaking the boundary will be simulated by a tall div that goes off-screen
  return (
    <section className="relative w-full z-10 min-h-[150vh] flex flex-col justify-end pb-32 bg-[#0A0A0F]">
      
      {/* Narrative Sequence */}
      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-4xl text-center mb-32">
        
        <div className="space-y-32">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5 }}
          >
            <h2 className="font-clash text-5xl md:text-7xl lg:text-8xl text-primary-text drop-shadow-lg">
              ₹8,000 <span className="text-accent-chartreuse font-normal">→</span> ₹27,000 Crore.
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5 }}
          >
            <h3 className="font-clash text-4xl md:text-6xl text-secondary-text">20 years.</h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5 }}
          >
            <h3 className="font-clash text-4xl md:text-6xl text-primary-text">One line.</h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 2 }}
            className="font-satoshi text-2xl md:text-4xl text-secondary-text leading-relaxed"
          >
            <p className="mb-2">No degree.</p>
            <p className="mb-2">No investors.</p>
            <p className="mb-2">No advertising.</p>
            <p>No legacy plan.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5 }}
          >
            <p className="font-satoshi text-2xl md:text-4xl text-primary-text">
              Just a 17-year-old in a call centre<br/>who decided to figure it out.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 2 }}
            className="pt-16 pb-16"
          >
            <p className="font-garamond italic text-4xl md:text-6xl text-primary-text mb-4">
              "The biggest risk is none taken."
            </p>
            <span className="font-mono text-sm tracking-widest uppercase text-secondary-text">— Nikhil Kamath</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 3 }}
          >
            <p className="font-satoshi text-sm text-secondary-text border-t border-white/5 pt-8 inline-block">
              The line never stops. Neither does he.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Social Links (Bottom Right) */}
      <div className="absolute bottom-8 right-6 md:right-12 z-50 flex items-center space-x-6">
        {['Instagram', 'X', 'YouTube', 'LinkedIn'].map(platform => (
          <a key={platform} href={`https://${platform.toLowerCase()}.com/nikhilkamathcio`} target="_blank" rel="noreferrer" className="text-xs font-mono text-secondary-text hover:text-primary-text transition-colors uppercase tracking-widest flex items-center space-x-2 tooltip-trigger group relative">
            <span>{platform}</span>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black px-2 py-1 rounded text-xs whitespace-nowrap pointer-events-none text-accent-chartreuse">
              @nikhilkamathcio
            </div>
          </a>
        ))}
      </div>

      {/* Chart boundary break visual at very top of finale */}
      <div className="absolute top-0 left-[50%] -translate-x-1/2 w-4 h-32 bg-gradient-to-t from-accent-chartreuse to-transparent z-0 opacity-50" />
      
    </section>
  );
}
