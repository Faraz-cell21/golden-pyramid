import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { LocationBar } from "@/components/shared/location-bar";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface HeaderProps {
  dictionary: Pick<Dictionary, "navigation" | "ui">;
  locale: Locale;
}

export function Header({ dictionary, locale }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 shadow-[0_8px_24px_rgba(11,31,58,0.18)] [--header-height:5.25rem] sm:[--header-height:5.75rem]">
      <div className="border-gold/35 border-b bg-navy">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:gap-4 sm:px-6">
          <div className="flex min-w-0 items-center">
            <MainNav locale={locale} navigation={dictionary.navigation} />
            <MobileNav
              closeLabel={dictionary.ui.close}
              locale={locale}
              menuLabel={dictionary.ui.menu}
              navigation={dictionary.navigation}
            />
          </div>

          <LanguageSwitcher locale={locale} />
        </div>
      </div>

      <LocationBar label={dictionary.ui.locationLabel} locale={locale} />
    </header>
  );
}
