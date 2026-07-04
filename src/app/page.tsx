"use client";

import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { WorkGallery } from "@/components/work-gallery";
import { Hero } from "@/components/hero";
import { PricingTable } from "@/components/pricing-table";
import { QuickBookButton } from "@/components/quick-book";
import { InstagramCTA } from "@/components/instagram-cta";
import { useLang } from "@/components/lang-context";
import { UI, pick } from "@/lib/i18n";
import { serviceIcon, IconStar, IconPin, IconShield, IconClock, IconSparkle, IconInstagram, IconGoogle } from "@/components/icons";
import { SITE } from "@/lib/site";
import { SERVICES, PROCESS, REVIEWS, TRUST_STATS, FAQ, CATEGORY_LABELS } from "@/lib/data";

export default function Home() {
  const { lang } = useLang();
  const t = (k: keyof typeof UI) => pick(UI[k], lang);

  const why = [
    { icon: <IconSparkle className="h-6 w-6" />, t: t("why_a_t"), d: t("why_a_d") },
    { icon: <IconShield className="h-6 w-6" />, t: t("why_b_t"), d: t("why_b_d") },
    { icon: <IconClock className="h-6 w-6" />, t: t("why_c_t"), d: t("why_c_d") },
    { icon: <IconPin className="h-6 w-6" />, t: t("why_d_t"), d: t("why_d_d") },
  ];

  return (
    <>
      {/* ───────── HERO ───────── */}
      <Hero />

      {/* ───────── PACKAGES (después del hero) ───────── */}
      <section className="border-b border-line section-alt">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow mb-3">{t("pricing_eyebrow")}</p>
              <h2 className="text-3xl font-bold sm:text-4xl">{t("pricing_title")}</h2>
              <p className="mt-4 text-silver">{t("pricing_sub")}</p>
            </div>
          </Reveal>
          <div className="mt-12">
            <PricingTable limitIncludes={6} />
          </div>
        </div>
      </section>

      {/* ───────── REAL WORK (autos primero) ───────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <p className="eyebrow mb-3">{lang === "es" ? "Nuestro trabajo" : "Our work"}</p>
            <h2 className="text-3xl font-bold sm:text-4xl">{lang === "es" ? "Resultados reales, autos reales" : "Real results, real cars"}</h2>
            <p className="mt-4 max-w-2xl text-silver">{lang === "es" ? "Detallado móvil en entradas de New Jersey & PA. Estas son fotos reales de nuestro trabajo." : "Mobile detailing in New Jersey & PA driveways. These are real photos of our work."}</p>
          </Reveal>
          <div className="mt-12">
            <WorkGallery lang={lang} limit={6} />
          </div>
          <div className="mt-10 text-center">
            <Link href="/gallery" className="btn btn-ghost">{t("ba_full_gallery")}</Link>
          </div>

          {/* Instagram = la galería en vivo */}
          <div className="mt-16">
            <Reveal>
              <InstagramCTA lang={lang} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── TRUST BAR (solo si los datos son reales) ───────── */}
      {TRUST_STATS.isReal && (
        <section className="border-b border-line section-alt">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-line px-5 sm:grid-cols-4">
            {TRUST_STATS.items.map((s, i) => (
              <div key={i} className="px-3 py-7 text-center">
                <div className="text-3xl font-extrabold text-grad">{s.num}</div>
                <div className="mt-1 text-xs text-steel">{pick(s.label, lang)}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ───────── SERVICES ───────── */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="eyebrow mb-3">{t("services_eyebrow")}</p>
          <h2 className="text-3xl font-bold sm:text-4xl">{t("services_title")}</h2>
          <p className="mt-4 max-w-2xl text-silver">{t("services_sub")}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.key} delay={i * 40}>
              <div className="card card-hover h-full p-6">
                <div className="flex items-start justify-between">
                  <span className="icon-chip">{serviceIcon(s.category)}</span>
                  {s.consultation && (
                    <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold">
                      {t("get_quote")}
                    </span>
                  )}
                </div>
                <p className="mt-5 text-xs font-medium uppercase tracking-wider text-steel">{pick(CATEGORY_LABELS[s.category], lang)}</p>
                <h3 className="mt-1 text-xl font-bold">{s.label}</h3>
                <p className="mt-2 text-sm text-silver">{pick(s.blurb, lang)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────── WHY US ───────── */}
      <section className="border-y border-line section-alt">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="flex h-full flex-col">
                  <span className="icon-chip">{f.icon}</span>
                  <h3 className="mt-4 text-lg font-bold">{f.t}</h3>
                  <p className="mt-1.5 text-sm text-silver">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── PROCESS ───────── */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="eyebrow mb-3">{t("process_eyebrow")}</p>
          <h2 className="text-3xl font-bold sm:text-4xl">{t("process_title")}</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 60}>
              <div className="card h-full p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 font-mono text-lg font-bold text-accent-bright">
                  {p.n}
                </div>
                <h3 className="mt-4 text-lg font-bold">{pick(p.title, lang)}</h3>
                <p className="mt-2 text-sm text-silver">{pick(p.text, lang)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────── REVIEWS ───────── */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="eyebrow">{t("reviews_eyebrow")}</p>
            <h2 className="text-3xl font-bold sm:text-4xl">{t("reviews_title")}</h2>
            {/* La calificación 5.0 solo se muestra con reseñas reales */}
            {REVIEWS.isReal && (
              <div className="mt-2 flex items-center gap-2">
                <span className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => <IconStar key={k} className="h-5 w-5" />)}
                </span>
                <span className="text-lg font-bold">5.0</span>
                <span className="text-sm text-steel">· Google</span>
              </div>
            )}
          </div>
        </Reveal>

        {REVIEWS.isReal ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.items.map((r, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="card card-hover h-full p-6">
                  <span className="font-heading text-4xl leading-none text-accent/40">“</span>
                  <div className="mt-1 flex gap-0.5 text-gold">
                    {Array.from({ length: r.rating }).map((_, k) => <IconStar key={k} className="h-4 w-4" />)}
                  </div>
                  <p className="mt-3 text-sm text-silver">{pick(r.text, lang)}</p>
                  <p className="mt-4 text-sm font-semibold">{r.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={80}>
            <div className="ring-accent relative mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl p-8 text-center sm:p-10">
              <div className="hero-glow left-1/2 top-0 -translate-x-1/2 opacity-30" />
              <div className="relative">
                <span className="icon-chip mx-auto"><IconGoogle className="h-6 w-6" /></span>
                <p className="mt-5 text-silver">{t("reviews_placeholder")}</p>
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <a href={SITE.googleReviews} target="_blank" rel="noopener noreferrer" className="btn btn-primary inline-flex items-center gap-2">
                    <IconGoogle className="h-5 w-5" /> {t("reviews_google")}
                  </a>
                  <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost inline-flex items-center gap-2">
                    <IconInstagram className="h-5 w-5" /> {t("ig_follow")}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </section>

      {/* ───────── FAQ ───────── */}
      {/* overflow-x-clip contiene el glow decorativo (42rem) sin romper el sticky */}
      <section className="relative mx-auto max-w-6xl overflow-x-clip px-5 py-24">
        <div className="hero-glow left-0 top-10 opacity-30" />
        <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="eyebrow mb-3">{t("faq_eyebrow")}</p>
              <h2 className="text-3xl font-bold sm:text-4xl">{t("faq_title")}</h2>
              <p className="mt-4 text-silver">{t("faq_help_sub")}</p>
              <div className="glass mt-7 p-6">
                <div className="flex items-center gap-3">
                  <span className="icon-chip"><IconClock className="h-6 w-6" /></span>
                  <div>
                    <p className="font-semibold">{t("faq_help_title")}</p>
                    <p className="text-sm text-steel">{t("faq_help_text")}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-col gap-2">
                  <QuickBookButton source="faq" className="btn btn-primary w-full" />
                  <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full">
                    {t("faq_help_ig")}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-3">
            {FAQ.map((f, i) => (
              <Reveal key={i} delay={i * 30}>
                <details className="faq card p-5">
                  <summary className="flex items-center justify-between gap-4">
                    <span className="faq-q text-base font-semibold transition-colors">{pick(f.q, lang)}</span>
                    <span className="faq-plus">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-silver">{pick(f.a, lang)}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FINAL CTA ───────── */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <Reveal>
          <div className="ring-accent relative overflow-hidden rounded-2xl p-10 text-center sm:p-16">
            <div className="hero-glow left-1/2 top-0 -translate-x-1/2 opacity-40" />
            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-4xl">{t("final_title")}</h2>
              <p className="mx-auto mt-4 max-w-lg text-silver">{t("final_sub")}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <QuickBookButton source="final_cta" className="btn btn-primary" />
                <Link href="/contact" className="btn btn-ghost">{t("contact_us")}</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
