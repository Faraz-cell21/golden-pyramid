import type { ReviewsContent } from "@/types/content";

const STAR_KEYS = ["one", "two", "three", "four", "five"] as const;

interface ReviewsViewProps {
  content: ReviewsContent;
}

export function ReviewsView({ content }: ReviewsViewProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {content.items.map((review) => (
            <li
              className="flex flex-col rounded-xl border border-navy/10 bg-navy/[0.02] p-5 sm:p-6"
              key={`${review.name}-${review.body.slice(0, 24)}`}
            >
              <p className="flex gap-1 text-navy" role="img">
                <span className="sr-only">{`${review.rating} out of 5`}</span>
                {STAR_KEYS.map((starKey, star) => (
                  <span
                    aria-hidden="true"
                    className={
                      star < review.rating ? "text-navy" : "text-navy/20"
                    }
                    key={`${review.name}-${starKey}`}
                  >
                    ★
                  </span>
                ))}
              </p>
              <p className="mt-3 flex-1 text-navy/80 text-sm leading-relaxed sm:text-base">
                "{review.body}"
              </p>
              <p className="mt-4 font-semibold text-navy text-sm">
                {review.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
