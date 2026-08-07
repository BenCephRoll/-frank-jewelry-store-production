import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { EmptyState } from "@/components/Atmosphere";
import { useClientStore } from "@/lib/client-store";
import { getProduct, whatsappLink } from "@/data/catalog";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "My Wishlist | Frank Jewelry Store" },
      {
        name: "description",
        content:
          "Your saved Frank Jewelry Store pieces, kept on this device. Review your wishlist and send it to us on WhatsApp to reserve.",
      },
      { property: "og:title", content: "My Wishlist | Frank Jewelry Store" },
      {
        property: "og:description",
        content: "Saved pieces, ready to reserve on WhatsApp.",
      },
      { property: "og:url", content: "/wishlist" },
      { name: "robots", content: "noindex" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/wishlist" }],
  }),
  component: Wishlist,
});

function Wishlist() {
  const { wishlist, recentlyViewed, hydrated } = useClientStore();
  const saved = wishlist.map(getProduct).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const recent = recentlyViewed
    .map(getProduct)
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
      <Reveal>
        <p className="eyebrow">Saved Pieces</p>
        <h1 className="mt-5 font-display text-5xl sm:text-6xl">My wishlist</h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Saved on this device. When you're ready, send us the names and we'll confirm what is
          still available.
        </p>
        <div className="rule-gold mt-8 w-24" />
      </Reveal>

      <div className="mt-14">
        {!hydrated ? (
          <p className="text-sm text-muted-foreground">Loading your saved pieces…</p>
        ) : saved.length === 0 ? (
          <EmptyState
            title="Nothing saved yet"
            body="Tap the heart on any piece to keep it here while you decide."
            action={
              <Link
                to="/shop"
                className="inline-flex min-h-13 items-center bg-gold px-9 text-[0.65rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90"
              >
                Browse the Collection
              </Link>
            }
          />
        ) : (
          <>
            <div className="mb-8 flex justify-end">
              <a
                href={whatsappLink(
                  `Hello Frank Jewelry Store, I'd like to ask about these saved pieces: ${saved
                    .map((product) => product.name)
                    .join(", ")}.`,
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-13 items-center bg-gold px-8 text-[0.65rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90"
              >
                Send Wishlist on WhatsApp
              </a>
            </div>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {saved.map((product, index) => (
                <Reveal as="li" key={product.slug} delay={(index % 3) * 90}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </ul>
          </>
        )}
      </div>

      {hydrated && recent.length > 0 ? (
        <section className="mt-24 border-t border-border/50 pt-16">
          <Reveal>
            <p className="eyebrow">Recently Viewed</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">Back where you left off</h2>
          </Reveal>
          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((product, index) => (
              <Reveal as="li" key={product.slug} delay={index * 90}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
