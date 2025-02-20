var R = Object.defineProperty;
var S = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var T = (l, r, a) => r in l ? R(l, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : l[r] = a, g = (l, r) => {
  for (var a in r || (r = {}))
    m.call(r, a) && T(l, a, r[a]);
  if (S)
    for (var a of S(r))
      L.call(r, a) && T(l, a, r[a]);
  return l;
};
import { anime as x } from "../../vendor/animejs/lib/anime.es.js";
import * as v from "three";
import { toArray as d } from "../util.js";
const f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
function D(l) {
  d(l).forEach((a) => {
    var e, y, t;
    f.has(a) || (a instanceof HTMLElement ? f.set(a, {
      opacity: a.style.opacity === "" ? void 0 : a.style.opacity,
      visible: {
        display: a.style.display,
        visibility: a.style.visibility
      }
    }) : a.isObject3D && (a.material ? a.material instanceof v.ShaderMaterial ? f.set(a, {
      opacity: (e = a.material.uniforms.opacity) == null ? void 0 : e.value,
      transparent: a.material.transparent,
      visible: a.visible
    }) : f.set(a, {
      opacity: (y = a.material) == null ? void 0 : y.opacity,
      transparent: (t = a.material) == null ? void 0 : t.transparent,
      visible: a.visible
    }) : f.set(a, {
      visible: a.visible
    })));
  });
}
function H(l) {
  d(l).forEach((a) => {
    const e = f.get(a);
    e && (a instanceof HTMLElement && (a.style.opacity = e.opacity === void 0 ? "" : e.opacity, a.style.display = e.visible.display, a.style.visibility = e.visible.visibility), a.isObject3D && (a.visible = e.visible, a.material && (a.material instanceof v.ShaderMaterial ? (a.material.uniforms.opacity && (a.material.uniforms.opacity.value = e.opacity), a.material.transparent = e.transparent) : (a.material.opacity = e.opacity, a.material.transparent = e.transparent))), f.delete(a));
  });
}
function k(l, r) {
  var h;
  const a = (h = r == null ? void 0 : r.traverseTHREEObject) != null ? h : !0;
  let e = d(l);
  const y = [];
  e.forEach((i) => {
    i && (i instanceof HTMLElement ? y.push(i) : i.isObject3D && (a ? (y.push(i), i.traverse((c) => {
      c && y.push(c);
    })) : y.push(i)));
  }), e = [...new Set(y.filter(Boolean))], D(e);
  const t = x(g({
    targets: e,
    duration: 300,
    easing: "linear",
    direction: "alternate",
    loop: 4,
    autoplay: !1,
    update: (i) => {
      var c;
      i.animatables.forEach((o) => {
        var M;
        const s = o.target;
        if (!f.has(s))
          return;
        const E = Number((M = f.get(s).opacity) != null ? M : 1) * (100 - i.progress) / 100;
        s instanceof HTMLElement ? s.style.opacity = String(E) : s.material && (s.material instanceof v.ShaderMaterial ? (s.material.uniforms.opacity && (s.material.uniforms.opacity.value = E), s.material.transparent = !0) : (s.material.opacity = E, s.material.transparent = !0));
      }), (c = r == null ? void 0 : r.updateRender) == null || c.call(r);
    }
  }, r));
  t.preComplete = () => {
    t != null && t.completed || (t == null || t.pause(), H(e), setTimeout(() => {
      var i;
      return (i = r == null ? void 0 : r.updateRender) == null ? void 0 : i.call(r);
    }));
  };
  const u = p.get(l);
  return u == null || u.pause(), u == null || u.seek(0), p.set(l, t), t.play(), t.finished.then(() => {
    var i;
    H(e), setTimeout(() => {
      p.get(l) === t && p.delete(l);
    }, 1e3), (i = r == null ? void 0 : r.updateRender) == null || i.call(r);
  }), t;
}
function q(l, r) {
  return k(l, g({
    update: (a) => {
      var e;
      a.animatables.forEach((y) => {
        const t = y.target;
        if (!f.has(t))
          return;
        const u = f.get(t), i = (Number(u == null ? void 0 : u.opacity) || Number(r == null ? void 0 : r.maxOpacity) || 1) * (a.progress / 100);
        t instanceof HTMLElement ? (t.style.opacity = String(i), t.style.visibility = "visible") : t.isObject3D && (d(l).includes(t) && (t.visible = !0), t.material && (t.material instanceof v.ShaderMaterial ? (t.material.uniforms.opacity && (t.material.uniforms.opacity.value = i), t.material.transparent = !0) : (t.material.opacity = i, t.material.transparent = !0)));
      }), (e = r == null ? void 0 : r.updateRender) == null || e.call(r);
    }
  }, r));
}
export {
  p as animeMap,
  k as blink,
  q as reblink
};
