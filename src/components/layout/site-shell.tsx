import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { LanguagePrompt } from "@/components/shared/language-prompt";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface SiteShellProps {
  children: ReactNode;
  dictionary: Dictionary;
  locale: Locale;
}

export function SiteShell({ children, dictionary, locale }: SiteShellProps) {
  return (
    <div className="flex min-h-dvh flex-col bg-white text-navy">
      <Header dictionary={dictionary} locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer dictionary={dictionary} locale={locale} />
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
