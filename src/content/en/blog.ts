import type { BlogContent } from "@/types/content";

export const blog: BlogContent = {
  description:
    "Practical car-care tips, seasonal reminders, and workshop updates from the Golden Pyramid team.",
  emptyMessage: "No blog posts yet.",
  posts: [
    {
      body: "Fresh oil keeps your engine cool, clean, and protected. Over time oil breaks down and picks up metal particles that increase wear. Stick to your service schedule, choose the grade recommended for your vehicle, and watch for warning lights, dark oil, or new engine noise. At Golden Pyramid we use quality oils and filters, then check for leaks so your next drive stays reliable.",
      excerpt:
        "Regular oil changes protect the engine, improve efficiency, and help you avoid expensive repairs.",
      image: "/images/blog/oil-change.jpg",
      imageAlt: "Fresh engine oil being poured during a service",
      slug: "why-oil-changes-matter",
      title: "Why oil changes still matter",
    },
    {
      body: "Brakes should feel firm and predictable every time you stop. Longer stopping distance, pedal vibration, grinding sounds, or a soft pedal are early signs that pads, discs, or fluid need attention. Waiting often means more parts and higher cost. Book a brake inspection early and we will check thickness, hydraulic condition, and road feel so you leave safer.",
      excerpt:
        "Spot soft pedals, vibration, and longer stopping distances before they become a safety risk.",
      image: "/images/blog/brakes.jpg",
      imageAlt: "Brake disc and caliper during a brake service",
      slug: "signs-your-brakes-need-attention",
      title: "Signs your brakes need attention",
    },
    {
      body: "UAE summers push car air conditioning hard. Weak cooling, strange smells, or uneven airflow often point to low refrigerant, a dirty cabin filter, or compressor issues. A proper AC check measures pressure, inspects belts and condensers, and restores cold air before peak heat. Keep cabin filters fresh and schedule service before summer traffic becomes uncomfortable.",
      excerpt:
        "Keep cabin air cold and clean with timely AC checks before the hottest months arrive.",
      image: "/images/blog/ac-service.jpg",
      imageAlt: "Car air conditioning service with diagnostic gauges",
      slug: "summer-ac-service-tips",
      title: "Summer AC service tips for UAE drivers",
    },
    {
      body: "Tires are your only contact with the road, so pressure and tread depth matter every week. Underinflation wears edges and raises heat risk, while worn tread reduces grip in rain. Check pressure cold, rotate on schedule, and replace tires before the wear bars show. We can measure tread, balance wheels, and advise when alignment will save your next set.",
      excerpt:
        "Simple tire checks improve safety, fuel use, and the life of every set of tires you buy.",
      image: "/images/blog/tires.jpg",
      imageAlt: "Tire tread depth being measured in the workshop",
      slug: "tire-pressure-and-tread-guide",
      title: "Tire pressure and tread guide",
    },
    {
      body: "A weak battery often shows up as slow cranking, flickering lights, or electronics that reset. Heat in the UAE shortens battery life, especially if you take short trips. Testing voltage and charging health catches problems before you get stranded. If your battery is older than three to four years, ask us for a health check during your next visit.",
      excerpt:
        "Slow starts and warning lights can mean your battery needs testing before it fails.",
      image: "/images/blog/battery.jpg",
      imageAlt: "Car battery being tested with diagnostic equipment",
      slug: "car-battery-warning-signs",
      title: "Car battery warning signs to watch",
    },
    {
      body: "Before a long drive, a short inspection can prevent roadside trouble. We check fluids, belts, brakes, tires, lights, and battery condition, then road-test for unusual noise or vibration. Pre-travel care is especially useful for desert trips and family journeys. Book a pre-travel inspection and leave with a clear report of what is ready and what should wait.",
      excerpt:
        "A quick workshop inspection before a long trip helps you travel with fewer surprises.",
      image: "/images/blog/inspection.jpg",
      imageAlt: "Vehicle on a lift during a pre-travel inspection",
      slug: "pre-travel-car-inspection",
      title: "Pre-travel car inspection checklist",
    },
  ],
  title: "Blog",
};
