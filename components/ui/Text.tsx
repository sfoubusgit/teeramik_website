import { cn } from "@/lib/utils";

type TextTone = "default" | "muted";
type TextSize = "body" | "lead" | "small";

type TextProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  size?: TextSize;
  tone?: TextTone;
  className?: string;
};

const sizeStyles: Record<TextSize, string> = {
  body: "text-base",
  lead: "text-lg",
  small: "text-sm",
};

const toneStyles: Record<TextTone, string> = {
  default: "text-ink",
  muted: "text-ink/70",
};

export function Text({
  children,
  as: Component = "p",
  size = "body",
  tone = "default",
  className,
}: TextProps) {
  return (
    <Component className={cn(sizeStyles[size], toneStyles[tone], className)}>
      {children}
    </Component>
  );
}
