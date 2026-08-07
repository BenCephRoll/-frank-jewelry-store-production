import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as whatsappLink, i as faqs, l as brand } from "./router-DzH1degG.mjs";
import { t as Reveal } from "./Reveal-BaPs-T0a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faqs-DMbqYznr.js
var import_jsx_runtime = require_jsx_runtime();
function Faqs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-5 py-16 lg:px-10 lg:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "FAQs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-5xl sm:text-6xl",
					children: "Questions, answered"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground",
					children: "If anything is still unclear, message us — we would rather answer than have you guess."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-gold mt-8 w-24" })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-14 divide-y divide-border/50 border-y border-border/50",
				children: faqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: index % 4 * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group py-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex cursor-pointer list-none items-start justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl transition-colors duration-500 group-open:text-gold sm:text-2xl",
								children: faq.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "mt-1 shrink-0 text-gold transition-transform duration-500 group-open:rotate-45",
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground",
							children: faq.a
						})]
					})
				}, faq.q))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-16 border border-gold/20 bg-onyx p-8 text-center lg:p-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Still have a question?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground",
						children: [
							"Message ",
							brand.whatsapp,
							" on WhatsApp, or email ",
							brand.email,
							". We reply personally."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappLink("Hello, I have a question about your jewelry."),
						target: "_blank",
						rel: "noreferrer",
						className: "mt-8 inline-flex min-h-13 items-center bg-gold px-10 text-[0.65rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90",
						children: "Ask on WhatsApp"
					})
				] })
			})
		]
	});
}
//#endregion
export { Faqs as component };
