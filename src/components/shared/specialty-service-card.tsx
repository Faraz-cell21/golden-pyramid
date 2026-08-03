import Image from "next/image";
import Link from "next/link";

import { specialtyServicePath } from "@/config/routes";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/utils";
import type { SpecialtyServiceCard as SpecialtyServiceCardContent } from "@/types/content";

interface SpecialtyServiceCardProps {
  card: SpecialtyServiceCardContent;
  locale: Locale;
}

export function SpecialtyServiceCard({
  card,
  locale,
}: SpecialtyServiceCardProps) {
  const href = localizedPath(locale, specialtyServicePath(card.slug));

  return (
    <Link
      className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold/55 bg-navy text-white shadow-[0_10px_28px_rgba(255,255,255,0.06),0_8px_20px_rgba(212,175,55,0.14)]"
      href={href}
      prefetch
    >
      <div className="relative aspect-[16/11] overflow-hidden sm:aspect-[16/10]">
        <Image
          alt={card.imageAlt}
          className="object-cover object-center"
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, 33vw"
          src={card.image}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/10"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.28),transparent_45%)] opacity-80"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-end p-4 sm:p-5">
          <span
            aria-hidden
            className="inline-flex size-9 items-center justify-center rounded-full border border-gold/60 bg-gold text-navy"
          >
            <ArrowIcon />
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <h3 className="max-w-[18ch] font-bold text-xl leading-snug tracking-tight sm:text-2xl">
            {card.title}
          </h3>
          <div className="mt-3 h-0.5 w-12 rounded-full bg-gold" />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pt-5 pb-6 sm:px-6 sm:pt-6 sm:pb-7">
        <p className="flex-1 text-sm text-white/80 leading-relaxed sm:text-[0.95rem]">
          {card.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 font-semibold text-gold text-sm">
          {card.ctaLabel}
          <span aria-hidden className="inline-flex">
            <ArrowIcon />
          </span>
        </span>
      </div>
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
