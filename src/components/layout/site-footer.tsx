import Link from "next/link";
import { contactLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white/70 py-10">
      <div className="page-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-neutral-400">
            Portfolio
          </p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-neutral-600">
            Projects, notes, and visual work presented with a quieter editorial approach.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-neutral-500 transition hover:text-neutral-950"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
