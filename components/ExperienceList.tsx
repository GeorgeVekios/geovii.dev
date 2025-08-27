import { Experience } from "@/types";
import ExperienceItem from "@/components/ExperienceItem";

export default function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <ul className="space-y-4">
      {items.map((e, i) => (
        <ExperienceItem
          key={`${e.company}-${e.start}-${i}`}
          item={e}
          delay={i * 0.35} // staggered entrance
        />
      ))}
    </ul>
  );
}
