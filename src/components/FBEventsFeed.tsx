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

export default function FBEventsFeed({ label }: { label: string }) {
  const [posts, setPosts] = useState<FBPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/fb-posts")
      .then((r) => r.json())
      .then((data) => {
        const filtered: FBPost[] = (data.posts || [])
          .filter((p: FBPost) => p.category === "events")
          .sort(
            (a: FBPost, b: FBPost) =>
              new Date(b.created_time).getTime() - new Date(a.created_time).getTime()
          );
        setPosts(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <p
        className="text-xs font-black uppercase tracking-widest px-5 py-4"
        style={{ color: "#F06000", borderBottom: "2px solid #0a0a0a" }}
      >
        {label}
      </p>

      <div style={{ overflowY: "auto", flex: 1 }}>
        {loading && (
          <div className="px-5 py-8 space-y-3">
            {[80, 60, 70].map((w, i) => (
              <div key={i} style={{ height: "12px", background: "#f2f2f2", borderRadius: "2px", width: `${w}%` }} />
            ))}
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="px-5 py-8">
            <p className="text-xs font-black uppercase tracking-widest" style={{ color: "#bbb" }}>
              — Coming soon
            </p>
            <p className="text-xs mt-2" style={{ color: "#999", lineHeight: 1.7 }}>
              All Facebook posts without <span style={{ color: "#F06000" }}>#timeline</span> or <span style={{ color: "#F06000" }}>#news</span> will appear here automatically.
            </p>
          </div>
        )}

        {posts.map((post, i) => (
          <a
            key={post.id}
            href={post.permalink_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            style={{
              borderBottom: i < posts.length - 1 ? "2px solid #f2f2f2" : "none",
              padding: "1rem 1.25rem",
              textDecoration: "none",
            }}
          >
            {post.full_picture && (
              <img
                src={post.full_picture}
                alt=""
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                  marginBottom: "0.75rem",
                  border: "1px solid #f2f2f2",
                }}
              />
            )}
            <p
              className="text-xs font-black uppercase tracking-widest mb-1"
              style={{ color: "#F06000" }}
            >
              {formatDate(post.created_time)}
            </p>
            <p className="text-sm mb-2" style={{ color: "#333", lineHeight: 1.6 }}>
              {stripHashtags(post.message || post.story || "").slice(0, 180)}
              {(post.message || post.story || "").length > 180 ? "…" : ""}
            </p>
            <p
              className="text-xs font-black uppercase tracking-widest group-hover:underline"
              style={{ color: "#F06000" }}
            >
              Facebook ↗
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
