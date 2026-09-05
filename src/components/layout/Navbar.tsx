"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useSite } from "@/components/providers/SiteProvider";
import { Icon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

export const SECTION_IDS = ["accueil", "a-propos", "competences", "projets", "experience", "formation", "contact"] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export function Navbar() {
  const { t, locale, setLocale, theme, toggleTheme } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<SectionId>("accueil");
  const [open, setOpen] = useState(false);
  const ticking = useRef(false);

  const links: { id: SectionId; label: string }[] = [
    { id: "accueil", label: t.nav.home },
    { id: "a-propos", label: t.nav.about },
    { id: "competences", label: t.nav.skills },
    { id: "projets", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
    { id: "formation", label: t.nav.education },
    { id: "contact", label: t.nav.contact },
  ];

  // Scroll state + progress bar (rAF throttled)
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(y > 12);
        setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
        ticking.current = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as SectionId);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when the mobile menu is open + close on Escape
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      {/* Scroll progress */}
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-accent to-accent-strong transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress / 100})` }}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2.5 sm:py-3" : "py-4 sm:py-5"
        }`}
      >
        <div className="container-x">
          <nav
            aria-label="Navigation principale"
            className={`flex h-14 items-center justify-between gap-3 rounded-2xl px-3 transition-all duration-500 sm:px-4 ${
              scrolled || open ? "glass shadow-card" : "border border-transparent"
            }`}
          >
            {/* Brand */}
            <a
              href="#accueil"
              onClick={close}
              className="group flex items-center gap-2.5 rounded-lg font-display text-[0.95rem] font-extrabold tracking-tight text-fg"
              aria-label={profile.name}
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-sm font-black text-accent-fg shadow-[0_8px_20px_-8px_var(--glow)] transition-transform duration-300 group-hover:rotate-[-6deg]">
                {profile.initials}
              </span>
              <span className="hidden sm:inline">
                {profile.firstName} <span className="text-fg-muted">{profile.lastName}</span>
              </span>
            </a>

            {/* Desktop links */}
            <ul className="hidden items-center gap-1 lg:flex">
              {links.map((link) => {
                const isActive = active === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative rounded-full px-3.5 py-2 text-[0.84rem] font-medium transition-colors duration-300 ${
                        isActive ? "text-fg" : "text-fg-muted hover:text-fg"
                      }`}
                    >
                      {link.label}
                      <span
                        aria-hidden
                        className={`absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full bg-accent transition-all duration-300 ${
                          isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-50"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div
                role="group"
                aria-label={t.nav.lang}
                className="flex h-9 items-center rounded-full border border-line bg-surface p-0.5 text-[0.72rem] font-bold tracking-wide"
              >
                {(["fr", "en"] as const).map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLocale(l)}
                    aria-pressed={locale === l}
                    className={`h-full rounded-full px-2.5 uppercase transition-all duration-300 ${
                      locale === l ? "bg-accent text-accent-fg shadow-sm" : "text-fg-muted hover:text-fg"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={toggleTheme}
                aria-label={t.nav.theme}
                title={t.nav.theme}
                className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-fg-muted transition-all duration-300 hover:border-line-strong hover:text-fg"
              >
                <Icon name={theme === "dark" ? "sun" : "moon"} size={17} />
              </button>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? t.nav.close : t.nav.menu}
                className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-fg transition-colors hover:border-line-strong lg:hidden"
              >
                <Icon name={open ? "x" : "menu"} size={18} />
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
          aria-hidden={!open}
        >
          <div
            onClick={close}
            className={`fixed inset-0 top-0 -z-10 bg-bg/80 backdrop-blur-sm transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="container-x">
            <div
              className={`glass mt-2 origin-top rounded-2xl p-2 shadow-elevated transition-all duration-300 ${
                open ? "translate-y-0 scale-100 opacity-100" : "-translate-y-2 scale-[0.98] opacity-0"
              }`}
            >
              <ul className="flex flex-col">
                {links.map((link, i) => {
                  const isActive = active === link.id;
                  return (
                    <li key={link.id} style={{ transitionDelay: `${i * 30}ms` }}>
                      <a
                        href={`#${link.id}`}
                        onClick={close}
                        aria-current={isActive ? "true" : undefined}
                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[0.95rem] font-medium transition-colors ${
                          isActive ? "bg-accent-soft text-fg" : "text-fg-muted hover:bg-accent-soft hover:text-fg"
                        }`}
                      >
                        {link.label}
                        <span
                          aria-hidden
                          className={`h-1.5 w-1.5 rounded-full bg-accent transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-2 border-t border-line p-2">
                <a
                  href={profile.cvPath}
                  download
                  className="flex h-11 items-center justify-center gap-2 rounded-xl bg-accent text-sm font-semibold text-accent-fg"
                >
                  <Icon name="download" size={16} />
                  {t.hero.ctaCv}
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
