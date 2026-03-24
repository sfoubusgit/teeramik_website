import { HighlightCard } from "@/components/cards/HighlightCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionContainer } from "@/components/layout/SectionContainer";

export type HighlightItem = {
  title: string;
  description: string;
  cta?: { label: string; href: string };
};

type SeasonalHighlightsSectionProps = {
  title: string;
  description?: string;
  items: HighlightItem[];
};

export function SeasonalHighlightsSection({
  title,
  description,
  items,
}: SeasonalHighlightsSectionProps) {
  return (
    <SectionContainer>
      <SectionHeading title={title} description={description} />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <HighlightCard key={`${item.title}-${index}`} {...item} />
        ))}
      </div>
    </SectionContainer>
  );
}
