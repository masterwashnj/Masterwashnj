"use client";

import Link from "next/link";
import { PricingTable } from "@/components/pricing-table";
import { QuickBookButton } from "@/components/quick-book";
import { useLang } from "@/components/lang-context";
import { UI, pick } from "@/lib/i18n";
import { ADD_ONS } from "@/lib/data";

export function PricingView() {
  const { lang } = useLang();
  const t = (k: keyof typeof UI) => pick(UI[k], lang);

  const groups: { key: "interior" | "exterior" | "premium"; title: string }[] = [
    { key: "interior", title: t("addons_interior") },
    { key: "exterior", title: t("addons_exterior") },
    { key: "premium", title: t("addons_premium") },
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-3">{t("pricing_eyebrow")}</p>
        <h1 className="text-3xl font-bold sm:text-4xl">{t("pricing_title")}</h1>
        <p className="mt-4 text-silver">{t("pricing_sub")}</p>
      </div>

      <div className="mt-12">
        <PricingTable />
      </div>

      {/* Add-ons */}
      <div className="mt-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">{t("addons_title")}</p>
          <h2 className="text-2xl font-bold sm:text-3xl">{t("addons_title")}</h2>
          <p className="mt-3 text-silver">{t("addons_sub")}</p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.key} className="card p-6">
              <h3 className="text-lg font-bold text-accent-bright">{g.title}</h3>
              <ul className="mt-4 space-y-3">
                {ADD_ONS.filter((a) => a.group === g.key).map((a, i) => (
                  <li key={i} className="flex items-baseline justify-between gap-3 border-b border-line pb-2.5 last:border-0">
                    <span className="text-sm text-silver">{pick(a.label, lang)}</span>
                    <span className="shrink-0 text-sm font-semibold text-snow">{a.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-col justify-center gap-3 sm:flex-row">
        <QuickBookButton source="pricing_cta" className="btn btn-primary" />
        <Link href="/contact" className="btn btn-ghost">{t("get_quote")}</Link>
      </div>
    </div>
  );
}
