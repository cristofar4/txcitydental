"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Stars } from "@/components/ui/Stars";
import { MonogramAvatar } from "@/components/art/Portrait";
import type { Testimonial } from "@/lib/data/testimonials";

export function TestimonialsCarousel({
  testimonials,
  interval = 6500,
}: {
  testimonials: Testimonial[];
  interval?: number;
}) {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const count = testimonials.length;

  const go = useCallback(
    (next: number, direction: number) => {
      setState([(next + count) % count, direction]);
    },
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setState(([i]) => [(i + 1) % count, 1]), interval);
    return () => clearInterval(id);
  }, [paused, count, interval]);

  const active = testimonials[index];

  return (
    <div
      className="relative mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-8 shadow-card sm:p-12">
        <Quote className="absolute right-8 top-8 h-16 w-16 text-brand-50" aria-hidden="true" />

        <div className="relative min-h-[19rem] sm:min-h-[15rem]" aria-live="polite">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure
              key={index}
              custom={dir}
              initial={reduce ? { opacity: 0 } : { opacity: 0, x: dir >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir >= 0 ? -40 : 40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              <Stars rating={active.rating} size={20} />
              <blockquote className="mt-5 text-pretty text-lg leading-relaxed text-ink sm:text-xl">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4">
                <MonogramAvatar
                  initials={active.initials}
                  accent={active.accent}
                  className="h-12 w-12 text-sm"
                />
                <div>
                  <div className="font-semibold text-ink">{active.name}</div>
                  <div className="text-sm text-slate-500">
                    {active.treatment} · {active.location}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>

      {/* controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(index - 1, -1)}
          aria-label="Previous review"
          className="tap-target grid h-11 w-11 place-items-center rounded-full bg-white text-brand-700 shadow-card ring-1 ring-slate-100 transition-all hover:-translate-y-0.5 hover:text-brand-600"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Choose review">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Review ${i + 1} of ${count}`}
              onClick={() => go(i, i > index ? 1 : -1)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-brand-600" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(index + 1, 1)}
          aria-label="Next review"
          className="tap-target grid h-11 w-11 place-items-center rounded-full bg-white text-brand-700 shadow-card ring-1 ring-slate-100 transition-all hover:-translate-y-0.5 hover:text-brand-600"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
