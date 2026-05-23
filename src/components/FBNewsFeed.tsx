"use client";

import { useEffect, useState } from "react";
import type { FBPost } from "@/app/api/fb-posts/route";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function stripHashtags(text: string) {
  return text.replace(/#\S+/g, "").replace(/\s{2,}/g, " ").trim();
}

export default function FBNewsFeed({ publishedLabel }: { publishedLabel: string }) {
  const [posts, setPosts] = useState<FBPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/fb-posts")
      .then((r) => r.json())
      .then((data) => {
        const filtered: FBPost[] = (data.posts || [])
          .filter((p: FBPost) => p.category === "news")
          .sort(
            (a: FBPost, b: FBPost) =>
              new Date(b.created_time).getTime() - new Date(a.created_time).getTime()
          );
        setPosts(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading || posts.length === 0) return null;

  return (
    <>
      {posts.map((post, i) => {
        const text = stripHashtags(post.message || post.story || "");
        const inner = (
          <div
            className="px-6 py-4 grid md:grid-cols-4 gap-4 items-start group"
            style={{ borderBottom: "2px solid #f2f2f2" }}
          >
            <div>
              {post.full_picture ? (
                <img
                  src={post.full_picture}
                  alt=""
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                    objectPosition: "center top",
                    border: "2px solid #f2f2f2",
                    display: "block",
                  }}
                />
              ) : (
                <p
                  className="font-black text-4xl select-none"
                  style={{ color: "#bbb", WebkitTextStroke: "1.5px #999", letterSpacing: "-0.04em", lineHeight: 1 }}
                >
                  —
                </p>
              )}
            </div>
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="text-xs font-black uppercase tracking-widest px-2 py-0.5"
                  style={{ background: "#F06000", color: "#fff" }}
                >
                  Facebook
                </span>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#888" }}>
                  {publishedLabel} {formatDate(post.created_time)}
                </span>
              </div>
              <p className="font-black uppercase text-lg mb-2" style={{ letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                {text.split("\n")[0].slice(0, 80)}
              </p>
              <p style={{ color: "#555", lineHeight: 1.6, fontSize: "0.875rem" }}>
                {text.slice(0, 300)}{text.length > 300 ? "…" : ""}
              </p>
              <p
                className="mt-3 text-xs font-black uppercase tracking-widest group-hover:underline"
                style={{ color: "#F06000" }}
              >
                Facebook ↗
              </p>
            </div>
          </div>
        );

        return (
          <a key={post.id} href={post.permalink_url} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
            {inner}
          </a>
        );
      })}
    </>
  );
}
