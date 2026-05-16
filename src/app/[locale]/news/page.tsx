import { useTranslations } from "next-intl";

const articles = [
  {
    id: 1,
    title: "Campionatul Național de Pétanque 2024",
    date: "2024-09-15",
    excerpt: "Echipele românești au participat cu succes la Campionatul Național, demonstrând un nivel ridicat de competitivitate.",
    emoji: "🏆",
  },
  {
    id: 2,
    title: "Regulile de bază ale pétanque-ului",
    date: "2024-08-01",
    excerpt: "Un ghid complet pentru începători: cum se joacă pétanque, ce echipament este necesar și care sunt regulile principale.",
    emoji: "📖",
  },
  {
    id: 3,
    title: "Pétanque — sportul care unește generațiile",
    date: "2024-07-20",
    excerpt: "De la tineri la vârstnici, pétanque este unul dintre puținele sporturi care aduc laolaltă toate categoriile de vârstă.",
    emoji: "👨‍👩‍👧‍👦",
  },
];

export default function NewsPage() {
  return <NewsContent />;
}

function NewsContent() {
  const t = useTranslations("news");

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("title")}</h1>
        <p className="text-xl text-gray-500">{t("subtitle")}</p>
      </div>

      <div className="grid gap-6">
        {articles.map((article) => (
          <article key={article.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
            <div className="flex gap-4 items-start">
              <div className="text-4xl">{article.emoji}</div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 mb-1">
                  {t("published")} {new Date(article.date).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}
                </p>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h2>
                <p className="text-gray-600">{article.excerpt}</p>
                <button className="mt-3 text-green-700 font-semibold text-sm hover:underline">
                  {t("read_more")} →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="text-center text-gray-400 text-sm mt-12">
        Mai multe articole în curând.
      </p>
    </div>
  );
}
