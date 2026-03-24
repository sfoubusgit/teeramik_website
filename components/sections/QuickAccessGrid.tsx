import { FeatureCard } from "@/components/cards/FeatureCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionContainer } from "@/components/layout/SectionContainer";

export type QuickAccessItem = {
  title: string;
  description: string;
  href: string;
};

type QuickAccessGridProps = {
  title: string;
  items: QuickAccessItem[];
};

export function QuickAccessGrid({ title, items }: QuickAccessGridProps) {
  return (
    <SectionContainer>
      <SectionHeading title={title} />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <FeatureCard
            key={item.href}
            title={item.title}
            description={item.description}
            href={item.href}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
