import { SiteFrame } from "@/components/layout/SiteFrame";
import { PageHero } from "@/components/sections/PageHero";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Text } from "@/components/ui/Text";
import { pageMeta } from "@/content/privacy";

export const metadata = pageMeta;

export default function DatenschutzPage() {
  return (
    <SiteFrame>
      <main id="content">
        <PageHero title="Datenschutz" description="Hinweise zum Datenschutz" />
        <SectionContainer size="narrow">
          <div className="space-y-4">
            <Text>
              Platzhalter fuer die Datenschutzhinweise. Inhalte werden in der
              finalen Version eingefuegt.
            </Text>
            <Text tone="muted" size="small">
              Bitte ergaenzen Sie hier die Pflichtinformationen gem. DSGVO.
            </Text>
          </div>
        </SectionContainer>
      </main>
    </SiteFrame>
  );
}
