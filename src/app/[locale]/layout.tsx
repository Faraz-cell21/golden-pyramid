import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

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

  return {
    description: siteConfig.description[locale],
    icons: {
      apple: siteConfig.logoSrc,
      icon: siteConfig.logoSrc,
      shortcut: siteConfig.logoSrc,
    },
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
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
        {children}
      </body>
    </html>
  );
}
