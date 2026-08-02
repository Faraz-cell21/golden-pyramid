import Image from "next/image";
import Link from "next/link";

import { SectionPageLink } from "@/components/shared/section-page-link";
import { routes } from "@/config/routes";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/utils";
import type { BlogPost, HomeContent } from "@/types/content";

interface HomeLatestBlogsProps {
  content: HomeContent["latestBlog"];
  locale: Locale;
  posts: BlogPost[];
  readMoreLabel: string;
}

export function HomeLatestBlogs({
  content,
  locale,
  posts,
  readMoreLabel,
}: HomeLatestBlogsProps) {
  const featuredPosts = posts.slice(0, 3);
  const blogHref = localizedPath(locale, routes.blog);

  if (featuredPosts.length === 0) {
    return null;
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-semibold text-navy text-xl sm:text-2xl md:text-3xl">
              {content.title}
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-gold" />
          </div>
          <Link
            className="inline-flex min-h-10 items-center font-medium text-navy text-sm underline-offset-4 hover:text-gold hover:underline"
            href={blogHref}
          >
            {content.viewAllLabel}
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {featuredPosts.map((post) => (
            <li key={post.slug}>
              <Link
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy/10 bg-white transition-colors hover:border-gold/50 hover:shadow-md"
                href={localizedPath(locale, `/blog/${post.slug}`)}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-navy/5">
                  <Image
                    alt={post.imageAlt}
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={post.image}
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="font-semibold text-base text-navy leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-navy/70 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-3 inline-flex font-medium text-gold text-sm underline-offset-4 group-hover:underline">
                    {readMoreLabel}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <SectionPageLink href={blogHref} label={content.viewAllLabel} />
      </div>
    </section>
  );
}
