"use client";

import { useState } from "react";
import Toggle from "./Toggle";
import { WaIcon } from "./Icons";
import { waUrl, CONTACT_EMAIL, WHATSAPP_PHONE } from "@/lib/config";

const TOGGLE_OPTIONS = [
  { value: "kandidaat", label: "Ik zoek werk" },
  { value: "werkgever", label: "Ik zoek personeel" },
];

const FUNCTIE_OPTIONS = [
  "Zelfstandig werkend kok",
  "Souschef",
  "Bedieningsmedewerker",
  "Barmedewerker",
  "Horecamanager",
  "Anders",
];

// WA prefill messages after submission
const WA_AFTER_SUBMIT = {
  kandidaat: `Hoi, ik heb net mijn gegevens ingevuld via HorecaNext en ben benieuwd naar de mogelijkheden.`,
  werkgever: `Hoi, ik heb net een aanvraag gedaan via HorecaNext en hoor graag wat jullie kunnen betekenen.`,
};

function SuccessState({ type }: { type: "kandidaat" | "werkgever" }) {
  const waMsg = WA_AFTER_SUBMIT[type];
  const waLink = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waMsg)}`;

  return (
    <div className="py-8 text-center">
      <div className="w-10 h-10 border border-accent/30 flex items-center justify-center mx-auto mb-5">
        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="font-semibold text-white text-[15px] mb-2">
        Ontvangen. We nemen snel contact op.
      </p>
      <p className="text-muted/55 text-[13px] mb-7">
        Liever meteen bellen of appen?
      </p>
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-accent text-primary font-semibold text-[13px] tracking-wide px-6 py-3 hover:bg-accent-light transition-colors active:scale-[0.98]"
      >
        <WaIcon className="w-4 h-4" />
        App ons direct →
      </a>
    </div>
  );
}

function InputField({
  id, label, name, type = "text", required = false,
  value, onChange, placeholder, autoComplete,
}: {
  id: string; label: string; name: string; type?: string;
  required?: boolean; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] text-muted/55 mb-1.5 tracking-wide">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={id} type={type} name={name} required={required}
        autoComplete={autoComplete} value={value} onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-surface border border-border focus:border-accent/40 outline-none px-3.5 py-2.5 text-white text-[13px] placeholder:text-muted/20 transition-colors"
      />
    </div>
  );
}

function KandidaatForm() {
  const [form, setForm] = useState({
    voornaam: "", achternaam: "", telefoon: "",
    email: "", functie: "", bericht: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Kandidaat form:", form);
      setSubmitted(true);
      setLoading(false);
    }, 400);
  };

  if (submitted) return <SuccessState type="kandidaat" />;

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <InputField id="voornaam" label="Voornaam" name="voornaam" required
          value={form.voornaam} onChange={handleChange as any}
          placeholder="Voornaam" autoComplete="given-name" />
        <InputField id="achternaam" label="Achternaam" name="achternaam" required
          value={form.achternaam} onChange={handleChange as any}
          placeholder="Achternaam" autoComplete="family-name" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <InputField id="k-tel" label="Telefoon" name="telefoon" type="tel" required
          value={form.telefoon} onChange={handleChange as any}
          placeholder="+31 6 ···" autoComplete="tel" />
        <InputField id="k-email" label="E-mail" name="email" type="email" required
          value={form.email} onChange={handleChange as any}
          placeholder="jouw@email.nl" autoComplete="email" />
      </div>
      <div>
        <label htmlFor="functie" className="block text-[11px] text-muted/55 mb-1.5 tracking-wide">
          Jouw functie <span className="text-accent">*</span>
        </label>
        <select id="functie" name="functie" required value={form.functie}
          onChange={handleChange}
          className="w-full bg-surface border border-border focus:border-accent/40 outline-none px-3.5 py-2.5 text-white text-[13px] transition-colors appearance-none"
        >
          <option value="" disabled>Selecteer je functie</option>
          {FUNCTIE_OPTIONS.map((f) => <option key={f} value={f}>{f}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="k-bericht" className="block text-[11px] text-muted/55 mb-1.5 tracking-wide">
          Bericht <span className="text-muted/30 font-normal">(optioneel)</span>
        </label>
        <textarea id="k-bericht" name="bericht" rows={3} value={form.bericht}
          onChange={handleChange}
          placeholder="Iets over je ervaring of beschikbaarheid?"
          className="w-full bg-surface border border-border focus:border-accent/40 outline-none px-3.5 py-2.5 text-white text-[13px] placeholder:text-muted/20 transition-colors resize-none"
        />
      </div>
      <button type="submit" disabled={loading}
        className="w-full bg-accent text-primary font-semibold text-[13px] tracking-wide py-3 hover:bg-accent-light transition-colors active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? "Versturen..." : "Stuur mijn gegevens →"}
      </button>
      {/* Inline WA option */}
      <p className="text-center text-[11.5px] text-muted/40 mt-4 sm:mt-3">
        Liever direct?{" "}
        <a href={waUrl("kandidaat")} target="_blank" rel="noopener noreferrer"
          className="text-accent/70 hover:text-accent transition-colors underline underline-offset-2">
          App ons
        </a>
      </p>
    </form>
  );
}

function WerkgeverForm() {
  const [form, setForm] = useState({
    bedrijf: "", naam: "", telefoon: "",
    email: "", functie: "", uren: "", toelichting: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Werkgever form:", form);
      setSubmitted(true);
      setLoading(false);
    }, 400);
  };

  if (submitted) return <SuccessState type="werkgever" />;

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <InputField id="bedrijf" label="Bedrijfsnaam" name="bedrijf" required
          value={form.bedrijf} onChange={handleChange as any} placeholder="Naam van je bedrijf" />
        <InputField id="w-naam" label="Naam contactpersoon" name="naam" required
          value={form.naam} onChange={handleChange as any}
          placeholder="Jouw naam" autoComplete="name" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <InputField id="w-tel" label="Telefoon" name="telefoon" type="tel" required
          value={form.telefoon} onChange={handleChange as any}
          placeholder="+31 6 ···" autoComplete="tel" />
        <InputField id="w-email" label="E-mail" name="email" type="email" required
          value={form.email} onChange={handleChange as any}
          placeholder="jouw@bedrijf.nl" autoComplete="email" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <InputField id="w-functie" label="Functie die je zoekt" name="functie" required
          value={form.functie} onChange={handleChange as any} placeholder="Bijv. kok, bediening" />
        <InputField id="uren" label="Aantal uur / contract" name="uren"
          value={form.uren} onChange={handleChange as any} placeholder="Bijv. 32–40 uur" />
      </div>
      <div>
        <label htmlFor="toelichting" className="block text-[11px] text-muted/55 mb-1.5 tracking-wide">
          Korte toelichting <span className="text-muted/30 font-normal">(optioneel)</span>
        </label>
        <textarea id="toelichting" name="toelichting" rows={3} value={form.toelichting}
          onChange={handleChange}
          placeholder="Wat voor team heb je? Bijzonderheden over de functie?"
          className="w-full bg-surface border border-border focus:border-accent/40 outline-none px-3.5 py-2.5 text-white text-[13px] placeholder:text-muted/20 transition-colors resize-none"
        />
      </div>
      <button type="submit" disabled={loading}
        className="w-full bg-accent text-primary font-semibold text-[13px] tracking-wide py-3 hover:bg-accent-light transition-colors active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? "Versturen..." : "Aanvraag starten →"}
      </button>
      {/* Inline WA option */}
      <p className="text-center text-[11.5px] text-muted/40 mt-4 sm:mt-3">
        Liever direct?{" "}
        <a href={waUrl("werkgever")} target="_blank" rel="noopener noreferrer"
          className="text-accent/70 hover:text-accent transition-colors underline underline-offset-2">
          App ons
        </a>
      </p>
    </form>
  );
}

export default function ContactForm() {
  const [active, setActive] = useState<"kandidaat" | "werkgever">("kandidaat");

  return (
    <section id="contact" className="py-16 md:py-24 bg-surface relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[450px] h-[350px] bg-accent/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <span className="gold-rule" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 tracking-tight">
            Direct in contact
          </h2>
          <p className="text-muted/55 text-[13.5px] max-w-md leading-relaxed">
            App ons of laat je gegevens achter. We reageren snel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">

          {/* Left — WhatsApp primary */}
          <div className="space-y-4">
            <div className="border border-accent/15 bg-primary p-6">
              <p className="text-[9px] text-accent/55 font-semibold tracking-[0.16em] uppercase mb-4">
                Snelste optie
              </p>
              <p className="text-[13px] text-muted/60 leading-relaxed mb-5">
                Stuur een berichtje. We reageren snel.
              </p>
              <a
                href={waUrl("kandidaat")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-accent text-primary font-semibold text-[13px] tracking-wide py-3 hover:bg-accent-light transition-colors active:scale-[0.98] mb-3"
              >
                <WaIcon className="w-4 h-4" />
                App ons direct
              </a>
              <p className="text-[11px] text-muted/35 text-center">
                Snelle reactie · Geen verplichtingen
              </p>
            </div>

            <div className="border border-border bg-primary p-4 flex items-center justify-between gap-4">
              <span className="text-[12px] text-muted/45">Of mail ons</span>
              <a href={`mailto:${CONTACT_EMAIL}`}
                className="text-[12px] text-accent hover:text-accent-light transition-colors font-medium">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Right — dual form */}
          <div className="border border-border bg-primary p-6">
            {/* Full-width 50/50 toggle */}
            <Toggle
              options={TOGGLE_OPTIONS}
              value={active}
              onChange={(v) => setActive(v as "kandidaat" | "werkgever")}
              fullWidth
              className="mb-6 w-full"
            />

            {active === "kandidaat" ? <KandidaatForm /> : <WerkgeverForm />}

            {/* Below CTA */}
            <p className="text-center text-[11px] text-muted/30 mt-6 sm:mt-4 leading-relaxed">
              Geen spam. We reageren zo snel mogelijk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
