"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const localeLabels: Record<string, string> = { ro: "RO", en: "EN", fr: "FR" };

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const localePrefix = `/${locale}`;
  const pathWithoutLocale = pathname.replace(/^\/(ro|en|fr)/, "") || "/";

  function switchLocale(newLocale: string) {
    router.push(`/${newLocale}${pathWithoutLocale}`);
  }

  const links = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/events", label: t("events") },
    { href: "/news", label: t("news") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href={`${localePrefix}/`} className="flex items-center gap-2 font-bold text-green-700 text-lg">
          <span className="text-2xl">🎯</span>
          <span>Pétanque Corbeanca</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={`${localePrefix}${link.href}`}
              className="text-gray-600 hover:text-green-700 font-medium transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
          {/* Language switcher */}
          <div className="flex gap-1 ml-4 border border-gray-200 rounded-full px-2 py-1">
            {(["ro", "en", "fr"] as const).map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`text-xs px-2 py-0.5 rounded-full font-semibold transition-colors ${
                  locale === l ? "bg-green-700 text-white" : "text-gray-500 hover:text-green-700"
                }`}
              >
                {localeLabels[l]}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={`${localePrefix}${link.href}`}
              className="text-gray-700 hover:text-green-700 font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2 border-t border-gray-100">
            {(["ro", "en", "fr"] as const).map((l) => (
              <button
                key={l}
                onClick={() => { switchLocale(l); setMenuOpen(false); }}
                className={`text-sm px-3 py-1 rounded-full font-semibold ${
                  locale === l ? "bg-green-700 text-white" : "border border-gray-300 text-gray-600"
                }`}
              >
                {localeLabels[l]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
