import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "narrow" | "default" | "wide";
};

export function SectionContainer({
  children,
  className,
  size = "default",
}: SectionContainerProps) {
  return (
    <section className={cn("py-16 sm:py-24 lg:py-28", className)}>
      <Container size={size}>{children}</Container>
    </section>
  );
}
