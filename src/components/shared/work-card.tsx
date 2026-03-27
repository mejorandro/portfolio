import { VisualPanel } from "@/components/shared/visual-panel";
import type { Project } from "@/types";

type WorkCardProps = {
  project: Project;
};

export function WorkCard({ project }: WorkCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-black/6 bg-white/70 shadow-[0_15px_50px_rgba(0,0,0,0.04)]">
      <div className="aspect-[4/3] p-3">
        <VisualPanel
          theme={project.theme}
          label={project.title}
          subtitle={project.category}
        />
      </div>

      <div className="px-6 pb-7 pt-2">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
            {project.year}
          </p>
          <p className="text-sm text-neutral-500">{project.category}</p>
        </div>

        <p className="mt-4 text-lg leading-8 text-neutral-700">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/8 px-3 py-1 text-xs text-neutral-600"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
