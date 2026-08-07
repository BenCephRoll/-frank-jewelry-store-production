import chainsDuoBusts from "@/assets/chains-duo-busts.jpg.asset.json";
import ropeChainsPendants from "@/assets/rope-chains-pendants.jpg.asset.json";
import butterflyDiamondSet from "@/assets/butterfly-diamond-set.jpg.asset.json";
import steelBallChainTray from "@/assets/steel-ball-chain-tray.jpg.asset.json";
import cubanDoubleLayer from "@/assets/cuban-double-layer.jpg.asset.json";
import cubanRopeLineup from "@/assets/cuban-rope-lineup.jpg.asset.json";
import goldWatchesBangles from "@/assets/gold-watches-bangles.jpg.asset.json";
import videoRopeChainWorn from "@/assets/video-rope-chain-worn.mp4.asset.json";
import videoStoreShowcase from "@/assets/video-store-showcase.mp4.asset.json";
import videoDoubleRopeJesus from "@/assets/video-double-rope-jesus.mp4.asset.json";
import posterRopeChainWorn from "@/assets/video-rope-chain-worn-poster.jpg.asset.json";
import posterStoreShowcase from "@/assets/video-store-showcase-poster.jpg.asset.json";
import posterDoubleRopeJesus from "@/assets/video-double-rope-jesus-poster.jpg.asset.json";
import steelBallChainTrayAlt from "@/assets/steel-ball-chain-tray-alt.jpg.asset.json";
import butterflyDiamondSetAlt from "@/assets/butterfly-diamond-set-alt.jpg.asset.json";
import blackSpikeTennisSet from "@/assets/black-spike-tennis-set.jpg.asset.json";
import goldCurbRopeBusts from "@/assets/gold-curb-rope-busts.jpg.asset.json";
import doubleRopeJesusPendants from "@/assets/double-rope-jesus-pendants.jpg.asset.json";
import pearlBangleWatches from "@/assets/pearl-bangle-watches.jpg.asset.json";
import steelTagCartel from "@/assets/steel-tag-cartel.jpg.asset.json";
import goldCoupleWatches from "@/assets/gold-couple-watches.jpg.asset.json";
import crystalHoopEarrings from "@/assets/crystal-hoop-earrings.jpg.asset.json";

/**
 * ─────────────────────────────────────────────────────────────
 * FRANK JEWELRY STORE — CATALOG SOURCE OF TRUTH
 * ─────────────────────────────────────────────────────────────
 * Everything the storefront renders (categories, materials,
 * products, collections) is derived from this file.
 *
 * TO ADD A PRODUCT: append an object to `products`.
 * TO REMOVE ONE: delete it — every grid, filter, collection and
 * product page updates automatically.
 * TO ADD A CATEGORY: append to `categories` and use its `slug`.
 * TO SWAP AN IMAGE: create the asset pointer and change `images`.
 * TO SET A PRICE: fill in `price` (leave undefined for
 * "Price on request", which keeps WhatsApp enquiries flowing).
 *
 * The shape below is intentionally future-proof: `stock`,
 * `sku` and `badges` are ready for inventory, admin dashboards
 * and multi-currency pricing without a redesign.
 */

export type MediaKind = "image" | "video";

export type Media = {
  kind: MediaKind;
  url: string;
  alt: string;
  poster?: string;
  /**
   * Intrinsic pixel dimensions of the asset (or its poster, for video).
   * Used to compute a natural aspect-ratio so masonry/"auto" layouts can
   * reserve the correct box size before the file finishes loading —
   * without this, ratio="auto" media has no intrinsic size until decoded,
   * which causes layout shift as the grid reflows around each image.
   */
  width?: number;
  height?: number;
};

export type Badge = "new" | "bestseller";

export type Product = {
  slug: string;
  name: string;
  sku: string;
  category: string;
  material: string;
  tagline: string;
  description: string;
  details: string[];
  images: Media[];
  badges: Badge[];
  featured?: boolean;
  price?: string;
  inStock: boolean;
};

