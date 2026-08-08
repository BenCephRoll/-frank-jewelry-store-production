import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { p as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as whatsappLink, b as products, f as categories, r as Route$1, s as EmptyState, v as materials } from "./router-DzH1degG.mjs";
import { t as Reveal } from "./Reveal-BaPs-T0a.mjs";
import { t as ProductCard } from "./ProductCard-ChmOX9WL.mjs";
import { t as QuickView } from "./QuickView-nWm2DHlZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-CTMZzi4o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAGE_SIZE = 12;
/**
* Catalog browser: search, category and material filters plus
* progressive loading. Scales from 8 pieces to 1,000+ without
* changing the layout.
*/
function ShopBrowser({ initialCategory = "all" }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)(initialCategory);
	const [material, setMaterial] = (0, import_react.useState)("all");
	const [visible, setVisible] = (0, import_react.useState)(PAGE_SIZE);
	const [quickView, setQuickView] = (0, import_react.useState)(null);
	const navigate = useNavigate();
	/**
	* The category filter is seeded from the URL on first render, but TanStack
	* Router doesn't remount this component on an in-route search-param change
	* (e.g. clicking a category link in the footer while already on /shop).
	* Re-sync local state whenever the URL-derived prop changes so the filter
	* chips and results stay correct.
	*/
	(0, import_react.useEffect)(() => {
		setCategory(initialCategory);
		setVisible(PAGE_SIZE);
	}, [initialCategory]);
	/** Keeps the URL shareable whenever the category filter changes. */
	const chooseCategory = (slug) => {
		setCategory(slug);
		setVisible(PAGE_SIZE);
		navigate({
			to: "/shop",
			search: slug === "all" ? {} : { category: slug },
			replace: true,
			resetScroll: false
		});
	};
	const results = (0, import_react.useMemo)(() => {
		const needle = query.trim().toLowerCase();
		return products.filter((product) => {
			const matchesCategory = category === "all" || product.category === category;
			const matchesMaterial = material === "all" || product.material === material;
			const matchesQuery = !needle || [
				product.name,
				product.tagline,
				product.description,
				product.material
			].join(" ").toLowerCase().includes(needle);
			return matchesCategory && matchesMaterial && matchesQuery;
		});
	}, [
		query,
		category,
		material
	]);
	const shown = results.slice(0, visible);
	const resetPaging = () => setVisible(PAGE_SIZE);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-panel sticky top-[76px] z-[60] flex flex-col gap-3 p-4 sm:gap-5 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "shop-search",
						className: "sr-only",
						children: "Search the collection"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "shop-search",
						type: "search",
						value: query,
						onChange: (event) => {
							setQuery(event.target.value);
							resetPaging();
						},
						placeholder: "Search chains, watches, diamonds…",
						className: "min-h-13 w-full border border-border/70 bg-obsidian/60 px-5 text-sm text-ivory placeholder:text-muted-foreground/70 focus:border-gold/60"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "group",
					"aria-label": "Filter by category",
					className: "-mx-1 flex gap-2 overflow-x-auto px-1 pb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						label: "All Pieces",
						active: category === "all",
						onClick: () => chooseCategory("all")
					}), categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						label: item.name,
						active: category === item.slug,
						onClick: () => chooseCategory(item.slug)
					}, item.slug))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "group",
					"aria-label": "Filter by material",
					className: "-mx-1 flex gap-2 overflow-x-auto px-1 pb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						label: "All Materials",
						active: material === "all",
						onClick: () => {
							setMaterial("all");
							resetPaging();
						}
					}), materials.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						label: item,
						active: material === item,
						onClick: () => {
							setMaterial(item);
							resetPaging();
						}
					}, item))]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			"aria-live": "polite",
			className: "mt-8 text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground",
			children: [
				results.length,
				" ",
				results.length === 1 ? "piece" : "pieces",
				" available"
			]
		}),
		results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "New pieces are arriving soon.",
				body: "Nothing matches that search yet. Tell us what you're looking for on WhatsApp — we source pieces to order every week.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: whatsappLink("Hello, I'm looking for a specific piece."),
					target: "_blank",
					rel: "noreferrer",
					className: "mt-2 inline-flex min-h-13 items-center border border-gold/50 px-7 text-[0.65rem] uppercase tracking-[0.24em] text-gold transition-colors duration-500 hover:bg-gold hover:text-primary-foreground",
					children: "Request a Piece"
				})
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: shown.map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				as: "li",
				delay: index % 3 * 90,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product,
					onQuickView: setQuickView,
					priority: index < 3
				})
			}, product.slug))
		}), visible < results.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setVisible((value) => value + PAGE_SIZE),
				className: "min-h-13 border border-gold/50 px-10 text-[0.65rem] uppercase tracking-[0.24em] text-gold transition-colors duration-500 hover:bg-gold hover:text-primary-foreground",
				children: "Reveal More"
			})
		}) : null] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickView, {
			product: quickView,
			onClose: () => setQuickView(null)
		})
	] });
}
function FilterChip({ label, active, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		"aria-pressed": active,
		className: `min-h-11 shrink-0 whitespace-nowrap border px-4 text-[0.62rem] uppercase tracking-[0.2em] transition-colors duration-500 ${active ? "border-gold bg-gold/12 text-gold" : "border-border/60 text-ivory/70 hover:border-gold/50 hover:text-gold"}`,
		children: label
	});
}
function Shop() {
	const { category } = Route$1.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "The Collection"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-5 max-w-2xl font-display text-5xl sm:text-6xl",
				children: "Every piece, one place"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground",
				children: "Search by name, filter by category or material, and quick view anything that catches your eye. Pieces move quickly — reserve on WhatsApp."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-gold mt-8 w-24" })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopBrowser, { initialCategory: category ?? "all" })
		})]
	});
}
//#endregion
export { Shop as component };
