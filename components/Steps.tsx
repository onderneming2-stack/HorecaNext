'use client';

import { useState } from 'react';
import Toggle from '@/components/Toggle';

const TOGGLE_OPTIONS = [
  { label: 'Ik zoek werk',      value: 'kandidaat' },
  { label: 'Ik zoek personeel', value: 'werkgever' },
];

const STEPS = {
  kandidaat: [
    {
      number: '01',
      title: 'Meld je aan',
      description:
        'Vul het formulier in of app ons direct. Vertel wat je doet en wat je zoekt. Een kort gesprek volstaat.',
    },
    {
      number: '02',
      title: 'Wij zoeken jouw match',
      description:
        'We selecteren kandidaten die passen bij team en concept. Geen bulk — alleen relevante opties voor jou.',
    },
    {
      number: '03',
      title: 'Jij gaat op gesprek',
      description:
        'Alleen relevante werkgevers. We schakelen snel — geen maanden wachten op een reactie.',
    },
  ],
  werkgever: [
    {
      number: '01',
      title: 'Vertel wat je zoekt',
      description:
        'Functie, uren, niveau. Een kort gesprek volstaat. Wij nemen het van hier over.',
    },
    {
      number: '02',
      title: 'AI zoekt de juiste mensen',
      description:
        'Onze AI-engine sourct, screent en beoordeelt kandidaten — volledig geautomatiseerd en consistent.',
    },
    {
      number: '03',
      title: 'Jij spreekt de juiste mensen',
      description:
        'Alleen relevante kandidaten. Binnen 48 uur een shortlist op je bureau.',
    },
  ],
};

const PIPELINE = [
  { icon: '🔍', title: 'Sourcing',  sub: 'Multi-source discovery op schaal',    agent: 'Sourcing Agent'   },
  { icon: '✉️', title: 'Outreach',  sub: 'Gepersonaliseerde DM per kandidaat',   agent: 'Outreach Agent'   },
  { icon: '📊', title: 'Screening', sub: 'AI-scoringmodel op 4 factoren',        agent: 'Screening Agent'  },
  { icon: '🎤', title: 'Intake',    sub: 'Transcriptanalyse + fit-score',        agent: 'Interview Agent'  },
  { icon: '📄', title: 'Shortlist', sub: 'Klantklaar voorstel binnen 48u',       agent: 'Profile Agent'    },
];

export default function Steps() {
  const [active, setActive] = useState<'kandidaat' | 'werkgever'>('kandidaat');
  const steps = STEPS[active];

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <span className="gold-rule" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-1">
            Hoe het werkt
          </h2>
          <p className="text-muted/60 text-[14px] mt-2">
            Of je nu werk zoekt of personeel — we regelen het snel en persoonlijk.
          </p>
        </div>

        <Toggle
          options={TOGGLE_OPTIONS}
          value={active}
          onChange={(v) => setActive(v as 'kandidaat' | 'werkgever')}
          fullWidth
          className="mb-8 w-full"
        />

        {/* AI Pipeline — only for werkgever tab */}
        {active === 'werkgever' && (
          <div className="mb-8 border border-border rounded-lg bg-surface-2 px-6 py-6 overflow-x-auto">
            <p className="text-[10px] text-accent/70 font-semibold uppercase tracking-[0.14em] mb-5">
              AI Recruitment Pipeline
            </p>
            <div className="flex items-start gap-0 min-w-[520px]">
              {PIPELINE.map((step, i) => (
                <div key={step.title} className="flex-1 relative text-center px-2">
                  {i < PIPELINE.length - 1 && (
                    <span className="absolute right-[-8px] top-[18px] text-accent font-bold text-sm z-10">
                      →
                    </span>
                  )}
                  <div className="w-10 h-10 mx-auto mb-2.5 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center text-base">
                    {step.icon}
                  </div>
                  <h4 className="text-[0.78rem] font-semibold text-white mb-0.5 leading-tight">
                    {step.title}
                  </h4>
                  <p className="text-[0.68rem] text-muted/55 leading-snug mb-1.5">
                    {step.sub}
                  </p>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-300/80">
                    {step.agent}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-primary px-7 py-8 md:px-8 md:py-10 hover:bg-surface transition-colors duration-300 min-h-[160px]"
            >
              <div className="text-[2.6rem] font-display font-bold leading-none text-accent mb-5 select-none tabular-nums opacity-30">
                {step.number}
              </div>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-3 h-3 bg-primary border border-border rotate-45" />
              )}

              <h3 className="text-[0.88rem] font-semibold text-white mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-muted/60 text-[12.5px] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
