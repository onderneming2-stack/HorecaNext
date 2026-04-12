'use client';

const PHOTO =
  'https://res.cloudinary.com/dofow8hkl/image/upload/c_fill,w_900,h_1100,q_auto,f_auto/horeca/horeca/waiter-service.jpg';

const items = [
  {
    icon: '⚡',
    label: '48 uur naar shortlist',
    body: 'Onze AI-pipeline sourcet, screent en scoort kandidaten terwijl jij slaapt. Geen wachten meer.',
    aiTag: 'AI-powered',
  },
  {
    icon: '🤝',
    label: 'Persoonlijk contact',
    body: 'Elke plaatsing wordt begeleid door een horecaspecialist die jouw sector door en door kent.',
    aiTag: null,
  },
  {
    icon: '🎯',
    label: 'Pre-gescreende kandidaten',
    body: 'Ons scoringmodel filtert op motivatie, werkervaring en cultuurfit — alleen de beste 10% haalt de shortlist.',
    aiTag: 'Scoringmodel',
  },
  {
    icon: '📈',
    label: 'Gericht op groei',
    body: 'Van één chef tot vijftig FTE — wij schalen met jouw ambities mee zonder extra bureau-overhead.',
    aiTag: null,
  },
];

export default function WhyUs() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div>
            <p className="text-[11px] text-accent uppercase tracking-[0.2em] font-semibold mb-3">
              Waarom HorecaNext
            </p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-bold text-white leading-tight mb-4">
              Recruitment die
              <br />
              <span className="text-accent">écht werkt</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-12 max-w-md">
              Traditionele bureaus zijn traag en duur. Wij combineren menselijke expertise met AI om sneller, goedkoper en beter te werven.
            </p>

            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 p-5 rounded-xl bg-surface-2 border border-border hover:border-accent/25 transition-colors group"
                >
                  <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-white">{item.label}</h3>
                      {item.aiTag && (
                        <span className="text-[10px] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
                          {item.aiTag}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTO}
                alt="Horeca professional aan het werk"
                className="w-full h-[620px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-8 bg-surface border border-accent/30 rounded-2xl px-6 py-5 shadow-xl">
              <p className="text-[2.2rem] font-bold text-accent leading-none">48u</p>
              <p className="text-xs text-white/60 mt-1">Gemiddelde time-to-shortlist</p>
            </div>

            {/* Floating badge */}
            <div className="absolute top-6 -right-4 flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white/80 font-medium">Live matching actief</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
