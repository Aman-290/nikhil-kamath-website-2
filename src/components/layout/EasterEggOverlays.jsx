import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEasterEggStore } from '../../hooks/useEasterEgg';

const terminalMoves = [
  '1. e4 c5',
  '2. Nf3 d6',
  '3. d4 cxd4',
  '4. Nxd4 Nf6',
  '5. Nc3 a6',
  '6. Be2 e5',
  '7. Nb3 Be6',
  '8. O-O Be7',
  '9. f4 exf4',
  '10. Bxf4 O-O',
  '11. Kh1 Nc6',
  '12. Qd2 Rc8',
  '13. Rae1 Ne5',
  '14. Nd4 b5',
  '15. a3 Re8',
  '16. Bd3 Bf8',
  '17. Bg5 Be7',
  '18. Nf5 Bxf5',
  '19. Rxf5 Nfd7',
  '20. Bxe7 Qxe7',
  '21. Nd5 Qe6',
];

export default function EasterEggOverlays() {
  const {
    terminalActive,
    konamiActive,
    marsoftActive,
    afterMidnightActive,
    digitalDetoxActive,
    labradorCursorActive,
    bryanPopupActive,
    birthCertActive,
    setTerminalActive,
    setKonamiActive,
    setMarsoftActive,
    setAfterMidnightActive,
    setDigitalDetoxActive,
    setBryanPopupActive,
    setBirthCertActive,
  } = useEasterEggStore();

  const [konamiProgress, setKonamiProgress] = useState(0);

  useEffect(() => {
    if (!konamiActive) {
      setKonamiProgress(0);
      return undefined;
    }

    const interval = window.setInterval(() => {
      setKonamiProgress((prev) => (prev >= 97 ? 97 : prev + 1));
    }, 40);

    return () => window.clearInterval(interval);
  }, [konamiActive]);

  useEffect(() => {
    if (!marsoftActive) return undefined;
    const timer = window.setTimeout(() => setMarsoftActive(false), 12500);
    return () => window.clearTimeout(timer);
  }, [marsoftActive, setMarsoftActive]);

  useEffect(() => {
    if (!bryanPopupActive) return undefined;
    const timer = window.setTimeout(() => setBryanPopupActive(false), 4000);
    return () => window.clearTimeout(timer);
  }, [bryanPopupActive, setBryanPopupActive]);

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key !== 'Escape') return;
      setTerminalActive(false);
      setKonamiActive(false);
      setBirthCertActive(false);
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [setBirthCertActive, setKonamiActive, setTerminalActive]);

  const marsoftTape = useMemo(
    () =>
      "MARSOFT Rs4.00 UP Rs20.00 | +400% | HIS FIRST TRADE | 2003 | 'I was hooked. And I knew I would do this for the rest of my life.' | ",
    []
  );

  return (
    <>
      <AnimatePresence>
        {terminalActive && (
          <motion.div
            className="fixed inset-0 z-[130] bg-[#021304]/95 text-[#9BFF82] p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="h-full border border-[#1f6f2f] bg-black/70 p-4 md:p-8 overflow-y-auto font-mono text-xs md:text-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="tracking-widest">&gt; GRANDMASTER'S TERMINAL | AUTHORIZED ACCESS</p>
                <button
                  type="button"
                  onClick={() => setTerminalActive(false)}
                  className="text-[#9BFF82]/80 hover:text-[#9BFF82]"
                >
                  ESC
                </button>
              </div>

              <div className="space-y-2">
                {terminalMoves.map((move) => (
                  <p key={move}>{move}</p>
                ))}
              </div>

              <p className="mt-6 text-[#9BFF82]/80">3rd cohort applicants who mentioned failing at least one previous venture: 67%</p>
              <p className="mt-2 animate-pulse">_</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {konamiActive && (
          <motion.button
            type="button"
            onClick={() => setKonamiActive(false)}
            className="fixed inset-0 z-[125] bg-black/95 text-primary-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="h-full w-full flex flex-col items-center justify-center px-6 text-center">
              <h3 className="font-clash text-6xl md:text-8xl mb-8">GTA VI</h3>
              <p className="font-mono uppercase tracking-widest text-secondary-text mb-6">Loading: Nikhil Kamath's net worth...</p>
              <div className="w-full max-w-xl h-3 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-accent-chartreuse transition-all duration-75" style={{ width: `${konamiProgress}%` }} />
              </div>
              <p className="font-mono mt-3 text-accent-chartreuse">{konamiProgress}%</p>
              <p className="font-garamond italic text-2xl mt-8">We got Elon Musk on Nikhil's podcast before GTA VI.</p>
              {konamiProgress >= 97 && (
                <p className="mt-6 text-secondary-text">Some things load faster than others. This site wasn't one of them.</p>
              )}
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {afterMidnightActive && (
          <motion.div
            className="fixed bottom-6 right-6 z-[120] max-w-sm bg-black/85 border border-white/10 rounded-xl p-4 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <p className="font-satoshi text-sm text-primary-text mb-3">
              Nikhil averages 5.5 hours of sleep. It's past midnight. Are you sure you should be here?
            </p>
            <button
              type="button"
              onClick={() => setAfterMidnightActive(false)}
              className="text-xs uppercase tracking-widest text-accent-chartreuse"
            >
              I'll sleep when I've traced the whole line.
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {digitalDetoxActive && (
          <motion.div
            className="fixed inset-0 z-[128] bg-[#0a0a0f]/98 backdrop-blur-sm flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="max-w-2xl text-center">
              <h3 className="font-clash text-4xl md:text-5xl text-primary-text mb-6">ATTENTION = TIME.</h3>
              <p className="font-satoshi text-secondary-text text-lg leading-relaxed mb-8">
                It is the last Sunday of the month. Nikhil advocates a device-free last Sunday of every month.
                Close this tab. Go outside.
              </p>
              <button
                type="button"
                onClick={() => setDigitalDetoxActive(false)}
                className="text-[8px] text-secondary-text/80 hover:text-primary-text"
              >
                I'm reviewing my portfolio
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {birthCertActive && (
          <motion.button
            type="button"
            className="fixed inset-0 z-[122] bg-black/85 flex items-center justify-center px-4"
            onClick={() => setBirthCertActive(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-2xl w-full"
              initial={{ scale: 0.8, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            >
              <img
                src="/assets/props/fake-birth-certificate-mockup.png"
                alt="Birth certificate mockup"
                className="w-full rounded-lg shadow-2xl"
              />
              <p className="mt-4 text-center font-clash text-2xl text-accent-chartreuse">This document started Rs27,000 Crore.</p>
              <p className="mt-2 text-center font-mono text-xs text-secondary-text">He was 17. The job required 18. Forged. Filed. Forgotten. Funded.</p>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {marsoftActive && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-[121] bg-black border-t border-accent-chartreuse/40 py-2 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="marsoft-tape whitespace-nowrap font-mono text-sm text-accent-chartreuse">
              {marsoftTape.repeat(5)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {labradorCursorActive && (
          <motion.div
            className="fixed bottom-6 left-6 z-[119] rounded-lg bg-black/85 border border-white/10 px-4 py-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <p className="font-satoshi text-xs text-primary-text">Chase or Grace? He has two Labs. We're honestly not sure which one this is.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {bryanPopupActive && (
          <motion.div
            className="fixed bottom-6 right-6 z-[124] max-w-sm bg-black/85 border border-white/10 rounded-xl p-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
          >
            <p className="font-satoshi text-sm text-primary-text">
              This section's air quality doesn't meet our standards. [Bryan Johnson has left the building]
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
