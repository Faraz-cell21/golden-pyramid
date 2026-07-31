import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { BrandLogo } from "@/components/shared/brand-logo";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { LocationBar } from "@/components/shared/location-bar";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localizedPath } from "@/lib/utils";

interface HeaderProps {
  dictionary: Pick<Dictionary, "navigation" | "ui">;
  locale: Locale;
}

export function Header({ dictionary, locale }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-[0_1px_0_rgba(11,31,58,0.08)] backdrop-blur-sm [--header-height:5.25rem] sm:[--header-height:5.75rem]">
      <LocationBar label={dictionary.ui.locationLabel} locale={locale} />

      <div className="mx-auto grid h-14 max-w-6xl grid-cols-[1fr_auto] items-center gap-3 px-4 sm:h-16 sm:gap-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr]">
        <div className="justify-self-start">
          <BrandLogo
            href={localizedPath(locale)}
            label={dictionary.navigation.brand}
            priority
            size="md"
          />
        </div>

        <MainNav locale={locale} navigation={dictionary.navigation} />

        <div className="flex items-center justify-end gap-2 justify-self-end sm:gap-3">
          <LanguageSwitcher locale={locale} />
          <MobileNav
            closeLabel={dictionary.ui.close}
            locale={locale}
            menuLabel={dictionary.ui.menu}
            navigation={dictionary.navigation}
          />
        </div>
      </div>
    </header>
  );
}
