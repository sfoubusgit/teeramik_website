import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionContainer } from "@/components/layout/SectionContainer";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  title: string;
  description?: string;
  items: FAQItem[];
};

export function FAQSection({ title, description, items }: FAQSectionProps) {
  return (
    <SectionContainer>
      <SectionHeading title={title} description={description} />
      <div className="mt-8 grid gap-4">
        {items.map((item, index) => (
          <details
            key={`${item.question}-${index}`}
            className="rounded-lg border border-haze/70 bg-cream px-5 py-4"
          >
            <summary className="cursor-pointer text-sm font-semibold text-ink">
              {item.question}
            </summary>
            <p className="mt-2 text-sm text-ink/70">{item.answer}</p>
          </details>
        ))}
      </div>
    </SectionContainer>
  );
}
