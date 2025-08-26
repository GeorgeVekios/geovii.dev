"use client";
import { Experience } from "@/types";
import { motion } from "framer-motion";

type Props = { item: Experience; delay?: number }; // ⬅️ optional stagger

export default function ExperienceItem({ item, delay = 0 }: Props) {
  const { company, role, team, start, end, bullets, link } = item;

  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      className="rounded-2xl ring-1 ring-black/10 dark:ring-white/10 p-4 sm:p-5"
    >
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
    </motion.li>
  );
}
