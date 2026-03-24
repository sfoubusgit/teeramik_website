import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/forms/FormField";

type ConsultationFormSectionProps = {
  title: string;
  description?: string;
};

export function ConsultationFormSection({
  title,
  description,
}: ConsultationFormSectionProps) {
  return (
    <SectionContainer>
      <SectionHeading title={title} description={description} />
      <form className="mt-8 grid gap-5 rounded-xl border border-haze/60 bg-sand/40 p-6">
        <div className="grid gap-5 md:grid-cols-2">
          <FormField label="Name" name="name" required />
          <FormField label="E-Mail oder Telefon" name="contact" required />
        </div>
        <FormField label="Wofuer suchen Sie etwas?" name="purpose" required />
        <div className="grid gap-5 md:grid-cols-2">
          <FormField label="Anlass" name="occasion" />
          <FormField label="Budget" name="budget" />
        </div>
        <FormField label="Bis wann benoetigen Sie es?" name="deadline" />
        <FormField label="Nachricht" name="message" as="textarea" />
        <div>
          <Button type="submit">Beratung anfragen</Button>
        </div>
      </form>
    </SectionContainer>
  );
}
