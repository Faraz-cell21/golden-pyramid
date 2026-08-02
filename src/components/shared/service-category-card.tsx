import Image from "next/image";

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
    <li className="flex flex-col overflow-hidden rounded-xl border border-navy/10 bg-white text-center">
      <div className="relative h-48 w-full shrink-0 overflow-hidden bg-navy/5 sm:h-52">
        <Image
          alt={category.imageAlt}
          className="object-cover object-center"
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, 33vw"
          src={category.image}
        />
      </div>
      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
        <Heading className="font-semibold text-base text-navy sm:text-lg">
          {category.title}
        </Heading>
        <ul className="mt-4 w-full space-y-2">
          {category.items.map((item) => (
            <li className="text-navy/70 text-sm leading-relaxed" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
