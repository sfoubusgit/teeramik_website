import { SiteFrame } from "@/components/layout/SiteFrame";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceOptionsSection } from "@/components/sections/ServiceOptionsSection";
import { RecommendationsSection } from "@/components/sections/RecommendationsSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { FAQSection } from "@/components/sections/FAQSection";
import {
  pageMeta,
  hero,
  actions,
  process,
  faq,
  cta,
} from "@/content/consultation";

export const metadata = pageMeta;

export default function BeratungBestellungPage() {
  return (
    <SiteFrame>
      <main id="content">
        <PageHero title={hero.title} description={hero.description} />
        <ServiceOptionsSection title={actions.title} items={actions.items} />
        <RecommendationsSection title={process.title} items={process.items} />
        <section id="beratung">
          <ConsultationFormSection title="Schreiben Sie uns, wonach Sie suchen" />
        </section>
        <section id="teeliste">
          <ServiceOptionsSection
            title="Unser Sortiment gezielt anfragen"
            items={actions.items.slice(1, 2)}
          />
        </section>
        <FAQSection title={faq.title} items={faq.items} />
        <ServiceOptionsSection title={cta.title} items={cta.items} />
      </main>
    </SiteFrame>
  );
}

