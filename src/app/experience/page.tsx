import Section from "@/components/layout/Section";
import ExperienceList from "@/components/experience/ExperienceList";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <Section title="Experience">
      <ExperienceList items={experience} />
    </Section>
  );
}
