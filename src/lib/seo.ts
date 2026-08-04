import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";

const LEADING_SLASHES = /^\/+/;

const ogImage = {
  alt: siteConfig.nameFull,
  height: 1024,
  url: siteConfig.logoSrc,
  width: 1536,
} as const;

export function buildPageMetadata(
  locale: Locale,
  title: string,
  description: string,
  path = ""
): Metadata {
  const normalizedPath = path.replace(LEADING_SLASHES, "");
  const pagePath = normalizedPath
    ? `/${locale}/${normalizedPath}`
    : `/${locale}`;
  const url = `${siteConfig.url}${pagePath}`;

  return {
    alternates: {
      canonical: url,
    },
    description,
    openGraph: {
      description,
      images: [ogImage],
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      siteName: siteConfig.nameFull,
      title,
      type: "website",
      url,
    },
    title,
    twitter: {
      card: "summary_large_image",
      description,
      images: [siteConfig.logoSrc],
      title,
    },
  };
}
