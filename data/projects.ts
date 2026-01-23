import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "phylodivas",
    title: "Project PhyloDIVas",
    stack: ["C#", "ASP.NET Core", "REST APIs", "AWS (Lightsail)", "Linux", "GitHub Actions", "CI/CD"],
    summary:
      "Web-based, one-stop platform for evolutionary gene and genome analysis. Service-oriented backend with independent REST APIs, deployed on AWS Lightsail with automated CI/CD pipelines.",
    bullets:[
      "Co-led development of a web-based, one-stop platform for evolutionary gene and genome analysis.",
      "Implemented a service-oriented backend using independent REST APIs in C# with clear separation of responsibilities.",
      "Managed production Linux instance on AWS Lightsail using Nginx, systemd services, SSL, and environment variables.",
      "Built automated CI/CD pipelines with GitHub Actions for continuous build, test, and deployment to AWS Lightsail."
    ],
    image: "",
    links: [
      { label: "Live", href: "https://phylodivas.com/"}
    ]
  },
  {
    slug: "nextstopphilly",
    title: "NextStopPhilly",
    stack: ["Flask", "Python", "JavaScript", "Bootstrap", "SQL", "Google Maps API", "Google OAuth"],
    summary:
      "Full-stack event-planning web app built in 24 hours at OwlHacks 2025. Displays local Philadelphia events on an interactive map with Google OAuth authentication and dynamic calendar scheduling.",
    bullets: [
      "Built a full-stack event-planning web app in 24 hours displaying local Philadelphia events on an interactive map.",
      "Implemented user authentication with Google OAuth and dynamic calendar scheduling backed by SQL.",
      "Integrated maps and geolocation APIs to visualize event data and plan itineraries."
    ],
    image: "",
    links: [
      { label: "Devpost", href: "https://devpost.com/software/nextstopphilly" },
      { label: "GitHub", href: "https://github.com/DenysByrchak/OwlHacks2025" }
    ]
  },
  {
    slug: "forkscore",
    title: "ForkScore",
    stack: ["ASP.NET Core MVC", "C#", "SQL Server", "Swagger", "Postman", "Razor Views", "Google Maps API", "Git"],
    summary:
      "Full-stack web application for restaurant pages and reviews with role-based user access. Custom REST APIs supporting CRUD operations, Google Maps integration, and a dynamic Razor Views front-end.",
    bullets: [
      "Co-developed a full-stack web application for restaurant pages and reviews with role-based user access.",
      "Built custom REST APIs supporting CRUD operations with complex data types, tested via Swagger and Postman.",
      "Integrated Google Maps API for restaurant location display.",
      "Developed dynamic front-end with Razor Views and integrated SQL Server using stored procedures for data persistence."
    ],
    image: "",
    links: [
      { label: "Live", href: "https://cis-iis2.temple.edu/Spring2025/CIS3342_tun32527/TermProject"},
      //{ label: "Github - not yet public", href: ""} <- Uncomment when repo is public
    ]
  },
  {
    slug: "geovii-dev",
    title: "geovii.dev",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    summary:
      "Personal portfolio with a custom multi-theme system, responsive design, and smooth animations. Built with Next.js App Router and deployed on Vercel.",
    bullets: [
      "Built with Next.js App Router, React, and TypeScript with modular component architecture.",
      "Implemented 9-theme color system with localStorage persistence and responsive mobile navigation.",
      "Deployed via Vercel CI/CD with custom domain, SEO metadata, and optimized performance."
    ],
    image: "",
    links: [
      { label: "Live", href: "https://geovii.dev"},
      { label: "GitHub", href: "https://github.com/GeorgeVekios/geovii.dev"}
    ]
  }
]