"use client";

import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { serviceIcon, IconClock, IconShield, IconPin, IconCalendar } from "@/components/icons";
import { QuickBookButton } from "@/components/quick-book";
import { useLang } from "@/components/lang-context";
import { UI, pick } from "@/lib/i18n";
import { SERVICES, ADD_ONS, CATEGORY_LABELS, CATEGORY_ORDER, PROCESS } from "@/lib/data";
import { SITE } from "@/lib/site";

export function ServicesView() {
  const { lang } = useLang();
  const t = (k: keyof typeof UI) => pick(UI[k], lang);

  const addonGroups = [
    { key: "interior", label: t("addons_interior") },
    { key: "exterior", label: t("addons_exterior") },
    { key: "premium", label: t("addons_premium") },
  ] as const;

  return (
    <div className="relative overflow-hidden">
      {/* ── Header con glow ── */}
      <section className="relative border-b border-line">
        <div className="hero-glow left-1/2 top-0 -translate-x-1/2 opacity-25" />
        <div className="relative mx-auto max-w-6xl px-5 py-16">
          <Reveal>
            <p className="eyebrow mb-3">{t("services_eyebrow")}</p>
            <h1 className="text-3xl font-bold sm:text-5xl">{t("sp_title")}</h1>
            <p className="mt-4 max-w-2xl text-silver">{t("sp_sub")}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="pill"><IconPin className="h-3.5 w-3.5 text-accent-bright" /> {SITE.region}</span>
              <span className="pill"><IconClock className="h-3.5 w-3.5 text-accent-bright" /> {lang === "es" ? "Respuesta rápida" : "Fast response"}</span>
              <span className="pill"><IconShield className="h-3.5 w-3.5 text-accent-bright" /> {lang === "es" ? "Productos premium" : "Premium products"}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo funciona ── */}
      <section className="border-b border-line section-alt">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <Reveal><p className="eyebrow mb-6">{t("process_eyebrow")}</p></Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={i * 60}>
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 font-mono text-sm font-bold text-accent-bright">{p.n}</span>
                  <div>
                    <h3 className="text-sm font-bold">{pick(p.title, lang)}</h3>
                    <p className="mt-1 text-xs text-silver">{pick(p.text, lang)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Catálogo de servicios por categoría ── */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="space-y-14">
          {CATEGORY_ORDER.map((cat) => {
            const list = SERVICES.filter((s) => s.category === cat);
            if (!list.length) return null;
            return (
              <div key={cat}>
                <Reveal>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="icon-chip">{serviceIcon(cat)}</span>
                    <div>
                      <h2 className="text-xl font-bold">{pick(CATEGORY_LABELS[cat], lang)}</h2>
                      <p className="text-xs text-steel">{list.length} {lang === "es" ? (list.length === 1 ? "servicio" : "servicios") : (list.length === 1 ? "service" : "services")}</p>
                    </div>
                  </div>
                </Reveal>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((s, i) => (
                    <Reveal key={s.key} delay={i * 40}>
                      <div className="card card-hover group flex h-full flex-col p-6">
                        <div className="flex items-start justify-between">
                          <span className="icon-chip">{serviceIcon(s.category)}</span>
                          {s.consultation && (
                            <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold">
                              {t("get_quote")}
                            </span>
                          )}
                        </div>
                        <h3 className="mt-5 text-lg font-bold">{s.label}</h3>
                        <p className="mt-2 flex-1 text-sm text-silver">{pick(s.blurb, lang)}</p>
                        <QuickBookButton source={`service_${s.key}`} className="btn btn-ghost mt-5 w-full transition-colors group-hover:border-accent/60">
                          {s.consultation ? t("get_quote") : t("book")}
                        </QuickBookButton>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Add-ons agrupados ── */}
      <section className="border-y border-line section-alt">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Reveal>
            <p className="eyebrow mb-3">{t("addons_title")}</p>
            <p className="max-w-2xl text-silver">{t("addons_sub")}</p>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {addonGroups.map((g, gi) => (
              <Reveal key={g.key} delay={gi * 60}>
                <div className="card h-full p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-accent-bright">{g.label}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {ADD_ONS.filter((a) => a.group === g.key).map((a, i) => (
                      <li key={i} className="flex items-baseline justify-between gap-3 border-b border-line/60 pb-2.5 text-sm">
                        <span className="text-silver">{pick(a.label, lang)}</span>
                        <span className="shrink-0 font-semibold text-snow">{a.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <div className="ring-accent relative overflow-hidden rounded-2xl p-8 text-center sm:p-12">
            <div className="hero-glow left-1/2 top-0 -translate-x-1/2 opacity-40" />
            <div className="relative">
              <h2 className="text-2xl font-bold sm:text-3xl">{t("final_title")}</h2>
              <p className="mx-auto mt-3 max-w-lg text-silver">{t("final_sub")}</p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <QuickBookButton source="services_cta" className="btn btn-primary" />
                <Link href="/pricing" className="btn btn-ghost inline-flex items-center justify-center gap-2">
                  <IconCalendar className="h-4 w-4" /> {t("view_pricing")}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
