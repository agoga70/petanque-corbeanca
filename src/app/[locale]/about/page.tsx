import { useTranslations } from "next-intl";
import VideoStrip from "@/components/VideoStrip";

const SOCIAL_VIDEOS = [
  "/videos/10071091.mp4",
  "/videos/10071086.mp4",
  "/videos/10071088.mp4",
  "/videos/10071090.mp4",
];

export default function AboutPage() {
  return <AboutContent />;
}

function AboutContent() {
  const t = useTranslations("about");

  return (
    <>
      {/* Page header */}
      <section style={{ background: "#0a0a0a", color: "#fff", borderBottom: "2px solid #F06000" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#F06000" }}>
            01 — Club Sportiv Pétanque Corbeanca
          </p>
          <h1
            className="font-black uppercase"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}
          >
            {t("title")}
          </h1>
        </div>
      </section>

      {/* History + Petanque */}
      <section style={{ borderBottom: "2px solid #0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#F06000" }}>
              Istoria clubului
            </p>
            <h2 className="font-black uppercase text-2xl md:text-3xl mb-6" style={{ letterSpacing: "-0.03em" }}>
              {t("history_title")}
            </h2>
            <p style={{ color: "#555", lineHeight: 1.8 }}>{t("history_text")}</p>
          </div>
          <div style={{ borderLeft: "2px solid #f2f2f2", paddingLeft: "3rem" }}>
            <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#F06000" }}>
              Sportul
            </p>
            <h2 className="font-black uppercase text-2xl md:text-3xl mb-6" style={{ letterSpacing: "-0.03em" }}>
              {t("petanque_title")}
            </h2>
            <p style={{ color: "#555", lineHeight: 1.8 }}>{t("petanque_text")}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "#f2f2f2", borderBottom: "2px solid #0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-xs font-black uppercase tracking-widest mb-12" style={{ color: "#F06000" }}>
            {t("values_title")}
          </p>
          <div className="grid md:grid-cols-3" style={{ border: "2px solid #0a0a0a" }}>
            {([
              { n: "1", emoji: "01" },
              { n: "2", emoji: "02" },
              { n: "3", emoji: "03" },
            ] as const).map((item, i) => (
              <div
                key={item.n}
                className="p-8 md:p-10"
                style={{
                  borderBottom: i < 2 ? "2px solid #0a0a0a" : "none",
                }}
              >
                <p className="font-black text-5xl mb-6" style={{ color: "#f2f2f2", WebkitTextStroke: "2px #0a0a0a" }}>
                  {item.emoji}
                </p>
                <h3 className="font-black uppercase text-xl mb-3" style={{ letterSpacing: "-0.02em" }}>
                  {t(`value${item.n}_title`)}
                </h3>
                <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.9rem" }}>
                  {t(`value${item.n}_text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social video strip */}
      <VideoStrip videos={SOCIAL_VIDEOS} />

      {/* Social sport section */}
      <section style={{ borderBottom: "2px solid #0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#F06000" }}>
            {t("society_label")}
          </p>
          <p className="text-base max-w-3xl mb-12" style={{ color: "#555", lineHeight: 1.8 }}>
            {t("society_intro")}{" "}
            <a href="https://www.bbc.com/sport/get-inspired/27911295" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline" style={{ color: "#F06000" }}>BBC Sport ↗</a>
          </p>

          <div className="grid md:grid-cols-2" style={{ border: "2px solid #0a0a0a" }}>
            {([
              { num: "01", titleKey: "pillar1_title", textKey: "pillar1_text", source: "France Today", href: "https://francetoday.com/culture/petanque-life-in-the-slow-lane/" },
              { num: "02", titleKey: "pillar2_title", textKey: "pillar2_text", source: "BBC Sport", href: "https://www.bbc.com/sport/get-inspired/27911295" },
              { num: "03", titleKey: "pillar3_title", textKey: "pillar3_text", source: "Obut", href: "https://www.obut.com/en/blog/news/pensez-petanque-pour-vos-enfants-sport-bien-etre-" },
              { num: "04", titleKey: "pillar4_title", textKey: "pillar4_text", source: "France Today", href: "https://francetoday.com/culture/petanque-life-in-the-slow-lane/" },
            ] as const).map((item, i) => (
              <div
                key={item.num}
                className="p-8"
                style={{
                  borderBottom: i < 3 ? "2px solid #0a0a0a" : "none",
                }}
              >
                <p className="font-black text-4xl mb-4 select-none" style={{ color: "#f2f2f2", WebkitTextStroke: "1.5px #ddd", letterSpacing: "-0.04em", lineHeight: 1 }}>
                  {item.num}
                </p>
                <h3 className="font-black uppercase text-lg mb-3" style={{ letterSpacing: "-0.02em" }}>
                  {t(item.titleKey)}
                </h3>
                <p className="mb-4" style={{ color: "#555", lineHeight: 1.7, fontSize: "0.875rem" }}>
                  {t(item.textKey)}
                </p>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase tracking-widest hover:underline" style={{ color: "#F06000" }}>
                  {t("source_label")}: {item.source} ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules section */}
      <section style={{ borderBottom: "2px solid #0a0a0a" }}>

        {/* Band 1 — Orange: motto */}
        <div style={{ background: "#F06000", color: "#fff", borderBottom: "2px solid #0a0a0a" }}>
          <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
            <p className="text-xs font-black uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              {t("rules_label")} — FIPJP
            </p>
            <h2
              className="font-black uppercase leading-none mb-6"
              style={{ fontSize: "clamp(3rem, 10vw, 7rem)", letterSpacing: "-0.04em", lineHeight: 0.88 }}
            >
              {t("motto_line1")}<br />
              <span style={{ color: "rgba(255,255,255,0.3)" }}>{t("motto_line2")}</span><br />
              {t("motto_line3")}
            </h2>
            <p className="max-w-xl" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8, fontSize: "0.9rem" }}>
              {t("rules_text")}
            </p>
          </div>
        </div>

        {/* Band 2 — White: format cards + measurements */}
        <div style={{ background: "#fff", borderBottom: "2px solid #0a0a0a" }}>
          <div className="max-w-7xl mx-auto">

            {/* Format cards */}
            <div className="grid md:grid-cols-3 gap-0" style={{ borderBottom: "2px solid #0a0a0a" }}>
              {([
                { num: "№ 01", key: "tete", descKey: "tete_desc" },
                { num: "№ 02", key: "doublette", descKey: "doublette_desc" },
                { num: "№ 03", key: "triplette", descKey: "triplette_desc" },
              ] as const).map((f, i) => (
                <div
                  key={f.key}
                  className="p-8"
                  style={{ borderBottom: i < 3 ? "2px solid #f2f2f2" : "none", borderRight: i < 2 ? "2px solid #0a0a0a" : "none" }}
                >
                  <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#bbb" }}>
                    {f.num}
                  </p>
                  <h3 className="font-black uppercase text-2xl md:text-3xl mb-3" style={{ letterSpacing: "-0.03em", color: "#F06000" }}>
                    {t(f.key)}
                  </h3>
                  <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.875rem" }}>
                    {t(f.descKey)}
                  </p>
                </div>
              ))}
            </div>

            {/* FIPJP measurements */}
            <div className="grid grid-cols-3 gap-0">
              {[
                { value: "12m", label: t("measure_distance") },
                { value: "800g", label: t("measure_weight") },
                { value: "13pt", label: t("measure_points") },
              ].map((m, i) => (
                <div key={m.label} className="px-6 py-10 text-center" style={{ borderRight: i < 2 ? "2px solid #0a0a0a" : "none" }}>
                  <p className="font-black" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.04em", lineHeight: 1, color: "#0a0a0a" }}>
                    {m.value}
                  </p>
                  <p className="text-xs font-black uppercase tracking-widest mt-2" style={{ color: "#F06000" }}>
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Band 3 — Orange: source links */}
        <div style={{ background: "#F06000", color: "#fff" }}>
          <div className="max-w-7xl mx-auto px-6 py-10">
          <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
            {t("rules_label")}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <a href="https://www.obut.com/en/content/92-petanque-rules" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between px-5 py-3 group"
              style={{ background: "rgba(0,0,0,0.2)", border: "2px solid rgba(255,255,255,0.3)", minWidth: "240px" }}>
              <span className="text-xs font-black uppercase tracking-widest">Obut — {t("rules_official")}</span>
              <span className="font-black text-lg group-hover:translate-x-1 transition-transform ml-4">→</span>
            </a>
            <a href="https://fipjp.org/images/2021/reglements/Official_Rules_Petanque-En.pdf" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between px-5 py-3 group"
              style={{ background: "rgba(0,0,0,0.2)", border: "2px solid rgba(255,255,255,0.3)", minWidth: "240px" }}>
              <span className="text-xs font-black uppercase tracking-widest">FIPJP — {t("rules_official")} (PDF)</span>
              <span className="font-black text-lg group-hover:translate-x-1 transition-transform ml-4">→</span>
            </a>
            <a href="https://www.thesimplethings.com/blog/rules-petanque" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between px-5 py-3 group"
              style={{ background: "rgba(0,0,0,0.2)", border: "2px solid rgba(255,255,255,0.3)", minWidth: "240px" }}>
              <span className="text-xs font-black uppercase tracking-widest">The Simple Things — {t("rules_guide")}</span>
              <span className="font-black text-lg group-hover:translate-x-1 transition-transform ml-4">→</span>
            </a>
          </div>
          </div>
        </div>
      </section>

    </>
  );
}
