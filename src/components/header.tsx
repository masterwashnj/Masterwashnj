"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { UI, pick } from "@/lib/i18n";
import { useLang, LangToggle } from "@/components/lang-context";
import { QuickBookButton } from "@/components/quick-book";
import { Logo } from "@/components/logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();

  const nav = [
    { href: "/", label: pick(UI.nav_home, lang) },
    { href: "/services", label: pick(UI.nav_services, lang) },
    { href: "/gallery", label: pick(UI.nav_gallery, lang) },
    { href: "/pricing", label: pick(UI.nav_pricing, lang) },
    { href: "/contact", label: pick(UI.nav_contact, lang) },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-silver transition-colors hover:text-snow">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LangToggle />
          <QuickBookButton source="header" className="btn btn-primary">
            {pick(UI.book_now, lang)}
          </QuickBookButton>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LangToggle />
          <button
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-surface md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-3 text-base text-silver transition-colors hover:text-snow"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <QuickBookButton source="mobile_menu" className="btn btn-primary mt-2 w-full">
              {pick(UI.book_now, lang)}
            </QuickBookButton>
            <span className="mt-3 text-center text-xs text-steel">{SITE.instagramHandle} · {SITE.state}</span>
          </nav>
        </div>
      )}
    </header>
  );
}
