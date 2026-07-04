"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { packageIcon } from "@/components/icons";
import { QuickBookButton } from "@/components/quick-book";
import { useLang } from "@/components/lang-context";
import { UI, pick } from "@/lib/i18n";
import { PACKAGES, VEHICLE_SIZES } from "@/lib/data";

type Size = "sedan" | "suv" | "truck";

/**
 * Tabla de precios dinámica: el usuario elige tamaño de vehículo y se
 * actualizan los 3 paquetes. Precios REALES del cliente (driver = vehicle_size
 * de los paquetes). `limitIncludes` recorta la lista en el home.
 */
export function PricingTable({ limitIncludes }: { limitIncludes?: number }) {
  const { lang } = useLang();
  const t = (k: keyof typeof UI) => pick(UI[k], lang);
  const [size, setSize] = useState<Size>("sedan");

  return (
    <div>
      {/* Selector de tamaño */}
      <div className="mx-auto mb-10 max-w-sm">
        <p className="label text-center">{t("pricing_size_label")}</p>
        <div className="flex justify-center gap-2">
          {VEHICLE_SIZES.map((v) => (
            <button
              key={v.key}
              onClick={() => setSize(v.key)}
              className={`flex-1 rounded-xl border px-3 py-2.5 text-sm font-semibold transition-all ${
                size === v.key
                  ? "border-accent bg-accent/15 text-snow"
                  : "border-line-strong text-silver hover:border-steel"
              }`}
            >
              {pick(v.label, lang)}
            </button>
          ))}
        </div>
      </div>

      {/* Paquetes — 3 lado a lado en TODOS los tamaños (incluido móvil) */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-5">
        {PACKAGES.items.map((pkg, i) => {
          const inc = limitIncludes ? pkg.includes.slice(0, limitIncludes) : pkg.includes;
          const more = limitIncludes ? pkg.includes.length - limitIncludes : 0;
          return (
            <Reveal key={pkg.key} delay={i * 60}>
              <div className={`card card-hover relative flex h-full min-w-0 flex-col p-3 sm:p-7 ${pkg.recommended ? "ring-accent" : ""}`}>
                {pkg.recommended && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-b from-accent-bright to-accent px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-white shadow-lg sm:-top-3 sm:px-3 sm:py-1 sm:text-xs sm:normal-case">
                    {t("recommended")}
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <span className="pkg-badge">{packageIcon(pkg.icon)}</span>
                  <span className="hidden rounded-full border border-line-strong bg-white/5 px-3 py-1 text-xs font-semibold text-silver sm:inline-flex">
                    ⏱ {pkg.duration}
                  </span>
                </div>
                <h3 className="mt-3 break-words text-[13px] font-bold leading-tight sm:mt-5 sm:text-xl">{pkg.label}</h3>
                <p className="mt-1 hidden text-sm text-steel sm:block">{pick(pkg.for, lang)}</p>
                <p className="mt-0.5 text-[10px] text-steel sm:hidden">⏱ {pkg.duration}</p>
                <div className="mt-3 border-t border-line pt-3 sm:mt-5 sm:pt-5">
                  <p className="flex flex-wrap items-baseline gap-x-1.5">
                    <span className="text-[9px] uppercase tracking-wide text-steel sm:text-xs">{t("from")}</span>
                    <span className="text-grad text-xl font-extrabold sm:text-4xl">{pkg.prices[size]}</span>
                  </p>
                </div>
                <ul className="mt-3 space-y-1.5 sm:mt-5 sm:space-y-2.5">
                  {inc.map((x, k) => (
                    <li key={k} className="flex gap-1.5 text-[11px] leading-snug text-silver sm:gap-2 sm:text-sm">
                      <span className="text-accent-bright">✓</span>
                      <span className="min-w-0 break-words">{pick(x, lang)}</span>
                    </li>
                  ))}
                  {more > 0 && (
                    <li className="text-[11px] font-medium text-accent-bright sm:text-sm">
                      + {more} {lang === "es" ? "más" : "more"}
                    </li>
                  )}
                </ul>
                <div className="mt-auto pt-4 sm:pt-7">
                  <QuickBookButton source={`pkg_${pkg.key}`} className={`btn w-full px-2 text-[11px] sm:px-4 sm:text-base ${pkg.recommended ? "btn-primary" : "btn-ghost"}`}>
                    {t("book")}
                  </QuickBookButton>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
      <p className="mt-6 text-center text-xs text-steel">{t("pricing_note")}</p>
    </div>
  );
}
