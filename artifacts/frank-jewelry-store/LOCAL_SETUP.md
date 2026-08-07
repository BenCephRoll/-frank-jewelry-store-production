# Frank Jewelry Store — Local Setup (VS Code)

Full standalone source. No Lovable account or services required.

## Requirements
- Node.js 20+ (or Bun 1.1+)

## Install & run
```bash
npm install        # or: bun install
npm run dev        # http://localhost:8080
```

## Build & preview production
```bash
npm run build
npm run start      # serves the production build
```

## Project structure
- `src/routes/` — TanStack Start file-based routes (pages + sitemap.xml)
- `src/components/` — UI components (header, footer, product card, shop browser, media frame…)
- `src/data/catalog.ts` — products, categories, gallery media, WhatsApp links
- `src/styles.css` — Tailwind v4 theme + design tokens (fonts, gold/onyx palette)
- `src/assets/*.asset.json` — media pointers; the actual image/video files are bundled in `public/__l5e/assets-v1/...`
- `public/` — static files served at the site root
- `vite.config.ts`, `tsconfig.json`, `package.json` — build config

## Notes
- All photos and videos are included offline under `public/__l5e/`, so media loads locally exactly as it does online. Keep that folder if you move the project.
- Tailwind v4 is configured via `src/styles.css` (no tailwind.config.js).
- Default deploy target is Cloudflare (via nitro). For Netlify/Vercel, adjust the nitro preset in `vite.config.ts`.
