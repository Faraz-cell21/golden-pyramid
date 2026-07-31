import Image from "next/image";
import type { AboutContent } from "@/types/content";

interface AboutViewProps {
  content: AboutContent;
}

export function AboutView({ content }: AboutViewProps) {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h2 className="font-semibold text-navy text-xl sm:text-2xl">
              {content.introTitle}
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-gold" />
            <div className="mt-5 space-y-4">
              {content.intro.map((paragraph) => (
                <p
                  className="text-navy/80 text-sm leading-relaxed sm:text-base"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-navy/5">
            <Image
              alt="Workshop bay at Golden Pyramid"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              src="/images/Home page/auto-mechanic-fort-collins-360.webp"
            />
          </div>
        </div>
      </section>

      <section className="bg-navy/5">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <h2 className="font-semibold text-navy text-xl sm:text-2xl">
            {content.whyUsTitle}
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-gold" />
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {content.whyUs.map((item) => (
              <li
                className="flex gap-3 rounded-xl border border-navy/10 bg-white p-4 text-navy/85 text-sm leading-relaxed sm:p-5 sm:text-base"
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
        </div>
      </section>
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
