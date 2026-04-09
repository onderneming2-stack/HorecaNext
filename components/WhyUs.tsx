const items = [
  {
    label: "Direct in dienst",
    body: "Geen uitzendbureau, geen tussenstap. Je gaat direct bij de werkgever in dienst.",
  },
  {
    label: "Persoonlijk contact",
    body: "Geen formulieren of wachtrijen. We leren je kennen en kijken wat past.",
  },
  {
    label: "Snel schakelen",
    body: "We reageren snel en gaan direct aan de slag. Geen weken wachten.",
  },
  {
    label: "Gericht op groei",
    body: "Of je nu wil doorgroeien of gewoon een betere plek zoekt. We denken met je mee.",
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
            Geen cv-schuiven. Geen lange procedures.
            <br />
            Gewoon een team dat de horeca kent.
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
