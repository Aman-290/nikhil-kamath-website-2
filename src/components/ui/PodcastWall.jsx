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
  const bryanTriggeredRef = useRef(false);

  const [isDesktop, setIsDesktop] = useState(false);
  const { unlockEgg, setBryanPopupActive } = useEasterEggStore();

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!isDesktop || !containerRef.current || !scrollWrapperRef.current) return undefined;

    const getScrollAmount = () => {
      const wrapperWidth = scrollWrapperRef.current.scrollWidth;
      return -(wrapperWidth - window.innerWidth);
    };

    const bryanIndex = guests.findIndex((guest) => guest.name === 'Bryan Johnson');
    const bryanProgress = bryanIndex / Math.max(guests.length - 1, 1);

    const tween = gsap.to(scrollWrapperRef.current, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (bryanTriggeredRef.current) return;
          const speed = Math.abs(self.getVelocity());
          const nearBryan = Math.abs(self.progress - bryanProgress) < 0.1;

          if (nearBryan && speed > 450) {
            bryanTriggeredRef.current = true;
            unlockEgg(EGG_IDS.BRYAN_JOHNSON);
            setBryanPopupActive(true);
          }
        },
      },
    });

    return () => {
      tween.kill();
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
    };
  }, [isDesktop, setBryanPopupActive, unlockEgg]);

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
    <section ref={containerRef} className="relative w-full h-screen bg-[#0A0A0F] overflow-hidden flex flex-col justify-center border-y border-white/5">
      <div className="absolute top-12 md:top-20 left-6 md:left-12 z-20 max-w-xl bg-primary-bg/50 backdrop-blur-sm p-5 rounded-2xl border border-white/5 pointer-events-none">
        <h2 className="font-clash text-4xl text-primary-text mb-3">The Guest Wall</h2>
        <p className="font-satoshi text-secondary-text text-sm">
          Deep discussions of complex themes, supported by data and facts, especially contrarian ones.
        </p>
      </div>

      <div ref={scrollWrapperRef} className="flex flex-row items-center h-full pt-20 pl-8 md:pl-16 w-max shrink-0 space-x-8 will-change-transform pb-12">
        {guests.map((guest) => (
          <article
            key={guest.name}
            className="w-[20vw] min-w-[260px] max-w-[320px] h-[62vh] shrink-0 relative rounded-2xl overflow-hidden group cursor-pointer border border-white/10"
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

        <div className="w-[560px] shrink-0 bg-surface-bg border border-white/5 rounded-2xl p-10 mx-8 flex flex-col justify-center">
          <span className="text-accent-red font-mono text-sm tracking-widest uppercase mb-4 block">The Spoof</span>
          <h3 className="font-clash text-4xl text-primary-text mb-6">"Have you ever built inner peace?"</h3>
          <div className="font-satoshi text-secondary-text text-lg space-y-4">
            <p>In 2025, a viral spoof imagined the questions Nikhil should have asked Elon Musk.</p>
            <div className="bg-black/30 p-6 rounded-lg text-primary-text italic border-l-2 border-accent-red">
              <p>If rockets escape Earth's gravity, how does one escape emotional gravity?</p>
              <p>If Mars doesn't have traffic, do you think people will still be late?</p>
            </div>
            <p>Nikhil reacted publicly. He shared it. He appreciated it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
