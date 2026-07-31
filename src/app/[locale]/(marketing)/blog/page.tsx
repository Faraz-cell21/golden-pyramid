import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedPath } from "@/lib/utils";

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

  return {
    description: blog.description,
    title: blog.title,
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { blog } = getDictionary(locale);

  return (
    <Section>
      <PageHeader description={blog.description} title={blog.title} />
      {blog.posts.length === 0 ? (
        <p className="text-navy/70 text-sm sm:text-base">{blog.emptyMessage}</p>
      ) : (
        <ul className="space-y-3 sm:space-y-4">
          {blog.posts.map((post) => (
            <li key={post.slug}>
              <Link
                className="block rounded-lg border border-navy/10 p-4 transition-colors hover:border-navy/30 active:bg-navy/5 sm:p-5"
                href={localizedPath(locale, `/blog/${post.slug}`)}
              >
                <h2 className="font-semibold text-base text-navy sm:text-lg">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-navy/70 text-sm leading-relaxed sm:line-clamp-2">
                  {post.body}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
