import { NextResponse } from "next/server";

const PAGE_ID = "102148914986845";
const TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

export const revalidate = 600; // 10 min cache

export type FBPost = {
  id: string;
  message?: string;
  story?: string;
  created_time: string;
  full_picture?: string;
  permalink_url: string;
  category: "timeline" | "news" | "events";
  images: string[]; // all photos in the post
};

function categorize(message: string): FBPost["category"] {
  const text = message.toLowerCase();
  if (text.includes("#timeline")) return "timeline";
  if (text.includes("#news")) return "news";
  return "events";
}

type RawAttachment = {
  media?: { image?: { src: string } };
  subattachments?: { data: RawAttachment[] };
};

function extractImages(post: { full_picture?: string; attachments?: { data: RawAttachment[] } }): string[] {
  const imgs: string[] = [];

  const attachments = post.attachments?.data ?? [];
  for (const att of attachments) {
    // Multi-photo post: images live in subattachments
    if (att.subattachments?.data?.length) {
      for (const sub of att.subattachments.data) {
        const src = sub.media?.image?.src;
        if (src) imgs.push(src);
      }
    } else {
      // Single image attachment
      const src = att.media?.image?.src;
      if (src) imgs.push(src);
    }
  }

  // Fallback to full_picture if no attachments parsed
  if (imgs.length === 0 && post.full_picture) {
    imgs.push(post.full_picture);
  }

  return imgs;
}

export async function GET() {
  if (!TOKEN) {
    return NextResponse.json({ posts: [], error: null });
  }

  try {
    const fields = "id,message,story,created_time,full_picture,permalink_url,attachments{media,subattachments{media}}";
    const url = `https://graph.facebook.com/v19.0/${PAGE_ID}/posts?fields=${fields}&limit=100&access_token=${TOKEN}`;
    const res = await fetch(url, { next: { revalidate: 600 } });
    const data = await res.json();

    if (data.error) {
      return NextResponse.json({ posts: [], error: data.error.message });
    }

    const posts: FBPost[] = (data.data || []).map((p: Parameters<typeof extractImages>[0] & Omit<FBPost, "category" | "images">) => ({
      ...p,
      category: categorize(p.message || p.story || ""),
      images: extractImages(p),
    }));

    return NextResponse.json({ posts });
  } catch (e) {
    return NextResponse.json({ posts: [], error: String(e) });
  }
}
