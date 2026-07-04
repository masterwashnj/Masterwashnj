"use client";

import { useState } from "react";
import { SERVICES, VEHICLE_SIZES } from "@/lib/data";
import { UI, pick } from "@/lib/i18n";
import { useLang } from "@/components/lang-context";
import { SITE, telLink } from "@/lib/site";
import { IconCar, IconCalendar, IconStar, IconShield } from "@/components/icons";

/** Nombre del form en Netlify (debe coincidir con el form oculto en public/__forms.html). */
const FORM_NAME = "contacto-masterwash";
const encode = (data: Record<string, string>) =>
  Object.keys(data).map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k])).join("&");

/**
 * Formulario multi-paso de captura de detailing con stepper premium.
 * Envía el lead a Netlify Forms (panel + email). No finge éxito si falla.
 */
export function LeadForm() {
  const { lang } = useLang();
  const t = (k: keyof typeof UI) => pick(UI[k], lang);
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ service: "", vehicle: "", date: "", name: "", phone: "", email: "" });
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const steps = lang === "es"
    ? [{ n: 1, label: "Servicio", icon: <IconCar className="h-4 w-4" /> }, { n: 2, label: "Fecha", icon: <IconCalendar className="h-4 w-4" /> }, { n: 3, label: "Tus datos", icon: <IconStar className="h-4 w-4" /> }]
    : [{ n: 1, label: "Service", icon: <IconCar className="h-4 w-4" /> }, { n: 2, label: "When", icon: <IconCalendar className="h-4 w-4" /> }, { n: 3, label: "Details", icon: <IconStar className="h-4 w-4" /> }];

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": FORM_NAME, ...form }),
      });
      if (!res.ok) throw new Error("submit failed");
      setDone(true);
    } catch {
      setError(true);
    }
    setSending(false);
  };

  if (done) {
    return (
      <div className="ring-accent relative overflow-hidden rounded-2xl p-8 text-center sm:p-10">
        <div className="hero-glow left-1/2 top-0 -translate-x-1/2 opacity-30" />
        <div className="relative">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-accent-bright to-accent text-2xl text-white shadow-lg">✓</div>
          <h3 className="mt-5 text-2xl font-bold">{t("lf_done_title")}</h3>
          <p className="mt-3 text-silver">{t("lf_done_text")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card p-6 sm:p-8">
      {/* Stepper premium */}
      <div className="mb-7 flex items-center">
        {steps.map((s, idx) => {
          const active = step >= s.n;
          const current = step === s.n;
          return (
            <div key={s.n} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <div className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-bold transition-all ${
                  active ? "border-accent bg-gradient-to-b from-accent-bright to-accent text-white shadow-[0_4px_14px_rgba(224,22,36,0.4)]" : "border-line-strong text-steel"
                } ${current ? "scale-110" : ""}`}>
                  {step > s.n ? "✓" : s.n}
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-wide ${active ? "text-snow" : "text-steel"}`}>{s.label}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className="mx-2 mb-5 h-0.5 flex-1 rounded-full bg-overlay">
                  <div className={`h-full rounded-full bg-accent transition-all duration-500 ${step > s.n ? "w-full" : "w-0"}`} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="label">{t("lf_q_service")}</label>
            <select className="input" value={form.service} onChange={(e) => set("service", e.target.value)}>
              <option value="">{t("lf_select_service")}</option>
              {SERVICES.map((s) => <option key={s.key} value={s.label}>{s.label}</option>)}
            </select>
          </div>
          <div>
            <label className="label">{t("lf_vehicle_size")}</label>
            <div className="grid grid-cols-3 gap-2">
              {VEHICLE_SIZES.map((v) => (
                <button
                  key={v.key}
                  type="button"
                  onClick={() => set("vehicle", v.key)}
                  className={`rounded-xl border px-2 py-2.5 text-xs font-semibold transition-all ${
                    form.vehicle === v.key ? "border-accent bg-accent/15 text-snow" : "border-line-strong text-silver hover:border-steel"
                  }`}
                >
                  {pick(v.label, lang)}
                </button>
              ))}
            </div>
          </div>
          <button className="btn btn-primary w-full" disabled={!form.service || !form.vehicle} onClick={() => setStep(2)}>
            {t("lf_continue")}
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label className="label">{t("lf_when")} <span className="text-steel">{t("qb_optional")}</span></label>
            <input type="date" className="input" value={form.date} onChange={(e) => set("date", e.target.value)} />
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-line bg-white/5 p-3 text-xs text-silver">
            <IconShield className="h-4 w-4 shrink-0 text-accent-bright" />
            {lang === "es" ? "Detallado móvil — vamos a tu casa u oficina en NJ & PA." : "Mobile detailing — we come to your home or office in NJ & PA."}
          </div>
          <div className="flex gap-2">
            <button className="btn btn-ghost flex-1" onClick={() => setStep(1)}>{t("lf_back")}</button>
            <button className="btn btn-primary flex-1" onClick={() => setStep(3)}>{t("lf_continue")}</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <form className="space-y-4" name={FORM_NAME} onSubmit={submit}>
          <div>
            <label className="label">{t("lf_name")}</label>
            <input name="name" className="input" required value={form.name} onChange={(e) => set("name", e.target.value)} placeholder={t("lf_your_name")} />
          </div>
          <div>
            <label className="label">{t("lf_phone")}</label>
            <input name="phone" className="input" type="tel" required value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="(___) ___-____" />
          </div>
          <div>
            <label className="label">{t("lf_email")}</label>
            <input name="email" className="input" type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@email.com" />
          </div>

          {/* Resumen de la selección */}
          <div className="rounded-xl border border-line bg-white/5 p-3 text-xs text-silver">
            <span className="text-steel">{lang === "es" ? "Resumen:" : "Summary:"}</span>{" "}
            {form.service}{form.vehicle ? ` · ${pick(VEHICLE_SIZES.find((v) => v.key === form.vehicle)!.label, lang)}` : ""}{form.date ? ` · ${form.date}` : ""}
          </div>

          {error && (
            <p className="rounded-lg border border-accent/40 bg-accent/10 p-3 text-center text-xs text-snow">
              {lang === "es" ? "No se pudo enviar. Llámanos o escríbenos por Instagram." : "Couldn't send. Please call us or message us on Instagram."}{" "}
              {telLink() && <a href={telLink()!} className="font-semibold underline">{SITE.phoneDisplay}</a>}
            </p>
          )}
          <div className="flex gap-2">
            <button type="button" className="btn btn-ghost flex-1" onClick={() => setStep(2)} disabled={sending}>{t("lf_back")}</button>
            <button type="submit" className="btn btn-primary flex-1" disabled={sending}>{sending ? "…" : t("lf_submit")}</button>
          </div>
          <p className="text-center text-xs text-steel">{t("lf_no_spam")}</p>
        </form>
      )}
    </div>
  );
}
