import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const brandLogoSrc = siteConfig.logoSrc;

interface BrandLogoProps {
  className?: string;
  href?: string;
  label: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg" | "hero";
}

const sizeClasses = {
  hero: "aspect-[4/3] w-full",
  lg: "h-[4.5rem] w-[6rem] sm:h-20 sm:w-[6.75rem]",
  md: "h-12 w-16 sm:h-14 sm:w-[4.75rem]",
  sm: "h-10 w-[3.35rem] sm:h-11 sm:w-[3.75rem]",
} as const;

const sizePixels = {
  hero: "(max-width: 1024px) 100vw, 480px",
  lg: "(max-width: 640px) 96px, 108px",
  md: "(max-width: 640px) 64px, 76px",
  sm: "(max-width: 640px) 54px, 60px",
} as const;

export function BrandLogo({
  className,
  href,
  label,
  priority = false,
  size = "md",
}: BrandLogoProps) {
  const frameClassName = cn(
    "relative inline-flex shrink-0 overflow-hidden rounded-lg ring-1 ring-navy/10",
    sizeClasses[size],
    className
  );

  const image = (
    <Image
      alt={label}
      className="object-cover object-center"
      fill
      priority={priority}
      sizes={sizePixels[size]}
      src={brandLogoSrc}
    />
  );

  if (!href) {
    return <div className={frameClassName}>{image}</div>;
  }

  return (
    <Link
      aria-label={label}
      className={cn(frameClassName, "transition-opacity hover:opacity-90")}
      href={href}
      prefetch
    >
      {image}
    </Link>
  );
}
