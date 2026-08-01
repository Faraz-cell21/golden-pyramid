import { ServiceCategoryIcon } from "@/components/shared/service-category-icon";
import type { ServiceCategory } from "@/types/content";

interface ServiceCategoryCardProps {
  category: ServiceCategory;
  headingLevel?: "h2" | "h3";
}

export function ServiceCategoryCard({
  category,
  headingLevel = "h3",
}: ServiceCategoryCardProps) {
  const Heading = headingLevel;

  return (
    <li className="flex flex-col items-center rounded-xl border border-navy/10 bg-white px-5 py-6 text-center sm:px-6 sm:py-8">
      <ServiceCategoryIcon name={category.icon} />
      <Heading className="mt-4 font-semibold text-base text-navy sm:mt-5 sm:text-lg">
        {category.title}
      </Heading>
      <ul className="mt-4 w-full space-y-2">
        {category.items.map((item) => (
          <li className="text-navy/70 text-sm leading-relaxed" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
}
