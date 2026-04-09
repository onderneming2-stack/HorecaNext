import Link from "next/link";
import { vacatures } from "@/lib/vacatures";
import VacatureCard from "./VacatureCard";

export default function VacaturesPreview() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="gold-rule" />
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2 tracking-tight">
              Openstaande vacatures
            </h2>
            <p className="text-muted/60 text-sm">
              Direct in dienst bij de werkgever.
            </p>
          </div>
          <Link
            href="/vacatures"
            className="inline-flex items-center gap-1.5 text-[13px] text-accent hover:text-accent-light transition-colors font-medium shrink-0 pb-1"
          >
            Alle vacatures
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {vacatures.map((v) => (
            <VacatureCard key={v.slug} vacature={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
