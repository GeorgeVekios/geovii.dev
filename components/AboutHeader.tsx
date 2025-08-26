import Image from "next/image";
import { AboutContent } from "@/types";

export default function AboutHeader({ data }: { data: AboutContent }) {
  const { avatar, intro } = data;

  return (
    <div className="max-w-3xl mx-auto text-center">
      {avatar && (
        <div className="mx-auto relative h-20 w-20 rounded-full overflow-hidden ring-1 ring-black/10 dark:ring-white/10">
          <Image
            src={avatar}
            alt="Profile photo"
            fill
            sizes="80px"
            className="object-cover"
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
  );
}
