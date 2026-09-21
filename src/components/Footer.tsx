import Link from "next/link";
import { Logo } from "./Logo";
import { company, addressLines, credentials } from "@/content/company";
import { services } from "@/content/services";
import { roofTypes } from "@/content/roof-types";
import { serviceAreas } from "@/content/areas";
import { Stars } from "./ui";

const col = "text-[0.85rem] text-white/60 hover:text-white transition-colors";

export function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal-deep)] pb-28 lg:pb-0">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2.6fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-xs text-[0.9rem] leading-relaxed text-white/55">
              A Plano-based roofing company serving Dallas, Fort Worth and the
              surrounding communities since {company.foundedYear}.
            </p>
            <a
              href={company.phoneHref}
              className="mt-7 block font-[family-name:var(--font-display)] text-3xl font-extrabold text-white"
            >
              {company.phone}
            </a>
            <address className="mt-4 not-italic text-[0.88rem] leading-relaxed text-white/55">
              {addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <div className="mt-6 flex items-center gap-3">
              <Stars className="text-sm" />
              <span className="text-[0.8rem] text-white/60">
                {company.googleRating} · {company.googleReviewCount} Google reviews
              </span>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="eyebrow mb-4 text-white/40">Services</p>
              <ul className="space-y-2.5">
                {services
                  .filter((s) =>
                    [
                      "residential-roofing",
                      "roof-replacement",
                      "roof-repair",
                      "storm-damage-roof-repair",
                      "gutters",
                      "multi-family",
                    ].includes(s.slug),
                  )
                  .map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className={col}>
                        {s.navTitle}
                      </Link>
                    </li>
                  ))}
                <li>
                  <Link href="/services" className={`${col} font-semibold`}>
                    All services →
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4 text-white/40">Roof Types</p>
              <ul className="space-y-2.5">
                {roofTypes.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/roof-types/${r.slug}`} className={col}>
                      {r.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4 text-white/40">Service Areas</p>
              <ul className="space-y-2.5">
                {serviceAreas.slice(0, 9).map((a) => (
                  <li key={a.slug}>
                    <Link href={`/service-areas/${a.slug}`} className={col}>
                      {a.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/service-areas" className={`${col} font-semibold`}>
                    All areas →
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4 text-white/40">Company</p>
              <ul className="space-y-2.5">
                <li><Link href="/about" className={col}>About</Link></li>
                <li><Link href="/about/team" className={col}>Our Team</Link></li>
                <li><Link href="/credentials" className={col}>Credentials</Link></li>
                <li><Link href="/warranty" className={col}>Warranty Options</Link></li>
                <li><Link href="/gallery" className={col}>Our Work</Link></li>
                <li><Link href="/reviews" className={col}>Reviews</Link></li>
                <li><Link href="/referral-program" className={col}>Referral Rewards</Link></li>
                <li><Link href="/contact" className={col}>Contact</Link></li>
                <li><Link href="/site-map" className={col}>Site Map</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-8">
          <span className="eyebrow text-white/35">Accredited with</span>
          {credentials.slice(0, 6).map((c) => (
            <span
              key={c.name}
              className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-white/45"
            >
              {c.name}
            </span>
          ))}
          <Link
            href="/credentials"
            className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--color-red)]"
          >
            View credentials →
          </Link>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-[0.75rem] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="/site-map" className="hover:text-white/70">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[55] grid grid-cols-2 border-t border-white/10 lg:hidden">
      <a
        href={company.phoneHref}
        className="flex items-center justify-center gap-2 bg-[var(--color-charcoal)] py-4 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-white"
      >
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-[var(--color-red)] py-4 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-white"
      >
        Free Inspection
      </Link>
    </div>
  );
}
