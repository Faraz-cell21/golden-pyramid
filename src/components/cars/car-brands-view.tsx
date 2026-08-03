import { BrandSectionBackdrop } from "@/components/shared/brand-section-backdrop";
import { CarBrandsCarousel } from "@/components/shared/car-brands-carousel";
import type { Locale } from "@/i18n/config";
import type { CarBrandCard } from "@/types/content";

interface CarBrandsViewProps {
  cards: CarBrandCard[];
  locale: Locale;
}

export function CarBrandsView({ cards, locale }: CarBrandsViewProps) {
  return (
    <BrandSectionBackdrop contentClassName="py-10 sm:py-14">
      <CarBrandsCarousel cards={cards} compact={false} locale={locale} />
    </BrandSectionBackdrop>
  );
}
