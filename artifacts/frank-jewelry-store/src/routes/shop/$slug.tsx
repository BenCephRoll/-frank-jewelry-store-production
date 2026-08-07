import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { MediaFrame } from "@/components/MediaFrame";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { useClientStore } from "@/lib/client-store";
import {
  categoryName,
  getProduct,
  productEnquiry,
  relatedProducts,
  type Media,
} from "@/data/catalog";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    const product = loaderData?.product;
    if (!product) {
      return {
        meta: [
          { title: "Piece unavailable | Frank Jewelry Store" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${product.name} | Frank Jewelry Store`;
    const description = product.tagline;
    const url = `/shop/${params.slug}`;
    // og:image must be a static image — if the product's primary media is a
    // video, fall back to its poster frame instead of linking a video file
    // (which most link-preview crawlers can't render as an image).
    const primaryMedia = product.images[0];
    const shareImage =
      primaryMedia?.kind === "image" ? primaryMedia.url : primaryMedia?.poster;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "product" },
        ...(shareImage
          ? [
              { property: "og:image", content: shareImage },
              { name: "twitter:image", content: shareImage },
            ]
          : []),
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            sku: product.sku,
            description: product.description,
            material: product.material,
            brand: { "@type": "Brand", name: "Frank Jewelry Store" },
            offers: {
              "@type": "Offer",
              availability: product.inStock
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
              // priceCurrency and price must be provided together; publishing a
              // currency with no numeric price produces an incomplete Offer that
              // can trigger Google Rich Results warnings. Most pieces here are
              // "Price on request", so we omit both unless a real price exists.
              ...(product.price
                ? {
                    priceCurrency: "NGN",
                    price: product.price.replace(/[^\d.]/g, ""),
                  }
                : {}),
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Shop", item: "/shop" },
              { "@type": "ListItem", position: 2, name: product.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { isSaved, toggleWishlist, markViewed, hydrated } = useClientStore();
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const related = relatedProducts(product);
  const saved = hydrated && isSaved(product.slug);
  const active: Media | undefined = product.images[activeIndex];

  useEffect(() => {
    setActiveIndex(0);
    markViewed(product.slug);
    window.scrollTo({ top: 0 });
  }, [product.slug, markViewed]);

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 lg:px-10 lg:py-20">
      <nav aria-label="Breadcrumb" className="text-[0.62rem] uppercase tracking-[0.22em]">
        <ol className="flex flex-wrap items-center gap-2 text-muted-foreground">
          <li>
            <Link to="/shop" className="transition-colors hover:text-gold">
              Shop
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link
              to="/shop"
              search={{ category: product.category }}
              className="transition-colors hover:text-gold"
            >
              {categoryName(product.category)}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-gold">{product.name}</li>
        </ol>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <button
            type="button"
            onClick={() => setZoomOpen(true)}
            aria-label={`Open fullscreen view of ${product.name}`}
            className="group block w-full cursor-zoom-in border border-border/60"
          >
            <MediaFrame
              media={active}
              ratio="1 / 1"
              priority
              imgClassName="transition-transform duration-[1200ms] group-hover:scale-[1.04]"
            />
          </button>

          {product.images.length > 1 ? (
            <ul className="mt-3 flex gap-3 overflow-x-auto pb-1">
              {product.images.map((media, index) => (
                <li key={media.url} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View media ${index + 1}`}
                    aria-current={index === activeIndex}
                    className={`block w-20 border transition-colors duration-500 ${
                      index === activeIndex ? "border-gold" : "border-border/60 hover:border-gold/50"
                    }`}
                  >
                    <MediaFrame media={media} ratio="1 / 1" />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}

          <p className="mt-4 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
            Tap the image for fullscreen detail
          </p>
        </div>

        <div>
          <Reveal>
            <p className="eyebrow">{product.material}</p>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl">{product.name}</h1>
            <p className="mt-4 font-display text-2xl text-gold-soft">
              {product.price ?? "Price on request"}
            </p>
            <div className="rule-gold mt-7 w-24" />
            <p className="mt-7 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <ul className="mt-8 space-y-3 border-t border-border/50 pt-7">
              {product.details.map((detail) => (
                <li key={detail} className="flex gap-3 text-sm text-ivory/80">
                  <span aria-hidden className="text-gold">
                    ✦
                  </span>
                  {detail}
                </li>
              ))}
              <li className="flex gap-3 text-sm text-ivory/80">
                <span aria-hidden className="text-gold">
                  ✦
                </span>
                Reference {product.sku} · Worldwide delivery · Bank transfer or cash
              </li>
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={productEnquiry(product.name)}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-14 flex-1 items-center justify-center bg-gold px-8 text-[0.68rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90"
              >
                Order on WhatsApp
              </a>
              <button
                type="button"
                onClick={() => toggleWishlist(product.slug)}
                aria-pressed={saved}
                className="glass-panel flex min-h-14 items-center justify-center px-8 text-[0.68rem] uppercase tracking-[0.24em] text-ivory transition-colors duration-500 hover:border-gold/60 hover:text-gold"
              >
                {saved ? "♥ Saved" : "♡ Save Piece"}
              </button>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              Your WhatsApp message is pre-written with this piece's name, so you can send it
              in one tap. We'll confirm availability, weight and delivery before payment.
            </p>
          </Reveal>
        </div>
      </div>

      {related.length ? (
        <section className="mt-24 border-t border-border/50 pt-16">
          <Reveal>
            <p className="eyebrow">You May Also Consider</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">Related pieces</h2>
          </Reveal>
          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal as="li" key={item.slug} delay={index * 90}>
                <ProductCard product={item} />
              </Reveal>
            ))}
          </ul>
        </section>
      ) : null}

      {zoomOpen && active ? (
        <Lightbox
          media={product.images}
          index={activeIndex}
          onIndexChange={setActiveIndex}
          onClose={() => setZoomOpen(false)}
          label={product.name}
        />
      ) : null}
    </div>
  );
}

