import { createFileRoute } from "@tanstack/react-router";
import { MediaFrame } from "@/components/MediaFrame";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Atmosphere";
import { brand, brandFilms, galleryMedia, materials, whatsappLink } from "@/data/catalog";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Frank Jewelry Store | Our Standard of Craft" },
      {
        name: "description",
        content:
          "Frank Jewelry Store supplies real gold, diamond, steel and fashion jewelry with worldwide delivery, honest weights and personal guidance on every order.",
      },
      { property: "og:title", content: "About Frank Jewelry Store" },
      {
        property: "og:description",
        content:
          "Real materials, honest weights, worldwide delivery — the standard behind every piece we sell.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    title: "Material First",
    body: "We only stock what we can stand behind: real gold, real diamonds, surgical-grade steel, and fashion pieces that are honestly described as fashion pieces.",
  },
  {
    title: "Weight You Can Feel",
    body: "A chain should have presence. We choose thickness and drape carefully, so a piece looks as substantial on you as it does in the tray.",
  },
  {
    title: "One-to-One Service",
    body: "There is no call centre. When you message, you reach the store — and you get a straight answer on stock, price, and timing.",
  },
];


function About() {
  const portrait = galleryMedia[0];
  const detail = galleryMedia[2];

  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
        <Reveal>
          <p className="eyebrow">About Us</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl">
            A small store with an
            <span className="block text-gold-leaf">uncompromising standard.</span>
          </h1>
          <div className="rule-gold mt-8 w-24" />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <MediaFrame media={portrait} ratio="4 / 5" className="border border-border/60" />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-ivory/85">{brand.about}</p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Frank Jewelry Store began the way most good jewelers do — one client at a time,
              with pieces chosen by hand rather than ordered from a catalogue. That has not
              changed. What has changed is reach: today a chain photographed on our counter
              can be around someone's neck on another continent within days.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              We keep the range deliberately broad — necklaces, bracelets, rings, earrings,
              wristwatches, waist chains, leg chains, trouser chains and anklets — because
              taste is personal. What stays constant is the finish, the honesty of the
              description, and the care taken with the person buying.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border/50 pt-10">
              <Counter value={9} label="Categories Stocked" />
              <Counter value={100} suffix="%" label="Verified Materials" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border/40 bg-onyx">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <p className="eyebrow">What We Stand For</p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl sm:text-5xl">
              Three things we refuse to compromise
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-5 lg:grid-cols-3">
            {values.map((value, index) => (
              <Reveal as="li" key={value.title} delay={index * 100}>
                <div className="glass-panel h-full p-7">
                  <span aria-hidden className="text-lg text-gold">
                    ✦
                  </span>
                  <h3 className="mt-4 font-display text-2xl">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <p className="eyebrow">Materials</p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">
              Described exactly as it is
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              We never blur the line between fine and fashion. If a piece is real gold, we say
              so. If it is steel or a fashion finish, we say that too — and price it honestly.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {materials.map((material) => (
                <li
                  key={material}
                  className="border border-gold/30 px-4 py-2 text-[0.62rem] uppercase tracking-[0.2em] text-gold/90"
                >
                  {material}
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink("Hello, I'd like to ask about materials and authenticity.")}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex min-h-13 items-center border border-gold/50 px-9 text-[0.65rem] uppercase tracking-[0.24em] text-gold transition-colors duration-500 hover:bg-gold hover:text-primary-foreground"
            >
              Ask About Authenticity
            </a>
          </Reveal>
          <Reveal delay={120}>
            <MediaFrame media={detail} ratio="1 / 1" className="border border-border/60" />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border/40 bg-onyx">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <p className="eyebrow">Inside the Store</p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">Filmed on the floor</h2>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-3">
            {brandFilms.map((film, index) => (
              <Reveal as="li" key={film.url} delay={index * 100}>
                <MediaFrame media={film} ratio="9 / 16" className="border border-border/60" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
