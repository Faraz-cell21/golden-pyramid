import Link from "next/link";

import { AccentLine } from "@/components/shared/accent-line";
import { SocialLinks } from "@/components/shared/social-links";
import { getContactLocation } from "@/config/contact";
import { footerNav } from "@/config/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localizedPath } from "@/lib/utils";

interface FooterProps {
  dictionary: Pick<Dictionary, "home" | "navigation" | "ui">;
  locale: Locale;
}

export function Footer({ dictionary, locale }: FooterProps) {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <div className="max-w-md">
            <p className="font-bold text-lg tracking-tight sm:text-xl">
              {dictionary.navigation.brand}
            </p>
            <AccentLine className="mt-3" />
            <p className="mt-3 text-sm text-white/65 leading-relaxed">
              {dictionary.home.description}
            </p>
            <p className="mt-3 flex items-start gap-2 text-sm text-white/80">
              <LocationPinIcon />
              <span>
                <span className="font-medium text-white/70">
                  {dictionary.ui.locationLabel}:{" "}
                </span>
                {getContactLocation(locale)}
              </span>
            </p>
          </div>

          <div>
            <p className="mb-3 font-medium text-sm text-white/70">
              {dictionary.ui.socialLabel}
            </p>
            <SocialLinks labels={dictionary.ui.social} />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-white/10 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  className="inline-flex min-h-10 items-center text-sm text-white/65 transition-colors hover:text-gold"
                  href={localizedPath(locale, item.href)}
                  prefetch
                >
                  {
                    dictionary.navigation[
                      item.labelKey as keyof typeof dictionary.navigation
                    ]
                  }
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-white/45 text-xs">
            © {new Date().getFullYear()} {dictionary.navigation.brand}.{" "}
            {dictionary.ui.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}

function LocationPinIcon() {
  return (
    <svg
      aria-hidden="true"
      className="mt-0.5 size-4 shrink-0 text-gold"
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
