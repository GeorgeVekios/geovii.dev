import { Experience } from "@/types";
import ExperienceItem from "@/components/ExperienceItem";

type Props = { items: Experience[] };

export default function ExperienceList({ items }: Props) {
  return (
    <ul className="space-y-4">
      {items.map((e, i) => (
        <ExperienceItem key={`${e.company}-${e.start}-${i}`} item={e} />
      ))}
    </ul>
  );
}
