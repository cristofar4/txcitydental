"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

/* ----------------------- Scroll progress bar ---------------------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand-500 via-electric-400 to-iris-500"
    />
  );
}

/* --------------------------- Parallax ----------------------------- */
export function Parallax({
  children,
  speed = 70,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

/* ------------------------- 3D Tilt card --------------------------- */
export function TiltCard({
  children,
  className,
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16 });
  const sy = useSpring(y, { stiffness: 180, damping: 16 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------- Magnetic ----------------------------- */
export function Magnetic({
  children,
  className,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={cn("inline-flex will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------- Word text reveal ----------------------- */
export function TextReveal({
  text,
  highlight = [],
  highlightClass = "text-gradient",
  className,
  delay = 0,
  stagger = 0.045,
  as: Tag = "span",
}: {
  text: string;
  highlight?: string[];
  highlightClass?: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "span" | "p";
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const isHi = (w: string) => highlight.includes(w.replace(/[.,!?]/g, ""));

  if (reduce) {
    return (
      <Tag className={className}>
        {words.map((w, i) => (
          <span key={i} className={isHi(w) ? highlightClass : undefined}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={cn("inline-block", isHi(w) && highlightClass)}
            initial={{ y: "115%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: delay + i * stagger }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* ---------------------------- Marquee ----------------------------- */
export function Marquee({
  children,
  reverse = false,
  className,
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  // Two grouped copies inside one animated track → seamless, no duplicate keys.
  const group = <div className={cn("flex shrink-0", className)}>{children}</div>;
  return (
    <div className={cn("flex w-max", reverse ? "animate-marquee-rev" : "animate-marquee")}>
      {group}
      {group}
    </div>
  );
}

export type { MotionValue };
