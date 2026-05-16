"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const pathWithoutLocale = pathname.replace(/^\/(ro|en|fr)/, "") || "/";

  function switchLocale(l: string) {
    router.push(`/${l}${pathWithoutLocale}`);
  }

  const links = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/events", label: t("events") },
    { href: "/news", label: t("news") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <nav style={{ borderBottom: "2px solid #0a0a0a" }} className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href={`/${locale}/`} className="flex items-center gap-2">
          <Image
            src="/logo-transparent.png"
            alt="Pétanque Corbeanca"
            width={48}
            height={48}
          />
          <span className="font-black uppercase tracking-tighter text-base hidden sm:block" style={{ color: "#0a0a0a", letterSpacing: "-0.03em" }}>
            Pétanque<span style={{ color: "#F06000" }}>.</span>Corbeanca
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0">
          {links.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className="text-xs font-bold uppercase tracking-widest px-5 py-4 transition-colors hover:text-red-600"
              style={{ color: "#0a0a0a" }}
            >
              {link.label}
            </Link>
          ))}
          {/* Language switcher */}
          <div className="flex ml-6" style={{ borderLeft: "2px solid #0a0a0a" }}>
            {(["ro", "en", "fr"] as const).map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className="text-xs font-black uppercase px-3 py-4 transition-colors"
                style={{
                  color: locale === l ? "#F06000" : "#888",
                  borderBottom: locale === l ? "2px solid #F06000" : "2px solid transparent",
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden font-black text-xs uppercase tracking-widest"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#0a0a0a" }}
        >
          {menuOpen ? "✕ Close" : "☰ Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ borderTop: "2px solid #0a0a0a" }} className="md:hidden bg-white">
          {links.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className="block px-6 py-4 text-sm font-black uppercase tracking-widest"
              style={{ borderBottom: "1px solid #f2f2f2", color: "#0a0a0a" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex px-6 py-4 gap-4">
            {(["ro", "en", "fr"] as const).map((l) => (
              <button
                key={l}
                onClick={() => { switchLocale(l); setMenuOpen(false); }}
                className="text-xs font-black uppercase"
                style={{ color: locale === l ? "#F06000" : "#888" }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
