import Link from "next/link";

import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/shared/section";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedPath } from "@/lib/utils";

interface NotFoundProps {
  params?: Promise<{ locale?: string }>;
}

export default async function NotFound({ params }: NotFoundProps) {
  const resolved = params ? await params : undefined;
  const locale =
    resolved?.locale && isLocale(resolved.locale)
      ? resolved.locale
      : defaultLocale;
  const dictionary = getDictionary(locale);
  const { notFound } = dictionary;

  return (
    <SiteShell dictionary={dictionary} locale={locale}>
      <Section className="py-16 text-center sm:py-20">
        <h1 className="font-semibold text-2xl text-navy sm:text-3xl">
          {notFound.title}
        </h1>
        <p className="mx-auto mt-3 max-w-md text-navy/75 text-sm leading-relaxed sm:text-base">
          {notFound.body}
        </p>
        <Link
          className="mt-8 inline-flex min-h-11 w-full max-w-xs items-center justify-center rounded-md bg-navy px-4 font-medium text-sm text-white sm:w-auto"
          href={localizedPath(locale)}
        >
          {notFound.ctaLabel}
        </Link>
      </Section>
    </SiteShell>
  );
}
