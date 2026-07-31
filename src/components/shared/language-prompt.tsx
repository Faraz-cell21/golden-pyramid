"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/utils";

const STORAGE_KEY = "gp-locale-prompt-seen";
const LOCALE_PREFIX_PATTERN = /^\/(en|ar)/;

interface LanguagePromptProps {
  confirmLabel: string;
  description: string;
  dismissLabel: string;
  locale: Locale;
  title: string;
}

export function LanguagePrompt({
  confirmLabel,
  description,
  dismissLabel,
  locale,
  title,
}: LanguagePromptProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (locale !== "en") {
      return;
    }

    const seen = window.localStorage.getItem(STORAGE_KEY);

    if (!seen) {
      setOpen(true);
    }
  }, [locale]);

  function dismiss() {
    window.localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }

  function switchToArabic() {
    window.localStorage.setItem(STORAGE_KEY, "1");
    const pathWithoutLocale =
      window.location.pathname.replace(LOCALE_PREFIX_PATTERN, "") || "/";
    router.push(localizedPath("ar", pathWithoutLocale));
    setOpen(false);
  }

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-navy/50 p-3 sm:items-center sm:p-4">
      <div
        aria-labelledby="language-prompt-title"
        aria-modal="true"
        className="w-full max-w-md rounded-t-2xl bg-white p-5 shadow-lg sm:rounded-2xl sm:p-6"
        role="dialog"
      >
        <h2
          className="font-semibold text-lg text-navy sm:text-xl"
          id="language-prompt-title"
        >
          {title}
        </h2>
        <p className="mt-2 text-navy/80 text-sm leading-relaxed">
          {description}
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <button
            className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-navy px-4 font-medium text-sm text-white"
            onClick={switchToArabic}
            type="button"
          >
            {confirmLabel}
          </button>
          <button
            className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-navy/20 px-4 font-medium text-navy text-sm"
            onClick={dismiss}
            type="button"
          >
            {dismissLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
