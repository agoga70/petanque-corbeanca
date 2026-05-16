import { useTranslations } from "next-intl";
import FacebookEmbed from "@/components/FacebookEmbed";

export default function EventsPage() {
  return <EventsContent />;
}

function EventsContent() {
  const t = useTranslations("events");

  return (
    <>
      <section style={{ background: "#0a0a0a", color: "#fff", borderBottom: "2px solid #F06000" }}>
        <div className="max-w-7xl mx-auto px-6 py-14">
          <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#F06000" }}>
            02 — Evenimente
          </p>
          <h1 className="font-black uppercase" style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
            {t("title")}
          </h1>
        </div>
      </section>

      <section style={{ borderBottom: "2px solid #0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 items-start">

          {/* Facebook embed */}
          <div className="md:col-span-3">
            <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#F06000" }}>
              Facebook — Timeline & Evenimente
            </p>
            <FacebookEmbed />
          </div>

          {/* Links + Instagram */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#F06000" }}>
                Urmărește-ne
              </p>
              <a
                href="https://www.facebook.com/PetanqueCorbeanca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 group mb-4"
                style={{ background: "#f2f2f2", border: "2px solid #0a0a0a" }}
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#888" }}>Facebook</p>
                  <p className="font-black uppercase text-lg" style={{ letterSpacing: "-0.02em" }}>Pétanque Corbeanca</p>
                </div>
                <span className="font-black text-2xl group-hover:translate-x-1 transition-transform" style={{ color: "#F06000" }}>→</span>
              </a>
              <a
                href="https://www.instagram.com/petanque_corbeanca/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 group"
                style={{ background: "#f2f2f2", border: "2px solid #0a0a0a" }}
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#888" }}>Instagram</p>
                  <p className="font-black uppercase text-lg" style={{ letterSpacing: "-0.02em" }}>@petanque_corbeanca</p>
                </div>
                <span className="font-black text-2xl group-hover:translate-x-1 transition-transform" style={{ color: "#F06000" }}>→</span>
              </a>
              <a
                href="https://www.facebook.com/PetanqueCorbeanca/photos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 group"
                style={{ background: "#f2f2f2", border: "2px solid #0a0a0a", marginTop: "1rem" }}
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#888" }}>Facebook Photos</p>
                  <p className="font-black uppercase text-lg" style={{ letterSpacing: "-0.02em" }}>Galerie foto</p>
                </div>
                <span className="font-black text-2xl group-hover:translate-x-1 transition-transform" style={{ color: "#F06000" }}>→</span>
              </a>
            </div>

            <div style={{ borderTop: "2px solid #f2f2f2", paddingTop: "1.5rem" }}>
              <p className="text-sm" style={{ color: "#555", lineHeight: 1.7 }}>
                {t("facebook_note")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
