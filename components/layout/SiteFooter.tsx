import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { NavItem } from "@/components/navigation/types";

type SiteFooterProps = {
  items: NavItem[];
  contact?: {
    address?: string;
    phone?: string;
    email?: string;
    hours?: string;
  };
};

export function SiteFooter({ items, contact }: SiteFooterProps) {
  return (
    <footer className="border-t border-haze/70 bg-sand/40 py-12">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="text-lg font-semibold">TeeRamik</p>
          <p className="text-sm text-ink/70">
            Tee, Keramik und besondere Geschenkideen in Wedel.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold">Navigation</p>
          <div className="flex flex-col gap-2">
            {items.map((item) => (
              <Link key={item.href} href={item.href} className="text-ink/70 hover:text-ink">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold">Kontakt</p>
          {contact?.address ? <p className="text-ink/70">{contact.address}</p> : null}
          {contact?.hours ? <p className="text-ink/70">{contact.hours}</p> : null}
          {contact?.phone ? (
            <a className="text-ink/70 hover:text-ink" href={`tel:${contact.phone}`}>
              {contact.phone}
            </a>
          ) : null}
          {contact?.email ? (
            <a className="text-ink/70 hover:text-ink" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
