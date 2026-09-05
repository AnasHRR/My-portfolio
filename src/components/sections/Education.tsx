"use client";

import { useSite } from "@/components/providers/SiteProvider";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/experience";

export function Education() {
  const { t, locale } = useSite();

  return (
    <section id="formation" className="relative py-24 sm:py-28 lg:py-32" aria-labelledby="education-title">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[140px]" />
      </div>

      <div className="container-x">
        <SectionHeading id="education-title" eyebrow={t.education.eyebrow} title={t.education.title} text={t.education.text} align="center" />

        <ol className="relative mt-14 grid gap-5 md:grid-cols-3">
          {/* connector line on desktop */}
          <span aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-line md:block" />
          {education.map((item, i) => (
            <Reveal as="li" key={item.id} delay={i * 100} className="relative md:pt-12">
              <span
                aria-hidden
                className={`absolute left-6 top-0 hidden h-12 w-px md:block ${item.highlight ? "bg-accent" : "bg-line"}`}
              />
              <span
                aria-hidden
                className={`absolute left-[1.2rem] top-[-0.3rem] hidden h-3 w-3 rounded-full border-2 md:block ${
                  item.highlight ? "border-accent bg-accent shadow-[0_0_0_6px_var(--accent-soft)]" : "border-line-strong bg-bg"
                }`}
              />
              <article
                className={`card card-hover flex h-full flex-col p-6 sm:p-7 ${
                  item.highlight ? "border-accent/40 bg-accent-soft/40 dark:bg-accent-soft/30" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon name="graduation" size={18} />
                  </span>
                  <div className="flex items-center gap-2">
                    {item.highlight ? (
                      <span className="rounded-full bg-accent px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-accent-fg">
                        {t.education.current}
                      </span>
                    ) : null}
                    <span className="text-sm font-bold tracking-wide text-fg">{item.period}</span>
                  </div>
                </div>
                <h3 className="mt-5 font-display text-lg font-extrabold leading-snug tracking-tight text-fg">
                  {item.title[locale]}
                </h3>
                <p className="mt-2 text-sm text-fg-muted">{item.subtitle[locale]}</p>
                <p className="mt-auto pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-fg-subtle">
                  {item.school[locale]}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
