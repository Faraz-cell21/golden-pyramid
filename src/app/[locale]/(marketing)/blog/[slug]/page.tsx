import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { isLocale, locales } from "@/i18n/config";
import { getBlogPost, getDictionary } from "@/i18n/dictionaries";

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getDictionary(locale).blog.posts.map((post) => ({
      locale,
      slug: post.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const post = getBlogPost(locale, slug);

  if (!post) {
    return {};
  }

  return {
    description: post.body,
    title: post.title,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const post = getBlogPost(locale, slug);

  if (!post) {
    notFound();
  }

  return (
    <Section>
      <PageHeader title={post.title} />
      <p className="max-w-3xl text-navy/80 text-sm leading-7 sm:text-base sm:leading-8">
        {post.body}
      </p>
    </Section>
  );
}
