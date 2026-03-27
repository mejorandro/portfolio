import type { BlogPost } from "@/types";

type PostCardProps = {
  post: BlogPost;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_16px_50px_rgba(17,24,39,0.05)] transition duration-300 hover:shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
      <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
        <span>{post.category}</span>
        <span className="h-1 w-1 rounded-full bg-neutral-300" />
        <span>{post.date}</span>
        <span className="h-1 w-1 rounded-full bg-neutral-300" />
        <span>{post.readingTime}</span>
      </div>

      <h3 className="mt-4 font-display text-3xl leading-none tracking-[-0.02em] text-neutral-950">
        {post.title}
      </h3>

      <p className="mt-4 text-base leading-8 text-neutral-600">{post.excerpt}</p>
    </article>
  );
}
