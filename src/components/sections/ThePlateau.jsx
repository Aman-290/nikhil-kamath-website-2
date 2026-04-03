import React from 'react';
import { motion } from 'framer-motion';
import ChessAccuracyChart from '../ui/ChessAccuracyChart';
import RentOwnToggle from '../ui/RentOwnToggle';

export default function ThePlateau() {
  return (
    <section className="relative w-full py-32 z-10">
      
      {/* Intro */}
      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-7xl mb-32">
        <motion.div 
          className="max-w-2xl text-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-satoshi text-2xl md:text-3xl text-secondary-text leading-relaxed">
            Every great line has a correction.<br/>
            Not a crash. A human moment.<br/>
            Priced in. Recovered.<br/>
            <span className="text-primary-text font-bold mt-4 block">Filed under: growth.</span>
          </p>
        </motion.div>
      </div>

      {/* Chess-Gate Controversy */}
      <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-7xl mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Graphic/Chart */}
          <motion.div 
            className="flex flex-col min-w-0 space-y-8 bg-surface-bg/50 p-6 rounded-2xl border border-white/5 group"
            style={{ cursor: "url('/assets/icons/chess-knight-cursor.svg'), auto" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden bg-black flex items-center justify-center">
              <img 
                src="/assets/images/vishy-anand-shadow.png" 
                alt="Viswanathan Anand shadow" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000"
              />
              <h3 className="relative z-10 font-clash text-3xl md:text-4xl text-center text-primary-text max-w-sm drop-shadow-xl p-4">
                He hadn't played chess in over 15 years.
              </h3>
            </div>
            
            <ChessAccuracyChart />
          </motion.div>

          {/* Right: Narrative */}
          <div className="space-y-8">
            <motion.div 
              className="space-y-2 border-l-2 border-accent-red/50 pl-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="font-mono text-sm tracking-widest text-accent-red">ACT I</h4>
              <p className="font-satoshi text-primary-text">
                June 13, 2021. 'Checkmate Covid' — online charity chess simultaneous exhibition. Organised by Akshaya Patra Foundation. Viswanathan Anand. Nine games simultaneously. <br/>
                <span className="text-secondary-text">He won eight easily.</span>
              </p>
            </motion.div>
            
            <motion.div 
              className="space-y-2 border-l-2 border-accent-red pl-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-mono text-sm tracking-widest text-accent-red">ACT II</h4>
              <p className="font-satoshi text-primary-text">
                Nikhil won. Accuracy: 98.9%.<br/>
                His last 30 Chess.com games: between 0.6% and 10.9%. Three novices had beaten him in 4-12 moves. <br/>
                <span className="text-accent-red">Computer analysis was unambiguous. Chess.com banned his account.</span><br/>
                <span className="text-secondary-text block mt-2 text-sm italic">
                  Forbes ran: 'Liar's Chess: Exposing India's Slumdog Billionaire.' GM Pentala Harikrishna: critical. Anand's wife, Aruna: released a statement saying his initial apology 'disrespectfully' implicated Anand. Top grandmasters: piled on.
                </span>
              </p>
            </motion.div>

            <motion.div 
              className="space-y-2 border-l-2 border-accent-chartreuse pl-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-mono text-sm tracking-widest text-accent-chartreuse">ACT III</h4>
              <p className="font-satoshi text-primary-text">
                24 hours after the ban. <br/>
                <span className="font-semibold text-accent-chartreuse">At Viswanathan Anand's personal request — the account was restored.</span><br/><br/>
                Nikhil's eventual tweet:<br/>
                <span className="italic block mb-2">'In hindsight, it was quite silly. Apologies.'</span>
                <span className="text-secondary-text block">
                  The man who built a company on radical transparency had a very human moment with it. Anand's grace was more remarkable than Nikhil's mistake.
                </span>
              </p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Rent vs Own Toggle Controversy */}
      <div className="container mx-auto px-4 md:px-8 xl:px-16 max-w-6xl">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <RentOwnToggle />
        </motion.div>
      </div>

    </section>
  );
}
