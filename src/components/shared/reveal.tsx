"use client";

import {
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface RevealProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delayMs?: number;
}

export function Reveal({
  as: Component = "div",
  children,
  className = "",
  delayMs = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <Component
      className={`transition-[opacity,transform] duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-5 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
      } ${className}`}
      ref={ref}
      style={
        visible && delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined
      }
    >
      {children}
    </Component>
  );
}
