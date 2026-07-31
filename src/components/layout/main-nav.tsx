"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainNav } from "@/config/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn, localizedPath } from "@/lib/utils";

interface MainNavProps {
  locale: Locale;
  navigation: Dictionary["navigation"];
}

export function MainNav({ locale, navigation }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="hidden items-center justify-center gap-1 lg:flex"
    >
      {mainNav.map((item) => {
        const href = localizedPath(locale, item.href);
        const active =
          item.href === "/"
            ? pathname === href
            : pathname === href || pathname.startsWith(`${href}/`);

        return (
          <Link
            aria-current={active ? "page" : undefined}
            className={cn(
              "relative inline-flex min-h-11 items-center px-3.5 font-medium text-sm transition-colors",
              active ? "text-navy" : "text-navy/65 hover:text-navy"
            )}
            href={href}
            key={item.href}
            prefetch
          >
            {navigation[item.labelKey as keyof typeof navigation]}
            <span
              aria-hidden
              className={cn(
                "absolute inset-x-3.5 bottom-2 h-0.5 rounded-full bg-gold transition-opacity",
                active ? "opacity-100" : "opacity-0"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
