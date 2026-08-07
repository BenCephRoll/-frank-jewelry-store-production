import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { MediaFrame } from "@/components/MediaFrame";
import { galleryMedia, whatsappLink } from "@/data/catalog";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials | Frank Jewelry Store" },
      {
        name: "description",
        content:
          "What clients say about buying gold, diamond and steel jewelry from Frank Jewelry Store — quality, honest weights and reliable worldwide delivery.",
      },
      { property: "og:title", content: "Client Testimonials | Frank Jewelry Store" },
      {
        property: "og:description",
        content: "Real words from clients who wear our pieces every day.",
      },
      { property: "og:url", content: "/testimonials" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

const testimonials = [
  {
    quote:
      "The cuban chain is heavier and cleaner than I expected from photos. It sits perfectly and hasn't lost a shade of colour.",
    name: "Daniel O.",
    detail: "Gold Cuban Chain",
  },
  {
    quote:
      "I asked for something for my wife's birthday and got honest advice rather than a sales pitch. The butterfly set was exactly right.",
    name: "Amaka E.",
    detail: "Diamond Butterfly Set",
  },
  {
    quote:
      "Ordered from abroad and was nervous about it. They confirmed everything on WhatsApp first and it arrived well packed.",
    name: "Kelvin A.",
    detail: "Worldwide Delivery",
  },
  {
    quote:
      "Bought two watches and a bangle. Finish is excellent for the price and they still look new months later.",
    name: "Tunde B.",
    detail: "Two-Tone Wristwatch",
  },
  {
    quote:
      "What I appreciate most is that they tell you what a piece actually is. No pretending steel is gold.",
    name: "Grace N.",
    detail: "Steel Pendant Necklace",
  },
  {
    quote:
      "Fast replies, clear pricing, and the layered chains photograph exactly as they look in person.",
    name: "Ibrahim S.",
    detail: "Layered Pendant Chains",
  },
];

function Testimonials() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
      <Reveal>
        <p className="eyebrow">Testimonials</p>
        <h1 className="mt-5 max-w-2xl font-display text-5xl sm:text-6xl">
          Words from the people wearing it
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          The strongest thing we own is our reputation. These are the clients who built it.
        </p>
        <div className="rule-gold mt-8 w-24" />
        <p className="mt-6 max-w-xl border border-gold/20 bg-onyx px-5 py-4 text-xs leading-relaxed text-muted-foreground">
          <span className="text-gold">Sample content:</span> the quotes below are illustrative
          placeholders showing how client reviews will appear on this page. Replace them with
          real, verifiable testimonials before launch.
        </p>
      </Reveal>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal as="li" key={item.name} delay={(index % 3) * 90}>
            <figure className="glass-panel flex h-full flex-col justify-between p-7">
              <div>
                <span aria-hidden className="font-display text-4xl text-gold/70">
                  “
                </span>
                <blockquote className="mt-2 text-sm leading-relaxed text-ivory/85">
                  {item.quote}
                </blockquote>
              </div>
              <figcaption className="mt-7 border-t border-border/50 pt-5">
                <p className="font-display text-xl">{item.name}</p>
                <p className="mt-1 text-[0.6rem] uppercase tracking-[0.22em] text-gold/80">
                  {item.detail}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>

      <section className="mt-24 grid gap-10 border-t border-border/50 pt-16 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl">
            Your piece could be the next one talked about
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Tell us what you're looking for and we'll shortlist options with real photos of
            what's in stock today.
          </p>
          <a
            href={whatsappLink("Hello, I read your testimonials and I'd like to order.")}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex min-h-13 items-center bg-gold px-9 text-[0.65rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90"
          >
            Message the Store
          </a>
        </Reveal>
        <Reveal delay={120}>
          <MediaFrame
            media={galleryMedia[1]}
            ratio="4 / 5"
            className="border border-border/60"
          />
        </Reveal>
      </section>
    </div>
  );
}
