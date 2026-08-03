import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomeCtaBand } from "@/components/home/home-cta-band";
import { HomeHero } from "@/components/home/home-hero";
import { HomeLatestBlogs } from "@/components/home/home-latest-blogs";
import { HomeReviewsCarousel } from "@/components/home/home-reviews-carousel";
import { HomeServiceCategories } from "@/components/home/home-service-categories";
import { HomeSpecialtyServices } from "@/components/home/home-specialty-services";
import { HomeWhyUs } from "@/components/home/home-why-us";
import { HomeWorkshopVideo } from "@/components/home/home-workshop-video";
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
  const { blog, home, reviews, ui } = dictionary;
  const ctaUi = {
    callNow: ui.callNow,
    findUs: ui.findUs,
    locationLabel: ui.locationLabel,
    messageWhatsapp: ui.messageWhatsapp,
  };

  return (
    <>
      <HomeHero
        content={home.hero}
        locale={locale}
        socialLabels={ui.social}
        ui={ctaUi}
      />
      <HomeLatestBlogs
        content={home.latestBlog}
        locale={locale}
        posts={blog.posts}
        readMoreLabel={ui.readMore}
      />
      <HomeWorkshopVideo content={home.videoShowcase} />
      <HomeServiceCategories content={home.serviceCategories} locale={locale} />
      <HomeSpecialtyServices content={home.specialtyServices} locale={locale} />
      <HomeReviewsCarousel
        content={home.reviewsShowcase}
        locale={locale}
        reviews={reviews.items}
      />
      <HomeWhyUs content={home.whyUs} locale={locale} />
      <HomeCtaBand content={home.ctaBand} locale={locale} ui={ctaUi} />
    </>
  );
}
