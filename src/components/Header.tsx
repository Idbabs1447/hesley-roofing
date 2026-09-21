"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { navItems, type NavItem } from "./nav-data";
import { company } from "@/content/company";

function MegaPanel({ item, onClose }: { item: NavItem; onClose: () => void }) {
  if (!item.columns) return null;
  return (
    <div className="absolute left-0 right-0 top-full border-t border-black/5 bg-white shadow-[0_28px_60px_-28px_rgba(16,18,20,0.4)]">
      <div className="shell grid gap-10 py-10 lg:grid-cols-[1fr_auto]">
        <div
          className="grid gap-x-10 gap-y-8"
          style={{
            gridTemplateColumns: `repeat(${Math.min(item.columns.length, 4)}, minmax(0,1fr))`,
          }}
        >
          {item.columns.map((col) => (
            <div key={col.heading}>
              <p className="eyebrow mb-4 text-[var(--color-muted)]">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={onClose}
                      className="group block"
                    >
                      <span className="block text-[0.92rem] font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-red)]">
                        {l.label}
                      </span>
                      {l.description ? (
                        <span className="mt-0.5 block max-w-[17rem] text-[0.78rem] leading-snug text-[var(--color-muted)]">
                          {l.description}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {item.feature ? (
          <div className="w-full max-w-xs bg-[var(--color-stone)] p-7 lg:w-72">
            <p className="font-[family-name:var(--font-display)] text-lg font-extrabold">
              {item.feature.title}
            </p>
            <p className="mt-3 text-[0.85rem] leading-relaxed text-[var(--color-muted)]">
              {item.feature.body}
            </p>
            <Link
              href={item.feature.href}
              onClick={onClose}
              className="mt-5 inline-block text-[0.75rem] font-bold uppercase tracking-[0.13em] text-[var(--color-red)] link-underline"
            >
              {item.feature.cta} →
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function MobileNav({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="fixed inset-0 z-[70] lg:hidden">
      <button
        aria-label="Close menu"
        className="absolute inset-0 bg-black/55"
        onClick={onClose}
      />
      <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-[var(--color-charcoal-deep)]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <Logo tone="light" />
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white"
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile">
          <ul className="divide-y divide-white/8">
            {navItems.map((item) => (
              <li key={item.label} className="py-1">
                {item.columns ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between py-3.5 text-left font-[family-name:var(--font-display)] text-[1.02rem] font-bold text-white"
                      aria-expanded={open === item.label}
                      onClick={() =>
                        setOpen(open === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`text-[var(--color-red)] transition-transform ${open === item.label ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </button>
                    {open === item.label ? (
                      <div className="pb-4">
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="mb-3 block text-[0.78rem] font-bold uppercase tracking-[0.12em] text-[var(--color-red)]"
                        >
                          All {item.label}
                        </Link>
                        {item.columns.map((col) => (
                          <div key={col.heading} className="mb-4">
                            <p className="eyebrow mb-2 text-white/40">
                              {col.heading}
                            </p>
                            <ul className="space-y-2.5">
                              {col.links.map((l) => (
                                <li key={l.href}>
                                  <Link
                                    href={l.href}
                                    onClick={onClose}
                                    className="block text-[0.9rem] text-white/75"
                                  >
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-3.5 font-[family-name:var(--font-display)] text-[1.02rem] font-bold text-white"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/referral-program"
                onClick={onClose}
                className="block py-3.5 font-[family-name:var(--font-display)] text-[1.02rem] font-bold text-white"
              >
                Referral Program
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={onClose}
                className="block py-3.5 font-[family-name:var(--font-display)] text-[1.02rem] font-bold text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="mt-6 border-t border-white/10 pt-6 text-white/55">
            <p className="text-[0.78rem] uppercase tracking-[0.14em]">Plano, Texas</p>
            <a
              href={company.phoneHref}
              className="mt-2 block font-[family-name:var(--font-display)] text-2xl font-extrabold text-white"
            >
              {company.phone}
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  return <HeaderNavigation key={pathname} pathname={pathname} />;
}

// Reset menu state on navigation by remounting, not by cascading effect updates.
function HeaderNavigation({ pathname }: { pathname: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || openMenu !== null;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-colors duration-300 ${
          solid
            ? "bg-[var(--color-charcoal-deep)]/97 backdrop-blur"
            : "bg-gradient-to-b from-black/55 to-transparent"
        }`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div
          ref={navRef}
          className={`shell flex items-center justify-between transition-all duration-300 ${
            solid ? "py-3" : "py-5"
          }`}
        >
          <Logo tone="light" />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onMouseEnter={() => setOpenMenu(item.columns ? item.label : null)}
                      onFocus={() => setOpenMenu(item.columns ? item.label : null)}
                      aria-expanded={item.columns ? openMenu === item.label : undefined}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-[0.83rem] font-semibold tracking-[0.01em] transition-colors ${
                        active ? "text-white" : "text-white/72 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {item.columns ? (
                        <span
                          aria-hidden="true"
                          className={`text-[0.6rem] transition-transform ${openMenu === item.label ? "rotate-180" : ""}`}
                        >
                          ▾
                        </span>
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={company.phoneHref}
              className="text-[0.88rem] font-bold text-white link-underline"
            >
              {company.phone}
            </a>
            <Link
              href="/contact"
              className="rounded-[2px] bg-[var(--color-red)] px-5 py-3 text-[0.72rem] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[var(--color-red-deep)]"
            >
              Free Inspection
            </Link>
          </div>

          <button
            className="inline-flex items-center gap-2 p-2 text-white lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </button>
        </div>

        {openMenu
          ? navItems
              .filter((i) => i.label === openMenu)
              .map((i) => (
                <MegaPanel key={i.label} item={i} onClose={() => setOpenMenu(null)} />
              ))
          : null}
      </header>

      {mobileOpen ? <MobileNav onClose={() => setMobileOpen(false)} /> : null}
    </>
  );
}
