import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as whatsappLink, h as galleryMedia, u as brandFilms } from "./router-DzH1degG.mjs";
import { t as MediaFrame } from "./MediaFrame-Cu7-zJnF.mjs";
import { t as Reveal } from "./Reveal-BaPs-T0a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-CzFio-hb.js
var import_jsx_runtime = require_jsx_runtime();
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Gallery"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 max-w-2xl font-display text-5xl sm:text-6xl",
					children: "Seen on our clients"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground",
					children: "Nothing here is a stock photo. Every frame is a piece that passed through the store and onto someone who wanted it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-gold mt-8 w-24" })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4",
				children: galleryMedia.map((media, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: index % 3 * 80,
					className: "break-inside-avoid",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
						media,
						ratio: "auto",
						className: "border border-border/60",
						imgClassName: "transition-transform duration-[1400ms] hover:scale-[1.03]"
					})
				}, media.url))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-24 border-t border-border/50 pt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Brand Films"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-3xl sm:text-4xl",
					children: "Motion, unedited"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-5 sm:grid-cols-3",
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-24 border border-gold/20 bg-onyx p-8 text-center lg:p-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl",
						children: "Saw something you liked?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground",
						children: "Send us a screenshot of any photo in this gallery and we'll tell you exactly what it is, whether it's in stock, and what it costs."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappLink("Hello, I saw a piece in your gallery I'd like details on."),
						target: "_blank",
						rel: "noreferrer",
						className: "mt-8 inline-flex min-h-13 items-center bg-gold px-10 text-[0.65rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity duration-500 hover:opacity-90",
						children: "Ask About a Piece"
					})
				] })
			})
		]
	});
}
//#endregion
export { Gallery as component };
