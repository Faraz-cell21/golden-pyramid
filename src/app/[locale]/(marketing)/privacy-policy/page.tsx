import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

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

  return {
    description: privacyPolicy.description,
    title: privacyPolicy.title,
  };
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
    <Section>
      <PageHeader
        description={privacyPolicy.description}
        title={privacyPolicy.title}
      />
    </Section>
  );
}
