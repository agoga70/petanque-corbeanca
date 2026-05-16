import { useTranslations } from "next-intl";

export default function EventsPage() {
  return <EventsContent />;
}

function EventsContent() {
  const t = useTranslations("events");

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("title")}</h1>
        <p className="text-xl text-gray-500">{t("subtitle")}</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center text-blue-800 text-sm mb-10">
        {t("facebook_note")}{" "}
        <a
          href="https://www.facebook.com/profile.php?id=100077113299169"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold hover:text-blue-900"
        >
          Facebook
        </a>
      </div>

      <div className="flex justify-center">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100077113299169&tabs=timeline%2Cevents&width=600&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
          width="600"
          height="700"
          style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
}
