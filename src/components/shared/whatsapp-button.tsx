import { whatsappLink } from "@/content/shared/socials";
import { cn } from "@/lib/utils";

import { whatsappCtaClassName } from "./contact-cta-buttons";

interface WhatsappButtonProps {
  className?: string;
  fullWidth?: boolean;
  label: string;
}

export function WhatsappButton({
  className,
  fullWidth = false,
  label,
}: WhatsappButtonProps) {
  return (
    <a
      className={cn(whatsappCtaClassName, fullWidth && "w-full", className)}
      href={whatsappLink}
      rel="noopener noreferrer"
      target="_blank"
    >
      {label}
    </a>
  );
}
