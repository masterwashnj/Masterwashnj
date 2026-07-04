"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY } from "@/lib/data";
import { SITE } from "@/lib/site";
import { UI, pick, type Lang } from "@/lib/i18n";
import { IconInstagram } from "@/components/icons";

/**
 * CTA de Instagram: la galería "perfecta" del negocio es su IG.
 * Mostramos fotos REALES en grid estilo IG con hover, y un CTA fuerte para
 * seguir / ver carruseles y videos en vivo en @masterwashnj.
 * (El feed en vivo se ve en Instagram — no embebemos un widget de terceros.)
 */
export function InstagramCTA({ lang }: { lang: Lang }) {
  const t = (k: keyof typeof UI) => pick(UI[k], lang);
  const tiles = GALLERY.items.filter((g) => g.src).slice(0, 6);

  return (
    <div className="ring-accent relative overflow-hidden rounded-2xl p-6 sm:p-10">
      <div className="hero-glow right-0 top-0 opacity-25" />
      <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        {/* texto + CTA */}
        <div>
          <p className="eyebrow mb-3 inline-flex items-center gap-2">
            <IconInstagram className="h-4 w-4 text-accent-bright" /> {t("ig_eyebrow")}
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">{t("ig_title")}</h2>
          <p className="mt-4 max-w-md text-silver">{t("ig_sub")}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <IconInstagram className="h-5 w-5" /> {t("ig_follow")}
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              {t("ig_see_more")}
            </a>
          </div>
          <p className="mt-4 text-sm text-steel">{SITE.instagramHandle}</p>
        </div>

        {/* grid de fotos reales estilo IG */}
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group grid grid-cols-3 gap-2 sm:gap-3"
          aria-label={t("ig_see_more")}
        >
          {tiles.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={g.src!}
                alt={pick(g.caption, lang)}
                fill
                sizes="(max-width: 640px) 33vw, 180px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-snow opacity-0 transition-all duration-300 group-hover:bg-black/45 group-hover:opacity-100">
                <IconInstagram className="h-7 w-7" />
              </span>
            </motion.div>
          ))}
        </a>
      </div>
    </div>
  );
}
