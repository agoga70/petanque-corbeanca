import { useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import ParallaxVideo from "@/components/ParallaxVideo";

export default async function HomePage() {
  const locale = await getLocale();
  return <HomeContent locale={locale} />;
}

function HomeContent({ locale }: { locale: string }) {
  const t = useTranslations("home");

  return (
    <>
      {/* Hero */}
      <section style={{ background: "#0a0a0a", color: "#ffffff", borderBottom: "2px solid #F06000" }}>
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#F06000" }}>
            Corbeanca, România — Est. 2021
          </p>
          <h1
            className="font-black uppercase leading-none mb-5"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}
          >
            Pétanque<br />
            <span style={{ color: "#F06000" }}>Corbeanca</span>
          </h1>
          <p className="text-base max-w-xl mb-8" style={{ color: "#aaa" }}>
            {t("hero_subtitle")}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={`/${locale}/about`} className="text-xs font-black uppercase tracking-widest px-6 py-3" style={{ background: "#F06000", color: "#fff" }}>
              {t("hero_cta")} →
            </Link>
            <Link href={`/${locale}/events`} className="text-xs font-black uppercase tracking-widest px-6 py-3" style={{ border: "2px solid #fff", color: "#fff" }}>
              {t("hero_cta2")} →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: "#F06000", color: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "2021", label: "Fondare" },
            { num: "3", label: "Limbi" },
            { num: "∞", label: "Pasiune" },
            { num: "Corbeanca", label: "Ilfov, RO" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-black text-xl md:text-2xl" style={{ letterSpacing: "-0.04em" }}>{s.num}</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About + Events side by side */}
      <section style={{ borderBottom: "2px solid #0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-0">
          {/* About */}
          <div className="pr-0 md:pr-12 pb-10 md:pb-0" style={{ borderBottom: "2px solid #f2f2f2" }}>
            <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "#F06000" }}>
              01 — {t("about_title")}
            </p>
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ letterSpacing: "-0.03em", lineHeight: 1 }}>
              {t("about_tagline")}
            </h2>
            <p className="text-sm mb-5" style={{ color: "#555", lineHeight: 1.7 }}>
              {t("about_text")}
            </p>
            <Link href={`/${locale}/about`} className="text-xs font-black uppercase tracking-widest" style={{ color: "#F06000", borderBottom: "2px solid #F06000", paddingBottom: "2px" }}>
              {t("read_more")} →
            </Link>
          </div>

          {/* Events */}
          <div className="pt-10 md:pt-0 md:pl-12" style={{ borderLeft: "0px" }}>
            <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "#F06000" }}>
              02 — {t("events_title")}
            </p>
            <h2 className="font-black uppercase text-3xl md:text-4xl mb-4" style={{ letterSpacing: "-0.03em", lineHeight: 1 }}>
              {t("events_tagline")}
            </h2>
            <a
              href="https://www.facebook.com/PetanqueCorbeanca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 group mb-4"
              style={{ background: "#f2f2f2", border: "2px solid #0a0a0a" }}
            >
              <div>
                <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#888" }}>Facebook</p>
                <p className="font-black uppercase text-base" style={{ letterSpacing: "-0.02em" }}>Pétanque Corbeanca</p>
              </div>
              <span className="font-black text-2xl group-hover:translate-x-1 transition-transform" style={{ color: "#F06000" }}>→</span>
            </a>
            <Link href={`/${locale}/events`} className="text-xs font-black uppercase tracking-widest px-6 py-3 inline-block" style={{ background: "#0a0a0a", color: "#fff" }}>
              {t("events_cta")} →
            </Link>
          </div>
        </div>
      </section>

      {/* Parallax video */}
      <ParallaxVideo src="/videos/petanque-17658629.mp4" height={600} />

      {/* CTA */}
      <section style={{ background: "#F06000", color: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-70">03 — Join</p>
            <h2 className="font-black uppercase text-3xl md:text-4xl" style={{ letterSpacing: "-0.04em", lineHeight: 0.95 }}>
              {t("join_title")}
            </h2>
          </div>
          <Link href={`/${locale}/contact`} className="shrink-0 text-xs font-black uppercase tracking-widest px-6 py-3" style={{ background: "#fff", color: "#F06000" }}>
            {t("join_cta")} →
          </Link>
        </div>
      </section>
    </>
  );
}
