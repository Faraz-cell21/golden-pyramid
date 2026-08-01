"use client";

import { useEffect, useRef, useState } from "react";

import type { HomeContent } from "@/types/content";
import { cn } from "@/lib/utils";

const VIDEO_SRC = "/videos/garage-things.mp4";

interface HomeWorkshopVideoProps {
  content: HomeContent["videoShowcase"];
}

export function HomeWorkshopVideo({ content }: HomeWorkshopVideoProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.05 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) {
      return;
    }

    const video = videoRef.current;
    if (!video) {
      return;
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPlayback = () => {
      if (media.matches) {
        video.pause();
        return;
      }

      void video.play().catch(() => {
        // Autoplay can be blocked by the browser.
      });
    };

    if (video.readyState >= 2) {
      syncPlayback();
    } else {
      video.addEventListener("loadeddata", syncPlayback, { once: true });
    }

    media.addEventListener("change", syncPlayback);
    return () => {
      media.removeEventListener("change", syncPlayback);
      video.removeEventListener("loadeddata", syncPlayback);
    };
  }, [shouldLoad]);

  return (
    <section
      className="relative overflow-hidden bg-navy text-white"
      ref={sectionRef}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,163,90,0.16),_transparent_55%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="mb-6 text-center sm:mb-8 lg:mb-10">
          <h2 className="font-semibold text-xl tracking-tight sm:text-2xl md:text-3xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75 leading-relaxed sm:text-base">
            {content.body}
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-[minmax(0,1.2fr)_auto_minmax(0,1.2fr)] lg:items-center lg:gap-8 xl:gap-10">
          <SideCopy
            align="end"
            className="hidden w-full lg:block"
            paragraphs={content.sideStart.paragraphs}
            title={content.sideStart.title}
          />

          <div className="w-full max-w-sm shrink-0 overflow-hidden rounded-xl bg-black shadow-[0_20px_50px_rgba(0,0,0,0.35)] ring-1 ring-gold/35 sm:max-w-md lg:w-[min(28vw,22rem)] lg:max-w-none xl:w-[min(30vw,26rem)]">
            <video
              aria-label={content.title}
              autoPlay={shouldLoad}
              className="aspect-[9/16] h-auto w-full object-cover"
              loop
              muted
              playsInline
              preload={shouldLoad ? "metadata" : "none"}
              ref={videoRef}
            >
              {shouldLoad ? <source src={VIDEO_SRC} type="video/mp4" /> : null}
            </video>
          </div>

          <SideCopy
            align="start"
            className="hidden w-full lg:block"
            paragraphs={content.sideEnd.paragraphs}
            title={content.sideEnd.title}
          />
        </div>
      </div>
    </section>
  );
}

function SideCopy({
  align,
  className,
  paragraphs,
  title,
}: {
  align: "start" | "end";
  className?: string;
  paragraphs: string[];
  title: string;
}) {
  return (
    <aside
      className={cn(
        "rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm xl:p-6",
        align === "end" ? "text-end" : "text-start",
        className
      )}
    >
      <h3 className="font-semibold text-gold text-xl leading-snug tracking-tight xl:text-2xl">
        {title}
      </h3>

      <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 xl:gap-x-6 xl:gap-y-4">
        {paragraphs.map((paragraph) => (
          <p
            className="text-sm text-white/78 leading-relaxed xl:text-[0.95rem] xl:leading-7"
            key={paragraph}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </aside>
  );
}
