import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CarBrandView } from "@/components/cars/car-brand-view";
import { FindUsSection } from "@/components/shared/find-us-section";
import { PageContactCta } from "@/components/shared/page-contact-cta";
import { PageHero } from "@/components/shared/page-hero";
import { carBrandSlugs } from "@/config/routes";
import { isLocale, locales } from "@/i18n/config";
import { getCarBrand, getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/seo";

interface CarBrandPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    carBrandSlugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: CarBrandPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const page = getCarBrand(locale, slug);

  if (!page) {
    return {};
  }

  return buildPageMetadata(
    locale,
    page.title,
    page.description,
    `cars/${slug}`
  );
}

export default async function CarBrandPage({ params }: CarBrandPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const page = getCarBrand(locale, slug);
  const { ui } = getDictionary(locale);

  if (!page) {
    notFound();
  }

  return (
    <>
      <PageHero description={page.description} title={page.title} />
      <CarBrandView backLabel={ui.backToCars} content={page} locale={locale} />
      <PageContactCta
        ui={{ callNow: ui.callNow, messageWhatsapp: ui.messageWhatsapp }}
      />
      <FindUsSection title={ui.findUs} />
    </>
  );
}
