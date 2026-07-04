"use client";

import { telLink, waLink } from "@/lib/site";
import { UI, pick } from "@/lib/i18n";
import { useLang } from "@/components/lang-context";
import { QuickBookButton } from "@/components/quick-book";
import { IconWhatsApp } from "@/components/icons";

/** Barra CTA persistente en móvil (Reserva rápida + Llamar + WhatsApp). */
export function StickyCTA() {
  const { lang } = useLang();
  const tel = telLink();
  const wa = waLink(lang);
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-base/95 backdrop-blur-md md:hidden">
      <div className="flex gap-2 px-4 py-3">
        <QuickBookButton source="sticky_mobile" className="btn btn-primary min-w-0 flex-1" />
        {tel && (
          <a href={tel} className="btn btn-ghost min-w-0 flex-1">{pick(UI.call, lang)}</a>
        )}
        {wa && (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#25D366]/40 bg-[#25D366]/15 text-[#25D366] transition-colors hover:bg-[#25D366]/25"
          >
            <IconWhatsApp className="h-5 w-5" />
          </a>
        )}
      </div>
    </div>
  );
}
