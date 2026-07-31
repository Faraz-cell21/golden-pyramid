import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomeCtaBand } from "@/components/home/home-cta-band";
import { HomeHero } from "@/components/home/home-hero";
import { HomeServiceCategories } from "@/components/home/home-service-categories";
import { HomeWhyUs } from "@/components/home/home-why-us";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const { home } = getDictionary(locale);

  return {
    description: home.description,
    title: home.title,
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const { home, ui } = dictionary;
  const ctaUi = {
    callNow: ui.callNow,
    messageWhatsapp: ui.messageWhatsapp,
  };

  return (
    <>
      <HomeHero content={home.hero} socialLabels={ui.social} ui={ctaUi} />
      <HomeServiceCategories content={home.serviceCategories} />
      <HomeWhyUs content={home.whyUs} />
      <HomeCtaBand content={home.ctaBand} ui={ctaUi} />
    </>
  );
}