export type Category = {
  slug: string;
  name: string;
  blurb: string;
};

export const brand = {
  name: "Frank Jewelry Store",
  tagline: "Jewelry Worth Remembering",
  about:
    "Frank Jewelry Store is your trusted destination for stylish and high-quality jewelry. We offer elegant, affordable pieces designed to add beauty, confidence, and sparkle to every occasion.",
  whatsapp: "09123660596",
  whatsappIntl: "2349123660596",
  email: "frankjewelrystore@gmail.com",
  instagram: "FrankJewelryStore",
  tiktok: "FrankJewelryStore",
  delivery: "Worldwide",
  payments: ["Bank Transfer", "Cash"],
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${brand.whatsappIntl}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const productEnquiry = (name: string) =>
  whatsappLink(`Hello, I'm interested in the ${name}.`);

export const categories: Category[] = [
  {
    slug: "necklaces",
    name: "Necklaces",
    blurb: "Curb, cuban and rope links weighted for presence.",
  },
  { slug: "rings", name: "Rings", blurb: "Statements made in a single gesture." },
  { slug: "bracelets", name: "Bracelets", blurb: "The quiet luxury of the wrist." },
  { slug: "earrings", name: "Earrings", blurb: "Light held close to the face." },
  {
    slug: "wristwatches",
    name: "Wristwatches",
    blurb: "Timepieces with a two-tone conscience.",
  },
  { slug: "waist-chains", name: "Waist Chains", blurb: "Adornment for the unseen hours." },
  { slug: "waist-belts", name: "Waist Belts", blurb: "Hardware finished like jewelry." },
  { slug: "leg-chains", name: "Leg Chains", blurb: "A whisper of gold in motion." },
  {
    slug: "trouser-chains",
    name: "Trouser Chains",
    blurb: "Streetwear tailoring, jeweller's finish.",
  },
];

export const materials = [
  "Real Gold",
  "Real Diamond",
  "Steel Jewelry",
  "Fashion Jewelry",
  "Wristwatches",
] as const;

export const products: Product[] = [
  {
    slug: "regent-double-curb-chain",
    name: "Regent Double-Curb Chain",
    sku: "FJS-NK-001",
    category: "necklaces",
    material: "Real Gold",
    tagline: "The chain that finishes an outfit before you speak.",
    description:
      "A double-curb weave drawn long and heavy, polished until each link carries its own light. Worn on the bust it reads formal; worn on a shirt it reads unmistakably yours. This is the piece clients return for, and the one they ask us to hold.",
    details: [
      "Double-curb interlocking weave",
      "High-polish gold finish",
      "Secure box clasp",
      "Length and weight confirmed on request",
    ],
    images: [
      {
        kind: "image",
        url: chainsDuoBusts.url,
        alt: "Two heavy gold chains displayed on navy and black jewelry busts at Frank Jewelry Store",
      },
    ],
    badges: ["bestseller"],
    featured: true,
    inStock: true,
  },
  {
    slug: "serpentine-cuban-collection",
    name: "Serpentine Cuban Collection",
    sku: "FJS-NK-002",
    category: "necklaces",
    material: "Real Gold",
    tagline: "Five weights. One unmistakable signature.",
    description:
      "Rope and cuban links laid side by side so you can feel the difference in gauge before you choose. Every weight is finished to the same mirror standard — the only decision left is how loudly you want to arrive.",
    details: [
      "Rope and cuban weaves available",
      "Multiple gauges in stock",
      "Mirror-polished throughout",
      "Layering advice available over WhatsApp",
    ],
    images: [
      {
        kind: "image",
        url: cubanRopeLineup.url,
        alt: "A lineup of heavy gold rope and cuban chains held across an arm",
      },
    ],
    badges: ["new"],
    featured: true,
    inStock: true,
  },
  {
    slug: "monarch-heavyweight-cuban",
    name: "Monarch Heavyweight Cuban",
    sku: "FJS-NK-003",
    category: "necklaces",
    material: "Real Gold",
    tagline: "Layered weight, worn with confidence.",
    description:
      "Two heavyweight cuban chains layered against white tailoring — proof that scale, done properly, still reads elegant. Broad links, deep bevels, and a drape that sits exactly where it should.",
    details: [
      "Wide-gauge cuban link",
      "Designed for double layering",
      "Reinforced clasp for heavier weights",
      "Available in graduated lengths",
    ],
    images: [
      {
        kind: "image",
        url: cubanDoubleLayer.url,
        alt: "Two heavyweight gold cuban chains layered over a white shirt",
      },
    ],
    badges: ["bestseller"],
    featured: true,
    inStock: true,
  },
  {
    slug: "heirloom-rope-chain-pendants",
    name: "Heirloom Rope Chain & Pendant Trio",
    sku: "FJS-NK-004",
    category: "necklaces",
    material: "Real Gold",
    tagline: "Three lengths, three meanings, one story.",
    description:
      "A layered rope and box-chain arrangement finished with horseshoe, fish and Christ-head pendants. Chosen by clients who want their jewelry to say something specific — luck, provision, faith.",
    details: [
      "Rope and box chains in graduated lengths",
      "Pendants sold together or individually",
      "Fine-gauge, everyday wearable weight",
      "Pendant engraving enquiries welcome",
    ],
    images: [
      {
        kind: "image",
        url: ropeChainsPendants.url,
        alt: "Layered gold rope and box chains with horseshoe, fish and Christ-head pendants on a black bust",
      },
    ],
    badges: [],
    inStock: true,
  },
  {
    slug: "papillon-baguette-set",
    name: "Papillon Baguette Set",
    sku: "FJS-SET-005",
    category: "necklaces",
    material: "Real Diamond",
    tagline: "Baguette light, softened by butterflies.",
    description:
      "A baguette-cut tennis choker with suspended butterflies, matched to a round-cut bracelet. Cool-toned, close to the skin, and made for the woman who wants the room to notice quietly.",
    details: [
      "Baguette-cut choker with butterfly drops",
      "Matching round-cut tennis bracelet",
      "Rhodium-finish setting",
      "Sold as a set or separately",
    ],
    images: [
      {
        kind: "image",
        url: butterflyDiamondSet.url,
        alt: "Baguette tennis choker with butterfly charms and a matching tennis bracelet",
      },
      {
        kind: "image",
        url: butterflyDiamondSetAlt.url,
        alt: "Butterfly baguette choker worn with the matching round-cut butterfly tennis bracelet",
      },
    ],
    badges: ["new"],
    featured: true,
    inStock: true,
  },
  {
    slug: "atelier-steel-ball-chains",
    name: "Atelier Steel Ball-Chain Series",
    sku: "FJS-ST-006",
    category: "necklaces",
    material: "Steel Jewelry",
    tagline: "Cold steel, cult pendants.",
    description:
      "Polished ball chains paired with dog tags, gem-set crosses, blades and figures. Steel that resists tarnish and daily wear — the entry point to the collection, and the piece worn most often.",
    details: [
      "Stainless steel, tarnish resistant",
      "Interchangeable pendant selection",
      "Black and silver finishes",
      "Multiple chain diameters",
    ],
    images: [
      {
        kind: "image",
        url: steelBallChainTray.url,
        alt: "Tray of polished steel ball chains with dog tag, cross, blade and figure pendants",
      },
      {
        kind: "image",
        url: steelBallChainTrayAlt.url,
        alt: "Tray of steel ball chains with flag tags, gem-set cross, blade and figure pendants",
      },
    ],
    badges: ["new"],
    inStock: true,
  },
  {
    slug: "two-tone-timepiece-pairing",
    name: "Two-Tone Timepiece & Bangle Pairing",
    sku: "FJS-WW-007",
    category: "wristwatches",
    material: "Wristwatches",
    tagline: "The wrist, properly dressed.",
    description:
      "Fluted-bezel two-tone watches styled beside a nail bangle and a lion-head cuff. This is how our clients build a wrist: one timepiece with authority, one bracelet with character.",
    details: [
      "Two-tone jubilee-style bracelet",
      "Fluted bezel, white or black dial",
      "Pairs with nail bangle or lion-head cuff",
      "Sizing adjusted before dispatch",
    ],
    images: [
      {
        kind: "image",
        url: goldWatchesBangles.url,
        alt: "Two two-tone wristwatches worn with a gold nail bangle and lion-head cuff",
      },
    ],
    badges: ["bestseller"],
    featured: true,
    inStock: true,
  },
  {
    slug: "sovereign-rope-chain-christ-pendant",
    name: "Sovereign Rope Chain & Christ Pendant",
    sku: "FJS-NK-008",
    category: "necklaces",
    material: "Real Gold",
    tagline: "Filmed in-store, worn out the door.",
    description:
      "A heavyweight rope chain finished with a sculpted Christ-head pendant, shot on a client the day it was collected. Weight you can hear, detail you can read from across a room.",
    details: [
      "Heavyweight rope weave",
      "Sculpted Christ-head pendant",
      "Available as single or double layer",
      "Video walkthrough available on request",
    ],
    images: [
      {
        kind: "video",
        url: videoDoubleRopeJesus.url,
        alt: "Client wearing two heavyweight gold rope chains with Christ-head pendants in store",
        poster: posterDoubleRopeJesus.url,
      },
      {
        kind: "video",
        url: videoRopeChainWorn.url,
        alt: "Gold rope chain with Christ-head pendant worn over a denim jacket",
        poster: posterRopeChainWorn.url,
      },
      {
        kind: "image",
        url: doubleRopeJesusPendants.url,
        alt: "Two heavyweight gold rope chains with diamond-set Christ-head pendants displayed on a bust in store",
      },
    ],
    badges: ["bestseller"],
    featured: true,
    inStock: true,
  },
  {
    slug: "noir-spike-tennis-set",
    name: "Noir Spike Tennis Set",
    sku: "FJS-SET-009",
    category: "necklaces",
    material: "Fashion Jewelry",
    tagline: "Black stone, black hardware, quiet menace.",
    description:
      "A blackened tennis chain punctuated with spikes, matched to a bracelet cut from the same stone. All the discipline of a tennis setting with none of the shine — for the client who prefers their statement in shadow.",
    details: [
      "Black-stone tennis setting",
      "Spiked accents around the full length",
      "Matching spiked tennis bracelet",
      "Sold as a set or separately",
    ],
    images: [
      {
        kind: "image",
        url: blackSpikeTennisSet.url,
        alt: "Black stone spiked tennis necklace on a cream bust with a matching black tennis bracelet on the wrist",
      },
    ],
    badges: ["new"],
    featured: true,
    inStock: true,
  },
  {
    slug: "grand-curb-and-rope-pairing",
    name: "Grand Curb & Rope Pairing",
    sku: "FJS-NK-010",
    category: "necklaces",
    material: "Real Gold",
    tagline: "Two weaves, displayed as they were made to be seen.",
    description:
      "A wide flat-curb chain shown beside a heavyweight twisted rope, both in the deepest gold finish we stock. Displayed on the busts in store so you can judge drape and gauge before you decide.",
    details: [
      "Wide flat-curb weave",
      "Heavyweight twisted rope weave",
      "Deep polished gold finish",
      "Reinforced clasp on both weights",
    ],
    images: [
      {
        kind: "image",
        url: goldCurbRopeBusts.url,
        alt: "A wide gold curb chain and a heavyweight gold rope chain displayed on black jewelry busts",
      },
    ],
    badges: ["new"],
    featured: true,
    inStock: true,
  },
  {
    slug: "pearl-bangle-watch-series",
    name: "Pearl Bangle Watch Series",
    sku: "FJS-WW-011",
    category: "wristwatches",
    material: "Wristwatches",
    tagline: "A watch that reads as a bracelet first.",
    description:
      "Square-dial bangle watches finished with a single pearl at the crown, offered in gold, silver and pearl-white dials. Slim, feminine and effortless — the piece we recommend for daily wear and gifting.",
    details: [
      "Square dial with pearl accent",
      "Slim open bangle cuff",
      "Five dial and finish combinations",
      "Gift boxed on request",
    ],
    images: [
      {
        kind: "image",
        url: pearlBangleWatches.url,
        alt: "Five square-dial pearl bangle watches in gold and silver finishes displayed on a silver roll",
      },
    ],
    badges: ["new"],
    featured: true,
    inStock: true,
  },
  {
    slug: "couples-gold-watch-duo",
    name: "Couples Gold Watch Duo",
    sku: "FJS-WW-012",
    category: "wristwatches",
    material: "Wristwatches",
    tagline: "One finish, two wrists.",
    description:
      "A matched his-and-hers pair in full gold with sunburst dials and a link bracelet, presented in the original case. Chosen for anniversaries, engagements and the kind of gift that photographs well.",
    details: [
      "Matched his-and-hers sizing",
      "Full gold-tone link bracelet",
      "Sunburst dial finish",
      "Presented in original case",
    ],
    images: [
      {
        kind: "image",
        url: goldCoupleWatches.url,
        alt: "A matching pair of gold-tone wristwatches with sunburst dials presented in a black case",
      },
    ],
    badges: ["bestseller"],
    featured: true,
    inStock: true,
  },
  {
    slug: "cartel-steel-tag-chain",
    name: "Cartel Steel Tag Chain",
    sku: "FJS-ST-013",
    category: "necklaces",
    material: "Steel Jewelry",
    tagline: "Streetwear weight, jeweller's finish.",
    description:
      "A polished steel ball chain carrying an enamelled flag tag. Built for everyday wear — tarnish resistant, heavy in the hand, and unmistakable over a plain white tee.",
    details: [
      "Stainless steel ball chain",
      "Enamelled flag tag pendant",
      "Tarnish and water resistant",
      "Multiple chain lengths available",
    ],
    images: [
      {
        kind: "image",
        url: steelTagCartel.url,
        alt: "Polished steel ball chain with an enamelled flag tag pendant, shown on a bike and worn over a white tank top",
      },
    ],
    badges: ["new"],
    inStock: true,
  },
  {
    slug: "prisme-crystal-hoops",
    name: "Prismé Crystal Hoops",
    sku: "FJS-ER-014",
    category: "earrings",
    material: "Fashion Jewelry",
    tagline: "Colour, set in a line of light.",
    description:
      "Slim hoops set with baguette crystals in pink, red, blue and clear. Light enough for all-day wear, bright enough to carry an outfit on their own.",
    details: [
      "Baguette crystal channel setting",
      "Available in pink, red, blue and clear",
      "Lightweight hoop for all-day wear",
      "Sold per pair",
    ],
    images: [
      {
        kind: "image",
        url: crystalHoopEarrings.url,
        alt: "Four pairs of slim crystal-set hoop earrings in pink, red, clear and blue",
      },
    ],
    badges: ["new"],
    inStock: true,
  },
];

/** Brand films — used on the homepage showcase and gallery. */
export const brandFilms: Media[] = [
  {
    kind: "video",
    url: videoRopeChainWorn.url,
    alt: "Gold rope chain and pendant worn over a denim jacket",
    poster: posterRopeChainWorn.url,
  },
  {
    kind: "video",
    url: videoDoubleRopeJesus.url,
    alt: "Double layered gold rope chains with pendants shown in store",
    poster: posterDoubleRopeJesus.url,
  },
  {
    kind: "video",
    url: videoStoreShowcase.url,
    alt: "Frank Jewelry Store showcase film",
    poster: posterStoreShowcase.url,
  },
];

/** Every uploaded still, in the order they read best in a gallery. */
export const galleryMedia: Media[] = [
  {
    kind: "image",
    url: chainsDuoBusts.url,
    alt: "Two heavy gold chains on navy and black jewelry busts",
    width: 972,
    height: 1280,
  },
  {
    kind: "image",
    url: cubanDoubleLayer.url,
    alt: "Layered heavyweight gold cuban chains over a white shirt",
    width: 742,
    height: 1080,
  },
  {
    kind: "image",
    url: butterflyDiamondSet.url,
    alt: "Baguette tennis choker with butterfly charms and matching bracelet",
    width: 955,
    height: 1280,
  },
  {
    kind: "image",
    url: cubanRopeLineup.url,
    alt: "Lineup of gold rope and cuban chains held across an arm",
    width: 718,
    height: 1080,
  },
  {
    kind: "image",
    url: goldWatchesBangles.url,
    alt: "Two-tone wristwatches with gold nail bangle and lion-head cuff",
    width: 800,
    height: 1080,
  },
  {
    kind: "image",
    url: ropeChainsPendants.url,
    alt: "Layered gold rope chains with horseshoe, fish and Christ-head pendants",
    width: 734,
    height: 1080,
  },
  {
    kind: "image",
    url: steelBallChainTray.url,
    alt: "Tray of steel ball chains with assorted pendants",
    width: 1170,
    height: 921,
  },
  {
    kind: "image",
    url: goldCurbRopeBusts.url,
    alt: "Wide gold curb chain and heavyweight gold rope chain on black busts",
    width: 964,
    height: 1280,
  },
  {
    kind: "image",
    url: doubleRopeJesusPendants.url,
    alt: "Two heavyweight gold rope chains with diamond-set Christ-head pendants",
    width: 964,
    height: 1280,
  },
  {
    kind: "image",
    url: blackSpikeTennisSet.url,
    alt: "Black stone spiked tennis necklace and matching bracelet",
    width: 1004,
    height: 1280,
  },
  {
    kind: "image",
    url: butterflyDiamondSetAlt.url,
    alt: "Butterfly baguette choker worn with the matching tennis bracelet",
    width: 955,
    height: 1280,
  },
  {
    kind: "image",
    url: pearlBangleWatches.url,
    alt: "Square-dial pearl bangle watches in gold and silver finishes",
    width: 960,
    height: 960,
  },
  {
    kind: "image",
    url: goldCoupleWatches.url,
    alt: "Matching pair of gold-tone wristwatches in their case",
    width: 810,
    height: 1080,
  },
  {
    kind: "image",
    url: steelTagCartel.url,
    alt: "Steel ball chain with enamelled flag tag pendant worn over a white tank top",
    width: 1080,
    height: 1044,
  },
  {
    kind: "image",
    url: steelBallChainTrayAlt.url,
    alt: "Tray of steel ball chains with flag tags, cross, blade and figure pendants",
    width: 1170,
    height: 921,
  },
  {
    kind: "image",
    url: crystalHoopEarrings.url,
    alt: "Crystal-set hoop earrings in pink, red, clear and blue",
    width: 747,
    height: 783,
  },
];

export const heroMedia: Media = {
  kind: "video",
  url: videoDoubleRopeJesus.url,
  alt: "Heavyweight gold rope chains with pendants worn in store",
  poster: posterDoubleRopeJesus.url,
};

/* ── Derived helpers ───────────────────────────────────────── */

export const getProduct = (slug: string) =>
  products.find((product) => product.slug === slug);

export const byCategory = (slug: string) =>
  products.filter((product) => product.category === slug);

export const featuredProducts = () => products.filter((p) => p.featured);

export const bestSellers = () =>
  products.filter((p) => p.badges.includes("bestseller"));

export const newArrivals = () => products.filter((p) => p.badges.includes("new"));

export const relatedProducts = (product: Product, limit = 3) =>
  products
    .filter((p) => p.slug !== product.slug)
    .sort((a, b) => {
      const score = (candidate: Product) =>
        (candidate.category === product.category ? 2 : 0) +
        (candidate.material === product.material ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, limit);

export const categoryName = (slug: string) =>
  categories.find((c) => c.slug === slug)?.name ?? slug;
