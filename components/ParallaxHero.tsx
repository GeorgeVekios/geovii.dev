"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function ParallaxHero({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);   // move up slightly
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section ref={ref} className="min-h-[70vh] sm:min-h-[80vh] flex items-center">
      <motion.div style={{ y, opacity }} className="w-full">
        {children}
      </motion.div>
    </section>
  );
}
