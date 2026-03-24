import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/forms/FormField";

type ContactFormSectionProps = {
  title: string;
  description?: string;
};

export function ContactFormSection({ title, description }: ContactFormSectionProps) {
  return (
    <SectionContainer>
      <SectionHeading title={title} description={description} />
      <form className="mt-8 grid gap-5 rounded-xl border border-haze/60 bg-sand/40 p-6">
        <div className="grid gap-5 md:grid-cols-2">
          <FormField label="Name" name="name" required />
          <FormField label="E-Mail oder Telefon" name="contact" required />
        </div>
        <FormField label="Nachricht" name="message" as="textarea" required />
        <div>
          <Button type="submit">Nachricht senden</Button>
        </div>
      </form>
    </SectionContainer>
  );
}
