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
        images={heroCrossfadeImages}
        intervalMs={6500}
        priority
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/85 to-navy/65"
      />
      <div aria-hidden className="absolute inset-0 bg-black/30" />

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 md:py-14">
        <h1 className="max-w-3xl font-bold text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl">
          {title}
        </h1>
        <AccentLine className="mt-3 sm:mt-4" />
        {description ? (
          <p className="mt-4 max-w-2xl text-sm text-white/85 leading-relaxed sm:mt-5 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
