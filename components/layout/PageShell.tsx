import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Text } from "@/components/ui/Text";

export function PageShell({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <main id="content">
      <section className="py-16 sm:py-24">
        <Container size="narrow">
          <SectionHeading
            title={title}
            description={description}
            as="h1"
          />
          <div className="mt-6">
            <Text size="small" tone="muted">
              Dieser Platzhalter wird in den naechsten Phasen durch die finalen
              Sektionen ersetzt.
            </Text>
          </div>
        </Container>
      </section>
    </main>
  );
}

