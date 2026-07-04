"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangCtx = createContext<Ctx>({ lang: "es", setLang: () => {} });
export const useLang = () => useContext(LangCtx);

export function LangProvider({ children }: { children: React.ReactNode }) {
  // Idioma por defecto: INGLÉS (el negocio atiende NJ & PA, clientela en inglés).
  const [lang, setLangState] = useState<Lang>("en");

  // Restaura SOLO la preferencia guardada por el usuario (si la cambió antes).
  // Patrón SSR correcto (servidor renderiza "en" y el cliente ajusta tras montar).
  // También sincroniza <html lang> con el idioma activo (accesibilidad / lectores de pantalla).
  useEffect(() => {
    const saved = (typeof localStorage !== "undefined" && localStorage.getItem("mw_lang")) as Lang | null;
    if (saved === "es" || saved === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("mw_lang", l);
      document.documentElement.lang = l;
    } catch {}
  };

  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

/** Toggle ES/EN para el header. */
export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`inline-flex overflow-hidden rounded-full border border-line-strong text-xs font-semibold ${className}`}>
      <button
        onClick={() => setLang("es")}
        className={`px-2.5 py-1 transition-colors ${lang === "es" ? "bg-accent text-white" : "text-silver hover:text-snow"}`}
        aria-pressed={lang === "es"}
      >
        ES
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 transition-colors ${lang === "en" ? "bg-accent text-white" : "text-silver hover:text-snow"}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
