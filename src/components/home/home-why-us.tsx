import Image from "next/image";
import type { HomeContent } from "@/types/content";

interface HomeWhyUsProps {
  content: HomeContent["whyUs"];
}

const whyUsImages = [
  {
    alt: "Technician inspecting a Mercedes G-Class on a lift",
    className: "start-0 top-0 z-10 h-[62%] w-[64%]",
    src: "/images/Home page/g500-exhaust-leak-1.png",
  },
  {
    alt: "Vehicles on lifts in the workshop",
    className: "end-0 top-[14%] z-20 h-[58%] w-[60%]",
    src: "/images/Home page/impact-cars.jpg",
  },
  {
    alt: "Mercedes sedan with open hood in the workshop",
    className: "bottom-0 start-[16%] z-30 h-[52%] w-[66%]",
    src: "/images/Home page/auto-mechanic-fort-collins-360.webp",
  },
] as const;

export function HomeWhyUs({ content }: HomeWhyUsProps) {
  return (
    <section className="relative overflow-hidden">
      <Image
        alt=""
        aria-hidden
        className="scale-105 object-cover blur-[2px]"
        fill
        sizes="100vw"
        src="/images/Home page/final-bg.jpeg"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-black/75"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-[5/6] w-full max-w-lg lg:max-w-none">
            {whyUsImages.map((image) => (
              <div
                className={`absolute overflow-hidden bg-navy/5 ${image.className}`}
                key={image.src}
              >
                <Image
                  alt={image.alt}
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 70vw, 420px"
                  src={image.src}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
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
        </div>
      </div>
    </section>
  );
}
