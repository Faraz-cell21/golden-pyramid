import Image from "next/image";
import { ReviewPlatformBadge } from "@/components/shared/review-platform-badge";
import { SocialLinks } from "@/components/shared/social-links";
import { contactConfig } from "@/config/contact";
import { whatsappLink } from "@/content/shared/socials";
import type { Dictionary } from "@/i18n/dictionaries";
import type { HomeContent } from "@/types/content";

interface HomeHeroProps {
  content: HomeContent["hero"];
  socialLabels: Dictionary["ui"]["social"];
  ui: Pick<Dictionary["ui"], "callNow" | "messageWhatsapp">;
}

export function HomeHero({ content, socialLabels, ui }: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden text-white">
      <Image
        alt=""
        aria-hidden
        className="object-cover object-center"
        fill
        priority
        quality={90}
        sizes="100vw"
        src="/images/Home page/home-hero-bg.jpg"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/80 to-navy/55"
      />
      <div aria-hidden className="absolute inset-0 bg-black/25" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="max-w-xl space-y-5 lg:max-w-3xl">
          <h1 className="font-bold text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            {content.title}
          </h1>
          <div className="h-1 w-14 rounded-full bg-gold" />
          <p className="text-sm text-white/85 leading-relaxed sm:text-base md:text-lg">
            {content.body}
          </p>

          <ul className="space-y-2 text-sm text-white/90 sm:text-base">
            {content.features.map((feature) => (
              <li className="flex gap-2" key={feature}>
                <span
                  aria-hidden
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            {content.reviewPlatforms.map((item) => (
              <ReviewPlatformBadge item={item} key={item.platform} />
            ))}
          </div>

          <div className="space-y-2">
            <p className="font-medium text-sm text-white/80">
              {content.socialIntro}
            </p>
            <SocialLinks exclude={["whatsapp"]} labels={socialLabels} />
          </div>

          <div className="flex max-w-xl flex-col gap-3 pt-1 sm:flex-row">
            <a
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md bg-white px-4 font-semibold text-navy text-sm"
              href={contactConfig.phoneHref}
            >
              {ui.callNow}: {contactConfig.phoneDisplay}
            </a>
            <a
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md border border-white px-4 font-semibold text-sm text-white transition-colors hover:border-gold hover:text-gold"
              href={whatsappLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              {ui.messageWhatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
