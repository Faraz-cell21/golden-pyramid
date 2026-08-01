import { AccentLine } from "@/components/shared/accent-line";
import { CrossfadeImages } from "@/components/shared/crossfade-images";
import { heroCrossfadeImages } from "@/content/shared/visual-assets";

interface PageHeroProps {
  description?: string;
  title: string;
}

export function PageHero({ description, title }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden text-white">
      <CrossfadeImages
        className="object-cover object-center brightness-110 contrast-105 saturate-125"
        images={heroCrossfadeImages}
        intervalMs={4000}
        priority
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-navy/78 via-navy/58 to-navy/35"
      />
      <div aria-hidden className="absolute inset-0 bg-black/10" />

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 md:py-14">
        <h1 className="max-w-3xl font-extrabold text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <AccentLine className="mt-3 sm:mt-4" />
        {description ? (
          <p className="mt-4 max-w-2xl font-semibold text-base text-white/95 leading-relaxed sm:mt-5 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
