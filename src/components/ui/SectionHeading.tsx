import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  className?: string;
  /** Id applied to the <h2>, referenced by the section's aria-labelledby. */
  id?: string;
}

export function SectionHeading({ eyebrow, title, text, align = "left", className = "", id }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "items-start";
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      <span className="eyebrow">
        <span aria-hidden className="h-px w-6 bg-accent" />
        {eyebrow}
      </span>
      <h2
        id={id}
        className="font-display text-3xl font-extrabold tracking-tight text-fg sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
      >
        {title}
      </h2>
      {text ? <p className="text-base leading-relaxed text-fg-muted sm:text-lg">{text}</p> : null}
    </Reveal>
  );
}
