import { SiteFrame } from "@/components/layout/SiteFrame";
import { PageHero } from "@/components/sections/PageHero";
import { EditorialFeatureBlock } from "@/components/sections/EditorialFeatureBlock";
import { SeasonalHighlightsSection } from "@/components/sections/SeasonalHighlightsSection";
import { RecommendationsSection } from "@/components/sections/RecommendationsSection";
import { CategoryTeaserSection } from "@/components/sections/CategoryTeaserSection";
import {
  pageMeta,
  hero,
  feature,
  seasonal,
  newInStore,
  recommendations,
  crosslinks,
} from "@/content/news";

export const metadata = pageMeta;

export default function AktuellesPage() {
  return (
    <SiteFrame>
      <main id="content">
        <PageHero title={hero.title} description={hero.description} />
        <EditorialFeatureBlock {...feature} />
        <SeasonalHighlightsSection title={seasonal.title} items={seasonal.items} />
        <RecommendationsSection title={newInStore.title} items={newInStore.items} />
        <RecommendationsSection {...recommendations} />
        <CategoryTeaserSection title={crosslinks.title} items={crosslinks.items} />
      </main>
    </SiteFrame>
  );
}

