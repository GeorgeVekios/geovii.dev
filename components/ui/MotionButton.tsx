"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function MotionButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
      <Link
        href={href}
        className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium
                       ring-1 ring-black/15 dark:ring-white/20 hover:bg-black/8 dark:hover:bg-white/8 transition"
      >
        {children}
      </Link>
    </motion.div>
  );
}
