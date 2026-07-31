import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { LanguagePrompt } from "@/components/shared/language-prompt";
import { StickyContact } from "@/components/shared/sticky-contact";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface SiteShellProps {
  children: ReactNode;
  dictionary: Pick<Dictionary, "home" | "navigation" | "ui">;
  locale: Locale;
}

export function SiteShell({ children, dictionary, locale }: SiteShellProps) {
  return (
    <div className="flex min-h-dvh flex-col bg-white text-navy">
      <Header
        dictionary={{ navigation: dictionary.navigation, ui: dictionary.ui }}
        locale={locale}
      />
      <main className="flex-1">{children}</main>
      <Footer dictionary={dictionary} locale={locale} />
      <StickyContact
        ui={{
          callNow: dictionary.ui.callNow,
          messageWhatsapp: dictionary.ui.messageWhatsapp,
        }}
      />
      <LanguagePrompt
        confirmLabel={dictionary.ui.languagePromptConfirm}
        description={dictionary.ui.languagePromptBody}
        dismissLabel={dictionary.ui.languagePromptDismiss}
        locale={locale}
        title={dictionary.ui.languagePromptTitle}
      />
    </div>
  );
}
