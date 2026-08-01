"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface CyclingImageProps {
  alt: string;
  className?: string;
  images: readonly string[];
  intervalMs?: number;
  sizes?: string;
}

export function CyclingImage({
  alt,
  className = "object-cover",
  images,
  intervalMs = 4200,
  sizes,
}: CyclingImageProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion || images.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [images.length, intervalMs, reduceMotion]);

  return (
    <div className="absolute inset-0">
      {images.map((src, index) => {
        const isActive = reduceMotion ? index === 0 : index === activeIndex;

        return (
          <Image
            alt={alt}
            className={`${className} absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
            fill
            key={src}
            sizes={sizes}
            src={src}
          />
        );
      })}
    </div>
  );
}
