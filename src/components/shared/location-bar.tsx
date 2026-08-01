import { LocationLink } from "@/components/shared/location-link";
import type { Locale } from "@/i18n/config";

interface LocationBarProps {
  label: string;
  locale: Locale;
}

export function LocationBar({ label, locale }: LocationBarProps) {
  return (
    <div className="border-navy/20 border-b bg-navy-soft">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-1.5 text-[13px] text-white sm:justify-start sm:px-6 sm:text-sm">
        <LocationPinIcon />
        <span className="font-medium text-white/70">{label}</span>
        <span aria-hidden className="text-gold/80">
          ·
        </span>
        <LocationLink className="text-white/95" locale={locale} />
      </div>
    </div>
  );
}

function LocationPinIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-3 shrink-0 text-gold sm:size-3.5"
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
