const items = [
  {
    label: '48 uur naar shortlist',
    body: 'Onze AI-pipeline doorloopt sourcing, outreach en screening volledig automatisch. Jij ontvangt een kant-en-klare shortlist — binnen 48 uur na opdracht.',
    aiTag: 'AI-powered',
  },
  {
    label: 'Persoonlijk contact',
    body: 'Geen formulieren, geen wachtrijen. Je spreekt altijd direct met ons. We leren je kennen en kijken wat bij jou en je team past.',
    aiTag: null,
  },
  {
    label: 'Pre-gescreende kandidaten',
    body: 'Elk profiel scoort op ervaring, locatie, motivatie en beschikbaarheid. Geen ruis — alleen relevant talent dat klaar is om te starten.',
    aiTag: 'Scoringmodel',
  },
  {
    label: 'Gericht op groei',
    body: 'We denken in groeipaden. Of je nu een kok zoekt die doorgroeit naar souschef of een bedieningskracht die teamlead wil worden.',
    aiTag: null,
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-surface-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <span className="gold-rule" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 tracking-tight leading-snug">
            Waarom HorecaNext?
          </h2>
          <p className="text-muted/65 text-[14px] leading-relaxed max-w-lg">
            Geen uitzendbureaus. Geen lange procedures.{' '}
            <br />
            Gewoon een team dat de horeca kent — aangedreven door AI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-surface-2 px-6 py-7 hover:bg-surface transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-[10px] text-accent/55 font-semibold tracking-widest uppercase shrink-0 pt-0.5 tabular-nums w-5">
                  {String(i + 1)}
                </span>
                <div>
                  <h3 className="text-[0.9rem] font-semibold text-white mb-1.5 leading-snug">
                    {item.label}
                  </h3>
                  <p className="text-muted/60 text-[13px] leading-relaxed">
                    {item.body}
                  </p>
                  {item.aiTag && (
                    <span className="inline-block mt-3 text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
                      {item.aiTag}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
