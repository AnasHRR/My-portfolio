"use client";

import { useState, type FormEvent } from "react";
import { useSite } from "@/components/providers/SiteProvider";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import {
  validateContactInput,
  validateField,
  type ContactErrors,
  type ContactField,
  type ContactInput,
} from "@/lib/contact-validation";

type Status = "idle" | "sending" | "success" | "error";

const emptyForm: ContactInput = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const { t, locale } = useSite();
  const [form, setForm] = useState<ContactInput>(emptyForm);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");

  const f = t.contact.form;

  const update = (field: ContactField, value: string) => {
    const next = { ...form, [field]: value };
    setForm(next);
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, next) }));
    }
    if (status === "success" || status === "error") setStatus("idle");
  };

  const blur = (field: ContactField) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, form) }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed: ContactInput = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };
    const validation = validateContactInput(trimmed);
    setTouched({ name: true, email: true, subject: true, message: true });
    setErrors(validation);
    if (Object.keys(validation).length > 0) {
      const first = Object.keys(validation)[0];
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...trimmed, locale, website: honeypot }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; errors?: ContactErrors };
      if (res.ok && data.ok) {
        setStatus("success");
        setForm(emptyForm);
        setTouched({});
        setErrors({});
      } else {
        if (data.errors) setErrors(data.errors);
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const infos: { icon: IconName; label: string; value: string; href?: string }[] = [
    { icon: "mapPin", label: t.contact.location, value: profile.location[locale] },
    { icon: "phone", label: t.contact.phone, value: profile.phone, href: profile.phoneHref },
    { icon: "mail", label: t.contact.email, value: profile.email, href: `mailto:${profile.email}` },
  ];

  const socials = profile.socials.filter((s) => s.url);

  const fieldClass = (field: ContactField) =>
    `w-full rounded-xl border bg-bg-elevated px-4 py-3 text-sm text-fg placeholder:text-fg-subtle transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/40 ${
      errors[field] ? "border-red-500/70 focus:border-red-500" : "border-line hover:border-line-strong focus:border-accent"
    }`;

  const errorText = (field: ContactField) => (errors[field] ? f.errors[errors[field]!] : undefined);

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
                      <a href={info.href} className="card card-hover group flex items-center gap-4 p-4">
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

          {/* Form */}
          <Reveal delay={120}>
            <form onSubmit={onSubmit} noValidate className="card p-6 sm:p-8" aria-describedby="contact-status">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-fg">
                    {f.name}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    onBlur={() => blur("name")}
                    placeholder={f.namePlaceholder}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={fieldClass("name")}
                    maxLength={120}
                    required
                  />
                  {errorText("name") ? (
                    <p id="contact-name-error" role="alert" className="mt-1.5 text-xs text-red-500">
                      {errorText("name")}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-fg">
                    {f.email}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    onBlur={() => blur("email")}
                    placeholder={f.emailPlaceholder}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={fieldClass("email")}
                    maxLength={200}
                    required
                  />
                  {errorText("email") ? (
                    <p id="contact-email-error" role="alert" className="mt-1.5 text-xs text-red-500">
                      {errorText("email")}
                    </p>
                  ) : null}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="contact-subject" className="mb-2 block text-sm font-semibold text-fg">
                    {f.subject}
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    onBlur={() => blur("subject")}
                    placeholder={f.subjectPlaceholder}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                    className={fieldClass("subject")}
                    maxLength={200}
                    required
                  />
                  {errorText("subject") ? (
                    <p id="contact-subject-error" role="alert" className="mt-1.5 text-xs text-red-500">
                      {errorText("subject")}
                    </p>
                  ) : null}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-fg">
                    {f.message}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    onBlur={() => blur("message")}
                    placeholder={f.messagePlaceholder}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    className={`${fieldClass("message")} resize-y min-h-[9rem]`}
                    maxLength={5000}
                    required
                  />
                  <div className="mt-1.5 flex items-start justify-between gap-3">
                    {errorText("message") ? (
                      <p id="contact-message-error" role="alert" className="text-xs text-red-500">
                        {errorText("message")}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className="shrink-0 text-[0.7rem] tabular-nums text-fg-subtle">{form.message.length}/5000</span>
                  </div>
                </div>

                {/* Honeypot — hidden from humans */}
                <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div id="contact-status" aria-live="polite" className="min-h-[1.25rem] text-sm">
                  {status === "success" ? (
                    <span className="inline-flex items-start gap-2 text-emerald-500">
                      <Icon name="check" size={16} className="mt-0.5 shrink-0" />
                      {f.success}
                    </span>
                  ) : status === "error" ? (
                    <span className="inline-flex items-start gap-2 text-red-500">
                      <Icon name="alert" size={16} className="mt-0.5 shrink-0" />
                      {f.error}
                    </span>
                  ) : null}
                </div>
                <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
                  {status === "sending" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden />
                      {f.sending}
                    </>
                  ) : (
                    <>
                      {f.submit}
                      <Icon name="send" size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
