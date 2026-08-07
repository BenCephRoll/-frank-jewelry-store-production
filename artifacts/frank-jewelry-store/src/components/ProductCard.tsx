import { Link } from "@tanstack/react-router";
import { MediaFrame } from "@/components/MediaFrame";
import { useClientStore } from "@/lib/client-store";
import { categoryName, productEnquiry, type Product } from "@/data/catalog";

const badgeLabel: Record<string, string> = {
  new: "New Arrival",
  bestseller: "Best Seller",
};

export function ProductCard({
  product,
  onQuickView,
  priority = false,
}: {
  product: Product;
  onQuickView?: (product: Product) => void;
  priority?: boolean;
}) {
  const { isSaved, toggleWishlist, hydrated } = useClientStore();
  const saved = hydrated && isSaved(product.slug);

  return (
    <article className="group relative flex h-full flex-col border border-border/60 bg-card transition-[border-color,transform,box-shadow] duration-700 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-luxe)]">
      <div className="relative overflow-hidden">
        <Link
          to="/shop/$slug"
          params={{ slug: product.slug }}
          aria-label={`View ${product.name}`}
        >
          <MediaFrame
            media={product.images[0]}
            priority={priority}
            imgClassName="transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
        </Link>

        <div className="pointer-events-none absolute left-0 top-0 flex flex-col items-start gap-2 p-3">
          {product.badges.map((badge) => (
            <span
              key={badge}
              className="glass-panel px-3 py-1 text-[0.6rem] uppercase tracking-[0.22em] text-gold-soft"
            >
              {badgeLabel[badge]}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => toggleWishlist(product.slug)}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          className="glass-panel absolute right-3 top-3 flex h-11 w-11 items-center justify-center text-base transition-colors duration-500 hover:border-gold/60"
        >
          <span aria-hidden className={saved ? "text-gold" : "text-muted-foreground"}>
            {saved ? "♥" : "♡"}
          </span>
        </button>

        {onQuickView ? (
          <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-y-0 group-hover:opacity-100 max-md:translate-y-0 max-md:opacity-100">
            <button
              type="button"
              onClick={() => onQuickView(product)}
              className="glass-panel w-full py-3 text-[0.65rem] uppercase tracking-[0.24em] text-ivory transition-colors duration-500 hover:border-gold/60 hover:text-gold"
            >
              Quick View
            </button>
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="eyebrow">{categoryName(product.category)}</p>
        <h3 className="text-2xl leading-tight">
          <Link
            to="/shop/$slug"
            params={{ slug: product.slug }}
            className="transition-colors duration-500 hover:text-gold"
          >
            {product.name}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{product.tagline}</p>

        <div className="mt-auto space-y-4 pt-2">
          <p className="font-display text-lg text-gold-soft">
            {product.price ?? "Price on request"}
          </p>
          <a
            href={productEnquiry(product.name)}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-12 items-center justify-center border border-gold/45 px-4 text-[0.65rem] uppercase tracking-[0.24em] text-gold transition-colors duration-500 hover:bg-gold hover:text-primary-foreground"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
