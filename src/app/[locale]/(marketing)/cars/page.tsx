import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CarBrandsView } from "@/components/cars/car-brands-view";
import { FindUsSection } from "@/components/shared/find-us-section";
import { PageContactCta } from "@/components/shared/page-contact-cta";
import { PageHero } from "@/components/shared/page-hero";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface CarsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: CarsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const { carBrands } = getDictionary(locale);

  return {
    description: carBrands.description,
    title: carBrands.title,
  };
}

export default async function CarsPage({ params }: CarsPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { carBrands, ui } = getDictionary(locale);

  return (
    <>
      <PageHero description={carBrands.description} title={carBrands.title} />
      <CarBrandsView cards={carBrands.cards} locale={locale} />
      <PageContactCta
        ui={{ callNow: ui.callNow, messageWhatsapp: ui.messageWhatsapp }}
      />
      <FindUsSection title={ui.findUs} />
    </>
  );
}
