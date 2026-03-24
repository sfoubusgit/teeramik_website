import Image from "next/image";
import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  alt: string;
  className?: string;
};

export function PlaceholderImage({ alt, className }: PlaceholderImageProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <Image
        src="/images/placeholder.svg"
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority={false}
      />
    </div>
  );
}
