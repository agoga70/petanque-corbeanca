"use client";

import { useRouter, usePathname } from "next/navigation";
import { useRef } from "react";

const PAGE_ORDER = ["", "about", "events", "news", "contact"];

export default function SwipeNavigator({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  function handleTouchStart(e: React.TouchEvent) {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;

    // Ignore if mostly vertical (scrolling)
    if (Math.abs(dy) > Math.abs(dx)) return;
    // Require minimum swipe distance
    if (Math.abs(dx) < 60) return;

    // Extract locale and current page from pathname e.g. /en/about
    const parts = pathname.split("/").filter(Boolean); // ["en", "about"] or ["en"]
    const locale = parts[0] ?? "ro";
    const currentSlug = parts[1] ?? "";

    const currentIndex = PAGE_ORDER.indexOf(currentSlug);
    if (currentIndex === -1) return;

    let nextIndex: number;
    if (dx < 0) {
      // Swipe left → next page
      nextIndex = currentIndex + 1;
    } else {
      // Swipe right → previous page
      nextIndex = currentIndex - 1;
    }

    if (nextIndex < 0 || nextIndex >= PAGE_ORDER.length) return;

    const nextSlug = PAGE_ORDER[nextIndex];
    const nextPath = nextSlug ? `/${locale}/${nextSlug}` : `/${locale}`;
    router.push(nextPath);
  }

  return (
    <div
      style={{ display: "contents" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
}
