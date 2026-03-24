import { SiteFrame } from "@/components/layout/SiteFrame";
import { PageHero } from "@/components/sections/PageHero";
import { CategoryTeaserSection } from "@/components/sections/CategoryTeaserSection";
import { TextImageSection } from "@/components/sections/TextImageSection";
import { RecommendationsSection } from "@/components/sections/RecommendationsSection";
import { WhyTeeramikSection } from "@/components/sections/WhyTeeramikSection";
import { ServiceOptionsSection } from "@/components/sections/ServiceOptionsSection";
import {
  pageMeta,
  hero,
  categories,
  inUse,
  highlights,
  giftTeaser,
  whyKeramik,
  cta,
} from "@/content/keramik";

export const metadata = pageMeta;

export default function KeramikPage() {
  return (
    <SiteFrame>
      <main id="content">
        <PageHero title={hero.title} description={hero.description} />
        <CategoryTeaserSection title={categories.title} items={categories.items} />
        <TextImageSection title={inUse.title} description={inUse.description} cta={inUse.cta} />
        <RecommendationsSection title={highlights.title} items={highlights.items} />
        <TextImageSection title={giftTeaser.title} description={giftTeaser.description} cta={giftTeaser.cta} imagePosition="right" />
        <WhyTeeramikSection title={whyKeramik.title} items={whyKeramik.items} />
        <ServiceOptionsSection title={cta.title} items={cta.items} />
      </main>
    </SiteFrame>
  );
}

