import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ShopBrowser } from "@/components/ShopBrowser";
import { Reveal } from "@/components/Reveal";

const searchSchema = z.object({
  category: z.string().optional().catch(undefined),
});

export const Route = createFileRoute("/shop/")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Shop Fine Jewelry | Frank Jewelry Store" },
      {
        name: "description",
        content:
          "Browse gold chains, diamond sets, steel jewelry, bracelets, rings and wristwatches. Filter by category and material, then order on WhatsApp.",
      },
      { property: "og:title", content: "Shop Fine Jewelry | Frank Jewelry Store" },
      {
        property: "og:description",
        content:
          "Gold chains, diamond sets, steel jewelry and wristwatches — filter, quick view and order on WhatsApp.",
      },
      { property: "og:url", content: "/shop" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: Shop,
});

function Shop() {
  const { category } = Route.useSearch();

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
      <Reveal>
        <p className="eyebrow">The Collection</p>
        <h1 className="mt-5 max-w-2xl font-display text-5xl sm:text-6xl">
          Every piece, one place
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Search by name, filter by category or material, and quick view anything that
          catches your eye. Pieces move quickly — reserve on WhatsApp.
        </p>
        <div className="rule-gold mt-8 w-24" />
      </Reveal>

      <div className="mt-12">
        <ShopBrowser initialCategory={category ?? "all"} />
      </div>
    </div>
  );
}
