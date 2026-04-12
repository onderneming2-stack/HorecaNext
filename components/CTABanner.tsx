'use client';
import { waUrl } from '@/lib/config';

export default function CTABanner() {
  const waHref = waUrl('werkgever');
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(232,184,75,0.12),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative container mx-auto px-6 max-w-3xl text-center">
        <p className="text-[11px] text-accent uppercase tracking-[0.2em] font-semibold mb-4">
          Klaar om te beginnen?
        </p>
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-[1.1] mb-6">
          Jouw volgende topmedewerker
          <br />
          <span className="text-accent">staat al klaar</span>
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Stuur een WhatsApp en ontvang binnen 48 uur een shortlist van pre-gescreende kandidaten. Geen abonnement, geen opstartkosten.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary font-bold text-base rounded-full hover:bg-accent/90 transition-all hover:scale-105 shadow-2xl shadow-accent/20"
          >
            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.107 1.523 5.834L.057 23.285a.75.75 0 00.917.916l5.453-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.626 0 11.999 0zm0 21.75a9.71 9.71 0 01-4.952-1.353.75.75 0 00-.534-.082l-3.816 1.027 1.027-3.817a.75.75 0 00-.082-.534A9.71 9.71 0 012.25 12c0-5.375 4.374-9.75 9.75-9.75s9.75 4.375 9.75 9.75-4.375 9.75-9.75 9.75z" />
            </svg>
            WhatsApp ons nu
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold text-base rounded-full hover:bg-white/8 hover:border-white/40 transition-all"
          >
            Of plan een gesprek
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
