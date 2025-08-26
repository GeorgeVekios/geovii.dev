import Card from "@/components/Card";
import { EducationItem } from "@/types";
import FadeIn from "@/components/FadeIn";

export default function EducationCard({ items }: { items: EducationItem[] }) {
  if (!items?.length) return null;

  return (
    <div className="mt-8 max-w-5xl mx-auto">
      <FadeIn delay={0.50}>
      <Card className="p-0">
        {/* Section header */}
        <div className="px-4 sm:px-5 py-4 border-b border-black/10 dark:border-white/10">
          <h3 className="text-xl sm:text-2xl font-semibold">Education</h3>
        </div>

        <ul className="p-4 sm:p-5">
          {items.map((ed, i) => (
            <li
              key={`${ed.school}-${ed.degree}-${i}`}
              className={
                i > 0
                  ? "pt-5 mt-5 border-t border-black/10 dark:border-white/10"
                  : ""
              }
            >
              {/* Degree */}
              <h4 className="text-lg sm:text-xl font-semibold">{ed.degree}</h4>

              {/* Row 1: School (left) · Date (right) */}
              {(ed.school || ed.end) && (
                <div className="mt-0.5 flex items-baseline justify-between gap-2">
                  <p className="text-sm text-black/70 dark:text-white/70 min-w-0">
                    {ed.school}
                  </p>
                  <p className="text-sm text-black/70 dark:text-white/70 shrink-0 text-right">
                    {ed.end}
                  </p>
                </div>
              )}

              {/* Row 2: Location (left) · GPA (right, no-wrap) */}
              {(ed.location || ed.gpa) && (
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-sm text-black/60 dark:text-white/60 min-w-0">
                    {ed.location}
                  </p>
                  {ed.gpa ? (
                    <p className="text-sm font-medium text-black/70 dark:text-white/75 shrink-0 whitespace-nowrap">
                      {ed.gpa} GPA
                    </p>
                  ) : (
                    <span />
                  )}
                </div>
              )}

              {/* Optional bullets */}
              {ed.bullets?.length ? (
                <ul className="mt-3 space-y-1.5 text-sm text-black/75 dark:text-white/75">
                  {ed.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </Card>
      </FadeIn>
    </div>
  );
}
