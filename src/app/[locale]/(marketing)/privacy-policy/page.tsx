import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalDocumentView } from "@/components/shared/legal-document-view";
import { PageHero } from "@/components/shared/page-hero";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/seo";

interface PrivacyPolicyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PrivacyPolicyPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const { privacyPolicy } = getDictionary(locale);

  return buildPageMetadata(
    locale,
    privacyPolicy.title,
    privacyPolicy.description,
    "privacy-policy"
  );
}

export default async function PrivacyPolicyPage({
  params,
}: PrivacyPolicyPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { privacyPolicy } = getDictionary(locale);

  return (
    <>
      <PageHero
        description={privacyPolicy.description}
        title={privacyPolicy.title}
      />
      <LegalDocumentView content={privacyPolicy} />
    </>
  );
}
