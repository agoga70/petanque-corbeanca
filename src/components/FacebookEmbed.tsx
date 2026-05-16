"use client";

import { useEffect, useRef } from "react";

export default function FacebookEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";
    const width = containerRef.current.offsetWidth;

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPetanqueCorbeanca&tabs=timeline&width=${width}&height=650&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=false`;
    iframe.width = String(width);
    const height = window.innerWidth < 768 ? "480" : "650";
    iframe.height = height;
    iframe.style.border = "none";
    iframe.style.display = "block";
    iframe.style.width = "100%";
    iframe.scrolling = "no";
    iframe.allowFullscreen = true;
    iframe.allow = "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share";
    containerRef.current.appendChild(iframe);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={containerRef}
        style={{ border: "2px solid #0a0a0a", overflow: "hidden", minHeight: "clamp(480px, 60vh, 650px)", background: "#f9f9f9" }}
      />
      {/* Shown only while iframe hasn't painted — Facebook blocks on localhost */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: "0.75rem", pointerEvents: "none", zIndex: -1,
          color: "#bbb",
        }}
      >
        <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
        </svg>
        <p style={{ fontSize: "0.7rem", fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Facebook feed loads on live site
        </p>
      </div>
    </div>
  );
}
