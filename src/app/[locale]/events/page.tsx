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

      {/* Three vertical columns */}
      <section style={{ borderBottom: "2px solid #0a0a0a" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-3" style={{ minHeight: "650px" }}>

          {/* Left — portrait video */}
          <div style={{ borderBottom: "2px solid #0a0a0a", overflow: "hidden", background: "#0a0a0a", position: "relative" }} className="md:border-b-0 md:border-r-2 md:border-r-[#0a0a0a]">
            <p className="text-xs font-black uppercase tracking-widest px-5 py-4" style={{ color: "#F06000", borderBottom: "2px solid #F06000" }}>
              Video
            </p>
            <video
              src="/videos/petanque2026-01.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "clamp(320px, 60vw, 600px)", objectFit: "cover", display: "block" }}
              className="md:h-[calc(100%-45px)]"
            />
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "1rem",
              background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
            }}>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                © Pétanque Dracula Cup 2026 — All rights reserved
              </p>
            </div>
          </div>

          {/* Middle — Facebook embed */}
          <div style={{ borderBottom: "2px solid #0a0a0a" }} className="md:border-b-0 md:border-r-2 md:border-r-[#0a0a0a]">
            <p className="text-xs font-black uppercase tracking-widest px-5 py-4" style={{ color: "#F06000", borderBottom: "2px solid #0a0a0a" }}>
              Facebook — Timeline & Evenimente
            </p>
            <div style={{ padding: "1rem" }}>
              <FacebookEmbed />
            </div>
          </div>

          {/* Right — Dracula Cup video */}
          <div style={{ overflow: "hidden", background: "#0a0a0a", position: "relative" }}>
            <p className="text-xs font-black uppercase tracking-widest px-5 py-4" style={{ color: "#F06000", borderBottom: "2px solid #F06000" }}>
              Dracula Cup 2026
            </p>
            <video
              src="/videos/draculacup-2026-vert.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "clamp(320px, 60vw, 600px)", objectFit: "cover", display: "block" }}
              className="md:h-[calc(100%-45px)]"
            />
          </div>

        </div>
      </section>

      {/* Follow us — horizontal tiles */}
      <section style={{ borderBottom: "2px solid #0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-xs font-black uppercase tracking-widest mb-5" style={{ color: "#F06000" }}>
            Urmărește-ne
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          </div>
          <p className="text-xs mt-5" style={{ color: "#555", lineHeight: 1.7, maxWidth: "40rem" }}>
            {t("facebook_note")}
          </p>
        </div>
      </section>
    </>
  );
}
