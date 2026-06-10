"use client";

import Image, { type ImageLoaderProps } from "next/image";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { accentGradient, type AccentKey } from "@/lib/accents";
import { ToothMark } from "@/components/art/icons";

/** Serve responsive images straight from Unsplash's CDN (no build-time fetch). */
function unsplashLoader({ src, width, quality }: ImageLoaderProps) {
  const base = src.split("?")[0];
  if (!base.includes("images.unsplash.com")) return src;
  return `${base}?auto=format&fit=crop&w=${width}&q=${quality ?? 72}`;
}

type Overlay = "none" | "bottom" | "brand" | "dark" | "soft";

const overlays: Record<Overlay, string> = {
  none: "",
  bottom: "bg-gradient-to-t from-ink/75 via-ink/10 to-transparent",
  dark: "bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10",
  brand: "bg-gradient-to-tr from-brand-900/70 via-brand-700/20 to-transparent",
  soft: "bg-gradient-to-t from-ink/30 to-transparent",
};

export function Photo({
  src,
  alt,
  fallback,
  fallbackAccent = "ocean",
  sizes = "100vw",
  priority,
  overlay = "none",
  zoom = false,
  className,
  imgClassName,
  rounded,
}: {
  src?: string;
  alt: string;
  /** Custom node rendered behind the image (and shown if it fails to load). */
  fallback?: ReactNode;
  fallbackAccent?: AccentKey;
  sizes?: string;
  priority?: boolean;
  overlay?: Overlay;
  zoom?: boolean;
  className?: string;
  imgClassName?: string;
  rounded?: string;
}) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const showImg = Boolean(src) && !failed;

  return (
    <div className={cn("relative overflow-hidden bg-brand-950", rounded, className)}>
      {/* Branded fallback, always present, visible while loading or on error */}
      <div className="absolute inset-0" aria-hidden="true">
        {fallback ?? (
          <div className="relative h-full w-full" style={{ background: accentGradient(fallbackAccent) }}>
            <div className="absolute inset-0 bg-dots opacity-20" />
            <ToothMark className="absolute -right-6 -bottom-6 h-40 w-40 rotate-12 text-white/10" />
          </div>
        )}
      </div>

      {showImg && (
        <Image
          loader={unsplashLoader}
          src={src as string}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          onLoad={() => setLoaded(true)}
          className={cn(
            "object-cover transition-[transform,opacity] duration-700 ease-out",
            loaded ? "opacity-100" : "opacity-0 scale-105 blur-sm",
            zoom && "group-hover:scale-[1.06]",
            imgClassName,
          )}
        />
      )}

      {overlay !== "none" && (
        <div className={cn("pointer-events-none absolute inset-0", overlays[overlay])} aria-hidden="true" />
      )}
    </div>
  );
}
