"use client";

import { useState } from "react";

type Props = {
  url: string;
  title?: string;
  color?: string;
};

export default function ShareButton({ url, title = "Pétanque Corbeanca", color = "#0a0a0a" }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // user cancelled — do nothing
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // clipboard not available either — ignore
      }
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
        /* Checkmark */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        /* Share icon */
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
