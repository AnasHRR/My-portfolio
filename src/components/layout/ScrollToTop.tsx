"use client";

import { useEffect, useRef, useState } from "react";
import { useSite } from "@/components/providers/SiteProvider";
import { Icon } from "@/components/ui/Icons";

/** Scroll position (px) after which the button becomes visible. */
const SHOW_AFTER = 480;

/**
 * Floating "back to top" button, fixed at the bottom-right of the viewport.
 * Fades/slides in once the user scrolls past `SHOW_AFTER`, and respects
 * prefers-reduced-motion when scrolling back up.
 */
export function ScrollToTop() {
  const { t } = useSite();
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        setVisible(window.scrollY > SHOW_AFTER);
        ticking.current = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label={t.footer.top}
      title={t.footer.top}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-accent text-accent-fg shadow-[0_12px_30px_-10px_var(--glow)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-accent-strong hover:shadow-[0_16px_40px_-12px_var(--glow)] active:translate-y-0 sm:bottom-6 sm:right-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Icon name="arrowUp" size={18} />
    </button>
  );
}
