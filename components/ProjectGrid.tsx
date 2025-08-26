"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types";

const parent = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function ProjectsGrid({ items }: { items: Project[] }) {
  return (
    <motion.ul
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid sm:grid-cols-2 gap-6"
    >
      {items.map((p) => <ProjectCard key={p.slug} project={p} />)}
    </motion.ul>
  );
}
