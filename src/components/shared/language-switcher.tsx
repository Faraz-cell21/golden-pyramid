"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { type Locale, localeNames, locales } from "@/i18n/config";
import { cn, localizedPath } from "@/lib/utils";

const LOCALE_PREFIX_PATTERN = /^\/(en|ar)/;

interface LanguageSwitcherProps {
  compact?: boolean;
  locale: Locale;
}

export function LanguageSwitcher({
  compact = false,
  locale,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const pathWithoutLocale = pathname.replace(LOCALE_PREFIX_PATTERN, "") || "/";

  return (
    <nav aria-label="Language" className="flex items-center gap-1">
      {locales.map((item) => (
        <Link
          className={cn(
            "inline-flex min-h-11 min-w-11 items-center justify-center rounded-md font-medium text-xs transition-colors sm:text-sm",
            compact && "min-h-9 min-w-9 px-2",
            item === locale
              ? "bg-navy text-white"
              : "text-navy/70 hover:bg-navy/10 hover:text-navy"
          )}
          href={localizedPath(item, pathWithoutLocale)}
          hrefLang={item}
          key={item}
        >
          {compact ? item.toUpperCase() : localeNames[item]}
        </Link>
      ))}
    </nav>
  );
}
