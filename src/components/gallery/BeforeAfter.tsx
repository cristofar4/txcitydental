"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { SmileArt } from "@/components/art/SmileArt";
import type { SmileVariant } from "@/lib/data/gallery";

/**
 * Draggable before/after comparison. Works with pointer + touch + keyboard and
 * renders either procedural SmileArt or real photography when image paths are
 * supplied.
 */
export function BeforeAfter({
  before,
  after,
  beforeImg,
  afterImg,
  uid,
  className,
}: {
  before: SmileVariant;
  after: SmileVariant;
  beforeImg?: string;
  afterImg?: string;
  uid: string;
  className?: string;
}) {
  const [pos, setPos] = useState(52);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, pct)));
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(2, p - 3));
    else if (e.key === "ArrowRight") setPos((p) => Math.min(98, p + 3));
    else if (e.key === "Home") setPos(2);
    else if (e.key === "End") setPos(98);
  };

  return (
    <div
      ref={ref}
      className={`relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-3xl bg-slate-100 shadow-card ${className ?? ""}`}
      onPointerDown={(e) => {
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        setDragging(true);
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging && update(e.clientX)}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
    >
      {/* AFTER (base layer) */}
      <div className="absolute inset-0">
        {afterImg ? (
          <Image src={afterImg} alt="After treatment" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
        ) : (
          <SmileArt variant={after} uid={`${uid}-after`} className="h-full w-full" />
        )}
        <span className="absolute right-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
          After
        </span>
      </div>

      {/* BEFORE (clipped overlay) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {beforeImg ? (
          <Image src={beforeImg} alt="Before treatment" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
        ) : (
          <SmileArt variant={before} uid={`${uid}-before`} className="h-full w-full" />
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink backdrop-blur">
          Before
        </span>
      </div>

      {/* Divider + handle */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(11,31,58,0.1)]"
        style={{ left: `${pos}%` }}
      >
        <button
          type="button"
          role="slider"
          aria-label="Drag to compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKeyDown}
          className={`absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-white text-brand-700 shadow-lift ring-1 ring-brand-100 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 ${
            dragging ? "scale-110" : "animate-pulse-ring"
          }`}
        >
          <MoveHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
