"use client";

import { useState, useEffect, useLayoutEffect, useCallback, useRef } from "react";

// useLayoutEffect fires before the browser paints — safe in "use client" components.
// Falls back to useEffect on the server so Next.js SSR doesn't warn.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
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
  const [mounted, setMounted] = useState(false);
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  // Set random start index before first paint — img is not in the DOM at all until this runs
  useIsomorphicLayoutEffect(() => {
    setIdx(Math.floor(Math.random() * Math.max(images.length, 1)));
    setMounted(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        style={{ position: "relative", width: "100%", height, overflow: "hidden", cursor: mounted ? "zoom-in" : "default", ...style }}
      >
        {mounted && (
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
        )}
      </div>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={closeLightbox} />}
    </>
  );
}
