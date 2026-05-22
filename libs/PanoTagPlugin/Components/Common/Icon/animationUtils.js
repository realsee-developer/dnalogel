var R = Object.defineProperty;
var b = (o, t, e) => t in o ? R(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var d = (o, t, e) => (b(o, typeof t != "symbol" ? t + "" : t, e), e);
const y = class {
  constructor() {
    d(this, "styleRefs", /* @__PURE__ */ new Map());
  }
  // 基于配置生成唯一的样式键
  generateStyleKey(t, e) {
    const { duration: n, timing: a, loop: s, loopInterval: l = 0 } = t, c = t.elements[e], { properties: f } = c;
    return `svg-anim-${[n, a, s, l, JSON.stringify(f)].join("-").replace(/[^a-zA-Z0-9-]/g, "").toLowerCase()}`;
  }
  // 多段插值，支持数组长度大于2
  interpolateMulti(t, e) {
    var c;
    if (t.length === 2)
      return this.interpolate(t[0], t[1], e);
    if (t.length < 2)
      return (c = t[0]) != null ? c : 0;
    const n = t.length - 1, a = e * n, s = Math.floor(a), l = a - s;
    return s >= n ? t[n] : this.interpolate(t[s], t[s + 1], l);
  }
  // 生成变换字符串，支持多段
  generateTransformMulti(t, e) {
    const n = [];
    if (t.scale) {
      const a = this.interpolateMulti(t.scale, e);
      n.push(`scale(${a})`);
    }
    if (t.translateX) {
      const a = this.interpolateMulti(t.translateX, e);
      n.push(`translateX(${a}px)`);
    }
    if (t.translateY) {
      const a = this.interpolateMulti(t.translateY, e);
      n.push(`translateY(${a}px)`);
    }
    if (t.rotate) {
      const a = this.interpolateMulti(t.rotate, e);
      n.push(`rotate(${a}deg)`);
    }
    return n.join(" ");
  }
  // 线性插值
  interpolate(t, e, n) {
    return t + (e - t) * n;
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  static getInstance() {
    return y.instance || (y.instance = new y()), y.instance;
  }
  // 获取或创建样式（重写关键帧生成，支持多段）
  // eslint-disable-next-line @typescript-eslint/member-ordering
  getOrCreateStyle(t, e) {
    const n = this.generateStyleKey(t, e);
    if (this.styleRefs.has(n)) {
      const i = this.styleRefs.get(n);
      return i.count++, n;
    }
    const { duration: a, timing: s = "linear", loop: l, loopInterval: c = 0 } = t, f = t.elements[e], { properties: r } = f, m = `${n}-keyframe`;
    let g = 2;
    const M = [r.translateX, r.translateY, r.scale, r.rotate, r.opacity].filter(
      (i) => Array.isArray(i) && i.length > 0
    );
    M.length > 0 && (g = Math.max(...M.map((i) => i.length)));
    const S = l && c > 0 ? a + c : a, E = Math.max(0, Math.min(100, a / S * 100));
    let h = `@keyframes ${m} {
`;
    for (let i = 0; i < g; i++) {
      const $ = i / (g - 1), P = $ * E, x = this.generateTransformMulti(r, $);
      let C = "";
      r.opacity && (C = `    opacity: ${this.interpolateMulti(r.opacity, $)};`), h += `  ${P}% {
${x ? `    transform: ${x};
` : ""}${C}
  }
`;
    }
    const A = this.generateTransformMulti(r, 1);
    let k = "";
    r.opacity && (k = `    opacity: ${this.interpolateMulti(r.opacity, 1)};`), h += `  100% {
${A ? `    transform: ${A};
` : ""}${k}
  }
`, h += `}
`;
    const O = !!r.scale;
    h += `.${n} {
  animation: ${m} ${S}ms ${s} ${l ? "infinite" : "1"};
${O ? `  transform-origin: 50% 50%;
  transform-box: fill-box;` : ""}
}`;
    const p = document.createElement("style");
    return p.id = n, p.textContent = h, document.head.appendChild(p), this.styleRefs.set(n, { element: p, count: 1 }), n;
  }
  // 释放样式引用
  // eslint-disable-next-line @typescript-eslint/member-ordering
  releaseStyle(t) {
    const e = this.styleRefs.get(t);
    e && (e.count--, e.count <= 0 && (e.element.remove(), this.styleRefs.delete(t)));
  }
};
let u = y;
d(u, "instance");
function L(o, t) {
  if (!o || !t)
    return;
  const e = u.getInstance(), { elements: n } = t;
  n.forEach((a, s) => {
    const { selector: l } = a;
    (l ? o.querySelectorAll(l) : [o]).forEach((f) => {
      const r = f, m = e.getOrCreateStyle(t, s);
      r.classList.add(m), r.setAttribute("data-style-key", m);
    });
  });
}
function T(o) {
  if (!o)
    return;
  const t = u.getInstance(), e = o.querySelectorAll("*");
  [o, ...Array.from(e)].forEach((a) => {
    const s = a, l = s.getAttribute("data-style-key");
    l && (s.classList.remove(l), t.releaseStyle(l), s.removeAttribute("data-style-key")), s.style.animation = "", s.style.transform = "", s.style.opacity = "";
  });
}
export {
  L as applySvgAnimation,
  T as clearSvgAnimation
};
