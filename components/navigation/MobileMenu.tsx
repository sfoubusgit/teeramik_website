import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/components/navigation/types";

type MobileMenuProps = {
  items: NavItem[];
  className?: string;
  phone?: string;
  contactHref?: string;
  consultationHref?: string;
};

export function MobileMenu({
  items,
  className,
  phone,
  contactHref = "/kontakt",
  consultationHref = "/beratung-bestellung",
}: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      className={cn("flex flex-col gap-4 rounded-lg bg-sand/70 p-4", className)}
    >
      <div className="flex flex-col gap-2">
        {phone ? (
          <a
            href={`tel:${phone}`}
            className="rounded-md border border-haze/70 px-3 py-2 text-xs text-ink/70"
          >
            {phone}
          </a>
        ) : null}
        <div className="flex flex-wrap gap-2">
          <Button href={consultationHref} size="sm">
            Beratung
          </Button>
          <Button href={contactHref} variant="secondary" size="sm">
            Kontakt
          </Button>
        </div>
      </div>
      <div className="h-px w-full bg-haze/70" />
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-2 text-sm text-ink/80 transition-colors hover:bg-cream"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
