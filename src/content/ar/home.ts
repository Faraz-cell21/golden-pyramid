import { services } from "@/content/ar/services";
import type { HomeContent } from "@/types/content";

export const home: HomeContent = {
  ctaBand: {
    body: "اتصل أو راسل جولدن بيراميد عبر واتساب للحصول على تقدير واضح وخدمة مرآب موثوقة.",
    title: "احجز خدمتك مع جولدن بيراميد اليوم",
    trustPoints: [
      "جميع العلامات التجارية الرئيسية",
      "تقديرات واضحة",
      "رد سريع عبر واتساب",
    ],
    vehiclesLine: "نخدم السيارات اليومية والدفع الرباعي والمركبات التخصصية.",
  },
  description:
    "رعاية سيارات احترافية من جولدن بيراميد. تقديرات واضحة وفنيون مهرة وخدمة مرآب موثوقة.",
  hero: {
    body: "من الصيانة الدورية إلى الإصلاحات المعقدة، تحافظ جولدن بيراميد على سيارتك بفنيين مهرة وتقديرات واضحة وتشخيص حديث.",
    features: [
      "صيانة ورعاية لمعظم العلامات التجارية",
      "فنيون ذوو خبرة وتدريب عالٍ",
      "أجهزة تشخيص حديثة",
      "دعم عملاء ودود",
    ],
    reviewPlatforms: [
      {
        countLabel: "اطلع على آراء عملائنا",
        platform: "google",
        platformLabel: "Google",
        rating: "٥.٠",
        summary: "تقييمات ممتازة من سائقين يثقون بمرآبنا",
      },
      {
        countLabel: "محبوب من مجتمعنا",
        platform: "facebook",
        platformLabel: "Facebook",
        rating: "٥.٠",
        summary: "تقييمات خمس نجوم من عملاء سعداء",
      },
      {
        countLabel: "تقييم خدمة موثوق",
        platform: "trustpilot",
        platformLabel: "Trustpilot",
        rating: "٥.٠",
        summary: "تقييم متميز على Trustpilot لخدمة المرآب",
      },
    ],
    socialIntro: "تواصل معنا عبر:",
    title: "مرآبك الموثوق لرعاية السيارات باحترافية",
  },
  latestBlog: {
    title: "أحدث مقالات المدونة",
    viewAllLabel: "عرض كل المقالات",
  },
  serviceCategories: {
    description: services.description,
    items: services.categories,
    title: services.title,
  },
  title: "الرئيسية",
  whyUs: {
    expectLabel: "يمكنك توقع:",
    items: [
      "فنيون محترفون ومتخصصون",
      "تقديرات شفافة ونصائح خبراء",
      "قطع ذات جودة وعمل دقيق",
      "منشأة حديثة بأدوات متطورة",
      "تواصل واضح من البداية حتى النهاية",
    ],
    title: "لماذا تختار جولدن بيراميد لسيارتك؟",
  },
};
