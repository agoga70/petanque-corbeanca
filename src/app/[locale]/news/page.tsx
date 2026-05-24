"use client";

import { useTranslations } from "next-intl";
import { useState, useCallback } from "react";
import FBNewsFeed from "@/components/FBNewsFeed";

type ArticleBase = {
  id: number;
  titleKey: string;
  excerptKey: string;
  tagKey: string;
  date: string;
  href: string | null;
  links: { label: string; url: string }[] | null;
};

const articles: ArticleBase[] = [
  {
    id: 5,
    titleKey: "a1_title",
    excerptKey: "a1_excerpt",
    tagKey: "tag_international",
    date: "2026-06-04",
    href: null,
    links: [
      { label: "Annonce officielle →", url: "https://www.facebook.com/photo?fbid=678151808699728&set=a.532071159974461" },
      { label: "Informations →", url: "https://www.facebook.com/photo?fbid=1565360532261720&set=pcb.1565360555595051" },
      { label: "Groupe pétanque →", url: "https://www.facebook.com/photo?fbid=10162487196088344&set=gm.4492114074398385&idorvanity=3215750025368136" },
    ],
  },
  {
    id: 3,
    titleKey: "a2_title",
    excerptKey: "a2_excerpt",
    tagKey: "tag_international",
    date: "2026-05-15",
    href: "https://www.facebook.com/share/p/1Zq8th3XiP/",
    links: null,
  },
  {
    id: 2,
    titleKey: "a3_title",
    excerptKey: "a3_excerpt",
    tagKey: "tag_championship",
    date: "2026-05-01",
    href: "https://www.facebook.com/PetanqueCorbeanca/posts/pfbid02DKTNUk5EGRWTycmpxfyDLwkSepdwz3CvBmcJMBvPf9TZsFvHvtew7oLJc841tRRVl",
    links: null,
  },
  {
    id: 1,
    titleKey: "a4_title",
    excerptKey: "a4_excerpt",
    tagKey: "tag_competition",
    date: "2026-04-19",
    href: "https://www.facebook.com/PetanqueCorbeanca/posts/pfbid02mHJBb2hXLdXNw8eQhPwbRurc4S3sssjhYXeyHd2smbJxw9eZgjUCs9D7mxMNqBoSl",
    links: null,
  },
  {
    id: 4,
    titleKey: "a5_title",
    excerptKey: "a5_excerpt",
    tagKey: "tag_community",
    date: "2024-07-20",
    href: "https://tctrail.ca/stories/petanque-parc-la-fontaine/",
    links: null,
  },
];

export default function NewsPage() {
  return <NewsContent />;
}

function NewsContent() {
  const t = useTranslations("news");
  const [fbCount, setFbCount] = useState(0);
  const onPostsLoaded = useCallback((count: number) => setFbCount(count), []);

  return (
    <div className="flex flex-col flex-1">
      <section style={{ background: "#0a0a0a", color: "#fff", borderBottom: "2px solid #F06000" }}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "#F06000" }}>
            04 — Știri
          </p>
          <h1 className="font-black uppercase" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
            {t("title").split("Pétanque").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && <span style={{ color: "#F06000" }}>Pétanque</span>}
              </span>
            ))}
          </h1>
        </div>
      </section>

      {/* Top photo banner */}
      <section style={{ borderBottom: "2px solid #0a0a0a", overflow: "hidden" }}>
        <img src="/mosia9.jpg" alt="Club Sportiv Pétanque Corbeanca" style={{ width: "100%", height: "500px", objectFit: "cover", objectPosition: "center top", display: "block" }} />
      </section>

      <section className="flex-1 flex flex-col" style={{
          backgroundImage: "url('/petanque-horiz-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}>
        <div className="flex-1 flex flex-col" style={{ background: "rgba(255,255,255,0.88)", borderBottom: "2px solid #0a0a0a" }}>
        <div className="flex-1 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_400px]">

          {/* Articles */}
          <div style={{ overflowY: "auto" }}>
            <FBNewsFeed startNum={1} onPostsLoaded={onPostsLoaded} />
            {articles.map((article, i) => {
              const num = String(fbCount + i + 1).padStart(2, "0");
              const inner = (
                <div
                  className="px-6 py-4 grid md:grid-cols-4 gap-4 items-start group"
                  style={{ borderBottom: i < articles.length - 1 ? "2px solid #f2f2f2" : "none" }}
                >
                  <div>
                    <p className="font-black text-4xl select-none" style={{ color: "#bbb", WebkitTextStroke: "1.5px #999", letterSpacing: "-0.04em", lineHeight: 1 }}>
                      {num}
                    </p>
                  </div>
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-black uppercase tracking-widest px-2 py-0.5" style={{ background: "#F06000", color: "#fff" }}>
                        {t(article.tagKey)}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#888" }}>
                        {new Date(article.date).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}
                      </span>
                    </div>
                    <h2 className="font-black uppercase text-lg md:text-xl mb-2 transition-colors" style={{ letterSpacing: "-0.02em" }}>
                      {t(article.titleKey)}
                    </h2>
                    <p style={{ color: "#555", lineHeight: 1.6, fontSize: "0.875rem" }}>{t(article.excerptKey)}</p>

                    {/* Multiple links */}
                    {article.links && (
                      <div className="mt-4 flex flex-row flex-wrap gap-4">
                        {article.links.map((l) => (
                          <a
                            key={l.url}
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-black uppercase tracking-widest hover:underline"
                            style={{ color: "#F06000" }}
                          >
                            {l.label}
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Single link */}
                    {article.href && !article.links && (
                      <p className="mt-3 text-xs font-black uppercase tracking-widest" style={{ color: "#F06000" }}>
                        {t("read_more")} →
                      </p>
                    )}
                  </div>
                </div>
              );

              return article.href ? (
                <a key={article.id} href={article.href} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                  {inner}
                </a>
              ) : (
                <div key={article.id}>{inner}</div>
              );
            })}
          </div>

          {/* Right image — hidden on mobile */}
          <div className="hidden md:block" style={{ overflow: "hidden", borderLeft: "2px solid #0a0a0a" }}>
            <img src="/petanque-boules-vert.jpg" alt="Boules de pétanque" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </div>

        </div>
        </div>
      </section>

      {/* Bottom photo banner */}
      <section style={{ overflow: "hidden" }}>
        <img src="/mosia5-jump3.jpg" alt="Club Sportiv Pétanque Corbeanca" style={{ width: "100%", height: "700px", objectFit: "cover", objectPosition: "center center", display: "block" }} />
      </section>
    </div>
  );
}
