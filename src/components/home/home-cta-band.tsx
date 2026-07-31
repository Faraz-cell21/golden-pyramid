import { contactConfig } from "@/config/contact";
import { whatsappLink } from "@/content/shared/socials";
import type { Dictionary } from "@/i18n/dictionaries";
import type { HomeContent } from "@/types/content";

interface HomeCtaBandProps {
  content: HomeContent["ctaBand"];
  ui: Pick<Dictionary["ui"], "callNow" | "messageWhatsapp">;
}

export function HomeCtaBand({ content, ui }: HomeCtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,#0b1f3acc,#071525f2)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 sm:py-14">
        <h2 className="mx-auto max-w-3xl font-semibold text-xl leading-snug sm:text-2xl md:text-3xl">
          {content.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75 leading-relaxed sm:text-base">
          {content.body}
        </p>

        <p className="mt-8 font-medium text-sm text-white/80">
          {content.modelsLabel}
        </p>

        <div className="mx-auto mt-4 max-w-4xl rounded-xl bg-white/95 p-4 text-navy sm:p-6">
          <ul className="grid grid-cols-1 gap-6 text-start sm:grid-cols-3 sm:gap-4">
            {content.modelGroups.map((group) => (
              <li key={group.title}>
                <h3 className="font-semibold text-sm sm:text-base">
                  {group.title}
                </h3>
                <ul className="mt-2 space-y-1 text-navy/70 text-sm">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md bg-white px-4 font-medium text-navy text-sm"
            href={contactConfig.phoneHref}
          >
            {ui.callNow}: {contactConfig.phoneDisplay}
          </a>
          <a
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md border border-white px-4 font-medium text-sm text-white"
            href={whatsappLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            {ui.messageWhatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
