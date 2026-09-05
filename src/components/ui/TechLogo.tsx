"use client";

import { useState } from "react";
import { useSite } from "@/components/providers/SiteProvider";

interface TechLogoProps {
  name: string;
  icon?: string;
  color?: string;
  size?: number;
}

/**
 * Renders a technology logo from the Simple Icons CDN.
 * Falls back to a typographic monogram if the icon is unavailable (offline, unknown slug).
 */
export function TechLogo({ name, icon, color, size = 26 }: TechLogoProps) {
  const { theme } = useSite();
  const [failed, setFailed] = useState(false);

  const monogram = (
    <span
      aria-hidden
      className="grid place-items-center rounded-lg bg-accent-soft font-display text-[0.7rem] font-black uppercase tracking-tight text-accent"
      style={{ width: size + 6, height: size + 6 }}
    >
      {name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2)}
    </span>
  );

  if (!icon || failed) return monogram;

  // Pure white logos (Express, GitHub) need a dark colour in light mode.
  const isWhite = color?.toUpperCase() === "#FFFFFF";
  const hex = (isWhite ? (theme === "dark" ? "#FFFFFF" : "#0B1220") : color ?? "#3B82F6").replace("#", "");

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${icon}/${hex}`}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="select-none"
      draggable={false}
    />
  );
}
