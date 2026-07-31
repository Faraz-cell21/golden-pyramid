import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const { termsAndConditions } = getDictionary(locale);

  return {
    description: termsAndConditions.description,
    title: termsAndConditions.title,
  };
}

export default async function TermsAndConditionsPage({
  params,
}: TermsPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { termsAndConditions } = getDictionary(locale);

  return (
    <Section>
      <PageHeader
        description={termsAndConditions.description}
        title={termsAndConditions.title}
      />
    </Section>
  );
}
