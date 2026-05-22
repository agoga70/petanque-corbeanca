@AGENTS.md

# CSPC Website — Project Context

## What This Is
Website for **Club Sportiv Pétanque Corbeanca** (CSPC), a pétanque sports club based in Corbeanca, Ilfov, Romania. Live at **petanquecorbeanca.com**, deployed on **Vercel**, source on **GitHub** (`agoga70/petanque-corbeanca`).

## Owner
Andrei Goga (`goga70@gmail.com`) — founding member. Bill Chamly is club president.

## Stack
- **Next.js 16** App Router (read `node_modules/next/dist/docs/` before touching Next.js APIs — breaking changes from earlier versions)
- **TypeScript** strict mode
- **Tailwind CSS v4**
- **next-intl** for i18n — 3 locales: `ro` (default), `en`, `fr`
- **Vercel** for hosting — push to `main` = auto-deploy

## Project Structure
```
src/
  app/[locale]/          # All pages under locale routing
    page.tsx             # Home
    about/page.tsx       # About the club (longest page)
    events/page.tsx      # Events + videos + Facebook embed
    news/page.tsx        # News articles
    contact/page.tsx     # Contact info + map
    layout.tsx           # Locale layout: Navbar + Footer + ScrollRestorer
  components/
    Navbar.tsx           # Sticky nav, mobile arrow nav, language switcher
    Footer.tsx           # Footer with translated nav links
    FacebookEmbed.tsx    # Facebook page embed (Events page)
    ParallaxVideo.tsx    # Scroll-driven parallax video (Home page)
    ScrollRestorer.tsx   # Preserves scroll position on language switch
    SwipeNavigator.tsx   # Swipe left/right between pages on mobile
messages/
  en.json / ro.json / fr.json   # All translation strings
public/
  *.jpg / *.png          # Photos (see key photos below)
  *.pdf                  # Club documents
  videos/                # MP4 clips for Events page
```

## i18n Conventions
- All user-facing text uses `useTranslations("namespace")` — never hardcode strings
- Namespace per page: `home`, `about`, `events`, `news`, `contact`, `nav`, `footer`
- Always update all 3 locale files (`en.json`, `ro.json`, `fr.json`) when adding/changing a key
- Footer uses `useTranslations("nav")` for nav link labels

## Design System
- **Brand orange:** `#F06000`
- **Dark/black:** `#0a0a0a`
- **Borders:** `2px solid #0a0a0a` (structural), `2px solid #F06000` (accent)
- **Typography:** Geist font, `font-black uppercase` for headings, `tracking-widest` for labels
- **Page sections:** direct children of `<main className="flex-1 flex flex-col">` — each section stretches full width as a flex item
- **Photo banners:** always use `objectPosition: "center top"` on horizontal banners so faces are visible and crop happens from the bottom

## Key Photo Files
| File | Used On |
|------|---------|
| `cspc-group-2024.jpg` | Home — club group photo strip |
| `cspc-at-mosia.jpg` | Events — top banner |
| `dracula-cup.jpg` | Events — bottom banner |
| `AllTheLadiesInTheHouse.jpg` | About — banner after Founding Members. Uses `position:absolute; width:200%; maxWidth:none` trick to zoom in and crop the empty right side of the photo |
| `AllTheGentsInTheHouse.jpg` | About — bottom banner after Club Documents |
| `always-measure.jpg` | About & Contact — fixed parallax background with semi-transparent overlay |
| `petanque-corbeanca-vert-000.jpg` | Contact — left side image |
| `petanque-vert-00.jpg` | Contact — right side image (kid with boules) |
| `Bill-00.png` | About — Founding Member avatar |
| `Alesa-00.png` | About — Founding Member avatar |
| `JanCardon-00.jpg` | About — Founding Member avatar (grayscale filter) |
| `CristinaC-00.jpg` | About — Society section avatar |

## Club Documents (in /public)
All linked from the About page Club Documents section:
- `MembershipForm.pdf`
- `StatutulCSPC10Mai2026.pdf` ← updated statute, NOT the old Wix version
- `ClubInternalRules.pdf`
- `GameRules_EN.pdf`
- `ReguliDeJoc_RO.pdf`

## Pending Feature: Facebook Timeline
Translation keys `timeline_label`, `timeline_coming_soon`, `timeline_hashtag` already exist in all 3 locale files but the section is not yet rendered on the About page. The plan is to fetch `#CSPCTimeline` tagged posts via the Facebook Graph API and display them as a stylized milestone/history timeline. **Blocked on:** Bill Chamly needs to add Andrei Goga as Facebook Page Admin for `PetanqueCorbeanca` so a Page Access Token can be obtained.

## Known CSS Quirks
- Tailwind base reset applies `max-width: 100%` to all `<img>` — override with `maxWidth: "none"` when an image needs to exceed its container width
- `objectFit: cover` + `objectPosition` X-axis has no effect when the image's natural width scales to exactly fill the container width. Use the `width: 200%; maxWidth: none` trick on an `position: absolute` img inside `overflow: hidden` to force a different scale axis and crop horizontally
- The `[locale]` layout uses `flex flex-col` on `<main>` — page fragments return bare sections, not a wrapping div

## Dev Server
- Local: `http://localhost:3000`
- Network (for mobile testing): `http://192.168.0.151:3000`
- Start: `npm run dev` or `bun dev`

## Deploy
Push to `main` on GitHub → Vercel auto-deploys to `petanquecorbeanca.com`. No manual step needed.

## Club Contact Details (used throughout codebase)
- Email: `petanque.corbeanca@gmail.com`
- WhatsApp: `+40 730 444 666`
- Facebook: `https://www.facebook.com/PetanqueCorbeanca`
- Instagram: `https://www.instagram.com/petanque_corbeanca/`
- Playing grounds: Str. Hipodromului nr 29, Ostratu, Corbeanca
- Legal HQ: Str. Ficusului nr. 10, Corbeanca, Ilfov 077065
- CIF: 43524017
