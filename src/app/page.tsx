import WelcomeHero from "@/components/WelcomeHero";
import Section from "@/components/Section";
import ProjectsGrid from "@/components/ProjectGrid";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <WelcomeHero />

      {/* Hero's buttons jump */}
      <Section id="next" title="Featured Projects" right={
        <Link href="/projects" className="text-sm text-black/60 dark:text-white/60 hover:underline underline-offset-4">
          See all →
        </Link>
      }>
        <ProjectsGrid items={projects.slice(0, 2)} />
      </Section>
    </>
  );
}
