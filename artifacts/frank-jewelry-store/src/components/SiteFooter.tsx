import { Link } from "@tanstack/react-router";
import { brand, categories, whatsappLink } from "@/data/catalog";

const quickLinks = [
  { to: "/shop", label: "Shop All" },
  { to: "/collections", label: "Collections" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "Our Story" },
  { to: "/testimonials", label: "Client Reviews" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative border-t border-gold/15 bg-onyx">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <p className="font-display text-3xl tracking-[0.06em] text-ivory">FRANK</p>
            <p className="mt-2 text-[0.6rem] uppercase tracking-[0.34em] text-gold/80">
              Jewelry Store
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {brand.about}
            </p>
            <a
              href={whatsappLink("Hello Frank Jewelry Store, I'd like to place an order.")}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex min-h-13 items-center justify-center bg-gold px-7 text-[0.65rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90"
            >
              Order on WhatsApp
            </a>
          </div>

          <nav aria-label="Quick links">
            <h2 className="eyebrow">Quick Links</h2>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ivory/75 transition-colors duration-500 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Collections">
            <h2 className="eyebrow">Collections</h2>
            <ul className="mt-6 space-y-3">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    to="/shop"
                    search={{ category: category.slug }}
                    className="text-sm text-ivory/75 transition-colors duration-500 hover:text-gold"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-8">
            <div>
              <h2 className="eyebrow">Contact</h2>
              <ul className="mt-6 space-y-3 text-sm text-ivory/75">
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-500 hover:text-gold"
                  >
                    WhatsApp — {brand.whatsapp}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${brand.email}`}
                    className="break-all transition-colors duration-500 hover:text-gold"
                  >
                    {brand.email}
                  </a>
                </li>
                <li>Worldwide delivery</li>
                <li>Bank Transfer &amp; Cash accepted</li>
              </ul>
            </div>

            <div>
              <h2 className="eyebrow">Business Hours</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Monday – Saturday, by appointment and walk-in.
                <br />
                WhatsApp enquiries answered daily.
                <br />
                <span className="text-ivory/60">
                  Exact opening hours to be confirmed by the store.
                </span>
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Social</h2>
              <div className="mt-4 flex gap-3">
                <a
                  href={`https://instagram.com/${brand.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-11 items-center border border-border/60 px-4 text-[0.62rem] uppercase tracking-[0.2em] text-ivory/80 transition-colors duration-500 hover:border-gold/60 hover:text-gold"
                >
                  Instagram
                </a>
                <a
                  href={`https://tiktok.com/@${brand.tiktok}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-11 items-center border border-border/60 px-4 text-[0.62rem] uppercase tracking-[0.2em] text-ivory/80 transition-colors duration-500 hover:border-gold/60 hover:text-gold"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border/50 pt-10">
          <div className="glass-panel flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl">First Access to New Pieces</h2>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                Join the list for new arrivals and private drops before they reach the shop
                floor.
              </p>
            </div>
            <form
              className="flex w-full max-w-sm flex-col gap-3 sm:flex-row"
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.currentTarget;
                const input = form.elements.namedItem("newsletter-email") as HTMLInputElement | null;
                const email = input?.value.trim();
                window.open(
                  whatsappLink(
                    email
                      ? `Hello, please add ${email} to your new arrivals list.`
                      : "Hello, please add me to your new arrivals list.",
                  ),
                  "_blank",
                  "noreferrer",
                );
                form.reset();
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="newsletter-email"
                type="email"
                required
                placeholder="your@email.com"
                className="min-h-12 w-full border border-border/70 bg-obsidian/60 px-4 text-sm text-ivory placeholder:text-muted-foreground/70 focus:border-gold/60"
              />
              <button
                type="submit"
                className="min-h-12 shrink-0 border border-gold/50 px-6 text-[0.62rem] uppercase tracking-[0.22em] text-gold transition-colors duration-500 hover:bg-gold hover:text-primary-foreground"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="transition-colors duration-500 hover:text-gold"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
