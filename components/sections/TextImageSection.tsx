import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

type TextImageSectionProps = {
  title: string;
  description: string;
  cta?: { label: string; href: string };
  imagePosition?: "left" | "right";
};

export function TextImageSection({
  title,
  description,
  cta,
  imagePosition = "left",
}: TextImageSectionProps) {
  return (
    <SectionContainer>
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div
          className={
            imagePosition === "right"
              ? "order-2 lg:order-2"
              : "order-1 lg:order-1"
          }
        >
          <PlaceholderImage alt={title} className="h-64" />
        </div>
        <div
          className={`space-y-5 ${
            imagePosition === "right" ? "order-1 lg:order-1" : "order-2 lg:order-2"
          }`}
        >
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
