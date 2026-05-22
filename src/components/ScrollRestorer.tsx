"use client";

import { useEffect } from "react";

const SCROLL_KEY = "langSwitchScroll";

export function saveScrollPosition() {
  sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
}

export default function ScrollRestorer() {
  useEffect(() => {
    const saved = sessionStorage.getItem(SCROLL_KEY);
    if (saved !== null) {
      sessionStorage.removeItem(SCROLL_KEY);
      const y = parseInt(saved, 10);
      if (y > 0) {
        // Give the page a tick to paint before restoring
        requestAnimationFrame(() => window.scrollTo({ top: y, behavior: "instant" }));
      }
    }
  }, []);

  return null;
}
