export type ExternalLink = {label: string; href: string};

export type Project = {
  slug: string;
  title: string;
  stack: string[];
  summary: string;
  bullets: string[];
  image?: string;
  links?: ExternalLink[];
}