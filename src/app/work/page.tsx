import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { WorkCard } from "@/components/shared/work-card";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description: "A selection of products, systems, and digital explorations.",
};

export default function WorkPage() {
  return (
    <section className="page-shell section-space pt-12 md:pt-16">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects with proof, not just presentation."
        description="Each project is meant to show the problem, what was built, the stack behind it, and the outcome. The goal is not to show decorative work. It is to show real product thinking and execution."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <WorkCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
