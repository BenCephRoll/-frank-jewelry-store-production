import { createFileRoute } from "@tanstack/react-router";
import { MediaFrame } from "@/components/MediaFrame";
import { Reveal } from "@/components/Reveal";
import { brandFilms, galleryMedia, whatsappLink } from "@/data/catalog";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Frank Jewelry Store" },
      {
        name: "description",
        content:
          "A visual gallery of real Frank Jewelry Store pieces — gold cuban and rope chains, diamond butterfly sets, steel pendants and two-tone wristwatches.",
      },
      { property: "og:title", content: "Gallery | Frank Jewelry Store" },
      {
        property: "og:description",
        content: "Real pieces, real clients — photographed and filmed in store.",
      },
      { property: "og:url", content: "/gallery" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
      <Reveal>
        <p className="eyebrow">Gallery</p>
        <h1 className="mt-5 max-w-2xl font-display text-5xl sm:text-6xl">
          Seen on our clients
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Nothing here is a stock photo. Every frame is a piece that passed through the store
          and onto someone who wanted it.
        </p>
        <div className="rule-gold mt-8 w-24" />
      </Reveal>

      <ul className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {galleryMedia.map((media, index) => (
          <Reveal as="li" key={media.url} delay={(index % 3) * 80} className="break-inside-avoid">
            <MediaFrame
              media={media}
              ratio="auto"
              className="border border-border/60"
              imgClassName="transition-transform duration-[1400ms] hover:scale-[1.03]"
            />
          </Reveal>
        ))}
      </ul>

      <section className="mt-24 border-t border-border/50 pt-16">
        <Reveal>
          <p className="eyebrow">Brand Films</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">Motion, unedited</h2>
        </Reveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {brandFilms.map((film, index) => (
            <Reveal as="li" key={film.url} delay={index * 100}>
              <MediaFrame media={film} ratio="9 / 16" className="border border-border/60" />
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="mt-24 border border-gold/20 bg-onyx p-8 text-center lg:p-14">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">Saw something you liked?</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Send us a screenshot of any photo in this gallery and we'll tell you exactly what
            it is, whether it's in stock, and what it costs.
          </p>
          <a
            href={whatsappLink("Hello, I saw a piece in your gallery I'd like details on.")}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-13 items-center bg-gold px-10 text-[0.65rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90"
          >
            Ask About a Piece
          </a>
        </Reveal>
      </section>
    </div>
  );
}
