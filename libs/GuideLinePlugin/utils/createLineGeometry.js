import * as r from "three";
import { Vector3 as ot } from "three";
import { polylineNormals as at } from "../../vendor/polyline-normals/index.js";
import { lineIsIntersecting as ut, findIntersectingOfLines as ft } from "../../shared-utils/math/intersecting.js";
import "../../vendor/polyline-miter-util/index.js";
import "../../vendor/gl-vec2/add.js";
import "../../vendor/gl-vec2/set.js";
import "../../vendor/gl-vec2/normalize.js";
import "../../vendor/gl-vec2/subtract.js";
import "../../vendor/gl-vec2/dot.js";
const ht = 2, mt = 3, pt = 3, dt = 2;
function Vt(i) {
  const O = i.width, N = i.unitLength, b = O / 2, G = i.path;
  if (G.length === 0)
    return { geometry: new r.BufferGeometry(), maxV: 0, curvePath: null, curvePoints: null, panoMap: {} };
  const A = new r.CurvePath();
  G.forEach((t) => {
    const n = xt(t);
    n && A.add(n);
  });
  const q = Math.ceil(A.getLength() * 100);
  A.arcLengthDivisions = q;
  const P = A.getPoints(q), x = P.length;
  if (x <= 2)
    return { geometry: new r.BufferGeometry(), maxV: 0, curvePath: null, curvePoints: null };
  const st = at(P.map((t) => [t.x, t.z])), ct = (x - 1) * ht * mt, j = 2 * x, it = j * pt, rt = j * dt, v = new Uint32Array(ct), e = new Float32Array(it), T = new Float32Array(rt), J = A.getLength();
  let I = 0, K = 0, Q = {};
  const k = i.path[0].points.map((t) => new r.Vector3().fromArray(t)), W = i.path[0].panoIndexList ? [...i.path[0].panoIndexList] : void 0, tt = (() => {
    const t = [];
    for (let s = 0; s < k.length; s++) {
      const u = k[s];
      if (s === 0)
        t.push(0);
      else {
        const m = k[s - 1];
        t.push(u.distanceTo(m) + t[s - 1]);
      }
    }
    const n = t[t.length - 1], d = [];
    for (let s = 0; s < t.length; s++) {
      const u = t[s], m = s === 0 ? 0 : t[s - 1], y = s === t.length - 1 ? n : t[s + 1], l = u - Math.min(0.3, (u - m) / 2), a = u + Math.min(0.3, (y - u) / 2);
      d.push([J * (l / n), J * (a / n)]);
    }
    return d;
  })();
  let S = [];
  for (let t = 0; t < x; t++) {
    const [n, d] = st[t][0], s = P[t], { x: u, y: m, z: y } = s, l = new ot(u + n * b, m + 0.05, y + d * b);
    e[t * 6 + 0] = l.x, e[t * 6 + 1] = l.y, e[t * 6 + 2] = l.z;
    const a = new ot(u - n * b, m + 0.05, y - d * b);
    e[t * 6 + 3] = a.x, e[t * 6 + 4] = a.y, e[t * 6 + 5] = a.z, I += t > 0 ? P[t - 1].clone().sub(P[t]).length() : 0;
    const R = I / N;
    K = R, T[t * 4 + 0] = 0, T[t * 4 + 1] = R, T[t * 4 + 2] = 1, T[t * 4 + 3] = R;
    const _ = new r.Vector3().lerpVectors(l, a, 0.5);
    if (i.skipPositions && i.skipPositions.some((B) => B.distanceTo(_) < 0.26))
      continue;
    const L = k[0];
    if (i.useAutoDepthTest && L && W) {
      const f = W[0], [B, C] = tt[0];
      if (I > B && I < C && S.push({
        distance: L.distanceTo(_),
        index: t
      }), I >= C || t === x - 1) {
        const E = Math.min(...S.map((c) => c.distance)), D = S.find((c) => c.distance === E);
        if (S = [], k.shift(), W.shift(), tt.shift(), D)
          Q[f] = D.index;
        else {
          console.error(`can not find the min distance ${f}`);
          continue;
        }
      }
    }
    t !== x - 1 && (v[t * 6 + 0] = t * 2 + 0, v[t * 6 + 1] = t * 2 + 2, v[t * 6 + 2] = t * 2 + 1, v[t * 6 + 3] = t * 2 + 2, v[t * 6 + 4] = t * 2 + 3, v[t * 6 + 5] = t * 2 + 1);
  }
  const h = [];
  let H;
  const Z = [];
  for (let t = 0; t < x - 1; t++) {
    if (H !== void 0 && t <= H)
      continue;
    const n = t + 1, d = {
      x: e[t * 6 + 0],
      y: e[t * 6 + 2]
    }, s = {
      x: e[t * 6 + 3],
      y: e[t * 6 + 5]
    }, u = {
      x: e[n * 6 + 0],
      y: e[n * 6 + 2]
    }, m = {
      x: e[n * 6 + 3],
      y: e[n * 6 + 5]
    }, y = ut([d, s], [u, m]);
    if (y && h.push(t), !y && h.length) {
      h.push(t);
      const l = new r.Vector2(d.x, d.y).distanceTo(new r.Vector2(u.x, u.y)), a = new r.Vector2(s.x, s.y).distanceTo(new r.Vector2(m.x, m.y)), R = 200, _ = [], L = [], f = Math.max(0, h[0] - N * R), B = h[0];
      for (let c = f; c < B; c++)
        l < a ? _.push({ x: e[c * 6 + 0], y: e[c * 6 + 2] }) : _.push({ x: e[c * 6 + 3], y: e[c * 6 + 5] });
      const C = h[h.length - 1], E = h[h.length - 1] + N * R;
      for (let c = C; c < E; c++)
        l < a ? L.push({ x: e[c * 6 + 0], y: e[c * 6 + 2] }) : L.push({ x: e[c * 6 + 3], y: e[c * 6 + 5] });
      const D = ft(_, L);
      if (D) {
        const {
          line1RelativeIndex: c,
          line2RelativeIndex: lt,
          x: et,
          y: nt
        } = D, w = f + c, g = C + lt + 2;
        for (let o = w; o < g; o++)
          l < a ? (e[o * 6 + 0] = et, e[o * 6 + 2] = nt) : (e[o * 6 + 3] = et, e[o * 6 + 5] = nt), H = o;
        let V, Y, X, z, p;
        l < a ? (V = e[f * 6 + 1], Y = e[w * 6 + 1], X = e[g * 6 + 1], z = e[E * 6 + 1], p = (Y + X) / 2) : (V = e[f * 6 + 4], Y = e[w * 6 + 4], X = e[g * 6 + 4], z = e[E * 6 + 4], p = (Y + X) / 2);
        for (let o = f; o < w; o++) {
          const $ = w - f, F = (o - f) / $;
          l < a ? e[o * 6 + 1] = V + (p - V) * F : e[o * 6 + 4] = V + (p - V) * F;
        }
        for (let o = w; o < g; o++)
          l < a ? e[o * 6 + 1] = p : e[o * 6 + 4] = p;
        for (let o = g; o < E; o++) {
          const $ = E - g, F = (o - g + 1) / $;
          l < a ? e[o * 6 + 1] = p + (z - p) * F : e[o * 6 + 4] = p + (z - p) * F;
        }
        Z.push({
          start: w,
          end: g
        });
      }
      h.length = 0;
    }
  }
  const M = new Float32Array(j);
  Z.forEach((t) => {
    for (let n = 0; n < x - 1; n++)
      n >= t.start && n <= t.end ? (M[n * 2 + 0] = 1, M[n * 2 + 1] = 1) : M[n] !== 1 && (M[n * 2 + 0] = 0, M[n * 2 + 1] = 0);
  });
  const U = new r.BufferGeometry();
  return U.setAttribute("position", new r.BufferAttribute(e, 3)), U.setAttribute("uv", new r.BufferAttribute(T, 2)), U.setIndex(new r.BufferAttribute(v, 1)), { geometry: U, maxV: K, animationWillError: Z, curvePath: A, curvePoints: P, panoMap: Q, totalLength: I };
}
function xt(i) {
  if (gt(i)) {
    const O = [i.closed, i.curve_type, i.tension], N = i.points.map((G) => new r.Vector3().fromArray(G));
    return new r.CatmullRomCurve3(N, ...O);
  }
}
function gt(i) {
  return i.type === "CatmullRomCurve3";
}
export {
  Vt as createLineGeometry
};
