"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, CalendarHeart } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Mobile sticky action bar, always-available Call + Book buttons that slide in
 * after the user scrolls past the hero. Hidden on the booking page itself.
 */
export function StickyCTA() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/appointment") return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[calc(env(safe-area-inset-bottom)+0.6rem)] sm:hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
        >
          <div className="glass flex items-center gap-2 rounded-2xl border border-brand-100/70 p-2 shadow-lift">
            <a
              href={site.phoneHref}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-white text-sm font-semibold text-ink ring-1 ring-brand-100"
            >
              <Phone className="h-4 w-4 text-brand-600" />
              Call
            </a>
            <a
              href="/appointment"
              className="flex h-12 flex-[1.5] items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-semibold text-white shadow-glow"
            >
              <CalendarHeart className="h-4 w-4" />
              Book Appointment
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
