"use client";
import { motion} from "framer-motion";

export default function FadeIn({
  children,
  delay = 0,
  y=8
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.25, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}