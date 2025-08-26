import { AboutContent } from "@/types";

export const about: AboutContent = {
  avatar: "/george.jpg",
  intro: [
    "I’m a full-stack-leaning developer with a foundation in .NET, Java, SQL, and cloud. I care about clean, maintainable code and interfaces that make sense to users.",
    "Currently I'm building a phylogenetic analysis platform hosted on AWS. Recently I built a restaurant reviews app with secure auth, and internal automations in Microsoft's Power Platform. I enjoy turning messy, manual workflows into reliable, automated systems.",
  ],
  strengths: [
    "Designing REST APIs and wiring them to real UIs",
    "Data modeling and SQL (incl. stored procedures)",
    "Shipping to cloud (AWS/Azure), CI/CD, and documentation",
    "Automation + DevOps-minded problem solving",
  ],
  learning: [
    "React + Tailwind + Framer Motion patterns",
    "TypeScript best practices",
    "Angular fundamentals",
    "Golang for application backends"
  ],
  education:[
    {
      school: "Temple University",
      degree: "B.S. Information Science & Technology • Certificate in Computer Security and Digital Forensics",
      end: "Dec 2025",
      location: "Philadelphia, PA",
      gpa: "3.62/4.0",
      bullets: [
        "Dean's List 2025",
        "Relevant coursework: Data Structures, Database Management, Microservice Architecture, Network Architectures, Client-Side Web Scripting, Server-Side Web App Development, Software Security, Digital Forensics"
      ]
    }
  ]
};