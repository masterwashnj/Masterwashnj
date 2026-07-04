"use client";

import { LeadForm } from "./lead-form";
import { Reveal } from "@/components/reveal";
import { QuickBookButton } from "@/components/quick-book";
import { useLang } from "@/components/lang-context";
import { UI, pick } from "@/lib/i18n";
import { SITE, telLink } from "@/lib/site";
import { IconPhone, IconMail, IconInstagram, IconPin, IconClock, IconShield } from "@/components/icons";

export function ContactView() {
  const { lang } = useLang();
  const t = (k: keyof typeof UI) => pick(UI[k], lang);
  const tel = telLink();

  return (
    <div className="relative overflow-hidden">
      {/* glow de fondo sutil */}
      <div className="hero-glow left-1/2 top-0 -translate-x-1/2 opacity-25" />

      <div className="relative mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <p className="eyebrow mb-3">{t("contact_eyebrow")}</p>
          <h1 className="text-3xl font-bold sm:text-4xl">{t("contact_title")}</h1>
          <p className="mt-4 max-w-2xl text-silver">{t("contact_sub")}</p>
          {/* badges de confianza */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="pill"><IconClock className="h-3.5 w-3.5 text-accent-bright" /> {t("hero_trust_fast")}</span>
            <span className="pill"><IconShield className="h-3.5 w-3.5 text-accent-bright" /> {t("hero_trust_secure")}</span>
            <span className="pill"><IconPin className="h-3.5 w-3.5 text-accent-bright" /> {SITE.region}</span>
          </div>
        </Reveal>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2">
          <Reveal>
            <LeadForm />
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5">
              {/* Reserva directa */}
              <div className="ring-accent relative overflow-hidden rounded-2xl p-7">
                <div className="hero-glow right-0 top-0 opacity-30" />
                <div className="relative">
                  <h3 className="text-lg font-bold">{t("contact_direct_title")}</h3>
                  <p className="mt-2 text-sm text-silver">{t("contact_direct_text")}</p>
                  <QuickBookButton source="contact_page" className="btn btn-primary mt-4 w-full" />
                </div>
              </div>

              {/* Métodos de contacto con icon chips */}
              <div className="card p-7">
                <h3 className="text-lg font-bold">{t("contact_other")}</h3>
                <div className="mt-4 space-y-3">
                  {tel && (
                    <a href={tel} className="group flex items-center gap-3 rounded-xl border border-line p-3 transition-colors hover:border-accent/50">
                      <span className="icon-chip h-10 w-10"><IconPhone className="h-5 w-5" /></span>
                      <span>
                        <span className="block text-xs text-steel">{lang === "es" ? "Llámanos" : "Call us"}</span>
                        <span className="font-semibold text-snow">{SITE.phoneDisplay}</span>
                      </span>
                    </a>
                  )}
                  {SITE.email && (
                    <a href={`mailto:${SITE.email}`} className="group flex items-center gap-3 rounded-xl border border-line p-3 transition-colors hover:border-accent/50">
                      <span className="icon-chip h-10 w-10"><IconMail className="h-5 w-5" /></span>
                      <span className="min-w-0">
                        <span className="block text-xs text-steel">Email</span>
                        <span className="block truncate font-semibold text-snow">{SITE.email}</span>
                      </span>
                    </a>
                  )}
                  <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-xl border border-line p-3 transition-colors hover:border-accent/50">
                    <span className="icon-chip h-10 w-10"><IconInstagram className="h-5 w-5" /></span>
                    <span>
                      <span className="block text-xs text-steel">Instagram</span>
                      <span className="font-semibold text-snow">{SITE.instagramHandle}</span>
                    </span>
                  </a>
                </div>
              </div>

              {/* Zona de servicio */}
              <div className="card p-7">
                <div className="flex items-center gap-2">
                  <IconPin className="h-4 w-4 text-accent-bright" />
                  <h3 className="text-lg font-bold">{lang === "es" ? "Zona de servicio" : "Service area"}</h3>
                </div>
                <p className="mt-2 text-sm text-steel">{lang === "es" ? "Detallado móvil — vamos a ti." : "Mobile detailing — we come to you."}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {SITE.serviceAreas.map((a) => (
                    <span key={a} className="rounded-full border border-line-strong bg-white/5 px-3 py-1 text-xs text-silver">{a}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
