import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { contactLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ways to get in touch.",
};

export default function ContactPage() {
  return (
    <section className="page-shell section-space pt-12 md:pt-16">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Contact"
          title="A quieter place for reaching out."
          description="Open for thoughtful conversations, questions, or simple hellos."
        />

        <div className="space-y-4">
          {contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center justify-between rounded-[1.5rem] border border-black/6 bg-white px-6 py-5 shadow-[0_16px_50px_rgba(17,24,39,0.05)] transition hover:border-black/12 hover:shadow-[0_20px_60px_rgba(17,24,39,0.08)]"
            >
              <span className="text-sm uppercase tracking-[0.18em] text-neutral-400">
                {link.label}
              </span>
              <span className="text-neutral-800">{link.value}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
