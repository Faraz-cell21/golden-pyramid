import { Reveal } from "@/components/shared/reveal";
import { SpecialtyServiceCard } from "@/components/shared/specialty-service-card";
import type { Locale } from "@/i18n/config";
import type { HomeSpecialtyServicesContent } from "@/types/content";

interface HomeSpecialtyServicesProps {
  content: HomeSpecialtyServicesContent;
  locale: Locale;
}

export function HomeSpecialtyServices({
  content,
  locale,
}: HomeSpecialtyServicesProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_35%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-gold text-xs uppercase tracking-[0.28em]">
              الهرم الذهبي
            </p>
            <h2 className="mt-3 font-bold text-2xl text-white tracking-tight sm:text-3xl md:text-4xl">
              {content.title}
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gold" />
            <p className="mx-auto mt-5 max-w-2xl text-sm text-white/75 leading-relaxed sm:text-base">
              {content.description}
            </p>
          </div>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 md:gap-7">
          {content.cards.map((card, index) => (
            <Reveal
              as="li"
              className="h-full"
              delayMs={index * 90}
              key={card.slug}
            >
              <SpecialtyServiceCard card={card} locale={locale} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
