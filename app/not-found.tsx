import Link from "next/link";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { PageHero } from "@/components/sections/PageHero";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Seite nicht gefunden",
  description: "Diese Seite konnte nicht gefunden werden.",
};

export default function NotFound() {
  return (
    <SiteFrame>
      <main id="content">
        <PageHero
          title="Diese Seite konnten wir leider nicht finden."
          description="Vielleicht hilft Ihnen einer dieser Wege weiter."
        />
        <SectionContainer size="narrow">
          <div className="flex flex-wrap gap-3">
            <Button href="/">Zur Startseite</Button>
            <Button href="/geschenkideen" variant="secondary">
              Geschenkideen entdecken
            </Button>
            <Link className="text-sm text-olive" href="/kontakt">
              Kontakt aufnehmen
            </Link>
          </div>
        </SectionContainer>
      </main>
    </SiteFrame>
  );
}
