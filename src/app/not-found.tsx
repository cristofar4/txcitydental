import Link from "next/link";
import { Home, CalendarHeart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ToothMark } from "@/components/art/icons";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden bg-gradient-to-b from-mist to-cloud px-4 pt-24">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-50 mask-fade-b" aria-hidden="true" />
      <ToothMark className="pointer-events-none absolute left-10 top-32 h-24 w-24 rotate-12 text-brand-100" />
      <ToothMark className="pointer-events-none absolute bottom-16 right-12 h-32 w-32 -rotate-12 text-brand-100" />
      <Container size="prose" className="relative text-center">
        <p className="font-display text-7xl font-semibold text-gradient sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
          This page took a coffee break
        </h1>
        <p className="mx-auto mt-4 max-w-md text-slate-600">
          We couldn&apos;t find what you were looking for, but your perfect smile is just a click away.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">
            <Home className="h-4 w-4" /> Back home
          </Button>
          <Button href="/appointment" variant="secondary">
            <CalendarHeart className="h-4 w-4 text-brand-600" /> Book a visit
          </Button>
        </div>
      </Container>
    </section>
  );
}
