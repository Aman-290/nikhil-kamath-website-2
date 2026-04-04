import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ThePerson() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section id="section-person" className="relative w-full py-32 z-10 min-h-screen bg-[#0A0A0A] overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent-chartreuse/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-[1400px]">
        
        {/* Intro */}
        <motion.div 
          className="mb-24 md:mb-40 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-chartreuse">Behind the Numbers</span>
          </div>
          <h2 className="font-clash text-6xl md:text-8xl lg:text-[7rem] text-primary-text mb-6 leading-none tracking-tight">The Person.</h2>
          <p className="font-satoshi text-2xl md:text-3xl text-secondary-text max-w-2xl leading-relaxed">
            The routines, the philosophies, and the paradoxes that built him.
          </p>
        </motion.div>

        {/* The Daily Ritual - Minimal Scannable Layout */}
        <div className="mb-40 relative">
          <h3 className="font-clash text-4xl text-primary-text mb-12 flex items-center gap-4">
            The Ritual <span className="h-px bg-white/10 flex-1 ml-4" />
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <motion.div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-accent-chartreuse/30 transition-colors group flex flex-col justify-between min-h-[250px]">
              <span className="text-secondary-text font-mono text-sm uppercase tracking-widest group-hover:text-accent-chartreuse transition-colors">6:30 AM</span>
              <div>
                <h4 className="text-2xl font-clash text-white mb-2">Sunlight & Data</h4>
                <p className="font-satoshi text-secondary-text text-sm h-12">20 minutes of morning sun. Bloomberg. The Print.</p>
              </div>
            </motion.div>
            
            <motion.div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-accent-chartreuse/30 transition-colors group flex flex-col justify-between min-h-[250px]">
              <span className="text-secondary-text font-mono text-sm uppercase tracking-widest group-hover:text-accent-chartreuse transition-colors">11:00 AM</span>
              <div>
                <h4 className="text-2xl font-clash text-white mb-2">Fasting State</h4>
                <p className="font-satoshi text-secondary-text text-sm h-12">Black coffee only. 16:8 intermittent fasting. No breakfast.</p>
              </div>
            </motion.div>
            
            <motion.div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-accent-chartreuse/30 transition-colors group flex flex-col justify-between min-h-[250px]">
              <span className="text-secondary-text font-mono text-sm uppercase tracking-widest group-hover:text-accent-chartreuse transition-colors">1:30 PM & 4:00 PM</span>
              <div>
                <h4 className="text-2xl font-clash text-white mb-2">Markets & Muscle</h4>
                <p className="font-satoshi text-secondary-text text-sm h-12">Deep work on portfolio, followed by the daily gym session.</p>
              </div>
            </motion.div>
            
            <motion.div className="bg-gradient-to-br from-accent-red/10 to-transparent p-8 rounded-3xl border border-accent-red/20 hover:border-accent-red/40 transition-colors group flex flex-col justify-between min-h-[250px]">
              <span className="text-accent-red font-mono text-sm uppercase tracking-widest">6:00 PM onwards</span>
              <div>
                <h4 className="text-2xl font-clash text-white mb-2">The Shut Down</h4>
                <p className="font-satoshi text-secondary-text text-sm">No messages. No devices 1 hour before bed. Magnesium + Theanine.</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Library & Mind Grid */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-16 mb-40 items-center">
          
          {/* The Library (7 cols) */}
          <motion.div 
            className="lg:col-span-7 bg-surface-bg p-10 md:p-14 rounded-[2.5rem] border border-white/5 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4h16v15.5a2.5 2.5 0 0 1-2.5 2.5H6.5A2.5 2.5 0 0 1 4 19.5v-15.5z"/></svg>
            </div>
            
            <span className="text-accent-chartreuse font-mono text-sm uppercase tracking-widest mb-6 block">The Library</span>
            <div className="flex items-baseline gap-4 mb-8">
              <h3 className="font-clash text-7xl md:text-[6rem] text-primary-text leading-none">500+</h3>
              <span className="font-clash text-2xl text-secondary-text">Books</span>
            </div>
            
            <p className="font-satoshi text-xl text-primary-text mb-10 max-w-lg leading-relaxed">
              1-2 per week since dropping out. Reading was his substitute for formal education.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 font-satoshi text-sm">
              <div className="border-t border-white/10 pt-4">
                <span className="text-primary-text block font-medium mb-1">Nassim Taleb</span>
                <span className="text-secondary-text">Anti-fragility & randomness.</span>
              </div>
              <div className="border-t border-white/10 pt-4">
                <span className="text-primary-text block font-medium mb-1">Peter Thiel</span>
                <span className="text-secondary-text">Zero-to-one thinking.</span>
              </div>
              <div className="border-t border-white/10 pt-4">
                <span className="text-primary-text block font-medium mb-1">Ram Dass</span>
                <span className="text-secondary-text">Ego dissolution.</span>
              </div>
            </div>
          </motion.div>

          {/* The Tattoos (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-clash text-3xl text-primary-text mb-6">Ink & Philosophy</h3>
            
            {/* Wrist */}
            <div className="group relative w-full h-24 rounded-2xl bg-white/5 border border-white/10 overflow-hidden cursor-default flex items-center px-8">
              <div className="relative z-10 w-full flex justify-between items-center transition-transform duration-500 group-hover:-translate-y-full">
                <span className="font-garamond text-3xl text-white">Shalom</span>
                <span className="font-mono text-secondary-text uppercase tracking-widest text-[10px]">Left Wrist</span>
              </div>
              <div className="absolute inset-0 z-20 flex items-center px-8 bg-accent-gold/10 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-satoshi text-primary-text text-sm">Peace in two languages. On the wrist that executes trades.</p>
              </div>
            </div>

            {/* Arm */}
            <div className="group relative w-full h-24 rounded-2xl bg-white/5 border border-white/10 overflow-hidden cursor-default flex items-center px-8">
              <div className="relative z-10 w-full flex justify-between items-center transition-transform duration-500 group-hover:-translate-y-full">
                <span className="font-garamond text-2xl text-white tracking-widest uppercase font-bold">Be Here Now</span>
                <span className="font-mono text-secondary-text uppercase tracking-widest text-[10px]">Right Arm</span>
              </div>
              <div className="absolute inset-0 z-20 flex items-center px-8 bg-accent-chartreuse/10 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-satoshi text-primary-text text-sm">Ram Dass mantra. A reminder to stay present.</p>
              </div>
            </div>

            {/* Chest */}
            <div className="group relative w-full h-24 rounded-2xl bg-white/5 border border-white/10 overflow-hidden cursor-default flex items-center px-8">
              <div className="relative z-10 w-full flex justify-between items-center transition-transform duration-500 group-hover:-translate-y-full">
                <span className="font-clash text-xl text-white">The Golden Rule</span>
                <span className="font-mono text-secondary-text uppercase tracking-widest text-[10px]">Chest/Back</span>
              </div>
              <div className="absolute inset-0 z-20 flex items-center px-8 bg-white/10 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-satoshi text-primary-text text-sm">"Don't do unto others..." His baseline for morality.</p>
              </div>
            </div>

          </div>
        </div>

        {/* On Changing One's Mind */}
        <motion.div
          className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 md:p-10 mt-16 mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20 mb-6 block">On changing one's mind</span>
          <div className="font-satoshi text-white/60 text-lg leading-relaxed space-y-4 mb-6">
            <p>He preached renting for years.<br/>Wrote it. Said it in interviews. Meant it.</p>
            <p>Then bought 7,000 sq ft in Kingfisher Towers.<br/>Kiran Mazumdar-Shaw is his neighbour.</p>
          </div>
          <div className="border-l-2 border-[#D4FF00] pl-6 my-6">
            <p className="font-satoshi italic text-white/70 text-lg leading-relaxed">
              "With new information, if you are able to change your mind quickly — that has served me well."
            </p>
          </div>
          <p className="font-satoshi text-white/40 text-sm italic">
            He was right to change his mind. He was right to say so publicly.
          </p>
        </motion.div>

        {/* The Man Box */}
        <motion.div 
          className="relative bg-[#D4FF00] rounded-[2.5rem] p-12 md:p-20 overflow-hidden mb-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="font-clash text-5xl md:text-6xl text-black mb-px leading-none">More than</h4>
              <h4 className="font-clash text-5xl md:text-6xl text-black mb-6 leading-none">just markets.</h4>
              <p className="font-satoshi text-xl text-black/70 mb-8 max-w-sm">
                Up to 10 days a month in Goa. Vintage watch collector (for stories, not status). Proud owner of two Labradors: Chase and Grace.
              </p>
              <div className="inline-flex items-center gap-3 bg-black/5 border border-black/10 rounded-full px-5 py-2.5">
                <span className="text-black font-mono text-xs uppercase tracking-widest font-bold">Signature Fragrance:</span>
                <span className="text-black/70 font-satoshi text-sm">Tom Ford Ombré Leather</span>
              </div>
            </div>
            
            <div className="bg-black/90 p-10 rounded-3xl border border-white/10 shadow-2xl">
              <span className="text-[#D4FF00] font-mono text-xs uppercase tracking-widest mb-6 block">The Insecurity</span>
              <p className="font-garamond italic text-2xl lg:text-3xl text-white leading-snug mb-6">
                "We get a lot of flak for not being good-looking people. Even our wives tell us we're ugly."
              </p>
              <p className="font-satoshi text-gray-400 text-sm">
                Yes, those were his real words in an interview. <br/>Brutal honesty, no filter.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
