"use client";

import { useEffect, useRef } from "react";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

interface Props {
  src: string;
  alt: string;
}

export default function FixedSidebar({ src, alt }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const rafRef = useRef<number>();
  const curTop = useRef(9999);
  const curBot = useRef(9999);
  const tgtTop = useRef(9999);
  const tgtBot = useRef(9999);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    function applyGeometry() {
      const r = wrap!.getBoundingClientRect();
      // Position and size the fixed image to exactly match the sidebar column
      img!.style.left   = `${r.left}px`;
      img!.style.width  = `${r.width}px`;
      tgtTop.current = Math.max(0, r.top);
      tgtBot.current = Math.max(0, window.innerHeight - r.bottom);
    }

    function animate() {
      curTop.current = lerp(curTop.current, tgtTop.current, 0.12);
      curBot.current = lerp(curBot.current, tgtBot.current, 0.12);
      // Only clip top and bottom — left/right are handled by the image's own position+width
      img!.style.clipPath = `inset(${curTop.current}px 0px ${curBot.current}px 0px)`;
      rafRef.current = requestAnimationFrame(animate);
    }

    window.addEventListener("scroll", applyGeometry, { passive: true });
    window.addEventListener("resize", applyGeometry, { passive: true });

    applyGeometry();
    curTop.current = tgtTop.current;
    curBot.current = tgtBot.current;
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", applyGeometry);
      window.removeEventListener("resize", applyGeometry);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={wrapRef} className="hidden md:block" style={{ minHeight: "100%" }}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{
          position: "fixed",
          top: 0,
          left: 0,          // overwritten by JS
          width: "380px",   // overwritten by JS
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          zIndex: -1,
          willChange: "clip-path",
        }}
      />
    </div>
  );
}
