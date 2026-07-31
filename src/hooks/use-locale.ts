"use client";

import { useParams } from "next/navigation";

import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

export function useLocale(): Locale {
  const { locale } = useParams();

  if (typeof locale === "string" && isLocale(locale)) {
    return locale;
  }

  return defaultLocale;
}
