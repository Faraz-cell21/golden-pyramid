import { Reveal } from "@/components/shared/reveal";
import { SpecialtyServiceCard } from "@/components/shared/specialty-service-card";
import type { Locale } from "@/i18n/config";
import type { SpecialtyServicesContent } from "@/types/content";

interface SpecialtyServicesSectionProps {
  content: Pick<SpecialtyServicesContent, "cards" | "description" | "title">;
  locale: Locale;
}

export function SpecialtyServicesSection({
  content,
  locale,
}: SpecialtyServicesSectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_30%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-semibold text-gold text-xs uppercase tracking-[0.28em]">
              الهرم الذهبي
            </p>
            <h2 className="mt-3 font-bold text-2xl text-white tracking-tight sm:text-3xl">
              {content.title}
            </h2>
            <div className="mt-4 h-1 w-14 rounded-full bg-gold" />
            <p className="mt-5 max-w-2xl text-sm text-white/75 leading-relaxed sm:text-base">
              {content.description}
            </p>
          </div>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
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
