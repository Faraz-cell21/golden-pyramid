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
        <ul className="space-y-4">
          {content.posts.map((post) => (
            <li key={post.slug}>
              <Link
                className="block rounded-xl border border-navy/10 p-5 transition-colors hover:border-navy/25 active:bg-navy/5 sm:p-6"
                href={localizedPath(locale, `/blog/${post.slug}`)}
              >
                <h2 className="font-semibold text-base text-navy sm:text-lg">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-navy/70 text-sm leading-relaxed">
                  {post.body}
                </p>
                <span className="mt-4 inline-flex font-medium text-navy text-sm underline-offset-4">
                  {readMoreLabel}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
