import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LottiePlayer from '../ui/LottiePlayer';

export default function TheFake() {
  const [sunriseAnimation, setSunriseAnimation] = useState(null);

  useEffect(() => {
    fetch('/assets/animations/sunrise-anim.json')
      .then(res => res.json())
      .then(data => setSunriseAnimation(data))
      .catch(err => console.error("Could not load sunrise animation", err));
  }, []);

  return (
    <section className="relative w-full py-32 z-10 min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/nikhil-call-centre-2003.webp" 
          alt="Call Centre 2003" 
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/80 to-primary-bg/90" />
      </div>

      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-7xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="mb-4 inline-block">
            {sunriseAnimation && <LottiePlayer animationData={sunriseAnimation} loop={true} className="w-16 h-16" />}
          </div>
          <h2 className="font-clash text-5xl md:text-7xl text-primary-text leading-tight drop-shadow-lg">
            He was 17.<br/><span className="text-secondary-text">The minimum age was 18.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Panel - Story */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 font-satoshi text-lg leading-relaxed text-secondary-text"
            >
              <p>
                He forged his birth certificate. Got a job at 24/7 (now [24]7.ai), Bangalore. UK shift. Selling accidental health insurance to British customers. 4PM to 1AM.
              </p>
              <p className="text-accent-chartreuse font-mono text-2xl py-4 bg-black/40 px-6 rounded border-l-2 border-accent-chartreuse inline-block">
                ₹8,000 a month.
              </p>
              <p>
                While his colleagues slept, he traded penny stocks with what was left of his salary. The market was open. He was in it before he was old enough to legally be there.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4 font-satoshi text-lg leading-relaxed text-secondary-text"
            >
              <h3 className="text-primary-text font-semibold font-clash text-2xl mb-2">The First Trade</h3>
              <p>
                His first significant trade: Marsoft. A penny stock tech company. Bought at ₹4. Sold at ₹20.
              </p>
              <blockquote className="border-l-2 border-secondary-text/30 pl-4 my-4 italic">
                "There was absolutely no reason why it should have gone up. It was blind luck. But even if I were to lose money 20 times in the future, 20 times the amount I made on this one transaction — I knew this is a profession I would continue for the rest of my life."
              </blockquote>
              <p className="text-primary-text">He was hooked. He was 17. The ₹8,000 salary was already a side project.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 font-satoshi text-lg leading-relaxed text-secondary-text"
            >
              <h3 className="text-primary-text font-semibold font-clash text-2xl mb-2">The Manager's Deal</h3>
              <p>
                He got so good that his call centre manager stopped requiring him to show up. Just marked him present every day. Let him manage the entire team's money instead.
              </p>
              <p>
                Then an American investor gave him ₹25 lakhs to manage.<br/>
                <span className="text-primary-text font-medium mt-2 block">The call centre was never really about the call centre.</span>
              </p>
            </motion.div>
          </div>

          {/* Right Panel - Props & Quotes */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-16 lg:sticky lg:top-32">
            
            <motion.div
              className="relative group cursor-crosshair transform rotate-2 hover:rotate-0 transition-transform duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src="/assets/props/fake-birth-certificate-mockup.png" 
                alt="Forged Certificate" 
                className="w-full shadow-2xl rounded-sm opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute -bottom-4 right-0 bg-black text-xs text-primary-text px-3 py-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Forged. Filed. Forgotten. Funded.
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm rounded-sm">
                <p className="font-clash text-xl text-accent-chartreuse text-center px-6 drop-shadow-md">
                  The document that started ₹27,000 Crore.
                </p>
              </div>
            </motion.div>

            <motion.blockquote 
              className="font-garamond text-3xl md:text-4xl text-primary-text italic text-center p-8 border border-white/10 rounded-lg bg-surface-bg/30 backdrop-blur-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              "When you move away from the family ecosystem and the judgement of relatives, you get down to the real stuff."
            </motion.blockquote>

          </div>

        </div>
      </div>
    </section>
  );
}
