"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import ShareButton from "@/components/ShareButton";

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const shareUrl = typeof window !== "undefined" ? window.location.href : src;

  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", cursor: "zoom-out" }}
    >
      {/* Top bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: "absolute", top: 0, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5rem 1rem", background: "rgba(0,0,0,0.5)" }}
      >
        <ShareButton url={shareUrl} />
        <button
          onClick={onClose}
          style={{ background: "none", border: "none", color: "#fff", fontSize: "1.5rem", fontWeight: 900, cursor: "pointer", lineHeight: 1 }}
        >
          ✕
        </button>
      </div>
      <img
        src={src}
        alt=""
        onClick={onClose}
        style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain", display: "block", cursor: "zoom-out", marginTop: "2.5rem" }}
      />
    </div>
  );
}

type Props = {
  images: string[];
  height: string | number;
  objectPosition?: string;
  alt?: string;
  interval?: number;       // fallback timer ms (default 5 min)
  initialIdx?: number;     // starting index so two banners on the same page show different photos
  style?: React.CSSProperties;
};

export default function PhotoBanner({
  images,
  height,
  objectPosition = "center top",
  alt = "",
  interval = 300_000,
  initialIdx = 0,
  style,
}: Props) {
  const [idx, setIdx] = useState(initialIdx % Math.max(images.length, 1));
  const [visible, setVisible] = useState(true); // false = fading out
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  // Fade out → swap → fade in
  const advanceRef = useRef<() => void>(() => {});
  advanceRef.current = () => {
    if (images.length <= 1) return;
    setVisible(false);
    setTimeout(() => {
      setIdx((i) => (i + 1) % images.length);
      setVisible(true);
    }, 600);
  };

  // Fallback timer — set up once
  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => advanceRef.current(), interval);
    return () => clearInterval(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Tab return — advance immediately on visibility restored
  useEffect(() => {
    if (images.length <= 1) return;
    function onVisibility() {
      if (document.visibilityState === "visible") advanceRef.current();
    }
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        onClick={() => setLightboxSrc(images[idx])}
        style={{ position: "relative", width: "100%", height, overflow: "hidden", cursor: "zoom-in", ...style }}
      >
        <img
          src={images[idx]}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition,
            display: "block",
            opacity: visible ? 1 : 0,
            transition: "opacity 600ms ease",
          }}
        />
      </div>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={closeLightbox} />}
    </>
  );
}
