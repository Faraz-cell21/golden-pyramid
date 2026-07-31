import type { LegalPageContent } from "@/types/content";

interface LegalDocumentViewProps {
  content: LegalPageContent;
}

export function LegalDocumentView({ content }: LegalDocumentViewProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
        <p className="mb-8 text-navy/55 text-sm">{content.lastUpdatedLabel}</p>

        <div className="space-y-8">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-semibold text-lg text-navy sm:text-xl">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p
                    className="text-navy/80 text-sm leading-relaxed sm:text-base sm:leading-7"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.items && section.items.length > 0 ? (
                <ul className="mt-3 space-y-2">
                  {section.items.map((item) => (
                    <li
                      className="flex gap-2 text-navy/80 text-sm leading-relaxed sm:text-base"
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
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
