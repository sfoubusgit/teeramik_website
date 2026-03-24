import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { site } from "@/content/site";

type SiteFrameProps = {
  children: React.ReactNode;
  announcement?: { message: string; href?: string };
};

export function SiteFrame({ children, announcement }: SiteFrameProps) {
  return (
    <div>
      {announcement ? (
        <AnnouncementBar message={announcement.message} href={announcement.href} />
      ) : null}
      <SiteHeader
        items={site.nav}
        phone={site.contact.phone}
        cta={{ label: "Jetzt anfragen", href: "/beratung-bestellung" }}
      />
      {children}
      <SiteFooter items={site.nav} contact={site.contact} />
    </div>
  );
}
