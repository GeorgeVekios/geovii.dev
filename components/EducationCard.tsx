import Card from "@/components/Card";
import {EducationItem} from "@/types";

export default function EducationCard({ items }: { items: EducationItem[] }) {
  if (!items?.length) return null;

  return (
    <div className="mt-8">
      <Card>
        <h3 className="text-base sm:text-lg font-semibold">Education</h3>
        <ul className="mt-3 space-y-4">
          {items.map((ed) => (
            <li key={`${ed.school}-${ed.degree}`} className="text-sm text-left text-black/75 dark:text-white/75">
              <p className="font-medium">{ed.degree}</p>
              <p className="text-black/60 dark:text-white/60">
                {ed.school}{ed.location ? ` · ${ed.location}` : ""}{ed.end ? ` · ${ed.end}` : ""}
              </p>
              {ed.bullets?.length ? (
                <ul className="mt-2 space-y-1.5">
                  {ed.bullets.map((b) => <li key={b}>• {b}</li>)}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}