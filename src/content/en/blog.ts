import type { BlogContent } from "@/types/content";

export const blog: BlogContent = {
  description:
    "Practical tips and garage updates from Golden Pyramid. Simple posts for drivers who want clear advice.",
  emptyMessage: "No blog posts yet.",
  posts: [
    {
      body: "Welcome to Golden Pyramid. This space will share practical car-care tips, seasonal reminders, and workshop updates in plain language. Check back for short guides that help you keep your vehicle reliable without the jargon.",
      slug: "welcome-to-golden-pyramid",
      title: "Welcome to Golden Pyramid",
    },
    {
      body: "Regular oil changes protect the engine and help your car stay efficient. Follow your service schedule, watch for dark oil or unusual noise, and ask us if you are unsure which oil grade fits your vehicle.",
      slug: "why-oil-changes-matter",
      title: "Why oil changes still matter",
    },
    {
      body: "Brake feel should stay firm and predictable. If you notice longer stopping distance, vibration, or a soft pedal, book a check early. Timely brake service is safer and often less expensive than waiting.",
      slug: "signs-your-brakes-need-attention",
      title: "Signs your brakes need attention",
    },
  ],
  title: "Blog",
};
