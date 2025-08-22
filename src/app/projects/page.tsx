import Section from "@/components/Section";
import ProjectsGrid from "@/components/ProjectGrid";
import { projects } from "@/data/projects";

export default function ProjectsPage(){
  return (
    <Section title="Projects">
      <ProjectsGrid items={projects} />
    </Section>
  );
}