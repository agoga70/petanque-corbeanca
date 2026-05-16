"use client";

import { useEffect, useRef, useState } from "react";

const VIDEOS = [
  "/videos/petanque-17658629.mp4",
  "/videos/10071091.mp4",
  "/videos/10071086.mp4",
  "/videos/10071088.mp4",
  "/videos/10071090.mp4",
  "/videos/10071085.mp4",
];

export default function VideoStrip() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.load();
    el.play().catch(() => {});
  }, [current]);

  function handleEnded() {
    setCurrent((c) => (c + 1) % VIDEOS.length);
  }

  return (
    <section style={{ background: "#0a0a0a", borderBottom: "2px solid #F06000", position: "relative", overflow: "hidden" }}>
      <video
        ref={videoRef}
        key={current}
        src={VIDEOS[current]}
        muted
        autoPlay
        playsInline
        onEnded={handleEnded}
        style={{ width: "100%", height: "520px", objectFit: "cover", display: "block", opacity: 0.85 }}
      />

      {/* Dot indicators */}
      <div style={{ position: "absolute", bottom: "1.25rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "0.5rem" }}>
        {VIDEOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Video ${i + 1}`}
            style={{
              width: i === current ? "2rem" : "0.5rem",
              height: "0.5rem",
              borderRadius: "9999px",
              background: i === current ? "#F06000" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
