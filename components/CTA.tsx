"use client";

import { useState } from "react";
import Button from "./Button";
import { WaIcon } from "./Icons";
import { waUrl, CONTACT_EMAIL } from "@/lib/config";

export default function CTA() {
  const [form, setForm] = useState({
    naam: "",
    email: "",
    telefoon: "",
    bericht: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: vervang door echte API call (Resend / Formspree)
    setTimeout(() => {
      console.log("Form submission:", form);
      setSubmitted(true);
      setLoading(false);
    }, 400);
  };

  const waHref = waUrl("kandidaat");

  return (
    <section id="contact" className="py-16 md:py-24 bg-surface relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[350px] bg-accent/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12">
          <span className="gold-rule" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 tracking-tight">
            Klaar voor je{" "}
            <span className="text-gold italic">volgende stap?</span>
          </h2>
          <p className="text-muted/60 text-sm max-w-md leading-relaxed">
            App ons direct of laat je gegevens achter. We nemen snel contact op.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">

          {/* Links — WhatsApp primair */}
          <div className="space-y-4">
            {/* WhatsApp card */}
            <div className="border border-accent/15 bg-primary p-6">
              <p className="text-[9px] text-accent/60 font-semibold tracking-[0.15em] uppercase mb-4">
                Snelste optie
              </p>
              <p className="text-[13px] text-muted/70 leading-relaxed mb-5">
                Stuur ons een berichtje via WhatsApp. We reageren snel en bespreken wat er mogelijk is.
              </p>
              <Button
                variant="primary"
                href={waHref}
                external
                className="w-full justify-center text-[14px] py-3.5 mb-3"
              >
                <WaIcon className="w-4 h-4" />
                App ons op WhatsApp
              </Button>
              <p className="text-[11px] text-muted/40 text-center">
                Snel reactie · Geen verplichtingen
              </p>
            </div>

            {/* Mail fallback */}
            <div className="border border-border bg-primary p-4 flex items-center justify-between gap-4">
              <span className="text-[12px] text-muted/50">Of mail ons direct</span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[12px] text-accent hover:text-accent-light transition-colors font-medium"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Rechts — formulier */}
          <div className="border border-border bg-primary p-6">
            {submitted ? (
              <div className="py-8 text-center">
                <div className="w-9 h-9 border border-accent/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-semibold text-white text-sm mb-1.5">Gegevens ontvangen</p>
                <p className="text-muted/60 text-xs">We nemen zo snel mogelijk contact op.</p>
              </div>
            ) : (
              <>
                <p className="text-[9px] text-muted/50 font-semibold tracking-[0.15em] uppercase mb-5">
                  Gegevens achterlaten
                </p>
                <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="naam" className="block text-[11px] text-muted/60 mb-1.5">
                        Naam <span className="text-accent">*</span>
                      </label>
                      <input
                        id="naam"
                        type="text"
                        name="naam"
                        required
                        autoComplete="name"
                        value={form.naam}
                        onChange={handleChange}
                        className="w-full bg-surface border border-border focus:border-accent/40 outline-none px-3.5 py-2.5 text-white text-[13px] placeholder:text-muted/25 transition-colors"
                        placeholder="Jouw naam"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefoon" className="block text-[11px] text-muted/60 mb-1.5">
                        Telefoon <span className="text-accent">*</span>
                      </label>
                      <input
                        id="telefoon"
                        type="tel"
                        name="telefoon"
                        required
                        autoComplete="tel"
                        value={form.telefoon}
                        onChange={handleChange}
                        className="w-full bg-surface border border-border focus:border-accent/40 outline-none px-3.5 py-2.5 text-white text-[13px] placeholder:text-muted/25 transition-colors"
                        placeholder="+31 6 ···"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] text-muted/60 mb-1.5">
                      E-mail <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-surface border border-border focus:border-accent/40 outline-none px-3.5 py-2.5 text-white text-[13px] placeholder:text-muted/25 transition-colors"
                      placeholder="jouw@email.nl"
                    />
                  </div>
                  <div>
                    <label htmlFor="bericht" className="block text-[11px] text-muted/60 mb-1.5">
                      Bericht <span className="text-muted/30 font-normal">(optioneel)</span>
                    </label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      rows={3}
                      value={form.bericht}
                      onChange={handleChange}
                      className="w-full bg-surface border border-border focus:border-accent/40 outline-none px-3.5 py-2.5 text-white text-[13px] placeholder:text-muted/25 transition-colors resize-none"
                      placeholder="Welke functie zoek je? Iets over je ervaring?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent text-primary font-semibold text-[13px] tracking-wide py-3 hover:bg-accent-light transition-colors active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Versturen..." : "Verstuur gegevens"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
