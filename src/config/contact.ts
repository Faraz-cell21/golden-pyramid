import type { Locale } from "@/i18n/config";

export const contactConfig = {
  location: {
    ar: "الشارقة – المنطقة الصناعية 4",
    en: "Sharjah, Industrial Area 4",
  },
  /** Placeholder. Replace with real number */
  phoneDisplay: "600000000",
  phoneHref: "tel:600000000",
} as const;

export function getContactLocation(locale: Locale) {
  return contactConfig.location[locale];
}
