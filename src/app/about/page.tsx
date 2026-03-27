import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "A short note about the person behind the work.",
};

export default function AboutPage() {
  return (
    <section className="page-shell section-space pt-12 md:pt-16">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="About"
          title="A consultant with a strong bias toward clarity, utility, and thoughtful execution."
          description="The goal is not to make louder software. It is to make software that feels more intentional, more useful, and better resolved."
        />

        <div className="space-y-8 text-base leading-8 text-neutral-700 md:text-lg">
          <p>
            I work across backend, frontend, product thinking, and practical AI to
            build modern digital products that solve real problems.
          </p>

          <p>
            This portfolio is designed to feel more like a curated workspace than a
            sales page. It is a place to document projects, experiments, decisions,
            and the visual side of the process.
          </p>

          <p>
            The focus is on clean architecture, thoughtful UX, strong fundamentals,
            and products that can move from idea to something real without losing
            clarity along the way.
          </p>
        </div>
      </div>
    </section>
  );
}
