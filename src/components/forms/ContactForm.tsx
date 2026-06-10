"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-ink shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100";

const reasons = ["General question", "Book an appointment", "Insurance & billing", "Dental emergency", "Other"];

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", reason: reasons[0], message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const update = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (form.name.trim().length < 2) err.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Enter a valid email.";
    if (form.message.trim().length < 5) err.message = "Tell us a little more.";
    setErrors(err);
    if (Object.keys(err).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-card"
      >
        <CheckCircle2 className="h-14 w-14 text-brand-500" />
        <h3 className="mt-4 text-2xl font-semibold text-ink">Message sent!</h3>
        <p className="mt-2 max-w-sm text-slate-600">
          Thanks for reaching out, {form.name.split(" ")[0]}. Our team will get back to you within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <IconInput icon={User} value={form.name} onChange={(v) => update("name", v)} placeholder="Your name" autoComplete="name" />
        </Field>
        <Field label="Phone">
          <IconInput icon={Phone} type="tel" value={form.phone} onChange={(v) => update("phone", v)} placeholder="(409) 555-0100" autoComplete="tel" />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Email" error={errors.email}>
          <IconInput icon={Mail} type="email" value={form.email} onChange={(v) => update("email", v)} placeholder="you@email.com" autoComplete="email" />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Reason for contact">
          <select value={form.reason} onChange={(e) => update("reason", e.target.value)} className={inputClass}>
            {reasons.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Message" error={errors.message}>
          <div className="relative">
            <MessageSquare className="pointer-events-none absolute left-3.5 top-4 h-5 w-5 text-slate-400" />
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="How can we help?"
              className={`${inputClass} pl-11`}
            />
          </div>
        </Field>
      </div>
      <Button type="submit" className="mt-6 w-full" size="lg">
        <Send className="h-4 w-4" /> Send Message
      </Button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs font-medium text-red-500">{error}</span>}
    </label>
  );
}

function IconInput({
  icon: Icon, value, onChange, type = "text", placeholder, autoComplete,
}: {
  icon: typeof User; value: string; onChange: (v: string) => void; type?: string; placeholder?: string; autoComplete?: string;
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
