import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
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

  return (
    <Section>
      <PageHeader
        description={dictionary.home.description}
        title={dictionary.home.title}
      />
      <WhatsappButton
        className="w-full sm:w-auto"
        label={dictionary.ui.contactWhatsapp}
      />
    </Section>
  );
}
