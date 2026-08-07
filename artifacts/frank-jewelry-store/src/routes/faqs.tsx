import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { brand, whatsappLink } from "@/data/catalog";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Frank Jewelry Store" },
      {
        name: "description",
        content:
          "Answers on authenticity, pricing, payment by bank transfer or cash, worldwide delivery times and jewelry care from Frank Jewelry Store.",
      },
      { property: "og:title", content: "FAQs | Frank Jewelry Store" },
      {
        property: "og:description",
        content: "Authenticity, payment, delivery and care — answered clearly.",
      },
      { property: "og:url", content: "/faqs" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
    ],
  }),
  component: Faqs,
});

const faqs = [
  {
    q: "Is your jewelry real gold and real diamond?",
    a: "We stock both fine and fashion jewelry, and we always tell you which is which. Real gold and real diamond pieces are described as such, and steel or fashion pieces are labelled honestly and priced accordingly.",
  },
  {
    q: "Why are prices shown as on request?",
    a: "Gold and diamond prices move with weight and market rates. Rather than publish a figure that goes out of date, we confirm the exact price on WhatsApp when you enquire about a specific piece.",
  },
  {
    q: "How do I place an order?",
    a: "Open any product and tap Order on WhatsApp. The message is pre-written with the piece name, so you only need to send it. We then confirm availability, price and delivery before any payment.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Bank transfer and cash. Payment details are shared directly on WhatsApp once your piece and total are confirmed.",
  },
  {
    q: "Do you deliver worldwide?",
    a: "Yes. We ship worldwide. Send us your city and we will confirm the delivery method, packaging and estimated timing before you pay.",
  },
  {
    q: "Can I request a specific size, length or weight?",
    a: "Often, yes. Chain lengths, ring sizes and bangle sizes can frequently be matched from stock or sourced. Message us with what you need and we will tell you what is possible.",
  },
  {
    q: "How should I care for my piece?",
    a: "Keep jewelry away from perfume, chlorine and harsh cleaners. Wipe with a soft dry cloth after wear and store pieces separately so they do not scratch each other.",
  },
  {
    q: "Can I see more photos or a video before buying?",
    a: "Always. We will film or photograph the exact piece in stock and send it to you on WhatsApp before you commit.",
  },
];

function Faqs() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 lg:px-10 lg:py-24">
      <Reveal>
        <p className="eyebrow">FAQs</p>
        <h1 className="mt-5 font-display text-5xl sm:text-6xl">Questions, answered</h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          If anything is still unclear, message us — we would rather answer than have you
          guess.
        </p>
        <div className="rule-gold mt-8 w-24" />
      </Reveal>

      <ul className="mt-14 divide-y divide-border/50 border-y border-border/50">
        {faqs.map((faq, index) => (
          <Reveal as="li" key={faq.q} delay={(index % 4) * 70}>
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <h2 className="font-display text-xl transition-colors duration-500 group-open:text-gold sm:text-2xl">
                  {faq.q}
                </h2>
                <span
                  aria-hidden
                  className="mt-1 shrink-0 text-gold transition-transform duration-500 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </p>
            </details>
          </Reveal>
        ))}
      </ul>

      <section className="mt-16 border border-gold/20 bg-onyx p-8 text-center lg:p-12">
        <Reveal>
          <h2 className="font-display text-3xl">Still have a question?</h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Message {brand.whatsapp} on WhatsApp, or email {brand.email}. We reply personally.
          </p>
          <a
            href={whatsappLink("Hello, I have a question about your jewelry.")}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-13 items-center bg-gold px-10 text-[0.65rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90"
          >
            Ask on WhatsApp
          </a>
        </Reveal>
      </section>
    </div>
  );
}
