import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEasterEggStore } from '../../hooks/useEasterEgg';

export default function EasterEggOverlays() {
  const {
    birthCertActive,
    setBirthCertActive,
  } = useEasterEggStore();

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key !== 'Escape') return;
      setBirthCertActive(false);
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [setBirthCertActive]);

  return (
    <>
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
    </>
  );
}
