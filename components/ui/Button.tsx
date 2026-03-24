import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-olive text-cream hover:bg-ink focus-visible:outline-olive",
  secondary:
    "border border-olive/30 text-olive hover:bg-sand focus-visible:outline-olive",
  ghost: "text-olive hover:bg-sand focus-visible:outline-olive",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 min-h-[44px] px-5",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
