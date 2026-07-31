"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { mainNav } from "@/config/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localizedPath } from "@/lib/utils";

interface MobileNavProps {
  closeLabel: string;
  locale: Locale;
  menuLabel: string;
  navigation: Dictionary["navigation"];
  whatsappLabel: string;
}

export function MobileNav({
  closeLabel,
  locale,
  menuLabel,
  navigation,
  whatsappLabel,
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

  const buttonLabel = open ? closeLabel : menuLabel;

  return (
    <div className="lg:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={open}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-navy/20 px-3 font-medium text-navy text-sm"
        onClick={toggleMenu}
        type="button"
      >
        {buttonLabel}
      </button>

      {open ? (
        <div className="fixed inset-0 top-[var(--header-height,3.5rem)] z-40">
          <button
            aria-label={closeLabel}
            className="absolute inset-0 bg-navy/40"
            onClick={closeMenu}
            type="button"
          />
          <nav
            aria-label="Mobile"
            className="absolute inset-x-0 top-0 max-h-[calc(100dvh-var(--header-height,3.5rem))] overflow-y-auto border-navy/10 border-b bg-white px-4 py-4 shadow-lg"
            id="mobile-navigation"
          >
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    className="flex min-h-12 items-center rounded-md px-3 font-medium text-base text-navy hover:bg-navy/5"
                    href={localizedPath(locale, item.href)}
                    onClick={closeMenu}
                    prefetch
                  >
                    {navigation[item.labelKey as keyof typeof navigation]}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-navy/10 border-t pt-4">
              <WhatsappButton fullWidth label={whatsappLabel} />
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
