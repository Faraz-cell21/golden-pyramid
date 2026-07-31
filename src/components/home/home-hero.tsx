import { contactConfig } from "@/config/contact";
import { socialLinks, whatsappLink } from "@/content/shared/socials";
import type { Dictionary } from "@/i18n/dictionaries";
import type { HomeContent } from "@/types/content";

interface HomeHeroProps {
  content: HomeContent["hero"];
  socialLabels: Dictionary["ui"]["social"];
  ui: Pick<Dictionary["ui"], "callNow" | "messageWhatsapp">;
}

export function HomeHero({ content, socialLabels, ui }: HomeHeroProps) {
  const bioSocials = socialLinks.filter((link) => link.platform !== "whatsapp");

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(160deg,var(--color-navy)_0%,var(--color-navy-soft)_55%,#071525_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,#c5a35a33,transparent_35%),radial-gradient(circle_at_80%_0%,#ffffff14,transparent_25%)]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-16">
        <div className="order-1 space-y-5 lg:order-2">
          <div className="aspect-[4/3] rounded-xl border border-white/15 bg-white/5 sm:aspect-[16/10] lg:aspect-[4/3]">
            <div className="flex h-full items-center justify-center p-4 text-center text-sm text-white/50">
              Image placeholder
            </div>
          </div>
        </div>

        <div className="order-2 space-y-5 lg:order-1">
          <h1 className="font-semibold text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl">
            {content.title}
          </h1>
          <div className="h-1 w-14 rounded-full bg-gold" />
          <p className="max-w-xl text-sm text-white/80 leading-relaxed sm:text-base">
            {content.body}
          </p>

          <ul className="space-y-2 text-sm text-white/85 sm:text-base">
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

          <p className="text-sm text-white/70">{content.ratingLabel}</p>

          <div className="space-y-2">
            <p className="font-medium text-sm text-white/75">
              {content.socialIntro}
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {bioSocials.map((link) => (
                <li key={link.platform}>
                  <a
                    className="inline-flex min-h-10 items-center text-sm text-white underline-offset-4 hover:underline"
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {socialLabels[link.platform]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
            <a
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md bg-white px-4 font-medium text-navy text-sm"
              href={contactConfig.phoneHref}
            >
              {ui.callNow}: {contactConfig.phoneDisplay}
            </a>
            <a
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md border border-white px-4 font-medium text-sm text-white"
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
