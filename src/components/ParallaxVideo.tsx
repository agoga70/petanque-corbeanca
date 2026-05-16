"use client";

import { useEffect, useRef } from "react";

interface Props {
  src: string;
  height?: number;
}

export default function ParallaxVideo({ src, height = 500 }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    function update() {
      const rect = section!.getBoundingClientRect();
      const top = Math.max(0, rect.top);
      const bot = Math.max(0, window.innerHeight - rect.bottom);
      video!.style.clipPath = `inset(${top}px 0px ${bot}px 0px)`;
    }

    function onScroll() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height,
        borderTop: "2px solid #0a0a0a",
        borderBottom: "2px solid #F06000",
      }}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          willChange: "clip-path",
        }}
      />
    </section>
  );
}
