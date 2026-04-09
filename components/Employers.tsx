import Button from "./Button";
import { WaIcon } from "./Icons";
import { waUrl } from "@/lib/config";
import Link from "next/link";

export default function Employers() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">

          <div className="bg-primary px-8 py-10 md:px-10 md:py-12">
            <div className="inline-flex items-center gap-2 mb-6 px-2.5 py-1 border border-accent/20 bg-accent/5">
              <span className="text-[9px] text-accent font-semibold tracking-[0.15em] uppercase">
                Voor werkgevers
              </span>
            </div>
            <h2 className="text-2xl sm:text-[1.65rem] font-display font-bold text-white mb-4 leading-snug tracking-tight">
              Op zoek naar sterk horecapersoneel?
            </h2>
            <p className="text-muted/65 text-[13.5px] leading-relaxed mb-8 max-w-xs">
              We helpen je aan mensen die passen bij je team. Snel, persoonlijk en zonder gedoe.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <Button variant="primary" href={waUrl("werkgever")} external className="text-[13px] px-5 py-3">
                <WaIcon className="w-3.5 h-3.5" />
                Neem contact op
              </Button>
              <Button variant="secondary" href="/werkgevers" className="text-[13px] px-5 py-3">
                Meer informatie
              </Button>
            </div>
          </div>

          <div className="bg-surface px-8 py-10 md:px-10 md:py-12">
            <p className="text-[9px] text-muted/50 font-semibold tracking-[0.15em] uppercase mb-6">
              Wat je kunt verwachten
            </p>
            <ul className="space-y-4">
              {[
                "Kandidaten die passen bij jouw team en concept",
                "Geen stapels cv's, geen gedoe",
                "Persoonlijk contact van begin tot einde",
                "Kandidaat gaat direct bij jou in dienst",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[13px] text-white/70 leading-snug">
                  <span className="w-4 h-4 border border-accent/25 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-2 h-2 text-accent" fill="currentColor" viewBox="0 0 8 8">
                      <path d="M6.41.7L2.7 4.42.58 2.3 0 2.88l2.7 2.7.71.7L7 1.28z" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-border">
              <Link
                href="/werkgevers"
                className="text-[12px] text-muted/45 hover:text-accent transition-colors flex items-center gap-1.5"
              >
                Alles over onze aanpak
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
