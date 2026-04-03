import React, { lazy, Suspense, useEffect, useState } from 'react';
import SmoothScrollWrapper from './components/layout/SmoothScrollWrapper';
import NoiseOverlay from './components/layout/NoiseOverlay';
import EasterEggManager from './components/layout/EasterEggManager';
import ChartSpine from './components/chart/ChartSpine';
import Footer from './components/layout/Footer';
import NotFoundFlush from './components/layout/NotFoundFlush';

// Sections
const Preloader = lazy(() => import('./components/sections/Preloader'));
const Hero = lazy(() => import('./components/sections/Hero'));
const Origins = lazy(() => import('./components/sections/Origins'));
const TheFlush = lazy(() => import('./components/sections/TheFlush'));
const TheFake = lazy(() => import('./components/sections/TheFake'));
const FivePhases = lazy(() => import('./components/sections/FivePhases'));
const TheBigSpike = lazy(() => import('./components/sections/TheBigSpike'));
const ThePlateau = lazy(() => import('./components/sections/ThePlateau'));
const TheEcosystem = lazy(() => import('./components/sections/TheEcosystem'));
const TheConversations = lazy(() => import('./components/sections/TheConversations'));
const TheGiving = lazy(() => import('./components/sections/TheGiving'));
const ThePerson = lazy(() => import('./components/sections/ThePerson'));
const ThePhilosophy = lazy(() => import('./components/sections/ThePhilosophy'));
const TheMatriarch = lazy(() => import('./components/sections/TheMatriarch'));
const Finale = lazy(() => import('./components/sections/Finale'));

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const isNotFound = typeof window !== 'undefined' && window.location.pathname !== '/';

  useEffect(() => {
    // Hide scrollbar during preloader
    if (!preloaderComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [preloaderComplete]);

  if (isNotFound) {
    return (
      <EasterEggManager>
        <SmoothScrollWrapper>
          <NoiseOverlay />
          <NotFoundFlush />
        </SmoothScrollWrapper>
      </EasterEggManager>
    );
  }

  return (
    <EasterEggManager>
      <SmoothScrollWrapper>
        <NoiseOverlay />
        <Suspense fallback={null}>
          <TheMatriarch />
        </Suspense>
        
        {!preloaderComplete && (
          <Suspense fallback={null}>
            <Preloader onComplete={() => setPreloaderComplete(true)} />
          </Suspense>
        )}

        {/* The SVG spine representing the backbone of the page */}
        {preloaderComplete && <ChartSpine />}
        
        <main className={`relative z-10 mx-auto w-full transition-opacity duration-1000 ${preloaderComplete ? 'opacity-100' : 'opacity-0'}`}>
          <Suspense fallback={null}>
            <Hero />
            <Origins />
            <TheFlush />
            <div className="relative py-24">
              {/* Chart Anchor for Rs8,000 milestone used by Easter Egg #9 */}
              <button
                id="birth-cert-trigger-node"
                type="button"
                aria-label="Rs8,000 milestone"
                className="absolute top-1/2 left-[20px] md:left-[50%] md:-translate-x-1/2 -translate-y-1/2 z-20 w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,1)] hover:scale-125 transition-transform"
              />
            </div>
            <TheFake />
            <FivePhases />
            <TheBigSpike />
            <ThePlateau />
            <TheEcosystem />
            <TheConversations />
            <div className="relative py-24">
              {/* Chart anchor for generosity plateau milestone */}
              <div className="absolute top-1/2 left-[20px] md:left-[50%] md:-translate-x-1/2 -translate-y-1/2 z-20 w-4 h-4 rounded-full bg-[#D4FF00] shadow-[0_0_15px_rgba(212,255,0,1)]" />
            </div>
            <TheGiving />
            <ThePerson />
            <ThePhilosophy />
            <Finale />
          </Suspense>
        </main>

        {preloaderComplete && <Footer />}
        
      </SmoothScrollWrapper>
    </EasterEggManager>
  );
}

export default App;
