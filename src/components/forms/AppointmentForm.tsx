"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  User, Phone, Mail, CalendarDays, Check, ChevronRight, ChevronLeft,
  Stethoscope, UserRound, Sparkles, PartyPopper,
} from "lucide-react";
import { services } from "@/lib/data/services";
import { doctors } from "@/lib/data/doctors";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

const timeSlots = [
  { id: "morning", label: "Morning", note: "8 to 11 AM" },
  { id: "midday", label: "Midday", note: "11 to 2 PM" },
  { id: "afternoon", label: "Afternoon", note: "2 to 5 PM" },
  { id: "evening", label: "Evening", note: "5 to 6 PM" },
];

const stepsMeta = [
  { label: "Service", icon: Stethoscope },
  { label: "Schedule", icon: CalendarDays },
  { label: "Details", icon: UserRound },
];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-ink shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100";

interface FormState {
  service: string;
  patientType: string;
  doctor: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

const initial: FormState = {
  service: "",
  patientType: "",
  doctor: "no-preference",
  date: "",
  time: "",
  name: "",
  phone: "",
  email: "",
  notes: "",
};

export function AppointmentForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [done, setDone] = useState(false);

  // Prefill the doctor from a ?doctor=slug deep link (e.g. from a doctor card).
  // Reading window.location on mount is the recommended pattern here, doing it
  // in a lazy initializer would cause a server/client hydration mismatch.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const doc = params.get("doctor");
    if (doc && doctors.some((d) => d.slug === doc)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional URL → state sync on mount
      setForm((f) => ({ ...f, doctor: doc }));
    }
  }, []);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const today = new Date().toISOString().split("T")[0];

  const validateStep = (s: number) => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (s === 0) {
      if (!form.service) e.service = "Please choose a service.";
      if (!form.patientType) e.patientType = "Let us know if you're new or returning.";
    }
    if (s === 1) {
      if (!form.date) e.date = "Pick a preferred date.";
      if (!form.time) e.time = "Choose a time that suits you.";
    }
    if (s === 2) {
      if (form.name.trim().length < 2) e.name = "Please enter your name.";
      if (!/^[\d\s()+-]{7,}$/.test(form.phone)) e.phone = "Enter a valid phone number.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validateStep(step)) setStep((s) => Math.min(2, s + 1));
  };
  const back = () => setStep((s) => Math.max(0, s - 1));

  const submit = () => {
    if (!validateStep(2)) return;
    // Front-end demo: in production, POST to your scheduling provider / API route.
    setDone(true);
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-card sm:p-12"
      >
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
          <PartyPopper className="h-8 w-8" />
        </span>
        <h2 className="mt-6 text-2xl font-semibold text-ink sm:text-3xl">
          Request received, {form.name.split(" ")[0]}!
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty text-slate-600">
          Thank you for choosing Texas City Dental. A member of our care team will
          call you shortly to confirm your{" "}
          <strong className="text-ink">
            {services.find((s) => s.slug === form.service)?.title}
          </strong>{" "}
          appointment for <strong className="text-ink">{form.date}</strong>.
        </p>
        <div className="mx-auto mt-6 max-w-sm rounded-2xl bg-brand-50/70 p-4 text-left text-sm text-slate-600 ring-1 ring-brand-100">
          <div className="flex justify-between py-1"><span>Preferred time</span><span className="font-medium text-ink capitalize">{form.time}</span></div>
          <div className="flex justify-between py-1"><span>Patient</span><span className="font-medium text-ink capitalize">{form.patientType.replace("-", " ")}</span></div>
          <div className="flex justify-between py-1"><span>Dentist</span><span className="font-medium text-ink">{doctors.find((d) => d.slug === form.doctor)?.name ?? "No preference"}</span></div>
        </div>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={site.phoneHref} variant="secondary">
            <Phone className="h-4 w-4 text-brand-600" /> Call {site.phone}
          </Button>
          <Button onClick={() => { setForm(initial); setStep(0); setDone(false); }}>
            Book another visit
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-9">
      {/* Stepper */}
      <ol className="mb-8 flex items-center gap-2">
        {stepsMeta.map((m, i) => {
          const StepIcon = m.icon;
          const reached = i <= step;
          return (
            <li key={m.label} className="flex flex-1 items-center gap-2">
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-semibold transition-colors ${
                  reached ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-400"
                }`}
              >
                {i < step ? <Check className="h-4 w-4" /> : <StepIcon className="h-4 w-4" />}
              </span>
              <span className={`hidden text-sm font-medium sm:block ${reached ? "text-ink" : "text-slate-400"}`}>
                {m.label}
              </span>
              {i < stepsMeta.length - 1 && (
                <span className="ml-1 h-0.5 flex-1 rounded-full bg-slate-100">
                  <span
                    className="block h-full rounded-full bg-brand-500 transition-all duration-500"
                    style={{ width: i < step ? "100%" : "0%" }}
                  />
                </span>
              )}
            </li>
          );
        })}
      </ol>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.3 }}
        >
          {step === 0 && (
            <Fieldset legend="What can we help you with?">
              <Field label="Service" error={errors.service}>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {services.map((s) => (
                    <ChipButton
                      key={s.slug}
                      active={form.service === s.slug}
                      onClick={() => update("service", s.slug)}
                    >
                      <Sparkles className="h-4 w-4 shrink-0 text-brand-500" />
                      {s.title}
                    </ChipButton>
                  ))}
                </div>
              </Field>
              <Field label="Are you a new or returning patient?" error={errors.patientType}>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "new patient", label: "New patient" },
                    { id: "existing-patient", label: "Returning patient" },
                  ].map((p) => (
                    <ChipButton
                      key={p.id}
                      active={form.patientType === p.id}
                      onClick={() => update("patientType", p.id)}
                    >
                      {p.label}
                    </ChipButton>
                  ))}
                </div>
              </Field>
            </Fieldset>
          )}

          {step === 1 && (
            <Fieldset legend="When works best for you?">
              <Field label="Preferred date" error={errors.date}>
                <div className="relative">
                  <CalendarDays className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </Field>
              <Field label="Preferred time" error={errors.time}>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {timeSlots.map((t) => (
                    <ChipButton
                      key={t.id}
                      active={form.time === t.id}
                      onClick={() => update("time", t.id)}
                      className="flex-col items-start gap-0.5"
                    >
                      <span className="font-semibold">{t.label}</span>
                      <span className="text-xs text-slate-400">{t.note}</span>
                    </ChipButton>
                  ))}
                </div>
              </Field>
              <Field label="Preferred dentist (optional)">
                <select
                  value={form.doctor}
                  onChange={(e) => update("doctor", e.target.value)}
                  className={inputClass}
                >
                  <option value="no-preference">No preference, first available</option>
                  {doctors.map((d) => (
                    <option key={d.slug} value={d.slug}>
                      {d.name}, {d.role}
                    </option>
                  ))}
                </select>
              </Field>
            </Fieldset>
          )}

          {step === 2 && (
            <Fieldset legend="Almost done, how can we reach you?">
              <Field label="Full name" error={errors.name}>
                <IconInput icon={User} placeholder="Jane Doe" value={form.name} onChange={(v) => update("name", v)} autoComplete="name" />
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Phone" error={errors.phone}>
                  <IconInput icon={Phone} type="tel" placeholder="(409) 555-0100" value={form.phone} onChange={(v) => update("phone", v)} autoComplete="tel" />
                </Field>
                <Field label="Email" error={errors.email}>
                  <IconInput icon={Mail} type="email" placeholder="jane@email.com" value={form.email} onChange={(v) => update("email", v)} autoComplete="email" />
                </Field>
              </div>
              <Field label="Anything we should know? (optional)">
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  placeholder="Insurance, concerns, dental anxiety…"
                  className={inputClass}
                />
              </Field>
            </Fieldset>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Nav */}
      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={back}
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold text-slate-500 transition-colors hover:text-brand-700"
          >
            <ChevronLeft className="h-4 w-4" /> Back
          </button>
        ) : (
          <span />
        )}
        {step < 2 ? (
          <Button onClick={next} size="md">
            Continue <ChevronRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={submit} size="md">
            <Check className="h-4 w-4" /> Confirm Request
          </Button>
        )}
      </div>

      <p className="mt-5 text-center text-xs text-slate-400">
        This sends an appointment request, no charge, no obligation. We&apos;ll call to confirm.
      </p>
    </div>
  );
}

/* ---------- small field primitives ---------- */

function Fieldset({ legend, children }: { legend: string; children: React.ReactNode }) {
  return (
    <fieldset className="space-y-5">
      <legend className="text-lg font-semibold text-ink">{legend}</legend>
      {children}
    </fieldset>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs font-medium text-red-500">{error}</span>}
    </label>
  );
}

function ChipButton({
  active,
  onClick,
  children,
  className,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ${
        active
          ? "border-brand-500 bg-brand-50 text-brand-700 ring-2 ring-brand-100"
          : "border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:bg-brand-50/40"
      } ${className ?? ""}`}
    >
      {children}
    </button>
  );
}

function IconInput({
  icon: Icon,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
}: {
  icon: typeof User;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`${inputClass} pl-11`}
      />
    </div>
  );
}
