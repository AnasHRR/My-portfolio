"use client";

import Image from "next/image";
import { useSite } from "@/components/providers/SiteProvider";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import { heroStack } from "@/data/skills";

export function Hero() {
  const { t, locale } = useSite();
  const supporting = locale === "fr" ? t.hero.textFr : t.hero.text;

  return (
    <section id="accueil" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36" aria-labelledby="hero-title">
      {/* Background: grid + glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="absolute left-1/2 top-[-10rem] h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] dark:bg-accent/25" />
        <div className="absolute right-[-10rem] top-[20rem] h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-[110px]" />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 xl:gap-16">
          {/* Copy */}
          <div className="max-w-2xl">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[0.78rem] font-medium text-fg-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t.hero.available}
            </div>

            <p className="animate-fade-up mt-7 text-sm font-medium text-fg-muted [animation-delay:80ms] sm:text-base">
              {t.hero.greeting}
            </p>
            <h1
              id="hero-title"
              className="animate-fade-up mt-2 font-display text-[2.75rem] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-fg [animation-delay:140ms] sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            >
              Anas
              <br />
              <span className="text-gradient">Lagziri</span>
            </h1>

            <p className="animate-fade-up mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-[0.8rem] font-bold tracking-[0.28em] text-accent [animation-delay:200ms] sm:text-sm">
              <span aria-hidden className="h-px w-8 bg-accent" />
              {t.hero.subtitle}
            </p>

            <p className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-fg-muted [animation-delay:260ms] sm:text-lg">
              {supporting}
            </p>

            <div className="animate-fade-up mt-9 flex flex-col gap-3 [animation-delay:320ms] sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink href="#projets" size="lg">
                {t.hero.ctaProjects}
                <Icon name="arrowRight" size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary" size="lg">
                {t.hero.ctaContact}
              </ButtonLink>
              <ButtonLink href={profile.cvPath} download variant="ghost" size="lg" className="sm:ml-1">
                <Icon name="download" size={18} />
                {t.hero.ctaCv}
              </ButtonLink>
            </div>

            <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-fg-muted [animation-delay:380ms]">
              <span className="inline-flex items-center gap-2">
                <Icon name="mapPin" size={16} className="text-accent" />
                {t.hero.based}
              </span>
              <a
                href={profile.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-fg"
              >
                <Icon name="whatsapp" size={16} className="text-accent" />
                {profile.whatsappNumber}
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="animate-fade-in relative mx-auto w-full max-w-[30rem] [animation-delay:200ms] lg:max-w-none">
            <div className="relative aspect-square w-full">
              {/* Decorative rings */}
              <div aria-hidden className="absolute inset-[6%] rounded-full border border-line" />
              <div aria-hidden className="absolute inset-[18%] rounded-full border border-dashed border-line-strong opacity-60" />

              <div className="card absolute inset-[3%] overflow-hidden rounded-[2rem] border-line-strong bg-bg-elevated shadow-elevated">
                <Image
                  src="/images/profile.jpeg"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bg-elevated/90 via-transparent to-transparent" />

                {/* Profile card */}
                <div className="glass absolute inset-x-4 bottom-4 flex items-center gap-4 rounded-2xl p-3.5 sm:inset-x-5 sm:bottom-5 sm:p-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-strong font-display text-lg font-black text-white shadow-[0_10px_30px_-8px_var(--glow)] sm:h-16 sm:w-16 sm:text-xl">
                    {profile.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-display text-base font-extrabold text-fg sm:text-lg">{profile.name}</p>
                    <p className="truncate text-xs text-fg-muted sm:text-sm">{t.hero.title}</p>
                    <p className="mt-1 truncate text-[0.7rem] text-fg-subtle">{profile.location[locale]}</p>
                  </div>
                </div>
              </div>

              {/* Floating stat chips */}
              <div className="animate-float absolute -left-2 top-[14%] hidden items-center gap-2.5 rounded-2xl glass px-3.5 py-2.5 shadow-card sm:flex lg:-left-6">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-soft text-accent">
                  <Icon name="layout" size={16} />
                </span>
                <div className="leading-tight">
                  <p className="text-[0.68rem] uppercase tracking-wider text-fg-subtle">{t.hero.cardFrontend}</p>
                  <p className="text-xs font-semibold text-fg">React · Tailwind</p>
                </div>
              </div>
              <div className="animate-float absolute -right-2 top-[38%] hidden items-center gap-2.5 rounded-2xl glass px-3.5 py-2.5 shadow-card [animation-delay:1.2s] sm:flex lg:-right-6">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-soft text-accent">
                  <Icon name="server" size={16} />
                </span>
                <div className="leading-tight">
                  <p className="text-[0.68rem] uppercase tracking-wider text-fg-subtle">{t.hero.cardBackend}</p>
                  <p className="text-xs font-semibold text-fg">Laravel · Node.js</p>
                </div>
              </div>
              <div className="animate-float absolute left-[8%] -top-3 hidden items-center gap-2.5 rounded-2xl glass px-3.5 py-2.5 shadow-card [animation-delay:2.4s] lg:flex">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-soft text-accent">
                  <Icon name="database" size={16} />
                </span>
                <div className="leading-tight">
                  <p className="text-[0.68rem] uppercase tracking-wider text-fg-subtle">{t.hero.cardDatabase}</p>
                  <p className="text-xs font-semibold text-fg">MySQL · MongoDB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stack marquee */}
        <div className="animate-fade-in mt-16 border-y border-line py-5 [animation-delay:500ms] sm:mt-20">
          <div className="flex items-center gap-6">
            <span className="hidden shrink-0 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-fg-subtle sm:block">
              {t.hero.stackLabel}
            </span>
            <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
              <ul className="flex w-max animate-marquee gap-3 motion-reduce:animate-none" aria-label={t.hero.stackLabel}>
                {[...heroStack, ...heroStack].map((item, i) => (
                  <li
                    key={`${item}-${i}`}
                    aria-hidden={i >= heroStack.length}
                    className="rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-medium text-fg-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
