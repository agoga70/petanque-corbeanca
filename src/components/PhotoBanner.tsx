"use client";

import { useState, useEffect, useCallback, useRef } from "react";

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", cursor: "zoom-out" }}
    >
      <button
        onClick={onClose}
        style={{ position: "absolute", top: "1rem", right: "1.25rem", background: "none", border: "none", color: "#fff", fontSize: "1.5rem", fontWeight: 900, cursor: "pointer", lineHeight: 1, zIndex: 1 }}
      >
        ✕
      </button>
      {/* Clicking the image itself also closes */}
      <img
        src={src}
        alt=""
        onClick={onClose}
        style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain", display: "block", cursor: "zoom-out" }}
      />
    </div>
  );
}

type Props = {
  images: string[];        // 1 = lightbox only; 2+ = cycling + lightbox
  height: string | number;
  objectPosition?: string;
  alt?: string;
  interval?: number;       // fallback timer in ms (default 5 min)
  style?: React.CSSProperties;
};

export default function PhotoBanner({
  images,
  height,
  objectPosition = "center top",
  alt = "",
  interval = 300_000,    // 5 minutes
  style,
}: Props) {
  const [cur, setCur] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  // Stable ref so timer/visibility callbacks never go stale
  const curRef = useRef(cur);
  curRef.current = cur;

  const advance = useCallback(() => {
    if (images.length <= 1) return;
    const next = (curRef.current + 1) % images.length;
    setPrev(curRef.current);
    setCur(next);
    setTransitioning(true);
    setTimeout(() => {
      setPrev(null);
      setTransitioning(false);
    }, 1000);
  }, [images.length]);

  // Stable ref to advance so effects set up once don't go stale
  const advanceRef = useRef(advance);
  useEffect(() => { advanceRef.current = advance; }, [advance]);

  // Fallback timer — fires every `interval` ms, set up once
  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => advanceRef.current(), interval);
    return () => clearInterval(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally empty — interval is stable, advanceRef handles freshness

  // Tab visibility — advance immediately when user returns to this tab
  useEffect(() => {
    if (images.length <= 1) return;
    function onVisibility() {
      if (document.visibilityState === "visible") advanceRef.current();
    }
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally empty — advanceRef handles freshness

  const imgStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition,
    display: "block",
  };

  return (
    <>
      <div
        onClick={() => setLightboxSrc(images[cur])}
        style={{ position: "relative", width: "100%", height, overflow: "hidden", cursor: "zoom-in", ...style }}
      >
        <img src={images[cur]} alt={alt} style={imgStyle} />
        {prev !== null && (
          <img
            src={images[prev]}
            alt=""
            style={{
              ...imgStyle,
              opacity: transitioning ? 0 : 1,
              transition: transitioning ? "opacity 1000ms ease" : "none",
            }}
          />
        )}
      </div>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={closeLightbox} />}
    </>
  );
}
