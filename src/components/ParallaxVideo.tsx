"use client";

import { useEffect, useRef } from "react";

interface Props {
  src: string;
  height?: number;
}

export default function ParallaxVideo({ src, height = 500 }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    function onScroll() {
      const rect = section!.getBoundingClientRect();
      // Move video at ~40% of scroll speed — creates the parallax gap effect
      const offset = (rect.top / window.innerHeight) * -60;
      video!.style.transform = `translateY(${offset}px)`;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: `${height}px`,
        overflow: "hidden",
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
          position: "absolute",
          top: "-15%",
          left: 0,
          width: "100%",
          height: "130%",
          objectFit: "cover",
          willChange: "transform",
        }}
      />
      {/* subtle dark vignette so surrounding content reads cleanly */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.25) 100%)",
        pointerEvents: "none",
      }} />
    </section>
  );
}
