import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/MediaFrame-Cu7-zJnF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Single place where all brand media is rendered.
* Handles lazy loading, aspect ratios, casual right-click/drag
* protection, and the elegant fallback used when the client has
* not supplied media for a section yet.
*/
function MediaFrame({ media, ratio = "4 / 5", className = "", imgClassName = "", priority = false, placeholderLabel = "Waiting for Official Brand Media" }) {
	const resolvedRatio = ratio === "auto" && media?.width && media?.height ? `${media.width} / ${media.height}` : ratio;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `relative overflow-hidden bg-onyx ${className}`,
		style: { aspectRatio: resolvedRatio },
		onContextMenu: (event) => event.preventDefault(),
		children: !media ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaPlaceholder, { label: placeholderLabel }) : media.kind === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoplayVideo, {
			src: media.url,
			...media.poster !== void 0 && { poster: media.poster },
			alt: media.alt,
			priority,
			className: `no-save h-full w-full object-cover ${imgClassName}`
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			className: `no-save h-full w-full object-cover ${imgClassName}`,
			src: media.url,
			alt: media.alt,
			loading: priority ? "eager" : "lazy",
			decoding: "async",
			fetchPriority: priority ? "high" : "auto",
			draggable: false
		})
	});
}
/**
* Muted, looping background video that only decodes/plays while it is
* actually on screen. The site can show several of these at once (gallery,
* brand films), so pausing off-screen instances avoids burning battery and
* CPU on video the visitor can't currently see — pure win, no visual change
* for on-screen video.
*/
function AutoplayVideo({ src, poster, alt, priority, className }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node || typeof IntersectionObserver === "undefined") return;
		const observer = new IntersectionObserver((entries) => {
			if (entries[0]?.isIntersecting) node.play().catch(() => {});
			else node.pause();
		}, { threshold: .15 });
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
		ref,
		className,
		src,
		poster,
		"aria-label": alt,
		title: alt,
		muted: true,
		loop: true,
		playsInline: true,
		preload: priority ? "auto" : "none",
		disablePictureInPicture: true,
		controlsList: "nodownload"
	});
}
function MediaPlaceholder({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-panel absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "text-2xl text-gold",
				children: "✦"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow leading-relaxed",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-gold w-16 opacity-60" })
		]
	});
}
//#endregion
export { MediaFrame as t };
