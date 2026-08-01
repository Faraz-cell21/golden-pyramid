import type { ReactNode } from "react";

import type { ServiceCategoryIconId } from "@/types/content";

interface ServiceCategoryIconProps {
  name: ServiceCategoryIconId;
}

const stroke = "#0b1f3a";
const accent = "#c5a35a";

export function ServiceCategoryIcon({ name }: ServiceCategoryIconProps) {
  switch (name) {
    case "mechanical":
      return <MechanicalIcon />;
    case "electrical":
      return <ElectricalIcon />;
    case "body":
      return <BodyIcon />;
    case "ac":
      return <AcIcon />;
    case "tires":
      return <TiresIcon />;
    case "extra":
      return <ExtraIcon />;
    default:
      return null;
  }
}

function IconSvg({ children }: { children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      className="size-20 sm:size-24"
      fill="none"
      focusable="false"
      viewBox="0 0 64 64"
    >
      <title>Service icon</title>
      {children}
    </svg>
  );
}

function MechanicalIcon() {
  return (
    <IconSvg>
      {/* Scissor lift */}
      <path
        d="M16 52h32M20 52V46h24v6M24 46l8-10 8 10M28 36h8"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      {/* Car body - gold accent */}
      <path d="M14 30c3-7 10-11 18-11s15 4 18 11v4H14v-4z" fill={accent} />
      <path d="M18 34h6v3H18zM40 34h6v3h-6z" fill={stroke} />
      <path
        d="M14 34h36"
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      {/* Windows */}
      <path
        d="M24 24h7v5h-9c.5-2 1.5-4 2-5zM33 24h7c.5 1 1.5 3 2 5h-9v-5z"
        fill="white"
        opacity="0.9"
      />
    </IconSvg>
  );
}

function ElectricalIcon() {
  return (
    <IconSvg>
      {/* Multimeter body */}
      <rect
        fill="white"
        height="30"
        rx="3"
        stroke={stroke}
        strokeWidth="2"
        width="22"
        x="21"
        y="10"
      />
      <rect fill={stroke} height="10" rx="1.5" width="14" x="25" y="14" />
      <circle cx="27" cy="30" fill={accent} r="2" />
      <circle cx="32" cy="30" fill={stroke} r="2" />
      <circle cx="37" cy="30" fill={stroke} r="2" />
      <path
        d="M26 35h12"
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth="2"
      />
      {/* Probes - gold accent */}
      <path
        d="M27 40v8M37 40v8"
        stroke={accent}
        strokeLinecap="round"
        strokeWidth="2.5"
      />
      <path
        d="M24 50h6M34 50h6"
        stroke={accent}
        strokeLinecap="round"
        strokeWidth="2.5"
      />
      <path
        d="M27 48l-2 4M37 48l2 4"
        stroke={accent}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </IconSvg>
  );
}

function BodyIcon() {
  return (
    <IconSvg>
      {/* Car profile - gold accent */}
      <path
        d="M10 38c2-8 9-14 18-14h8c7 0 12 4 15 10l3 4H10v0z"
        fill={accent}
      />
      <path
        d="M10 38h44M16 38v4h7v-4M41 38v4h7v-4"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 28h8v6h-10c1-3 2.5-5 2-6zM32 28h8c1 1.5 2.5 4 3 6H32v-6z"
        fill="white"
        opacity="0.9"
      />
      {/* Wrench - gold accent */}
      <path
        d="M40 14c2.5 0 4.5 2 4.5 4.5 0 1-.3 1.9-.9 2.6L50 27.5 47.5 30 41.1 23.6c-.7.5-1.5.9-2.6.9-2.5 0-4.5-2-4.5-4.5 0-.4 0-.8.1-1.1l3.4 3.4 2.1-2.1-3.4-3.4c.3-.1.7-.2 1.1-.2z"
        fill={accent}
        stroke={stroke}
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
      {/* Sparkles */}
      <path
        d="M28 12v4M26 14h4M18 18v3M16.5 19.5h3"
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </IconSvg>
  );
}

function AcIcon() {
  return (
    <IconSvg>
      <circle
        cx="32"
        cy="32"
        fill="white"
        r="8"
        stroke={stroke}
        strokeWidth="2"
      />
      <circle cx="32" cy="32" fill={accent} r="3.5" />
      <path
        d="M32 12v12M32 40v12M16 20l10 10M38 34l10 10M48 20 38 30M26 34 16 44"
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M32 18v4M32 42v4M22 24l-2.5-2.5M44.5 42.5 42 40M42 24l2.5-2.5M22 40l-2.5 2.5"
        stroke={accent}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </IconSvg>
  );
}

function TiresIcon() {
  return (
    <IconSvg>
      <circle
        cx="32"
        cy="32"
        fill="white"
        r="18"
        stroke={stroke}
        strokeWidth="2.5"
      />
      <circle
        cx="32"
        cy="32"
        fill="none"
        r="12"
        stroke={stroke}
        strokeWidth="1.75"
      />
      <circle cx="32" cy="32" fill={accent} r="5" />
      <circle cx="32" cy="32" fill="white" r="2" />
      <path
        d="M32 14v6M32 44v6M14 32h6M44 32h6M20 20l4 4M40 40l4 4M44 20l-4 4M24 40l-4 4"
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </IconSvg>
  );
}

function ExtraIcon() {
  return (
    <IconSvg>
      {/* Open book */}
      <path
        d="M12 18c6-3 12-3 18 0v30c-6-3-12-3-18 0V18zM52 18c-6-3-12-3-18 0v30c6-3 12-3 18 0V18z"
        fill="white"
        stroke={stroke}
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M30 18v30" stroke={stroke} strokeWidth="1.5" />
      {/* Wrench - gold accent */}
      <path
        d="M36 28c2.2 0 4 1.8 4 4 0 .9-.3 1.7-.8 2.3L46 41l-2.2 2.2-6.8-6.8c-.6.5-1.4.8-2.3.8-2.2 0-4-1.8-4-4 0-.4.1-.8.2-1.1l3 3 1.9-1.9-3-3c.3-.1.6-.2.9-.2z"
        fill={accent}
        stroke={stroke}
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
      {/* Check box - gold accent */}
      <rect
        fill="white"
        height="10"
        rx="1.5"
        stroke={stroke}
        strokeWidth="1.5"
        width="10"
        x="16"
        y="34"
      />
      <path
        d="M18.5 39l2.5 2.5 5-5"
        stroke={accent}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </IconSvg>
  );
}
