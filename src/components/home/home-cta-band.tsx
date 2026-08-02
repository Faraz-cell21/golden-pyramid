import { AccentLine } from "@/components/shared/accent-line";
import { ContactCtaButtons } from "@/components/shared/contact-cta-buttons";
import { CrossfadeImages } from "@/components/shared/crossfade-images";
import { LocationLink } from "@/components/shared/location-link";
import { Reveal } from "@/components/shared/reveal";
import { ctaBandImages } from "@/content/shared/visual-assets";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { HomeContent } from "@/types/content";

interface HomeCtaBandProps {
  content: HomeContent["ctaBand"];
  locale: Locale;
  ui: Pick<Dictionary["ui"], "callNow" | "locationLabel" | "messageWhatsapp">;
}

export function HomeCtaBand({ content, locale, ui }: HomeCtaBandProps) {
  return (
    <section className="relative overflow-hidden text-white">
      <CrossfadeImages
        className="scale-105 object-cover brightness-105 saturate-115"
        images={ctaBandImages}
        intervalMs={4500}
        quality={80}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/78 to-navy/88"
      />

      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-12 text-center sm:px-6 sm:py-16">
        <AccentLine />

        <h2 className="mt-5 font-bold text-2xl leading-snug sm:text-3xl md:text-4xl">
          {content.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base text-white/85 leading-relaxed sm:text-lg">
          {content.body}
        </p>

        <ul className="mt-8 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6">
          {content.trustPoints.map((point) => (
            <li
              className="flex flex-1 items-center justify-center gap-2 font-semibold text-gold text-sm sm:flex-col sm:gap-2 sm:text-base"
              key={point}
            >
              <span
                aria-hidden
                className="inline-flex size-2 shrink-0 rounded-full bg-gold sm:size-2.5"
              />
              <span className="text-white">{point}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-white/70 sm:text-base">
          {content.vehiclesLine}
        </p>
        <p className="mt-3 flex items-center justify-center gap-2 text-sm text-white/85 sm:text-base">
          <LocationPinIcon />
          <span>
            <span className="font-medium text-white/70">
              {ui.locationLabel}:{" "}
            </span>
            <LocationLink locale={locale} />
          </span>
        </p>

        <ContactCtaButtons className="mt-8 max-w-xl" ui={ui} />
      </Reveal>
    </section>
  );
}

function LocationPinIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0 text-gold"
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
