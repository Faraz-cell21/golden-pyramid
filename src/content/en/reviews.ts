import type { ReviewItem, ReviewsContent } from "@/types/content";

const names = [
  "Omar H.",
  "Sara M.",
  "Khalid A.",
  "Layla R.",
  "Yousef N.",
  "Fatima S.",
  "Hassan K.",
  "Noor A.",
  "Majid B.",
  "Amira T.",
  "Rashid F.",
  "Huda L.",
  "Tariq Z.",
  "Mariam Q.",
  "Saeed J.",
  "Reem D.",
  "Nasser W.",
  "Aisha P.",
  "Hamdan C.",
  "Lina G.",
  "Faisal V.",
  "Dana E.",
  "Bader M.",
  "Salma H.",
  "Zayed I.",
  "Noura K.",
  "Adel O.",
  "Rania U.",
  "Mansoor S.",
  "Yasmin A.",
  "Jassim R.",
  "Hind F.",
  "Waleed T.",
  "Shamma N.",
  "Ibrahim L.",
  "Maya B.",
  "Sultan D.",
  "Farah Q.",
  "Eissa J.",
  "Dalia W.",
  "Thani C.",
  "Hessa G.",
  "Saif V.",
  "Latifa E.",
  "Rashed M.",
] as const;

const locations = [
  "Sharjah, UAE",
  "Sharjah, UAE",
  "Dubai, UAE",
  "Sharjah, UAE",
  "Ajman, UAE",
  "Sharjah, UAE",
  "Abu Dhabi, UAE",
  "Sharjah, UAE",
  "Dubai, UAE",
  "Sharjah, UAE",
] as const;

const bodies = [
  "Clear explanation before any work started, fair pricing, and my car felt better on the road right away.",
  "They found the issue quickly and kept me updated. No pressure to buy extras I did not need.",
  "Professional team and clean workshop. Booking was easy and the handover was smooth.",
  "Good communication in Arabic and English. I appreciated the honest advice on what could wait.",
  "Excellent service for my European car. Diagnostics were thorough and the repair quality was clear.",
  "Transparent estimate and on-time delivery. I will bring my family cars here again.",
  "Friendly staff, modern tools, and careful workmanship. Highly recommended garage in Sharjah.",
  "They fixed the AC and electrical issue in one visit. Fast turnaround without cutting corners.",
  "Honest team that explained every step. Pricing felt fair for genuine parts and skilled labor.",
  "Great experience from drop-off to pickup. My SUV drives smoother than before.",
  "Bodywork and paint came out clean and consistent. Happy with the finish and communication.",
  "Quick tire and alignment service with clear recommendations. Will return for routine care.",
  "Specialists who understand luxury brands. They diagnosed the fault correctly the first time.",
  "Very organized workshop and polite technicians. I felt confident leaving my car with them.",
  "Fair prices and no surprises on the final invoice. Quality work and respectful service.",
] as const;

function buildItems(): ReviewItem[] {
  return names.map((name, index) => ({
    body: bodies[index % bodies.length],
    location: locations[index % locations.length],
    name,
    rating: index % 9 === 0 ? 4 : 5,
  }));
}

export const reviews: ReviewsContent = {
  description:
    "Customer reviews for الهرم الذهبي car garage in Sharjah — real feedback on repairs, estimates, and service. Book by call or WhatsApp.",
  items: buildItems(),
  title: "Customer Reviews | Sharjah Car Garage",
};
