"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { defaultLocale, getDictionary, type Dictionary, type Locale } from "@/lib/i18n";

export type Theme = "dark" | "light";

interface SiteContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
  theme: Theme;
  toggleTheme: () => void;
}

const SiteContext = createContext<SiteContextValue | null>(null);

export const LOCALE_KEY = "al-portfolio-locale";
export const THEME_KEY = "al-portfolio-theme";

export function SiteProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [theme, setTheme] = useState<Theme>("dark");

  // Hydrate preferences from storage (theme class is already applied by the inline script).
  useEffect(() => {
    try {
      const storedLocale = window.localStorage.getItem(LOCALE_KEY);
      if (storedLocale === "fr" || storedLocale === "en") setLocaleState(storedLocale);
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(LOCALE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      const root = document.documentElement;
      root.classList.toggle("dark", next === "dark");
      try {
        window.localStorage.setItem(THEME_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo<SiteContextValue>(
    () => ({ locale, setLocale, t: getDictionary(locale), theme, toggleTheme }),
    [locale, setLocale, theme, toggleTheme],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite(): SiteContextValue {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within <SiteProvider>");
  return ctx;
}

/**
 * Inline script executed before hydration to apply the stored theme
 * and avoid a flash of the wrong color scheme.
 */
export const themeInitScript = `(function(){try{var k="${THEME_KEY}";var s=localStorage.getItem(k);var d=s?s==="dark":true;document.documentElement.classList.toggle("dark",d);}catch(e){document.documentElement.classList.add("dark");}})();`;
