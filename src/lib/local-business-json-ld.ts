import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/content/shared/socials";
import type { Locale } from "@/i18n/config";

/** Workshop hours aligned with Google Business Profile (closes 10 PM). */
const OPENING_HOURS = {
  closes: "22:00",
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  opens: "08:00",
} as const;

export function buildLocalBusinessJsonLd(locale: Locale) {
  const pageUrl = `${siteConfig.url}/${locale}`;
  const logoUrl = `${siteConfig.url}${siteConfig.logoSrc}`;
  const sameAs = [
    contactConfig.mapsUrl,
    ...socialLinks.map((link) => link.href),
  ];

  return {
    "@context": "https://schema.org",
    "@id": `${siteConfig.url}/#localbusiness`,
    "@type": "AutoRepair",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
      addressLocality: "Sharjah",
      addressRegion: "Sharjah",
      streetAddress: "Industrial Area 4",
    },
    alternateName: siteConfig.brandMark.english,
    areaServed: [
      {
        "@type": "City",
        name: "Sharjah",
      },
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
    ],
    description: siteConfig.description[locale],
    hasMap: contactConfig.mapsUrl,
    image: logoUrl,
    name: siteConfig.nameFull,
    openingHoursSpecification: OPENING_HOURS.days.map((day) => ({
      "@type": "OpeningHoursSpecification",
      closes: OPENING_HOURS.closes,
      dayOfWeek: day,
      opens: OPENING_HOURS.opens,
    })),
    priceRange: "$$",
    sameAs,
    telephone: contactConfig.phoneDisplay,
    url: pageUrl,
  } as const;
}
