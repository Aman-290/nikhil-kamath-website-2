import React from 'react';
import { motion } from 'framer-motion';
import { useEasterEggStore, EGG_IDS } from '../../hooks/useEasterEgg';

export default function Origins() {
  const { unlockEgg } = useEasterEggStore();

  const handleVeenaClick = () => {
    unlockEgg(EGG_IDS.MATRIARCH_VEENA);
    // Future: trigger overlay
    window.dispatchEvent(new CustomEvent('show-matriarch'));
  };

  return (
    <section className="relative w-full py-32 z-10">
      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-7xl">
        
        {/* Intro */}
        <div className="mb-24 md:pl-[50%]">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="border-l border-[#4B5563] pl-6"
          >
            <span className="text-secondary-text font-mono text-sm tracking-widest uppercase block mb-4">
              Before the trade
            </span>
          </motion.div>
        </div>

        {/* The Family */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 relative">
          {/* Father */}
          <motion.div 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-md bg-surface-bg">
              <img 
                src="/assets/images/raghuram-kamath-banker.jpg" 
                alt="Raghuram Kamath"
                className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80"
              />
            </div>
            <div>
              <h3 className="font-clash text-2xl text-primary-text mb-2">
                Raghuram Kamath <span className="text-secondary-text text-lg block">Canara Bank Executive</span>
              </h3>
              <p className="font-satoshi text-secondary-text text-base leading-relaxed mt-4">
                Disciplined. Conventional. Transferred across Karnataka until the family settled in Bangalore when Nikhil was nine. Built a career on institutions, rules, and incremental progression.<br/><br/>
                His son would build the opposite.<br/><br/>
                His single greatest investment: Handing his personal savings to an 18-year-old school dropout with no track record. No questions asked.<br/>
                <span className="text-primary-text font-medium mt-2 block">That leap of faith changed everything.</span>
              </p>
            </div>
          </motion.div>

          {/* Mother */}
          <motion.div 
            className="flex flex-col space-y-6 md:mt-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-md bg-surface-bg group">
              <img 
                src="/assets/images/revathi-kamath-temple.webp" 
                alt="Revathi Kamath"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
              />
              <button 
                onClick={handleVeenaClick}
                className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md hover:bg-accent-chartreuse/20 transition-colors z-10 tooltip-trigger"
                title="There's more to this story."
              >
                <img src="/assets/icons/veena-line-art.svg" alt="Veena" className="w-6 h-6 animate-pulse" />
              </button>
            </div>
            <div>
              <h3 className="font-clash text-2xl text-primary-text mb-2">
                Revathi Kamath <span className="text-secondary-text text-lg block">Veena maestro. Entrepreneur. Environmentalist.</span>
              </h3>
              <p className="font-satoshi text-secondary-text text-base leading-relaxed mt-4">
                She started a flower business with ₹500. Borrowed ₹5,000 from a friend to pitch Wipro. Left with a ₹45,000 contract.<br/>
                Built Calyx — events for HP, Bosch, Leela Palace. Moved into landscaping: Chinnaswamy Stadium, Intel, CBRE. Planted over one lakh trees.<br/>
                Appointed 7th Director of Rally For Rivers. Is currently writing her autobiography.<br/><br/>
                Her Instagram bio:<br/>
                <span className="text-primary-text italic">'Environmentalist and Veena player.'</span><br/>
                No mention of her sons.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Chess */}
        <div className="mb-32">
          <motion.div 
            className="w-full min-h-[50vh] relative flex items-center justify-center overflow-hidden rounded-xl bg-surface-bg group"
            style={{ cursor: "url('/assets/icons/chess-knight-cursor.svg'), auto" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/assets/images/chess-board-dramatic.webp" 
                alt="Chess Board" 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
            </div>
            <div className="relative z-10 max-w-2xl text-center px-6">
              <p className="font-satoshi text-lg md:text-xl text-primary-text leading-relaxed">
                He started at age 5. His idol was Garry Kasparov.<br/>
                He competed at school, district, city, state, national levels. He dropped out partly to pursue a professional chess career. He fell short of the level required to go international.<br/><br/>
                <span className="text-secondary-text block mb-6">What the game gave him instead:</span>
                <span className="font-garamond text-2xl md:text-3xl italic text-accent-gold block max-w-xl mx-auto border-l-2 border-accent-gold pl-6 text-left">
                  "Chess teaches you how to work under a structure, in a system, but yet try and be creative within that system. That became everything."
                </span>
                <br/>
                <span className="font-satoshi font-semibold text-primary-text tracking-wide block mt-4">
                  The dropout who studied chess became the trader who studied derivatives. The pattern was the same.
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* The Exit */}
        <div className="md:pl-[50%]">
          <motion.div 
            className="border-l border-accent-red/30 pl-6 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-clash text-2xl text-primary-text mb-4">Oxford Senior Secondary School, JP Nagar, Bangalore.</h3>
            <div className="space-y-4 font-satoshi text-secondary-text leading-relaxed">
              <p>The school refused to let him sit for board exams. Reason: total disinterest in studies.</p>
              <p className="text-primary-text">He scored 6 out of 100 in Maths.<br/>Not because he couldn't do it. Because he was already thinking about something else.</p>
              <blockquote className="font-garamond italic text-xl text-primary-text mt-4">
                "I hated school. Always did.<br/>I had no plan when I dropped out — the only plan was to make money."
              </blockquote>
              <div className="pt-6">
                <span className="text-sm uppercase tracking-widest mb-2 block text-accent-red">His one regret:</span>
                <p className="text-primary-text">
                  "I have more regrets about having dropped out than people think. Not the education. The friendships. The best times in people's lives happen in college. I've never had that experience. Nor will I ever."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
