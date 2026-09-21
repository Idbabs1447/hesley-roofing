import Link from "next/link";

export function Logo({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const isLight = tone === "light";
  return (
    <Link
      href="/"
      aria-label="Helsley Roofing Company — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span
        aria-hidden="true"
        className="grid h-11 w-11 shrink-0 place-items-center bg-[var(--color-red)] text-white"
      >
        <span className="font-[family-name:var(--font-display)] text-[1.05rem] font-extrabold leading-none tracking-[-0.06em]">
          HR
        </span>
      </span>
      <span className="leading-none">
        <span
          className={`block font-[family-name:var(--font-display)] text-[1.02rem] font-extrabold uppercase tracking-[0.03em] ${
            isLight ? "text-white" : "text-[var(--color-ink)]"
          }`}
        >
          Helsley
        </span>
        <span
          className={`mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.34em] ${
            isLight ? "text-white/55" : "text-[var(--color-muted)]"
          }`}
        >
          Roofing Co.
        </span>
      </span>
    </Link>
  );
}
