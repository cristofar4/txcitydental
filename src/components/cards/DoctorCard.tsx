import Image from "next/image";
import { GraduationCap, Sparkles, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { DoctorPortrait } from "@/components/art/Portrait";
import type { Doctor } from "@/lib/data/doctors";

export function DoctorCard({
  doctor,
  variant = "preview",
}: {
  doctor: Doctor;
  variant?: "preview" | "full";
}) {
  const full = variant === "full";

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all duration-500",
        !full && "hover:-translate-y-1.5 hover:shadow-lift",
      )}
    >
      {/* portrait */}
      <div className="relative aspect-[4/5] overflow-hidden">
        {doctor.photo ? (
          <Image
            src={doctor.photo}
            alt={`Portrait of ${doctor.name}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        ) : (
          <DoctorPortrait initials={doctor.initials} accent={doctor.accent} />
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold-300" />
            {doctor.yearsExperience}+ years experience
          </span>
        </div>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div>
          <h3 className="text-xl font-semibold text-ink">
            {doctor.name}
            <span className="ml-1.5 text-sm font-medium text-slate-400">{doctor.credentials}</span>
          </h3>
          <p className="mt-0.5 text-sm font-semibold text-brand-600">{doctor.role}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {doctor.specialties.map((s) => (
            <span
              key={s}
              className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
          {(full ? doctor.bio : doctor.bio.slice(0, 1)).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {full && (
          <div className="mt-5 space-y-4 border-t border-slate-100 pt-5">
            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <GraduationCap className="h-4 w-4 text-brand-500" />
                Training &amp; Credentials
              </h4>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                {doctor.education.map((e) => (
                  <li key={e} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-start gap-2.5 rounded-2xl bg-gold-200/30 p-3.5 text-sm italic text-slate-600 ring-1 ring-gold-200/60">
              <Quote className="h-4 w-4 shrink-0 text-gold-500" />
              {doctor.funFact}
            </div>
          </div>
        )}

        <div className="mt-auto pt-6">
          <Button
            href={`/appointment?doctor=${doctor.slug}`}
            variant="secondary"
            size="sm"
            className="w-full"
          >
            Book with {doctor.name.split(" ").slice(0, 2).join(" ")}
          </Button>
        </div>
      </div>
    </article>
  );
}
