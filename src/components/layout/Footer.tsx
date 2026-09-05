"use client";

import { useSite } from "@/components/providers/SiteProvider";
import { Icon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

export function Footer() {
  const { t, locale } = useSite();

  const links = [
    { id: "accueil", label: t.nav.home },
    { id: "a-propos", label: t.nav.about },
    { id: "competences", label: t.nav.skills },
    { id: "projets", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
    { id: "formation", label: t.nav.education },
    { id: "contact", label: t.nav.contact },
  ];

  const socials = profile.socials.filter((s) => s.url);

  return (
    <footer className="relative border-t border-line">
      <div className="container-x py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <a href="#accueil" className="inline-flex items-center gap-3 font-display text-lg font-extrabold text-fg">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-sm font-black text-accent-fg">
                {profile.initials}
              </span>
              {profile.name}
            </a>
            <p className="mt-3 text-sm text-fg-muted">
              {profile.name} — {t.footer.tagline}
            </p>
            <p className="mt-1 text-sm text-fg-subtle">{profile.location[locale]}</p>

            <div className="mt-6 flex items-center gap-2.5">
              {socials.length > 0 ? (
                socials.map((s) => (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-fg-muted transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-fg"
                  >
                    <Icon name={s.id} size={17} />
                  </a>
                ))
              ) : (
                <div className="flex items-center gap-2.5" aria-label={`${t.footer.social}: ${t.footer.socialSoon}`}>
                  {profile.socials.map((s) => (
                    <span
                      key={s.id}
                      title={`${s.label} — ${t.footer.socialSoon}`}
                      className="grid h-10 w-10 cursor-default place-items-center rounded-full border border-dashed border-line-strong text-fg-subtle"
                    >
                      <Icon name={s.id} size={17} />
                    </span>
                  ))}
                  <span className="ml-1 text-xs text-fg-subtle">{t.footer.socialSoon}</span>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label={t.footer.navigation}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-subtle">{t.footer.navigation}</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1">
              {links.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-sm text-fg-muted transition-colors hover:text-fg">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-subtle">{t.footer.contact}</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-fg">
                  <Icon name="mail" size={15} className="text-accent" />
                  <span className="break-all">{profile.email}</span>
                </a>
              </li>
              <li>
                <a href={profile.phoneHref} className="inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-fg">
                  <Icon name="phone" size={15} className="text-accent" />
                  {profile.phone}
                </a>
              </li>
              <li>
                <a href={profile.cvPath} download className="inline-flex items-center gap-2 font-semibold text-accent transition-colors hover:text-accent-strong">
                  <Icon name="download" size={15} />
                  {t.hero.ctaCv}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-fg-subtle sm:text-sm">{t.footer.rights}</p>
          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <p className="text-xs text-fg-subtle">{t.footer.built}</p>
            <a
              href="#accueil"
              aria-label={t.footer.top}
              title={t.footer.top}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-surface text-fg-muted transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-fg"
            >
              <Icon name="arrowUp" size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
