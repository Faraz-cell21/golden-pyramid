import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedPath } from "@/lib/utils";

interface ThankYouPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ThankYouPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const { thankYou } = getDictionary(locale);

  return {
    description: thankYou.description,
    title: thankYou.title,
  };
}

export default async function ThankYouPage({ params }: ThankYouPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { thankYou } = getDictionary(locale);

  return (
    <Section>
      <PageHeader description={thankYou.description} title={thankYou.title} />
      <p className="mb-6 max-w-2xl text-navy/80 text-sm leading-relaxed sm:text-base">
        {thankYou.body}
      </p>
      <Link
        className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-navy px-4 font-medium text-sm text-white sm:w-auto"
        href={localizedPath(locale)}
      >
        {thankYou.ctaLabel}
      </Link>
    </Section>
  );
}
