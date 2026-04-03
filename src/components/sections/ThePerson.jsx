import React from 'react';
import { motion } from 'framer-motion';

export default function ThePerson() {
  return (
    <section className="relative w-full py-32 z-10 min-h-screen bg-primary-bg overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-7xl">
        
        {/* Intro */}
        <motion.div 
          className="mb-32 max-w-3xl border-l-4 border-accent-chartreuse pl-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-clash text-5xl md:text-7xl text-primary-text mb-6">The Person</h2>
          <p className="font-satoshi text-2xl text-secondary-text">The work behind the numbers.</p>
        </motion.div>

        {/* The Daily Ritual */}
        <div className="mb-32 relative">
          <h3 className="font-clash text-3xl md:text-4xl text-primary-text mb-12">The Daily Ritual</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div className="bg-surface-bg p-8 rounded-2xl border border-white/5" whileHover={{ y: -5 }}>
              <span className="text-accent-gold font-mono text-xl block mb-4">6:30 AM</span>
              <p className="font-satoshi text-primary-text mb-2">20 minutes of morning sunlight while reading. Bloomberg. The Print.</p>
              <p className="text-secondary-text text-sm italic border-l-2 border-white/20 pl-4 mt-4">"The day begins with information, not reaction."</p>
            </motion.div>
            
            <motion.div className="bg-surface-bg p-8 rounded-2xl border border-white/5" whileHover={{ y: -5 }}>
              <span className="text-accent-chartreuse font-mono text-xl block mb-4">11:00 AM</span>
              <p className="font-satoshi text-primary-text mb-2">Black coffee. Nothing else. 16:8 intermittent fasting. No breakfast.</p>
              <p className="text-secondary-text text-sm italic border-l-2 border-white/20 pl-4 mt-4">"His metabolism is a trading system: disciplined inputs."</p>
            </motion.div>
            
            <motion.div className="bg-surface-bg p-8 rounded-2xl border border-white/5" whileHover={{ y: -5 }}>
              <span className="text-accent-chartreuse font-mono text-xl block mb-4">1:30 PM & 4:00 PM</span>
              <p className="font-satoshi text-primary-text mb-2">1:30 PM - Meetings (Stock market analysis mornings).<br/>4:00 PM - Gym.</p>
              <p className="text-secondary-text text-sm italic border-l-2 border-white/20 pl-4 mt-4">"The body is managed like a portfolio."</p>
            </motion.div>
            
            <motion.div className="bg-surface-bg p-8 rounded-2xl border border-white/5 lg:col-span-2" whileHover={{ y: -5 }}>
              <span className="text-accent-red font-mono text-xl block mb-4">6:00 PM & 11:30 PM</span>
              <p className="font-satoshi text-primary-text mb-4">No messages after 6 PM. No devices 1 hour before bed. Magnesium + theanine before sleep.</p>
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="font-garamond italic text-lg text-primary-text mb-2">"'I struggle to fall asleep. I'm constantly working to improve my sleep habits.'"</p>
                <p className="text-secondary-text text-sm">He tracks it. He hasn't solved it. Even billionaires are still optimizing.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Library & Tattoos Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32 items-start">
          
          {/* The Library */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface-bg border border-white/5 group">
              <img src="/assets/images/books-library-500.webp" alt="The Library" className="w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="font-clash text-4xl text-primary-text drop-shadow-xl">500 books.</span>
              </div>
            </div>
            <div className="font-satoshi text-lg text-secondary-text leading-relaxed">
              <p className="mb-4">1-2 per week. Since dropping out.</p>
              <ul className="space-y-2 mb-6">
                <li><span className="text-primary-text">Nassim Nicholas Taleb:</span> anti-fragility, randomness.</li>
                <li><span className="text-primary-text">Peter Thiel:</span> zero-to-one thinking, contrarianism.</li>
                <li><span className="text-primary-text">Ram Dass:</span> ego dissolution, the present moment.</li>
              </ul>
              <p className="italic font-garamond text-xl text-primary-text mb-4">An unusual triad for a derivatives trader.<br/>The man contains multitudes.</p>
              <div className="border-l-2 border-white/20 pl-4 py-2 mt-4 text-primary-text font-medium">
                'Reading extensively allowed me to compensate for my lack of formal education.'<br/>
                <span className="text-accent-chartreuse text-sm uppercase tracking-widest mt-2 block font-normal">He compensated generously.</span>
              </div>
            </div>
          </motion.div>

          {/* The Tattoos */}
          <div className="space-y-6">
            <h3 className="font-clash text-3xl text-primary-text">The Tattoos</h3>
            <p className="text-sm font-mono text-secondary-text uppercase tracking-widest mb-4">Hover to reveal</p>
            
            {/* Wrist */}
            <div className="group perspective h-24 w-full">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute backface-hidden border-2 border-white/10 w-full h-full rounded-xl bg-surface-bg flex items-center px-8">
                  <span className="font-mono text-secondary-text uppercase tracking-widest text-xs absolute top-2 right-4">Left Wrist</span>
                  <span className="font-garamond text-3xl text-primary-text">Shalom</span>
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden border-2 border-accent-gold/50 w-full h-full rounded-xl bg-accent-gold/10 flex items-center px-8">
                  <p className="font-satoshi text-primary-text">Peace. In two languages. On the wrist that executes the trade.</p>
                </div>
              </div>
            </div>

            {/* Arm - Easter Egg 7 */}
            <div 
              className="group perspective h-24 w-full cursor-help"
            >
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute backface-hidden border-2 border-white/10 w-full h-full rounded-xl bg-surface-bg flex items-center px-8">
                  <span className="font-mono text-secondary-text uppercase tracking-widest text-xs absolute top-2 right-4">Right Arm</span>
                  <span className="font-garamond text-3xl text-primary-text tracking-widest uppercase font-bold">Be Here Now</span>
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden border-2 border-accent-chartreuse/50 w-full h-full rounded-xl bg-accent-chartreuse/10 flex items-center px-8">
                  <p className="font-satoshi text-primary-text">Ram Dass. The man who studied Taleb and Thiel also tattooed a spiritual mantra on his forearm. <span className="text-[10px] uppercase font-mono block mt-1 opacity-50 relative z-50">Hold to apply ink...</span></p>
                </div>
              </div>
            </div>

            {/* Chest */}
            <div className="group perspective h-32 w-full">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute backface-hidden border-2 border-white/10 w-full h-full rounded-xl bg-surface-bg flex flex-col justify-center px-8">
                  <span className="font-mono text-secondary-text uppercase tracking-widest text-xs absolute top-2 right-4">Across Chest / Back</span>
                  <span className="font-clash text-2xl text-primary-text">The Golden Rule</span>
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden border-2 border-white/30 w-full h-full rounded-xl bg-white/5 flex flex-col justify-center px-8">
                  <p className="font-garamond italic text-lg text-primary-text mb-1">"'Don't do unto others as you wouldn't have others do unto you.'"</p>
                  <p className="font-satoshi text-sm text-secondary-text">He calls it: 'the most simplistic way of gauging morality.'</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Hobbies, Fragrance, Insecurity */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <motion.div className="bg-surface-bg border border-white/5 p-8 rounded-2xl" whileHover={{ y: -5 }}>
            <h4 className="font-clash text-2xl text-primary-text mb-4">The Hobbies</h4>
            <ul className="space-y-3 font-satoshi text-sm text-secondary-text">
              <li><span className="text-primary-text">Painting & Guitar.</span> (AR Rahman brought that out of him)</li>
              <li><span className="text-primary-text">Vintage watch collecting.</span> Not for status, for stories.</li>
              <li><span className="text-primary-text">Two Labradors:</span> Chase and Grace.</li>
              <li><span className="text-primary-text">Up to 10 days</span> a month in Goa.</li>
            </ul>
          </motion.div>

          <motion.div className="bg-surface-bg border border-white/5 p-8 rounded-2xl flex flex-col justify-center text-center" whileHover={{ y: -5 }}>
            <span className="text-secondary-text font-mono text-xs uppercase tracking-widest block mb-4">The Fragrance</span>
            <h4 className="font-garamond italic text-3xl text-primary-text mb-2">Tom Ford Ombré Leather.</h4>
            <p className="font-satoshi text-secondary-text text-sm">For evening meetings. The stealth-wealth aesthetic extends to scent.</p>
          </motion.div>

          <motion.div className="bg-gradient-to-br from-[#1A1F2E] to-black border border-accent-red/20 p-8 rounded-2xl lg:col-span-1 md:col-span-2" whileHover={{ y: -5 }}>
            <h4 className="font-clash text-2xl text-accent-red mb-4">The Insecurity</h4>
            <div className="space-y-4 font-satoshi text-sm text-primary-text leading-relaxed">
              <p>Despite everything, he never stopped feeling like the dropout.</p>
              <p className="italic border-l border-white/20 pl-4 py-2 text-secondary-text pr-4">"I'm still that guy who works 85% of the day and lives with the insecurity of: What if it's taken from me? I think I grew up like that — insecure, anxious. I am even today."</p>
              <p className="font-medium text-accent-red/80 pt-2 border-t border-white/10">The ₹27,000 Crore didn't change that. Maybe it shouldn't.</p>
            </div>
          </motion.div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .my-rotate-y-180 { transform: rotateY(180deg); }
      `}} />
    </section>
  );
}
