import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ReviewsView } from "@/components/reviews/reviews-view";
import { PageContactCta } from "@/components/shared/page-contact-cta";
import { PageHero } from "@/components/shared/page-hero";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface ReviewsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ReviewsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const { reviews } = getDictionary(locale);

  return {
    description: reviews.description,
    title: reviews.title,
  };
}

export default async function ReviewsPage({ params }: ReviewsPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { reviews, ui } = getDictionary(locale);

  return (
    <>
      <PageHero description={reviews.description} title={reviews.title} />
      <ReviewsView content={reviews} loadMoreLabel={ui.loadMore} />
      <PageContactCta
        ui={{ callNow: ui.callNow, messageWhatsapp: ui.messageWhatsapp }}
      />
    </>
  );
}
