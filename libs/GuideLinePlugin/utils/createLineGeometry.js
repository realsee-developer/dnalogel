import * as r from "three";
import { Vector3 as ot } from "three";
import { polylineNormals as lt } from "../../vendor/polyline-normals/index.js";
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
    return { geometry: new r.BufferGeometry(), maxV: 0, curvePath: null, curvePoints: null };
  const A = new r.CurvePath();
  G.forEach((t) => {
    const n = xt(t);
    n && A.add(n);
  });
  const q = Math.ceil(A.getLength() * 100);
  A.arcLengthDivisions = q;
  const P = A.getPoints(q), d = P.length;
  if (d <= 2)
    return { geometry: new r.BufferGeometry(), maxV: 0, curvePath: null, curvePoints: null };
  const st = lt(P.map((t) => [t.x, t.z])), ct = (d - 1) * ht * mt, j = 2 * d, it = j * pt, rt = j * dt, v = new Uint32Array(ct), e = new Float32Array(it), T = new Float32Array(rt), J = A.getLength();
  let I = 0, K = 0, Q = {};
  const k = i.path[0].points.map((t) => new r.Vector3().fromArray(t)), W = i.path[0].panoIndexList ? [...i.path[0].panoIndexList] : void 0, tt = (() => {
    const t = [];
    for (let s = 0; s < k.length; s++) {
      const u = k[s];
      if (s === 0)
        t.push(0);
      else {
        const h = k[s - 1];
        t.push(u.distanceTo(h) + t[s - 1]);
      }
    }
    const n = t.at(-1), p = [];
    for (let s = 0; s < t.length; s++) {
      const u = t[s], h = s === 0 ? 0 : t[s - 1], y = s === t.length - 1 ? n : t[s + 1], a = u - Math.min(0.3, (u - h) / 2), l = u + Math.min(0.3, (y - u) / 2);
      p.push([J * (a / n), J * (l / n)]);
    }
    return p;
  })();
  let S = [];
  for (let t = 0; t < d; t++) {
    const [n, p] = st[t][0], s = P[t], { x: u, y: h, z: y } = s, a = new ot(u + n * b, h + 0.05, y + p * b);
    e[t * 6 + 0] = a.x, e[t * 6 + 1] = a.y, e[t * 6 + 2] = a.z;
    const l = new ot(u - n * b, h + 0.05, y - p * b);
    e[t * 6 + 3] = l.x, e[t * 6 + 4] = l.y, e[t * 6 + 5] = l.z, I += t > 0 ? P[t - 1].clone().sub(P[t]).length() : 0;
    const R = I / N;
    K = R, T[t * 4 + 0] = 0, T[t * 4 + 1] = R, T[t * 4 + 2] = 1, T[t * 4 + 3] = R;
    const _ = new r.Vector3().lerpVectors(a, l, 0.5);
    if (i.skipPositions && i.skipPositions.some((C) => C.distanceTo(_) < 0.26))
      continue;
    const L = k[0];
    if (i.useAutoDepthTest && L && W) {
      const f = W[0], [C, M] = tt[0];
      if (I > C && I < M && S.push({
        distance: L.distanceTo(_),
        index: t
      }), I >= M || t === d - 1) {
        const E = Math.min(...S.map((c) => c.distance)), D = S.find((c) => c.distance === E);
        if (S = [], k.shift(), W.shift(), tt.shift(), D)
          Q[f] = D.index;
        else {
          console.error(`can not find the min distance ${f}`);
          continue;
        }
      }
    }
    t !== d - 1 && (v[t * 6 + 0] = t * 2 + 0, v[t * 6 + 1] = t * 2 + 2, v[t * 6 + 2] = t * 2 + 1, v[t * 6 + 3] = t * 2 + 2, v[t * 6 + 4] = t * 2 + 3, v[t * 6 + 5] = t * 2 + 1);
  }
  const x = [];
  let H;
  const Z = [];
  for (let t = 0; t < d - 1; t++) {
    if (H !== void 0 && t <= H)
      continue;
    const n = t + 1, p = {
      x: e[t * 6 + 0],
      y: e[t * 6 + 2]
    }, s = {
      x: e[t * 6 + 3],
      y: e[t * 6 + 5]
    }, u = {
      x: e[n * 6 + 0],
      y: e[n * 6 + 2]
    }, h = {
      x: e[n * 6 + 3],
      y: e[n * 6 + 5]
    }, y = ut([p, s], [u, h]);
    if (y && x.push(t), !y && x.length) {
      x.push(t);
      const a = new r.Vector2(p.x, p.y).distanceTo(new r.Vector2(u.x, u.y)), l = new r.Vector2(s.x, s.y).distanceTo(new r.Vector2(h.x, h.y)), R = 200, _ = [], L = [], f = Math.max(0, x[0] - N * R), C = x[0];
      for (let c = f; c < C; c++)
        a < l ? _.push({ x: e[c * 6 + 0], y: e[c * 6 + 2] }) : _.push({ x: e[c * 6 + 3], y: e[c * 6 + 5] });
      const M = x.at(-1), E = x.at(-1) + N * R;
      for (let c = M; c < E; c++)
        a < l ? L.push({ x: e[c * 6 + 0], y: e[c * 6 + 2] }) : L.push({ x: e[c * 6 + 3], y: e[c * 6 + 5] });
      const D = ft(_, L);
      if (D) {
        const {
          line1RelativeIndex: c,
          line2RelativeIndex: at,
          x: et,
          y: nt
        } = D, w = f + c, g = M + at + 2;
        for (let o = w; o < g; o++)
          a < l ? (e[o * 6 + 0] = et, e[o * 6 + 2] = nt) : (e[o * 6 + 3] = et, e[o * 6 + 5] = nt), H = o;
        let V, Y, X, z, m;
        a < l ? (V = e[f * 6 + 1], Y = e[w * 6 + 1], X = e[g * 6 + 1], z = e[E * 6 + 1], m = (Y + X) / 2) : (V = e[f * 6 + 4], Y = e[w * 6 + 4], X = e[g * 6 + 4], z = e[E * 6 + 4], m = (Y + X) / 2);
        for (let o = f; o < w; o++) {
          const $ = w - f, F = (o - f) / $;
          a < l ? e[o * 6 + 1] = V + (m - V) * F : e[o * 6 + 4] = V + (m - V) * F;
        }
        for (let o = w; o < g; o++)
          a < l ? e[o * 6 + 1] = m : e[o * 6 + 4] = m;
        for (let o = g; o < E; o++) {
          const $ = E - g, F = (o - g + 1) / $;
          a < l ? e[o * 6 + 1] = m + (z - m) * F : e[o * 6 + 4] = m + (z - m) * F;
        }
        Z.push({
          start: w,
          end: g
        });
      }
      x.length = 0;
    }
  }
  const B = new Float32Array(j);
  Z.forEach((t) => {
    for (let n = 0; n < d - 1; n++)
      n >= t.start && n <= t.end ? (B[n * 2 + 0] = 1, B[n * 2 + 1] = 1) : B[n] !== 1 && (B[n * 2 + 0] = 0, B[n * 2 + 1] = 0);
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
