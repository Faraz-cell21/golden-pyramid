import { LocationMap } from "@/components/shared/location-map";

interface FindUsSectionProps {
  title: string;
}

export function FindUsSection({ title }: FindUsSectionProps) {
  return (
    <section className="relative overflow-hidden border-gold/35 border-t bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,163,90,0.28),_transparent_48%),radial-gradient(circle_at_bottom_left,_rgba(228,208,160,0.14),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(22,50,90,0.55),_transparent_45%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[length:32px_32px] bg-[linear-gradient(rgba(197,163,90,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(197,163,90,0.22)_1px,transparent_1px)] opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <h2 className="text-center font-bold text-2xl text-white sm:text-3xl">
          {title}
        </h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gold" />
        <LocationMap className="mt-6" title={title} />
      </div>
    </section>
  );
}
