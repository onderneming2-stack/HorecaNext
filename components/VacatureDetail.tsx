import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Link from "next/link";
import { WaIcon, CheckIcon, LocationIcon } from "@/components/Icons";
import { vacatureWaUrl } from "@/lib/config";

type VacatureDetailProps = {
  titel: string;
  locatie: string;
  werkgever?: string;
  salaris: string;
  type: string;
  keukentype?: string;
  groeipad?: string;
  beschrijving: string;
  watGaJeDoen: string[];
  watBiedenWij: string[];
  watVragenWij: string[];
};

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-10">
      <h2 className="text-[0.9rem] font-semibold text-white mb-4 flex items-center gap-3">
        <span className="w-4 h-px bg-accent shrink-0" />
        {title}
      </h2>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-[13.5px] text-muted/75 leading-relaxed">
            <CheckIcon className="w-3 h-3 text-accent mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function VacatureDetail({
  titel,
  locatie,
  werkgever,
  salaris,
  type,
  keukentype,
  groeipad,
  beschrijving,
  watGaJeDoen,
  watBiedenWij,
  watVragenWij,
}: VacatureDetailProps) {
  const waLink = vacatureWaUrl(titel, locatie);
  const werkgeverLabel = werkgever ?? `Een opdrachtgever in ${locatie}`;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-primary pt-24 pb-20">

        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 mb-8">
          <Link
            href="/vacatures"
            className="inline-flex items-center gap-1.5 text-xs text-muted/60 hover:text-white transition-colors font-medium tracking-wide"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Alle vacatures
          </Link>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

            {/* Main content */}
            <div className="lg:col-span-2">

              {/* Header */}
              <div className="pb-8 mb-8 border-b border-border">
                <span className="gold-rule" />

                {/* Werkgever label */}
                <p className="text-[11px] text-muted/50 font-medium tracking-wide mb-3">{werkgeverLabel}</p>

                {/* Title + badge */}
                <div className="flex flex-wrap items-start gap-3 mb-4">
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight tracking-tight">
                    {titel}
                  </h1>
                  <span className="shrink-0 text-[9px] text-accent border border-accent/30 px-2 py-1 font-semibold tracking-wider uppercase self-start mt-2">
                    Direct in dienst
                  </span>
                </div>

                {/* Meta — mobile safe */}
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-muted/70">
                  <span className="flex items-center gap-1.5">
                    <LocationIcon className="w-3.5 h-3.5 text-accent/70" />
                    {locatie}
                  </span>
                  <span className="text-border">·</span>
                  <span>{type}</span>
                  {keukentype && (
                    <>
                      <span className="text-border">·</span>
                      <span>{keukentype}</span>
                    </>
                  )}
                </div>

                {/* Salaris prominent — visible on all screens */}
                <div className="mt-4">
                  <span className="text-accent font-bold text-lg">{salaris}</span>
                </div>

                {/* Groeipad */}
                {groeipad && (
                  <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/8 border border-accent/15">
                    <svg className="w-3 h-3 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-[11px] text-accent/80 font-medium">Groeipad: {groeipad}</span>
                  </div>
                )}
              </div>

              <p className="text-muted/75 text-[13.5px] leading-relaxed mb-10">{beschrijving}</p>

              <Section title="Wat ga je doen" items={watGaJeDoen} />
              <Section title="Wat bieden wij" items={watBiedenWij} />
              <Section title="Wat vragen wij" items={watVragenWij} />

              {/* Mobile CTA — UPDATE 6E: "Snelle reactie" */}
              <div className="lg:hidden mt-6 space-y-3">
                <Button variant="primary" href={waLink} external className="w-full justify-center py-3.5">
                  <WaIcon />
                  App ons direct
                </Button>
                <Button variant="secondary" href="/#contact" className="w-full justify-center py-3.5">
                  Gegevens achterlaten
                </Button>
                <p className="text-xs text-muted/45 text-center">Snelle reactie · Geen verplichtingen</p>
              </div>
            </div>

            {/* Sidebar — desktop only */}
            <div className="hidden lg:block">
              <div className="sticky top-28 space-y-4">
                <div className="border border-accent/20 bg-surface p-6">
                  <p className="text-xs text-muted/60 font-semibold tracking-widest uppercase mb-4">
                    Interesse?
                  </p>
                  <p className="text-[13px] text-muted/65 leading-relaxed mb-5">
                    Stuur een berichtje. We reageren snel.
                  </p>
                  <Button variant="primary" href={waLink} external className="w-full justify-center mb-3">
                    <WaIcon />
                    App ons direct
                  </Button>
                  <Button variant="secondary" href="/#contact" className="w-full justify-center">
                    Gegevens achterlaten
                  </Button>
                  {/* UPDATE 6E */}
                  <p className="text-xs text-muted/35 text-center mt-4">
                    Snelle reactie · Geen verplichtingen
                  </p>
                </div>

                {/* Meta info */}
                <div className="border border-border bg-surface divide-y divide-border">
                  {[
                    { label: "Locatie", value: locatie },
                    { label: "Dienstverband", value: type },
                    { label: "Salaris", value: salaris, accent: true },
                    { label: "Indiensttreding", value: "Direct bij werkgever" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center px-4 py-3 text-[13px]">
                      <span className="text-muted/60">{row.label}</span>
                      <span className={row.accent ? "text-accent font-semibold" : "text-white font-medium"}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
