import { createFileRoute, Link } from "@tanstack/react-router";
import { MediaFrame } from "@/components/MediaFrame";
import { Reveal } from "@/components/Reveal";
import { byCategory, categories } from "@/data/catalog";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections | Frank Jewelry Store" },
      {
        name: "description",
        content:
          "Explore Frank Jewelry Store collections: necklaces, bracelets, rings, earrings, wristwatches, leg chains, waist chains, trouser chains and anklets.",
      },
      { property: "og:title", content: "Collections | Frank Jewelry Store" },
      {
        property: "og:description",
        content:
          "Nine curated jewelry collections in gold, diamond, steel and fashion finishes.",
      },
      { property: "og:url", content: "/collections" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/collections" }],
  }),
  component: Collections,
});

function Collections() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
      <Reveal>
        <p className="eyebrow">Collections</p>
        <h1 className="mt-5 max-w-2xl font-display text-5xl sm:text-6xl">
          Curated by category
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Each collection is stocked to the same standard — real materials, clean finishing,
          and honest weights. Open one to see what is available now.
        </p>
        <div className="rule-gold mt-8 w-24" />
      </Reveal>

      <ul className="mt-14 space-y-4">
        {categories.map((category, index) => {
          const items = byCategory(category.slug);
          const cover = items[0]?.images[0];
          return (
            <Reveal as="li" key={category.slug} delay={(index % 3) * 80}>
              <Link
                to="/shop"
                search={{ category: category.slug }}
                className="group grid gap-6 border border-border/60 bg-card p-5 transition-[border-color,transform] duration-700 hover:-translate-y-1 hover:border-gold/50 sm:grid-cols-[10rem_1fr] sm:items-center"
              >
                <MediaFrame media={cover} ratio="1 / 1" className="border border-border/50" />
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h2 className="font-display text-3xl transition-colors duration-500 group-hover:text-gold">
                      {category.name}
                    </h2>
                    <span className="text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
                      {items.length > 0
                        ? `${items.length} piece${items.length > 1 ? "s" : ""} available`
                        : "Arriving soon"}
                    </span>
                  </div>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {category.blurb}
                  </p>
                  <span
                    aria-hidden
                    className="mt-5 inline-block text-[0.62rem] uppercase tracking-[0.22em] text-gold/85"
                  >
                    Browse {category.name} →
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
}
