import React, { useEffect } from 'react';
import { useEasterEggStore, EGG_IDS } from '../../hooks/useEasterEgg';
import EasterEggOverlays from './EasterEggOverlays';

export default function EasterEggManager({ children }) {
  const {
    unlockEgg,
    setBirthCertActive,
  } = useEasterEggStore();

  useEffect(() => {
    let hoverTimer;
    const onMouseOver = (event) => {
      const target = event.target.closest('#birth-cert-trigger-node');
      if (!target) return;

      hoverTimer = window.setTimeout(() => {
        unlockEgg(EGG_IDS.BIRTH_CERT);
        setBirthCertActive(true);
      }, 3000);
    };

    const onMouseOut = () => {
      if (hoverTimer) {
        window.clearTimeout(hoverTimer);
      }
    };

    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
      onMouseOut();
    };
  }, [setBirthCertActive, unlockEgg]);

  return (
    <>
      {children}
      <EasterEggOverlays />
    </>
  );
}
