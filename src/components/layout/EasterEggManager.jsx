import React, { useEffect, useRef } from 'react';
import { useEasterEggStore, EGG_IDS } from '../../hooks/useEasterEgg';
import EasterEggOverlays from './EasterEggOverlays';

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export default function EasterEggManager({ children }) {
  const inputBufferRef = useRef('');
  const konamiBufferRef = useRef([]);
  const inactivityTimerRef = useRef(null);
  const textHoldTimerRef = useRef(null);
  const heldElementRef = useRef(null);

  const {
    unlockEgg,
    digitalDetoxActive,
    labradorCursorActive,
    setTerminalActive,
    setKonamiActive,
    setMarsoftActive,
    setAfterMidnightActive,
    setDigitalDetoxActive,
    setLabradorCursorActive,
    setBirthCertActive,
  } = useEasterEggStore();

  const isLastSunday = (date) => {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const lastSundayDate = lastDay.getDate() - lastDay.getDay();
    return date.getDate() === lastSundayDate;
  };

  const getDetoxKey = (date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `digital-detox-dismissed:${yyyy}-${mm}-${dd}`;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      const key = e.key;

      // Konami Check
      const newKonami = [...konamiBufferRef.current, key].slice(-KONAMI_CODE.length);
      konamiBufferRef.current = newKonami;
      if (newKonami.join(',') === KONAMI_CODE.join(',')) {
        unlockEgg(EGG_IDS.KONAMI_CODE);
        setKonamiActive(true);
      }

      // String buffers for 'e2e4' and 'marsoft'
      const newBuffer = (inputBufferRef.current + key).slice(-20).toLowerCase();
      inputBufferRef.current = newBuffer;

      if (newBuffer.endsWith('e2e4')) {
        unlockEgg(EGG_IDS.GRANDMASTER_TERMINAL);
        setTerminalActive(true);
      }

      if (newBuffer.endsWith('marsoft')) {
        unlockEgg(EGG_IDS.MARSOFT_TAPE);
        setMarsoftActive(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [unlockEgg, setTerminalActive, setKonamiActive, setMarsoftActive]);

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 0 && hours < 5) {
      unlockEgg(EGG_IDS.AFTER_MIDNIGHT);
      setAfterMidnightActive(true);
    }

    if (isLastSunday(now)) {
      unlockEgg(EGG_IDS.DIGITAL_DETOX);
      document.body.classList.add('egg-grayscale');

      const dismissedToday = window.localStorage.getItem(getDetoxKey(now)) === '1';
      if (!dismissedToday) {
        setDigitalDetoxActive(true);
      }
    } else {
      document.body.classList.remove('egg-grayscale');
    }
  }, [setAfterMidnightActive, setDigitalDetoxActive, unlockEgg]);

  useEffect(() => {
    const now = new Date();
    if (!isLastSunday(now) || digitalDetoxActive) return;
    window.localStorage.setItem(getDetoxKey(now), '1');
    document.body.classList.add('egg-grayscale');
  }, [digitalDetoxActive]);

  useEffect(() => {
    const scheduleIdleTimer = () => {
      if (inactivityTimerRef.current) {
        window.clearTimeout(inactivityTimerRef.current);
      }

      inactivityTimerRef.current = window.setTimeout(() => {
        unlockEgg(EGG_IDS.LABRADOR_CURSOR);
        setLabradorCursorActive(true);
      }, 30000);
    };

    const markActive = () => {
      if (labradorCursorActive) {
        setLabradorCursorActive(false);
      }
      scheduleIdleTimer();
    };

    const events = ['mousemove', 'keydown', 'touchstart', 'scroll', 'pointerdown'];
    events.forEach((eventName) => window.addEventListener(eventName, markActive, { passive: true }));
    scheduleIdleTimer();

    return () => {
      events.forEach((eventName) => window.removeEventListener(eventName, markActive));
      if (inactivityTimerRef.current) {
        window.clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [labradorCursorActive, setLabradorCursorActive, unlockEgg]);

  useEffect(() => {
    document.body.classList.toggle('labrador-cursor', labradorCursorActive);
    return () => document.body.classList.remove('labrador-cursor');
  }, [labradorCursorActive]);

  useEffect(() => {
    const clearHold = () => {
      if (textHoldTimerRef.current) {
        window.clearTimeout(textHoldTimerRef.current);
      }

      if (heldElementRef.current) {
        heldElementRef.current.classList.remove('tattoo-ink');
      }

      document.body.classList.remove('font-tattoo');
      heldElementRef.current = null;
    };

    const handlePointerDown = (event) => {
      if (event.button !== 0) return;

      const textElement = event.target.closest('p, span, h1, h2, h3, h4, h5, h6, blockquote, li, a, button');
      const textContent = textElement?.textContent?.trim();
      if (!textElement || !textContent) return;

      heldElementRef.current = textElement;

      textHoldTimerRef.current = window.setTimeout(() => {
        unlockEgg(EGG_IDS.BE_HERE_NOW);
        textElement.classList.add('tattoo-ink');

        if (textContent.toLowerCase().includes('be here now')) {
          document.body.classList.add('font-tattoo');
        }
      }, 3000);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', clearHold);
    window.addEventListener('pointercancel', clearHold);

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', clearHold);
      window.removeEventListener('pointercancel', clearHold);
      clearHold();
    };
  }, [unlockEgg]);

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
