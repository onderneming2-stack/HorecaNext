import Button from "./Button";
import { waUrl } from "@/lib/config";

export default function Hero() {
  const waHref = waUrl("kandidaat");

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute top-[-80px] right-[-60px] w-[540px] h-[540px] bg-accent/6 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/15 to-transparent pointer-events-none hidden lg:block" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-[600px]">

          <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 border border-accent/20 bg-accent/5">
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span className="text-[10px] text-accent font-semibold tracking-[0.16em] uppercase">
              Horeca recruitment
            </span>
          </div>

          <h1 className="font-display font-bold leading-[1.06] mb-6 sm:mb-5 text-[clamp(2.1rem,5.2vw,3.6rem)] tracking-tight">
            <span className="block text-white">Jouw volgende stap</span>
            <span className="block text-gold">in de horeca</span>
          </h1>

          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mt-8 mb-8 sm:mt-7 sm:mb-7 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-white/50">NEXT STEP</span>
            <span className="text-white/20">·</span>
            <span className="text-white/50">NEXT LEVEL</span>
            <span className="text-white/20">·</span>
            <span className="text-accent">NEXT MATCH</span>
          </p>

          <p className="text-white/55 text-[15px] leading-[1.8] mb-5 sm:mb-4 max-w-[430px]">
            Goede mensen aan goede werkgevers. Kort en direct.
          </p>

          <p className="text-[11.5px] text-muted/55 mb-12 sm:mb-10 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Direct in dienst</span>
            <span className="text-border">·</span>
            <span>Persoonlijk contact</span>
            <span className="text-border">·</span>
            <span>Snel geregeld</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <Button variant="primary" href="/vacatures" className="text-[14px] px-7 py-3.5 tracking-wide">
              Bekijk vacatures
            </Button>
            <Button variant="secondary" href="/werkgevers" className="text-[14px] px-7 py-3.5 tracking-wide">
              Ik zoek personeel
            </Button>
          </div>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12px] text-muted/50 hover:text-accent transition-colors"
          >
            <svg className="w-3.5 h-3.5 text-accent/70" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Of stuur ons een bericht
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
    </section>
  );
}
