import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VisualPanel } from "@/components/shared/visual-panel";
import { getProjectBySlug, projects } from "@/data/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title}`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="page-shell section-space pt-10 md:pt-14">
      <div className="max-w-5xl">
        <Link
          href="/work"
          className="text-sm text-neutral-500 transition hover:text-neutral-950"
        >
          ← Back to work
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
          <span>{project.category}</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>{project.year}</span>
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.94] tracking-[-0.04em] text-neutral-950 md:text-7xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600 md:text-xl">
          {project.summary}
        </p>

        <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-500">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.links.live ? (
            <Link
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-neutral-950 px-5 py-3 text-sm text-white transition hover:bg-neutral-800"
            >
              View live project
            </Link>
          ) : null}

          {project.links.repository ? (
            <Link
              href={project.links.repository}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-neutral-700 transition hover:border-black/20 hover:text-neutral-950"
            >
              View repository
            </Link>
          ) : null}
        </div>
      </div>

      <div className="mt-12 rounded-[2.5rem] border border-black/6 bg-white p-3 shadow-[0_18px_60px_rgba(17,24,39,0.06)]">
        <div className="aspect-[16/9]">
          <VisualPanel
            theme={project.theme}
            label={project.title}
            subtitle={project.description}
          />
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_16px_50px_rgba(17,24,39,0.04)]">
          <p className="eyebrow">Problem solved</p>
          <h2 className="mt-4 font-display text-3xl leading-none text-neutral-950 md:text-4xl">
            What the project needed to solve
          </h2>
          <p className="mt-5 text-base leading-8 text-neutral-600">{project.problem}</p>
        </article>

        <article className="rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_16px_50px_rgba(17,24,39,0.04)]">
          <p className="eyebrow">What I built</p>
          <h2 className="mt-4 font-display text-3xl leading-none text-neutral-950 md:text-4xl">
            My contribution to the product
          </h2>
          <p className="mt-5 text-base leading-8 text-neutral-600">{project.role}</p>

          <ul className="mt-6 space-y-3 text-base leading-8 text-neutral-700">
            {project.whatIBuilt.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 rounded-full bg-neutral-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-6 rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_16px_50px_rgba(17,24,39,0.04)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Stack</p>
            <h2 className="mt-4 font-display text-3xl leading-none text-neutral-950 md:text-4xl">
              Technologies used
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-neutral-500">
            A concise view of the technologies that shaped the implementation.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/8 bg-neutral-50 px-4 py-2 text-sm text-neutral-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <div className="max-w-3xl">
          <p className="eyebrow">Screenshots</p>
          <h2 className="mt-4 font-display text-4xl leading-[0.96] tracking-[-0.03em] text-neutral-950 md:text-5xl">
            Large visual frames for the product.
          </h2>
          <p className="mt-5 text-base leading-8 text-neutral-600">
            These sections are designed for large product screenshots. Right now they use styled placeholders so the structure is already ready when you swap in real images.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {project.screenshots.map((shot, index) => (
            <article
              key={`${project.slug}-${shot.title}`}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <div className="rounded-[2rem] border border-black/6 bg-white p-3 shadow-[0_16px_50px_rgba(17,24,39,0.04)]">
                <div className={index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}>
                  <VisualPanel
                    theme={shot.theme}
                    label={shot.title}
                    subtitle={shot.caption}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_16px_50px_rgba(17,24,39,0.04)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Result or impact</p>
            <h2 className="mt-4 font-display text-3xl leading-none text-neutral-950 md:text-4xl">
              What this project proves
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-neutral-500">
            The goal of this page is to make the work legible: not just what it looks like, but what it solved and what it demonstrates.
          </p>
        </div>

        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {project.impact.map((item) => (
            <li
              key={item}
              className="rounded-[1.5rem] border border-black/6 bg-neutral-50 px-5 py-5 text-sm leading-7 text-neutral-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
