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
    <nav aria-label="Language" className="flex items-center gap-1">
      {locales.map((item) => (
        <Link
          className={cn(
            "inline-flex min-h-9 min-w-9 items-center justify-center rounded-md px-2 font-medium text-xs transition-colors sm:min-h-11 sm:min-w-11 sm:text-sm",
            item === locale
              ? "bg-navy text-white"
              : "text-navy/70 hover:bg-navy/10 hover:text-navy"
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
