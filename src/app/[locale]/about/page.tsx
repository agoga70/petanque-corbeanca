import { useTranslations } from "next-intl";

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
            01 — Club
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

    </>
  );
}
