import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { routes } from "@/config/routes";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/utils";
import type { CarBrandPageContent } from "@/types/content";

interface CarBrandViewProps {
  backLabel: string;
  content: CarBrandPageContent;
  locale: Locale;
}

export function CarBrandView({
  backLabel,
  content,
  locale,
}: CarBrandViewProps) {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <Reveal>
            <p className="font-semibold text-gold text-sm uppercase tracking-[0.2em]">
              {content.name}
            </p>
            <div className="mt-5 max-w-3xl space-y-4">
              {content.intro.map((paragraph) => (
                <p
                  className="text-navy/80 text-sm leading-relaxed sm:text-base"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy/[0.03]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <Reveal>
            <h2 className="font-semibold text-navy text-xl sm:text-2xl">
              {content.servicesTitle}
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-gold" />
          </Reveal>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {content.items.map((item, index) => (
              <Reveal
                as="li"
                className="flex gap-3 rounded-xl border border-navy/10 bg-white p-4 text-navy/85 text-sm leading-relaxed sm:p-5 sm:text-base"
                delayMs={index * 50}
                key={item}
              >
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold"
                >
                  <CheckIcon />
                </span>
                <span>{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <Reveal>
            <h2 className="font-semibold text-navy text-xl sm:text-2xl">
              {content.commonIssuesTitle}
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-gold" />
            <p className="mt-4 max-w-3xl text-navy/70 text-sm leading-relaxed sm:text-base">
              {content.commonIssuesIntro}
            </p>
          </Reveal>

          <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {content.commonIssues.map((issue, index) => (
              <Reveal
                as="li"
                className="rounded-2xl border border-navy/10 bg-navy/[0.02] p-5 sm:p-6"
                delayMs={index * 60}
                key={issue.title}
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-gold/15 font-bold text-gold text-sm"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-base text-navy sm:text-lg">
                      {issue.title}
                    </h3>
                    <p className="mt-2 text-navy/70 text-sm leading-relaxed sm:text-[0.95rem]">
                      {issue.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-navy/[0.03]">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          <Link
            className="inline-flex min-h-11 items-center font-medium text-navy text-sm underline-offset-4 hover:underline"
            href={localizedPath(locale, routes.cars)}
          >
            {backLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-3.5"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
