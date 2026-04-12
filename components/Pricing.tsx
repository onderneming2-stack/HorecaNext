const PLANS = [
  {
    name: 'No Cure No Pay',
    price: '10–15%',
    unit: '/hire',
    desc: 'Alleen betalen bij succesvolle plaatsing. Ideaal voor MKB horeca met een drempel voor vaste kosten.',
    features: [
      'Volledige AI-pipeline',
      'Shortlist binnen 48 uur',
      'Pre-gescreende kandidaten',
      'Menselijke QC op shortlist',
      'Geen opstartkosten',
    ],
    cta: 'Start gesprek',
    ctaHref: '#contact',
    featured: false,
  },
  {
    name: 'Subscription',
    price: '€1.999',
    unit: '/mo',
    desc: 'Voor bedrijven met continue hiring behoefte. Voorspelbare kosten, hogere kwaliteit, priority delivery.',
    features: [
      'Onbeperkte vacatures',
      'Priority delivery (24u)',
      'Maandelijkse KPI-rapportage',
      'Dedicated account manager',
      'A/B outreach optimalisatie',
      'Scale-plan (€2.999) beschikbaar',
    ],
    cta: 'Gratis intake aanvragen',
    ctaHref: '#contact',
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section className="py-16 md:py-24 bg-surface-2" id="prijzen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <span className="gold-rule" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 tracking-tight leading-snug">
            Transparante prijzen
          </h2>
          <p className="text-muted/65 text-[14px] leading-relaxed max-w-lg">
            Start zonder risico met No Cure No Pay. Schaal naar subscription
            voor voorspelbare kosten en priority delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col px-8 py-9 transition-colors duration-300 ${
                plan.featured
                  ? 'bg-surface ring-1 ring-accent/30'
                  : 'bg-surface-2 hover:bg-surface'
              }`}
            >
              {plan.featured && (
                <span className="absolute top-5 right-6 text-[10px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent">
                  Meest gekozen
                </span>
              )}

              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted/60 mb-4">
                {plan.name}
              </p>

              <div className="flex items-end gap-1 mb-4">
                <span className="text-[2.4rem] font-bold text-white leading-none tracking-tight">
                  {plan.price}
                </span>
                <span className="text-muted/55 text-[14px] mb-1">{plan.unit}</span>
              </div>

              <p className="text-muted/60 text-[13px] leading-relaxed mb-7">
                {plan.desc}
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-[13px] text-white/80">
                    <span className="text-accent shrink-0 mt-0.5">❖</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`block text-center py-3 px-6 rounded text-[13.5px] font-semibold tracking-wide transition-colors duration-200 ${
                  plan.featured
                    ? 'bg-accent text-black hover:bg-accent/90'
                    : 'border border-border text-white/70 hover:border-accent/40 hover:text-white'
                }`}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-muted/40 text-[12px] mt-6">
          Andere schaal of situatie? We denken graag mee. Neem gewoon contact op.
        </p>

      </div>
    </section>
  );
}
