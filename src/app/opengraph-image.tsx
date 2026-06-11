import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}, Luxury Dentistry in Texas City, TX`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamically generated social share image. Uses only Latin text + inline SVG
 * (no emoji / symbol glyphs) so it renders without any dynamic font fetch.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(at 20% 20%, #10b981 0px, transparent 45%), radial-gradient(at 85% 15%, #34d399 0px, transparent 40%), radial-gradient(at 70% 90%, #c9a85f55 0px, transparent 45%), #052e23",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 20,
              background: "linear-gradient(135deg, #34d399, #047857)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="44" height="44" viewBox="0 0 24 24" fill="white">
              <path d="M7.4 2.8C5.3 2.8 3.6 4.5 3.6 6.9c0 1.7.5 3.2.9 5 .3 1.5.5 3.1.7 5.1.16 1.6.5 2.7 1.3 2.7.9 0 1.1-1 1.35-2.6.25-1.5.45-2.5 1.4-2.5s1.15 1 1.4 2.5c.25 1.6.45 2.6 1.35 2.6.8 0 1.14-1.1 1.3-2.7.2-2 .4-3.6.7-5.1.4-1.8.9-3.3.9-5 0-2.4-1.7-4.1-3.8-4.1-1.8 0-2.8 1.05-4.05 1.05S9.2 2.8 7.4 2.8Z" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 700 }}>Texas City Dental</span>
            <span style={{ fontSize: 18, letterSpacing: 6, color: "#6ee7b7" }}>
              LUXURY DENTISTRY
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, maxWidth: 900 }}>
            A smile worth showing off.
          </span>
          <span style={{ fontSize: 28, color: "#a7f3d0", maxWidth: 780 }}>
            Premium general, cosmetic & family dentistry in Texas City, TX.
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#e7d4a0">
              <path d="M12 2l2.95 5.98 6.6.96-4.77 4.65 1.13 6.57L12 17.02 6.09 20.12l1.13-6.57L2.45 8.9l6.6-.96L12 2z" />
            </svg>
            <span style={{ color: "#e7d4a0", fontWeight: 700 }}>{site.stats.rating}/5</span>
          </div>
          <span style={{ color: "#a7f3d0" }}>{site.address.full}</span>
          <span style={{ color: "white", fontWeight: 700 }}>{site.phone}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
