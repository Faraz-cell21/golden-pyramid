import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/shared/page-hero";
import { isLocale, locales } from "@/i18n/config";
import { getBlogPost, getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/seo";
import { localizedPath } from "@/lib/utils";

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

  return buildPageMetadata(locale, post.title, post.excerpt, `blog/${slug}`);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const post = getBlogPost(locale, slug);
  const { ui } = getDictionary(locale);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero description={post.excerpt} title={post.title} />
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-xl bg-navy/5">
            <Image
              alt={post.imageAlt}
              className="object-cover"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              src={post.image}
            />
          </div>
          <p className="text-navy/80 text-sm leading-7 sm:text-base sm:leading-8">
            {post.body}
          </p>
          <Link
            className="mt-8 inline-flex min-h-11 items-center font-medium text-navy text-sm underline-offset-4 hover:underline"
            href={localizedPath(locale, "/blog")}
          >
            {ui.backToBlog}
          </Link>
        </div>
      </article>
    </>
  );
}
