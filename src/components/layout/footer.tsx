import Link from "next/link";

import { SocialLinks } from "@/components/shared/social-links";
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
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-semibold text-base tracking-tight sm:text-lg">
              {dictionary.navigation.brand}
            </p>
            <p className="mt-1.5 max-w-md text-sm text-white/65 leading-relaxed">
              {dictionary.home.description}
            </p>
          </div>

          <SocialLinks labels={dictionary.ui.social} />

          <div className="flex flex-col gap-3 border-white/10 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    className="inline-flex min-h-10 items-center text-sm text-white/65 transition-colors hover:text-white"
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
      </div>
    </footer>
  );
}
