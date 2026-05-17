import { useTranslations } from "next-intl";

type Article = {
  id: number;
  num: string;
  title: string;
  date: string;
  excerpt: string;
  tag: string;
  href: string | null;
  links: { label: string; url: string }[] | null;
};

const articles: Article[] = [
  {
    id: 5,
    num: "01",
    title: "Pétanque Fest Varna 2026",
    date: "2026-06-04",
    excerpt: "Une semaine exceptionnelle sur les rives de la Mer Noire, entre tournois internationaux de pétanque, convivialité, et ambiance festive. Joueurs : venez affronter des équipes venues du monde entier ! Accompagnants : profitez-en pour découvrir la Bulgarie, sa culture, ses paysages et sa douceur de vivre. Une expérience unique à ne pas manquer !",
    tag: "Internațional",
    href: null,
    links: [
      { label: "Annonce officielle →", url: "https://www.facebook.com/photo?fbid=678151808699728&set=a.532071159974461" },
      { label: "Informations →", url: "https://www.facebook.com/photo?fbid=1565360532261720&set=pcb.1565360555595051" },
      { label: "Groupe pétanque →", url: "https://www.facebook.com/photo?fbid=10162487196088344&set=gm.4492114074398385&idorvanity=3215750025368136" },
    ],
  },
  {
    id: 3,
    num: "02",
    title: "Balkan Pétanque Tour 2026",
    date: "2026-05-15",
    excerpt: "The Balkan Pétanque Tour is a multi-stage circuit across Southeastern Europe. Key 2026 stops: Black Sea Pétanque Fest in Varna, Bulgaria (May 15–18); Dracula Cup in Bucharest (April 18–19, completed); 5th Open Pétanque Festival in Preveza, Greece (June 4–7) drawing nearly 300 athletes from 19 countries.",
    tag: "Internațional",
    href: "https://www.facebook.com/share/p/1Zq8th3XiP/",
    links: null,
  },
  {
    id: 2,
    num: "03",
    title: "1st Romanian Championship 2026 — Casa Vlasia",
    date: "2026-05-01",
    excerpt: "The first Romanian Pétanque Championship of 2026, held at Casa Vlasia. A landmark competition for the Romanian pétanque community.",
    tag: "Campionat",
    href: "https://www.facebook.com/PetanqueCorbeanca/posts/pfbid02DKTNUk5EGRWTycmpxfyDLwkSepdwz3CvBmcJMBvPf9TZsFvHvtew7oLJc841tRRVl",
    links: null,
  },
  {
    id: 1,
    num: "04",
    title: "Romanian Dracula Cup Pétanque Tournament 2026",
    date: "2026-04-19",
    excerpt: "The Dracula Cup was hosted in the heart of Bucharest, Romania, featuring formed doublettes and triplettes with a €2,000+ prize pool. Dates: April 18–19, 2026.",
    tag: "Competiție",
    href: "https://www.facebook.com/PetanqueCorbeanca/posts/pfbid02mHJBb2hXLdXNw8eQhPwbRurc4S3sssjhYXeyHd2smbJxw9eZgjUCs9D7mxMNqBoSl",
    links: null,
  },
  {
    id: 4,
    num: "05",
    title: "Pétanque — sportul care unește generațiile",
    date: "2024-07-20",
    excerpt: "De la tineri la vârstnici, pétanque este unul dintre puținele sporturi care aduc laolaltă toate categoriile de vârstă.",
    tag: "Comunitate",
    href: "https://tctrail.ca/stories/petanque-parc-la-fontaine/",
    links: null,
  },
];

export default function NewsPage() {
  return <NewsContent />;
}

function NewsContent() {
  const t = useTranslations("news");

  return (
    <>
      <section style={{ background: "#0a0a0a", color: "#fff", borderBottom: "2px solid #F06000" }}>
        <div className="max-w-7xl mx-auto px-6 py-14">
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

      <section style={{
          backgroundImage: "url('/petanque-horiz-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}>
        <div style={{ background: "rgba(255,255,255,0.88)", borderBottom: "2px solid #0a0a0a" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_400px]">

          {/* Articles */}
          <div>
          {articles.map((article, i) => {
            const inner = (
              <div
                className="px-6 py-7 grid md:grid-cols-4 gap-4 items-start group"
                style={{ borderBottom: i < articles.length - 1 ? "2px solid #f2f2f2" : "none" }}
              >
                <div>
                  <p className="font-black text-4xl select-none" style={{ color: "#bbb", WebkitTextStroke: "1.5px #999", letterSpacing: "-0.04em", lineHeight: 1 }}>
                    {article.num}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-black uppercase tracking-widest px-2 py-0.5" style={{ background: "#F06000", color: "#fff" }}>
                      {article.tag}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#888" }}>
                      {new Date(article.date).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                  </div>
                  <h2 className="font-black uppercase text-lg md:text-xl mb-2 transition-colors" style={{ letterSpacing: "-0.02em" }}>
                    {article.title}
                  </h2>
                  <p style={{ color: "#555", lineHeight: 1.6, fontSize: "0.875rem" }}>{article.excerpt}</p>

                  {/* Multiple links */}
                  {article.links && (
                    <div className="mt-4 flex flex-col gap-2">
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
    </>
  );
}
