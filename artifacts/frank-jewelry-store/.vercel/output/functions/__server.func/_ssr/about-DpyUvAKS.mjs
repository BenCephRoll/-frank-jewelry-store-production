import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as whatsappLink, h as galleryMedia, l as brand, o as Counter, u as brandFilms, v as materials } from "./router-DzH1degG.mjs";
import { t as MediaFrame } from "./MediaFrame-Cu7-zJnF.mjs";
import { t as Reveal } from "./Reveal-BaPs-T0a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DpyUvAKS.js
var import_jsx_runtime = require_jsx_runtime();
var values = [
	{
		title: "Material First",
		body: "We only stock what we can stand behind: real gold, real diamonds, surgical-grade steel, and fashion pieces that are honestly described as fashion pieces."
	},
	{
		title: "Weight You Can Feel",
		body: "A chain should have presence. We choose thickness and drape carefully, so a piece looks as substantial on you as it does in the tray."
	},
	{
		title: "One-to-One Service",
		body: "There is no call centre. When you message, you reach the store — and you get a straight answer on stock, price, and timing."
	}
];
function About() {
	const portrait = galleryMedia[0];
	const detail = galleryMedia[2];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "About Us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-5 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl",
					children: ["A small store with an", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-gold-leaf",
						children: "uncompromising standard."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-gold mt-8 w-24" })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
					media: portrait,
					ratio: "4 / 5",
					className: "border border-border/60"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base leading-relaxed text-ivory/85",
							children: brand.about
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm leading-relaxed text-muted-foreground",
							children: "Frank Jewelry Store began the way most good jewelers do — one client at a time, with pieces chosen by hand rather than ordered from a catalogue. That has not changed. What has changed is reach: today a chain photographed on our counter can be around someone's neck on another continent within days."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm leading-relaxed text-muted-foreground",
							children: "We keep the range deliberately broad — necklaces, bracelets, rings, earrings, wristwatches, waist chains, leg chains, trouser chains and anklets — because taste is personal. What stays constant is the finish, the honesty of the description, and the care taken with the person buying."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid grid-cols-2 gap-8 border-t border-border/50 pt-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								value: 9,
								label: "Categories Stocked"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								value: 100,
								suffix: "%",
								label: "Verified Materials"
							})]
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border/40 bg-onyx",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "What We Stand For"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-2xl font-display text-4xl sm:text-5xl",
					children: "Three things we refuse to compromise"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-5 lg:grid-cols-3",
					children: values.map((value, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "li",
						delay: index * 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-panel h-full p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "text-lg text-gold",
									children: "✦"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl",
									children: value.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: value.body
								})
							]
						})
					}, value.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Materials"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-4xl sm:text-5xl",
						children: "Described exactly as it is"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground",
						children: "We never blur the line between fine and fashion. If a piece is real gold, we say so. If it is steel or a fashion finish, we say that too — and price it honestly."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 flex flex-wrap gap-2",
						children: materials.map((material) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border border-gold/30 px-4 py-2 text-[0.62rem] uppercase tracking-[0.2em] text-gold/90",
							children: material
						}, material))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappLink("Hello, I'd like to ask about materials and authenticity."),
						target: "_blank",
						rel: "noreferrer",
						className: "mt-10 inline-flex min-h-13 items-center border border-gold/50 px-9 text-[0.65rem] uppercase tracking-[0.24em] text-gold transition-colors duration-500 hover:bg-gold hover:text-primary-foreground",
						children: "Ask About Authenticity"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
						media: detail,
						ratio: "1 / 1",
						className: "border border-border/60"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border/40 bg-onyx",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Inside the Store"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 font-display text-4xl sm:text-5xl",
					children: "Filmed on the floor"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-5 sm:grid-cols-3",
					children: brandFilms.map((film, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "li",
						delay: index * 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
							media: film,
							ratio: "9 / 16",
							className: "border border-border/60"
						})
					}, film.url))
				})]
			})
		})
	] });
}
//#endregion
export { About as component };
