import Image from "next/image";
import Card from "@/components/Card";
import { AboutContent } from "@/types";

export default function AboutIntro({ data }: { data: AboutContent }) {
  const { avatar, intro, strengths, learning } = data;

  return (
    <>
      {/* Centered Intro */}
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

      {/* Two cards like experience */}
      <div className="mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
        <Card>
          <h3 className="text-base sm:text-lg font-semibold">
            What I'm Good At
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
      </div>
    </>
  );
}
