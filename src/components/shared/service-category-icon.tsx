import type { ReactNode } from "react";

import type { ServiceCategoryIconId } from "@/types/content";

interface ServiceCategoryIconProps {
  name: ServiceCategoryIconId;
}

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

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-soft/50 to-gold/20 ring-1 ring-gold/30 sm:size-24">
      <svg
        aria-hidden="true"
        className="size-12 sm:size-14"
        focusable="false"
        viewBox="0 0 64 64"
      >
        <title>Service icon</title>
        {children}
      </svg>
    </div>
  );
}

function MechanicalIcon() {
  return (
    <IconFrame>
      <path d="M18 46V34l6-8h16l6 8v12H18z" fill="#c5a35a" opacity="0.45" />
      <path
        d="M14 46h36M18 46V34l6-8h16l6 8v12M24 46v-6h16v6M22 26h20M32 18v8M28 20h8"
        fill="none"
        stroke="#0b1f3a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle cx="24" cy="46" fill="#0b1f3a" r="3.5" />
      <circle cx="40" cy="46" fill="#0b1f3a" r="3.5" />
      <circle cx="24" cy="46" fill="#c5a35a" r="1.25" />
      <circle cx="40" cy="46" fill="#c5a35a" r="1.25" />
    </IconFrame>
  );
}

function ElectricalIcon() {
  return (
    <IconFrame>
      <rect
        fill="#c5a35a"
        height="28"
        opacity="0.4"
        rx="3"
        width="22"
        x="21"
        y="14"
      />
      <rect
        fill="none"
        height="28"
        rx="3"
        stroke="#0b1f3a"
        strokeWidth="2"
        width="22"
        x="21"
        y="14"
      />
      <path
        d="M27 20h10M27 26h10M27 32h6M24 42v8M40 42v8M21 48h6M37 48h6"
        fill="none"
        stroke="#0b1f3a"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <circle cx="32" cy="36" fill="#9a7c3a" r="2.25" />
    </IconFrame>
  );
}

function BodyIcon() {
  return (
    <IconFrame>
      <path
        d="M14 38c4-8 12-12 18-12s14 4 18 12H14z"
        fill="#c5a35a"
        opacity="0.4"
      />
      <path
        d="M12 38c4-8 12-12 20-12s16 4 20 12M14 38h36M18 38v4h6v-4M40 38v4h6v-4"
        fill="none"
        stroke="#0b1f3a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M34 16l2.2 4.4 4.8.7-3.5 3.4 1 4.7L34 27.2l-4.5 2.3 1-4.7-3.5-3.4 4.8-.7z"
        fill="#9a7c3a"
      />
    </IconFrame>
  );
}

function AcIcon() {
  return (
    <IconFrame>
      <circle cx="32" cy="32" fill="#c5a35a" opacity="0.35" r="8" />
      <path
        d="M32 12v40M16 20l32 24M48 20 16 44M32 22v-4M32 46v-4M24 26l-3-3M43 41l-3-3M40 26l3-3M21 41l3-3"
        fill="none"
        stroke="#0b1f3a"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <circle cx="32" cy="32" fill="#9a7c3a" r="3.5" />
    </IconFrame>
  );
}

function TiresIcon() {
  return (
    <IconFrame>
      <circle cx="32" cy="32" fill="#c5a35a" opacity="0.35" r="16" />
      <circle
        cx="32"
        cy="32"
        fill="none"
        r="16"
        stroke="#0b1f3a"
        strokeWidth="2"
      />
      <circle cx="32" cy="32" fill="#0b1f3a" r="6" />
      <circle cx="32" cy="32" fill="#c5a35a" r="2.5" />
      <path
        d="M32 16v5M32 43v5M16 32h5M43 32h5M21 21l3.5 3.5M39.5 39.5 43 43M43 21l-3.5 3.5M24.5 39.5 21 43"
        fill="none"
        stroke="#0b1f3a"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </IconFrame>
  );
}

function ExtraIcon() {
  return (
    <IconFrame>
      <rect
        fill="#c5a35a"
        height="36"
        opacity="0.35"
        rx="3"
        width="28"
        x="18"
        y="14"
      />
      <rect
        fill="none"
        height="36"
        rx="3"
        stroke="#0b1f3a"
        strokeWidth="2"
        width="28"
        x="18"
        y="14"
      />
      <path
        d="M24 24h16M24 32h16M24 40h10"
        fill="none"
        stroke="#0b1f3a"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M40 20l5 5 9-9"
        fill="none"
        stroke="#9a7c3a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
    </IconFrame>
  );
}
