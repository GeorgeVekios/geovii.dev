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
            {team ? <span className="text-accent font-normal"> — {team}</span> : ""}
          </h3>
          <p className="text-sm text-muted">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                {company}
              </a>
            ) : (
              company
            )}
          </p>
        </div>
        <div className="text-sm text-muted tabular-nums">
          {start} – {end}
        </div>
      </header>

      <ul className="mt-3 space-y-1.5">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm text-muted">
            <span className="text-accent mr-1">›</span> {b}
          </li>
        ))}
      </ul>
    </>
  );

  const itemStyles = "rounded-xl bg-surface border border-border p-4 sm:p-5";

  //before hydration, return a plain <li> so it renders immediately
  if (!mounted) {
    return (
      <li className={itemStyles}>
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
      className={itemStyles}
    >
      {content}
    </motion.li>
  );
}
