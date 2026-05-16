import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";

const input = "public/logo.png";
const output = "public/logo-transparent.png";
const threshold = 240; // pixels brighter than this on all channels become transparent

const image = sharp(readFileSync(input)).ensureAlpha();
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

const { width, height, channels } = info; // channels = 4 (RGBA)

for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  if (r >= threshold && g >= threshold && b >= threshold) {
    data[i + 3] = 0; // fully transparent
  }
}

const result = await sharp(Buffer.from(data), {
  raw: { width, height, channels },
}).png().toBuffer();

writeFileSync(output, result);
console.log(`Done → ${output}`);
