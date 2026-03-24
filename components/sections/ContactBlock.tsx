import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

type ContactBlockProps = {
  title: string;
  description?: string;
  address?: string;
  hours?: string;
  phone?: string;
  email?: string;
  ctas?: Array<{ label: string; href: string }>;
};

export function ContactBlock({
  title,
  description,
  address,
  hours,
  phone,
  email,
  ctas,
}: ContactBlockProps) {
  return (
    <SectionContainer>
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <SectionHeading title={title} description={description} />
          <div className="space-y-2 text-sm text-ink/70">
            {address ? <p>{address}</p> : null}
            {hours ? <p>{hours}</p> : null}
            {phone ? <a href={`tel:${phone}`}>{phone}</a> : null}
            {email ? <a href={`mailto:${email}`}>{email}</a> : null}
          </div>
          {ctas ? (
            <div className="flex flex-wrap gap-3">
              {ctas.map((cta) => (
                <Button key={cta.href} href={cta.href} variant="secondary">
                  {cta.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
        <PlaceholderImage alt="Standort TeeRamik" className="h-64" />
      </div>
    </SectionContainer>
  );
}
