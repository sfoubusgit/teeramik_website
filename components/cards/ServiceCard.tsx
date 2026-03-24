import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  cta?: { label: string; href: string };
  className?: string;
};

export function ServiceCard({ title, description, cta, className }: ServiceCardProps) {
  return (
    <Card className={cn("flex h-full flex-col justify-between", className)}>
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-ink">{title}</h3>
        <p className="text-sm text-ink/70">{description}</p>
      </div>
      {cta ? (
        <div className="mt-4">
          <Button href={cta.href} variant="secondary" size="sm">
            {cta.label}
          </Button>
        </div>
      ) : null}
    </Card>
  );
}
