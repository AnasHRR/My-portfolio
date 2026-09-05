"use client";

import { useSite } from "@/components/providers/SiteProvider";

/** Accessible "skip to content" link, visible only when focused. */
export function SkipLink() {
  const { t } = useSite();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-fg focus:shadow-elevated"
    >
      {t.nav.skipToContent}
    </a>
  );
}
