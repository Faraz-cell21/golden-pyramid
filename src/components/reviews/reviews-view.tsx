"use client";

import { useState } from "react";
import type { ReviewsContent } from "@/types/content";

const STAR_KEYS = ["one", "two", "three", "four", "five"] as const;
const PAGE_SIZE = 6;

interface ReviewsViewProps {
  content: ReviewsContent;
  loadMoreLabel: string;
}

export function ReviewsView({ content, loadMoreLabel }: ReviewsViewProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleReviews = content.items.slice(0, visibleCount);
  const hasMore = visibleCount < content.items.length;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibleReviews.map((review) => (
            <li
              className="flex flex-col rounded-xl border border-navy/10 bg-navy/[0.02] p-5 sm:p-6"
              key={`${review.name}-${review.location}-${review.body.slice(0, 20)}`}
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

        {hasMore ? (
          <div className="mt-8 flex justify-center">
            <button
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-navy bg-navy px-5 font-semibold text-sm text-white transition-colors hover:bg-navy-soft"
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(count + PAGE_SIZE, content.items.length)
                )
              }
              type="button"
            >
              {loadMoreLabel}
            </button>
          </div>
        ) : null}
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
