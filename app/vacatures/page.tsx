import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import VacatureCard from "@/components/VacatureCard";
import { vacatures } from "@/lib/vacatures";
import { waUrl } from "@/lib/config";
import { WaIcon } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vacatures – HorecaNext",
  description:
    "Openstaande vacatures voor kok en bediening in Zutphen. Direct in dienst bij de werkgever via HorecaNext.",
};

export default function VacaturesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-primary pt-24 pb-20">

        {/* Page header — consistent with other subpages */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 border-b border-border mb-10">
          <span className="gold-rule" />
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2.5 tracking-tight leading-tight">
            Openstaande vacatures
          </h1>
          <p className="text-muted/60 text-[13.5px]">
            Direct in dienst bij de werkgever.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Cards — UPDATE 7: gap-4 for better mobile spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {vacatures.map((v) => (
              <VacatureCard key={v.slug} vacature={v} />
            ))}
          </div>

          {/* Functie niet gevonden — UPDATE 7: no duplicate, single clean block */}
          <div className="border border-dashed border-border p-8 sm:p-10 text-center">
            <p className="text-white text-sm font-semibold mb-1">
              Staat jouw functie er niet bij?
            </p>
            <p className="text-muted/60 text-[13px] mb-6">
              App ons gerust. We kijken graag met je mee.
            </p>
            <Button variant="primary" href={waUrl("geenVacature")} external className="text-[13px] px-6 py-3">
              <WaIcon className="w-4 h-4" />
              App ons direct
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
