import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MapPinned, ArrowUpRight } from "lucide-react";
import { site, navLinks } from "@/lib/site";
import { services } from "@/lib/data/services";
import { Logo } from "@/components/brand/Logo";
import { Stars } from "@/components/ui/Stars";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-midnight text-brand-100/80">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-30" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[88rem] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-20">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Logo tone="light" href={null} />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-100/70">
            Luxury, comfort-first dentistry for Texas City families. Premium care,
            modern technology, and a team that treats you like one of our own.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <Stars rating={site.stats.rating} size={15} />
            <span className="text-sm">
              <strong className="text-white">{site.stats.rating}/5</strong>{" "}
              <span className="text-brand-100/60">· {site.stats.reviewCount}+ reviews</span>
            </span>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <SocialLink href={site.social.facebook} label="Facebook">
              <Facebook className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={site.social.instagram} label="Instagram">
              <Instagram className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={site.mapsDirections} label="Google Maps">
              <MapPinned className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>

        {/* Explore */}
        <nav className="lg:col-span-2" aria-label="Footer">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/appointment" className="font-semibold text-gold-300 transition-colors hover:text-gold-200">
                Book Online
              </Link>
            </li>
          </ul>
        </nav>

        {/* Services */}
        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Visit Us
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={site.mapsDirections}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 transition-colors hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                  <span className="mt-0.5 flex items-center gap-1 text-xs text-gold-300">
                    Get directions <ArrowUpRight className="h-3 w-3" />
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 transition-colors hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-brand-300" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="flex items-center gap-3 transition-colors hover:text-white">
                <Mail className="h-4 w-4 shrink-0 text-brand-300" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
              <div className="space-y-1">
                {site.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4">
                    <span className="text-brand-100/60">{h.day.slice(0, 3)}</span>
                    <span className={h.short === "Closed" ? "text-brand-100/40" : "text-brand-100/90"}>
                      {h.short}
                    </span>
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[88rem] flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-brand-100/50 sm:flex-row sm:px-8 lg:px-10">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/contact" className="transition-colors hover:text-white">Privacy</Link>
            <Link href="/contact" className="transition-colors hover:text-white">Terms</Link>
            <Link href="/contact" className="transition-colors hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-brand-100 ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  );
}
