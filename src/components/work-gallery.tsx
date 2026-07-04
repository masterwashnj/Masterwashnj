import Image from "next/image";
import { GALLERY } from "@/lib/data";
import type { Lang } from "@/lib/i18n";
import { pick } from "@/lib/i18n";

/**
 * Showcase de fotos REALES del trabajo del cliente (de su IG / cámara).
 * Cards premium con zoom en hover. Si un item no tiene `src`, muestra un
 * marco placeholder (no usar stock como si fuera real).
 */
export function WorkGallery({ lang, limit }: { lang: Lang; limit?: number }) {
  const items = limit ? GALLERY.items.slice(0, limit) : GALLERY.items;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((g, i) => (
        <figure key={i} className="card group relative overflow-hidden p-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            {g.video ? (
              <video
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                autoPlay muted loop playsInline preload="none" poster={g.poster}
                aria-label={pick(g.caption, lang)}
              >
                <source src={g.video} type="video/mp4" />
              </video>
            ) : g.src ? (
              <Image
                src={g.src}
                alt={pick(g.caption, lang)}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="before-after-frame flex h-full w-full items-center justify-center">
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-bright">
                  {pick(g.caption, lang)}
                </span>
              </div>
            )}
          </div>
          {(g.src || g.video) && (
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 bg-gradient-to-t from-black/85 to-transparent p-4">
              {g.video && <span className="text-accent-bright">▶</span>}
              <span className="text-sm font-semibold text-snow">{pick(g.caption, lang)}</span>
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
