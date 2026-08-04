import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicesView } from "@/components/services/services-view";
import { SpecialtyServicesSection } from "@/components/services/specialty-services-section";
import { PageContactCta } from "@/components/shared/page-contact-cta";
import { PageHero } from "@/components/shared/page-hero";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/seo";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const { services } = getDictionary(locale);

  return buildPageMetadata(
    locale,
    services.title,
    services.description,
    "services"
  );
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { services, specialtyServices, ui } = getDictionary(locale);

  return (
    <>
      <PageHero description={services.description} title={services.title} />
      <ServicesView content={services} />
      <SpecialtyServicesSection content={specialtyServices} locale={locale} />
      <PageContactCta
        ui={{ callNow: ui.callNow, messageWhatsapp: ui.messageWhatsapp }}
      />
    </>
  );
}
