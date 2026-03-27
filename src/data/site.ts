import type { BlogPost, ContactLink, NavItem, PhotoEntry, Project } from "@/types";

export const siteConfig = {
  name: "Alejandro Bermudez",
  role: "Senior Full-Stack Consultant",
  headline: "Building and documenting modern digital products.",
  subheadline:
    "Sharing the process behind web apps, AI-powered tools, product decisions, and real execution.",
  heroNote:
    "A curated portfolio for published projects, product thinking, visual explorations, and the craft behind building things well.",
};

export const navItems: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Photography", href: "/photography" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const projects: Project[] = [
  {
    slug: "growroutine",
    title: "GrowRoutine",
    category: "Product / AI",
    year: "2026",
    summary:
      "A personal growth platform designed to capture reflections, ideas, and learnings in a calmer, more structured way.",
    description:
      "Focused on turning scattered insights into a more intentional product experience through thoughtful UX, AI support, and long-term clarity.",
    stack: ["Next.js", "TypeScript", "Prisma", "MySQL", "OpenAI"],
    theme: "forest",
  },
  {
    slug: "frogai",
    title: "FrogAI",
    category: "Internal Tool / AI",
    year: "2026",
    summary:
      "An AI assistant concept for service desk workflows, documentation generation, and recurring pattern detection.",
    description:
      "Built around practical utility: reducing repetitive work, improving documentation quality, and surfacing useful operational signals.",
    stack: ["C#", ".NET", "OpenAI", "Jira", "Automation"],
    theme: "midnight",
  },
  {
    slug: "nutrition-agents",
    title: "AI Nutrition Agents",
    category: "Multi-Agent MVP",
    year: "2025",
    summary:
      "A multi-agent nutrition concept combining coaching, meal planning, and content generation in one product flow.",
    description:
      "Designed as an MVP where multiple AI roles collaborate to produce more complete, usable, and personalized outcomes.",
    stack: ["Next.js", "LangChain", "SQLite", "Gradio", "AI Agents"],
    theme: "stone",
  },
];

export const photography: PhotoEntry[] = [
  {
    title: "Desert Stillness",
    location: "Huacachina, Peru",
    caption: "Silence, scale, and perspective in a single frame.",
    theme: "stone",
  },
  {
    title: "Coastal Light",
    location: "Santa Marta, Colombia",
    caption: "A quieter kind of movement, framed by light and distance.",
    theme: "sea",
  },
  {
    title: "Mountain Air",
    location: "Costa Rica",
    caption: "Texture, elevation, and the kind of calm that sharpens thought.",
    theme: "linen",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "idea-to-usable-mvp",
    title: "From idea to usable MVP",
    category: "Product Thinking",
    date: "March 2026",
    readingTime: "4 min read",
    excerpt:
      "A simple way to move from rough concept to something clean, testable, and actually useful.",
  },
  {
    slug: "why-clarity-wins",
    title: "Why clarity matters more than feature count",
    category: "UX / Product",
    date: "March 2026",
    readingTime: "3 min read",
    excerpt:
      "Most products do not need more complexity. They need stronger decisions and fewer distractions.",
  },
  {
    slug: "documenting-the-build",
    title: "Documenting the build, not just the launch",
    category: "Building in Public",
    date: "February 2026",
    readingTime: "5 min read",
    excerpt:
      "The process behind a product often says more about its quality than the final screenshot ever will.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "hello@yourdomain.com",
    href: "mailto:hello@yourdomain.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://www.linkedin.com/in/yourprofile",
  },
  {
    label: "GitHub",
    value: "github.com/yourprofile",
    href: "https://github.com/yourprofile",
  },
];
