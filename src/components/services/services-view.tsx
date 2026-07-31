import { ServiceCategoryCard } from "@/components/shared/service-category-card";
import type { ServicesContent } from "@/types/content";

interface ServicesViewProps {
  content: ServicesContent;
}

export function ServicesView({ content }: ServicesViewProps) {
  return (
    <section className="bg-navy/[0.03]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {content.categories.map((category) => (
            <ServiceCategoryCard
              category={category}
              headingLevel="h2"
              key={category.title}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
