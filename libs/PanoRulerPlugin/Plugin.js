var ne = Object.defineProperty;
var J = Object.getOwnPropertySymbols;
var oe = Object.prototype.hasOwnProperty, se = Object.prototype.propertyIsEnumerable;
var Q = (t, o, e) => o in t ? ne(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, B = (t, o) => {
  for (var e in o || (o = {}))
    oe.call(o, e) && Q(t, e, o[e]);
  if (J)
    for (var e of J(o))
      se.call(o, e) && Q(t, e, o[e]);
  return t;
};
var X = (t, o, e) => new Promise((I, g) => {
  var S = (h) => {
    try {
      f(e.next(h));
    } catch (E) {
      g(E);
    }
  }, i = (h) => {
    try {
      f(e.throw(h));
    } catch (E) {
      g(E);
    }
  }, f = (h) => h.done ? I(h.value) : Promise.resolve(h.value).then(S, i);
  f((e = e.apply(t, o)).next());
});
import { Five as re } from "@realsee/five";
import { Vector3 as L, Raycaster as ie } from "three";
import { intersectionOfLine as le } from "../shared-utils/math/planimetry.js";
import { nextFrame as ae } from "../shared-utils/nextFrame.js";
import ce from "./style.js";
const ue = (t, o) => Math.sqrt(Math.pow(t.z - o.z, 2) + Math.pow(t.x - o.x, 2)), de = (t, o) => {
  const e = {}, I = new ie(), g = o.work;
  if (!g)
    return e;
  const S = t.observers;
  g.observers.forEach((i, f) => {
    const { standingPosition: h } = i, E = new L(h.x, h.y, h.z);
    I.set(E, new L(0, 1, 0));
    const [O] = o.model.intersectRaycaster(I), q = O ? O.point.y : 2.7, k = S[f];
    if (!k)
      return e;
    const A = t.rooms[k].name;
    e[A] === void 0 ? e[A] = {
      __roof: [q],
      __floor: [E.y]
    } : (e[A].__roof.push(q), e[A].__floor.push(E.y));
  });
  for (const i in e) {
    const f = e[i];
    f.__roof.sort(), f.__floor.sort(), f.floor = f.__floor[~~(f.__floor.length / 2)], f.roof = f.__roof[f.__roof.length - 1];
  }
  return e;
}, Pe = (t, o) => {
  const e = {
    enable: !1,
    loaded: !1,
    options: o.options || {
      distanceText: (r) => `${r.toFixed(1)}m`
    }
  }, I = (r, l) => {
    const a = `
      <div class="PanoRulerPlugin-rule-line">
        <em></em>
        <div class="PanoRulerPlugin-rule-label">
          <div class="PanoRulerPlugin-rule-label-name">${e.options.distanceText(l)}</div>
        </div>
      </div>
    `, s = document.createElement("div");
    return s.setAttribute("class", "PanoRulerPlugin-rule"), s.setAttribute("data-name", r), s.setAttribute("style", "display: none"), s.innerHTML = a, s;
  }, g = document.createElement("div");
  g.setAttribute("style", "position: absolute;pointer-events: none;width: 100%;height: 100%;left: 0;top: 0;overflow: hidden;");
  const S = document.createElement("div");
  S.innerHTML = ce, g.appendChild(S);
  const i = {}, f = (r, l) => {
    var d;
    if (e.loaded)
      throw new Error("标尺被重复初始化！");
    const a = de(r, t), s = t.work;
    if (!s)
      return !1;
    for (const c in l) {
      const P = l[c], x = (d = s.observers[0]) == null ? void 0 : d.standingPosition;
      if (!x)
        return;
      const v = P.map(({ x: u, z: b, observers: n }) => {
        const m = n.length > 0 ? r.rooms[r.observers[n[0]]].name : "", y = a[m] ? a[m].floor : null;
        let p = 1 / 0, w = {
          index: 0,
          x: x.x,
          y: x.y,
          z: x.z
        };
        n.forEach((C) => {
          if (!s.observers[C])
            return;
          const { standingPosition: F } = s.observers[C], T = {
            index: C,
            x: F.x,
            y: F.y,
            z: F.z
          }, R = ue({ x: u, z: b }, T);
          y ? R < p && Math.abs(T.y - y) < 0.3 && (p = R, w = T) : R < p && (p = R, w = T);
        });
        const M = new L(u, w.y, b);
        Object.assign(M, { observers: n });
        const H = a[m] ? a[m].roof : null, j = H ? new L(u, H, b) : null;
        return j && Object.assign(j, { observers: n }), { origin: M, vertical: j };
      });
      i[c] = {
        origins: v.map((u) => u.origin),
        rules: []
      };
      for (const { origin: u, vertical: b } of v) {
        if (!b)
          continue;
        const n = I(c, u.distanceTo(b));
        g.append(n), i[c].rules.push({ vertical: !0, rule: [u, b], $element: n });
      }
      for (let u = 0; u < v.length; u++) {
        let b = u + 1;
        b >= v.length && (b = 0);
        const { origin: n } = v[u], { origin: m } = v[b], y = I(c, n.distanceTo(m));
        g.append(y), i[c].rules.push({ vertical: !1, rule: [n, m], $element: y });
      }
    }
    return e.loaded = !0, !0;
  }, h = (r, l, a) => X(void 0, null, function* () {
    const s = r || o.roomInfo, d = l || o.roomRules;
    if (!s || !d)
      throw new Error("标尺数据依赖不齐全！");
    return e.loaded = !1, e.options = B(B({}, e.options), a || {}), t.model.loaded ? f(s, d) : yield new Promise((c) => t.once("modelLoaded", () => c(f(s, d))));
  });
  o.roomInfo && o.roomRules && h(o.roomInfo, o.roomRules);
  const E = (r, l, a, s) => {
    const d = [
      [
        { x: 0, y: 0 },
        { x: a, y: 0 }
      ],
      [
        { x: 0, y: 0 },
        { x: 0, y: s }
      ],
      [
        { x: a, y: 0 },
        { x: a, y: s }
      ],
      [
        { x: 0, y: s },
        { x: a, y: s }
      ]
    ], c = [];
    for (let P = 0; P < d.length; P++) {
      const x = le([r, l], [d[P][0], d[P][1]], !0);
      x && c.push(x);
    }
    return c.length === 0 ? !1 : c;
  }, O = () => {
    var b;
    const r = (b = t.getElement()) == null ? void 0 : b.parentElement;
    if (!r || !e.loaded || Object.keys(i).length <= 0)
      return;
    const { panoIndex: l, camera: a, currentMode: s } = t;
    if (l === void 0)
      return;
    let d;
    for (const n in i)
      n.split(",").indexOf(l.toString()) >= 0 && (d = n);
    if (!d) {
      for (const n in i)
        for (const { $element: m } of i[n].rules)
          m.style.display = "none";
      return;
    }
    const c = a.position, P = a.getWorldDirection(new L()), x = r.clientWidth, v = r.clientHeight;
    if (s !== re.Mode.Panorama) {
      for (const n in i)
        for (const { $element: m } of i[n].rules)
          m.style.display = "none";
      return;
    }
    for (const n in i)
      for (const { $element: m } of i[n].rules)
        m.style.display = n === d ? "block" : "none";
    const [u] = i[d].origins.slice().filter((n) => n.observers.indexOf(l) >= 0).sort((n, m) => {
      const y = n.clone().setY(0).sub(c).normalize().angleTo(P.clone().setY(0)), p = m.clone().setY(0).sub(c).normalize().angleTo(P.clone().setY(0));
      return y - p;
    });
    for (const { rule: n, vertical: m, $element: y } of i[d].rules) {
      const [p, w] = n, M = y.querySelector(".PanoRulerPlugin-rule-line");
      if (!M)
        return;
      if (!u) {
        y.style.display = "none";
        continue;
      }
      if (p !== u && w !== u) {
        y.style.display = "none";
        continue;
      }
      if (p.distanceTo(w) < 0.3) {
        y.style.display = "none";
        continue;
      }
      if (p.observers.indexOf(l) === -1 || w.observers.indexOf(l) === -1) {
        y.style.display = "none";
        continue;
      }
      if (p.clone().sub(c).normalize().angleTo(P) > Math.PI / 2) {
        y.style.display = "none";
        continue;
      }
      if (w.clone().sub(c).normalize().angleTo(P) > Math.PI / 2) {
        y.style.display = "none";
        continue;
      }
      const K = p.distanceTo(w);
      if (w.clone().sub(
        w.clone().sub(p).divide(new L(2, 2, 2))
      ).distanceTo(c) / K > 8) {
        y.style.display = "none";
        continue;
      }
      const F = p.clone().project(a), T = (F.x + 1) / 2 * x, R = (-F.y + 1) / 2 * v, V = w.clone().project(a), Y = (V.x + 1) / 2 * x, N = (-V.y + 1) / 2 * v, $ = Math.sqrt(Math.pow(Y - T, 2) + Math.pow(N - R, 2));
      let D = $, z = 50;
      const _ = E(
        { x: ~~T, y: ~~R },
        {
          x: ~~Y,
          y: ~~N
        },
        x,
        v
      );
      if (_ && _.length === 1 && (u === p ? (D = Math.sqrt(Math.pow(_[0].x - T, 2) + Math.pow(_[0].y - R, 2)), z = D / $ * 50) : u === w && (D = Math.sqrt(Math.pow(_[0].x - Y, 2) + Math.pow(_[0].y - N, 2)), z = 100 - D / $ * 50)), _ && _.length === 2) {
        const G = {
          x: (_[0].x + _[1].x) / 2,
          y: (_[0].y + _[1].y) / 2
        };
        z = Math.sqrt(Math.pow(G.x - T, 2) + Math.pow(G.y - R, 2)) / $ * 100;
      }
      const te = (Math.PI / 2 - Math.atan2(Y - T, R - N)) / Math.PI * 180, W = M.querySelector(".PanoRulerPlugin-rule-label"), U = W.children[0].clientWidth;
      U >= $ || U / 2 >= z / 100 * $ || U / 2 >= (1 - z / 100) * $ ? M.style.display = "none" : (M.style.display = "block", M.style.width = $ + "px", M.style.left = T + "px", M.style.top = R + "px", M.style.transform = `rotate(${-te}deg)`, W.style.left = `${z}%`);
    }
  }, q = () => ae(O), k = () => {
    var r, l;
    return e.loaded ? (e.enable || (g.setAttribute("class", "PanoRulerPlugin" + (e.options.className ? " " + e.options.className : "")), (l = (r = t.getElement()) == null ? void 0 : r.parentElement) == null || l.append(g), O(), t.on("modeChange", O), t.on("cameraUpdate", q), e.enable = !0), !0) : !1;
  }, A = () => (e.enable && (t.off("modeChange", O), t.off("cameraUpdate", q), g && g.remove(), e.enable = !1), !0);
  function Z(r) {
    if (r.distanceText && r.distanceText !== e.options.distanceText) {
      const l = r.distanceText;
      e.options.distanceText = l, Object.values(i).forEach((a) => {
        a.rules.forEach((s) => {
          const [d, c] = s.rule, P = d.distanceTo(c), x = s.$element.querySelector(".PanoRulerPlugin-rule-label-name");
          x && (x.innerText = l(P));
        });
      });
    }
  }
  return {
    enable: k,
    disable: A,
    load: h,
    state: e,
    changeConfigs: Z
  };
}, we = {
  name: "PanoRulerPlugin",
  version: 0
};
export {
  Pe as PanoRulerPlugin,
  Pe as default,
  we as panoRulerPluginServerParams
};
