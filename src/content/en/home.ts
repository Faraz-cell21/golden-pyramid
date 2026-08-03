import { services } from "@/content/en/services";
import { specialtyServices } from "@/content/en/specialty-services";
import type { HomeContent } from "@/types/content";

export const home: HomeContent = {
  carBrands: {
    description:
      "Mercedes, BMW, Audi, Porsche, Range Rover, Bentley, and more. Specialist care for the brands drivers search for most.",
    title: "Car brands we service",
    viewAllLabel: "View all car brands",
  },
  ctaBand: {
    body: "Call or WhatsApp الهرم الذهبي for a clear estimate and trusted garage care.",
    title: "Book service with الهرم الذهبي today",
    trustPoints: [
      "All major car brands",
      "Clear estimates",
      "Fast WhatsApp support",
    ],
    vehiclesLine: "We service everyday cars, SUVs, and specialty vehicles.",
  },
  description:
    "Professional automotive care from الهرم الذهبي. Clear estimates, skilled technicians, and trusted garage service.",
  hero: {
    body: "From routine maintenance to complex repairs, الهرم الذهبي keeps your car running with skilled technicians, clear estimates, and modern diagnostics.",
    features: [
      "Maintenance and care for all major car brands",
      "Experienced, trained technicians",
      "Modern diagnostic equipment",
      "Friendly customer support",
    ],
    reviewPlatforms: [
      {
        countLabel: "See what our customers say",
        platform: "google",
        platformLabel: "Google",
        rating: "4.3",
        summary: "Excellent reviews from drivers who trust our garage",
      },
      {
        countLabel: "Loved by our community",
        platform: "facebook",
        platformLabel: "Facebook",
        rating: "4.7",
        summary: "Five-star feedback from happy customers",
      },
      {
        countLabel: "Trusted service rating",
        platform: "trustpilot",
        platformLabel: "Trustpilot",
        rating: "4.2",
        summary: "Outstanding Trustpilot score for garage care",
      },
    ],
    socialIntro: "Find us on social:",
    title: "Your trusted garage for professional auto care",
  },
  latestBlog: {
    title: "Latest from the blog",
    viewAllLabel: "View all blog posts",
  },
  reviewsShowcase: {
    title: "Customer Reviews",
    viewAllLabel: "View all reviews",
  },
  serviceCategories: {
    description: services.description,
    items: services.categories,
    title: services.title,
    viewAllLabel: "View all services",
  },
  specialtyServices: {
    cards: specialtyServices.cards,
    description: specialtyServices.description,
    title: specialtyServices.title,
  },
  title: "Home",
  videoShowcase: {
    body: "A look inside our workshop: modern equipment, careful workmanship, and real cars in progress.",
    sideEnd: {
      paragraphs: [
        "Every visit starts with a careful inspection. We listen to what you noticed on the road, then confirm the issue with proper diagnostics before recommending any work.",
        "You receive a clear estimate first, so there are no surprises later. We explain what is essential now and what can wait, helping you choose with confidence.",
        "During the job, our team uses quality parts suited to your vehicle and keeps the bay organized, clean, and focused. Details matter, even on jobs that look simple from the outside.",
        "Before handover, we complete finishing checks so your car feels right again: smooth, safe, and ready for daily driving in Sharjah and beyond.",
        "After service, we remain available if you have questions. Precision is not only in the repair; it is also in honest communication from arrival to pickup.",
      ],
      title: "Precision you can trust",
    },
    sideStart: {
      paragraphs: [
        "الهرم الذهبي is built as a complete workshop, not a temporary service corner. From the moment a car enters the bay, the space is prepared for serious automotive care.",
        "Hydraulic lifts, specialist tools, and clean workstations let our technicians reach every area safely: mechanical, electrical, body, paint, AC, and wheels.",
        "The facility stays organized so each job can move with focus. That order is what turns complex repairs into calm, controlled progress you can rely on.",
        "Our technicians work on real vehicles every day, combining experience with modern diagnostic equipment to find issues accurately and fix them with care.",
        "This is the environment behind the video: bright, practical, and dedicated to quality craftsmanship that protects your car and your time.",
      ],
      title: "A workshop built for quality",
    },
    title: "Inside our garage",
  },
  whyUs: {
    expectLabel: "You can expect:",
    items: [
      "Professional technicians and brand specialists",
      "Transparent estimates and expert advice",
      "Quality parts and careful workmanship",
      "A modern facility with up-to-date tools",
      "Clear communication from start to finish",
    ],
    title: "Why choose الهرم الذهبي for your car?",
    viewAllLabel: "About us",
  },
};
