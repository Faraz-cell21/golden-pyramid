import Image from "next/image";

import { ContactCtaButtons } from "@/components/shared/contact-cta-buttons";
import { Reveal } from "@/components/shared/reveal";
import type { Dictionary } from "@/i18n/dictionaries";
import type { HomeContent } from "@/types/content";

interface HomeAugustOffersProps {
  content: HomeContent["augustOffers"];
  ui: Pick<Dictionary["ui"], "callNow" | "messageWhatsapp">;
}

export function HomeAugustOffers({ content, ui }: HomeAugustOffersProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.07),transparent_34%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-[0_22px_50px_rgba(0,0,0,0.35)] ring-1 ring-gold/30">
            <Image
              alt={content.imageAlt}
              className="object-cover object-center"
              fill
              quality={85}
              sizes="(max-width: 1024px) 100vw, 560px"
              src={content.image}
            />
          </div>
        </Reveal>

        <Reveal delayMs={90}>
          <p className="font-semibold text-gold text-xs uppercase tracking-[0.28em]">
            الهرم الذهبي
          </p>
          <h2 className="mt-3 font-bold text-2xl text-white tracking-tight sm:text-3xl md:text-4xl">
            {content.title}
          </h2>
          <div className="mt-4 h-1 w-14 rounded-full bg-gold" />
          <p className="mt-5 text-sm text-white/75 leading-relaxed sm:text-base">
            {content.description}
          </p>

          <ul className="mt-6 space-y-3">
            {content.items.map((item) => (
              <li
                className="flex gap-3 rounded-xl border border-gold/25 bg-white/5 px-4 py-3 text-sm text-white sm:text-base"
                key={item}
              >
                <span aria-hidden className="mt-0.5 font-bold text-gold">
                  ›
                </span>
                <span className="font-semibold leading-snug">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-white/80 leading-relaxed sm:text-base">
            {content.ctaBody}
          </p>

          <ContactCtaButtons className="mt-5 max-w-xl" ui={ui} />
        </Reveal>
      </div>
    </section>
  );
}
