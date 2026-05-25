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
  // Each banner instance gets a stable storage key based on its position in the images list
  const storageKey = `cspc-banner-${images[0] ?? "x"}`;

  const [idx, setIdx] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const closeLightbox = useCallback(() => setLightboxSrc(null), []);
  const mountedAtRef = useRef(0);

  // Persist current idx so remounts/refreshes/tab-returns resume from the right image
  const saveIdx = useCallback((i: number) => {
    try { localStorage.setItem(storageKey, String(i)); } catch { /* private browsing */ }
  }, [storageKey]);

  // On mount: resume from stored idx, or pick a random start
  useEffect(() => {
    mountedAtRef.current = Date.now();
    let start: number;
    try {
      const stored = localStorage.getItem(storageKey);
      start = stored !== null
        ? parseInt(stored, 10) % Math.max(images.length, 1)
        : Math.floor(Math.random() * Math.max(images.length, 1));
    } catch {
      start = Math.floor(Math.random() * Math.max(images.length, 1));
    }
    setIdx(start);
    requestAnimationFrame(() => setReady(true));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Advance to next image and persist
  const advanceRef = useRef<() => void>(() => {});
  advanceRef.current = () => {
    if (images.length <= 1) return;
    setIdx((i) => {
      const next = ((i ?? 0) + 1) % images.length;
      saveIdx(next);
      return next;
    });
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
        setIdx((i) => {
          const next = ((i ?? 0) + 1) % images.length;
          saveIdx(next);
          return next;
        });
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
        onClick={() => idx !== null && setLightboxSrc(images[idx])}
        style={{ position: "relative", width: "100%", height, overflow: "hidden", background: "#0a0a0a", cursor: "zoom-in", ...style }}
      >
        {idx !== null && <img
          src={images[idx]}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition,
            display: "block",
            opacity: ready ? 1 : 0,
            transition: "opacity 200ms ease",
          }}
        />}
      </div>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={closeLightbox} />}
    </>
  );
}