function Lightbox({
  media,
  index,
  onIndexChange,
  onClose,
  label,
}: {
  media: Media[];
  index: number;
  onIndexChange: (next: number) => void;
  onClose: () => void;
  label: string;
}) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // Runs once on mount/unmount: move focus in, lock scroll, and restore
  // focus to whatever triggered the lightbox when it closes. Kept separate
  // from the keydown handler below so arrow-key navigation (which changes
  // `index`) doesn't re-steal focus or overwrite the "previously focused"
  // element on every keypress.
  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onIndexChange((index + 1) % media.length);
      if (event.key === "ArrowLeft") onIndexChange((index - 1 + media.length) % media.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, media.length, onClose, onIndexChange]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${label} — fullscreen view`}
      className="fixed inset-0 z-[110] flex flex-col bg-obsidian/97 backdrop-blur-md"
      onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
      onTouchEnd={(event) => {
        if (touchStart === null) return;
        const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStart;
        if (Math.abs(delta) > 50) {
          onIndexChange(
            delta < 0 ? (index + 1) % media.length : (index - 1 + media.length) % media.length,
          );
        }
        setTouchStart(null);
      }}
    >
      <div className="flex items-center justify-between px-5 py-4">
        <p className="text-[0.62rem] uppercase tracking-[0.24em] text-gold">
          {label} — {index + 1}/{media.length}
        </p>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close fullscreen view"
          className="flex h-11 w-11 items-center justify-center border border-border/60 text-lg text-ivory transition-colors hover:text-gold"
        >
          <span aria-hidden>×</span>
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center overflow-auto px-3 pb-6">
        <div className="max-h-full w-full max-w-3xl">
          <MediaFrame media={media[index]} ratio="1 / 1" className="bg-transparent" imgClassName="object-contain" />
        </div>
      </div>

      {media.length > 1 ? (
        <div className="flex items-center justify-center gap-3 pb-8">
          <button
            type="button"
            onClick={() => onIndexChange((index - 1 + media.length) % media.length)}
            aria-label="Previous media"
            className="glass-panel flex h-12 w-12 items-center justify-center text-gold"
          >
            <span aria-hidden>←</span>
          </button>
          <button
            type="button"
            onClick={() => onIndexChange((index + 1) % media.length)}
            aria-label="Next media"
            className="glass-panel flex h-12 w-12 items-center justify-center text-gold"
          >
            <span aria-hidden>→</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
