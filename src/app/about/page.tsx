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
          title="A bit about the person behind the work."
          description="I’m building digital products that feel clear, useful, and thoughtfully made and in documenting part of that process along the way."
        />

        <div className="space-y-8 text-base leading-8 text-neutral-700 md:text-lg">
          <p>
            I work across backend, frontend, product thinking, and practical AI,
            with a strong preference for products that solve real problems and feel
            well considered from both a technical and user perspective.
          </p>

          <p>
            This site is not meant to feel like a sales page. It is closer to a
            curated workspace. A place to share selected projects, product
            decisions, experiments, and the process behind turning ideas into
            something real.
          </p>

          <p>
            Beyond software, photography has also become part of how I observe the
            world: slower, more intentional, more attentive to detail. In many
            ways, that same mindset shapes how I like to build.
          </p>

          <p>
            The work here reflects that balance: modern product development,
            thoughtful execution, and a quieter approach to creating things that are
            meant to last.
          </p>
        </div>
      </div>
    </section>
  );
}