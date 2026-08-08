import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-BaPs-T0a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Fades and lifts content into view once, on first intersection. */
function Reveal({ children, delay = 0, className = "", as = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (typeof IntersectionObserver === "undefined") {
			setShown(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			if (entries[0]?.isIntersecting) {
				setShown(true);
				observer.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8% 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(as, {
		ref,
		className: `transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${shown ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"} ${className}`,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
//#endregion
export { Reveal as t };
