import Section from "@/components/Section";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import SocialLinks from "@/components/SocialLinks";
import ProjectsGrid from "@/components/ProjectGrid";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Section>
        <Hero />
        <div className="mt-6">
          <Highlights items={site.highlights} />
        </div>
        <div className="mt-4">
          <SocialLinks />
        </div>
      </Section>

      <Section
        className="mt-14"
        title="Featured Projects"
        right={
          <Link
            href="/projects"
            className="text-sm text-black/60 dark:text-white/60 hover:underline underline-offset-4"
          >
            See all →
          </Link>
        }
      >
        <ProjectsGrid items={projects.slice(0, 2)} />
      </Section>
    </>
  );
}
