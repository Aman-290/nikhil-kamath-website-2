import React from 'react';
import { useEasterEggStore, EGG_IDS } from '../../hooks/useEasterEgg';

export default function Footer() {
  const { unlockEgg } = useEasterEggStore();

  const handleVeenaClick = () => {
    unlockEgg(EGG_IDS.MATRIARCH_VEENA);
    window.dispatchEvent(new CustomEvent('show-matriarch'));
  };

  return (
    <footer className="w-full bg-[#050508] border-t border-white/5 py-8 z-20 relative">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs text-secondary-text tracking-widest">Built by</span>
          <a href="https://www.brokailabs.com" target="_blank" rel="noreferrer" className="font-clash text-sm text-primary-text hover:text-accent-chartreuse transition-colors">
            Brokai Labs
          </a>
        </div>

        <div>
          <button 
            onClick={handleVeenaClick}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors group relative"
          >
             <img src="/assets/icons/veena-line-art.svg" alt="Veena" className="w-5 h-5 opacity-50 group-hover:opacity-100 animate-pulse" />
             <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-white/10 px-3 py-2 rounded text-xs whitespace-nowrap pointer-events-none text-primary-text font-satoshi shadow-xl">
               There's more to this story.
             </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
