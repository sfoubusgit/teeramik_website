import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export type AboutTeaserSectionProps = {
  title: string;
  description: string;
  cta?: { label: string; href: string };
};

export function AboutTeaserSection({
  title,
  description,
  cta,
}: AboutTeaserSectionProps) {
  return (
    <SectionContainer>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <PlaceholderImage alt="Einblick in TeeRamik" className="h-64" />
        <div className="space-y-5">
          <SectionHeading title={title} description={description} />
          {cta ? (
            <Button href={cta.href} variant="secondary">
              {cta.label}
            </Button>
          ) : null}
        </div>
      </div>
    </SectionContainer>
  );
}
