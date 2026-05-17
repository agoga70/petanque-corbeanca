"use client";

import { useTranslations } from "next-intl";
import FacebookEmbed from "@/components/FacebookEmbed";
import { useRef } from "react";

export default function EventsPage() {
  return <EventsContent />;
}

function EventsContent() {
  const t = useTranslations("events");

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([null, null, null]);

  function playOnly(index: number) {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) {
        v.play();
      } else {
        v.pause();
      }
    });
  }

  const copyright = (
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
  );

  const videoStyle: React.CSSProperties = {
    width: "100%",
    height: "clamp(320px, 60vw, 600px)",
    objectFit: "cover",
    objectPosition: "center center",
    display: "block",
    cursor: "pointer",
  };

  return (
    <div className="flex flex-col flex-1">
      <section style={{ background: "#0a0a0a", color: "#fff", borderBottom: "2px solid #F06000" }}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "#F06000" }}>
            02 — Evenimente
          </p>
          <h1 className="font-black uppercase" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
            {t("title")}
          </h1>
        </div>
      </section>

      {/* Four vertical columns */}
      <section className="flex-1 flex flex-col" style={{ borderBottom: "2px solid #0a0a0a" }}>
        <div className="flex-1 max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-4" style={{ width: "100%" }}>

          {/* Col 1 — Facebook embed */}
          <div style={{ borderBottom: "2px solid #0a0a0a" }} className="md:border-b-0 md:border-r-2 md:border-r-[#0a0a0a]">
            <p className="text-xs font-black uppercase tracking-widest px-5 py-4" style={{ color: "#F06000", borderBottom: "2px solid #0a0a0a" }}>
              Facebook — Timeline & Evenimente
            </p>
            <div style={{ padding: "1rem" }}>
              <FacebookEmbed />
            </div>
          </div>

          {/* Col 2 — Landscape video (auto-plays) */}
          <div style={{ borderBottom: "2px solid #0a0a0a", overflow: "hidden", background: "#0a0a0a", position: "relative" }} className="md:border-b-0 md:border-r-2 md:border-r-[#0a0a0a]">
            <p className="text-xs font-black uppercase tracking-widest px-5 py-4" style={{ color: "#F06000", borderBottom: "2px solid #F06000" }}>
              Dracula Cup 2026
            </p>
            <video
              ref={(el) => { videoRefs.current[0] = el; }}
              src="/videos/draculacup-2026-horiz.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={videoStyle}
              className="md:h-[calc(100%-45px)]"
              onMouseEnter={() => playOnly(0)}
            />
            {copyright}
          </div>

          {/* Col 3 — Portrait video (draculacup vert) */}
          <div style={{ borderBottom: "2px solid #0a0a0a", overflow: "hidden", background: "#0a0a0a", position: "relative" }} className="md:border-b-0 md:border-r-2 md:border-r-[#0a0a0a]">
            <p className="text-xs font-black uppercase tracking-widest px-5 py-4" style={{ color: "#F06000", borderBottom: "2px solid #F06000" }}>
              Dracula Cup 2026
            </p>
            <video
              ref={(el) => { videoRefs.current[1] = el; }}
              src="/videos/draculacup-2026-vert.mp4"
              muted
              loop
              playsInline
              style={videoStyle}
              className="md:h-[calc(100%-45px)]"
              onMouseEnter={() => playOnly(1)}
            />
            {copyright}
          </div>

          {/* Col 4 — Portrait video (petanque2026) */}
          <div style={{ overflow: "hidden", background: "#0a0a0a", position: "relative" }}>
            <p className="text-xs font-black uppercase tracking-widest px-5 py-4" style={{ color: "#F06000", borderBottom: "2px solid #F06000" }}>
              Dracula Cup 2026
            </p>
            <video
              ref={(el) => { videoRefs.current[2] = el; }}
              src="/videos/petanque2026-01.mp4"
              muted
              loop
              playsInline
              style={videoStyle}
              className="md:h-[calc(100%-45px)]"
              onMouseEnter={() => playOnly(2)}
            />
            {copyright}
          </div>

        </div>
      </section>

      {/* Follow us — orange horizontal bar */}
      <section style={{ background: "#F06000", color: "#fff", borderBottom: "2px solid #0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-xs font-black uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
            Urmărește-ne
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://www.facebook.com/PetanqueCorbeanca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 group"
              style={{ background: "rgba(0,0,0,0.2)", border: "2px solid rgba(255,255,255,0.3)" }}
            >
              <div>
                <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.6)" }}>Facebook</p>
                <p className="font-black uppercase text-sm text-white" style={{ letterSpacing: "-0.02em" }}>Pétanque Corbeanca</p>
              </div>
              <span className="font-black text-xl text-white group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="https://www.instagram.com/petanque_corbeanca/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 group"
              style={{ background: "rgba(0,0,0,0.2)", border: "2px solid rgba(255,255,255,0.3)" }}
            >
              <div>
                <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.6)" }}>Instagram</p>
                <p className="font-black uppercase text-sm text-white" style={{ letterSpacing: "-0.02em" }}>@petanque_corbeanca</p>
              </div>
              <span className="font-black text-xl text-white group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="https://www.facebook.com/PetanqueCorbeanca/photos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 group"
              style={{ background: "rgba(0,0,0,0.2)", border: "2px solid rgba(255,255,255,0.3)" }}
            >
              <div>
                <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.6)" }}>Facebook Photos</p>
                <p className="font-black uppercase text-sm text-white" style={{ letterSpacing: "-0.02em" }}>Galerie foto</p>
              </div>
              <span className="font-black text-xl text-white group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
          <p className="text-xs mt-5" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: "40rem" }}>
            {t("facebook_note")}
          </p>
        </div>
      </section>
    </div>
  );
}
