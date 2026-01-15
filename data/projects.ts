import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "phylodivas",
    title: "Project PhyloDIVas",
    stack: ["C#", "ASP.NET Core", "REST APIs", "AWS Lightsail", "Linux", "GitHub Actions", "CI/CD"],
    summary:
      "Web-based, one-stop platform for evolutionary gene and genome analysis. Service-oriented backend with independent REST APIs, deployed on AWS Lightsail with automated CI/CD pipelines.",
    bullets: [
      "Co-led development of a web-based, one-stop platform for evolutionary gene and genome analysis.",
      "Implemented a service-oriented backend using independent REST APIs in C# with clear separation of responsibilities.",
      "Managed production Linux instance on AWS Lightsail using Nginx, systemd services, SSL, and environment variables.",
      "Built automated CI/CD pipelines with GitHub Actions for continuous build, test, and deployment to AWS Lightsail.",
    ],
    image: "",
    links: [
      //when project is live - label: "Live", href: "https://..."
    ]
  },
  {
    slug: "nextstopphilly",
    title: "NextStopPhilly",
    stack: ["Flask", "Python", "JavaScript", "Bootstrap", "SQL", "Google Maps API", "Google OAuth"],
    summary:
      "Full-stack event-planning web app built at OwlHacks 2025. Displays local Philadelphia events on an interactive map with Google OAuth authentication and dynamic calendar scheduling.",
    bullets: [
      "Built a full-stack event-planning web app that displays local Philadelphia events on an interactive map.",
      "Implemented user authentication with Google OAuth and dynamic calendar scheduling backed by a SQL database.",
      "Integrated maps and geolocation APIs to visualize event data, allowing users to plan and modify their itineraries.",
    ],
    image: "",
    links: []
  },
  {
    slug: "forkscore",
    title: "ForkScore",
    stack: ["ASP.NET Core MVC", "C#", "SQL Server", "Swagger", "Postman", "Razor Views", "Git"],
    summary:
      "Full-stack web application for restaurant pages and reviews with role-based user access. Features custom REST APIs supporting CRUD operations and a dynamic Razor Views front-end.",
    bullets: [
      "Co-developed a full-stack web application for restaurant pages and reviews with role-based user access.",
      "Built custom REST APIs supporting CRUD operations with complex data types, tested via Swagger and Postman.",
      "Developed dynamic front-end with Razor Views and integrated SQL Server using stored procedures for data persistence.",
    ],
    image: "",
    links: [
      { label: "Live", href: "https://cis-iis2.temple.edu/Spring2025/CIS3342_tun32527/TermProject"},
    ]
  },
  {
    slug: "geovii-dev",
    title: "geovii.dev",
    stack: ["Next.js (App Router)", "React", "TypeScript", "Vercel", "Framer Motion"],
    summary:
      "Personal portfolio built with Next.js App Router and TypeScript. Modular component system with typed data, dark mode, SEO metadata, and fast deployments via Vercel.",
    bullets: [
      "Modular components + typed data sources with path aliases.",
      "App Router layouts/pages, server components, image optimization, and prefetching.",
      "CI/CD on Vercel with custom domain, accessible semantics, and responsive design.",
    ],
    image: "",
    links: [
      // { label: "Live", href: "https://geovii.dev"},
      // { label: "GitHub", href: "https://github.com/GeorgeVekios/geovii.dev"}
    ]
  }
]