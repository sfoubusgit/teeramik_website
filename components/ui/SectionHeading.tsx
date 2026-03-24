import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "left",
  as: Component = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.2em] text-olive/70">
          {eyebrow}
        </p>
      ) : null}
      <Component className="text-balance max-w-2xl">{title}</Component>
      {description ? (
        <p className="text-base text-ink/80 sm:text-lg max-w-2xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
