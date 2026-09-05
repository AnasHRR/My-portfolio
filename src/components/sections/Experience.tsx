"use client";

import { useSite } from "@/components/providers/SiteProvider";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";

export function Experience() {
  const { t, locale } = useSite();

  return (
    <section id="experience" className="relative py-24 sm:py-28 lg:py-32" aria-labelledby="experience-title">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading id="experience-title" eyebrow={t.experience.eyebrow} title={t.experience.title} text={t.experience.text} />

          <ol className="relative space-y-6 border-l border-line pl-8 sm:pl-10">
            {experiences.map((item, i) => (
              <Reveal as="li" key={item.id} delay={i * 100} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[2.55rem] top-6 grid h-9 w-9 place-items-center rounded-full border border-line bg-bg-elevated text-accent shadow-card sm:-left-[3.05rem]"
                >
                  <Icon name="briefcase" size={16} />
                </span>

                <article className="card card-hover p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold tracking-wide text-accent">
                      {item.period}
                    </span>
                    <span className="text-xs font-medium text-fg-subtle">{item.type[locale]}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-extrabold tracking-tight text-fg sm:text-2xl">
                    {item.role[locale]}
                  </h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-fg-muted">
                    <span className="font-semibold text-fg">{item.company}</span>
                    <span aria-hidden>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Icon name="mapPin" size={13} />
                      {item.location[locale]}
                    </span>
                  </p>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-fg-subtle">
                    {t.experience.responsibilities}
                  </p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {item.responsibilities.map((r) => (
                      <li key={r.en} className="flex items-start gap-2.5 text-sm text-fg-muted">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {r[locale]}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
