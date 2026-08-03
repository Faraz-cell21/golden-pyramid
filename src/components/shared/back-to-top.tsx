"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface BackToTopProps {
  label: string;
}

const SHOW_AFTER_PX = 480;

export function BackToTop({ label }: BackToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label={label}
      className={cn(
        "fixed end-3 bottom-5 z-40 inline-flex size-12 items-center justify-center rounded-full bg-navy text-gold shadow-lg ring-2 ring-gold/70 transition-all hover:scale-105 hover:bg-navy-soft sm:end-4 sm:bottom-6",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      )}
      onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
      type="button"
    >
      <ArrowUpIcon />
    </button>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.25"
      viewBox="0 0 24 24"
    >
      <path d="M12 19V5" />
      <path d="M5 12l7-7 7 7" />
    </svg>
  );
}
