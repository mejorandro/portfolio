import type { BlogPost } from "@/types";

type PostCardProps = {
  post: BlogPost;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-[2rem] border border-black/6 bg-white/70 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.04)]">
      <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
        <span>{post.category}</span>
        <span className="h-1 w-1 rounded-full bg-neutral-300" />
        <span>{post.date}</span>
        <span className="h-1 w-1 rounded-full bg-neutral-300" />
        <span>{post.readingTime}</span>
      </div>

      <h3 className="mt-4 font-editorial text-3xl leading-none text-neutral-950">
        {post.title}
      </h3>

      <p className="mt-4 text-base leading-8 text-neutral-600">{post.excerpt}</p>
    </article>
  );
}
