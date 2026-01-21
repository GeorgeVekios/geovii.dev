import Image from "next/image";
import { AboutContent } from "@/types";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutHeader({ data }: { data: AboutContent }) {
  const { avatar, intro } = data;

  return (
    <FadeIn mode="mount">
      <div className="max-w-3xl mx-auto text-center">
        {avatar && (
          <FadeIn delay={0.10}>
            <div className="mx-auto relative h-24 w-24 rounded-full overflow-hidden border-2 border-accent/30">
              <Image src={avatar} alt="Profile photo" fill sizes="96px" className="object-cover" />
            </div>
          </FadeIn>
        )}

        {intro.map((p, i) => (
          <FadeIn key={p} delay={0.08 * (i + 1)}>
            <p className="mt-5 text-base sm:text-lg text-muted">{p}</p>
          </FadeIn>
        ))}
      </div>
    </FadeIn>
  );
}
