// ============================================================
// VACATURE DATA
// ============================================================

export type Vacature = {
  slug: string;
  titel: string;
  locatie: string;
  werkgever: string;
  salaris: string;
  type: string;
  keukentype?: string;
  groeipad?: string;
  bullets: string[];
  beschrijving: string;
  seoDescription: string;
  watGaJeDoen: string[];
  watBiedenWij: string[];
  watVragenWij: string[];
};

export const vacatures: Vacature[] = [
  {
    slug: "zelfstandig-werkend-kok-zutphen",
    titel: "Zelfstandig Werkend Kok",
    locatie: "Zutphen",
    werkgever: "Premium steakhouse in Zutphen",
    salaris: "€3.000 – €3.600 p/m",
    type: "Fulltime / Parttime",
    keukentype: "Steakhouse / grill",
    groeipad: "→ Souschef",
    bullets: [
      "Direct in dienst bij de werkgever",
      "Werken met kwaliteitsvlees en goede producten",
      "Focus op grill en à la carte",
      "Klein keukenteam",
      "Uren in overleg",
    ],
    beschrijving:
      "Direct in dienst bij een premium steakhouse in Zutphen. Een goede plek voor iemand die stevig in zijn schoenen staat in de keuken.",
    seoDescription:
      "Vacature zelfstandig werkend kok in Zutphen bij een premium steakhouse. Salaris €3.000–€3.600 p/m. Direct in dienst via HorecaNext.",
    watGaJeDoen: [
      "Bereiden van vleesgerechten en à la carte menu",
      "Bewaken van kwaliteit en constante output",
      "Hygiëne en voedselveiligheid (HACCP)",
      "Keuken runnen op drukke avonden",
      "Samenwerken in een klein keukenteam",
    ],
    watBiedenWij: [
      "Salaris €3.000 tot €3.600 per maand",
      "Direct in dienst bij de werkgever",
      "Werken met goede producten",
      "Ruimte om door te groeien",
      "Uren en rooster in overleg",
    ],
    watVragenWij: [
      "Koksopleiding of aantoonbare werkervaring",
      "Zelfstandig kunnen werken",
      "Affiniteit met vlees en grill",
      "Stressbestendig op drukke avonden",
    ],
  },
  {
    slug: "bedieningsmedewerker-zutphen",
    titel: "Bedieningsmedewerker",
    locatie: "Zutphen",
    werkgever: "Premium steakhouse in Zutphen",
    salaris: "€2.600 – €3.000 p/m",
    type: "Fulltime / Parttime",
    keukentype: "Steakhouse / bediening",
    bullets: [
      "Direct in dienst bij de werkgever",
      "Werken in een sterk serviceteam",
      "Gastgericht en representatief",
      "Goede fooiencultuur",
      "Avond- en weekendwerk mogelijk",
    ],
    beschrijving:
      "Direct in dienst bij een premium steakhouse in Zutphen. Een mooie plek voor iemand die sterk is in service en gastcontact.",
    seoDescription:
      "Vacature bedieningsmedewerker in Zutphen bij een premium steakhouse. Salaris €2.600–€3.000 p/m. Direct in dienst via HorecaNext.",
    watGaJeDoen: [
      "Gasten ontvangen en begeleiden",
      "Bestellingen opnemen en serveren",
      "Zorgen voor een goede gastbeleving",
      "Rekeningen afsluiten",
    ],
    watBiedenWij: [
      "Salaris €2.600 tot €3.000 per maand",
      "Direct in dienst bij de werkgever",
      "Professioneel team",
      "Goede fooiencultuur",
      "Reiskosten en uren in overleg",
    ],
    watVragenWij: [
      "Ervaring in de bediening is een pre, geen vereiste",
      "Representatief en servicegericht",
      "Goede communicatie",
      "Beschikbaar in avond en weekenden",
    ],
  },
];
