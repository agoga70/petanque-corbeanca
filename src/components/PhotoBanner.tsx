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
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 1000, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "1.5rem", cursor: "zoom-out" }}
    >
      {/* ✕ top-right */}
      <button
        onClick={onClose}
        style={{ position: "absolute", top: "1rem", right: "1.25rem", background: "none", border: "none", color: "#fff", fontSize: "1.5rem", fontWeight: 900, cursor: "pointer", lineHeight: 1 }}
      >
        ✕
      </button>

      {/* Image */}
      <img
        src={src}
        alt=""
        onClick={onClose}
        style={{ maxWidth: "100%", maxHeight: "85vh", objectFit: "contain", display: "block", cursor: "zoom-out" }}
      />

      {/* Share button — below image, right-aligned */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: "100%", maxWidth: "100%", display: "flex", justifyContent: "flex-end", marginTop: "0.6rem" }}
      >
        <ShareButton url={shareUrl} imageSrc={src} color="#F06000" />
      </div>
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
  const [idx, setIdx] = useState(0);
  const [initialized, setInitialized] = useState(false); // false = invisible until first random idx is set
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const closeLightbox = useCallback(() => setLightboxSrc(null), []);
  const mountedAtRef = useRef(0);
  const idxRef = useRef(0);
  idxRef.current = idx;

  // Pick random start index then fade in — runs client-side only after hydration
  useEffect(() => {
    mountedAtRef.current = Date.now();
    setIdx(Math.floor(Math.random() * Math.max(images.length, 1)));
    setInitialized(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Plain idx increment — no opacity toggle, no setTimeout, no race conditions
  const advanceRef = useRef<() => void>(() => {});
  advanceRef.current = () => {
    if (images.length <= 1) return;
    setIdx((i) => (i + 1) % images.length);
  };

  // Interval timer
  const intervalHandleRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const restartIntervalRef = useRef<() => void>(() => {});
  restartIntervalRef.current = () => {
    if (intervalHandleRef.current !== null) clearInterval(intervalHandleRef.current);
    intervalHandleRef.current = setInterval(() => advanceRef.current(), interval);
  };

  useEffect(() => {
    if (images.length <= 1) return;
    restartIntervalRef.current();
    return () => {
      if (intervalHandleRef.current !== null) clearInterval(intervalHandleRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Tab return — advance and restart interval so held-back ticks are discarded
  useEffect(() => {
    if (images.length <= 1) return;
    function onVisibility() {
      if (document.visibilityState === "visible" && Date.now() - mountedAtRef.current > 1000) {
        setIdx((i) => (i + 1) % images.length);
        restartIntervalRef.current();
      }
    }
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        onClick={() => setLightboxSrc(images[idx])}
        style={{ position: "relative", width: "100%", height, overflow: "hidden", background: "#0a0a0a", cursor: "zoom-in", ...style }}
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
            opacity: initialized ? 1 : 0,
            transition: "opacity 600ms ease",
          }}
        />
      </div>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={closeLightbox} />}
    </>
  );
}
