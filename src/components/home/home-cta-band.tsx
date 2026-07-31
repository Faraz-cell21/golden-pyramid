import Image from "next/image";
import { AccentLine } from "@/components/shared/accent-line";
import { contactConfig } from "@/config/contact";
import { whatsappLink } from "@/content/shared/socials";
import type { Dictionary } from "@/i18n/dictionaries";
import type { HomeContent } from "@/types/content";

interface HomeCtaBandProps {
  content: HomeContent["ctaBand"];
  ui: Pick<Dictionary["ui"], "callNow" | "messageWhatsapp">;
}

export function HomeCtaBand({ content, ui }: HomeCtaBandProps) {
  return (
    <section className="relative overflow-hidden text-white">
      <Image
        alt=""
        aria-hidden
        className="scale-105 object-cover blur-[2px]"
        fill
        sizes="100vw"
        src="/images/Home page/cta-band-bg.png"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/88 to-black/90"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-12 text-center sm:px-6 sm:py-16">
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

        <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md bg-[#25D366] px-4 font-semibold text-sm text-white transition-transform hover:scale-[1.02]"
            href={whatsappLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            {ui.messageWhatsapp}
          </a>
          <a
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md border border-gold bg-transparent px-4 font-semibold text-gold text-sm transition-colors hover:bg-gold/10"
            href={contactConfig.phoneHref}
          >
            {ui.callNow}: {contactConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
