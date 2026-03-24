import { SiteFrame } from "@/components/layout/SiteFrame";
import { PageHero } from "@/components/sections/PageHero";
import { GiftIdeasSection } from "@/components/sections/GiftIdeasSection";
import { RecommendationsSection } from "@/components/sections/RecommendationsSection";
import { TextImageSection } from "@/components/sections/TextImageSection";
import { WhyTeeramikSection } from "@/components/sections/WhyTeeramikSection";
import { ServiceOptionsSection } from "@/components/sections/ServiceOptionsSection";
import {
  pageMeta,
  hero,
  occasions,
  budgets,
  sets,
  recipients,
  consultation,
  trust,
  ctas,
} from "@/content/giftIdeas";

export const metadata = pageMeta;

export default function GeschenkideenPage() {
  return (
    <SiteFrame>
      <main id="content">
        <PageHero title={hero.title} description={hero.description} ctas={hero.ctas} />
        <GiftIdeasSection title={occasions.title} items={occasions.items} />
        <GiftIdeasSection title={budgets.title} items={budgets.items} />
        <RecommendationsSection title={sets.title} items={sets.items} />
        <RecommendationsSection title={recipients.title} items={recipients.items} />
        <TextImageSection title={consultation.title} description={consultation.description} cta={consultation.cta} />
        <WhyTeeramikSection title={trust.title} items={trust.items} />
        <ServiceOptionsSection title={ctas.title} items={ctas.items} />
      </main>
    </SiteFrame>
  );
}

