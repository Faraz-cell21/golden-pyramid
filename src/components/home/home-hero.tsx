import { BrandLogo } from "@/components/shared/brand-logo";
import { ContactCtaButtons } from "@/components/shared/contact-cta-buttons";
import { CrossfadeImages } from "@/components/shared/crossfade-images";
import { ReviewPlatformBadge } from "@/components/shared/review-platform-badge";
import { SocialLinks } from "@/components/shared/social-links";
import { contactConfig, getContactLocation } from "@/config/contact";
import { heroCrossfadeImages } from "@/content/shared/visual-assets";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { HomeContent } from "@/types/content";

interface HomeHeroProps {
  content: HomeContent["hero"];
  locale: Locale;
  socialLabels: Dictionary["ui"]["social"];
  ui: Pick<Dictionary["ui"], "callNow" | "locationLabel" | "messageWhatsapp">;
}

export function HomeHero({ content, locale, socialLabels, ui }: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden text-white">
      <CrossfadeImages
        className="object-cover object-center brightness-110 contrast-105 saturate-125"
        images={heroCrossfadeImages}
        intervalMs={3800}
        priority
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-navy/72 via-navy/48 to-navy/22 rtl:bg-gradient-to-l"
      />
      <div aria-hidden className="absolute inset-0 bg-black/5" />

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="order-2 space-y-5 lg:order-1">
            <a
              className="location-pill relative inline-flex max-w-full overflow-hidden rounded-full p-[2px]"
              href={contactConfig.mapsUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span
                aria-hidden
                className="location-pill-border pointer-events-none absolute inset-[-120%]"
              />
              <span className="location-pill-shine relative z-10 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gold-soft px-2.5 py-1.5 text-navy text-xs sm:gap-2 sm:px-3 sm:text-sm">
                <LocationPinIcon />
                <span>
                  <span className="font-semibold">{ui.locationLabel}: </span>
                  <span className="font-bold font-brand" dir="rtl" lang="ar">
                    {getContactLocation(locale)}
                  </span>
                </span>
              </span>
            </a>

            <h1 className="whitespace-pre-line font-extrabold text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <div className="h-1 w-14 rounded-full bg-gold" />
            <p className="font-semibold text-base text-white/95 leading-relaxed sm:text-lg md:text-xl">
              {content.body}
            </p>

            <ul className="space-y-2 font-semibold text-base text-white sm:text-lg">
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
              <p className="font-semibold text-base text-white/90">
                {content.socialIntro}
              </p>
              <SocialLinks exclude={["whatsapp"]} labels={socialLabels} />
            </div>

            <ContactCtaButtons className="max-w-xl pt-1" ui={ui} />
          </div>

          <div className="order-1 flex w-full justify-center lg:order-2 lg:justify-end">
            <BrandLogo size="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationPinIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0 text-navy"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
