"use client";

import { useState, useEffect, useCallback } from "react";

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
      <img
        src={src}
        alt=""
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain", display: "block", cursor: "default" }}
      />
    </div>
  );
}

type Props = {
  images: string[];          // 1 image = static; 2+ = cycling
  height: string | number;
  objectPosition?: string;
  alt?: string;
  interval?: number;         // ms between transitions, default 6000
  style?: React.CSSProperties;
};

export default function PhotoBanner({
  images,
  height,
  objectPosition = "center top",
  alt = "",
  interval = 6000,
  style,
}: Props) {
  const [cur, setCur] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => {
      setCur((c) => {
        const next = (c + 1) % images.length;
        setPrev(c);
        setTransitioning(true);
        setTimeout(() => {
          setPrev(null);
          setTransitioning(false);
        }, 1000);
        return next;
      });
    }, interval);
    return () => clearInterval(t);
  }, [images.length, interval]);

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
        {/* Current image — always underneath */}
        <img src={images[cur]} alt={alt} style={imgStyle} />

        {/* Previous image — fades out on top */}
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
