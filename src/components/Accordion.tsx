"use client";

import { useState } from "react";

export function Accordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="font-[family-name:var(--font-display)] text-[1.05rem] font-bold text-[var(--color-ink)]">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-1 shrink-0 text-lg text-[var(--color-red)] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              hidden={!isOpen}
              className="pb-7 pr-10"
            >
              <p className="max-w-3xl leading-relaxed text-[var(--color-muted)]">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
