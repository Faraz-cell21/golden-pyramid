import Image from "next/image";
import Link from "next/link";

import { carBrandPath } from "@/config/routes";
import type { Locale } from "@/i18n/config";
import { cn, localizedPath } from "@/lib/utils";
import type { CarBrandCard } from "@/types/content";

interface CarBrandCardLinkProps {
  card: CarBrandCard;
  className?: string;
  compact?: boolean;
  locale: Locale;
}

export function CarBrandCardLink({
  card,
  className,
  compact = false,
  locale,
}: CarBrandCardLinkProps) {
  return (
    <Link
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold/30 bg-navy/55 text-white shadow-[0_22px_50px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur-[2px]",
        className
      )}
      href={localizedPath(locale, carBrandPath(card.slug))}
      prefetch
    >
      <div
        className={cn(
          "relative overflow-hidden",
          compact ? "aspect-[16/11]" : "aspect-[16/10]"
        )}
      >
        <Image
          alt={card.imageAlt}
          className="object-cover object-center"
          fill
          quality={85}
          sizes={
            compact
              ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          src={card.image}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <h3
            className={cn(
              "font-bold leading-snug tracking-tight",
              compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
            )}
          >
            {card.name}
          </h3>
          <div className="mt-2.5 h-0.5 w-12 rounded-full bg-gold" />
        </div>
      </div>

      {compact ? null : (
        <div className="flex flex-1 flex-col border-gold/15 border-t bg-navy/75 px-5 pt-4 pb-5 sm:px-6 sm:pt-5 sm:pb-6">
          <p className="flex-1 text-sm text-white/80 leading-relaxed">
            {card.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 font-semibold text-gold text-sm">
            {card.ctaLabel}
            <ArrowIcon />
          </span>
        </div>
      )}
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-3.5 rtl:rotate-180"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.25"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
