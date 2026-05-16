"use client";

import { useEffect, useRef } from "react";

export default function FacebookEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPetanqueCorbeanca&tabs=timeline&width=${width}&height=650&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=false`;
    iframe.width = String(width);
    iframe.height = "650";
    iframe.style.border = "none";
    iframe.style.display = "block";
    iframe.style.width = "100%";
    iframe.scrolling = "no";
    iframe.allowFullscreen = true;
    iframe.allow = "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share";
    containerRef.current.appendChild(iframe);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ border: "2px solid #0a0a0a", overflow: "hidden", minHeight: "650px", background: "#f9f9f9" }}
    />
  );
}
