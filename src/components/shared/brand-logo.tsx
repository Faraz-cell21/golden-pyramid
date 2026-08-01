import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  href?: string;
  label?: string;
  size?: "sm" | "md" | "lg" | "hero";
}

const sizeClasses = {
  hero: "max-w-lg gap-1 text-center",
  lg: "max-w-[14rem] gap-0.5 text-start",
  md: "max-w-[11rem] gap-0.5 text-start",
  sm: "max-w-[9rem] gap-0 text-start",
} as const;

const arabicPrimaryClasses = {
  hero: "text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl",
  lg: "text-xl sm:text-2xl",
  md: "text-lg",
  sm: "text-base",
} as const;

const arabicSecondaryClasses = {
  hero: "text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl",
  lg: "text-base sm:text-lg",
  md: "text-sm",
  sm: "text-xs",
} as const;

const englishClasses = {
  hero: "mt-4 text-[0.7rem] sm:text-xs md:text-sm lg:text-base",
  lg: "mt-1.5 text-[0.55rem] tracking-[0.08em] sm:text-[0.65rem]",
  md: "mt-1 text-[0.5rem] tracking-[0.06em]",
  sm: "mt-0.5 text-[0.45rem] tracking-[0.05em]",
} as const;

export function BrandLogo({
  className,
  href,
  label = siteConfig.nameFull,
  size = "md",
}: BrandLogoProps) {
  const mark = (
    <span
      className={cn(
        "inline-flex flex-col font-brand font-extrabold text-gold leading-tight tracking-tight",
        sizeClasses[size],
        className
      )}
      dir="rtl"
      lang="ar"
    >
      <span className={arabicPrimaryClasses[size]}>
        {siteConfig.brandMark.arabicPrimary}
      </span>
      <span className={arabicSecondaryClasses[size]}>
        {siteConfig.brandMark.arabicSecondary}
      </span>
      <span
        className={cn(
          "font-bold uppercase tracking-[0.12em]",
          englishClasses[size]
        )}
        dir="ltr"
        lang="en"
      >
        {siteConfig.brandMark.english}
      </span>
    </span>
  );

  if (!href) {
    return mark;
  }

  return (
    <Link
      aria-label={label}
      className="inline-flex transition-opacity hover:opacity-90"
      href={href}
      prefetch
    >
      {mark}
    </Link>
  );
}

/** Short Arabic website name — always Arabic script + Arabic font. */
export function BrandName({ className }: { className?: string }) {
  return (
    <span className={cn("font-brand", className)} dir="rtl" lang="ar">
      {siteConfig.name}
    </span>
  );
}
