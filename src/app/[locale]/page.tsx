import { useTranslations } from "next-intl";
import Link from "next/link";
import { getLocale } from "next-intl/server";

export default async function HomePage() {
  const locale = await getLocale();
  return <HomeContent locale={locale} />;
}

function HomeContent({ locale }: { locale: string }) {
  const t = useTranslations("home");
  const tn = useTranslations("nav");

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🎯</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{t("hero_title")}</h1>
          <p className="text-xl md:text-2xl text-green-100 mb-10 max-w-2xl mx-auto">{t("hero_subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/about`}
              className="bg-white text-green-800 font-semibold px-8 py-3 rounded-full hover:bg-green-50 transition-colors"
            >
              {t("hero_cta")}
            </Link>
            <Link
              href={`/${locale}/events`}
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-green-800 transition-colors"
            >
              {t("hero_cta2")}
            </Link>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("about_title")}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{t("about_text")}</p>
            <Link href={`/${locale}/about`} className="text-green-700 font-semibold hover:underline">
              {tn("about")} →
            </Link>
          </div>
          <div className="bg-green-50 rounded-2xl p-8 text-center">
            <div className="text-7xl mb-4">🏆</div>
            <p className="text-green-800 font-medium text-lg">Corbeanca, Ilfov</p>
            <p className="text-gray-500 text-sm mt-2">România</p>
          </div>
        </div>
      </section>

      {/* Events teaser */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("events_title")}</h2>
          <p className="text-gray-500 mb-8">Urmărește pagina noastră de Facebook pentru ultimele noutăți.</p>
          <div className="flex justify-center">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100077113299169&tabs=timeline&width=500&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              width="500"
              height="400"
              style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
          <Link
            href={`/${locale}/events`}
            className="inline-block mt-8 bg-green-700 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-800 transition-colors"
          >
            {t("events_cta")}
          </Link>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 px-4 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">{t("join_title")}</h2>
        <p className="text-green-100 text-lg mb-8">{t("join_text")}</p>
        <Link
          href={`/${locale}/contact`}
          className="bg-white text-green-800 font-semibold px-8 py-3 rounded-full hover:bg-green-50 transition-colors"
        >
          {t("join_cta")}
        </Link>
      </section>
    </>
  );
}
