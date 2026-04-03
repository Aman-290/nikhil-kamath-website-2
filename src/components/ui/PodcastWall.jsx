import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EGG_IDS, useEasterEggStore } from '../../hooks/useEasterEgg';

gsap.registerPlugin(ScrollTrigger);

const guests = [
  { name: 'Narendra Modi', img: 'guest-narendra-modi.webp', show: 'People by WTF', context: 'His first-ever podcast appearance.', quote: 'The format was new to me.' },
  { name: 'Elon Musk', img: 'guest-elon-musk.webp', show: 'People by WTF Ep. 16', context: '7 million views in days.', quote: "We got Elon Musk on Nikhil's podcast before GTA VI." },
  { name: 'Bill Gates', img: 'guest-bill-gates.webp', show: 'People by WTF', context: 'Two-part conversation.', quote: 'Childhood, AI reshaping capitalism, India visits.' },
  { name: 'Bryan Johnson', img: 'guest-bryan-johnson.webp', show: 'WTF is Longevity?', context: 'He walked out mid-episode.', quote: "Mumbai's air quality made the studio unworkable for him." },
  { name: 'Dario Amodei', img: 'guest-dario-amodei.webp', show: 'People by WTF', context: 'CEO of Anthropic. Builder of Claude.', quote: 'Why Anthropic withheld a working model before ChatGPT existed.' },
  { name: 'Rishi Sunak + Akshata Murty', img: 'guest-rishi-sunak.webp', show: 'People by WTF', context: 'Former UK PM and Infosys heiress.', quote: "Failure to future skills: decoding India's next growth cycle." },
  { name: 'AR Rahman', img: 'guest-ar-rahman.webp', show: 'People by WTF', context: 'Oscar-winning composer.', quote: 'Nikhil brought out his own guitar and accompanied him singing.' },
  { name: 'Aravind Srinivas', img: 'guest-aravind-srinivas.webp', show: 'WTF Online', context: 'The Intern Episode.', quote: "Do you think I could intern here, free of charge?" },
  { name: 'Yann LeCun', img: 'guest-yann-lecun.webp', show: 'People by WTF Ep. 4', context: "Meta's Chief AI Scientist.", quote: 'What is AI Really?' },
  { name: 'Ranbir Kapoor', img: 'guest-ranbir-kapoor.webp', show: 'WTF is series', context: "Bollywood's most commercially successful actor.", quote: 'An off-script conversation on craft and pressure.' },
  { name: 'KL Rahul', img: 'guest-kl-rahul.webp', show: 'WTF is Making It in an Offbeat Career?', context: 'With Kriti Sanon and Badshah.', quote: 'Three people who chose paths no one expected.' },
  { name: 'Kiran Mazumdar-Shaw', img: 'guest-kiran-mazumdar-shaw.webp', show: 'WTF is series', context: 'His actual neighbour at Kingfisher Towers.', quote: "I'm like the older mother - I tell him he should get married." },
  { name: 'Nandan Nilekani', img: 'guest-nandan-nilekani.webp', show: 'WTF is series', context: 'India Stack architect.', quote: 'Technology only matters when distribution is solved.' },
  { name: 'Kumar Birla', img: 'guest-kumar-birla.webp', show: 'People by WTF', context: 'Aditya Birla Group Chairman.', quote: 'Capital, legacy, and long-cycle decisions.' },
  { name: 'Kishore Biyani', img: 'guest-kishore-biyani.webp', show: 'WTF is series', context: 'Future Group founder.', quote: "It's a live business-building environment." },
];

const YOUTUBE_LINK = 'https://www.youtube.com/@nikhil.kamath';
const SPOTIFY_LINK = 'https://open.spotify.com';

