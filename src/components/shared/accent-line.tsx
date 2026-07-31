import { cn } from "@/lib/utils";

interface AccentLineProps {
  className?: string;
}

/** Brand accent bar. Prefer this over hard-coded colors for future theme tweaks. */
export function AccentLine({ className }: AccentLineProps) {
  return (
    <div className={cn("h-1 w-12 rounded-full bg-gold sm:w-14", className)} />
  );
}
