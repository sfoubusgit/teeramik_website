import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export type EditorialFeatureBlockProps = {
  eyebrow?: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
};

export function EditorialFeatureBlock({
  eyebrow,
  title,
  description,
  cta,
}: EditorialFeatureBlockProps) {
  return (
    <SectionContainer>
      <div className="grid gap-10 rounded-xl bg-sand/70 p-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <SectionHeading title={title} description={description} eyebrow={eyebrow} />
          {cta ? (
            <Button href={cta.href}>
              {cta.label}
            </Button>
          ) : null}
        </div>
        <PlaceholderImage alt={title} className="h-56" />
      </div>
    </SectionContainer>
  );
}
