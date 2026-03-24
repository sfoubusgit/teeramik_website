"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MainNav } from "@/components/navigation/MainNav";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import type { NavItem } from "@/components/navigation/types";

type SiteHeaderProps = {
  items: NavItem[];
  phone?: string;
  cta?: { label: string; href: string };
};

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative inline-flex h-4 w-5 items-center">
      <span
        className={`absolute left-0 h-[2px] w-5 bg-ink transition-all ${
          open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
        }`}
      />
      <span
        className={`absolute left-0 h-[2px] w-5 bg-ink transition-all ${
          open ? "opacity-0" : "top-1/2 -translate-y-1/2"
        }`}
      />
      <span
        className={`absolute left-0 h-[2px] w-5 bg-ink transition-all ${
          open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
        }`}
      />
    </span>
  );
}

export function SiteHeader({ items, phone, cta }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-haze/70 bg-cream/90">
      <Container className="flex items-center justify-between py-5">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg font-semibold text-ink">
            TeeRamik
          </Link>
          <div className="hidden lg:block">
            <MainNav items={items} />
          </div>
        </div>
        <div className="flex items-center gap-3">
          {phone ? (
            <a className="hidden text-sm text-ink/70 sm:inline" href={`tel:${phone}`}>
              {phone}
            </a>
          ) : null}
          {cta ? <Button href={cta.href}>{cta.label}</Button> : null}
          <button
            type="button"
            className="ml-1 inline-flex items-center gap-2 rounded-md border border-haze/70 px-3 py-2 text-xs text-ink/70 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Menue schliessen" : "Menue oeffnen"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <MenuIcon open={isOpen} />
            {isOpen ? "Schliessen" : "Menue"}
          </button>
        </div>
      </Container>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          isOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="pb-6" size="default">
          <MobileMenu items={items} phone={phone} />
        </Container>
      </div>
    </header>
  );
}
