'use client';

const LOGOS = [
  { name: 'Restaurant De Gouden Leeuw', abbr: 'GL' },
  { name: "Café 't Centrum",            abbr: 'CC' },
  { name: 'Hotel Van Oranje',           abbr: 'VO' },
  { name: 'Brasserie Noord',            abbr: 'BN' },
  { name: 'Grand Café Heineken',        abbr: 'GH' },
  { name: 'Strandpaviljoen Zee & Zand', abbr: 'ZZ' },
  { name: 'Bistro Maison',             abbr: 'BM' },
  { name: 'Cocktailbar Nox',           abbr: 'NX' },
];

export default function LogoBar() {
  return (
    <section className="py-14 border-y border-border overflow-hidden">
      <p className="text-center text-[11px] text-muted uppercase tracking-[0.2em] font-semibold mb-10">
        Vertrouwd door 50+ horecabedrijven in Nederland
      </p>
      <div className="relative">
        <div
          className="flex gap-10 whitespace-nowrap"
          style={{ animation: 'marquee 28s linear infinite' }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl border border-border bg-surface-2 shrink-0 opacity-55 hover:opacity-100 transition-opacity"
            >
              <span className="w-7 h-7 rounded-md bg-accent/15 text-accent text-[10px] font-black flex items-center justify-center">
                {logo.abbr}
              </span>
              <span className="text-sm text-muted font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary to-transparent" />
      </div>
    </section>
  );
}
