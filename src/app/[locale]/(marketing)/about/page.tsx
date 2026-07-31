import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AboutView } from "@/components/about/about-view";
import { PageContactCta } from "@/components/shared/page-contact-cta";
import { PageHero } from "@/components/shared/page-hero";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const { about } = getDictionary(locale);

  return {
    description: about.description,
    title: about.title,
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { about, ui } = getDictionary(locale);

  return (
    <>
      <PageHero description={about.description} title={about.title} />
      <AboutView content={about} />
      <PageContactCta
        ui={{ callNow: ui.callNow, messageWhatsapp: ui.messageWhatsapp }}
      />
    </>
  );
}
