"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import { WaIcon } from "./Icons";
import { waUrl } from "@/lib/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waHref = waUrl("kandidaat");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/96 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16" aria-label="Hoofdnavigatie">

          {/* Logo + slogan */}
          <Link href="/" className="flex flex-col leading-none group" aria-label="HorecaNext — home">
            <span className="text-[1.05rem] font-bold tracking-tight">
              <span className="text-white group-hover:text-white/90 transition-colors duration-200">Horeca</span>
              <span className="text-accent">Next</span>
            </span>
            <span className="text-[8.5px] font-medium tracking-[0.18em] uppercase mt-0.5 hidden sm:flex items-center gap-1">
              <span className="text-white/35">Next Step</span>
              <span className="text-white/20">·</span>
              <span className="text-white/35">Next Level</span>
              <span className="text-white/20">·</span>
              <span className="text-accent/70">Next Match</span>
            </span>
          </Link>

          {/* Desktop nav — UPDATE 3: Home + kandidaten link added */}
          <div className="hidden md:flex items-center gap-7">
            <Link href="/" className="text-[13px] text-muted/70 hover:text-white transition-colors font-medium">
              Home
            </Link>
            <Link href="/vacatures" className="text-[13px] text-muted/70 hover:text-white transition-colors font-medium">
              Vacatures
            </Link>
            <Link href="/werkgevers" className="text-[13px] text-muted/70 hover:text-white transition-colors font-medium">
              Voor werkgevers
            </Link>
            <Button variant="primary" href={waHref} external className="text-[13px] px-5 py-2.5">
              <WaIcon />
              App ons direct
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-b border-border bg-primary/98 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-0.5">
          <Link href="/" className="py-3 text-[13px] font-medium text-muted/70 hover:text-white transition-colors border-b border-border/40" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/vacatures" className="py-3 text-[13px] font-medium text-muted/70 hover:text-white transition-colors border-b border-border/40" onClick={() => setMenuOpen(false)}>
            Vacatures
          </Link>
          <Link href="/werkgevers" className="py-3 text-[13px] font-medium text-muted/70 hover:text-white transition-colors border-b border-border/40" onClick={() => setMenuOpen(false)}>
            Voor werkgevers
          </Link>
          <div className="pt-3.5">
            <Button variant="primary" href={waHref} external className="w-full justify-center text-[13px]">
              <WaIcon />
              App ons direct
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
