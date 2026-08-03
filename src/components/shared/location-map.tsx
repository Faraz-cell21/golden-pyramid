import { contactConfig } from "@/config/contact";
import { cn } from "@/lib/utils";

interface LocationMapProps {
  className?: string;
  title: string;
}

export function LocationMap({ className, title }: LocationMapProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <iframe
        allowFullScreen
        className="block h-64 w-full border-0 sm:h-80 md:h-[26rem]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={contactConfig.mapsEmbedUrl}
        title={title}
      />
    </div>
  );
}
