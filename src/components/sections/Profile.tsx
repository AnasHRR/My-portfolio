"use client";

import { useSite } from "@/components/providers/SiteProvider";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { interests, languages, softSkills } from "@/data/experience";

/**
 * Compact "profile" band grouping soft skills, languages and interests.
 * Intentionally lighter than Projects and Skills.
 */
export function Profile() {
  const { t, locale } = useSite();

  return (
    <section className="relative py-20 sm:py-24" aria-label={`${t.soft.title} · ${t.languages.title} · ${t.interests.title}`}>
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Soft skills */}
          <Reveal className="card p-6 sm:p-8">
            <span className="eyebrow">{t.soft.eyebrow}</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-fg sm:text-3xl">{t.soft.title}</h2>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {softSkills.map((skill, i) => (
                <li
                  key={skill.id}
                  className="group flex items-start gap-3.5 rounded-2xl border border-line bg-bg-elevated p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
                  style={{ transitionDelay: `${i * 20}ms` }}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon name={skill.icon} size={18} />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-fg">{skill.title[locale]}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-fg-muted">{skill.description[locale]}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-6">
            {/* Languages */}
            <Reveal delay={80} className="card p-6 sm:p-8">
              <span className="eyebrow">{t.languages.eyebrow}</span>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-fg sm:text-3xl">
                {t.languages.title}
              </h2>
              <ul className="mt-6 divide-y divide-line">
                {languages.map((lang) => (
                  <li key={lang.id} className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-soft text-accent">
                        <Icon name="globe" size={16} />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-fg">{lang.name[locale]}</p>
                        <p className="text-xs text-fg-muted">{lang.level[locale]}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1" aria-hidden>
                      {[1, 2, 3].map((n) => (
                        <span
                          key={n}
                          className={`h-1.5 w-5 rounded-full ${n <= lang.strength ? "bg-accent" : "bg-line-strong"}`}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Interests */}
            <Reveal delay={140} className="card p-6 sm:p-8">
              <span className="eyebrow">{t.interests.eyebrow}</span>
              <h2 className="mt-3 font-display text-xl font-extrabold tracking-tight text-fg">{t.interests.title}</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {interests.map((item) => (
                  <li
                    key={item.id}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-elevated px-3.5 py-2 text-sm font-medium text-fg-muted transition-colors hover:border-accent/50 hover:text-fg"
                  >
                    <Icon name={item.icon} size={15} className="text-accent" />
                    {item.label[locale]}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
