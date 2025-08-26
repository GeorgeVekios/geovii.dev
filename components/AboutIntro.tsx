import Image from "next/image";
import Card from "@/components/Card";
import { AboutContent } from "@/types";

export default function AboutIntro({ data }: { data: AboutContent }) {
  const { avatar, intro, strengths, learning, education } = data;

  return (
    <>
      {/* Centered intro */}
      <div className="max-w-3xl mx-auto text-center">
        {avatar && (
          <div className="mx-auto relative h-20 w-20 rounded-full overflow-hidden ring-1 ring-black/10 dark:ring-white/10">
            <Image
              src={avatar}
              alt="Profile photo"
              fill
              className="object-cover"
              sizes="80px"
              priority
            />
          </div>
        )}

        {intro.map((p) => (
          <p
            key={p}
            className="mt-5 text-base sm:text-lg text-black/75 dark:text-white/75"
          >
            {p}
          </p>
        ))}
      </div>

      {/* Cards: strengths, learning, education */}
      <div className="mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <Card>
          <h3 className="text-base sm:text-lg font-semibold">
            What I’m good at
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-left text-black/75 dark:text-white/75">
            {strengths.map((s) => (
              <li key={s}>• {s}</li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="text-base sm:text-lg font-semibold">
            Currently learning
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-left text-black/75 dark:text-white/75">
            {learning.map((l) => (
              <li key={l}>• {l}</li>
            ))}
          </ul>
        </Card>

        {education?.length ? (
          <Card>
            <h3 className="text-base sm:text-lg font-semibold">Education</h3>
            <ul className="mt-3 space-y-4">
              {education.map((ed) => (
                <li
                  key={`${ed.school}-${ed.degree}`}
                  className="text-sm text-left text-black/75 dark:text-white/75"
                >
                  <p className="font-medium">{ed.degree}</p>
                  <p className="text-black/60 dark:text-white/60">
                    {ed.school} · {ed.end}
                  </p>
                  {ed.bullets?.length ? (
                    <ul className="mt-2 space-y-1.5">
                      {ed.bullets.map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </Card>
        ) : null}
      </div>
    </>
  );
}
