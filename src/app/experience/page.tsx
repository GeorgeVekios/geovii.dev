import Section from "@/components/Section";
import ExperienceList from "@/components/ExperienceList";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <Section title="Experience">
      <ExperienceList items={experience} />
    </Section>
  );
}
