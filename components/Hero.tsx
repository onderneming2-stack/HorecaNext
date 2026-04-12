'use client';

import Button from '@/components/Button';
import { waUrl } from '@/lib/config';

const stats = [
  { n: '48u',    l: 'Naar shortlist'   },
  { n: '30%',    l: 'Response rate'    },
  { n: '−60%',   l: 'Fee vs bureau'   },
  { n: 'Direct', l: 'In dienst bij jou' },
];

export default function Hero() {
  const waHref = waUrl('kandidaat');

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute top-[-80px] right-[-60px] w-[540px] h-[540px] bg-accent/6 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/15 to-transparent pointer-events-none hidden lg:block" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-[640px]">

          {/* AI badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 border border-accent/25 bg-accent/10 rounded-full">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
            <span className="text-[10px] text-accent font-semibold tracking-[0.16em] uppercase">
              AI-gestuurde recruitment · NL Horeca
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold leading-[1.06] mb-4 text-[clamp(2.1rem,5.2vw,3.6rem)] tracking-tight">
            <span className="block text-white">Jouw volgende stap</span>
            <span className="block text-gold">in de horeca</span>
          </h1>

          {/* 48u belofte */}
          <p className="text-[clamp(1rem,2.4vw,1.3rem)] font-bold text-accent mb-5 tracking-tight leading-snug">
            Gekwalificeerde kandidaten binnen 48 uur
          </p>

          <p className="text-white/55 text-[15px] leading-[1.8] mb-10 max-w-[440px]">
            Wij combineren AI-technologie met persoonlijke aandacht. Van sourcing tot
            shortlist — volledig geautomatiseerd, menselijk gecontroleerd.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <Button variant="primary" href="/vacatures" className="text-[14px] px-7 py-3.5 tracking-wide">
              Bekijk vacatures
            </Button>
            <Button variant="secondary" href="/werkgevers" className="text-[14px] px-7 py-3.5 tracking-wide">
              Ik zoek personeel
            </Button>
          </div>

          {/* WhatsApp micro-CTA */}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12px] text-muted/50 hover:text-accent transition-colors mb-14"
          >
            <svg className="w-3.5 h-3.5 text-accent/70" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Of stuur ons een bericht via WhatsApp
          </a>

          {/* Stat strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border rounded-lg overflow-hidden">
            {stats.map((s) => (
              <div key={s.l} className="bg-surface-2 px-4 py-4 text-center">
                <span className="block text-[1.45rem] font-bold text-accent leading-none mb-1.5">
                  {s.n}
                </span>
                <span className="block text-[10px] text-muted/55 uppercase tracking-wider leading-tight">
                  {s.l}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
