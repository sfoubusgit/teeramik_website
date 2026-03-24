import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Card } from "@/components/ui/Card";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export type CategoryTeaser = {
  title: string;
  description: string;
  href: string;
};

type CategoryTeaserSectionProps = {
  title: string;
  description?: string;
  items: CategoryTeaser[];
};

export function CategoryTeaserSection({
  title,
  description,
  items,
}: CategoryTeaserSectionProps) {
  return (
    <SectionContainer>
      <SectionHeading title={title} description={description} />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.href} className="flex h-full flex-col gap-3">
            <PlaceholderImage alt={item.title} className="h-36" />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-ink/70">{item.description}</p>
            <a className="text-sm text-olive" href={item.href}>
              {item.title} entdecken
            </a>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
