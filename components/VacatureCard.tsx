import Link from "next/link";
import { Vacature } from "@/lib/vacatures";
import { CheckIcon, LocationIcon } from "./Icons";

type VacatureCardProps = {
  vacature: Vacature;
  showLink?: boolean;
};

export default function VacatureCard({ vacature: v, showLink = true }: VacatureCardProps) {
  return (
    <article className="bg-primary border border-border hover:border-accent/25 transition-all duration-300 flex flex-col group">

      {/* Header */}
      <div className="px-5 pt-5 pb-4 sm:px-6 sm:pt-6 border-b border-border">

        {/* Salaris — always top, never overflows on mobile */}
        <div className="text-accent text-[13px] font-semibold mb-2.5 tracking-wide">
          {v.salaris}
        </div>

        {/* Werkgever label */}
        {v.werkgever && (
          <div className="text-[11px] text-muted/50 mb-3 font-medium">{v.werkgever}</div>
        )}

        {/* Title + badge */}
        <div className="flex items-start gap-2 mb-3 flex-wrap">
          <h2 className="text-[1rem] font-bold text-white leading-snug">{v.titel}</h2>
          <span className="shrink-0 text-[8px] text-accent/70 border border-accent/20 px-1.5 py-[3px] font-semibold tracking-[0.1em] uppercase self-start mt-0.5">
            Direct in dienst
          </span>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11.5px] text-muted/55">
          <span className="flex items-center gap-1">
            <LocationIcon className="w-3 h-3" />
            {v.locatie}
          </span>
          <span className="text-border">·</span>
          <span>{v.type}</span>
          {v.keukentype && (
            <>
              <span className="text-border">·</span>
              <span>{v.keukentype}</span>
            </>
          )}
        </div>

        {/* Groeipad — only for kok, not bediening */}
        {v.groeipad && (
          <div className="mt-3 inline-flex items-center gap-1.5 px-2 py-1 bg-accent/8 border border-accent/15">
            <svg className="w-3 h-3 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-[10.5px] text-accent/80 font-medium">Groeipad: {v.groeipad}</span>
          </div>
        )}
      </div>

      {/* Bullets */}
      <div className="px-5 py-4 sm:px-6 sm:py-5 flex-1">
        <ul className="space-y-2.5">
          {v.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[12.5px] text-muted/75 leading-snug">
              <CheckIcon className="w-3 h-3 text-accent mt-0.5 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      {showLink && (
        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
          <Link
            href={`/vacatures/${v.slug}`}
            className="w-full flex items-center justify-center gap-2 border border-accent/40 text-accent text-[12.5px] font-semibold py-2.5 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-200 group-hover:border-accent/60"
          >
            Bekijk vacature
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      )}
    </article>
  );
}
