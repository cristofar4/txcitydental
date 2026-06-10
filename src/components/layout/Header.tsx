"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Star, CalendarHeart, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { site, navLinks } from "@/lib/site";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/motion";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Light treatment while floating over the dark hero; solid glass once scrolled.
  const light = !scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-void/80 text-white backdrop-blur lg:block">
        <div className="mx-auto flex max-w-[88rem] items-center justify-between px-10 py-2 text-xs">
          <span className="inline-flex items-center gap-2 text-brand-100/90">
            <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
            <strong className="font-semibold text-white">{site.stats.rating}/5</strong>
            from {site.stats.reviewCount}+ happy patients
          </span>
          <span className="inline-flex items-center gap-2 text-brand-100/80">
            <CalendarHeart className="h-3.5 w-3.5 text-electric-400" />
            Now welcoming new patients &amp; families
          </span>
          <a href={site.phoneHref} className="inline-flex items-center gap-2 font-semibold transition-colors hover:text-electric-300">
            <Phone className="h-3.5 w-3.5" />
            {site.phone}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className={cn("transition-all duration-500", scrolled ? "glass border-b border-white/40 shadow-soft" : "bg-transparent")}>
        <div className="mx-auto flex max-w-[88rem] items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
          <Logo tone={light ? "light" : "dark"} />

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    light
                      ? active ? "text-white" : "text-white/70 hover:text-white"
                      : active ? "text-brand-700" : "text-slate-600 hover:text-brand-700",
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-electric-400 to-iris-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className={cn(
                "hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors lg:inline-flex xl:hidden 2xl:inline-flex",
                light ? "text-white hover:text-electric-300" : "text-ink hover:text-brand-700",
              )}
            >
              <Phone className={cn("h-4 w-4", light ? "text-electric-300" : "text-brand-600")} />
              <span className="hidden 2xl:inline">{site.phone}</span>
            </a>
            <Magnetic className="hidden sm:inline-flex">
              <Button href="/appointment" size="sm">
                Book Now <ArrowRight className="h-4 w-4" />
              </Button>
            </Magnetic>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn("tap-target grid place-items-center rounded-full xl:hidden", light ? "text-white" : "text-ink")}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-50 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 bg-void/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[min(22rem,88vw)] flex-col bg-cloud shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              <div className="flex items-center justify-between border-b border-brand-100/70 px-6 py-4">
                <Logo href={null} />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="tap-target grid place-items-center rounded-full text-ink hover:bg-brand-50"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6" aria-label="Mobile">
                {navLinks.map((link, i) => {
                  const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium transition-colors",
                          active ? "bg-brand-50 text-brand-700" : "text-ink hover:bg-brand-50/60",
                        )}
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4 opacity-40" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="border-t border-brand-100/70 px-6 py-5">
                <Button href="/appointment" className="w-full" size="lg">
                  Book Appointment
                </Button>
                <a href={site.phoneHref} className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-brand-700">
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
