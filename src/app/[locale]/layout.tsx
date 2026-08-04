import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { GoogleAnalytics } from "@/components/seo/google-analytics";
import { LocalBusinessJsonLd } from "@/components/seo/local-business-json-ld";
import { siteConfig } from "@/config/site";
import {
  defaultLocale,
  getDirection,
  isLocale,
  type Locale,
  locales,
} from "@/i18n/config";

const cairo = Cairo({
  display: "swap",
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  weight: ["300", "400", "500", "600", "700", "800"],
});

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : defaultLocale;

  const description = siteConfig.description[locale];
  const ogLocale = locale === "ar" ? "ar_AE" : "en_AE";

  return {
    description,
    icons: {
      apple: siteConfig.logoSrc,
      icon: siteConfig.logoSrc,
      shortcut: siteConfig.logoSrc,
    },
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      description,
      images: [
        {
          alt: siteConfig.nameFull,
          height: 1024,
          url: siteConfig.logoSrc,
          width: 1536,
        },
      ],
      locale: ogLocale,
      siteName: siteConfig.nameFull,
      title: siteConfig.nameFull,
      type: "website",
      url: `${siteConfig.url}/${locale}`,
    },
    title: {
      default: siteConfig.nameFull,
      template: `%s | ${siteConfig.name}`,
    },
    twitter: {
      card: "summary_large_image",
      description,
      images: [siteConfig.logoSrc],
      title: siteConfig.nameFull,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam;
  const direction = getDirection(locale);

  return (
    <html
      className={cairo.variable}
      data-scroll-behavior="smooth"
      dir={direction}
      lang={locale}
    >
      <body className={`min-h-dvh antialiased ${cairo.className}`}>
        <GoogleAnalytics />
        <LocalBusinessJsonLd locale={locale} />
        {children}
      </body>
    </html>
  );
}
