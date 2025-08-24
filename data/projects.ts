import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "phylodivas",
    title: "Project PhyloDIVas",
    stack: ["ASP.NET Core MVC", "C#", "SQL", "AWS", "HTML/CSS/JS"],
    summary:
      "Web-based phylogenetic analysis platform integrating NCBI Databank API. Caches data via SQL. Features an AI assistant trained on local genomic data. Development beginning in the fall.",
    bullets:[
      "Integrating NCBI API; cached results in SQL to minimize repeat queries.",
      "Training an AI assistant on local data to assist with analysis prompts.",
      "Deploying to AWS; designed cloud data workflows."
    ],
    image: "",
    links: [
      //when project is live - label: "Live", href: "https://..."
    ]
  },
  {
    slug: "forkscore",
    title: "ForkScore",
    stack: ["ASP.NET Core MVC", "C#", "SQL Server", "Swagger", "Razor Views"],
    summary:
      "Restaurant pages & reviews web app. Features include role-based access, secure auth, well-tested REST APIs, and Google Maps API integration.",
    bullets: [
      "Designed REST APIs with complex types; tested via Swagger/Postman.",
      "Implemented secure auth: login, registration, MFA, encrypted sensitive information.",
      "Dynamic UI with Razor; SQL stored procedures for pesistence."
    ],
    image: "",
    links: [
      { label: "Live", href: "https://cis-iis2.temple.edu/Spring2025/CIS3342_tun32527/TermProject"},
      { label: "Github - not yet public", href: ""}
    ]
  },
  {
    slug: "geovii-dev",
    title: "geovii.dev",
    stack: ["Next.js (App Router)", "React", "TypeScript", "Vercel", "Framer Motion"],
    summary:
      "Personal portfolio built with Next.js App Router and TypeScript. Modular component system with typed data, dark mode, SEO metadata, and fast deployments via Vercel.",
    bullets: [
      "Modular components + typed data sources  with path aliases.",
      "App Router layouts/pages, server components, image optimization, and prefetching.",
      "CI/CD on Vercel with custom domain, accessible semantics, and responsive design."
    ],
    image: "",
    links: [
      // { label: "Live", href: "https://geovii.dev"},
      // { label: "GitHub", href: "https://github.com/GeorgeVekios/geovii.dev"}
    ]
  }
]