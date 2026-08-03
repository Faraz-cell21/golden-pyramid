import type { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface BrandSectionBackdropProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export function BrandSectionBackdrop({
  children,
  className,
  contentClassName,
}: BrandSectionBackdropProps) {
  return (
    <section
      className={cn("relative isolate overflow-hidden bg-[#071526]", className)}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(22,50,90,0.95),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(11,31,58,1),transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(197,163,90,0.28),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(228,208,160,0.2),transparent_36%),radial-gradient(circle_at_50%_50%,rgba(197,163,90,0.12),transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(160deg,rgba(197,163,90,0.08)_0%,transparent_35%,transparent_65%,rgba(197,163,90,0.1)_100%)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <div className="flex w-[160%] max-w-none -rotate-3 scale-110 flex-col items-center justify-center sm:w-[135%] sm:scale-100 md:-rotate-2">
          <span
            className="font-brand font-extrabold text-[clamp(4.5rem,18vw,14rem)] text-gold leading-[0.88] tracking-tight drop-shadow-[0_0_40px_rgba(197,163,90,0.35)]"
            dir="rtl"
            lang="ar"
            style={{ opacity: 0.42 }}
          >
            {siteConfig.brandMark.arabicPrimary}
          </span>
          <span
            className="mt-2 font-brand font-extrabold text-[clamp(2.75rem,11vw,8.5rem)] text-gold-soft leading-[0.88] tracking-tight drop-shadow-[0_0_28px_rgba(228,208,160,0.3)] sm:mt-3"
            dir="rtl"
            lang="ar"
            style={{ opacity: 0.38 }}
          >
            {siteConfig.brandMark.arabicSecondary}
          </span>
          <span
            className="mt-5 max-w-[92%] text-center font-bold text-[clamp(0.8rem,2.8vw,1.75rem)] text-gold uppercase tracking-[0.28em] drop-shadow-[0_0_18px_rgba(197,163,90,0.4)] sm:mt-8 sm:tracking-[0.36em]"
            dir="ltr"
            lang="en"
            style={{ opacity: 0.48 }}
          >
            {siteConfig.brandMark.english}
          </span>
        </div>
      </div>

      {/* Soft veil so cards stay readable while text stays vivid at edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,21,38,0.35)_0%,rgba(7,21,38,0.12)_45%,transparent_72%)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />

      <div
        className={cn(
          "relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
          contentClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
