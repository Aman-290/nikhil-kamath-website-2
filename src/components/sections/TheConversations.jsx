import React from 'react';
import { motion } from 'framer-motion';
import PodcastWall from '../ui/PodcastWall';

export default function TheConversations() {
  return (
    <section className="relative w-full z-10 pt-32">
      
      {/* Intro section before the horizontal scroll */}
      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-7xl mb-16 relative">
        <div className="absolute inset-0 pointer-events-none">
           <img src="/assets/images/wtf-podcast-studio.webp" alt="Background Studio" className="w-full h-full object-cover opacity-10 mix-blend-screen mask-image-bottom-fade" />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-end justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="font-clash text-5xl md:text-7xl lg:text-8xl text-primary-text mb-8 leading-[1.1] tracking-tight">
              He records everything<br/>
              <span className="text-secondary-text">on one day per month.</span>
            </h2>
            <div className="space-y-4 font-satoshi text-lg text-secondary-text border-l-2 border-accent-chartreuse pl-6">
              <p>His approach: play the curious learner. Ask the questions you'd be embarrassed to ask. The basic ones. The ones with no assumed expertise.</p>
              <p className="text-primary-text">Guests speak unfiltered because they don't know where to stop. That's the design.</p>
            </div>
            <div className="flex gap-6 mt-8">
              <div className="bg-surface-bg px-4 py-2 rounded border border-white/5">
                <span className="block text-2xl font-mono text-primary-text">2.08M</span>
                <span className="text-xs uppercase tracking-widest text-secondary-text">Subscribers</span>
              </div>
              <div className="bg-surface-bg px-4 py-2 rounded border border-white/5">
                <span className="block text-2xl font-mono text-primary-text">987M</span>
                <span className="text-xs uppercase tracking-widest text-secondary-text">Total Views</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
             className="max-w-xs space-y-6"
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h4 className="font-clash text-xl text-primary-text mb-1">WTF is</h4>
              <p className="font-satoshi text-sm text-secondary-text">Industry roundtables. 3-6 guests. 2-4 hours. AI, longevity, real estate, gaming.</p>
            </div>
            <div>
              <h4 className="font-clash text-xl text-primary-text mb-1">People by WTF</h4>
              <p className="font-satoshi text-sm text-secondary-text">One-on-one. World figures. The show that hosted a PM's pod debut.</p>
            </div>
            <div>
              <h4 className="font-clash text-xl text-primary-text mb-1">WTF Online</h4>
              <p className="font-satoshi text-sm text-secondary-text">Virtual. Shorter. Unfiltered. Asking CEOs for internships.</p>
            </div>
          </motion.div>
        </div>
      </div>

      <PodcastWall />

    </section>
  );
}
