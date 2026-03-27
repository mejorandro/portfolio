import type { Metadata } from "next";
import { PostCard } from "@/components/shared/post-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on building products, design decisions, and technical execution.",
};

export default function BlogPage() {
  return (
    <section className="page-shell section-space pt-12 md:pt-16">
      <SectionHeading
        eyebrow="Blog"
        title="A small journal around building digital products well."
        description="Thoughts on product decisions, interface clarity, architecture, and the quieter parts of execution that usually matter the most."
      />

      <div className="mt-12 space-y-5">
        {blogPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
