import { VisualPanel } from "@/components/shared/visual-panel";
import type { Project } from "@/types";

type WorkCardProps = {
  project: Project;
};

export function WorkCard({ project }: WorkCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-[0_16px_50px_rgba(17,24,39,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
      <div className="aspect-[4/3] p-3">
        <VisualPanel
          theme={project.theme}
          label={project.title}
          subtitle={project.category}
        />
      </div>

      <div className="px-6 pb-7 pt-2">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">
            {project.year}
          </p>
          <p className="text-sm text-neutral-500">{project.category}</p>
        </div>

        <p className="mt-4 text-lg leading-8 text-neutral-700">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/8 bg-neutral-50 px-3 py-1 text-xs text-neutral-600"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
