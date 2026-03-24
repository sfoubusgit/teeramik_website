import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/components/navigation/types";

type MainNavProps = {
  items: NavItem[];
  className?: string;
};

export function MainNav({ items, className }: MainNavProps) {
  return (
    <nav className={cn("flex items-center gap-6 text-sm", className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-ink/80 transition-colors hover:text-ink"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
