"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in ms — used for staggered lists. */
  delay?: number;
  as?: ElementType;
  id?: string;
}

/**
 * Lightweight scroll-reveal using IntersectionObserver.
 * Respects prefers-reduced-motion through CSS (see globals.css).
 */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div", id }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style = delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined;

  return (
    <Tag ref={ref} id={id} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
