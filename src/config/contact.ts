import type { Locale } from "@/i18n/config";

export const contactConfig = {
  location: {
    ar: "الشارقة – المنطقة الصناعية 4",
    en: "Sharjah, Industrial Area 4",
  },
  phoneDisplay: "+971 55 240 7409",
  phoneHref: "tel:+971552407409",
} as const;

export function getContactLocation(locale: Locale) {
  return contactConfig.location[locale];
}
