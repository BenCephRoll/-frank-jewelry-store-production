import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as whatsappLink, a as useClientStore, g as getProduct, s as EmptyState } from "./router-DzH1degG.mjs";
import { t as Reveal } from "./Reveal-BaPs-T0a.mjs";
import { t as ProductCard } from "./ProductCard-ChmOX9WL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-Cuod2K5s.js
var import_jsx_runtime = require_jsx_runtime();
function Wishlist() {
	const { wishlist, recentlyViewed, hydrated } = useClientStore();
	const saved = wishlist.map(getProduct).filter((p) => Boolean(p));
	const recent = recentlyViewed.map(getProduct).filter((p) => Boolean(p)).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Saved Pieces"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-5xl sm:text-6xl",
					children: "My wishlist"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground",
					children: "Saved on this device. When you're ready, send us the names and we'll confirm what is still available."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-gold mt-8 w-24" })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14",
				children: !hydrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Loading your saved pieces…"
				}) : saved.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					title: "Nothing saved yet",
					body: "Tap the heart on any piece to keep it here while you decide.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "inline-flex min-h-13 items-center bg-gold px-9 text-[0.65rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90",
						children: "Browse the Collection"
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-8 flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappLink(`Hello Frank Jewelry Store, I'd like to ask about these saved pieces: ${saved.map((product) => product.name).join(", ")}.`),
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex min-h-13 items-center bg-gold px-8 text-[0.65rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90",
						children: "Send Wishlist on WhatsApp"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: saved.map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "li",
						delay: index % 3 * 90,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product })
					}, product.slug))
				})] })
			}),
			hydrated && recent.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-24 border-t border-border/50 pt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Recently Viewed"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-3xl sm:text-4xl",
					children: "Back where you left off"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: recent.map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "li",
						delay: index * 90,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product })
					}, product.slug))
				})]
			}) : null
		]
	});
}
//#endregion
export { Wishlist as component };
