"use client";
import { motion, type Transition } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;          
  y?: number;
  className?: string;
  mode?: "view" | "mount";
  ease?: [number, number, number, number];
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 2.0,           
  y = 8,
  className = "",
  mode = "view",
  ease = [0.22, 1, 0.36, 1],  
}: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className={className}>{children}</div>;

  const transition: Transition = { duration, ease, delay };

  if (mode === "mount") {
    return (
      <motion.div className={className + " will-change-transform"}
        initial={{ opacity: 0, y }} animate={{ opacity: 1, y: 0 }} transition={transition}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div className={className + " will-change-transform"}
      initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }} transition={transition}>
      {children}
    </motion.div>
  );
}
