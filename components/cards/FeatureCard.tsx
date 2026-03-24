import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  href?: string;
  className?: string;
};

export function FeatureCard({ title, description, href, className }: FeatureCardProps) {
  const content = (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="text-sm text-ink/70">{description}</p>
    </div>
  );

  return (
    <Card className={cn("transition-shadow hover:shadow-soft", className)}>
      {href ? (
        <a href={href} className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </Card>
  );
}
