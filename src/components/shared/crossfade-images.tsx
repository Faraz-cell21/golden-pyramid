"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface CrossfadeImagesProps {
  alt?: string;
  className?: string;
  images: readonly string[];
  intervalMs?: number;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

export function CrossfadeImages({
  alt = "",
  className = "object-cover object-center",
  images,
  intervalMs = 4000,
  priority = false,
  quality = 80,
  sizes = "100vw",
}: CrossfadeImagesProps) {
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

  if (images.length === 0) {
    return null;
  }

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {images.map((src, index) => {
        const isActive = reduceMotion ? index === 0 : index === activeIndex;

        return (
          <Image
            alt={alt}
            className={`${className} absolute inset-0 transition-opacity duration-[900ms] ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            } ${isActive ? "motion-safe:animate-hero-drift" : ""}`}
            fill
            key={src}
            priority={priority && index === 0}
            quality={quality}
            sizes={sizes}
            src={src}
          />
        );
      })}
    </div>
  );
}
