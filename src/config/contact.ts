import type { Locale } from "@/i18n/config";

/** Always Arabic — locale must not change the displayed workshop location. */
export const contactLocation = "الشارقة، المنطقة الصناعية 4";

export const contactConfig = {
  location: contactLocation,
  /** Embed pin for Industrial Area 4 workshop (Google place listing). */
  mapsEmbedUrl:
    "https://maps.google.com/maps?cid=17404077555619889545&hl=en&z=16&output=embed",
  mapsUrl: "https://maps.app.goo.gl/SEhT6cuLSNaMHZK18?g_st=iwb",
  phoneDisplay: "+971 55 240 7409",
  phoneHref: "tel:+971552407409",
} as const;

export function getContactLocation(_locale?: Locale) {
  return contactConfig.location;
}
