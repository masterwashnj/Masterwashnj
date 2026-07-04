"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { bookLink, telLink, waLink } from "@/lib/site";
import { UI, pick } from "@/lib/i18n";
import { useLang } from "@/components/lang-context";
import { IconShield, IconClock, IconStar, IconPhone, IconWhatsApp } from "@/components/icons";

type Ctx = { open: (source?: string) => void };
const QuickBookCtx = createContext<Ctx>({ open: () => {} });
export const useQuickBook = () => useContext(QuickBookCtx);

export function QuickBookProvider({ children }: { children: React.ReactNode }) {
  const { lang } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("quickbook");

  const open = useCallback((src = "quickbook") => {
    setSource(src);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  const go = () => {
    window.open(bookLink(source), "_blank", "noopener,noreferrer");
    close();
  };

  const tel = telLink();
  const wa = waLink(lang);

  return (
    <QuickBookCtx.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="glass w-full max-w-lg rounded-b-none rounded-t-2xl p-6 sm:rounded-2xl sm:p-8"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">{pick(UI.qb_eyebrow, lang)}</p>
                  <h3 className="mt-1 text-2xl font-bold">{pick(UI.qb_title, lang)}</h3>
                  <p className="mt-1.5 text-sm text-steel">{lang === "es" ? "Te llevamos a la reserva segura en Square — en 60 segundos." : "We'll take you to secure Square booking — in 60 seconds."}</p>
                </div>
                <button aria-label="Close" onClick={close}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line-strong text-lg hover:bg-white/5">
                  ✕
                </button>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 text-xs text-silver">
                <span className="pill"><IconStar className="h-3.5 w-3.5 text-gold" /> {pick(UI.qb_b1, lang)}</span>
                <span className="pill"><IconShield className="h-3.5 w-3.5 text-accent-bright" /> {pick(UI.qb_b2, lang)}</span>
                <span className="pill"><IconClock className="h-3.5 w-3.5 text-accent-bright" /> {pick(UI.qb_b3, lang)}</span>
              </div>

              <button onClick={go} className="btn btn-primary mt-6 w-full text-base">
                {pick(UI.qb_go, lang)}
              </button>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-steel">
                <span className="inline-flex items-center gap-1.5"><IconShield className="h-3.5 w-3.5" /> {pick(UI.qb_via, lang)}</span>
                {tel && <a href={tel} className="inline-flex items-center gap-1.5 hover:text-snow"><IconPhone className="h-3.5 w-3.5" /> {pick(UI.qb_call, lang)}</a>}
                {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#25D366] hover:opacity-80"><IconWhatsApp className="h-3.5 w-3.5" /> WhatsApp</a>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </QuickBookCtx.Provider>
  );
}

/** Botón que abre la reserva rápida. Si no se pasan children, usa "Book now" según idioma. */
export function QuickBookButton({
  source,
  className = "btn btn-primary",
  children,
}: {
  source?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const { open } = useQuickBook();
  const { lang } = useLang();
  return (
    <button onClick={() => open(source)} className={className}>
      {children ?? pick(UI.book_now, lang)}
    </button>
  );
}
