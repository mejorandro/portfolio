import Link from "next/link";
import { PhotoCard } from "@/components/shared/photo-card";
import { PostCard } from "@/components/shared/post-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { VisualPanel } from "@/components/shared/visual-panel";
import { WorkCard } from "@/components/shared/work-card";
import { blogPosts, photography, projects, siteConfig } from "@/data/site";

const featuredProject = projects[0];

export default function HomePage() {
  return (
    <>
      <section className="page-shell section-space pt-10 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-end">
          <div>
            <p className="eyebrow">Selected work & notes</p>

            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.94] tracking-[-0.04em] text-neutral-950 md:text-7xl lg:text-[5.6rem]">
              {siteConfig.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
              {siteConfig.subheadline}
            </p>

            <p className="mt-8 max-w-xl text-sm leading-7 text-neutral-500">
              {siteConfig.heroNote}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="rounded-full bg-neutral-950 px-5 py-3 text-sm text-white transition hover:bg-neutral-800"
              >
                View work
              </Link>
              <Link
                href="/blog"
                className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-neutral-700 transition hover:border-black/20 hover:text-neutral-950"
              >
                Read notes
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[2.25rem] border border-black/6 bg-white p-3 shadow-[0_18px_60px_rgba(17,24,39,0.06)]">
              <div className="aspect-[4/5]">
                <VisualPanel
                  theme={featuredProject.theme}
                  label={featuredProject.title}
                  subtitle={featuredProject.description}
                  imageSrc={featuredProject.panelImage?.src}
                  imageAlt={featuredProject.panelImage?.alt}
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-6 px-1">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">
                  Featured
                </p>
                <p className="mt-2 text-lg text-neutral-800">{featuredProject.title}</p>
              </div>

              <Link
                href="/work"
                className="text-sm text-neutral-500 transition hover:text-neutral-950"
              >
                Explore all work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell section-space border-t border-black/5">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Work"
            title="Published projects and product explorations."
            description="A curated selection of products, systems, and MVPs shaped by design thinking, architecture, and practical execution."
          />

          <blockquote className="max-w-lg text-lg leading-8 text-neutral-600">
            “Documenting how ideas become real products — through design, code, AI,
            and clear product thinking.”
          </blockquote>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <WorkCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="page-shell section-space border-t border-black/5">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Writing"
            title="Short notes on product, UX, and execution."
            description="A small blog for documenting decisions, lessons, and the process behind building things with more clarity."
          />

          <div className="space-y-5">
            {blogPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell section-space border-t border-black/5">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Photography"
            title="A visual layer to the work."
            description="A quieter gallery for places, mood, light, and perspective."
          />

          <Link
            href="/photography"
            className="text-sm text-neutral-500 transition hover:text-neutral-950"
          >
            View full gallery
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {photography.map((photo) => (
            <PhotoCard key={photo.title} photo={photo} />
          ))}
        </div>
      </section>
    </>
  );
}
