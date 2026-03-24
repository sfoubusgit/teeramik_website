import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export type GiftIdea = {
  title: string;
  description: string;
};

type GiftIdeasSectionProps = {
  title: string;
  description?: string;
  items: GiftIdea[];
  cta?: { label: string; href: string };
};

export function GiftIdeasSection({
  title,
  description,
  items,
  cta,
}: GiftIdeasSectionProps) {
  return (
    <SectionContainer>
      <SectionHeading title={title} description={description} />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Card key={`${item.title}-${index}`}>
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-ink/70">{item.description}</p>
          </Card>
        ))}
      </div>
      {cta ? (
        <div className="mt-8">
          <Button href={cta.href}>{cta.label}</Button>
        </div>
      ) : null}
    </SectionContainer>
  );
}
