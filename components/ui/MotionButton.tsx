"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function MotionButton({
  href,
  children,
  variant = "default",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "accent";
}) {
  const baseStyles = "inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-medium transition-all";
  const variants = {
    default: "bg-surface border border-border hover:border-accent/50 hover:bg-surface-hover",
    accent: "bg-accent text-background hover:bg-accent-hover",
  };

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
      <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
        {children}
      </Link>
    </motion.div>
  );
}
