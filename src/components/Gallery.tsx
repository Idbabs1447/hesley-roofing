"use client";

import { useEffect, useState } from "react";
import { gallery, galleryCategories, type GalleryItem } from "@/content/team";

export function Gallery() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const items = gallery.filter((g) => filter === "All" || g.category === filter);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {galleryCategories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            onClick={() => setFilter(c)}
            className={`rounded-[2px] border px-4 py-2.5 text-[0.74rem] font-bold uppercase tracking-[0.12em] transition-colors ${
              filter === c
                ? "border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-white"
                : "border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-charcoal)] hover:text-[var(--color-ink)]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <button
            key={item.src + item.category}
            onClick={() => setActive(item)}
            className="img-zoom group relative block aspect-[4/3] overflow-hidden bg-[var(--color-stone)] text-left"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 text-[0.7rem] font-bold uppercase tracking-[0.13em] text-white">
              {item.category}
            </span>
          </button>
        ))}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close image"
            className="absolute right-5 top-5 p-2 text-white/70 hover:text-white"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </button>
          <figure
            className="max-h-[88vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[78vh] w-auto object-contain"
            />
            <figcaption className="mt-4 text-center text-[0.85rem] text-white/60">
              {active.alt}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}
