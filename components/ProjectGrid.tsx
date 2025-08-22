import { Project } from "@/types";
import ProjectCard from "@/components/ProjectCard"

type Props = { items: Project[] };

export default function ProjectsGrid({items }: Props) {
  return (
    <ul className="grid sm:grid-cols-2 gap-6">
      {items.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </ul>
  );
}