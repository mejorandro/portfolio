import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { contactLinks } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Ways to get in touch.",
};

export default function ContactPage() {
  return (
    <section className="page-shell section-space pt-12 md:pt-16">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Contact"
          title="For collaborations, thoughtful product conversations, or simple inquiries."
          description="Kept intentionally minimal."
        />

        <div className="space-y-4">
          {contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center justify-between rounded-[1.5rem] border border-black/6 bg-white/70 px-6 py-5 shadow-[0_15px_50px_rgba(0,0,0,0.04)] transition hover:border-black/12"
            >
              <span className="text-sm uppercase tracking-[0.18em] text-neutral-500">
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
