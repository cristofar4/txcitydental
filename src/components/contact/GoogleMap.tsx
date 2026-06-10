import { MapPin, Navigation } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Keyless Google Maps embed, renders client-side in an iframe (no API key
 * required) with a floating address card and a directions deep-link.
 */
export function GoogleMap({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-slate-100 shadow-card ${className ?? ""}`}>
      <iframe
        title={`Map to ${site.name}`}
        src={site.mapsEmbedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[22rem] w-full grayscale-[0.15]"
        allowFullScreen
      />
      <div className="pointer-events-none absolute inset-x-4 bottom-4 sm:inset-x-auto sm:left-4 sm:max-w-xs">
        <div className="pointer-events-auto rounded-2xl bg-white/95 p-4 shadow-lift ring-1 ring-slate-100 backdrop-blur">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-ink">{site.name}</p>
              <p className="text-sm text-slate-500">
                {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
              </p>
              <a
                href={site.mapsDirections}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-600"
              >
                <Navigation className="h-4 w-4" /> Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
