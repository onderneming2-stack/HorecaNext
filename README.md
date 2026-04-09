# HorecaNext

Horeca recruitment website voor de regio Zutphen.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** — Inter + Playfair Display

## Starten

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Structuur

```
app/
  layout.tsx                        Root layout + metadata
  page.tsx                          Homepage
  vacatures/
    page.tsx                        Vacature overzicht
    [slug]/page.tsx                 Vacature detail (dynamic)
  werkgevers/
    page.tsx                        Werkgevers landingspagina

components/
  Navbar.tsx                        Sticky navbar, hamburger op mobiel
  Hero.tsx                          Hero sectie
  Steps.tsx                         Hoe het werkt (bug-fixed)
  VacaturesPreview.tsx              Preview op homepage
  VacatureCard.tsx                  Herbruikbare vacaturekaart
  VacatureDetail.tsx                Volledige vacature detailpagina
  WhyUs.tsx                         Waarom HorecaNext
  Employers.tsx                     Werkgevers entrypoint (compact)
  CTA.tsx                           Contact + WhatsApp + formulier
  Button.tsx                        Herbruikbaar: primary / secondary / ghost
  Footer.tsx                        Footer
  Icons.tsx                         Gedeelde SVG iconen

lib/
  config.ts                         ← HIER aanpassen: WhatsApp, e-mail, etc.
  vacatures.ts                      ← HIER aanpassen: vacaturedata

styles/
  globals.css                       Design tokens + utilities
```

---

## Configuratie

### WhatsApp nummer instellen

Open `lib/config.ts` en pas aan:

```ts
export const WHATSAPP_PHONE = "316XXXXXXXX"; // jouw nummer, zonder + of spaties
```

### Nieuwe vacature toevoegen

1. Voeg een object toe aan `vacatures` in `lib/vacatures.ts`
2. Klaar — de dynamic route `app/vacatures/[slug]/page.tsx` pikt het automatisch op

### Formulier koppelen

In `components/CTA.tsx` → `handleSubmit`:

```ts
// Vervang de setTimeout door een echte POST:
await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
// Of gebruik Resend / Formspree / andere service
```

---

## Design tokens

| Token        | Waarde            |
|--------------|-------------------|
| `primary`    | `#0B0B0B`         |
| `accent`     | `#D4AF37` (goud)  |
| `muted`      | `#A1A1A1`         |
| `surface`    | `#141414`         |
| `surface-2`  | `#1A1A1A`         |
| `border`     | `#242424`         |
| Font display | Playfair Display  |
| Font body    | Inter             |

---

## Deployment

```bash
npm run build
npm run start
```

Of via **Vercel** (aanbevolen):
1. Push naar GitHub
2. Importeer in [vercel.com](https://vercel.com)
3. Klaar

---

## Later toevoegen

- [ ] Formulier → Resend of Formspree
- [ ] Analytics → Plausible (privacy-first, geen cookies)
- [ ] `next-sitemap` voor automatische sitemap
- [ ] Meer vacatures → alleen `lib/vacatures.ts` aanpassen
- [ ] Tweede regio → `WERKGEBIED` in `lib/config.ts`
