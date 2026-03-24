import { cn } from "@/lib/utils";

type ContainerSize = "narrow" | "default" | "wide";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: ContainerSize;
  as?: keyof JSX.IntrinsicElements;
};

const sizeStyles: Record<ContainerSize, string> = {
  narrow: "max-w-[860px]",
  default: "max-w-[1200px]",
  wide: "max-w-[1320px]",
};

export function Container({
  children,
  className,
  size = "default",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={cn("mx-auto w-full px-6 sm:px-8", sizeStyles[size], className)}>
      {children}
    </Component>
  );
}
