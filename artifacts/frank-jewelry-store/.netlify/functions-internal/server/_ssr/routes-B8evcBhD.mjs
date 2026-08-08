import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { f as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as whatsappLink, _ as heroMedia, c as bestSellers, f as categories, l as brand, m as featuredProducts, o as Counter, u as brandFilms } from "./router-DzH1degG.mjs";
import { t as MediaFrame } from "./MediaFrame-Cu7-zJnF.mjs";
import { t as Reveal } from "./Reveal-BaPs-T0a.mjs";
import { t as ProductCard } from "./ProductCard-ChmOX9WL.mjs";
import { t as QuickView } from "./QuickView-nWm2DHlZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B8evcBhD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var promises = [
	{
		title: "Authenticity, Verified",
		body: "Real gold, real diamonds, and premium steel — every piece is confirmed before it leaves our hands."
	},
	{
		title: "Worldwide Delivery",
		body: "From our counter to your door, anywhere in the world, packaged as carefully as it was selected."
	},
	{
		title: "Personal Guidance",
		body: "Message us and speak to a real person who knows the stock, the weights, and what will suit you."
	},
	{
		title: "Payment On Your Terms",
		body: "Bank transfer or cash — straightforward, transparent, and confirmed before dispatch."
	}
];
function Home() {
	const [quickView, setQuickView] = (0, import_react.useState)(null);
	const featured = featuredProducts().slice(0, 6);
	const best = bestSellers().slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative -mt-20 flex min-h-[92dvh] items-end overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
						media: heroMedia,
						ratio: "auto",
						priority: true,
						className: "h-full w-full",
						imgClassName: "animate-slow-zoom"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "surface-veil absolute inset-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-obsidian/35" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 lg:px-10 lg:pb-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Est. Frank Jewelry Store"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 max-w-3xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl",
							children: ["Jewelry worth", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-gold-leaf",
								children: "remembering."
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 240,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-xl text-base leading-relaxed text-ivory/80",
							children: "Gold with weight. Diamonds with clarity. Steel with attitude. Chosen piece by piece, and delivered worldwide to the people who wear it best."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 360,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								className: "flex min-h-14 items-center justify-center bg-gold px-10 text-[0.68rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90",
								children: "Explore the Collection"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: whatsappLink("Hello Frank Jewelry Store, I'd like help choosing a piece."),
								target: "_blank",
								rel: "noreferrer",
								className: "glass-panel flex min-h-14 items-center justify-center px-10 text-[0.68rem] uppercase tracking-[0.24em] text-ivory transition-colors duration-500 hover:border-gold/60 hover:text-gold",
								children: "Order on WhatsApp"
							})]
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-y border-gold/15 bg-onyx py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-[0.6rem] uppercase tracking-[0.3em] text-gold/85",
				children: "Real Gold · Real Diamond · Steel · Fashion Jewelry · Wristwatches · Worldwide Delivery"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Browse by Category",
			title: "Nine ways to be remembered",
			body: "From heavyweight cuban links to leg chains and trouser chains, every category is built around the same standard of finish.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3",
				children: categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: index % 3 * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop",
						search: { category: category.slug },
						className: "group flex h-full flex-col justify-between border border-border/60 bg-card p-4 transition-[border-color,transform] duration-700 hover:-translate-y-1 hover:border-gold/50 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl leading-tight transition-colors duration-500 group-hover:text-gold sm:text-2xl",
								children: category.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs leading-relaxed text-muted-foreground",
								children: category.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "mt-5 text-[0.62rem] uppercase tracking-[0.22em] text-gold/80",
								children: "View →"
							})
						]
					})
				}, category.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			eyebrow: "Featured Products",
			title: "The pieces our clients ask for by name",
			body: "Hand-selected from the current floor. When a piece sells, it is often gone until the next shipment — message us to reserve.",
			tone: "onyx",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: featured.map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: index % 3 * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						product,
						onQuickView: setQuickView
					})
				}, product.slug))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "min-h-13 border border-gold/50 px-10 text-[0.65rem] uppercase leading-[3.25rem] tracking-[0.24em] text-gold transition-colors duration-500 hover:bg-gold hover:text-primary-foreground",
					children: "View All Pieces"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			eyebrow: "Why Choose Us",
			title: "Trust is the first thing we sell",
			body: "Jewelry is bought on confidence. Everything we do is designed to make that decision easy.",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-5 sm:grid-cols-2",
				children: promises.map((promise, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: index * 90,
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
								children: promise.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: promise.body
							})
						]
					})
				}, promise.title))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid grid-cols-2 gap-8 border-t border-border/50 pt-14 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						value: 9,
						label: "Jewelry Categories"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						value: 5,
						label: "Material Standards"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						value: 100,
						suffix: "%",
						label: "Authenticity Checked"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						value: 24,
						suffix: "/7",
						label: "WhatsApp Enquiries"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "In the Store",
			title: "Filmed on the day it was collected",
			body: "No studio lighting, no staging — real pieces, worn by the clients who chose them.",
			tone: "onyx",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-1 gap-5 sm:grid-cols-3",
				children: brandFilms.map((film, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: index * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
						media: film,
						ratio: "9 / 16",
						className: "border border-border/60"
					})
				}, film.url))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Best Sellers",
			title: "Consistently chosen, rarely in stock long",
			body: "These are the pieces that move fastest. If one is on the floor today, it may not be tomorrow.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: best.map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: index % 3 * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						product,
						onQuickView: setQuickView
					})
				}, product.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-gold/15 bg-onyx",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Worldwide Delivery"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-4xl sm:text-5xl",
						children: "Wherever you are, your piece can reach you"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground",
						children: "We ship worldwide. Send us a message with your city and the piece you want — we'll confirm availability, packaging and delivery details before any payment is made. Bank transfer and cash both accepted."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappLink("Hello, I'd like to ask about delivery to my location."),
						target: "_blank",
						rel: "noreferrer",
						className: "mt-9 inline-flex min-h-13 items-center bg-gold px-9 text-[0.65rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90",
						children: "Check Delivery to My City"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 140,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "glass-panel grid grid-cols-2 gap-px overflow-hidden",
						children: [
							["Delivery", "Worldwide"],
							["Payment", "Bank Transfer · Cash"],
							["Enquiries", brand.whatsapp],
							["Email", brand.email]
						].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-obsidian/40 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 break-words text-sm text-ivory/85",
								children: value
							})]
						}, label))
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-4xl px-5 py-24 text-center lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Ready When You Are"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-5 font-display text-4xl sm:text-5xl lg:text-6xl",
					children: ["Tell us the occasion.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-gold-leaf",
						children: "We'll find the piece."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground",
					children: "One message is all it takes. Send the name of a piece, a photo, or simply a budget — we'll take it from there."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: whatsappLink("Hello Frank Jewelry Store, I'd like to place an order."),
					target: "_blank",
					rel: "noreferrer",
					className: "mt-10 inline-flex min-h-14 items-center bg-gold px-12 text-[0.68rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90",
					children: "Start My Order"
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickView, {
			product: quickView,
			onClose: () => setQuickView(null)
		})
	] });
}
function Section({ eyebrow, title, body, children, tone = "obsidian" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: tone === "onyx" ? "border-y border-border/40 bg-onyx" : "",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-2xl font-display text-4xl sm:text-5xl",
					children: title
				}),
				body ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground",
					children: body
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-gold mt-8 w-24" })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children
			})]
		})
	});
}
//#endregion
export { Home as component };
