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
};

function categorize(message: string): FBPost["category"] {
  const text = message.toLowerCase();
  if (text.includes("#timeline")) return "timeline";
  if (text.includes("#news")) return "news";
  return "events";
}

export async function GET() {
  if (!TOKEN) {
    return NextResponse.json({ posts: [], error: null });
  }

  try {
    const fields = "id,message,story,created_time,full_picture,permalink_url";
    const url = `https://graph.facebook.com/v19.0/${PAGE_ID}/posts?fields=${fields}&limit=100&access_token=${TOKEN}`;
    const res = await fetch(url, { next: { revalidate: 600 } });
    const data = await res.json();

    if (data.error) {
      return NextResponse.json({ posts: [], error: data.error.message });
    }

    const posts: FBPost[] = (data.data || []).map((p: Omit<FBPost, "category">) => ({
      ...p,
      category: categorize(p.message || p.story || ""),
    }));

    return NextResponse.json({ posts });
  } catch (e) {
    return NextResponse.json({ posts: [], error: String(e) });
  }
}
