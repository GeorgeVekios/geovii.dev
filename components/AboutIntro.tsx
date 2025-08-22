import { site } from "@/data/site";

export default function AboutIntro() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p className="lead">
        I'm a full-stack-leaning developer with a foundation in .NET, Java, SQL,
        and cloud. I care about clean, maintainable code and interfaces that
        make sense to users.
      </p>
      <p>
        I'm currently building a phylogenetic analysis platform that will be
        hosted on AWS. I also recently built a restaurant reviews app with
        secure auth. Profesionally I've created internal automations that cut
        error rates and time spend by huge margins. I enjoy turning messy,
        manual workflows into reliable, automated systems.
      </p>
      <h3> What I'm good at</h3>
      <ul>
        <li>Designing REST APIs and wiring them to real UIs</li>
        <li>Data modeling and SQL (including stored procedures)</li>
        <li>Shipping to cloud (AWS/Azure), CI/CD, and documentation</li>
        <li>Automation + DevOps minded problem solving</li>
      </ul>
      <h3>Currently learning</h3>
      <ul>
        <li>React + Tailwind + Framer Motion patterns</li>
        <li>TypeScript best practices</li>
        <li>Angular fundamentals</li>
        <li>Golang for application backends</li>
      </ul>

      <p> Quick Version:</p>
      <div className="mt-4">{site.highlights}</div>
      <p className="mt-6">
        You can reach me at{" "}
        <a
          className="underline underline-offset-4"
          href={`mailto:${site.email}`}
        >
          {site.email}
        </a>
        .
      </p>
    </div>
  );
}
