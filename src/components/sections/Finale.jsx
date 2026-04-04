import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEasterEggStore } from '../../hooks/useEasterEgg';
import AnimatedText from '../ui/AnimatedText';

export default function Finale() {
  const { foundEggs } = useEasterEggStore();
  const [showEggList, setShowEggList] = useState(false);
  const foundCount = foundEggs?.size ?? 0;

  const { scrollYProgress } = useScroll();
  const finaleScale = useTransform(scrollYProgress, [0.85, 0.95], [0.96, 1]);
  const finaleOpacity = useTransform(scrollYProgress, [0.85, 0.92], [0.5, 1]);

  return (
    <section data-chapter-id="finale" className="relative w-full z-10 min-h-[150vh] flex flex-col justify-end pb-32 bg-[#0A0A0F]">
      
      {/* Vignette overlay */}
      <div className="fixed inset-0 pointer-events-none z-[5] opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)',
        }}
      />

      {/* Narrative Sequence */}
      <motion.div
        className="container mx-auto px-6 md:px-12 xl:px-24 max-w-4xl text-center mb-32"
        style={{ scale: finaleScale, opacity: finaleOpacity }}
      >
        
        <div className="space-y-32">
          
          <AnimatedText mode="slide-up" delay={0}>
            <h2 className="font-clash text-5xl md:text-7xl lg:text-8xl text-primary-text drop-shadow-lg">
              ₹8,000 <span className="text-accent-chartreuse font-normal">→</span> ₹27,000 Crore.
            </h2>
          </AnimatedText>

          <AnimatedText mode="split-words" text="20 years." tag="h3" className="font-clash text-4xl md:text-6xl text-secondary-text" delay={0} />

          <AnimatedText mode="split-words" text="One line." tag="h3" className="font-clash text-4xl md:text-6xl text-primary-text" delay={0} />

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 2 }}
            className="font-satoshi text-2xl md:text-4xl text-secondary-text leading-relaxed"
          >
            {['No degree.', 'No investors.', 'No advertising.', 'No legacy plan.'].map((line, i) => (
              <motion.p
                key={i}
                className="mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>

          <AnimatedText mode="slide-up" delay={0}>
            <p className="font-satoshi text-2xl md:text-4xl text-primary-text">
              A 17-year-old in a call centre<br/>who decided to figure it out.
            </p>
          </AnimatedText>

          {/* Final quote — blur-in cinematic reveal */}
          <AnimatedText mode="blur-in" delay={0.2} className="pt-16 pb-16">
            <p className="font-garamond italic text-4xl md:text-6xl text-primary-text mb-4">
              "The biggest risk is none taken."
            </p>
            <span className="font-mono text-sm tracking-widest uppercase text-secondary-text">— Nikhil Kamath</span>
          </AnimatedText>

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
      </motion.div>

      {/* Social Links — staggered entrance */}
      <div className="absolute bottom-8 right-6 md:right-12 z-50 flex items-center space-x-6">
        {['Instagram', 'X', 'YouTube', 'LinkedIn'].map((platform, i) => (
          <motion.a
            key={platform}
            href={`https://${platform.toLowerCase()}.com/nikhilkamathcio`}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-secondary-text hover:text-primary-text transition-colors uppercase tracking-widest flex items-center space-x-2 tooltip-trigger group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
          >
            <span>{platform}</span>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black px-2 py-1 rounded text-xs whitespace-nowrap pointer-events-none text-accent-chartreuse">
              @nikhilkamathcio
            </div>
          </motion.a>
        ))}
      </div>

      {/* Chart boundary break visual */}
      <div className="absolute top-0 left-[50%] -translate-x-1/2 w-4 h-32 bg-gradient-to-t from-accent-chartreuse to-transparent z-0 opacity-50" />
      
    </section>
  );
}
