import React from 'react';
import { motion } from 'framer-motion';

const quotes = [
  "Hard work is not that important.\n\nFor every four hours spent working,\nthree went pretending.",
  "Hypocrisy, I believe, is good.\nWith new information, with new data,\nif you are able to change your mind quickly —\nthat has served me well.",
  "Sometimes the greatest advantage\nis not knowing enough\nto think the audacious is impossible.",
  "The biggest risk is none taken.",
  "Don't go to the previous generation\nto figure out what you should be doing\n20 years from now.\nGo look at what the kids are doing.",
  "There is no winner in the capitalistic pursuit.\nYou will always find somebody who has more.\n\nThe key might be not to win the game of capitalism\nbut to play and have a lot of fun while you're playing."
];

export default function ThePhilosophy() {
  return (
    <section data-chapter-id="philosophy" className="relative w-full z-10 bg-[#050508] text-center">
      
      {quotes.map((quote, i) => (
        <div key={i} className="min-h-screen flex items-center justify-center p-6 border-b border-white/5 snap-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="max-w-4xl"
          >
            <p className="font-garamond text-3xl md:text-5xl lg:text-6xl text-primary-text leading-[1.6] whitespace-pre-line text-balance mx-auto">
              {quote}
            </p>
          </motion.div>
        </div>
      ))}

      {/* Screen 7: Hum sab marne wale hain */}
      <div className="min-h-screen flex items-center justify-center p-6 snap-center bg-black relative overflow-hidden">
        
        {/* Subtle noise/texture for the final philosophy screen */}
        <div className="absolute inset-0 bg-[url('/assets/textures/noise-overlay.png')] mix-blend-overlay opacity-30 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="max-w-5xl relative z-10"
        >
          <h2 className="font-clash text-6xl md:text-8xl lg:text-9xl text-primary-text mb-12 tracking-tight">
            Hum sab marne<br/>wale hain.
          </h2>
          
          <div className="space-y-6 font-satoshi text-xl md:text-2xl text-secondary-text max-w-2xl mx-auto">
            <p>We are all going to die.</p>
            <p>Whenever something small has happened and I've let it affect me more than it should — there is one motto I follow:</p>
            <p className="text-accent-chartreuse font-garamond italic text-3xl md:text-4xl py-8">
              "Don't take life more seriously than it has to be."
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
