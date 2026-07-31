import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const brandLogoSrc = siteConfig.logoSrc;

interface BrandLogoProps {
  className?: string;
  href: string;
  label: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  lg: "size-16 sm:size-20",
  md: "size-11 sm:size-12",
  sm: "size-9 sm:size-10",
} as const;

const sizePixels = {
  lg: "80px",
  md: "48px",
  sm: "40px",
} as const;

export function BrandLogo({
  className,
  href,
  label,
  priority = false,
  size = "md",
}: BrandLogoProps) {
  return (
    <Link
      aria-label={label}
      className={cn(
        "relative inline-flex shrink-0 overflow-hidden rounded-md bg-black ring-1 ring-navy/10 transition-opacity hover:opacity-90",
        sizeClasses[size],
        className
      )}
      href={href}
      prefetch
    >
      <Image
        alt={label}
        className="object-cover"
        fill
        priority={priority}
        sizes={sizePixels[size]}
        src={brandLogoSrc}
      />
    </Link>
  );
}
