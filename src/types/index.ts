export type VisualTheme =
  | "linen"
  | "stone"
  | "forest"
  | "sea"
  | "midnight"
  | "graphite";

export type NavItem = {
  label: string;
  href: string;
};

export type ProjectLinkGroup = {
  live?: string;
  repository?: string;
};

export type ProjectScreenshot = {
  title: string;
  caption: string;
  theme: VisualTheme;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  problem: string;
  role: string;
  whatIBuilt: string[];
  stack: string[];
  screenshots: ProjectScreenshot[];
  impact: string[];
  links: ProjectLinkGroup;
  theme: VisualTheme;
};

export type PhotoEntry = {
  title: string;
  location: string;
  caption: string;
  theme: VisualTheme;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
};

export type ContactLink = {
  label: string;
  href: string;
  value: string;
};
