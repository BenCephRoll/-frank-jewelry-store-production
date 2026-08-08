import { r as __toESM } from "./_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { f as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as useClientStore, n as Route, p as categoryName, x as relatedProducts, y as productEnquiry } from "./_ssr/router-DzH1degG.mjs";
import { t as MediaFrame } from "./_ssr/MediaFrame-Cu7-zJnF.mjs";
import { t as Reveal } from "./_ssr/Reveal-BaPs-T0a.mjs";
import { t as ProductCard } from "./_ssr/ProductCard-ChmOX9WL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-Bh3QohM7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { product } = Route.useLoaderData();
	const { isSaved, toggleWishlist, markViewed, hydrated } = useClientStore();
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const [zoomOpen, setZoomOpen] = (0, import_react.useState)(false);
	const related = relatedProducts(product);
	const saved = hydrated && isSaved(product.slug);
	const active = product.images[activeIndex];
	(0, import_react.useEffect)(() => {
		setActiveIndex(0);
		markViewed(product.slug);
		window.scrollTo({ top: 0 });
	}, [product.slug, markViewed]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 py-12 lg:px-10 lg:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Breadcrumb",
				className: "text-[0.62rem] uppercase tracking-[0.22em]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "flex flex-wrap items-center gap-2 text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "transition-colors hover:text-gold",
							children: "Shop"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							"aria-hidden": true,
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							search: { category: product.category },
							className: "transition-colors hover:text-gold",
							children: categoryName(product.category)
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							"aria-hidden": true,
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-gold",
							children: product.name
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setZoomOpen(true),
						"aria-label": `Open fullscreen view of ${product.name}`,
						className: "group block w-full cursor-zoom-in border border-border/60",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
							media: active,
							ratio: "1 / 1",
							priority: true,
							imgClassName: "transition-transform duration-[1200ms] group-hover:scale-[1.04]"
						})
					}),
					product.images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex gap-3 overflow-x-auto pb-1",
						children: product.images.map((media, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setActiveIndex(index),
								"aria-label": `View media ${index + 1}`,
								"aria-current": index === activeIndex,
								className: `block w-20 border transition-colors duration-500 ${index === activeIndex ? "border-gold" : "border-border/60 hover:border-gold/50"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
									media,
									ratio: "1 / 1"
								})
							})
						}, media.url))
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground",
						children: "Tap the image for fullscreen detail"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: product.material
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl sm:text-5xl",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-2xl text-gold-soft",
						children: product.price ?? "Price on request"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-gold mt-7 w-24" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-7 text-sm leading-relaxed text-muted-foreground",
						children: product.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 space-y-3 border-t border-border/50 pt-7",
						children: [product.details.map((detail) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-ivory/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "text-gold",
								children: "✦"
							}), detail]
						}, detail)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-ivory/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "text-gold",
									children: "✦"
								}),
								"Reference ",
								product.sku,
								" · Worldwide delivery · Bank transfer or cash"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: productEnquiry(product.name),
							target: "_blank",
							rel: "noreferrer",
							className: "flex min-h-14 flex-1 items-center justify-center bg-gold px-8 text-[0.68rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90",
							children: "Order on WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => toggleWishlist(product.slug),
							"aria-pressed": saved,
							className: "glass-panel flex min-h-14 items-center justify-center px-8 text-[0.68rem] uppercase tracking-[0.24em] text-ivory transition-colors duration-500 hover:border-gold/60 hover:text-gold",
							children: saved ? "♥ Saved" : "♡ Save Piece"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-xs leading-relaxed text-muted-foreground",
						children: "Your WhatsApp message is pre-written with this piece's name, so you can send it in one tap. We'll confirm availability, weight and delivery before payment."
					})
				] }) })]
			}),
			related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-24 border-t border-border/50 pt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "You May Also Consider"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-3xl sm:text-4xl",
					children: "Related pieces"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: related.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "li",
						delay: index * 90,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: item })
					}, item.slug))
				})]
			}) : null,
			zoomOpen && active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				media: product.images,
				index: activeIndex,
				onIndexChange: setActiveIndex,
				onClose: () => setZoomOpen(false),
				label: product.name
			}) : null
		]
	});
}
function Lightbox({ media, index, onIndexChange, onClose, label }) {
	const [touchStart, setTouchStart] = (0, import_react.useState)(null);
	const closeButtonRef = (0, import_react.useRef)(null);
	const previouslyFocused = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		previouslyFocused.current = document.activeElement;
		closeButtonRef.current?.focus();
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
			previouslyFocused.current?.focus();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "Escape") onClose();
			if (event.key === "ArrowRight") onIndexChange((index + 1) % media.length);
			if (event.key === "ArrowLeft") onIndexChange((index - 1 + media.length) % media.length);
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [
		index,
		media.length,
		onClose,
		onIndexChange
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": `${label} — fullscreen view`,
		className: "fixed inset-0 z-[110] flex flex-col bg-obsidian/97 backdrop-blur-md",
		onTouchStart: (event) => setTouchStart(event.touches[0]?.clientX ?? null),
		onTouchEnd: (event) => {
			if (touchStart === null) return;
			const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStart;
			if (Math.abs(delta) > 50) onIndexChange(delta < 0 ? (index + 1) % media.length : (index - 1 + media.length) % media.length);
			setTouchStart(null);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[0.62rem] uppercase tracking-[0.24em] text-gold",
					children: [
						label,
						" — ",
						index + 1,
						"/",
						media.length
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					ref: closeButtonRef,
					type: "button",
					onClick: onClose,
					"aria-label": "Close fullscreen view",
					className: "flex h-11 w-11 items-center justify-center border border-border/60 text-lg text-ivory transition-colors hover:text-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						children: "×"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-1 items-center justify-center overflow-auto px-3 pb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-full w-full max-w-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
						media: media[index],
						ratio: "1 / 1",
						className: "bg-transparent",
						imgClassName: "object-contain"
					})
				})
			}),
			media.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-center gap-3 pb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onIndexChange((index - 1 + media.length) % media.length),
					"aria-label": "Previous media",
					className: "glass-panel flex h-12 w-12 items-center justify-center text-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						children: "←"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onIndexChange((index + 1) % media.length),
					"aria-label": "Next media",
					className: "glass-panel flex h-12 w-12 items-center justify-center text-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						children: "→"
					})
				})]
			}) : null
		]
	});
}
//#endregion
export { ProductPage as component };
