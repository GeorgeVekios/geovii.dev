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

export type EducationItem = {
  school: string;
  degree: string;
  end: string;
  location?: string;
  gpa?: string;
  bullets?: string[];
}

export type AboutContent = {
  avatar?: string;
  intro: string[]; //bullets
  strengths: string[]; //bullets
  learning: string[]; //bullets
  education: EducationItem[];
};