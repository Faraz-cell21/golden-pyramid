import { redirect } from "next/navigation";

import { defaultLocale } from "@/i18n/config";

/** Fallback when proxy does not run (e.g. some static exports). */
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
