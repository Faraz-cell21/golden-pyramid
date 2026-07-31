import { services } from "@/content/en/services";
import type { HomeContent } from "@/types/content";

export const home: HomeContent = {
  ctaBand: {
    body: "Call or WhatsApp Golden Pyramid for a clear estimate and trusted garage care.",
    title: "Book service with Golden Pyramid today",
    trustPoints: [
      "All major car brands",
      "Clear estimates",
      "Fast WhatsApp support",
    ],
    vehiclesLine: "We service everyday cars, SUVs, and specialty vehicles.",
  },
  description:
    "Professional automotive care from Golden Pyramid. Clear estimates, skilled technicians, and trusted garage service.",
  hero: {
    body: "From routine maintenance to complex repairs, Golden Pyramid keeps your car running with skilled technicians, clear estimates, and modern diagnostics.",
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
        rating: "5.0",
        summary: "Excellent reviews from drivers who trust our garage",
      },
      {
        countLabel: "Loved by our community",
        platform: "facebook",
        platformLabel: "Facebook",
        rating: "5.0",
        summary: "Five-star feedback from happy customers",
      },
      {
        countLabel: "Trusted service rating",
        platform: "trustpilot",
        platformLabel: "Trustpilot",
        rating: "5.0",
        summary: "Outstanding Trustpilot score for garage care",
      },
    ],
    socialIntro: "Find us on social:",
    title: "Your trusted garage for professional auto care",
  },
  latestBlog: {
    title: "Latest from the blog",
    viewAllLabel: "View all posts",
  },
  serviceCategories: {
    description: services.description,
    items: services.categories,
    title: services.title,
  },
  title: "Home",
  whyUs: {
    expectLabel: "You can expect:",
    items: [
      "Professional technicians and brand specialists",
      "Transparent estimates and expert advice",
      "Quality parts and careful workmanship",
      "A modern facility with up-to-date tools",
      "Clear communication from start to finish",
    ],
    title: "Why choose Golden Pyramid for your car?",
  },
};
