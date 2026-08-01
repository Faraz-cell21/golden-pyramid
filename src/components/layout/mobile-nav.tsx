"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { mainNav } from "@/config/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn, localizedPath } from "@/lib/utils";

interface MobileNavProps {
  closeLabel: string;
  locale: Locale;
  menuLabel: string;
  navigation: Dictionary["navigation"];
}

export function MobileNav({
  closeLabel,
  locale,
  menuLabel,
  navigation,
}: MobileNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  function toggleMenu() {
    setOpen((value) => !value);
  }

  const toggleLabel = open ? closeLabel : menuLabel;

  return (
    <div className="lg:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={toggleLabel}
        className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/25 px-3.5 font-semibold text-sm text-white uppercase tracking-wide transition-colors hover:border-gold/50 hover:bg-white/10 hover:text-gold"
        onClick={toggleMenu}
        type="button"
      >
        {toggleLabel}
      </button>

      {open ? (
        <div className="fixed inset-0 top-[var(--header-height,5.25rem)] z-40">
          <button
            aria-label={closeLabel}
            className="absolute inset-0 bg-navy/35"
            onClick={closeMenu}
            type="button"
          />
          <nav
            aria-label="Mobile"
            className="absolute inset-x-0 top-0 max-h-[calc(100dvh-var(--header-height,5.25rem))] overflow-y-auto border-navy/10 border-b bg-white px-4 py-3 shadow-lg"
            id="mobile-navigation"
          >
            <ul className="flex flex-col">
              {mainNav.map((item) => {
                const href = localizedPath(locale, item.href);
                const active =
                  item.href === "/"
                    ? pathname === href
                    : pathname === href || pathname.startsWith(`${href}/`);

                return (
                  <li key={item.href}>
                    <Link
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex min-h-12 items-center border-navy/5 border-b px-1 font-medium text-base last:border-b-0",
                        active ? "text-navy" : "text-navy/70"
                      )}
                      href={href}
                      onClick={closeMenu}
                      prefetch
                    >
                      <span
                        className={cn(
                          "me-3 h-4 w-0.5 rounded-full bg-gold transition-opacity",
                          active ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {navigation[item.labelKey as keyof typeof navigation]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
