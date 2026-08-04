import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogListView } from "@/components/blog/blog-list-view";
import { PageHero } from "@/components/shared/page-hero";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/seo";

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const { blog } = getDictionary(locale);

  return buildPageMetadata(locale, blog.title, blog.description, "blog");
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { blog, ui } = getDictionary(locale);

  return (
    <>
      <PageHero description={blog.description} title={blog.title} />
      <BlogListView
        content={blog}
        locale={locale}
        readMoreLabel={ui.readMore}
      />
    </>
  );
}
