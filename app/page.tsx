import { SiteFrame } from "@/components/layout/SiteFrame";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuickAccessGrid } from "@/components/sections/QuickAccessGrid";
import { CategoryTeaserSection } from "@/components/sections/CategoryTeaserSection";
import { SeasonalHighlightsSection } from "@/components/sections/SeasonalHighlightsSection";
import { GiftIdeasSection } from "@/components/sections/GiftIdeasSection";
import { WhyTeeramikSection } from "@/components/sections/WhyTeeramikSection";
import { RecommendationsSection } from "@/components/sections/RecommendationsSection";
import { AboutTeaserSection } from "@/components/sections/AboutTeaserSection";
import { ServiceOptionsSection } from "@/components/sections/ServiceOptionsSection";
import { ContactBlock } from "@/components/sections/ContactBlock";
import { site } from "@/content/site";
import {
  pageMeta,
  announcement,
  hero,
  quickAccess,
  categories,
  highlights,
  giftIdeas,
  whyTeeramik,
  recommendations,
  aboutTeaser,
  serviceOptions,
  contact,
} from "@/content/home";

export const metadata = pageMeta;

export default function HomePage() {
  return (
    <SiteFrame announcement={{ message: announcement, href: "/aktuelles" }}>
      <main id="content">
        <HeroSection {...hero} />
        <QuickAccessGrid {...quickAccess} />
        <CategoryTeaserSection {...categories} />
        <SeasonalHighlightsSection {...highlights} />
        <GiftIdeasSection {...giftIdeas} />
        <WhyTeeramikSection {...whyTeeramik} />
        <RecommendationsSection {...recommendations} />
        <AboutTeaserSection {...aboutTeaser} />
        <ServiceOptionsSection {...serviceOptions} />
        <ContactBlock
          title={contact.title}
          description={contact.description}
          address={site.contact.address}
          hours={site.contact.hours}
          phone={site.contact.phone}
          email={site.contact.email}
          ctas={contact.ctas}
        />
      </main>
    </SiteFrame>
  );
}
