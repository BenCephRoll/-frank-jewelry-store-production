// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Read PORT assigned by Replit's managed workflow (falls back to 3000 for local dev)
const port = Number(process.env['PORT'] ?? 3000);

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  // The Lovable config wraps Nitro with a Cloudflare preset by default (see the
  // comment at the top of this file). Vercel's build environment expects Nitro's
  // "vercel" preset instead — without this override, the build emits a Cloudflare
  // Worker bundle that Vercel doesn't know how to serve, producing 404s or a
  // "No Output Directory" error even when the build itself succeeds.
  nitro: {
    preset: "vercel",
    output: {
      dir: ".vercel/output",
      serverDir: ".vercel/output/functions/__server.func",
      publicDir: ".vercel/output/static",
    },
  },
  vite: {
    // Override sandbox/port detection so Replit's assigned PORT is used.
    server: {
      port,
      strictPort: true,
      host: "0.0.0.0",
      allowedHosts: true,
    },
    preview: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
    },
  },
});
