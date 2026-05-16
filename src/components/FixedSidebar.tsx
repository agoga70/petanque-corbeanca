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
  const cur = useRef({ top: 9999, bottom: 9999, left: 0, right: 0 });
  const tgt = useRef({ top: 9999, bottom: 9999, left: 0, right: 0 });

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    function readTarget() {
      const r = wrap!.getBoundingClientRect();
      tgt.current = {
        top: Math.max(0, r.top),
        bottom: Math.max(0, window.innerHeight - r.bottom),
        left: Math.max(0, r.left),
        right: Math.max(0, window.innerWidth - r.right),
      };
    }

    function animate() {
      const t = 0.12;
      cur.current.top    = lerp(cur.current.top,    tgt.current.top,    t);
      cur.current.bottom = lerp(cur.current.bottom, tgt.current.bottom, t);
      cur.current.left   = lerp(cur.current.left,   tgt.current.left,   t);
      cur.current.right  = lerp(cur.current.right,  tgt.current.right,  t);

      const { top, bottom, left, right } = cur.current;
      img!.style.clipPath = `inset(${top}px ${right}px ${bottom}px ${left}px)`;
      rafRef.current = requestAnimationFrame(animate);
    }

    window.addEventListener("scroll", readTarget, { passive: true });
    window.addEventListener("resize", readTarget, { passive: true });

    readTarget();
    cur.current = { ...tgt.current };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", readTarget);
      window.removeEventListener("resize", readTarget);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={wrapRef} className="hidden md:block" style={{ minHeight: "100%" }}>
      {/* img is fixed to the full viewport, clipped to sidebar bounds */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: -1,
          willChange: "clip-path",
        }}
      />
    </div>
  );
}
