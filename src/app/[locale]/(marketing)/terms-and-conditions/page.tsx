import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalDocumentView } from "@/components/shared/legal-document-view";
import { PageHero } from "@/components/shared/page-hero";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/seo";

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

  return buildPageMetadata(
    locale,
    termsAndConditions.title,
    termsAndConditions.description,
    "terms-and-conditions"
  );
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
    <>
      <PageHero
        description={termsAndConditions.description}
        title={termsAndConditions.title}
      />
      <LegalDocumentView content={termsAndConditions} />
    </>
  );
}
