import { useTranslations } from "next-intl";
import PhotoBanner from "@/components/PhotoBanner";

export default function ContactPage() {
  return <ContactContent />;
}

const IconEmail = () => (
  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
);
const IconWhatsApp = () => (
  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);
const IconInstagram = () => (
  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
);
const IconFacebook = () => (
  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
);
const IconMapPin = () => (
  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
);

function ContactContent() {
  const t = useTranslations("contact");

  const contacts = [
    { label: t("email_label"), value: "petanque.corbeanca@gmail.com", href: "mailto:petanque.corbeanca@gmail.com", icon: <IconEmail /> },
    { label: t("phone_label"), value: "+40 730 444 666", href: "https://wa.me/40730444666", icon: <IconWhatsApp /> },
    { label: "Instagram", value: "@petanque_corbeanca", href: "https://www.instagram.com/petanque_corbeanca/", icon: <IconInstagram /> },
    { label: "Facebook", value: "Pétanque Corbeanca", href: "https://www.facebook.com/PetanqueCorbeanca", icon: <IconFacebook /> },
    { label: t("location_label"), value: "Str Hipodromului nr 29, Ostratu, Corbeanca, România", href: "https://maps.app.goo.gl/zFxicKfNnTmSWbw67", icon: <IconMapPin /> },
  ];

  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <section style={{ background: "#0a0a0a", color: "#fff", borderBottom: "2px solid #F06000" }}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "#F06000" }}>
            05 — Club Sportiv Pétanque Corbeanca
          </p>
          <h1
            className="font-black uppercase"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}
          >
            {t("title")}
          </h1>
        </div>
      </section>

      {/* Contact grid */}
      <section className="flex-1 flex flex-col" style={{
          backgroundImage: "url('/always-measure.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}>
        <div className="flex-1 flex flex-col" style={{ background: "rgba(255,255,255,0.88)", borderBottom: "2px solid #0a0a0a" }}>
        <div className="flex-1 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-[1fr_2fr] lg:grid-cols-[400px_1fr_400px]">

          {/* Left image — visible from sm (landscape phone) upward */}
          <div className="hidden sm:block" style={{ overflow: "hidden", borderRight: "2px solid #0a0a0a" }}>
            <PhotoBanner images={["/petanque-corbeanca-vert-000.jpg"]} height="100%" objectPosition="center 60%" alt="Club Sportiv Pétanque Corbeanca" />
          </div>

          {/* Contact rows */}
          <div>
            {contacts.map((c, i) => (
              <div key={c.label}>
                <div
                  className="px-6 py-5 grid grid-cols-[2rem_1fr] md:grid-cols-[2rem_auto_1fr] gap-x-3 items-center"
                  style={{ borderBottom: "2px solid #f2f2f2" }}
                >
                  <span style={{ color: "#aaa" }}>{c.icon}</span>
                  <p className="text-xs font-black uppercase tracking-widest hidden md:block" style={{ color: "#888" }}>
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="font-black text-base md:text-lg transition-colors hover:text-red-600 col-start-2 md:col-start-3"
                      style={{ letterSpacing: "-0.02em", color: "#0a0a0a" }}
                    >
                      {c.value} →
                    </a>
                  ) : (
                    <p className="font-black text-base md:text-lg col-start-2 md:col-start-3" style={{ letterSpacing: "-0.02em" }}>
                      {c.value}
                    </p>
                  )}
                </div>
                {/* Google Maps embed below location row */}
                {i === contacts.length - 1 && (
                  <div style={{ borderBottom: "2px solid #f2f2f2" }}>
                    <iframe
                      src="https://maps.google.com/maps?q=Str+Hipodromului+nr+29,+Corbeanca,+Ilfov,+Romania&output=embed&z=18"
                      width="100%"
                      height="220"
                      style={{ display: "block", border: "none" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right image — hidden below lg */}
          <div className="hidden lg:block" style={{ overflow: "hidden", borderLeft: "2px solid #0a0a0a" }}>
            <PhotoBanner images={["/petanque-vert-00.jpg"]} height="100%" objectPosition="center center" alt="Pétanque Corbeanca" />
          </div>

        </div>
        </div>
      </section>

      {/* Legal info */}
      <section style={{ background: "#0a0a0a", color: "#fff", borderTop: "2px solid #F06000" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
          <p className="text-xs font-black uppercase tracking-widest" style={{ color: "#F06000" }}>
            Club Sportiv Pétanque Corbeanca
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            HQ / Sediu: Str. Ficusului nr. 10, Corbeanca, Ilfov 077065
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            C.I.F.: 43524017
          </p>
        </div>
      </section>

      {/* Note */}
      <section style={{ background: "#F06000", color: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="font-black uppercase text-2xl md:text-3xl mb-2" style={{ letterSpacing: "-0.03em" }}>
            {t("message_title")}
          </p>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
            {t("message_text")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" style={{ maxWidth: "640px" }}>
            <a
              href="https://wa.me/40730444666"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 font-black text-xs uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{ background: "#fff", color: "#F06000" }}
            >
              <IconWhatsApp />
              WhatsApp
            </a>
            <a
              href="https://m.me/PetanqueCorbeanca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 font-black text-xs uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{ background: "#fff", color: "#F06000" }}
            >
              <IconFacebook />
              Messenger
            </a>
            <a
              href="mailto:petanque.corbeanca@gmail.com"
              className="flex items-center gap-3 px-6 py-3 font-black text-xs uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{ background: "#fff", color: "#F06000" }}
            >
              <IconEmail />
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
