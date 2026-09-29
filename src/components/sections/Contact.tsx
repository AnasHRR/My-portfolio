"use client";

import { useSite } from "@/components/providers/SiteProvider";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export function Contact() {
  const { t, locale } = useSite();

  const infos: { icon: IconName; label: string; value: string; href?: string }[] = [
    { icon: "mapPin", label: t.contact.location, value: profile.location[locale] },
    { icon: "whatsapp", label: t.contact.whatsapp, value: profile.whatsappNumber, href: profile.whatsappHref },
    { icon: "phone", label: t.contact.phone, value: profile.phone, href: profile.phoneHref },
  ];

  const socials = profile.socials.filter((s) => s.url);

  return (
    <section id="contact" className="relative py-24 sm:py-28 lg:py-32" aria-labelledby="contact-title">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_100%,#000_30%,transparent_100%)]" />
        <div className="absolute bottom-[-8rem] left-1/2 h-[26rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[130px]" />
      </div>

      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Info */}
          <div>
            <SectionHeading id="contact-title" eyebrow={t.contact.eyebrow} title={t.contact.title} text={t.contact.text} />

            <ul className="mt-10 space-y-3">
              {infos.map((info, i) => {
                const content = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
                      <Icon name={info.icon} size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-fg-subtle">
                        {info.label}
                      </span>
                      <span className="block truncate text-sm font-semibold text-fg sm:text-base">{info.value}</span>
                    </span>
                  </>
                );
                return (
                  <Reveal as="li" key={info.label} delay={i * 70}>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="card card-hover group flex items-center gap-4 p-4"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="card group flex items-center gap-4 p-4">{content}</div>
                    )}
                  </Reveal>
                );
              })}
            </ul>

            {socials.length > 0 ? (
              <Reveal delay={240} className="mt-8 flex flex-wrap gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-fg-muted transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-fg"
                  >
                    <Icon name={s.id} size={18} />
                  </a>
                ))}
              </Reveal>
            ) : null}
          </div>

          {/* WhatsApp CTA */}
          <Reveal delay={120}>
            <div className="card relative overflow-hidden p-6 sm:p-8">
              <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#25D366]/10 blur-[70px]" />

              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#25D366]/15 text-[#25D366]">
                  <Icon name="whatsapp" size={28} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-fg sm:text-2xl">{t.contact.ctaTitle}</h3>
                  <p className="mt-1 text-sm text-fg-muted">{t.contact.ctaText}</p>
                </div>
              </div>

              <ButtonLink
                href={profile.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="mt-8 w-full bg-[#25D366] text-white hover:bg-[#1fb857]"
              >
                <Icon name="whatsapp" size={20} />
                {t.contact.ctaButton}
                <Icon name="arrowRight" size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </ButtonLink>

              <p className="mt-4 text-center text-xs text-fg-subtle">
                {t.contact.ctaHint} <span className="font-semibold text-fg-muted">{profile.whatsappNumber}</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
