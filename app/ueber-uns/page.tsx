import { SiteFrame } from "@/components/layout/SiteFrame";
import { PageHero } from "@/components/sections/PageHero";
import { TextImageSection } from "@/components/sections/TextImageSection";
import { WhyTeeramikSection } from "@/components/sections/WhyTeeramikSection";
import { ServiceOptionsSection } from "@/components/sections/ServiceOptionsSection";
import {
  pageMeta,
  hero,
  story,
  philosophy,
  atmosphere,
  selection,
  cta,
} from "@/content/about";

export const metadata = pageMeta;

export default function UeberUnsPage() {
  return (
    <SiteFrame>
      <main id="content">
        <PageHero title={hero.title} description={hero.description} />
        <TextImageSection title={story.title} description={story.description} />
        <WhyTeeramikSection title={philosophy.title} items={philosophy.items} />
        <TextImageSection title={atmosphere.title} description={atmosphere.description} cta={atmosphere.cta} imagePosition="right" />
        <TextImageSection title={selection.title} description={selection.description} />
        <ServiceOptionsSection title={cta.title} items={cta.items} />
      </main>
    </SiteFrame>
  );
}

