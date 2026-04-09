import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { WaIcon, CheckIcon } from "@/components/Icons";
import { waUrl, CONTACT_EMAIL } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voor werkgevers – HorecaNext",
  description:
    "Op zoek naar horecapersoneel? HorecaNext regelt de match. Persoonlijk contact, kandidaat direct in dienst.",
};

const steps = [
  {
    n: "1",
    title: "Vertel wat je zoekt",
    body: "Functie, uren, niveau. Een kort gesprek volstaat.",
  },
  {
    n: "2",
    title: "Wij zoeken de juiste mensen",
    body: "We selecteren kandidaten die passen bij je team en concept. Geen bulk.",
  },
  {
    n: "3",
    title: "Jij spreekt de juiste mensen",
    body: "Alleen relevante kandidaten. We schakelen snel.",
  },
];

const features = [
  {
    title: "Persoonlijk contact",
    body: "Je spreekt altijd direct met ons. Geen formulieren, geen wachtrijen.",
  },
  {
    title: "Kandidaten die passen",
    body: "We stellen alleen mensen voor die qua ervaring en karakter bij je passen.",
  },
  {
    title: "Snel schakelen",
    body: "Geen lange trajecten. We gaan direct aan de slag.",
  },
  {
    title: "Direct in dienst",
    body: "De kandidaat treedt direct bij jou in dienst. Geen uitzendconstructie.",
  },
];

export default function WerkgeversPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-primary pt-24 pb-20">

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 border-b border-border mb-14">
          <div className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 border border-accent/20 bg-accent/5">
            <span className="text-[9px] text-accent font-semibold tracking-[0.15em] uppercase">
              Voor werkgevers
            </span>
          </div>
          <span className="gold-rule" />
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-5 max-w-xl leading-tight tracking-tight">
            Op zoek naar sterk horecapersoneel?
          </h1>
          <p className="text-muted/65 max-w-md leading-relaxed mb-8 text-[14px]">
            Wij helpen horecaondernemers aan mensen die passen bij het team. Persoonlijk, snel en direct.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="primary" href={waUrl("werkgever")} external className="text-[14px] px-6 py-3.5">
              <WaIcon className="w-4 h-4" />
              Neem contact op
            </Button>
            <Button variant="secondary" href={`mailto:${CONTACT_EMAIL}`} external className="text-[14px] px-6 py-3.5">
              Mail ons direct
            </Button>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <span className="gold-rule" />
          <h2 className="text-2xl font-display font-bold text-white mb-8 tracking-tight">
            Hoe het werkt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {steps.map((step, i) => (
              <div key={step.n} className="relative bg-primary px-7 py-8 md:px-8 md:py-10 hover:bg-surface transition-colors duration-300">
                <div className="text-[2.6rem] font-display font-bold leading-none text-accent mb-5 select-none tabular-nums">
                  {step.n}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-3 h-3 bg-primary border border-border rotate-45" />
                )}
                <h3 className="text-[0.88rem] font-semibold text-white mb-2 leading-snug">{step.title}</h3>
                <p className="text-muted/60 text-[12.5px] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="border border-border bg-surface p-8 md:p-10">
            <span className="gold-rule" />
            <h2 className="text-xl font-display font-bold text-white mb-7 tracking-tight">
              Wat je kunt verwachten
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
              {features.map((item) => (
                <div key={item.title} className="flex items-start gap-3.5">
                  <div className="w-4 h-4 border border-accent/25 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-2.5 h-2.5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white text-[13px] font-semibold mb-1">{item.title}</p>
                    <p className="text-muted/60 text-[12px] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <span className="gold-rule" />
          <h2 className="text-xl font-display font-bold text-white mb-5 tracking-tight">
            Welke functies plaatsen wij?
          </h2>
          <p className="text-muted/60 text-[13px] leading-relaxed max-w-md mb-7">
            We richten ons op keuken en bediening.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
            {[
              { functie: "Zelfstandig werkend kok / souschef", range: "€3.000 – €3.600 p/m" },
              { functie: "Bedieningsmedewerker", range: "€2.600 – €3.000 p/m" },
            ].map((f) => (
              <div key={f.functie} className="border border-border bg-surface p-4">
                <p className="text-white text-[13px] font-semibold mb-1 leading-snug">{f.functie}</p>
                <p className="text-accent text-[11px] font-medium">{f.range}</p>
              </div>
            ))}
          </div>
          <p className="text-muted/40 text-[11px] mt-4">
            Andere functies? We kijken wat er mogelijk is.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-accent/12 bg-surface p-8 md:p-12 text-center">
            <h2 className="text-2xl font-display font-bold text-white mb-3 tracking-tight leading-snug">
              Interesse?<br />
              Neem contact op
            </h2>
            <p className="text-muted/60 mb-8 max-w-sm mx-auto text-[13px] leading-relaxed">
              App ons of stuur een mail. We reageren snel.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="primary" href={waUrl("werkgever")} external className="text-[14px] px-7 py-3.5">
                <WaIcon className="w-4 h-4" />
                App ons direct
              </Button>
              <Button variant="secondary" href={`mailto:${CONTACT_EMAIL}`} external className="text-[14px] px-7 py-3.5">
                {CONTACT_EMAIL}
              </Button>
            </div>
            <p className="text-[10px] text-muted/30 mt-5">
              Snelle reactie · Geen verplichtingen
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
