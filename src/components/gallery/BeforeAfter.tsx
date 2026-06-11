"use client";

import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { Photo } from "@/components/media/Photo";

/**
 * Draggable before/after comparison built from real photography. A single smile
 * photo is shown on both sides; the "before" side is tinted duller and slightly
 * yellow while the "after" side is brightened, so it reads as a real
 * transformation. Pass explicit beforeImg / afterImg for true clinical pairs.
 */
export function BeforeAfter({
  photo,
  beforeImg,
  afterImg,
  uid,
  className,
}: {
  photo?: string;
  beforeImg?: string;
  afterImg?: string;
  uid: string;
  className?: string;
}) {
  const [pos, setPos] = useState(52);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const afterSrc = afterImg ?? photo;
  const beforeSrc = beforeImg ?? photo;

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
      className={`relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-3xl bg-ink shadow-card ${className ?? ""}`}
      onPointerDown={(e) => {
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        setDragging(true);
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging && update(e.clientX)}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
    >
      {/* AFTER (bright, the result) */}
      <div className="absolute inset-0">
        <Photo
          src={afterSrc}
          alt="After treatment, a bright, confident smile"
          sizes="(max-width:768px) 100vw, 50vw"
          fallbackAccent="teal"
          className="h-full w-full"
          imgClassName="brightness-105 saturate-[1.08] contrast-[1.05]"
        />
        <span className="absolute right-4 top-4 rounded-full bg-brand-600/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
          After
        </span>
      </div>

      {/* BEFORE (duller, clipped overlay) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Photo
          src={beforeSrc}
          alt="Before treatment"
          sizes="(max-width:768px) 100vw, 50vw"
          fallbackAccent="gold"
          className="h-full w-full"
          imgClassName="sepia-[.42] saturate-[.72] brightness-90 contrast-[.95]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink backdrop-blur">
          Before
        </span>
      </div>

      {/* Divider + handle */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(12,31,26,0.12)]"
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
      {/* uid kept for stable identity across instances */}
      <span hidden>{uid}</span>
    </div>
  );
}
