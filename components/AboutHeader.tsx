import Image from "next/image";
import { AboutContent } from "@/types";
import FadeIn from "@/components/FadeIn"; // ⬅️ add

export default function AboutHeader({ data }: { data: AboutContent }) {
  const { avatar, intro } = data;

  return (
    <FadeIn> {/* subtle entrance for the header block */}
      <div className="max-w-3xl mx-auto text-center">
        {avatar && (
          <FadeIn delay={0.10}>
            <div className="mx-auto relative h-20 w-20 rounded-full overflow-hidden ring-1 ring-black/10 dark:ring-white/10">
              <Image src={avatar} alt="Profile photo" fill sizes="80px" className="object-cover" />
            </div>
          </FadeIn>
        )}

        {intro.map((p, i) => (
          <FadeIn key={p} delay={0.08 * (i + 1)}>
            <p className="mt-5 text-base sm:text-lg text-black/75 dark:text-white/75">{p}</p>
          </FadeIn>
        ))}
      </div>
    </FadeIn>
  );
}
