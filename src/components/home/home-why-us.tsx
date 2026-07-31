import type { HomeContent } from "@/types/content";

interface HomeWhyUsProps {
  content: HomeContent["whyUs"];
}

export function HomeWhyUs({ content }: HomeWhyUsProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="order-2 space-y-4 lg:order-1">
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-[4/5] rounded-lg bg-navy/5">
              <div className="flex h-full items-center justify-center p-2 text-center text-navy/40 text-xs">
                Image
              </div>
            </div>
            <div className="mt-6 aspect-[4/5] rounded-lg bg-navy/10">
              <div className="flex h-full items-center justify-center p-2 text-center text-navy/40 text-xs">
                Image
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="font-semibold text-navy text-xl leading-snug sm:text-2xl md:text-3xl">
            {content.title}
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-gold" />
          <p className="mt-4 font-medium text-navy/80 text-sm">
            {content.expectLabel}
          </p>
          <ul className="mt-3 space-y-2.5">
            {content.items.map((item) => (
              <li
                className="flex gap-2 text-navy/80 text-sm sm:text-base"
                key={item}
              >
                <span aria-hidden className="font-semibold text-gold">
                  ›
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