export default function PodcastWall() {
  const containerRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  const trackRef = useRef(null);
  const isDragging = useRef(false);

  const [isDesktop, setIsDesktop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { unlockEgg, setBryanPopupActive } = useEasterEggStore();

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDragging.current || !trackRef.current || !scrollWrapperRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, clickX / rect.width));
      const { scrollWidth, clientWidth } = scrollWrapperRef.current;
      scrollWrapperRef.current.scrollTo({ left: percentage * (scrollWidth - clientWidth), behavior: 'auto' });
    };

    const handlePointerUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  const handleScrollDir = (direction) => {
    if (!scrollWrapperRef.current) return;
    const scrollAmount = window.innerWidth * 0.5;
    scrollWrapperRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  // Check for Bryan Johnson easter egg on manual scroll and update progress bar
  const onContainerScroll = () => {
    if (!scrollWrapperRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollWrapperRef.current;
    const maxScroll = scrollWidth - clientWidth;
    setScrollProgress(maxScroll > 0 ? scrollLeft / maxScroll : 0);

    const cards = scrollWrapperRef.current.querySelectorAll('article');
    let bryanCard = null;
    
    cards.forEach(card => {
      if (card.getAttribute('data-guest-name') === 'Bryan Johnson') {
        bryanCard = card;
      }
    });

    if (bryanCard) {
      const rect = bryanCard.getBoundingClientRect();
      const inView = rect.left >= 0 && rect.right <= window.innerWidth;
      
      if (inView) {
        unlockEgg(EGG_IDS.BRYAN_JOHNSON);
        setBryanPopupActive(true);
      }
    }
  };

  if (!isDesktop) {
    return (
      <section className="relative w-full bg-[#0A0A0F] border-y border-white/5 px-4 py-10 md:px-8 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {guests.map((guest) => (
            <article key={guest.name} className="relative rounded-2xl overflow-hidden border border-white/10 group min-h-[220px]">
              <img
                src={`/assets/images/guests/${guest.img}`}
                alt={guest.name}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/70 to-transparent" />
              <div className="relative z-10 p-3 h-full flex flex-col justify-end">
                <h3 className="font-clash text-lg text-primary-text leading-tight">{guest.name}</h3>
                <p className="font-mono text-[10px] uppercase tracking-wider text-accent-chartreuse mt-1">{guest.show}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen bg-[#0A0A0F] border-y border-white/5 flex flex-col justify-start pt-12 md:pt-20 pb-16 overflow-hidden group/section">
      
      {/* Title */}
      <div className="relative z-20 px-6 md:px-12 mb-8 md:mb-12 shrink-0">
        <div className="max-w-xl pr-4">
          <h2 className="font-clash text-4xl md:text-5xl lg:text-7xl text-[#D4FF00] mb-4 drop-shadow-lg">The Guest Wall</h2>
          <p className="font-satoshi text-gray-300 text-sm md:text-lg">
            Deep discussions of complex themes, supported by data and facts, especially contrarian ones.
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Wrapper */}
      <div 
        ref={scrollWrapperRef} 
        onScroll={onContainerScroll}
        className="flex flex-row items-center flex-1 pl-6 md:pl-12 pr-[40vw] overflow-x-auto space-x-6 md:space-x-8 pb-12 snap-x snap-mandatory scrollbar-hide w-full shadow-inner"
        style={{ scrollBehavior: 'smooth' }}
      >
        {guests.map((guest) => (
          <article
            key={guest.name}
            className="w-[75vw] md:w-[25vw] min-w-[280px] md:min-w-[340px] max-w-[420px] h-[50vh] md:h-[65vh] shrink-0 relative rounded-3xl overflow-hidden group cursor-pointer border border-white/10 snap-center"
            data-guest-name={guest.name}
          >
            <img
              src={`/assets/images/guests/${guest.img}`}
              alt={guest.name}
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              loading="lazy"
              decoding="async"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/80 to-transparent group-hover:from-accent-chartreuse/90 group-hover:via-black/80 transition-all duration-700" />

            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end min-h-[50%]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#D4FF00] mb-2 block">{guest.show}</span>
              <h3 className="font-clash text-3xl text-primary-text mb-2 drop-shadow-md">{guest.name}</h3>
              <p className="font-satoshi text-sm text-primary-text/80 mb-4">{guest.context}</p>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 mb-6 border-l-2 border-[#D4FF00] pl-4">
                <p className="font-garamond italic text-xl text-primary-text">"{guest.quote}"</p>
              </div>

              <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                <a href={YOUTUBE_LINK} target="_blank" rel="noreferrer" className="flex items-center space-x-2 bg-black/60 hover:bg-black px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                  <img src="/assets/icons/youtube-mark.svg" alt="YouTube" className="w-3 h-3" loading="lazy" decoding="async" />
                  <span className="text-xs font-mono text-primary-text uppercase tracking-widest">Watch ↗</span>
                </a>
                <a href={SPOTIFY_LINK} target="_blank" rel="noreferrer" className="flex items-center space-x-2 bg-black/60 hover:bg-black px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                  <img src="/assets/icons/spotify-mark.svg" alt="Spotify" className="w-3 h-3" loading="lazy" decoding="async" />
                  <span className="text-xs font-mono text-primary-text uppercase tracking-widest">Listen ↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}

        <div className="w-[85vw] md:w-[600px] shrink-0 bg-[#0A0A0F]/80 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 mx-4 md:mr-32 flex flex-col justify-center snap-center">
          <span className="text-[#EB5757] font-mono text-sm tracking-widest uppercase mb-4 block">The Spoof</span>
          <h3 className="font-clash text-4xl md:text-5xl text-white mb-8">"Have you ever built inner peace?"</h3>
          <div className="font-satoshi text-gray-400 text-lg md:text-xl space-y-6">
            <p>In 2025, a viral spoof imagined the questions Nikhil should have asked Elon Musk.</p>
            <div className="bg-black/50 p-6 md:p-8 rounded-2xl text-white italic border-l-[3px] border-[#EB5757] shadow-xl">
              <p className="mb-4">If rockets escape Earth's gravity, how does one escape emotional gravity?</p>
              <p>If Mars doesn't have traffic, do you think people will still be late?</p>
            </div>
            <p className="text-[#D4FF00] font-medium">Nikhil reacted publicly. He shared it. He appreciated it.</p>
          </div>
        </div>
      </div>

      {/* Interactive Bottom Scroll Controls */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-3 md:space-x-5 z-50">
        
        {/* Left Arrow Button */}
        <button 
          onClick={() => handleScrollDir('left')} 
          className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full flex items-center justify-center border border-white/20 hover:border-[#D4FF00]/50 hover:bg-[#D4FF00]/10 transition-all text-white hover:text-[#D4FF00] backdrop-blur-md active:scale-95"
          aria-label="Scroll left"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        {/* Draggable Progress Bar */}
        <div 
          ref={trackRef}
          className="relative w-[45vw] md:w-[350px] h-2.5 md:h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm cursor-pointer shadow-lg border border-white/5"
          onPointerDown={(e) => {
            isDragging.current = true;
            if (!scrollWrapperRef.current) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percentage = Math.max(0, Math.min(1, clickX / rect.width));
            const { scrollWidth, clientWidth } = scrollWrapperRef.current;
            scrollWrapperRef.current.scrollTo({ left: percentage * (scrollWidth - clientWidth), behavior: 'smooth' });
            e.preventDefault(); 
          }}
        >
          <div 
            className="absolute left-0 top-0 h-full bg-[#D4FF00] shadow-[0_0_15px_rgba(212,255,0,0.8)] rounded-full transition-all duration-75 ease-out"
            style={{ width: `${Math.max(5, scrollProgress * 100)}%` }}
          />
        </div>

        {/* Right Arrow Button */}
        <button 
          onClick={() => handleScrollDir('right')} 
          className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full flex items-center justify-center border border-white/20 hover:border-[#D4FF00]/50 hover:bg-[#D4FF00]/10 transition-all text-white hover:text-[#D4FF00] backdrop-blur-md active:scale-95"
          aria-label="Scroll right"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>

      </div>
    </section>
  );
}
