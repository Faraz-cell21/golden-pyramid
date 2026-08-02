import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SpecialtyServiceView } from "@/components/services/specialty-service-view";
import { PageContactCta } from "@/components/shared/page-contact-cta";
import { PageHero } from "@/components/shared/page-hero";
import { specialtyServiceSlugs } from "@/config/routes";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary, getSpecialtyService } from "@/i18n/dictionaries";

interface SpecialtyServicePageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    specialtyServiceSlugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: SpecialtyServicePageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const page = getSpecialtyService(locale, slug);

  if (!page) {
    return {};
  }

  return {
    description: page.description,
    title: page.title,
  };
}

export default async function SpecialtyServicePage({
  params,
}: SpecialtyServicePageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const page = getSpecialtyService(locale, slug);
  const { ui } = getDictionary(locale);

  if (!page) {
    notFound();
  }

  return (
    <>
      <PageHero description={page.description} title={page.title} />
      <SpecialtyServiceView
        backLabel={ui.backToServices}
        content={page}
        locale={locale}
      />
      <PageContactCta
        ui={{ callNow: ui.callNow, messageWhatsapp: ui.messageWhatsapp }}
      />
    </>
  );
}
