import { SectionPageLink } from "@/components/shared/section-page-link";
import { ServiceCategoryCard } from "@/components/shared/service-category-card";
import { routes } from "@/config/routes";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/utils";
import type { HomeContent } from "@/types/content";

interface HomeServiceCategoriesProps {
  content: HomeContent["serviceCategories"];
  locale: Locale;
}

export function HomeServiceCategories({
  content,
  locale,
}: HomeServiceCategoriesProps) {
  return (
    <section className="bg-navy/[0.03]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="mb-6 text-center sm:mb-8">
          <h2 className="font-semibold text-navy text-xl sm:text-2xl md:text-3xl">
            {content.title}
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gold" />
          <p className="mx-auto mt-4 max-w-3xl text-navy/70 text-sm leading-relaxed sm:text-base">
            {content.description}
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {content.items.map((category) => (
            <ServiceCategoryCard category={category} key={category.title} />
          ))}
        </ul>

        <SectionPageLink
          href={localizedPath(locale, routes.services)}
          label={content.viewAllLabel}
        />
      </div>
    </section>
  );
}
