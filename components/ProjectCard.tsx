import Image from "next/image";
import { Project } from "@/types";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  const { title, stack, summary, bullets, image, links } = project;

  return (
    <li className="group rounded-2xl ring-1 ring-black/10 dark:ring-white/10 hover:ring-black/20 dark:hover:ring-white/20 transition overflow-hidden">
      {image ? (
        <div className="relative h-44 w-full bg-black/5 dark:bg-white/5">
          <Image
            src={image}
            alt=""
            fill
            sizes="{max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>

        <p className="mt-1 text-xs sm:text-sm text-black/60 dark:text-white/60">
          {stack.join(" • ")}
        </p>

        <p className="mt-3 text-sm text-black/75 dark:text-white/75">
          {summary}
        </p>

        <ul className="mt-3 space-y-1.5">
          {bullets.map((b) => (
            <li key={b} className="text-sm text-black/75 dark:text-white/75">
              • {b}{" "}
            </li>
          ))}
        </ul>

        {!!links?.length && (
          <div className="mt-4 flex flex-wrap gap-3">
            {links!.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium underline underline-offset-4 hover:opacity-80"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
