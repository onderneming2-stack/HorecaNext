'use client';

const TESTIMONIALS = [
  {
    quote:
      'Binnen 48 uur had ik drie gekwalificeerde kandidaten in mijn inbox. Dat had een traditioneel bureau me nooit kunnen leveren.',
    name: 'Thomas van den Berg',
    role: 'Eigenaar',
    venue: 'Brasserie Noord, Amsterdam',
    img: 'https://res.cloudinary.com/dofow8hkl/image/upload/c_fill,w_120,h_120,g_face,q_auto,f_auto/horeca/horeca/bartender.jpg',
  },
  {
    quote:
      'De AI-prescreening scheelt me zeker 6 uur per week. De kandidaten die ik zie zijn écht voorgeselecteerd — geen speld tussen te vinden.',
    name: 'Femke Jansen',
    role: 'HR Manager',
    venue: 'Hotel Van Oranje, Den Haag',
    img: 'https://res.cloudinary.com/dofow8hkl/image/upload/c_fill,w_120,h_120,g_face,q_auto,f_auto/horeca/horeca/waiter-service.jpg',
  },
  {
    quote:
      'Normaal betaalden wij 25% aan een uitzendbureau. Nu No Cure No Pay op 12%. Dezelfde kwaliteit, voor minder dan de helft.',
    name: 'Marco Visser',
    role: 'Horeca Directeur',
    venue: 'Restaurant De Gouden Leeuw, Rotterdam',
    img: 'https://res.cloudinary.com/dofow8hkl/image/upload/c_fill,w_120,h_120,g_face,q_auto,f_auto/horeca/horeca/chef-kitchen.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-[11px] text-accent uppercase tracking-[0.2em] font-semibold mb-3">
            Social Proof
          </p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-bold text-white leading-tight">
            Wat onze klanten zeggen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="relative bg-surface-2 border border-border rounded-2xl p-8 hover:border-accent/30 transition-all hover:-translate-y-1 group"
            >
              {/* Big quote mark */}
              <span className="absolute top-5 right-7 text-[4.5rem] leading-none text-accent/15 font-serif select-none group-hover:text-accent/30 transition-colors">
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="w-3.5 h-3.5 text-accent fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-white/80 text-sm leading-relaxed mb-8 relative z-10">{t.quote}</p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-accent/25 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-[11px] text-muted leading-snug">
                    {t.role} · {t.venue}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
