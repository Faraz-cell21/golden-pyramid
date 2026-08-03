"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { CarBrandCardLink } from "@/components/shared/car-brand-card";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import type { CarBrandCard } from "@/types/content";

interface CarBrandsCarouselProps {
  cards: CarBrandCard[];
  compact?: boolean;
  locale: Locale;
}

export function CarBrandsCarousel({
  cards,
  compact = true,
  locale,
}: CarBrandsCarouselProps) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const slideRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const getClosestIndex = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return 0;
    }

    const scrollerRect = scroller.getBoundingClientRect();
    const scrollerCenter = scrollerRect.left + scrollerRect.width / 2;
    let closest = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    for (const [index, slide] of slideRefs.current.entries()) {
      if (!slide) {
        continue;
      }

      const slideRect = slide.getBoundingClientRect();
      const slideCenter = slideRect.left + slideRect.width / 2;
      const distance = Math.abs(slideCenter - scrollerCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    }

    return closest;
  }, []);

  const syncActiveIndex = useCallback(() => {
    setActiveIndex(getClosestIndex());
  }, [getClosestIndex]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    syncActiveIndex();
    scroller.addEventListener("scroll", syncActiveIndex, { passive: true });
    window.addEventListener("resize", syncActiveIndex);

    return () => {
      scroller.removeEventListener("scroll", syncActiveIndex);
      window.removeEventListener("resize", syncActiveIndex);
    };
  }, [syncActiveIndex]);

  function scrollToIndex(index: number) {
    const scroller = scrollerRef.current;
    const slide = slideRefs.current[index];
    if (!(scroller && slide)) {
      return;
    }

    const scrollerRect = scroller.getBoundingClientRect();
    const slideRect = slide.getBoundingClientRect();
    const delta =
      slideRect.left +
      slideRect.width / 2 -
      (scrollerRect.left + scrollerRect.width / 2);

    scroller.scrollBy({
      behavior: "smooth",
      left: delta,
    });
    setActiveIndex(index);
  }

  function go(delta: number) {
    const next = Math.min(Math.max(activeIndex + delta, 0), cards.length - 1);
    if (next === activeIndex) {
      return;
    }
    scrollToIndex(next);
  }

  return (
    <div className="relative">
      <ul
        aria-label="Car brands"
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
        ref={scrollerRef}
      >
        {cards.map((card, index) => (
          <li
            className="w-[78%] shrink-0 snap-center sm:w-[46%] lg:w-[31%]"
            key={card.slug}
            ref={(node) => {
              slideRefs.current[index] = node;
            }}
          >
            <CarBrandCardLink
              card={card}
              className="h-full"
              compact={compact}
              locale={locale}
            />
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          aria-label="Previous brand"
          className="inline-flex size-10 items-center justify-center rounded-full border border-gold/50 bg-navy/60 text-gold disabled:opacity-35"
          disabled={activeIndex === 0}
          onClick={() => go(-1)}
          type="button"
        >
          <ChevronIcon className="rtl:rotate-180" />
        </button>

        <div className="flex items-center gap-1.5">
          {cards.map((card, index) => (
            <button
              aria-current={index === activeIndex ? "true" : undefined}
              aria-label={card.name}
              className={cn(
                "h-2 rounded-full transition-[width,background-color]",
                index === activeIndex ? "w-6 bg-gold" : "w-2 bg-white/30"
              )}
              key={card.slug}
              onClick={() => scrollToIndex(index)}
              type="button"
            />
          ))}
        </div>

        <button
          aria-label="Next brand"
          className="inline-flex size-10 items-center justify-center rounded-full border border-gold/50 bg-navy/60 text-gold disabled:opacity-35"
          disabled={activeIndex >= cards.length - 1}
          onClick={() => go(1)}
          type="button"
        >
          <ChevronIcon className="rotate-180 rtl:rotate-0" />
        </button>
      </div>
    </div>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("size-4", className)}
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.25"
      viewBox="0 0 24 24"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
