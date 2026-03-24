import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type TrustCardProps = {
  title: string;
  description: string;
  className?: string;
};

export function TrustCard({ title, description, className }: TrustCardProps) {
  return (
    <Card className={cn("bg-cream", className)}>
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-ink">{title}</h3>
        <p className="text-sm text-ink/70">{description}</p>
      </div>
    </Card>
  );
}
