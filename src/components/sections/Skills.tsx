"use client";

import { useSite } from "@/components/providers/SiteProvider";
import { Icon, type IconName } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechLogo } from "@/components/ui/TechLogo";
import { skillCategories, type SkillCategoryId } from "@/data/skills";

const categoryIcons: Record<SkillCategoryId, IconName> = {
  frontend: "layout",
  backend: "server",
  database: "database",
  tools: "wrench",
  development: "terminal",
};

export function Skills() {
  const { t } = useSite();

  return (
    <section id="competences" className="relative py-24 sm:py-28 lg:py-32" aria-labelledby="skills-title">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10rem] top-1/3 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container-x">
        <SectionHeading id="skills-title" eyebrow={t.skills.eyebrow} title={t.skills.title} text={t.skills.text} />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, ci) => {
            const copy = t.skills.categories[category.id];
            const isDev = category.id === "development";
            return (
              <Reveal
                key={category.id}
                delay={ci * 60}
                className={`card card-hover flex flex-col p-6 sm:p-7 ${
                  category.id === "tools" ? "md:col-span-2 xl:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                      <Icon name={categoryIcons[category.id]} size={20} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-fg">{copy.title}</h3>
                      <p className="text-xs text-fg-muted sm:text-sm">{copy.text}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-line px-2.5 py-1 text-[0.7rem] font-semibold text-fg-subtle">
                    {category.skills.length}
                  </span>
                </div>

                {isDev ? (
                  <ul className="mt-6 flex flex-wrap gap-2.5">
                    {category.skills.map((skill, i) => (
                      <li
                        key={skill.name}
                        className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-line bg-bg-elevated px-3.5 py-2 text-sm font-medium text-fg transition-colors duration-300 hover:border-accent/60 hover:bg-accent-soft"
                        style={{ transitionDelay: `${i * 40}ms` }}
                      >
                        <Icon name="check" size={14} className="text-accent" />
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul
                    className={`mt-6 grid gap-2.5 ${
                      category.id === "tools" ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3"
                    }`}
                  >
                    {category.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="group flex flex-col items-center gap-2.5 rounded-2xl border border-line bg-bg-elevated px-2 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-card"
                      >
                        <span className="grid h-12 w-12 place-items-center rounded-xl bg-surface transition-transform duration-300 group-hover:scale-110">
                          <TechLogo name={skill.name} icon={skill.icon} color={skill.color} />
                        </span>
                        <span className="text-[0.8rem] font-medium leading-tight text-fg">{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
