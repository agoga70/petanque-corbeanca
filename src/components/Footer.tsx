"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer style={{ borderTop: "2px solid #0a0a0a", background: "#0a0a0a", color: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <p className="font-black uppercase text-xl tracking-tighter" style={{ letterSpacing: "-0.03em" }}>
            Pétanque<span style={{ color: "#F06000" }}>.</span>Corbeanca
          </p>
          <p className="text-xs mt-1" style={{ color: "#555" }}>
            Club Sportiv Pétanque Corbeanca
          </p>
          <p className="text-xs mt-2" style={{ color: "#888" }}>
            © {new Date().getFullYear()} — {t("rights")}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          {[
            { href: `/${locale}/about`, label: "Club" },
            { href: `/${locale}/events`, label: "Evenimente" },
            { href: `/${locale}/news`, label: "Știri" },
            { href: `/${locale}/contact`, label: "Contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-bold uppercase tracking-widest transition-colors hover:text-red-500"
              style={{ color: "#888" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-2">
          <a href="https://www.facebook.com/PetanqueCorbeanca" target="_blank" rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest hover:text-red-500 transition-colors" style={{ color: "#888" }}>
            Facebook →
          </a>
          <a href="https://www.instagram.com/petanque_corbeanca/" target="_blank" rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest hover:text-red-500 transition-colors" style={{ color: "#888" }}>
            Instagram →
          </a>
          <a href="https://wa.me/40730444666" target="_blank" rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest hover:text-red-500 transition-colors" style={{ color: "#888" }}>
            WhatsApp →
          </a>
          <a href="mailto:petanquecorbeanca@gmail.com"
            className="text-xs font-bold uppercase tracking-widest hover:text-red-500 transition-colors" style={{ color: "#888" }}>
            Email →
          </a>
        </div>
      </div>
    </footer>
  );
}
