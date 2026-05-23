import { useTranslations } from "next-intl";
import Link from "next/link";
import ParallaxVideo from "@/components/ParallaxVideo";

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
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}
          >
            <span style={{ color: "#fff" }}>{t("title_prefix")}</span><br />
            <span style={{ color: "#F06000" }}>Club Sportiv<br />Pétanque Corbeanca</span>
          </h1>
        </div>
      </section>

      {/* History + Petanque */}
      <section style={{ borderBottom: "2px solid #0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 pt-12">
          <div className="grid md:grid-cols-2 gap-16 pb-10">
            <div>
              <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#F06000" }}>
                {t("history_label")}
              </p>
              <h2 className="font-black uppercase text-2xl md:text-3xl mb-6" style={{ letterSpacing: "-0.03em" }}>
                {t("history_title")}
              </h2>
              <p style={{ color: "#555", lineHeight: 1.8 }}>{t("history_text")}</p>
            </div>
            <div style={{ paddingLeft: "3rem" }}>
              <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#F06000" }}>
                {t("sport_label")}
              </p>
              <h2 className="font-black uppercase text-2xl md:text-3xl mb-6" style={{ letterSpacing: "-0.03em" }}>
                {t("petanque_title")}
              </h2>
              <p style={{ color: "#555", lineHeight: 1.8 }}>{t("petanque_text")}</p>
            </div>
          </div>
          {/* Bill Chamly */}
          <div className="hidden md:flex flex-col items-center pb-10" style={{ marginTop: "-5.3rem" }}>
            <div style={{ width: 88, height: 88, borderRadius: "50%", overflow: "hidden", border: "2.5px solid #0a0a0a", flexShrink: 0 }}>
              <img src="/Bill-00.png" alt="Bill Chamly" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }} />
            </div>
            <p className="font-black uppercase text-xs mt-3 text-center" style={{ letterSpacing: "-0.01em" }}>Bill Chamly</p>
            <p className="text-xs text-center" style={{ color: "#888" }}>President &amp; Founding Member CSPC</p>
          </div>
        </div>
      </section>

      {/* Milestone — full-width compact orange bar */}
      <section style={{ background: "#F06000", color: "#fff", borderBottom: "2px solid #0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                {t("milestone_label")}
              </p>
              <p className="text-xs font-black uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>
                {t("milestone_date")}
              </p>
            </div>
            <div className="text-center">
              <p className="font-black" style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.05em", lineHeight: 1 }}>
                {t("milestone_players")}
              </p>
            </div>
            <div>
              <h3 className="font-black uppercase text-lg mb-2" style={{ letterSpacing: "-0.02em" }}>
                {t("milestone_title")}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7, fontSize: "0.875rem" }}>
                {t("milestone_text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Members strip */}
      <section style={{ background: "#0a0a0a", borderBottom: "2px solid #F06000" }}>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <p className="text-xs font-black uppercase tracking-widest mb-8" style={{ color: "#F06000" }}>
            {t("founding_members_label")}
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {/* Bill Chamly */}
            <div className="flex flex-col items-center">
              <div style={{ width: 88, height: 88, borderRadius: "50%", overflow: "hidden", border: "2.5px solid #F06000", flexShrink: 0 }}>
                <img src="/Bill-00.png" alt="Bill Chamly" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }} />
              </div>
              <p className="font-black uppercase text-xs mt-3 text-center" style={{ letterSpacing: "-0.01em", color: "#fff" }}>Bill Chamly</p>
              <p className="text-xs text-center" style={{ color: "#F06000" }}>President &amp; Founder</p>
            </div>
            {/* Alesa Goga */}
            <div className="flex flex-col items-center">
              <div style={{ width: 88, height: 88, borderRadius: "50%", overflow: "hidden", border: "2.5px solid #F06000", flexShrink: 0 }}>
                <img src="/Alesa-00.png" alt="Alesa Goga" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 10%" }} />
              </div>
              <p className="font-black uppercase text-xs mt-3 text-center" style={{ letterSpacing: "-0.01em", color: "#fff" }}>Alesa Goga</p>
              <p className="text-xs text-center" style={{ color: "#F06000" }}>Founding Member</p>
            </div>
            {/* Jan Cardon */}
            <div className="flex flex-col items-center">
              <div style={{ width: 88, height: 88, borderRadius: "50%", overflow: "hidden", border: "2.5px solid #F06000", flexShrink: 0 }}>
                <img src="/JanCardon-00.jpg" alt="Jan Cardon" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 10%", filter: "grayscale(100%)" }} />
              </div>
              <p className="font-black uppercase text-xs mt-3 text-center" style={{ letterSpacing: "-0.01em", color: "#fff" }}>Jan Cardon</p>
              <p className="text-xs text-center" style={{ color: "#F06000" }}>Founding Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width photo banner */}
      <section style={{ borderBottom: "2px solid #0a0a0a", overflow: "hidden", height: "500px" }}>
        <img
          src="/AllTheLadiesInTheHouse.jpg"
          alt={t("photo_banner_caption")}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
        />
      </section>

      {/* Values */}
      <section style={{ background: "#f2f2f2", borderBottom: "2px solid #0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-xs font-black uppercase tracking-widest mb-12" style={{ color: "#F06000" }}>
            {t("values_title")}
          </p>
          <div className="grid md:grid-cols-3" style={{ border: "2px solid #0a0a0a", position: "relative", paddingBottom: "5rem" }}>
            {([
              { n: "1", emoji: "01" },
              { n: "2", emoji: "02" },
              { n: "3", emoji: "03" },
            ] as const).map((item) => (
              <div key={item.n} className="p-8 md:p-10">
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

            {/* Alesa — on border between col 1 and col 2 */}
            <div className="hidden md:flex flex-col items-center" style={{ position: "absolute", left: "33.33%", bottom: "calc(7rem - 80px)", transform: "translateX(calc(-50% - 20px))" }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", overflow: "hidden", border: "2px solid #0a0a0a", flexShrink: 0, background: "#f2f2f2" }}>
                <img src="/Alesa-00.png" alt="Alesa Goga" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 10%" }} />
              </div>
              <p className="font-black uppercase text-xs mt-2 text-center" style={{ letterSpacing: "-0.01em" }}>Alesa Goga</p>
              <p className="text-xs text-center" style={{ color: "#888" }}>Founding Member CSPC</p>
            </div>

            {/* Cristina — on border between col 2 and col 3 */}
            <div className="hidden md:flex flex-col items-center" style={{ position: "absolute", left: "66.66%", bottom: "calc(7rem - 80px)", transform: "translateX(calc(-50% - 20px))" }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", overflow: "hidden", border: "2px solid #0a0a0a", flexShrink: 0, background: "#f2f2f2" }}>
                <img src="/CristinaC-00.jpg" alt="Cristina Chamly" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 10%" }} />
              </div>
              <p className="font-black uppercase text-xs mt-2 text-center" style={{ letterSpacing: "-0.01em" }}>Cristina Chamly</p>
              <p className="text-xs text-center" style={{ color: "#888" }}>Secretary General CSPC</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section style={{ background: "#fff", borderBottom: "2px solid #0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#F06000" }}>
            {t("faq_label")}
          </p>
          <h2 className="font-black uppercase text-2xl md:text-3xl mb-10" style={{ letterSpacing: "-0.03em" }}>
            {t("faq_title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-0" style={{ border: "2px solid #0a0a0a" }}>
            {/* FAQ 1 — join */}
            <div className="p-8" style={{ borderBottom: "2px solid #0a0a0a", borderRight: "2px solid #0a0a0a" }}>
              <h3 className="font-black uppercase text-base mb-3" style={{ letterSpacing: "-0.02em" }}>{t("faq1_q")}</h3>
              <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.875rem" }}>{t("faq1_a")}</p>
            </div>
            {/* FAQ 2 — boules */}
            <div className="p-8" style={{ borderBottom: "2px solid #0a0a0a" }}>
              <h3 className="font-black uppercase text-base mb-3" style={{ letterSpacing: "-0.02em" }}>{t("faq2_q")}</h3>
              <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.875rem" }}>{t("faq2_a")}</p>
            </div>
            {/* FAQ 3 — cost */}
            <div className="p-8" style={{ borderBottom: "2px solid #0a0a0a", borderRight: "2px solid #0a0a0a" }}>
              <h3 className="font-black uppercase text-base mb-3" style={{ letterSpacing: "-0.02em" }}>{t("faq3_q")}</h3>
              <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.875rem" }}>{t("faq3_a")}</p>
            </div>
            {/* FAQ 4 — where */}
            <div className="p-8" style={{ borderBottom: "2px solid #0a0a0a" }}>
              <h3 className="font-black uppercase text-base mb-3" style={{ letterSpacing: "-0.02em" }}>{t("faq4_q")}</h3>
              <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.875rem" }}>{t("faq4_a")}</p>
            </div>
            {/* FAQ 5 — children */}
            <div className="p-8" style={{ borderRight: "2px solid #0a0a0a" }}>
              <h3 className="font-black uppercase text-base mb-3" style={{ letterSpacing: "-0.02em" }}>{t("faq5_q")}</h3>
              <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.875rem" }}>{t("faq5_a")}</p>
            </div>
            {/* FAQ 6 — competitions */}
            <div className="p-8">
              <h3 className="font-black uppercase text-base mb-3" style={{ letterSpacing: "-0.02em" }}>{t("faq6_q")}</h3>
              <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.875rem" }}>{t("faq6_a")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax video */}
      <ParallaxVideo src="/videos/10071090.mp4" height={950} />

      {/* Social sport section */}
      <section style={{ borderBottom: "2px solid #0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="font-black uppercase text-lg mb-4" style={{ letterSpacing: "-0.02em", color: "#F06000" }}>
            {t("society_label")}
          </h2>
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
                className={[
                  "p-8",
                  // Mobile (1-col): bottom border between every row except the last
                  i < 3 ? "border-b-2 border-b-[#0a0a0a]" : "",
                  // Desktop (2-col): bottom border only on row 1 (items 0 & 1)
                  i >= 2 ? "md:border-b-0" : "",
                  // Desktop: right border on left-column items (0 & 2)
                  i % 2 === 0 ? "md:border-r-2 md:border-r-[#0a0a0a]" : "",
                ].filter(Boolean).join(" ")}
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
              style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}
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

        {/* Band 3 — Orange: online source links */}
        <div style={{ background: "#F06000", color: "#fff", borderBottom: "2px solid #0a0a0a" }}>
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

        {/* Band 4 — White: Club PDF documents */}
        <div style={{ background: "#fff" }}>
          <div className="max-w-7xl mx-auto px-6 py-10">
            <p className="text-xs font-black uppercase tracking-widest mb-6" style={{ color: "#F06000" }}>
              {t("docs_label")}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              {[
                { label: t("docs_membership"), href: "/MembershipForm.pdf" },
                { label: t("docs_statute"), href: "/StatutulCSPC10Mai2026.pdf" },
                { label: t("docs_rules_internal"), href: "/ClubInternalRules.pdf" },
                { label: t("docs_rules_en"), href: "/GameRules_EN.pdf" },
                { label: t("docs_rules_ro"), href: "/ReguliDeJoc_RO.pdf" },
              ].map((doc) => (
                <a key={doc.label} href={doc.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 group"
                  style={{ background: "#f2f2f2", border: "2px solid #0a0a0a", minWidth: "200px" }}>
                  <svg className="shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="#F06000"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-1 5h-2v-1h2v1zm0-3H8v-1h4v1zm4 6H8v-1h8v1z"/></svg>
                  <span className="text-xs font-black uppercase tracking-widest group-hover:underline">{doc.label}</span>
                  <span className="font-black text-sm group-hover:translate-x-1 transition-transform ml-auto">↓</span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Bottom photo banner — mosia6 */}
      <section style={{ overflow: "hidden", width: "100%" }}>
        <img
          src="/mosia6.jpg"
          alt="Club Sportiv Pétanque Corbeanca"
          style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center top", display: "block" }}
        />
      </section>
    </>
  );
}
