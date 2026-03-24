import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { ServiceCard } from "@/components/cards/ServiceCard";

export type ServiceOption = {
  title: string;
  description: string;
  cta?: { label: string; href: string };
};

type ServiceOptionsSectionProps = {
  title: string;
  description?: string;
  items: ServiceOption[];
};

export function ServiceOptionsSection({
  title,
  description,
  items,
}: ServiceOptionsSectionProps) {
  return (
    <SectionContainer>
      <SectionHeading title={title} description={description} />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <ServiceCard key={`${item.title}-${index}`} {...item} />
        ))}
      </div>
    </SectionContainer>
  );
}
