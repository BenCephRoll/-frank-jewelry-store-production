import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { MediaFrame } from "@/components/MediaFrame";
import { categoryName, productEnquiry, type Product } from "@/data/catalog";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function QuickView({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!product) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const node = dialogRef.current;
      if (!node) return;
      const focusable = Array.from(node.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view — ${product.name}`}
      className="fixed inset-0 z-[90] flex items-end justify-center bg-obsidian/85 p-0 backdrop-blur-sm sm:items-center sm:p-6"
    >
      <button
        type="button"
        aria-label="Close quick view"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        className="glass-panel relative max-h-[92dvh] w-full max-w-4xl animate-fade-up overflow-y-auto bg-card"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close quick view"
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center border border-border/60 bg-obsidian/70 text-lg text-ivory transition-colors hover:text-gold"
        >
          <span aria-hidden>×</span>
        </button>
        <div className="grid gap-0 sm:grid-cols-2">
          <MediaFrame media={product.images[0]} ratio="1 / 1" />
          <div className="flex flex-col gap-4 p-6 sm:p-8">
            <p className="eyebrow">{categoryName(product.category)}</p>
            <h2 className="text-3xl sm:text-4xl">{product.name}</h2>
            <div className="rule-gold w-20" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>
            <p className="font-display text-xl text-gold-soft">
              {product.price ?? "Price on request"}
            </p>
            <div className="mt-auto flex flex-col gap-3 pt-4">
              <a
                href={productEnquiry(product.name)}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-13 items-center justify-center bg-gold px-6 text-[0.68rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90"
              >
                Order on WhatsApp
              </a>
              <Link
                to="/shop/$slug"
                params={{ slug: product.slug }}
                onClick={onClose}
                className="flex min-h-13 items-center justify-center border border-gold/45 px-6 text-[0.68rem] uppercase tracking-[0.24em] text-gold transition-colors duration-500 hover:bg-gold/10"
              >
                View Full Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
