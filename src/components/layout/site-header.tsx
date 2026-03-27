import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(245,241,234,0.78)] backdrop-blur-xl">
      <div className="page-shell flex h-18 items-center justify-between gap-6">
        <Link href="/" className="min-w-0">
          <p className="truncate text-[0.95rem] font-semibold tracking-[-0.02em] text-neutral-950">
            {siteConfig.name}
          </p>
          <p className="hidden text-sm text-neutral-500 md:block">
            {siteConfig.role}
          </p>
        </Link>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-600 transition hover:text-neutral-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
