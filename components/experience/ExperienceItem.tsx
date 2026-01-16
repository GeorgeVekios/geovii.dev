"use client";
import { Experience } from "@/types";
import { motion, type Transition } from "framer-motion";
import { useEffect, useState } from "react";

type Props = { item: Experience; delay?: number }; // optional stagger

export default function ExperienceItem({ item, delay = 0 }: Props) {
  const { company, role, team, start, end, bullets, link } = item;

  //render visible markup on first paint
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // slightly slower, proper easing tuple
  const transition: Transition = { duration: 1.5, ease: [0.22, 1, 0.36, 1], delay };

  const content = (
    <>
      <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <div>
          <h3 className="text-base sm:text-lg font-semibold">
            {role}
            {team ? ` — ${team}` : ""}
          </h3>
          <p className="text-sm text-black/60 dark:text-white/60">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4"
              >
                {company}
              </a>
            ) : (
              company
            )}
          </p>
        </div>
        <div className="text-sm text-black/60 dark:text-white/60">
          {start} – {end}
        </div>
      </header>

      <ul className="mt-3 space-y-1.5">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm text-black/75 dark:text-white/75">
            • {b}
          </li>
        ))}
      </ul>
    </>
  );

  //before hydration, return a plain <li> so it renders immediately
  if (!mounted) {
    return (
      <li className="rounded-2xl ring-1 ring-black/10 dark:ring-white/10 p-4 sm:p-5">
        {content}
      </li>
    );
  }

  //after mount, animate in-view
  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={transition}
      className="rounded-2xl ring-1 ring-black/10 dark:ring-white/10 p-4 sm:p-5"
    >
      {content}
    </motion.li>
  );
}
