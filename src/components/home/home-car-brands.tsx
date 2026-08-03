import { BrandSectionBackdrop } from "@/components/shared/brand-section-backdrop";
import { CarBrandsCarousel } from "@/components/shared/car-brands-carousel";
import { Reveal } from "@/components/shared/reveal";
import { SectionPageLink } from "@/components/shared/section-page-link";
import { routes } from "@/config/routes";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/utils";
import type { CarBrandCard, HomeCarBrandsContent } from "@/types/content";

interface HomeCarBrandsProps {
  cards: CarBrandCard[];
  content: HomeCarBrandsContent;
  locale: Locale;
}

export function HomeCarBrands({ cards, content, locale }: HomeCarBrandsProps) {
  return (
    <BrandSectionBackdrop>
      <Reveal>
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <p className="font-semibold text-gold text-xs uppercase tracking-[0.28em]">
            الهرم الذهبي
          </p>
          <h2 className="mt-3 font-bold text-2xl text-white tracking-tight sm:text-3xl md:text-4xl">
            {content.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gold" />
          <p className="mx-auto mt-5 max-w-2xl text-sm text-white/80 leading-relaxed sm:text-base">
            {content.description}
          </p>
        </div>
      </Reveal>

      <CarBrandsCarousel cards={cards} compact locale={locale} />

      <SectionPageLink
        className="mt-10 [&_a]:border-gold [&_a]:bg-gold-soft [&_a]:text-navy [&_a]:hover:bg-gold-soft"
        href={localizedPath(locale, routes.cars)}
        label={content.viewAllLabel}
      />
    </BrandSectionBackdrop>
  );
}
