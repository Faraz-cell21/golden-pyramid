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
    <li className="group flex flex-col overflow-hidden rounded-xl border border-navy/10 bg-white text-start shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_16px_40px_rgba(11,31,58,0.12)]">
      <div className="relative h-52 w-full shrink-0 overflow-hidden bg-navy/5 sm:h-56">
        <Image
          alt={category.imageAlt}
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, 33vw"
          src={category.image}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/25 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <Heading className="font-bold text-lg text-white leading-snug sm:text-xl">
            {category.title}
          </Heading>
          <div className="mt-2 h-0.5 w-10 rounded-full bg-gold" />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
        <ul className="space-y-2.5">
          {category.items.map((item) => (
            <li
              className="flex gap-2.5 text-navy/75 text-sm leading-relaxed"
              key={item}
            >
              <span
                aria-hidden
                className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold"
              >
                <CheckIcon />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-2.5"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
