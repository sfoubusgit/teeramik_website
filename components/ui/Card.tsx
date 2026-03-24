import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-haze/70 bg-sand/40 p-6 shadow-card transition-shadow hover:shadow-soft",
        className
      )}
    >
      {children}
    </div>
  );
}
