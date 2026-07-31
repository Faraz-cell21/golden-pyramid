import { whatsappLink } from "@/content/shared/socials";
import { cn } from "@/lib/utils";

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
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md bg-navy px-4 py-2.5 font-medium text-sm text-white transition-opacity hover:opacity-90",
        fullWidth && "w-full",
        className
      )}
      href={whatsappLink}
      rel="noopener noreferrer"
      target="_blank"
    >
      {label}
    </a>
  );
}
