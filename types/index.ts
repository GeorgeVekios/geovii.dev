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

export type Experience = {
  company: string;
  role: string;
  team?: string;
  start: string;
  end: string;
  location?: string;
  link?: string;
  bullets: string[];
};