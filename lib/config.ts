// ============================================================
// CENTRALE CONFIGURATIE — pas hier aan, werkt overal
// ============================================================

export const WHATSAPP_PHONE = "31600000000"; // Zonder + of spaties
export const CONTACT_EMAIL = "horecanextjobs@gmail.com";
export const SITE_NAME = "HorecaNext";

// Geen regio-label sitebreed — locatie zit in de vacatures zelf
export const WA_MESSAGES = {
  kandidaat:
    "Hoi! Ik ben op zoek naar een nieuwe horecabaan en wil graag meer weten.",
  werkgever:
    "Hoi! Wij zijn op zoek naar horecapersoneel en willen graag meer weten over jullie aanpak.",
  geenVacature:
    "Hoi! Ik ben op zoek naar werk in de horeca maar zie mijn functie niet staan.",
} as const;

export function waUrl(message: keyof typeof WA_MESSAGES | string): string {
  const msg =
    message in WA_MESSAGES
      ? WA_MESSAGES[message as keyof typeof WA_MESSAGES]
      : message;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
}

export function vacatureWaUrl(titel: string, locatie: string): string {
  return waUrl(
    `Hoi! Ik heb de vacature voor ${titel} in ${locatie} gezien en wil graag meer weten.`
  );
}
