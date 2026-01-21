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
        <div className="relative h-44 w-full bg-surface-hover">
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
        <h3 className="text-base sm:text-lg font-semibold group-hover:text-accent transition-colors">{title}</h3>

        <p className="mt-1 text-xs sm:text-sm text-accent/80">
          {stack.join(" · ")}
        </p>

        <p className="mt-3 text-sm text-muted">{summary}</p>

        <ul className="mt-3 space-y-1.5">
          {bullets.map((b) => (
            <li key={b} className="text-sm text-muted">
              <span className="text-accent mr-1">›</span> {b}
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
                className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              >
                {l.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );

  const cardStyles = "group rounded-xl bg-surface border border-border hover:border-accent/30 transition-all overflow-hidden";

  //before hydration, plain <li> so nothing is hidden
  if (!mounted) {
    return (
      <li className={cardStyles}>
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
      whileHover={{ y: -6 }}
      whileTap={{ y: -1 }}
      className={cardStyles}
    >
      {content}
    </motion.li>
  );
}
