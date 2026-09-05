import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 select-none disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-fg shadow-[0_10px_30px_-10px_var(--glow)] hover:bg-accent-strong hover:shadow-[0_16px_40px_-12px_var(--glow)] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-line-strong bg-surface text-fg backdrop-blur hover:border-accent/60 hover:bg-accent-soft hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-fg-muted hover:text-fg hover:bg-accent-soft",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem] sm:h-[3.25rem] sm:px-7",
};

function cls(variant: Variant, size: Size, className?: string) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className ?? ""}`;
}

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cls(variant, size, className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cls(variant, size, className)} {...props}>
      {children}
    </a>
  );
}
