import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export type HeroSectionProps = {
  title: string;
  subtitle: string;
  primaryCtas: Array<{ label: string; href: string }>;
  secondaryCta?: { label: string; href: string };
};

export function HeroSection({
  title,
  subtitle,
  primaryCtas,
  secondaryCta,
}: HeroSectionProps) {
  return (
    <section className="bg-cream pb-16 pt-20">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <h1 className="text-balance">{title}</h1>
          <Text size="lead" tone="muted">
            {subtitle}
          </Text>
          <div className="flex flex-wrap gap-3">
            {primaryCtas.map((cta) => (
              <Button key={cta.href} href={cta.href}>
                {cta.label}
              </Button>
            ))}
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
        <PlaceholderImage alt="Stimmungsbild TeeRamik" className="h-64 lg:h-80" />
      </Container>
    </section>
  );
}
