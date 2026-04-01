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

export type ProjectImageAsset = {
  src: string;
  alt: string;
};

export type ProjectScreenshot = {
  title: string;
  caption: string;
  theme: VisualTheme;
  imageSrc?: string;
  imageAlt?: string;
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
  heroImage?: ProjectImageAsset;
  panelImage?: ProjectImageAsset;
  screenshots: ProjectScreenshot[];
  impact: string[];
  links: ProjectLinkGroup;
  theme: VisualTheme;
};

export type PhotoImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type PhotoEntry = {
  title: string;
  caption: string;
  image?: PhotoImageAsset;
  featuredOnHome?: boolean;
  cover?: boolean;
  homeOrder?: number;
  location?: string;
  theme?: VisualTheme;
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
