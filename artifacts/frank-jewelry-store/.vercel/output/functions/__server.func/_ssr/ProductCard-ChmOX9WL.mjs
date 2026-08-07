import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useClientStore, p as categoryName, y as productEnquiry } from "./router-DzH1degG.mjs";
import { t as MediaFrame } from "./MediaFrame-Cu7-zJnF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-ChmOX9WL.js
var import_jsx_runtime = require_jsx_runtime();
var badgeLabel = {
	new: "New Arrival",
	bestseller: "Best Seller"
};
function ProductCard({ product, onQuickView, priority = false }) {
	const { isSaved, toggleWishlist, hydrated } = useClientStore();
	const saved = hydrated && isSaved(product.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative flex h-full flex-col border border-border/60 bg-card transition-[border-color,transform,box-shadow] duration-700 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-luxe)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop/$slug",
					params: { slug: product.slug },
					"aria-label": `View ${product.name}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
						media: product.images[0],
						priority,
						imgClassName: "transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute left-0 top-0 flex flex-col items-start gap-2 p-3",
					children: product.badges.map((badge) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "glass-panel px-3 py-1 text-[0.6rem] uppercase tracking-[0.22em] text-gold-soft",
						children: badgeLabel[badge]
					}, badge))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => toggleWishlist(product.slug),
					"aria-pressed": saved,
					"aria-label": saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`,
					className: "glass-panel absolute right-3 top-3 flex h-11 w-11 items-center justify-center text-base transition-colors duration-500 hover:border-gold/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: saved ? "text-gold" : "text-muted-foreground",
						children: saved ? "♥" : "♡"
					})
				}),
				onQuickView ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-y-0 group-hover:opacity-100 max-md:translate-y-0 max-md:opacity-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onQuickView(product),
						className: "glass-panel w-full py-3 text-[0.65rem] uppercase tracking-[0.24em] text-ivory transition-colors duration-500 hover:border-gold/60 hover:text-gold",
						children: "Quick View"
					})
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-3 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: categoryName(product.category)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl leading-tight",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop/$slug",
						params: { slug: product.slug },
						className: "transition-colors duration-500 hover:text-gold",
						children: product.name
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: product.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto space-y-4 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg text-gold-soft",
						children: product.price ?? "Price on request"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: productEnquiry(product.name),
						target: "_blank",
						rel: "noreferrer",
						className: "flex min-h-12 items-center justify-center border border-gold/45 px-4 text-[0.65rem] uppercase tracking-[0.24em] text-gold transition-colors duration-500 hover:bg-gold hover:text-primary-foreground",
						children: "Order on WhatsApp"
					})]
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };
