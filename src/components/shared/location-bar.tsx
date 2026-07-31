import { getContactLocation } from "@/config/contact";
import type { Locale } from "@/i18n/config";

interface LocationBarProps {
  label: string;
  locale: Locale;
}

export function LocationBar({ label, locale }: LocationBarProps) {
  const location = getContactLocation(locale);

  return (
    <div className="border-navy/10 border-b bg-navy text-white">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-2 text-xs sm:px-6 sm:text-sm">
        <LocationPinIcon />
        <span className="font-medium text-white/80">{label}:</span>
        <span className="text-white/95">{location}</span>
      </div>
    </div>
  );
}

function LocationPinIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-3.5 shrink-0 text-gold sm:size-4"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
