import { useTranslations } from "next-intl";

export default function ContactPage() {
  return <ContactContent />;
}

function ContactContent() {
  const t = useTranslations("contact");

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("title")}</h1>
        <p className="text-xl text-gray-500">{t("subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Email */}
        <a
          href="mailto:petanquecorbeanca@gmail.com"
          className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow group"
        >
          <div className="text-4xl">✉️</div>
          <div>
            <p className="text-xs text-gray-400 uppercase font-semibold mb-1">{t("email_label")}</p>
            <p className="text-green-700 font-medium group-hover:underline">petanquecorbeanca@gmail.com</p>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/40730444666"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow group"
        >
          <div className="text-4xl">💬</div>
          <div>
            <p className="text-xs text-gray-400 uppercase font-semibold mb-1">{t("phone_label")}</p>
            <p className="text-green-700 font-medium group-hover:underline">+40 730 444 666</p>
          </div>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/petanque_corbeanca/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow group"
        >
          <div className="text-4xl">📸</div>
          <div>
            <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Instagram</p>
            <p className="text-green-700 font-medium group-hover:underline">@petanque_corbeanca</p>
          </div>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=100077113299169"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow group"
        >
          <div className="text-4xl">👥</div>
          <div>
            <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Facebook</p>
            <p className="text-green-700 font-medium group-hover:underline">Pétanque Corbeanca</p>
          </div>
        </a>

        {/* Location */}
        <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-6 md:col-span-2">
          <div className="text-4xl">📍</div>
          <div>
            <p className="text-xs text-gray-400 uppercase font-semibold mb-1">{t("location_label")}</p>
            <p className="text-gray-700 font-medium">{t("location_text")}</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
        <p className="text-green-800 font-medium">{t("message_title")}</p>
        <p className="text-green-700 text-sm mt-1">{t("message_text")}</p>
      </div>
    </div>
  );
}
