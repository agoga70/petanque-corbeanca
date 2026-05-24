"use client";

import { useState } from "react";

type Props = {
  url: string;
  title?: string;
  color?: string;
  imageSrc?: string; // if provided, attempts to share the actual image file
};

export default function ShareButton({ url, title = "Pétanque Corbeanca", color = "#0a0a0a", imageSrc }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    // 1. Try sharing the actual image file (mobile only)
    if (imageSrc && navigator.share) {
      try {
        const fullSrc = imageSrc.startsWith("http") ? imageSrc : window.location.origin + imageSrc;
        const res = await fetch(fullSrc);
        const blob = await res.blob();
        const ext = blob.type.split("/")[1] || "jpg";
        const file = new File([blob], `petanque-corbeanca.${ext}`, { type: blob.type });

        if (navigator.canShare?.({ files: [file] })) {
          await navigator.share({ title, files: [file] });
          return;
        }
      } catch {
        // fetch or share failed — fall through to URL share
      }
    }

    // 2. Share URL
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // user cancelled — do nothing
        return;
      }
    }

    // 3. Fallback: copy URL to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  return (
    <button
      onClick={(e) => { e.stopPropagation(); handleShare(); }}
      title={copied ? "Copied!" : "Share"}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "0.35rem",
        padding: "0.25rem 0.5rem",
        color: copied ? "#22c55e" : color,
        transition: "color 200ms",
      }}
    >
      {copied ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      )}
      <span className="text-xs font-black uppercase tracking-widest" style={{ fontSize: "0.65rem" }}>
        {copied ? "Copied!" : "Share"}
      </span>
    </button>
  );
}
