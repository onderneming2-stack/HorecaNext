'use client';
import { useEffect, useRef, useState } from 'react';
import { waUrl } from '@/lib/config';

const HERO_IMAGE =
  'https://res.cloudinary.com/dofow8hkl/image/upload/c_fill,w_1920,h_1080,q_auto,f_auto/horeca/horeca/hero-restaurant.jpg';

const stats = [
  { end: 48,  suffix: 'u',  label: 'Naar shortlist',        prefix: ''  },
  { end: 30,  suffix: '%',  label: 'Response rate',         prefix: ''  },
  { end: 60,  suffix: '%',  label: 'Lagere fee',            prefix: '−' },
  { end: 500, suffix: '+',  label: 'Kandidaten geplaatst',  prefix: ''  },
];

function useCounter(end: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (\!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (\!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

function StatCell({ stat, active }: { stat: (typeof stats)[0]; active: boolean }) {
  const count = useCounter(stat.end, 1800, active);
  return (
    <div className="bg-white/5 hover:bg-white/10 transition-colors px-5 py-5 text-center cursor-default">
      <span className="block text-[1.6rem] font-bold text-accent leading-none mb-1.5 tabular-nums">
        {stat.prefix}{count}{stat.suffix}
      </span>
      <span className="block text-[10px] text-white/50 uppercase tracking-wider leading-tight">
        {stat.label}
      </span>
    </div>
  );
}

export default function Hero() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setStatsVisible(true); obs.disconnect(); }
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const waHref = waUrl('werkgever');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt="Premium horecagelegenheid"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-24 max-w-6xl">
        {/* AI Badge */}
        <div className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 border border-accent/30 bg-accent/10 rounded-full backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
          <span className="text-[10px] text-accent font-semibold tracking-[0.18em] uppercase">
            AI-gestuurde recruitment · NL Horeca
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(2.8rem,6.5vw,5rem)] leading-[1.05] font-bold text-white mb-5 max-w-3xl">
          De slimste manier om
          <br />
          <span className="text-accent">horeca talent</span> te vinden
        </h1>

        <p className="text-[clamp(1rem,2vw,1.2rem)] text-white/70 mb-4 max-w-xl leading-relaxed">
          Van vacature tot shortlist in 48 uur — dankzij onze AI-pipeline die screent, scoort en selecteert op schaal.
        </p>

        <p className="text-base font-semibold text-accent mb-10">
          Gekwalificeerde kandidaten binnen 48 uur ✓
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-primary font-bold text-sm rounded-full hover:bg-accent/90 transition-all hover:scale-105 shadow-lg shadow-accent/20"
          >
            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.107 1.523 5.834L.057 23.285a.75.75 0 00.917.916l5.453-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.626 0 11.999 0zm0 21.75a9.71 9.71 0 01-4.952-1.353.75.75 0 00-.534-.082l-3.816 1.027 1.027-3.817a.75.75 0 00-.082-.534A9.71 9.71 0 012.25 12c0-5.375 4.374-9.75 9.75-9.75s9.75 4.375 9.75 9.75-4.375 9.75-9.75 9.75z" />
            </svg>
            Start als werkgever
          </a>
          <a
            href="#vacatures"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-semibold text-sm rounded-full hover:bg-white/10 hover:border-white/60 transition-all backdrop-blur-sm"
          >
            Bekijk vacatures
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Animated Stat Strip */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/15 rounded-2xl overflow-hidden backdrop-blur-sm max-w-2xl"
        >
          {stats.map((s) => (
            <StatCell key={s.label} stat={s} active={statsVisible} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] text-white uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
