import React from 'react';
import { motion } from 'framer-motion';
// PodcastWall archived — replaced with editorial layout per PRD

export default function TheConversations() {
  return (
    <section id="section-conversations" className="relative w-full z-10 pb-32">

      {/* Two-column hero block */}
      <div className="flex flex-col lg:flex-row min-h-[80vh]">

        {/* Left: Studio image (60%) */}
        <div className="relative w-full lg:w-[60%] overflow-hidden min-h-[50vh] lg:min-h-[80vh]">
          <motion.img
            src="/assets/images/wtf-podcast-studio.webp"
            alt="WTF Podcast Studio"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileInView={{ scale: 1.04 }}
            viewport={{ once: true }}
            transition={{ duration: 8, ease: 'linear' }}
          />
          {/* Gradient overlay fading into the right column */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent lg:hidden" />
        </div>

        {/* Right: Editorial content (40%) */}
        <div className="relative w-full lg:w-[40%] flex flex-col justify-center px-8 md:px-12 xl:px-16 py-16 bg-[#050505]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-clash text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-[1.1] tracking-tight">
              He records everything<br/>
              <span className="text-white/40">on one day per month.</span>
            </h2>

            <div className="space-y-4 font-satoshi text-lg text-white/60 border-l-2 border-[#D4FF00] pl-6 mb-10">
              <p>His approach: play the curious learner. Ask the questions you'd be embarrassed to ask. The basic ones. The ones with no assumed expertise.</p>
              <p className="text-white">Guests speak unfiltered because they don't know where to stop. That's the design.</p>
            </div>

            {/* Existing stat blocks */}
            <div className="flex gap-6">
              <div className="bg-white/[0.04] px-4 py-3 rounded-xl border border-white/10">
                <span className="block text-2xl font-mono text-white">2.08M</span>
                <span className="text-xs uppercase tracking-widest text-white/40">Subscribers</span>
              </div>
              <div className="bg-white/[0.04] px-4 py-3 rounded-xl border border-white/10">
                <span className="block text-2xl font-mono text-white">987M</span>
                <span className="text-xs uppercase tracking-widest text-white/40">Total Views</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Three defining stat blocks */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="px-8 md:px-12 py-12 md:border-r border-white/10">
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase block mb-3">Guest</span>
          <p className="font-clash text-2xl md:text-3xl text-white leading-tight">PM Narendra Modi</p>
          <p className="font-satoshi text-white/40 text-sm mt-2">First-ever podcast appearance</p>
        </div>
        <div className="px-8 md:px-12 py-12 md:border-r border-white/10 border-t md:border-t-0">
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase block mb-3">Views</span>
          <p className="font-clash text-2xl md:text-3xl text-white leading-tight">7,000,000</p>
          <p className="font-satoshi text-white/40 text-sm mt-2">Elon Musk episode.</p>
        </div>
        <div className="px-8 md:px-12 py-12 border-t md:border-t-0">
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase block mb-3">The operation</span>
          <p className="font-clash text-2xl md:text-3xl text-white leading-tight">One Day</p>
          <p className="font-satoshi text-white/40 text-sm mt-2">Per month. That's it.</p>
        </div>
      </motion.div>

      {/* Bryan Johnson footnote */}
      <p className="font-satoshi italic text-white/30 text-sm text-center px-8 pt-8 pb-4">
        Bryan Johnson walked out mid-episode. Cited Mumbai air quality. Called Nikhil a courteous host.
      </p>

    </section>
  );
}
