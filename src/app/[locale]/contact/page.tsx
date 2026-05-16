import { useTranslations } from "next-intl";

export default function ContactPage() {
  return <ContactContent />;
}

function ContactContent() {
  const t = useTranslations("contact");

  const contacts = [
    { label: t("email_label"), value: "petanquecorbeanca@gmail.com", href: "mailto:petanquecorbeanca@gmail.com" },
    { label: t("phone_label"), value: "+40 730 444 666", href: "https://wa.me/40730444666" },
    { label: "Instagram", value: "@petanque_corbeanca", href: "https://www.instagram.com/petanque_corbeanca/" },
    { label: "Facebook", value: "Pétanque Corbeanca", href: "https://www.facebook.com/PetanqueCorbeanca" },
    { label: t("location_label"), value: "Str Hipodromului nr 29, Ostratu, Corbeanca, România", href: "https://maps.app.goo.gl/zFxicKfNnTmSWbw67" },
  ];

  return (
    <>
      {/* Header */}
      <section style={{ background: "#0a0a0a", color: "#fff", borderBottom: "2px solid #F06000" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#F06000" }}>
            05 — Club Sportiv Pétanque Corbeanca
          </p>
          <h1
            className="font-black uppercase"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}
          >
            {t("title")}
          </h1>
        </div>
      </section>

      {/* Contact grid */}
      <section>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_380px] items-start" style={{ borderBottom: "2px solid #0a0a0a" }}>

          {/* Contact rows */}
          <div className="md:border-r-2 md:border-r-[#0a0a0a]">
            {contacts.map((c, i) => (
              <div
                key={c.label}
                className="px-6 py-8 grid md:grid-cols-3 items-center"
                style={{ borderBottom: i < contacts.length - 1 ? "2px solid #f2f2f2" : "none" }}
              >
                <p className="text-xs font-black uppercase tracking-widest mb-2 md:mb-0" style={{ color: "#888" }}>
                  {c.label}
                </p>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="font-black text-base md:text-lg md:col-span-2 transition-colors hover:text-red-600"
                    style={{ letterSpacing: "-0.02em", color: "#0a0a0a" }}
                  >
                    {c.value} →
                  </a>
                ) : (
                  <p className="font-black text-base md:text-lg md:col-span-2" style={{ letterSpacing: "-0.02em" }}>
                    {c.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Image sidebar — hidden on mobile */}
          <div
            className="hidden md:block"
            style={{
              backgroundImage: "url('/petanque-vert.jpg')",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100%",
            }}
          />
        </div>
      </section>

      {/* Note */}
      <section style={{ background: "#F06000", color: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="font-black uppercase text-2xl md:text-3xl mb-2" style={{ letterSpacing: "-0.03em" }}>
            {t("message_title")}
          </p>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
            {t("message_text")}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/40730444666"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 font-black text-xs uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{ background: "#fff", color: "#F06000" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a
              href="https://m.me/PetanqueCorbeanca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 font-black text-xs uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{ background: "#fff", color: "#F06000" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.26L19.752 8l-6.561 6.963z"/></svg>
              Messenger
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
