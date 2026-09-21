import Link from "next/link";
import type { ReactNode } from "react";
import { company } from "@/content/company";

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span
      className={`text-[var(--color-star)] tracking-[0.12em] ${className}`}
      aria-hidden="true"
    >
      ★★★★★
    </span>
  );
}

export function Eyebrow({
  children,
  tone = "red",
}: {
  children: ReactNode;
  tone?: "red" | "light" | "muted";
}) {
  const color =
    tone === "light"
      ? "text-white/60"
      : tone === "muted"
        ? "text-[var(--color-muted)]"
        : "text-[var(--color-red)]";
  return (
    <p className={`eyebrow mb-4 flex items-center gap-3 ${color}`}>
      <span
        aria-hidden="true"
        className="inline-block h-px w-6 bg-current opacity-60"
      />
      {children}
    </p>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "outline" | "ghost" | "light";
  className?: string;
  external?: boolean;
};

const btnBase =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.13em] font-[family-name:var(--font-display)] transition-colors duration-200 rounded-[2px]";

const variants: Record<string, string> = {
  primary:
    "bg-[var(--color-red)] text-white hover:bg-[var(--color-red-deep)]",
  dark: "bg-[var(--color-charcoal)] text-white hover:bg-black",
  outline:
    "border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-white",
  light:
    "border border-white/30 text-white hover:bg-white hover:text-[var(--color-charcoal)]",
  ghost: "text-[var(--color-ink)] hover:text-[var(--color-red)] px-0",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: BtnProps) {
  const cls = `${btnBase} ${variants[variant]} ${className}`;
  if (external || href.startsWith("tel:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  action?: ReactNode;
}) {
  const isLight = tone === "light";
  return (
    <div
      className={`flex flex-col gap-6 ${
        action ? "md:flex-row md:items-end md:justify-between" : ""
      } ${align === "center" ? "items-center text-center" : ""}`}
    >
      <div className={align === "center" ? "max-w-2xl" : "max-w-2xl"}>
        {eyebrow ? (
          <Eyebrow tone={isLight ? "light" : "red"}>{eyebrow}</Eyebrow>
        ) : null}
        <h2
          className={`text-[2rem] leading-[1.08] sm:text-[2.6rem] lg:text-[3.1rem] font-extrabold ${
            isLight ? "text-white" : "text-[var(--color-ink)]"
          }`}
        >
          {title}
        </h2>
        {intro ? (
          <div
            className={`mt-5 text-[1.02rem] leading-relaxed ${
              isLight ? "text-white/70" : "text-[var(--color-muted)]"
            }`}
          >
            {intro}
          </div>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function Breadcrumbs({
  trail,
}: {
  trail: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-[0.75rem]">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-white/55">
        <li>
          <Link href="/" className="hover:text-white">
            Home
          </Link>
        </li>
        {trail.map((t) => (
          <li key={t.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {t.href ? (
              <Link href={t.href} className="hover:text-white">
                {t.label}
              </Link>
            ) : (
              <span className="text-white" aria-current="page">
                {t.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  trail,
  compact,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  imageAlt: string;
  trail?: { label: string; href?: string }[];
  compact?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-charcoal-deep)]">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        loading="eager"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal-deep)] via-[var(--color-charcoal-deep)]/80 to-[var(--color-charcoal-deep)]/55"
      />
      <div
        className={`shell relative ${compact ? "pt-28 pb-14 lg:pt-36 lg:pb-16" : "pt-28 pb-16 lg:pt-40 lg:pb-24"}`}
      >
        {trail ? (
          <div className="mb-8">
            <Breadcrumbs trail={trail} />
          </div>
        ) : null}
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl text-[2.25rem] leading-[1.05] font-extrabold text-white sm:text-[3rem] lg:text-[3.6rem]">
          {title}
        </h1>
        {intro ? (
          <div className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-white/72">
            {intro}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Let's Talk About Your Roof.",
  body = "Inspections are free. Call the Plano office or send a request and a Helsley estimator will get back to you.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-[var(--color-charcoal)]">
      <div className="shell py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <Eyebrow tone="light">Free Inspections</Eyebrow>
            <h2 className="max-w-xl text-[2rem] leading-[1.08] font-extrabold text-white sm:text-[2.6rem]">
              {title}
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-white/65">{body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button href="/contact" variant="primary">
              Get a Free Inspection
            </Button>
            <Button href={company.phoneHref} variant="light">
              Call {company.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ReviewQuote({
  body,
  name,
  when,
  tone = "dark",
}: {
  body: string;
  name: string;
  when?: string;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <figure
      className={`flex h-full flex-col justify-between gap-6 border p-7 ${
        light
          ? "border-white/12 bg-white/[0.04]"
          : "border-[var(--color-line)] bg-white"
      }`}
    >
      <div>
        <Stars className="text-sm" />
        <blockquote
          className={`mt-4 text-[0.97rem] leading-relaxed ${
            light ? "text-white/78" : "text-[var(--color-ink)]/85"
          }`}
        >
          “{body}”
        </blockquote>
      </div>
      <figcaption
        className={`text-[0.78rem] font-semibold uppercase tracking-[0.1em] ${
          light ? "text-white/45" : "text-[var(--color-muted)]"
        }`}
      >
        {name}
        {when ? ` · ${when}` : ""} · Google Review
      </figcaption>
    </figure>
  );
}
