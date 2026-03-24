import { SiteFrame } from "@/components/layout/SiteFrame";
import { PageHero } from "@/components/sections/PageHero";
import { ContactBlock } from "@/components/sections/ContactBlock";
import { TextImageSection } from "@/components/sections/TextImageSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { site } from "@/content/site";
import { pageMeta, hero, info, location, visit, faq } from "@/content/contact";

export const metadata = pageMeta;

export default function KontaktPage() {
  return (
    <SiteFrame>
      <main id="content">
        <PageHero title={hero.title} description={hero.description} />
        <ContactBlock
          title={info.title}
          description={info.description}
          address={site.contact.address}
          hours={site.contact.hours}
          phone={site.contact.phone}
          email={site.contact.email}
          ctas={info.ctas}
        />
        <TextImageSection title={location.title} description={location.description} />
        <section id="kontakt">
          <ContactFormSection title="Schreiben Sie uns" />
        </section>
        <TextImageSection title={visit.title} description={visit.description} cta={visit.cta} imagePosition="right" />
        <FAQSection title={faq.title} items={faq.items} />
      </main>
    </SiteFrame>
  );
}

