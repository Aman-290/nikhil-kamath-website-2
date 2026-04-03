import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import LottiePlayer from '../ui/LottiePlayer';

export default function TheBigSpike() {
  const [coffeeAnim, setCoffeeAnim] = useState(null);

  useEffect(() => {
    fetch('/assets/animations/coffee-fill-anim.json')
      .then(res => res.json())
      .then(data => setCoffeeAnim(data))
      .catch(err => console.error("Could not load coffee animation", err));
  }, []);

  return (
    <section className="relative w-full py-32 z-10 bg-[#0A0A0F]">
      
      {/* Intro Blackout Moment */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center relative px-6">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 opacity-30">
           {coffeeAnim && <LottiePlayer animationData={coffeeAnim} loop={false} className="w-32 h-32" />}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-6 relative z-10 mt-16"
        >
          <h2 className="font-clash text-5xl md:text-8xl text-primary-text leading-tight">
            August 15, 2010.<br/>
            Independence Day.<br/>
            <span className="text-accent-chartreuse">Zero Barriers.</span>
          </h2>
          <div className="mt-12 flex justify-center">
            <img src="/assets/icons/zerodha-kite-logo.webp" alt="Zerodha Kite" className="w-32 md:w-48 opacity-80 mix-blend-screen" />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-7xl pt-24">
        
        {/* Origin Story */}
        <div className="max-w-3xl mb-32 border-l border-accent-chartreuse/50 pl-6 md:pl-12">
          <p className="font-satoshi text-xl md:text-2xl text-secondary-text leading-relaxed">
            'Zero' + 'Rodha' (Sanskrit: barrier). Zero Barriers.<br/><br/>
            They named it on the day India declared independence from colonial rule. They were declaring independence from the Indian brokerage cartel.<br/><br/>
            The cartel charged 0.5% per trade. On ₹1 lakh × 100 trades/year: ₹50,000 in fees alone. Before a single rupee of profit. They changed that to <span className="text-primary-text font-semibold">₹20 flat</span>. Zero brokerage on equity delivery.<br/><br/>
            Total startup cost: ₹10 lakh. ₹2.5L for the website. ₹5L for office interiors. ₹2.5L misc. Funded by Nikhil's trading profits.<br/><br/>
            <span className="text-accent-chartreuse font-clash text-2xl tracking-wide uppercase mt-6 block">Zero external capital. Then. Or ever.</span>
          </p>
        </div>

        {/* The Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          {[
            { value: "16M+", label: "Clients" },
            { value: "₹9,372Cr", label: "Revenue FY24" },
            { value: "₹5,496Cr", label: "Profit FY24" },
            { value: "15.8%", label: "Market Share" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-surface-bg p-6 md:p-8 border border-white/5 rounded flex flex-col justify-center items-center text-center"
            >
              <div className="text-3xl md:text-5xl font-mono text-primary-text mb-2">{stat.value}</div>
              <div className="text-secondary-text font-satoshi uppercase tracking-widest text-xs md:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* The Principles */}
        <div className="mb-32">
          <h3 className="text-primary-text font-clash text-3xl mb-12">The Code</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              "Never raised a rupee of external capital.",
              "Never ran a single advertisement. Not one.",
              "No revenue targets. No sales targets.",
              "Promotion from within only.",
              "Varsity: free financial education, written by one person.",
              "Nudge: warns users about bad trades. At cost of their own revenue.",
              "Complexity is a bug, not a feature.",
              "Cash reserves: ₹22,679 crore. Zero debt."
            ].map((principle, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
                className="border-l-2 border-accent-chartreuse pl-6 flex items-center"
              >
                <p className="font-satoshi text-primary-text text-lg">{principle}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Brothers (and Tech) */}
        <div>
          <h3 className="text-primary-text font-clash text-3xl mb-12">The Ecosystem</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Nithin */}
            <div className="bg-surface-bg rounded-xl overflow-hidden p-6 hover:bg-surface-bg/80 transition-colors border border-white/5">
               <div className="w-24 h-24 mb-6 rounded-full overflow-hidden shrink-0 mx-auto border-2 border-accent-chartreuse">
                 <img src="/assets/images/nithin-kamath-cutout.webp" alt="Nithin Kamath" className="w-full h-full object-cover grayscale" />
               </div>
               <h4 className="text-2xl text-primary-text font-clash text-center mb-1">Nithin Kamath</h4>
               <span className="text-accent-gold text-sm font-mono tracking-widest text-center block mb-6">THE OPERATOR / CEO</span>
               <p className="font-satoshi text-secondary-text text-sm leading-relaxed mb-4">
                 Business strategy. Product. Regulatory relations. Member of SEBI's Secondary Market Advisory Committee.
               </p>
               <blockquote className="border-l border-white/20 pl-3 italic text-primary-text/80 text-sm">
                 'I quickly realised Nikhil is a better trader than me. His profits in the first two years helped us build the company without needing venture capital.'
               </blockquote>
            </div>

            {/* Nikhil */}
            <div className="bg-surface-bg rounded-xl overflow-hidden p-6 hover:bg-surface-bg/80 transition-colors border border-white/5 relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent-chartreuse/5 rounded-bl-full pointer-events-none" />
               <div className="w-24 h-24 mb-6 rounded-full overflow-hidden shrink-0 mx-auto border-2 border-white/20 bg-primary-bg flex justify-center items-end">
                  <img src="/assets/images/nikhil-hero-bw-cutout.png" alt="Nikhil Kamath" className="w-[80%] opacity-80" />
               </div>
               <h4 className="text-2xl text-primary-text font-clash text-center mb-1">Nikhil Kamath</h4>
               <span className="text-accent-chartreuse text-sm font-mono tracking-widest text-center block mb-6">THE CIO / TRADER</span>
               <p className="font-satoshi text-secondary-text text-sm leading-relaxed">
                 Everything that touches markets, trading, and investing. If it's stock markets, investing, or trading — his call. If it's product, people, or broking — Nithin's.
               </p>
            </div>

            {/* Kailash */}
            <div className="bg-surface-bg rounded-xl overflow-hidden p-6 hover:bg-surface-bg/80 transition-colors border border-white/5">
               <div className="w-24 h-24 mb-6 rounded-full overflow-hidden shrink-0 mx-auto border-2 border-white/20">
                 <img src="/assets/images/kailash-nadh-cutout.jpg" alt="Kailash Nadh" className="w-full h-full object-cover grayscale" />
               </div>
               <h4 className="text-2xl text-primary-text font-clash text-center mb-1">Kailash Nadh</h4>
               <span className="text-accent-green text-sm font-mono tracking-widest text-center block mb-6">THE ARCHITECT / CTO</span>
               <p className="font-satoshi text-secondary-text text-sm leading-relaxed mb-4">
                 Built Zerodha's entire technology stack in the early years, effectively alone. Kite. Console. Coin. All of it.
               </p>
               <p className="font-satoshi text-secondary-text text-sm leading-relaxed">
                 His first act when he joined in 2013: Setting up proper waste segregation in the office. That single act of climate angst became the $200M Rainmatter Foundation.
               </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
