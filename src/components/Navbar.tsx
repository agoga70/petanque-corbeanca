"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

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

  const activeIndex = Math.max(0, links.findIndex((l) => l.href === pathWithoutLocale));

  // Portrait mobile: show up to 3 tabs centred on active
  const visibleTabs: typeof links = [];
  if (activeIndex > 0) visibleTabs.push(links[activeIndex - 1]);
  visibleTabs.push(links[activeIndex]);
  if (activeIndex < links.length - 1) visibleTabs.push(links[activeIndex + 1]);

  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < links.length - 1;

  return (
    <nav style={{ borderBottom: "2px solid #0a0a0a" }} className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">

        {/* Logo — text hidden on md (landscape phone) to avoid overlap, shown lg+ */}
        <Link href={`/${locale}/`} className="flex items-center gap-2 flex-shrink-0">
          <Image src="/logo-transparent.png" alt="Pétanque Corbeanca" width={40} height={40} />
          <span
            className="font-black uppercase tracking-tighter text-sm hidden lg:block"
            style={{ color: "#0a0a0a", letterSpacing: "-0.03em" }}
          >
            Pétanque<span style={{ color: "#F06000" }}>.</span>Corbeanca
          </span>
        </Link>

        {/* ── Desktop / landscape-phone nav (md and up) ── */}
        <div className="hidden md:flex items-center">
          {links.map((link) => {
            const active = pathWithoutLocale === link.href;
            return (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className="text-xs font-bold uppercase tracking-widest px-3 py-4 transition-colors hover:text-red-600"
                style={{
                  color: active ? "#F06000" : "#0a0a0a",
                  borderBottom: active ? "2px solid #F06000" : "2px solid transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex ml-4" style={{ borderLeft: "2px solid #0a0a0a" }}>
            {(["ro", "en", "fr"] as const).map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className="text-xs font-black uppercase px-2 py-4 transition-colors"
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

        {/* ── Portrait-phone nav (below md) ── */}
        <div className="md:hidden flex items-center">
          {/* Left arrow */}
          <button
            aria-label="Previous page"
            onClick={() => hasPrev && router.push(`/${locale}${links[activeIndex - 1].href}`)}
            className="px-2 py-4 font-black text-base transition-opacity"
            style={{ color: "#0a0a0a", opacity: hasPrev ? 1 : 0, pointerEvents: hasPrev ? "auto" : "none" }}
          >
            ←
          </button>

          {/* Up-to-3 visible tabs */}
          {visibleTabs.map((link) => {
            const active = pathWithoutLocale === link.href;
            return (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className="text-xs uppercase tracking-widest px-3 py-4 transition-colors"
                style={{
                  fontWeight: active ? 900 : 700,
                  color: active ? "#F06000" : "#888",
                  borderBottom: active ? "2px solid #F06000" : "2px solid transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Right arrow */}
          <button
            aria-label="Next page"
            onClick={() => hasNext && router.push(`/${locale}${links[activeIndex + 1].href}`)}
            className="px-2 py-4 font-black text-base transition-opacity"
            style={{ color: "#0a0a0a", opacity: hasNext ? 1 : 0, pointerEvents: hasNext ? "auto" : "none" }}
          >
            →
          </button>

          {/* Language switcher — single cycling button */}
          <div className="flex ml-1" style={{ borderLeft: "2px solid #f2f2f2" }}>
            <button
              onClick={() => {
                const order = ["ro", "en", "fr"] as const;
                const next = order[(order.indexOf(locale as "ro" | "en" | "fr") + 1) % order.length];
                switchLocale(next);
              }}
              className="text-xs font-black uppercase px-3 py-4"
              style={{ color: "#F06000" }}
            >
              {locale}
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}
