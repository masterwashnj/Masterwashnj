"use client";

import Link from "next/link";
import { SITE, telLink } from "@/lib/site";
import { UI, pick } from "@/lib/i18n";
import { useLang } from "@/components/lang-context";
import { QuickBookButton } from "@/components/quick-book";
import { LogoFull } from "@/components/logo";

export function Footer() {
  const { lang } = useLang();
  const tel = telLink();
  const nav = [
    { href: "/", label: pick(UI.nav_home, lang) },
    { href: "/services", label: pick(UI.nav_services, lang) },
    { href: "/gallery", label: pick(UI.nav_gallery, lang) },
    { href: "/pricing", label: pick(UI.nav_pricing, lang) },
    { href: "/contact", label: pick(UI.nav_contact, lang) },
  ];

  return (
    <footer className="border-t border-line bg-base-deep">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-1">
            <LogoFull />
            <p className="mt-4 max-w-xs text-sm text-steel">{pick(UI.footer_about, lang)}</p>
          </div>

          <div>
            <h4 className="label">{pick(UI.footer_nav, lang)}</h4>
            <ul className="space-y-2">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-silver hover:text-snow">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label">{pick(UI.footer_contact, lang)}</h4>
            <ul className="space-y-2 text-sm text-silver">
              {tel && <li><a href={tel} className="hover:text-snow">{SITE.phoneDisplay}</a></li>}
              {SITE.email && <li><a href={`mailto:${SITE.email}`} className="hover:text-snow">{SITE.email}</a></li>}
              <li>
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-snow">
                  Instagram {SITE.instagramHandle}
                </a>
              </li>
              <li className="text-steel">{SITE.region}</li>
            </ul>
          </div>

          <div>
            <h4 className="label">{pick(UI.footer_book, lang)}</h4>
            <QuickBookButton source="footer" className="btn btn-primary w-full" />
            <p className="mt-3 text-xs text-steel">{pick(UI.footer_book_note, lang)}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-steel sm:flex-row">
          <span>© {new Date().getFullYear()} Master Wash NJ. {pick(UI.footer_rights, lang)}</span>
          <Link href="/privacy" className="hover:text-snow">{lang === "es" ? "Privacidad" : "Privacy"}</Link>
        </div>
      </div>
    </footer>
  );
}
