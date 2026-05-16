"use client";

import { useEffect, useRef } from "react";

interface Props {
  src: string;
  height?: number;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function ParallaxVideo({ src, height = 500 }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>();
  const currentTop = useRef(0);
  const currentBottom = useRef(0);
  const targetTop = useRef(0);
  const targetBottom = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    function readTarget() {
      const rect = section!.getBoundingClientRect();
      targetTop.current = Math.max(0, rect.top);
      targetBottom.current = Math.max(0, window.innerHeight - rect.bottom);
    }

    function animate() {
      // Lerp factor — higher = snappier, lower = more lag/smoothness
      const t = 0.12;
      currentTop.current = lerp(currentTop.current, targetTop.current, t);
      currentBottom.current = lerp(currentBottom.current, targetBottom.current, t);

      const top = Math.round(currentTop.current * 10) / 10;
      const bot = Math.round(currentBottom.current * 10) / 10;
      video!.style.clipPath = `inset(${top}px 0px ${bot}px 0px)`;

      rafRef.current = requestAnimationFrame(animate);
    }

    function onScroll() {
      readTarget();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", readTarget, { passive: true });

    // Initialise without lerp so first paint is correct
    readTarget();
    currentTop.current = targetTop.current;
    currentBottom.current = targetBottom.current;

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", readTarget);
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
