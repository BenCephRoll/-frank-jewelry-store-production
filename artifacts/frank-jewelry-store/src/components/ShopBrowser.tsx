import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { QuickView } from "@/components/QuickView";
import { EmptyState } from "@/components/Atmosphere";
import { Reveal } from "@/components/Reveal";
import {
  categories,
  materials,
  products as allProducts,
  whatsappLink,
  type Product,
} from "@/data/catalog";

const PAGE_SIZE = 12;

/**
 * Catalog browser: search, category and material filters plus
 * progressive loading. Scales from 8 pieces to 1,000+ without
 * changing the layout.
 */
export function ShopBrowser({ initialCategory = "all" }: { initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [material, setMaterial] = useState("all");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [quickView, setQuickView] = useState<Product | null>(null);
  const navigate = useNavigate();

  /**
   * The category filter is seeded from the URL on first render, but TanStack
   * Router doesn't remount this component on an in-route search-param change
   * (e.g. clicking a category link in the footer while already on /shop).
   * Re-sync local state whenever the URL-derived prop changes so the filter
   * chips and results stay correct.
   */
  useEffect(() => {
    setCategory(initialCategory);
    setVisible(PAGE_SIZE);
  }, [initialCategory]);

  /** Keeps the URL shareable whenever the category filter changes. */
  const chooseCategory = (slug: string) => {
    setCategory(slug);
    setVisible(PAGE_SIZE);
    void navigate({
      to: "/shop",
      search: slug === "all" ? {} : { category: slug },
      replace: true,
      resetScroll: false,
    });
  };

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return allProducts.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const matchesMaterial = material === "all" || product.material === material;
      const matchesQuery =
        !needle ||
        [product.name, product.tagline, product.description, product.material]
          .join(" ")
          .toLowerCase()
          .includes(needle);
      return matchesCategory && matchesMaterial && matchesQuery;
    });
  }, [query, category, material]);

  const shown = results.slice(0, visible);

  const resetPaging = () => setVisible(PAGE_SIZE);

  return (
    <div>
      {/*
        top-[76px] matches SiteHeader's scrolled height (py-3 + content).
        By the time this filter bar reaches the top of the viewport the user
        has already scrolled past the hero, so the header is reliably in its
        shorter "scrolled" state — if SiteHeader's scrolled padding changes,
        update this value to match.
      */}
      <div className="glass-panel sticky top-[76px] z-[60] flex flex-col gap-3 p-4 sm:gap-5 sm:p-5">
        <div className="relative">
          <label htmlFor="shop-search" className="sr-only">
            Search the collection
          </label>
          <input
            id="shop-search"
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              resetPaging();
            }}
            placeholder="Search chains, watches, diamonds…"
            className="min-h-13 w-full border border-border/70 bg-obsidian/60 px-5 text-sm text-ivory placeholder:text-muted-foreground/70 focus:border-gold/60"
          />
        </div>

        <div
          role="group"
          aria-label="Filter by category"
          className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
        >
          <FilterChip
            label="All Pieces"
            active={category === "all"}
            onClick={() => chooseCategory("all")}
          />
          {categories.map((item) => (
            <FilterChip
              key={item.slug}
              label={item.name}
              active={category === item.slug}
              onClick={() => chooseCategory(item.slug)}
            />
          ))}
        </div>

        <div
          role="group"
          aria-label="Filter by material"
          className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
        >
          <FilterChip
            label="All Materials"
            active={material === "all"}
            onClick={() => {
              setMaterial("all");
              resetPaging();
            }}
          />
          {materials.map((item) => (
            <FilterChip
              key={item}
              label={item}
              active={material === item}
              onClick={() => {
                setMaterial(item);
                resetPaging();
              }}
            />
          ))}
        </div>
      </div>

      <p aria-live="polite" className="mt-8 text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
        {results.length} {results.length === 1 ? "piece" : "pieces"} available
      </p>

      {results.length === 0 ? (
        <div className="mt-8">
          <EmptyState
            title="New pieces are arriving soon."
            body="Nothing matches that search yet. Tell us what you're looking for on WhatsApp — we source pieces to order every week."
            action={
              <a
                href={whatsappLink("Hello, I'm looking for a specific piece.")}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex min-h-13 items-center border border-gold/50 px-7 text-[0.65rem] uppercase tracking-[0.24em] text-gold transition-colors duration-500 hover:bg-gold hover:text-primary-foreground"
              >
                Request a Piece
              </a>
            }
          />
        </div>
      ) : (
        <>
          <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((product, index) => (
              <Reveal as="li" key={product.slug} delay={(index % 3) * 90}>
                <ProductCard
                  product={product}
                  onQuickView={setQuickView}
                  priority={index < 3}
                />
              </Reveal>
            ))}
          </ul>

          {visible < results.length ? (
            <div className="mt-14 flex justify-center">
              <button
                type="button"
                onClick={() => setVisible((value) => value + PAGE_SIZE)}
                className="min-h-13 border border-gold/50 px-10 text-[0.65rem] uppercase tracking-[0.24em] text-gold transition-colors duration-500 hover:bg-gold hover:text-primary-foreground"
              >
                Reveal More
              </button>
            </div>
          ) : null}
        </>
      )}

      <QuickView product={quickView} onClose={() => setQuickView(null)} />
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`min-h-11 shrink-0 whitespace-nowrap border px-4 text-[0.62rem] uppercase tracking-[0.2em] transition-colors duration-500 ${
        active
          ? "border-gold bg-gold/12 text-gold"
          : "border-border/60 text-ivory/70 hover:border-gold/50 hover:text-gold"
      }`}
    >
      {label}
    </button>
  );
}
