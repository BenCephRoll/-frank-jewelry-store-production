import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { MediaFrame } from "@/components/MediaFrame";
import { brand, galleryMedia, whatsappLink } from "@/data/catalog";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Frank Jewelry Store | WhatsApp, Email & Socials" },
      {
        name: "description",
        content:
          "Contact Frank Jewelry Store on WhatsApp 09123660596 or by email at frankjewelrystore@gmail.com. Worldwide delivery, bank transfer or cash accepted.",
      },
      { property: "og:title", content: "Contact Frank Jewelry Store" },
      {
        property: "og:description",
        content: "Reach us on WhatsApp, email, Instagram or TikTok — we reply personally.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
      <Reveal>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-5 max-w-2xl font-display text-5xl sm:text-6xl">
          One message away
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          WhatsApp is the fastest way to reach us. Send a piece name, a screenshot, or simply
          tell us the occasion.
        </p>
        <div className="rule-gold mt-8 w-24" />
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <ul className="divide-y divide-border/50 border-y border-border/50">
              <ContactRow label="WhatsApp" value={brand.whatsapp} href={whatsappLink()} />
              <ContactRow label="Email" value={brand.email} href={`mailto:${brand.email}`} />
              <ContactRow
                label="Instagram"
                value={`@${brand.instagram}`}
                href={`https://instagram.com/${brand.instagram}`}
              />
              <ContactRow
                label="TikTok"
                value={`@${brand.tiktok}`}
                href={`https://tiktok.com/@${brand.tiktok}`}
              />
              <ContactRow label="Delivery" value="Worldwide" />
              <ContactRow label="Payment" value={brand.payments.join(" · ")} />
            </ul>

            <a
              href={whatsappLink("Hello Frank Jewelry Store, I'd like to make an enquiry.")}
              target="_blank"
              rel="noreferrer"
              className="mt-10 flex min-h-14 items-center justify-center bg-gold px-10 text-[0.68rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90"
            >
              Chat on WhatsApp
            </a>

            <div className="glass-panel mt-6 p-7">
              <h2 className="font-display text-2xl">How ordering works</h2>
              <ol className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <li>
                  <span className="text-gold">01</span> — Send us the piece you want, or
                  describe what you're after.
                </li>
                <li>
                  <span className="text-gold">02</span> — We confirm availability, weight and
                  the exact price.
                </li>
                <li>
                  <span className="text-gold">03</span> — Pay by bank transfer or cash once
                  you're happy.
                </li>
                <li>
                  <span className="text-gold">04</span> — We package and dispatch, anywhere in
                  the world.
                </li>
              </ol>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <MediaFrame
            media={galleryMedia[3] ?? galleryMedia[0]}
            ratio="4 / 5"
            className="border border-border/60"
          />
        </Reveal>
      </div>
    </div>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <li className="flex flex-wrap items-baseline justify-between gap-3 py-5">
      <span className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="font-display text-xl text-ivory transition-colors duration-500 hover:text-gold"
        >
          {value}
        </a>
      ) : (
        <span className="font-display text-xl text-ivory">{value}</span>
      )}
    </li>
  );
}
