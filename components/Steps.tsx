"use client";

import { useState } from "react";
import Toggle from "./Toggle";

const TOGGLE_OPTIONS = [
  { value: "kandidaat", label: "Ik zoek werk" },
  { value: "werkgever", label: "Ik zoek personeel" },
];

const STEPS = {
  kandidaat: [
    {
      number: "1",
      title: "Meld je aan",
      description: "Via WhatsApp of het formulier. Vertel wat je doet en wat je zoekt.",
    },
    {
      number: "2",
      title: "Wij zoeken jouw match",
      description: "We kijken wat er past en stellen je voor bij de juiste werkgever.",
    },
    {
      number: "3",
      title: "Jij gaat op gesprek",
      description: "Direct bij de werkgever. Geen omwegen.",
    },
  ],
  werkgever: [
    {
      number: "1",
      title: "Vertel wat je zoekt",
      description: "Functie, uren, niveau. Kort gesprek volstaat.",
    },
    {
      number: "2",
      title: "Wij zoeken de juiste mensen",
      description: "We selecteren kandidaten die écht passen. Geen bulk.",
    },
    {
      number: "3",
      title: "Jij spreekt de juiste mensen",
      description: "Alleen relevante kandidaten. We schakelen snel.",
    },
  ],
};

export default function Steps() {
  const [active, setActive] = useState<"kandidaat" | "werkgever">("kandidaat");
  const steps = STEPS[active];

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <span className="gold-rule" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-1">
            Hoe het werkt
          </h2>
        </div>

        <Toggle
          options={TOGGLE_OPTIONS}
          value={active}
          onChange={(v) => setActive(v as "kandidaat" | "werkgever")}
          fullWidth
          className="mb-8 w-full"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-primary px-7 py-8 md:px-8 md:py-10 hover:bg-surface transition-colors duration-300 min-h-[160px]"
            >
              <div className="text-[2.6rem] font-display font-bold leading-none text-accent mb-5 select-none tabular-nums">
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
