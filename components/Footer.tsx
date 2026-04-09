import Link from "next/link";
import { CONTACT_EMAIL, waUrl } from "@/lib/config";
import { WaIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-baseline gap-0.5 mb-3">
              <span className="text-[1.05rem] font-bold text-white">Horeca</span>
              <span className="text-[1.05rem] font-bold text-accent">Next</span>
            </Link>
            {/* Slogan with color rules — no old labels */}
            <p className="text-[9.5px] font-medium tracking-[0.14em] uppercase flex flex-wrap items-center gap-x-1.5 gap-y-1">
              <span className="text-white/35">Next Step</span>
              <span className="text-white/20">·</span>
              <span className="text-white/35">Next Level</span>
              <span className="text-white/20">·</span>
              <span className="text-accent/60">Next Match</span>
            </p>
          </div>

          {/* Kandidaten */}
          <div>
            <p className="text-[9px] text-muted/40 font-semibold tracking-[0.14em] uppercase mb-4">
              Kandidaten
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/vacatures" className="text-[13px] text-muted/60 hover:text-white transition-colors">
                  Vacatures
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-[13px] text-muted/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Werkgevers */}
          <div>
            <p className="text-[9px] text-muted/40 font-semibold tracking-[0.14em] uppercase mb-4">
              Werkgevers
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/werkgevers" className="text-[13px] text-muted/60 hover:text-white transition-colors">
                  Personeel zoeken
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[9px] text-muted/40 font-semibold tracking-[0.14em] uppercase mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={waUrl("kandidaat")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] text-muted/60 hover:text-accent transition-colors"
                >
                  <WaIcon className="w-3 h-3 text-accent/60 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[12.5px] text-muted/60 hover:text-accent transition-colors leading-snug block"
                  style={{ wordBreak: "break-all" }}
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom — clean */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[11px] text-muted/30">
            © {currentYear} HorecaNext. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
