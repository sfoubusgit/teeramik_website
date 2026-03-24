import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  title: string;
  description?: string;
  ctas?: Array<{ label: string; href: string }>;
};

export function PageHero({ title, description, ctas }: PageHeroProps) {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container size="narrow">
        <SectionHeading title={title} description={description} as="h1" />
        {ctas ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className="rounded-md border border-olive/30 px-4 py-2 text-sm text-olive hover:bg-sand"
              >
                {cta.label}
              </a>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
