import Section from "@/components/layout/Section";
import ProjectsGrid from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export default function ProjectsPage(){
  return (
    <Section title="Projects">
      <ProjectsGrid items={projects} />
    </Section>
  );
}