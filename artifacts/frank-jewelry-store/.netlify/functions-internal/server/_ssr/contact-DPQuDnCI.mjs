import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as whatsappLink, h as galleryMedia, l as brand } from "./router-DzH1degG.mjs";
import { t as MediaFrame } from "./MediaFrame-Cu7-zJnF.mjs";
import { t as Reveal } from "./Reveal-BaPs-T0a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DPQuDnCI.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-5 max-w-2xl font-display text-5xl sm:text-6xl",
				children: "One message away"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground",
				children: "WhatsApp is the fastest way to reach us. Send a piece name, a screenshot, or simply tell us the occasion."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-gold mt-8 w-24" })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "divide-y divide-border/50 border-y border-border/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							label: "WhatsApp",
							value: brand.whatsapp,
							href: whatsappLink()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							label: "Email",
							value: brand.email,
							href: `mailto:${brand.email}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							label: "Instagram",
							value: `@${brand.instagram}`,
							href: `https://instagram.com/${brand.instagram}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							label: "TikTok",
							value: `@${brand.tiktok}`,
							href: `https://tiktok.com/@${brand.tiktok}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							label: "Delivery",
							value: "Worldwide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							label: "Payment",
							value: brand.payments.join(" · ")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: whatsappLink("Hello Frank Jewelry Store, I'd like to make an enquiry."),
					target: "_blank",
					rel: "noreferrer",
					className: "mt-10 flex min-h-14 items-center justify-center bg-gold px-10 text-[0.68rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90",
					children: "Chat on WhatsApp"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-panel mt-6 p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "How ordering works"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "01"
							}), " — Send us the piece you want, or describe what you're after."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "02"
							}), " — We confirm availability, weight and the exact price."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "03"
							}), " — Pay by bank transfer or cash once you're happy."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "04"
							}), " — We package and dispatch, anywhere in the world."] })
						]
					})]
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
					media: galleryMedia[3] ?? galleryMedia[0],
					ratio: "4 / 5",
					className: "border border-border/60"
				})
			})]
		})]
	});
}
function ContactRow({ label, value, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex flex-wrap items-baseline justify-between gap-3 py-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground",
			children: label
		}), href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			target: "_blank",
			rel: "noreferrer",
			className: "font-display text-xl text-ivory transition-colors duration-500 hover:text-gold",
			children: value
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-xl text-ivory",
			children: value
		})]
	});
}
//#endregion
export { Contact as component };
