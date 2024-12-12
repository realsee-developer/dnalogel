import { cubicOut as h, cubicInOut as k } from "../easing/index.js";
import { identity as _, split_css_unit as y } from "../internal/index.js";
function C(s, { delay: o = 0, duration: n = 400, easing: t = _ } = {}) {
  const c = +getComputedStyle(s).opacity;
  return {
    delay: o,
    duration: n,
    easing: t,
    css: (e) => `opacity: ${e * c}`
  };
}
function S(s, { delay: o = 0, duration: n = 400, easing: t = h, x: c = 0, y: e = 0, opacity: r = 0 } = {}) {
  const f = getComputedStyle(s), i = +f.opacity, l = f.transform === "none" ? "" : f.transform, p = i * (1 - r), [u, m] = y(c), [$, d] = y(e);
  return {
    delay: o,
    duration: n,
    easing: t,
    css: (a, g) => `
			transform: ${l} translate(${(1 - a) * u}${m}, ${(1 - a) * $}${d});
			opacity: ${i - p * g}`
  };
}
function I(s, { delay: o = 0, speed: n, duration: t, easing: c = k } = {}) {
  let e = s.getTotalLength();
  const r = getComputedStyle(s);
  return r.strokeLinecap !== "butt" && (e += parseInt(r.strokeWidth)), t === void 0 ? n === void 0 ? t = 800 : t = e / n : typeof t == "function" && (t = t(e)), {
    delay: o,
    duration: t,
    easing: c,
    css: (f, i) => `
			stroke-dasharray: ${e};
			stroke-dashoffset: ${i * e};
		`
  };
}
export {
  I as draw,
  C as fade,
  S as fly
};
