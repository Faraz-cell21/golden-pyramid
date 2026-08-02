"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { routes } from "@/config/routes";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/utils";
import type { HomeContent, ReviewItem } from "@/types/content";

const STAR_KEYS = ["one", "two", "three", "four", "five"] as const;
const VISIBLE_COUNT = 3;
const ROTATE_MS = 2000;

interface HomeReviewsCarouselProps {
  content: HomeContent["reviewsShowcase"];
  locale: Locale;
  reviews: ReviewItem[];
}

export function HomeReviewsCarousel({
  content,
  locale,
  reviews,
}: HomeReviewsCarouselProps) {
  const [pageIndex, setPageIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const pageCount = Math.max(1, Math.ceil(reviews.length / VISIBLE_COUNT));

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion || pageCount < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setPageIndex((current) => (current + 1) % pageCount);
    }, ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [pageCount, reduceMotion]);

  if (reviews.length === 0) {
    return null;
  }

  const start = pageIndex * VISIBLE_COUNT;
  const visibleReviews = reviews.slice(start, start + VISIBLE_COUNT);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="mb-6 text-center sm:mb-8">
          <h2 className="font-semibold text-navy text-xl sm:text-2xl md:text-3xl">
            {content.title}
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gold" />
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {visibleReviews.map((review) => (
            <li
              className="flex min-h-[14rem] flex-col rounded-xl border border-navy/10 bg-navy/[0.02] p-5 sm:p-6"
              key={`${review.name}-${review.location}-${review.body.slice(0, 20)}-${pageIndex}`}
            >
              <p className="flex gap-1 text-gold" role="img">
                <span className="sr-only">{`${review.rating} out of 5`}</span>
                {STAR_KEYS.map((starKey, star) => (
                  <span
                    aria-hidden="true"
                    className={
                      star < review.rating ? "text-gold" : "text-navy/20"
                    }
                    key={`${review.name}-${starKey}`}
                  >
                    ★
                  </span>
                ))}
              </p>
              <p className="mt-3 flex-1 text-navy/80 text-sm leading-relaxed sm:text-base">
                "{review.body}"
              </p>
              <div className="mt-4 flex items-center gap-2">
                <UaeFlag />
                <div className="min-w-0">
                  <p className="font-semibold text-navy text-sm">
                    {review.name}
                  </p>
                  <p className="text-navy/55 text-xs">{review.location}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-navy bg-navy px-5 font-semibold text-sm text-white transition-colors hover:bg-navy-soft"
            href={localizedPath(locale, routes.reviews)}
            prefetch
          >
            {content.viewAllLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

function UaeFlag() {
  return (
    <svg
      aria-hidden="true"
      className="size-6 shrink-0 overflow-hidden rounded-sm shadow-sm"
      focusable="false"
      viewBox="0 0 12 8"
    >
      <title>United Arab Emirates</title>
      <rect fill="#00732F" height="8" width="12" />
      <rect fill="#FFFFFF" height="2.67" width="12" y="2.67" />
      <rect fill="#000000" height="2.66" width="12" y="5.34" />
      <rect fill="#FF0000" height="8" width="3" />
    </svg>
  );
}
