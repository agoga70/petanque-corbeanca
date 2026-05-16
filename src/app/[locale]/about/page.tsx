import { useTranslations } from "next-intl";

export default function AboutPage() {
  return <AboutContent />;
}

function AboutContent() {
  const t = useTranslations("about");

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("title")}</h1>
        <p className="text-xl text-gray-500">{t("subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("history_title")}</h2>
          <p className="text-gray-600 leading-relaxed">{t("history_text")}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("petanque_title")}</h2>
          <p className="text-gray-600 leading-relaxed">{t("petanque_text")}</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t("values_title")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {(["1", "2", "3"] as const).map((n) => (
            <div key={n} className="bg-green-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">{n === "1" ? "🤝" : n === "2" ? "🌍" : "❤️"}</div>
              <h3 className="font-bold text-green-800 text-lg mb-2">{t(`value${n}_title`)}</h3>
              <p className="text-gray-600 text-sm">{t(`value${n}_text`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
