import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export type RecommendationItem = {
  title: string;
  description: string;
};

type RecommendationsSectionProps = {
  title: string;
  description?: string;
  items: RecommendationItem[];
  cta?: { label: string; href: string };
};

export function RecommendationsSection({
  title,
  description,
  items,
  cta,
}: RecommendationsSectionProps) {
  return (
    <SectionContainer>
      <SectionHeading title={title} description={description} />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <Card key={`${item.title}-${index}`}>
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-ink/70">{item.description}</p>
          </Card>
        ))}
      </div>
      {cta ? (
        <div className="mt-8">
          <Button href={cta.href} variant="secondary">
            {cta.label}
          </Button>
        </div>
      ) : null}
    </SectionContainer>
  );
}
