import { SiteFrame } from "@/components/layout/SiteFrame";
import { PageHero } from "@/components/sections/PageHero";
import { CategoryTeaserSection } from "@/components/sections/CategoryTeaserSection";
import { GiftIdeasSection } from "@/components/sections/GiftIdeasSection";
import { SeasonalHighlightsSection } from "@/components/sections/SeasonalHighlightsSection";
import { RecommendationsSection } from "@/components/sections/RecommendationsSection";
import { ServiceOptionsSection } from "@/components/sections/ServiceOptionsSection";
import {
  pageMeta,
  hero,
  categories,
  tasteGrid,
  highlights,
  recommendations,
  orientation,
  serviceCtas,
  crosslinks,
} from "@/content/tee";

export const metadata = pageMeta;

export default function TeePage() {
  return (
    <SiteFrame>
      <main id="content">
        <PageHero title={hero.title} description={hero.description} ctas={hero.ctas} />
        <CategoryTeaserSection title={categories.title} items={categories.items} />
        <GiftIdeasSection title={tasteGrid.title} items={tasteGrid.items} />
        <SeasonalHighlightsSection title={highlights.title} items={highlights.items} />
        <RecommendationsSection title={recommendations.title} items={recommendations.items} />
        <ServiceOptionsSection title={orientation.title} description={orientation.description} items={serviceCtas.items} />
        <CategoryTeaserSection title={crosslinks.title} items={crosslinks.items} />
      </main>
    </SiteFrame>
  );
}

