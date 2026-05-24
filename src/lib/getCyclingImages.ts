import fs from "fs";
import path from "path";

export function getCyclingImages(): string[] {
  const dir = path.join(process.cwd(), "public/imgs");
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
      .sort()
      .map((f) => `/imgs/${f}`);
  } catch {
    return [];
  }
}
