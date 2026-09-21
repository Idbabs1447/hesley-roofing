"use client";

import { useState } from "react";
import { serviceOptions } from "@/content/services";
import { company } from "@/content/company";

type Errors = Record<string, string>;

const field =
  "w-full border border-[var(--color-line)] bg-white px-4 py-3.5 text-[0.95rem] text-[var(--color-ink)] placeholder:text-[var(--color-muted)]/70 focus:border-[var(--color-charcoal)] focus:outline-none";

export function InspectionForm({ compact }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setErrors({});
    setFormError(null);

    try {
      const res = await fetch("/api/inspection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as {
        ok?: boolean;
        errors?: Errors;
        error?: string;
      };
      if (res.ok && json.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      setStatus("idle");
      if (json.errors) setErrors(json.errors);
      if (json.error) setFormError(json.error);
      if (!json.errors && !json.error)
        setFormError("Something went wrong. Please call the office.");
    } catch {
      setStatus("idle");
      setFormError(
        `We could not send that. Please call the office at ${company.phone}.`,
      );
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="border border-[var(--color-line)] bg-white p-8"
      >
        <p className="eyebrow text-[var(--color-red)]">Request Received</p>
        <h3 className="mt-3 text-2xl font-extrabold">Thank you.</h3>
        <p className="mt-3 leading-relaxed text-[var(--color-muted)]">
          Your inspection request has been sent to the Helsley Roofing office in
          Plano. If you would rather speak with someone now, call{" "}
          <a
            href={company.phoneHref}
            className="font-semibold text-[var(--color-ink)] link-underline"
          >
            {company.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-[0.75rem] font-bold uppercase tracking-[0.13em] text-[var(--color-red)]"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={`border border-[var(--color-line)] bg-white ${compact ? "p-6" : "p-7 lg:p-9"}`}
    >
      <p className="eyebrow text-[var(--color-red)]">Free Inspection</p>
      <h3 className="mt-3 text-[1.6rem] font-extrabold leading-tight">
        Request an inspection
      </h3>

      {formError ? (
        <p
          role="alert"
          className="mt-5 border-l-2 border-[var(--color-red)] bg-[var(--color-stone)] px-4 py-3 text-[0.88rem] text-[var(--color-ink)]"
        >
          {formError}
        </p>
      ) : null}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} required>
          <input id="name" name="name" className={field} autoComplete="name" required />
        </Field>
        <Field label="Phone" name="phone" error={errors.phone} required>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={field}
            autoComplete="tel"
            required
          />
        </Field>
        <Field label="Email" name="email" error={errors.email} hint="Optional">
          <input
            id="email"
            name="email"
            type="email"
            className={field}
            autoComplete="email"
          />
        </Field>
        <Field label="City" name="city" hint="Optional">
          <input id="city" name="city" className={field} autoComplete="address-level2" />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Service needed" name="service" error={errors.service} required>
            <select id="service" name="service" className={field} required defaultValue="">
              <option value="" disabled>
                Choose one…
              </option>
              {serviceOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Message" name="message" hint="Optional">
            <textarea
              id="message"
              name="message"
              rows={4}
              className={field}
              placeholder="Tell us what you're seeing — a leak, storm damage, an aging roof…"
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 w-full rounded-[2px] bg-[var(--color-red)] px-6 py-4 text-[0.78rem] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[var(--color-red-deep)] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request a Free Inspection"}
      </button>
      <p className="mt-4 text-[0.78rem] leading-relaxed text-[var(--color-muted)]">
        Prefer to talk it through? Call{" "}
        <a href={company.phoneHref} className="font-semibold text-[var(--color-ink)]">
          {company.phone}
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  children,
  error,
  hint,
  required,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
  error?: string;
  hint?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 flex items-baseline justify-between text-[0.75rem] font-bold uppercase tracking-[0.11em] text-[var(--color-ink)]"
      >
        <span>
          {label}
          {required ? (
            <span className="text-[var(--color-red)]" aria-hidden="true">
              {" "}
              *
            </span>
          ) : null}
        </span>
        {hint ? (
          <span className="font-medium normal-case tracking-normal text-[var(--color-muted)]">
            {hint}
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-[0.8rem] font-medium text-[var(--color-red)]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
