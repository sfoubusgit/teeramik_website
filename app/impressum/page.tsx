import { SiteFrame } from "@/components/layout/SiteFrame";
import { PageHero } from "@/components/sections/PageHero";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Text } from "@/components/ui/Text";
import { pageMeta } from "@/content/imprint";

export const metadata = pageMeta;

export default function ImpressumPage() {
  return (
    <SiteFrame>
      <main id="content">
        <PageHero title="Impressum" description="Rechtliche Informationen" />
        <SectionContainer size="narrow">
          <div className="space-y-4">
            <Text>
              Platzhalter fuer die rechtlichen Angaben. Inhalte werden in der
              finalen Version eingefuegt.
            </Text>
            <Text tone="muted" size="small">
              Bitte ergaenzen Sie hier Firmenname, Adresse, Kontakt, Vertretungsberechtigte und
              weitere Pflichtangaben.
            </Text>
          </div>
        </SectionContainer>
      </main>
    </SiteFrame>
  );
}
