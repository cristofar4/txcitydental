"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wraps every route so navigations get a smooth, subtle transition.
 * `template.tsx` re-mounts on each navigation (unlike `layout.tsx`).
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
