import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "HorecaNext – Horeca vacatures en recruitment",
    template: "%s | HorecaNext",
  },
  description:
    "HorecaNext koppelt horecaprofessionals aan werkgevers die bij ze passen. Persoonlijk contact, directe plaatsing.",
  keywords: [
    "horecabaan",
    "horeca vacature",
    "kok vacature",
    "bediening vacature",
    "horeca recruitment",
    "horecapersoneel gezocht",
  ],
  openGraph: {
    title: "HorecaNext – Horeca recruitment",
    description:
      "Persoonlijk contact, directe plaatsing bij de werkgever. HorecaNext, horeca recruitment.",
    type: "website",
    locale: "nl_NL",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-primary text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
