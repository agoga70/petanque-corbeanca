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

export default function FBTimelineFeed({ label }: { label: string }) {
  const [posts, setPosts] = useState<FBPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/fb-posts")
      .then((r) => r.json())
      .then((data) => {
        const filtered: FBPost[] = (data.posts || [])
          .filter((p: FBPost) => p.category === "timeline")
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
    <div style={{ borderRight: "2px solid #0a0a0a", display: "flex", flexDirection: "column", height: "100%" }}>
      <p
        className="text-xs font-black uppercase tracking-widest px-6 py-4"
        style={{ color: "#F06000", borderBottom: "2px solid #0a0a0a", background: "#fff" }}
      >
        {label}
      </p>

      <div style={{ overflowY: "auto", flex: 1, maxHeight: "700px" }}>
        {loading && (
          <div className="px-6 py-8">
            <div style={{ height: "12px", background: "#f2f2f2", borderRadius: "2px", marginBottom: "8px", width: "60%" }} />
            <div style={{ height: "12px", background: "#f2f2f2", borderRadius: "2px", marginBottom: "8px", width: "80%" }} />
            <div style={{ height: "12px", background: "#f2f2f2", borderRadius: "2px", width: "50%" }} />
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="px-6 py-8">
            <p className="text-xs font-black uppercase tracking-widest" style={{ color: "#bbb" }}>
              — Coming soon
            </p>
            <p className="text-xs mt-2" style={{ color: "#999", lineHeight: 1.7 }}>
              Tag Facebook posts with <span style={{ color: "#F06000" }}>#CSPCTimeline</span> to have them appear here.
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
              padding: "1.25rem 1.5rem",
              textDecoration: "none",
            }}
          >
            <div className="flex items-start gap-3">
              <div
                style={{
                  width: "3px",
                  minHeight: "40px",
                  background: "#F06000",
                  flexShrink: 0,
                  marginTop: "4px",
                }}
              />
              <div style={{ flex: 1 }}>
                <p
                  className="text-xs font-black uppercase tracking-widest mb-1"
                  style={{ color: "#F06000" }}
                >
                  {formatDate(post.created_time)}
                </p>
                {post.full_picture && (
                  <img
                    src={post.full_picture}
                    alt=""
                    style={{
                      width: "100%",
                      height: "140px",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                      marginBottom: "0.75rem",
                      border: "1px solid #f2f2f2",
                    }}
                  />
                )}
                <p
                  className="text-sm"
                  style={{ color: "#333", lineHeight: 1.6 }}
                >
                  {stripHashtags(post.message || post.story || "").slice(0, 200)}
                  {(post.message || post.story || "").length > 200 ? "…" : ""}
                </p>
                <p
                  className="text-xs font-black uppercase tracking-widest mt-2 group-hover:underline"
                  style={{ color: "#F06000" }}
                >
                  Facebook ↗
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
