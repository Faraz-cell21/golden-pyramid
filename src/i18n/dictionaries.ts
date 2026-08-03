import { about as aboutAr } from "@/content/ar/about";
import { blog as blogAr } from "@/content/ar/blog";
import { carBrands as carBrandsAr } from "@/content/ar/car-brands";
import { home as homeAr } from "@/content/ar/home";
import { navigation as navigationAr } from "@/content/ar/navigation";
import { notFound as notFoundAr } from "@/content/ar/not-found";
import { privacyPolicy as privacyPolicyAr } from "@/content/ar/privacy-policy";
import { reviews as reviewsAr } from "@/content/ar/reviews";
import { services as servicesAr } from "@/content/ar/services";
import { specialtyServices as specialtyServicesAr } from "@/content/ar/specialty-services";
import { termsAndConditions as termsAndConditionsAr } from "@/content/ar/terms-and-conditions";
import { about as aboutEn } from "@/content/en/about";
import { blog as blogEn } from "@/content/en/blog";
import { carBrands as carBrandsEn } from "@/content/en/car-brands";
import { home as homeEn } from "@/content/en/home";
import { navigation as navigationEn } from "@/content/en/navigation";
import { notFound as notFoundEn } from "@/content/en/not-found";
import { privacyPolicy as privacyPolicyEn } from "@/content/en/privacy-policy";
import { reviews as reviewsEn } from "@/content/en/reviews";
import { services as servicesEn } from "@/content/en/services";
import { specialtyServices as specialtyServicesEn } from "@/content/en/specialty-services";
import { termsAndConditions as termsAndConditionsEn } from "@/content/en/terms-and-conditions";
import type { Locale } from "@/i18n/config";

const dictionaries = {
  ar: {
    about: aboutAr,
    blog: blogAr,
    carBrands: carBrandsAr,
    home: homeAr,
    navigation: navigationAr,
    notFound: notFoundAr,
    privacyPolicy: privacyPolicyAr,
    reviews: reviewsAr,
    services: servicesAr,
    specialtyServices: specialtyServicesAr,
    termsAndConditions: termsAndConditionsAr,
    ui: {
      backToBlog: "العودة إلى المدونة",
      backToCars: "العودة إلى أنواع السيارات",
      backToServices: "العودة إلى الخدمات",
      backToTop: "العودة إلى الأعلى",
      callNow: "اتصل الآن",
      close: "إغلاق",
      contactWhatsapp: "تواصل عبر واتساب",
      findUs: "موقعنا",
      languagePromptBody: "هل تفضل متابعة التصفح باللغة العربية؟",
      languagePromptConfirm: "العربية",
      languagePromptDismiss: "الاستمرار بالإنجليزية",
      languagePromptTitle: "اختر اللغة",
      loadMore: "عرض المزيد",
      locationLabel: "الموقع",
      menu: "القائمة",
      messageWhatsapp: "راسلنا عبر واتساب الآن",
      readMore: "اقرأ المزيد",
      rightsReserved: "جميع الحقوق محفوظة",
      social: {
        facebook: "فيسبوك",
        instagram: "إنستغرام",
        tiktok: "تيك توك",
        whatsapp: "واتساب",
      },
      socialLabel: "تواصل معنا",
    },
  },
  en: {
    about: aboutEn,
    blog: blogEn,
    carBrands: carBrandsEn,
    home: homeEn,
    navigation: navigationEn,
    notFound: notFoundEn,
    privacyPolicy: privacyPolicyEn,
    reviews: reviewsEn,
    services: servicesEn,
    specialtyServices: specialtyServicesEn,
    termsAndConditions: termsAndConditionsEn,
    ui: {
      backToBlog: "Back to blog",
      backToCars: "Back to car brands",
      backToServices: "Back to services",
      backToTop: "Back to top",
      callNow: "Call now",
      close: "Close",
      contactWhatsapp: "Contact on WhatsApp",
      findUs: "Find us",
      languagePromptBody: "Would you like to continue in Arabic?",
      languagePromptConfirm: "Arabic",
      languagePromptDismiss: "Continue in English",
      languagePromptTitle: "Choose language",
      loadMore: "Load more",
      locationLabel: "Location",
      menu: "Menu",
      messageWhatsapp: "Message us on WhatsApp now",
      readMore: "Read more",
      rightsReserved: "All rights reserved",
      social: {
        facebook: "Facebook",
        instagram: "Instagram",
        tiktok: "TikTok",
        whatsapp: "WhatsApp",
      },
      socialLabel: "Connect with us",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getBlogPost(locale: Locale, slug: string) {
  return getDictionary(locale).blog.posts.find((post) => post.slug === slug);
}

export function getSpecialtyService(locale: Locale, slug: string) {
  return getDictionary(locale).specialtyServices.pages.find(
    (page) => page.slug === slug
  );
}

export function getCarBrand(locale: Locale, slug: string) {
  return getDictionary(locale).carBrands.pages.find(
    (page) => page.slug === slug
  );
}
