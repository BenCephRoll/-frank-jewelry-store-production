import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MediaFrame } from "@/components/MediaFrame";
import { ProductCard } from "@/components/ProductCard";
import { QuickView } from "@/components/QuickView";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Atmosphere";
import {
  bestSellers,
  brand,
  brandFilms,
  categories,
  featuredProducts,
  heroMedia,
  whatsappLink,
  type Product,
} from "@/data/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Frank Jewelry Store | Gold, Diamond & Steel Jewelry Worldwide" },
      {
        name: "description",
        content:
          "Elegant gold, diamond, steel and fashion jewelry from Frank Jewelry Store. Necklaces, rings, bracelets and wristwatches with worldwide delivery — order on WhatsApp.",
      },
      {
        property: "og:title",
        content: "Frank Jewelry Store | Jewelry Worth Remembering",
      },
      {
        property: "og:description",
        content:
          "High-quality gold, diamond and steel jewelry with worldwide delivery. Order directly on WhatsApp.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      ...(heroMedia.poster
        ? [{ rel: "preload", as: "image", href: heroMedia.poster, fetchPriority: "high" as const }]
        : []),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JewelryStore",
          name: brand.name,
          description: brand.about,
          email: brand.email,
          telephone: brand.whatsapp,
          areaServed: "Worldwide",
          paymentAccepted: brand.payments.join(", "),
          sameAs: [
            `https://instagram.com/${brand.instagram}`,
            `https://tiktok.com/@${brand.tiktok}`,
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const promises = [
  {
    title: "Authenticity, Verified",
    body: "Real gold, real diamonds, and premium steel — every piece is confirmed before it leaves our hands.",
  },
  {
    title: "Worldwide Delivery",
    body: "From our counter to your door, anywhere in the world, packaged as carefully as it was selected.",
  },
  {
    title: "Personal Guidance",
    body: "Message us and speak to a real person who knows the stock, the weights, and what will suit you.",
  },
  {
    title: "Payment On Your Terms",
    body: "Bank transfer or cash — straightforward, transparent, and confirmed before dispatch.",
  },
];

function Home() {
  const [quickView, setQuickView] = useState<Product | null>(null);
  const featured = featuredProducts().slice(0, 6);
  const best = bestSellers().slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative -mt-20 flex min-h-[92dvh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <MediaFrame
            media={heroMedia}
            ratio="auto"
            priority
            className="h-full w-full"
            imgClassName="animate-slow-zoom"
          />
          <div className="surface-veil absolute inset-0" />
          <div className="absolute inset-0 bg-obsidian/35" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 lg:px-10 lg:pb-28">
          <Reveal>
            <p className="eyebrow">Est. Frank Jewelry Store</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Jewelry worth
              <span className="block text-gold-leaf">remembering.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ivory/80">
              Gold with weight. Diamonds with clarity. Steel with attitude. Chosen piece by
              piece, and delivered worldwide to the people who wear it best.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/shop"
                className="flex min-h-14 items-center justify-center bg-gold px-10 text-[0.68rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90"
              >
                Explore the Collection
              </Link>
              <a
                href={whatsappLink(
                  "Hello Frank Jewelry Store, I'd like help choosing a piece.",
                )}
                target="_blank"
                rel="noreferrer"
                className="glass-panel flex min-h-14 items-center justify-center px-10 text-[0.68rem] uppercase tracking-[0.24em] text-ivory transition-colors duration-500 hover:border-gold/60 hover:text-gold"
              >
                Order on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Marquee ──────────────────────────────────────── */}
      <div className="border-y border-gold/15 bg-onyx py-4">
        <p className="text-center text-[0.6rem] uppercase tracking-[0.3em] text-gold/85">
          Real Gold · Real Diamond · Steel · Fashion Jewelry · Wristwatches · Worldwide
          Delivery
        </p>
      </div>

      {/* ── Categories ───────────────────────────────────── */}
      <Section
        eyebrow="Browse by Category"
        title="Nine ways to be remembered"
        body="From heavyweight cuban links to leg chains and trouser chains, every category is built around the same standard of finish."
      >
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal as="li" key={category.slug} delay={(index % 3) * 80}>
              <Link
                to="/shop"
                search={{ category: category.slug }}
                className="group flex h-full flex-col justify-between border border-border/60 bg-card p-4 transition-[border-color,transform] duration-700 hover:-translate-y-1 hover:border-gold/50 sm:p-5"
              >
                <h3 className="font-display text-xl leading-tight transition-colors duration-500 group-hover:text-gold sm:text-2xl">
                  {category.name}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {category.blurb}
                </p>
                <span
                  aria-hidden
                  className="mt-5 text-[0.62rem] uppercase tracking-[0.22em] text-gold/80"
                >
                  View →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ── Featured ─────────────────────────────────────── */}
      <Section
        eyebrow="Featured Products"
        title="The pieces our clients ask for by name"
        body="Hand-selected from the current floor. When a piece sells, it is often gone until the next shipment — message us to reserve."
        tone="onyx"
      >
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product, index) => (
            <Reveal as="li" key={product.slug} delay={(index % 3) * 90}>
              <ProductCard product={product} onQuickView={setQuickView} />
            </Reveal>
          ))}
        </ul>
        <div className="mt-14 flex justify-center">
          <Link
            to="/shop"
            className="min-h-13 border border-gold/50 px-10 text-[0.65rem] uppercase leading-[3.25rem] tracking-[0.24em] text-gold transition-colors duration-500 hover:bg-gold hover:text-primary-foreground"
          >
            View All Pieces
          </Link>
        </div>
      </Section>

      {/* ── Why choose us + counters ─────────────────────── */}
      <Section
        eyebrow="Why Choose Us"
        title="Trust is the first thing we sell"
        body="Jewelry is bought on confidence. Everything we do is designed to make that decision easy."
      >
        <ul className="grid gap-5 sm:grid-cols-2">
          {promises.map((promise, index) => (
            <Reveal as="li" key={promise.title} delay={index * 90}>
              <div className="glass-panel h-full p-7">
                <span aria-hidden className="text-lg text-gold">
                  ✦
                </span>
                <h3 className="mt-4 font-display text-2xl">{promise.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {promise.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border/50 pt-14 lg:grid-cols-4">
          <Counter value={9} label="Jewelry Categories" />
          <Counter value={5} label="Material Standards" />
          <Counter value={100} suffix="%" label="Authenticity Checked" />
          <Counter value={24} suffix="/7" label="WhatsApp Enquiries" />
        </div>
      </Section>

      {/* ── Brand film ───────────────────────────────────── */}
      <Section
        eyebrow="In the Store"
        title="Filmed on the day it was collected"
        body="No studio lighting, no staging — real pieces, worn by the clients who chose them."
        tone="onyx"
      >
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {brandFilms.map((film, index) => (
            <Reveal as="li" key={film.url} delay={index * 100}>
              <MediaFrame media={film} ratio="9 / 16" className="border border-border/60" />
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ── Best sellers ─────────────────────────────────── */}
      <Section
        eyebrow="Best Sellers"
        title="Consistently chosen, rarely in stock long"
        body="These are the pieces that move fastest. If one is on the floor today, it may not be tomorrow."
      >
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {best.map((product, index) => (
            <Reveal as="li" key={product.slug} delay={(index % 3) * 90}>
              <ProductCard product={product} onQuickView={setQuickView} />
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ── Worldwide delivery ───────────────────────────── */}
      <section className="border-y border-gold/15 bg-onyx">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
          <Reveal>
            <p className="eyebrow">Worldwide Delivery</p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">
              Wherever you are, your piece can reach you
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              We ship worldwide. Send us a message with your city and the piece you want —
              we'll confirm availability, packaging and delivery details before any payment
              is made. Bank transfer and cash both accepted.
            </p>
            <a
              href={whatsappLink("Hello, I'd like to ask about delivery to my location.")}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex min-h-13 items-center bg-gold px-9 text-[0.65rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90"
            >
              Check Delivery to My City
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="glass-panel grid grid-cols-2 gap-px overflow-hidden">
              {[
                ["Delivery", "Worldwide"],
                ["Payment", "Bank Transfer · Cash"],
                ["Enquiries", brand.whatsapp],
                ["Email", brand.email],
              ].map(([label, value]) => (
                <div key={label} className="bg-obsidian/40 p-6">
                  <p className="eyebrow">{label}</p>
                  <p className="mt-3 break-words text-sm text-ivory/85">{value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-5 py-24 text-center lg:py-32">
        <Reveal>
          <p className="eyebrow">Ready When You Are</p>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl">
            Tell us the occasion.
            <span className="block text-gold-leaf">We'll find the piece.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            One message is all it takes. Send the name of a piece, a photo, or simply a
            budget — we'll take it from there.
          </p>
          <a
            href={whatsappLink("Hello Frank Jewelry Store, I'd like to place an order.")}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex min-h-14 items-center bg-gold px-12 text-[0.68rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90"
          >
            Start My Order
          </a>
        </Reveal>
      </section>

      <QuickView product={quickView} onClose={() => setQuickView(null)} />
    </>
  );
}

function Section({
  eyebrow,
  title,
  body,
  children,
  tone = "obsidian",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  children: React.ReactNode;
  tone?: "obsidian" | "onyx";
}) {
  return (
    <section className={tone === "onyx" ? "border-y border-border/40 bg-onyx" : ""}>
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-5 max-w-2xl font-display text-4xl sm:text-5xl">{title}</h2>
          {body ? (
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {body}
            </p>
          ) : null}
          <div className="rule-gold mt-8 w-24" />
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
