"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="page-shell flex min-h-18 flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between md:py-5">
        <Link href="/" className="min-w-0">
          <p className="truncate text-[0.95rem] font-semibold tracking-[-0.02em] text-neutral-950">
            {siteConfig.name}
          </p>
          <p className="hidden text-sm text-neutral-500 md:block">
            {siteConfig.role}
          </p>
        </Link>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition ${
                  isActive ? "text-neutral-950" : "text-neutral-500 hover:text-neutral-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
