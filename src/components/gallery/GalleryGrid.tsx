"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Stethoscope } from "lucide-react";
import { BeforeAfter } from "@/components/gallery/BeforeAfter";
import { getAccent } from "@/lib/accents";
import type { GalleryCase } from "@/lib/data/gallery";

export function GalleryGrid({ cases }: { cases: GalleryCase[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(cases.map((c) => c.treatment)))],
    [cases],
  );
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? cases : cases.filter((c) => c.treatment === filter);

  return (
    <div>
      {/* Filter chips */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              filter === cat
                ? "bg-brand-600 text-white shadow-glow"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-brand-300 hover:text-brand-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((c) => {
            const accent = getAccent(c.accent);
            return (
              <motion.figure
                key={c.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-card"
              >
                <div className="p-3">
                  <BeforeAfter before={c.before} after={c.after} beforeImg={c.beforeImg} afterImg={c.afterImg} uid={c.id} />
                </div>
                <figcaption className="px-5 pb-6 pt-2">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ background: accent.soft, color: accent.text }}
                    >
                      {c.treatment}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.description}</p>
                  <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-slate-400">
                    <Stethoscope className="h-3.5 w-3.5" />
                    Treated by {c.doctor}
                  </p>
                </figcaption>
              </motion.figure>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
