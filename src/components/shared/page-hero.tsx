import { AccentLine } from "@/components/shared/accent-line";

interface PageHeroProps {
  description?: string;
  title: string;
}

export function PageHero({ description, title }: PageHeroProps) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 md:py-14">
        <h1 className="max-w-3xl font-semibold text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl">
          {title}
        </h1>
        <AccentLine className="mt-3 sm:mt-4" />
        {description ? (
          <p className="mt-4 max-w-2xl text-sm text-white/75 leading-relaxed sm:mt-5 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
