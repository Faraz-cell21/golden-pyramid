import type { AboutContent } from "@/types/content";

interface AboutViewProps {
  content: AboutContent;
}

export function AboutView({ content }: AboutViewProps) {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h2 className="font-semibold text-navy text-xl sm:text-2xl">
              {content.storyTitle}
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-gold" />
            <div className="mt-5 space-y-4">
              {content.story.map((paragraph) => (
                <p
                  className="text-navy/75 text-sm leading-relaxed sm:text-base"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="aspect-[4/3] rounded-xl bg-navy/5">
            <div className="flex h-full items-center justify-center p-4 text-center text-navy/40 text-sm">
              Workshop image placeholder
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy/5">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <h2 className="font-semibold text-navy text-xl sm:text-2xl">
            {content.valuesTitle}
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-gold" />
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {content.values.map((value) => (
              <li
                className="rounded-xl border border-navy/10 bg-white p-5 sm:p-6"
                key={value.title}
              >
                <h3 className="font-semibold text-base text-navy">
                  {value.title}
                </h3>
                <p className="mt-2 text-navy/70 text-sm leading-relaxed">
                  {value.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <ul className="space-y-3">
            {content.highlights.map((item) => (
              <li
                className="flex gap-3 border-navy/10 border-b pb-3 text-navy/80 text-sm last:border-b-0 sm:text-base"
                key={item}
              >
                <span
                  aria-hidden
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
