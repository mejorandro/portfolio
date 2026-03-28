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
    problem:
      "People consume useful ideas every day, but most of that knowledge gets lost because it is never captured, organized, or translated into something actionable. GrowRoutine was designed to make reflection faster, clearer, and more likely to become part of real personal growth.",
    role:
      "I designed and built the product direction end to end, including information architecture, interface direction, data modeling, AI-oriented flows, and the overall experience behind quick capture and structured reflection.",
    whatIBuilt: [
      "A cleaner reflection flow that makes saving ideas feel fast and intentional instead of heavy.",
      "A product structure for turning raw notes into summaries, insights, and clearer next steps.",
      "A scalable content model for reflections, sources, AI output, and growth areas.",
      "A more premium interface direction aligned with the identity of the brand.",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "MySQL", "OpenAI"],
    screenshots: [
      {
        title: "Dashboard overview",
        caption: "A calmer dashboard focused on quick capture, recent reflections, and progress visibility.",
        theme: "forest",
      },
      {
        title: "Reflection capture",
        caption: "A structured input flow for saving ideas, lessons, and notes without friction.",
        theme: "stone",
      },
      {
        title: "AI-assisted outputs",
        caption: "Summaries, insight layers, and growth signals presented as part of the learning loop.",
        theme: "sea",
      },
    ],
    impact: [
      "Turned a broad concept into a concrete product with a usable structure and clearer UX direction.",
      "Created a portfolio piece that shows product thinking, UI care, AI integration, and execution in one place.",
      "Established a stronger foundation for future growth features, analytics, and premium experiences.",
    ],
    links: {
      live: "https://growroutine.com",
    },
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
    problem:
      "Service desk teams often lose time on repeated explanations, inconsistent documentation, and manual follow-ups. The opportunity was to design an assistant that could make recurring work lighter while still fitting real operational workflows.",
    role:
      "I shaped the assistant around practical support scenarios, combining workflow analysis, prompt design, ticket-oriented outputs, and a product mindset focused on usefulness over novelty.",
    whatIBuilt: [
      "A concept for generating documentation directly from support and Jira-style workflows.",
      "An assistant flow for identifying recurring issues, useful signals, and patterns across tickets.",
      "A tone and messaging system designed to feel helpful, consistent, and aligned with real team usage.",
      "A clearer path from raw ticket data to more actionable operational insights.",
    ],
    stack: ["C#", ".NET", "OpenAI", "Jira", "Automation"],
    screenshots: [
      {
        title: "Operations overview",
        caption: "A higher-level view of support activity, recurring categories, and actionable signals.",
        theme: "midnight",
      },
      {
        title: "Documentation flow",
        caption: "A focused interface for converting ticket context into usable technical documentation.",
        theme: "graphite",
      },
      {
        title: "Pattern detection",
        caption: "A lightweight experience for surfacing repeated issues and follow-up opportunities.",
        theme: "sea",
      },
    ],
    impact: [
      "Demonstrated how AI can be applied to support workflows in a way that feels operationally useful.",
      "Reduced the gap between raw service desk activity and cleaner documentation outputs.",
      "Created a stronger internal-tool case study around automation, AI, and systems thinking.",
    ],
    links: {},
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
    problem:
      "Nutrition tools often feel fragmented: one part gives macros, another suggests meals, and another tries to motivate the user. This concept explored how a coordinated multi-agent system could deliver something more coherent and useful in a single experience.",
    role:
      "I designed the MVP structure, the collaboration between agents, and the product flow that turns user inputs into more complete meal-planning and coaching outputs.",
    whatIBuilt: [
      "A multi-agent architecture with distinct roles for coaching, planning, and content support.",
      "A product flow that turns user goals and body-composition inputs into more tailored suggestions.",
      "An MVP structure for validating how multiple agents can improve quality versus a single-response experience.",
      "A portfolio-ready concept that combines product thinking, AI orchestration, and usability.",
    ],
    stack: ["Next.js", "LangChain", "SQLite", "Gradio", "AI Agents"],
    screenshots: [
      {
        title: "Agent collaboration",
        caption: "A product view of multiple AI roles working together instead of producing disconnected outputs.",
        theme: "stone",
      },
      {
        title: "Nutrition plan output",
        caption: "Meal guidance shaped around user goals, structure, and a cleaner delivery experience.",
        theme: "linen",
      },
      {
        title: "MVP system view",
        caption: "A clearer representation of how the experience moves from intake to generated recommendations.",
        theme: "forest",
      },
    ],
    impact: [
      "Showed how multi-agent patterns can improve the usefulness of AI-driven product flows.",
      "Created a strong concept piece that combines interaction design, system thinking, and AI experimentation.",
      "Provided a clearer foundation for turning the idea into a more complete user-facing MVP.",
    ],
    links: {},
    theme: "stone",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

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
