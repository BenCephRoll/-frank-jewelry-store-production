import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/data/catalog";

const staticPaths = [
  "/",
  "/shop",
  "/collections",
  "/gallery",
  "/about",
  "/testimonials",
  "/faqs",
  "/contact",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const url = new URL(request.url);
        const proto = request.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "");
        const host = request.headers.get("host") ?? url.host;
        const origin = `${proto}://${host}`;
        const paths = [
          ...staticPaths,
          ...products.map((product) => `/shop/${product.slug}`),
        ];
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) =>
      `  <url><loc>${origin}${path}</loc><changefreq>weekly</changefreq><priority>${
        path === "/" ? "1.0" : "0.7"
      }</priority></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(body, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
