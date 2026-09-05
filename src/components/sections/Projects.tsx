"use client";

import Image from "next/image";
import { useSite } from "@/components/providers/SiteProvider";
import { Icon, type IconName } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/data/projects";

/** Link button that renders a clearly-labelled placeholder when the URL is not available yet. */
function ProjectLink({
  href,
  label,
  soonLabel,
  icon,
  primary,
}: {
  href: string;
  label: string;
  soonLabel: string;
  icon: IconName;
  primary?: boolean;
}) {
  const base =
    "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-300";
  if (!href) {
    return (
      <span
        role="link"
        aria-disabled="true"
        title={soonLabel}
        className={`${base} cursor-not-allowed border border-dashed border-line-strong text-fg-subtle`}
      >
        <Icon name={icon} size={16} />
        {label}
        <span className="sr-only"> — {soonLabel}</span>
      </span>
    );
  }
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${
        primary
          ? "bg-accent text-accent-fg shadow-[0_10px_30px_-10px_var(--glow)] hover:-translate-y-0.5 hover:bg-accent-strong"
          : "border border-line-strong bg-surface text-fg hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent-soft"
      }`}
    >
      <Icon name={icon} size={16} />
      {label}
    </a>
  );
}

function TechBadges({ items, compact }: { items: string[]; compact?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((tech) => (
        <li
          key={tech}
          className={`rounded-full border border-line bg-bg-elevated font-medium text-fg-muted ${
            compact ? "px-2.5 py-1 text-[0.72rem]" : "px-3 py-1.5 text-xs"
          }`}
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const { t, locale } = useSite();
  return (
    <Reveal className="card overflow-hidden rounded-[1.75rem] border-line-strong">
      <div className="grid lg:grid-cols-[1.15fr_1fr]">
        {/* Visual */}
        <div className="group relative aspect-[16/11] overflow-hidden bg-bg-elevated lg:aspect-auto lg:min-h-[34rem]">
          <Image
            src={project.image}
            alt={project.imageAlt[locale]}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bg-elevated/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-bg-elevated/40" />
          <div className="absolute left-5 top-5 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-accent-fg shadow-[0_8px_24px_-8px_var(--glow)]">
              <Icon name="cart" size={13} />
              {t.projects.featured}
            </span>
            <span className="glass rounded-full px-3 py-1.5 text-[0.7rem] font-semibold text-fg">{project.year}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{project.tagline[locale]}</p>
          <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">{project.name}</h3>
          <p className="mt-4 text-base leading-relaxed text-fg-muted">{project.description[locale]}</p>

          <div className="mt-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-fg-subtle">{t.projects.features}</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature.en} className="flex items-start gap-2.5 text-sm text-fg-muted">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                    <Icon name="check" size={12} />
                  </span>
                  {feature[locale]}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-fg-subtle">{t.projects.stack}</p>
            <TechBadges items={project.technologies} />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-auto lg:pt-8">
            <ProjectLink href={project.liveUrl} label={t.projects.live} soonLabel={t.projects.soon} icon="externalLink" primary />
            <ProjectLink href={project.githubUrl} label={t.projects.github} soonLabel={t.projects.soon} icon="github" />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t, locale } = useSite();
  return (
    <Reveal as="article" delay={index * 100} className="card card-hover group flex flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-bg-elevated">
        <Image
          src={project.image}
          alt={project.imageAlt[locale]}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bg-elevated/60 to-transparent" />
        <span className="glass absolute left-4 top-4 rounded-full px-3 py-1.5 text-[0.7rem] font-semibold text-fg">{project.year}</span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{project.tagline[locale]}</p>
        <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-fg">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-fg-muted">{project.description[locale]}</p>

        <ul className="mt-5 grid gap-1.5">
          {project.features.map((feature) => (
            <li key={feature.en} className="flex items-start gap-2 text-sm text-fg-muted">
              <Icon name="check" size={14} className="mt-0.5 shrink-0 text-accent" />
              {feature[locale]}
            </li>
          ))}
        </ul>

        <div className="mt-5">
          <TechBadges items={project.technologies} compact />
        </div>

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
          <ProjectLink href={project.liveUrl} label={t.projects.view} soonLabel={t.projects.soon} icon="externalLink" primary />
          <ProjectLink href={project.githubUrl} label={t.projects.github} soonLabel={t.projects.soon} icon="github" />
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const { t } = useSite();
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projets" className="relative py-24 sm:py-28 lg:py-32" aria-labelledby="projects-title">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-12rem] top-0 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[130px]" />
      </div>

      <div className="container-x">
        <SectionHeading id="projects-title" eyebrow={t.projects.eyebrow} title={t.projects.title} text={t.projects.text} />

        <div className="mt-14 space-y-8">
          {featured ? <FeaturedProject project={featured} /> : null}

          <div className="grid gap-6 md:grid-cols-2">
            {others.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
