import { CalendarCheck, MessageCircleHeart, Smile } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Book in 60 seconds",
    text: "Request your visit online or call us. Tell us what you need and when works for you — we'll confirm fast.",
  },
  {
    icon: MessageCircleHeart,
    step: "02",
    title: "Meet your care team",
    text: "Relax in our calming studio. We'll listen, gently examine, and build a clear, no-pressure plan just for you.",
  },
  {
    icon: Smile,
    step: "03",
    title: "Love your smile",
    text: "Receive comfortable, expert treatment and leave with a healthier, brighter smile — and a team in your corner.",
  },
];

export function Process() {
  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Simple From Start to Smile"
          title="Your visit, in three easy steps"
          lead="We've made getting world-class dental care effortless — from your first click to your brightest smile."
        />

        <Stagger className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent md:block" aria-hidden="true" />
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.step}>
                <div className="relative flex h-full flex-col items-center text-center">
                  <div className="relative grid h-18 w-18 place-items-center rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100">
                    <span className="grid h-full w-full place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-gold-400 text-xs font-bold text-ink shadow-sm">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{s.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
