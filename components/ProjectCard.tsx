"use client";

import Image from "next/image";
import { motion, type Transition } from "framer-motion";
import { useEffect, useState } from "react";
import { Project } from "@/types";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  const { title, stack, summary, bullets, image, links } = project;

  //render visible content on first paint (prevents invisible initial state)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  //slightly slower + proper cubic-bezier easing
  const transition: Transition = { duration: 1.5, ease: [0.22, 1, 0.36, 1] };

  const content = (
    <>
      {image ? (
        <div className="relative h-44 w-full bg-black/5 dark:bg-white/5">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 50vw" 
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>

        <p className="mt-1 text-xs sm:text-sm text-black/60 dark:text-white/60">
          {stack.join(" • ")}
        </p>

        <p className="mt-3 text-sm text-black/75 dark:text-white/75">{summary}</p>

        <ul className="mt-3 space-y-1.5">
          {bullets.map((b) => (
            <li key={b} className="text-sm text-black/75 dark:text-white/75">
              • {b}
            </li>
          ))}
        </ul>

        {!!links?.length && (
          <div className="mt-4 flex flex-wrap gap-3">
            {links.map((l) => (
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
    </>
  );

  //before hydration, plain <li> so nothing is hidden
  if (!mounted) {
    return (
      <li className="group rounded-2xl ring-1 ring-black/10 dark:ring-white/10 hover:ring-black/20 dark:hover:ring-white/20 transition overflow-hidden">
        {content}
      </li>
    );
  }

  //after mount, animate on view + hover lift
  return (
    <motion.li
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={transition}
      whileHover={{ y: -8 }}
      whileTap={{ y: -1 }}
      className="group rounded-2xl ring-1 ring-black/10 dark:ring-white/10 hover:ring-black/20 dark:hover:ring-white/20 transition overflow-hidden"
    >
      {content}
    </motion.li>
  );
}
