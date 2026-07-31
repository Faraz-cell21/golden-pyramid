import Link from "next/link";

import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { LocationBar } from "@/components/shared/location-bar";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localizedPath } from "@/lib/utils";

interface HeaderProps {
  dictionary: Pick<Dictionary, "navigation" | "ui">;
  locale: Locale;
}

export function Header({ dictionary, locale }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="border-navy/10 border-b">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:gap-4 sm:px-6">
          <Link
            className="min-w-0 truncate font-semibold text-base text-navy tracking-tight sm:text-lg"
            href={localizedPath(locale)}
            prefetch
          >
            {dictionary.navigation.brand}
          </Link>

          <MainNav locale={locale} navigation={dictionary.navigation} />

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <LanguageSwitcher locale={locale} />
            <div className="hidden lg:block">
              <WhatsappButton label={dictionary.ui.contactWhatsapp} />
            </div>
            <MobileNav
              closeLabel={dictionary.ui.close}
              locale={locale}
              menuLabel={dictionary.ui.menu}
              navigation={dictionary.navigation}
              whatsappLabel={dictionary.ui.contactWhatsapp}
            />
          </div>
        </div>
      </div>
      <LocationBar label={dictionary.ui.locationLabel} locale={locale} />
    </header>
  );
}
