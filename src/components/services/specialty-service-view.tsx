import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { routes } from "@/config/routes";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/utils";
import type { SpecialtyServicePageContent } from "@/types/content";

interface SpecialtyServiceViewProps {
  backLabel: string;
  content: SpecialtyServicePageContent;
  locale: Locale;
}

export function SpecialtyServiceView({
  backLabel,
  content,
  locale,
}: SpecialtyServiceViewProps) {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <Reveal>
            <div className="max-w-3xl space-y-4">
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

      {content.sections.map((section, index) => {
        const imageFirst = index % 2 === 0;

        return (
          <section
            className={index % 2 === 0 ? "bg-navy/[0.03]" : "bg-white"}
            key={section.title}
          >
            <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-12">
              <Reveal
                className={imageFirst ? "lg:order-1" : "lg:order-2"}
                delayMs={80}
              >
                <div className="relative min-h-[18rem] overflow-hidden rounded-2xl bg-navy/5 shadow-[0_18px_40px_rgba(11,31,58,0.12)] sm:min-h-[24rem]">
                  <Image
                    alt={section.imageAlt}
                    className="object-cover object-center"
                    fill
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 560px"
                    src={section.image}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent"
                  />
                </div>
              </Reveal>

              <Reveal className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                <h2 className="font-semibold text-navy text-xl sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-3 h-1 w-12 rounded-full bg-gold" />
                <div className="mt-5 space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      className="text-navy/80 text-sm leading-relaxed sm:text-base"
                      key={paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <ul className="mt-6 space-y-3">
                  {section.items.map((item) => (
                    <li
                      className="flex gap-3 text-navy/85 text-sm leading-relaxed sm:text-base"
                      key={item}
                    >
                      <span
                        aria-hidden
                        className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold"
                      >
                        <CheckIcon />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        );
      })}

      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 sm:pb-12">
          <Link
            className="inline-flex min-h-11 items-center font-medium text-navy text-sm underline-offset-4 hover:underline"
            href={localizedPath(locale, routes.services)}
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
