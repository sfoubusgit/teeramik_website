import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { TrustCard } from "@/components/cards/TrustCard";

export type TrustItem = {
  title: string;
  description: string;
};

type WhyTeeramikSectionProps = {
  title: string;
  description?: string;
  items: TrustItem[];
};

export function WhyTeeramikSection({
  title,
  description,
  items,
}: WhyTeeramikSectionProps) {
  return (
    <SectionContainer>
      <SectionHeading title={title} description={description} />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <TrustCard key={`${item.title}-${index}`} {...item} />
        ))}
      </div>
    </SectionContainer>
  );
}
