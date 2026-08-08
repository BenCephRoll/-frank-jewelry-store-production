import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as categoryName, y as productEnquiry } from "./router-DzH1degG.mjs";
import { t as MediaFrame } from "./MediaFrame-Cu7-zJnF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/QuickView-nWm2DHlZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FOCUSABLE_SELECTOR = "a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex=\"-1\"])";
function QuickView({ product, onClose }) {
	const dialogRef = (0, import_react.useRef)(null);
	const closeButtonRef = (0, import_react.useRef)(null);
	const previouslyFocused = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!product) return;
		previouslyFocused.current = document.activeElement;
		closeButtonRef.current?.focus();
		const onKey = (event) => {
			if (event.key === "Escape") {
				onClose();
				return;
			}
			if (event.key !== "Tab") return;
			const node = dialogRef.current;
			if (!node) return;
			const focusable = Array.from(node.querySelectorAll(FOCUSABLE_SELECTOR));
			if (focusable.length === 0) return;
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			if (!first || !last) return;
			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		};
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
			previouslyFocused.current?.focus();
		};
	}, [product, onClose]);
	if (!product) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": `Quick view — ${product.name}`,
		className: "fixed inset-0 z-[90] flex items-end justify-center bg-obsidian/85 p-0 backdrop-blur-sm sm:items-center sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Close quick view",
			className: "absolute inset-0 h-full w-full cursor-default",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: dialogRef,
			className: "glass-panel relative max-h-[92dvh] w-full max-w-4xl animate-fade-up overflow-y-auto bg-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				ref: closeButtonRef,
				type: "button",
				onClick: onClose,
				"aria-label": "Close quick view",
				className: "absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center border border-border/60 bg-obsidian/70 text-lg text-ivory transition-colors hover:text-gold",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					children: "×"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-0 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
					media: product.images[0],
					ratio: "1 / 1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: categoryName(product.category)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl sm:text-4xl",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-gold w-20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: product.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl text-gold-soft",
							children: product.price ?? "Price on request"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex flex-col gap-3 pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: productEnquiry(product.name),
								target: "_blank",
								rel: "noreferrer",
								className: "flex min-h-13 items-center justify-center bg-gold px-6 text-[0.68rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90",
								children: "Order on WhatsApp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop/$slug",
								params: { slug: product.slug },
								onClick: onClose,
								className: "flex min-h-13 items-center justify-center border border-gold/45 px-6 text-[0.68rem] uppercase tracking-[0.24em] text-gold transition-colors duration-500 hover:bg-gold/10",
								children: "View Full Details"
							})]
						})
					]
				})]
			})]
		})]
	});
}
//#endregion
export { QuickView as t };
