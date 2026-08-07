import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as byCategory, f as categories } from "./router-DzH1degG.mjs";
import { t as MediaFrame } from "./MediaFrame-Cu7-zJnF.mjs";
import { t as Reveal } from "./Reveal-BaPs-T0a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections-CbbMI5iB.js
var import_jsx_runtime = require_jsx_runtime();
function Collections() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Collections"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-5 max-w-2xl font-display text-5xl sm:text-6xl",
				children: "Curated by category"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground",
				children: "Each collection is stocked to the same standard — real materials, clean finishing, and honest weights. Open one to see what is available now."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-gold mt-8 w-24" })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-14 space-y-4",
			children: categories.map((category, index) => {
				const items = byCategory(category.slug);
				const cover = items[0]?.images[0];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: index % 3 * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop",
						search: { category: category.slug },
						className: "group grid gap-6 border border-border/60 bg-card p-5 transition-[border-color,transform] duration-700 hover:-translate-y-1 hover:border-gold/50 sm:grid-cols-[10rem_1fr] sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
							media: cover,
							ratio: "1 / 1",
							className: "border border-border/50"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl transition-colors duration-500 group-hover:text-gold",
									children: category.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground",
									children: items.length > 0 ? `${items.length} piece${items.length > 1 ? "s" : ""} available` : "Arriving soon"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground",
								children: category.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								"aria-hidden": true,
								className: "mt-5 inline-block text-[0.62rem] uppercase tracking-[0.22em] text-gold/85",
								children: [
									"Browse ",
									category.name,
									" →"
								]
							})
						] })]
					})
				}, category.slug);
			})
		})]
	});
}
//#endregion
export { Collections as component };
