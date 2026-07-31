"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { type Locale, localeNames, locales } from "@/i18n/config";
import { cn, localizedPath } from "@/lib/utils";

const LOCALE_PREFIX_PATTERN = /^\/(en|ar)/;

interface LanguageSwitcherProps {
  locale: Locale;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const pathWithoutLocale = pathname.replace(LOCALE_PREFIX_PATTERN, "") || "/";

  return (
    <nav
      aria-label="Language"
      className="inline-flex items-center rounded-full border border-navy/15 bg-navy/[0.03] p-0.5"
    >
      {locales.map((item) => (
        <Link
          className={cn(
            "inline-flex min-h-8 min-w-8 items-center justify-center rounded-full px-2.5 font-medium text-xs transition-colors sm:min-h-9 sm:px-3 sm:text-sm",
            item === locale
              ? "bg-navy text-white shadow-sm"
              : "text-navy/60 hover:text-navy"
          )}
          href={localizedPath(item, pathWithoutLocale)}
          hrefLang={item}
          key={item}
          prefetch
        >
          <span className="sm:hidden">{item.toUpperCase()}</span>
          <span className="hidden sm:inline">{localeNames[item]}</span>
        </Link>
      ))}
    </nav>
  );
}
