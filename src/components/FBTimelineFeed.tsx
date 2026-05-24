"use client";

import { useEffect, useState, useCallback } from "react";
import type { FBPost } from "@/app/api/fb-posts/route";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function stripHashtags(text: string) {
  return text.replace(/#\S+/g, "").replace(/\s{2,}/g, " ").trim();
}

function firstSentence(text: string): string {
  let i = 0;
  while (i < text.length) {
    const cp = text.codePointAt(i)!;
    if (i > 3 && (text[i] === "." || text[i] === "!" || text[i] === "?" || text[i] === "," || text[i] === ";")) {
      return text.slice(0, i).trim();
    }
    if (text[i] === "\n") {
      const candidate = text.slice(0, i).trim();
      if (candidate.length > 3) return candidate;
    }
    if (cp >= 0x1f000 && i > 0) {
      return text.slice(0, i).trim();
    }
    i += cp > 0xffff ? 2 : 1;
  }
  return text.slice(0, 80).trim();
}

function Lightbox({ post, onClose }: { post: FBPost; onClose: () => void }) {
  const text = stripHashtags(post.message || post.story || "");
  const images = post.images ?? (post.full_picture ? [post.full_picture] : []);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((i) => Math.min(i + 1, images.length - 1));
      if (e.key === "ArrowLeft") setIdx((i) => Math.max(i - 1, 0));
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, images.length]);

  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ background: "#fff", maxWidth: "720px", width: "100%", maxHeight: "90vh", overflowY: "auto", display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.75rem 1rem", borderBottom: "2px solid #0a0a0a" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span className="text-xs font-black uppercase tracking-widest px-2 py-0.5" style={{ background: "#F06000", color: "#fff" }}>
              {formatDate(post.created_time)}
            </span>
            {images.length > 1 && (
              <span className="text-xs font-black uppercase tracking-widest" style={{ color: "#999" }}>
                {idx + 1} / {images.length}
              </span>
            )}
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.25rem", fontWeight: 900, color: "#0a0a0a", lineHeight: 1 }}>
            ✕
          </button>
        </div>

        {images.length > 0 && (
          <div style={{ position: "relative", background: "#0a0a0a" }}>
            <img src={images[idx]} alt="" style={{ width: "100%", display: "block", objectFit: "contain", maxHeight: "60vh" }} />
            {images.length > 1 && (
              <>
                <button onClick={() => setIdx((i) => Math.max(i - 1, 0))} disabled={idx === 0}
                  style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3rem", background: "rgba(0,0,0,0.35)", border: "none", cursor: idx === 0 ? "default" : "pointer", color: "#fff", fontSize: "1.5rem", fontWeight: 900, opacity: idx === 0 ? 0.2 : 1 }}>
                  ‹
                </button>
                <button onClick={() => setIdx((i) => Math.min(i + 1, images.length - 1))} disabled={idx === images.length - 1}
                  style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "3rem", background: "rgba(0,0,0,0.35)", border: "none", cursor: idx === images.length - 1 ? "default" : "pointer", color: "#fff", fontSize: "1.5rem", fontWeight: 900, opacity: idx === images.length - 1 ? 0.2 : 1 }}>
                  ›
                </button>
              </>
            )}
          </div>
        )}

        {text && (
          <div style={{ padding: "1rem", borderTop: "2px solid #f2f2f2" }}>
            <p style={{ color: "#333", lineHeight: 1.7, fontSize: "0.95rem", whiteSpace: "pre-line" }}>{text}</p>
          </div>
        )}

        <div style={{ padding: "0.75rem 1rem", borderTop: "2px solid #f2f2f2" }}>
          <a href={post.permalink_url} target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase tracking-widest hover:underline" style={{ color: "#F06000" }}>
            View on Facebook ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FBTimelineFeed({ label, scrollClassName }: { label: string; scrollClassName?: string }) {
  const [posts, setPosts] = useState<FBPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightboxPost, setLightboxPost] = useState<FBPost | null>(null);

  useEffect(() => {
    fetch("/api/fb-posts")
      .then((r) => r.json())
      .then((data) => {
        const filtered: FBPost[] = (data.posts || [])
          .filter((p: FBPost) => p.category === "timeline")
          .sort((a: FBPost, b: FBPost) => new Date(b.created_time).getTime() - new Date(a.created_time).getTime());
        setPosts(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const closeLightbox = useCallback(() => setLightboxPost(null), []);

  return (
    <div style={{ borderRight: "2px solid #0a0a0a", display: "flex", flexDirection: "column", height: "100%" }}>
      <p className="text-xs font-black uppercase tracking-widest px-6 py-4" style={{ color: "#F06000", borderBottom: "2px solid #0a0a0a", background: "#fff" }}>
        {label}
      </p>

      <div
        className={scrollClassName}
        style={{ overflowY: "scroll", flex: 1, WebkitOverflowScrolling: "touch" as never, touchAction: "pan-y" }}
      >
        {loading && (
          <div className="px-6 py-8">
            {[60, 80, 50].map((w, i) => (
              <div key={i} style={{ height: "12px", background: "#f2f2f2", borderRadius: "2px", marginBottom: "8px", width: `${w}%` }} />
            ))}
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="px-6 py-8">
            <p className="text-xs font-black uppercase tracking-widest" style={{ color: "#bbb" }}>— Coming soon</p>
            <p className="text-xs mt-2" style={{ color: "#999", lineHeight: 1.7 }}>
              Tag Facebook posts with <span style={{ color: "#F06000" }}>#timeline</span> to have them appear here.
            </p>
          </div>
        )}

        {posts.map((post, i) => {
          const text = stripHashtags(post.message || post.story || "");
          const title = firstSentence(text);

          return (
            <a
              key={post.id}
              href={post.permalink_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              style={{ borderBottom: "2px solid #F06000", padding: "1rem 1.5rem", textDecoration: "none" }}
            >
              {/* Date badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-black uppercase tracking-widest px-2 py-0.5" style={{ background: "#F06000", color: "#fff" }}>
                  {formatDate(post.created_time)}
                </span>
              </div>

              {/* Title */}
              {title && (
                <h3 className="font-black uppercase text-base mb-2" style={{ letterSpacing: "-0.02em", color: "#0a0a0a" }}>
                  {title}
                </h3>
              )}

              {/* Pic right + text left */}
              <div className="grid grid-cols-2 gap-3 items-start">
                <div>
                  <p className="text-sm" style={{ color: "#555", lineHeight: 1.6 }}>
                    {text.slice(0, 200)}{text.length > 200 ? "…" : ""}
                  </p>
                  <p className="text-xs font-black uppercase tracking-widest mt-2 group-hover:underline" style={{ color: "#F06000" }}>
                    Facebook ↗
                  </p>
                </div>
                {post.full_picture && (
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLightboxPost(post); }}
                    style={{ display: "block", width: "100%", padding: 0, border: "none", background: "none", cursor: "zoom-in" }}
                  >
                    <img
                      src={post.full_picture}
                      alt=""
                      style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", objectPosition: "center top", border: "1px solid #e0e0e0", display: "block" }}
                    />
                  </button>
                )}
              </div>
            </a>
          );
        })}
      </div>

      {lightboxPost && <Lightbox post={lightboxPost} onClose={closeLightbox} />}
    </div>
  );
}
