import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LottiePlayer from '../ui/LottiePlayer';
import { useEasterEggStore, EGG_IDS } from '../../hooks/useEasterEgg';

// Note: since we're using dynamic imports for Lottie JSONs, we import them or fetch them.
// In standard Vite, we can import them directly if they are in src, but since they are in public/, we can fetch them or just provide the URL string. 
// Wait, lottie-react requires the JSON object, not a URL string. 
// We will need to fetch the JSON or import it.

export default function TheFlush() {
  const { unlockEgg } = useEasterEggStore();
  const [isEasterEggTriggered, setIsEasterEggTriggered] = useState(false);
  const [flushAnimation, setFlushAnimation] = useState(null);

  // Fetch Lottie JSON from public folder
  React.useEffect(() => {
    fetch('/assets/animations/toilet-flush-anim.json')
      .then(res => res.json())
      .then(data => setFlushAnimation(data))
      .catch(err => console.error("Could not load flush animation", err));
  }, []);

  const handlePhoneClick = () => {
    if (isEasterEggTriggered) return;
    setIsEasterEggTriggered(true);
    unlockEgg(EGG_IDS.PHONE_FLUSH);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsEasterEggTriggered(false);
    }, 3000);
  };

  return (
    <section id="section-flush" className="relative w-full py-32 z-10 min-h-screen flex items-center">
      <motion.div
        className="w-full"
        initial={{ clipPath: 'inset(0 100% 100% 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0% 0)' }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visuals */}
          <div className="order-2 lg:order-1 relative h-[30rem] md:h-[40rem] flex items-center justify-center">
            {/* Lottie Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-80 mix-blend-screen drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              {flushAnimation && (
                <LottiePlayer animationData={flushAnimation} loop={!isEasterEggTriggered} className="w-full h-full max-w-[500px]" />
              )}
            </div>

            {/* Prop */}
            <motion.div 
              className="relative z-10 cursor-pointer"
              animate={isEasterEggTriggered ? { rotate: 720, scale: 0, opacity: 0 } : { translateY: [-15, 15, -15], rotate: [-3, 3, -3] }}
              transition={
                isEasterEggTriggered 
                ? { duration: 1.5, ease: "anticipate" }
                : { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }
              onClick={handlePhoneClick}
            >
              <img src="/assets/props/retro-cellphone-pixel.png" alt="Retro Cellphone" className="h-64 md:h-96 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter brightness-110" />
            </motion.div>

            {/* Easter Egg Content */}
            {isEasterEggTriggered && (
              <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <h4 className="font-clash text-2xl text-accent-red bg-black/60 px-4 py-2 rounded mb-2">His mother's verdict on his first business.</h4>
                <div className="flex space-x-1 animate-bounce">
                  {['T','r','y',' ','a','g','a','i','n','.'].map((l, i) => (
                    <span key={i} className="text-xl font-mono text-primary-text">{l === ' ' ? '\u00A0' : l}</span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-clash text-4xl md:text-5xl lg:text-6xl text-primary-text mb-8 leading-tight">
                His first business was flushed — literally — by his mother.
              </h2>
              <div className="space-y-6 font-satoshi text-secondary-text text-lg leading-relaxed">
                <p>
                  Age 14. Ninth grade. He started buying and reselling used mobile phones. Grey market arbitrage at its most instinctive.
                </p>
                <p>
                  He found the spread. He exploited it. He scaled what he could.<br/><br/>
                  His mother found out.<br/>
                  She disposed of the entire inventory.<br/>
                  <span className="text-primary-text font-medium">Down the toilet.</span>
                </p>
                
                <div className="border-l-2 border-[#D4FF00] pl-6 my-8 space-y-2 py-2">
                  <p className="font-satoshi text-white/70 text-lg">Markets are fragile.</p>
                  <p className="font-satoshi text-white/70 text-lg">Supply chains can be disrupted by mothers.</p>
                  <p className="font-satoshi text-white text-lg font-medium">Try again.</p>
                </div>

                <p className="text-sm text-secondary-text/60 italic pt-4">
                  The same instinct — find the spread, remove the friction — would later build India's largest brokerage.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      </motion.div>
    </section>
  );
}
