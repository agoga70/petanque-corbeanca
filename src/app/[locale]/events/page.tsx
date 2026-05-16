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
        <div className="max-w-7xl mx-auto" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 260px", minHeight: "650px" }}>

          {/* Portrait video */}
          <div style={{ borderRight: "2px solid #0a0a0a", overflow: "hidden", background: "#0a0a0a" }}>
            <p className="text-xs font-black uppercase tracking-widest px-5 py-4" style={{ color: "#F06000", borderBottom: "2px solid #F06000" }}>
              Video
            </p>
            <video
              src="/videos/petanque2026-01.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "calc(100% - 45px)", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Facebook embed */}
          <div style={{ borderRight: "2px solid #0a0a0a" }}>
            <p className="text-xs font-black uppercase tracking-widest px-5 py-4" style={{ color: "#F06000", borderBottom: "2px solid #0a0a0a" }}>
              Facebook — Timeline & Evenimente
            </p>
            <div style={{ padding: "1rem" }}>
              <FacebookEmbed />
            </div>
          </div>

          {/* Follow us sidebar */}
          <div className="flex flex-col gap-4 p-5">
            <p className="text-xs font-black uppercase tracking-widest" style={{ color: "#F06000" }}>
              Urmărește-ne
            </p>
            <a
              href="https://www.facebook.com/PetanqueCorbeanca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 group"
              style={{ background: "#f2f2f2", border: "2px solid #0a0a0a" }}
            >
              <div>
                <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#888" }}>Facebook</p>
                <p className="font-black uppercase text-sm" style={{ letterSpacing: "-0.02em" }}>Pétanque Corbeanca</p>
              </div>
              <span className="font-black text-xl group-hover:translate-x-1 transition-transform" style={{ color: "#F06000" }}>→</span>
            </a>
            <a
              href="https://www.instagram.com/petanque_corbeanca/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 group"
              style={{ background: "#f2f2f2", border: "2px solid #0a0a0a" }}
            >
              <div>
                <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#888" }}>Instagram</p>
                <p className="font-black uppercase text-sm" style={{ letterSpacing: "-0.02em" }}>@petanque_corbeanca</p>
              </div>
              <span className="font-black text-xl group-hover:translate-x-1 transition-transform" style={{ color: "#F06000" }}>→</span>
            </a>
            <a
              href="https://www.facebook.com/PetanqueCorbeanca/photos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 group"
              style={{ background: "#f2f2f2", border: "2px solid #0a0a0a" }}
            >
              <div>
                <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#888" }}>Facebook Photos</p>
                <p className="font-black uppercase text-sm" style={{ letterSpacing: "-0.02em" }}>Galerie foto</p>
              </div>
              <span className="font-black text-xl group-hover:translate-x-1 transition-transform" style={{ color: "#F06000" }}>→</span>
            </a>
            <div style={{ borderTop: "2px solid #f2f2f2", paddingTop: "1rem", marginTop: "auto" }}>
              <p className="text-xs" style={{ color: "#555", lineHeight: 1.7 }}>
                {t("facebook_note")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
