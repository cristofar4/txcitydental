"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

/** How much faster than real time the clip plays (1 = normal). */
const PLAYBACK_RATE = 1.4;
/** Max angle, in degrees, the video plane tilts toward the cursor. */
const TILT = 7;

/**
 * Cinematic hero video with a real sense of depth: a slow ambient "camera"
 * drift plus a cursor driven 3D angle tilt. Falls back to a still, untilted
 * frame when the visitor prefers reduced motion.
 */
export function HeroVideo() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 55, damping: 18, mass: 0.6 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [TILT, -TILT]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [-TILT, TILT]);

  // Nudge the playback speed so slow footage feels livelier.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const apply = () => {
      v.playbackRate = PLAYBACK_RATE;
    };
    apply();
    v.addEventListener("loadedmetadata", apply);
    return () => v.removeEventListener("loadedmetadata", apply);
  }, []);

  // Track the cursor for the angle tilt.
  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce, mx, my]);

  return (
    <div className="absolute inset-0 overflow-hidden [perspective:1500px]">
      <motion.div
        className="absolute inset-0 [transform-style:preserve-3d] will-change-transform"
        style={reduce ? undefined : { rotateX, rotateY }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 h-full w-full object-cover ${reduce ? "scale-110" : "animate-camera3d"}`}
        >
          <source src={site.heroVideo} type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
}
