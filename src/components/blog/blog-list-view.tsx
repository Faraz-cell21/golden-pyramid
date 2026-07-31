import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/utils";
import type { BlogContent } from "@/types/content";

interface BlogListViewProps {
  content: BlogContent;
  locale: Locale;
  readMoreLabel: string;
}

export function BlogListView({
  content,
  locale,
  readMoreLabel,
}: BlogListViewProps) {
  if (content.posts.length === 0) {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <p className="text-navy/70 text-sm sm:text-base">
            {content.emptyMessage}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {content.posts.map((post) => (
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
                    sizes="(max-width: 640px) 100vw, 50vw"
                    src={post.image}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h2 className="font-semibold text-base text-navy sm:text-lg">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 flex-1 text-navy/70 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex font-medium text-gold text-sm underline-offset-4 group-hover:underline">
                    {readMoreLabel}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
