import { CyclingImage } from "@/components/shared/cycling-image";
import { Reveal } from "@/components/shared/reveal";
import { whyUsCollageSlots } from "@/content/shared/visual-assets";
import type { HomeContent } from "@/types/content";

interface HomeWhyUsProps {
  content: HomeContent["whyUs"];
}

export function HomeWhyUs({ content }: HomeWhyUsProps) {
  return (
    <section className="relative overflow-hidden">
      <CyclingImage
        alt=""
        className="scale-105 object-cover blur-[2px]"
        images={[
          "/images/generated/hero-evening-bays.webp",
          "/images/generated/hero-workshop-lift.webp",
        ]}
        intervalMs={7000}
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-black/75"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-[5/6] w-full max-w-lg lg:max-w-none">
            {whyUsCollageSlots.map((slot, index) => (
              <Reveal
                className={`absolute overflow-hidden bg-navy/5 shadow-black/20 shadow-lg ring-1 ring-white/10 ${slot.className}`}
                delayMs={index * 140}
                key={slot.className}
              >
                <div className="absolute inset-0">
                  <CyclingImage
                    alt={slot.alt}
                    images={slot.images}
                    intervalMs={slot.intervalMs}
                    sizes="(max-width: 1024px) 70vw, 420px"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="order-1 lg:order-2" delayMs={80}>
          <h2 className="font-bold text-2xl text-white leading-snug sm:text-3xl md:text-4xl">
            {content.title}
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-gold" />
          <p className="mt-4 font-semibold text-base text-white sm:text-lg">
            {content.expectLabel}
          </p>
          <ul className="mt-3 space-y-3">
            {content.items.map((item) => (
              <li
                className="flex gap-2.5 font-semibold text-base text-white sm:text-lg"
                key={item}
              >
                <span aria-hidden className="font-bold text-gold">
                  ›
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
