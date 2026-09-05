"use client";

import { useSite } from "@/components/providers/SiteProvider";
import { Icon, type IconName } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const focusIcons: IconName[] = ["layout", "server", "database", "cart"];

export function About() {
  const { t } = useSite();

  return (
    <section id="a-propos" className="relative py-24 sm:py-28 lg:py-32" aria-labelledby="about-title">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* Text column */}
          <div>
            <SectionHeading id="about-title" eyebrow={t.about.eyebrow} title={t.about.title} />
            <Reveal delay={80} className="mt-8 space-y-5">
              <p className="font-display text-xl font-bold text-fg sm:text-2xl">{t.about.lead}</p>
              <p className="text-base leading-relaxed text-fg-muted sm:text-[1.05rem]">{t.about.p1}</p>
              <p className="text-base leading-relaxed text-fg-muted sm:text-[1.05rem]">{t.about.p2}</p>
            </Reveal>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
              {t.about.stats.map((stat, i) => (
                <Reveal key={stat.label} delay={120 + i * 70} className="card card-hover p-4 sm:p-5">
                  <p className="font-display text-lg font-extrabold leading-tight tracking-tight text-fg sm:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs text-fg-muted sm:text-sm">{stat.label}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Focus column */}
          <div className="lg:pt-16">
            <Reveal className="mb-5 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-soft text-accent">
                <Icon name="code" size={18} />
              </span>
              <h3 className="font-display text-lg font-bold text-fg">{t.about.focusTitle}</h3>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {t.about.focus.map((item, i) => (
                <Reveal key={item.title} delay={i * 80} className="card card-hover group p-5 sm:p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-bg-elevated text-accent transition-colors duration-300 group-hover:border-accent/50 group-hover:bg-accent-soft">
                    <Icon name={focusIcons[i] ?? "code"} size={20} />
                  </span>
                  <h4 className="mt-4 font-display text-base font-bold text-fg">{item.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
