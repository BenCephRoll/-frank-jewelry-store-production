import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const port = Number(process.env['PORT'] ?? 3000);

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "netlify",
  },
  vite: {
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
