import * as i from "three";
import { Vector3 as J } from "three";
import { polylineNormals as ot } from "../../vendor/polyline-normals/index.js";
import { lineIsIntersecting as rt, findIntersectingOfLines as it } from "../../shared-utils/math/intersecting.js";
import "../../vendor/polyline-miter-util/index.js";
import "../../vendor/gl-vec2/add.js";
import "../../vendor/gl-vec2/set.js";
import "../../vendor/gl-vec2/normalize.js";
import "../../vendor/gl-vec2/subtract.js";
import "../../vendor/gl-vec2/dot.js";
const st = 2, ct = 3, lt = 3, ut = 2;
function Rt(s) {
  const T = s.width, v = s.unitLength, y = T / 2, U = s.path;
  if (U.length === 0)
    return { geometry: new i.BufferGeometry(), maxV: 0, curvePath: null, curvePoints: null };
  const p = new i.CurvePath();
  U.forEach((t) => {
    const o = at(t);
    o && p.add(o);
  });
  const O = Math.ceil(p.getLength() * 100);
  p.arcLengthDivisions = O;
  const g = p.getPoints(O), m = g.length;
  if (m <= 2)
    return { geometry: new i.BufferGeometry(), maxV: 0, curvePath: null, curvePoints: null };
  const K = ot(g.map((t) => [t.x, t.z])), Q = (m - 1) * st * ct, Y = 2 * m, $ = Y * lt, tt = Y * ut, x = new Uint32Array(Q), e = new Float32Array($), V = new Float32Array(tt);
  let j = 0, W = 0;
  for (let t = 0; t < m; t++) {
    const [o, E] = K[t][0], N = g[t], { x: w, y: R, z: b } = N, c = new J(w + o * y, R + 0.05, b + E * y);
    e[t * 6 + 0] = c.x, e[t * 6 + 1] = c.y, e[t * 6 + 2] = c.z;
    const l = new J(w - o * y, R + 0.05, b - E * y);
    e[t * 6 + 3] = l.x, e[t * 6 + 4] = l.y, e[t * 6 + 5] = l.z, j += t > 0 ? g[t - 1].clone().sub(g[t]).length() : 0;
    const A = j / v;
    W = A, V[t * 4 + 0] = 0, V[t * 4 + 1] = A, V[t * 4 + 2] = 1, V[t * 4 + 3] = A;
    const _ = new i.Vector3().lerpVectors(c, l, 0.5);
    s.skipPositions && s.skipPositions.some((f) => f.distanceTo(_) < 0.26) || t !== m - 1 && (x[t * 6 + 0] = t * 2 + 0, x[t * 6 + 1] = t * 2 + 2, x[t * 6 + 2] = t * 2 + 1, x[t * 6 + 3] = t * 2 + 2, x[t * 6 + 4] = t * 2 + 3, x[t * 6 + 5] = t * 2 + 1);
  }
  const u = [];
  let S;
  const X = [];
  for (let t = 0; t < m - 1; t++) {
    if (S !== void 0 && t <= S)
      continue;
    const o = t + 1, E = {
      x: e[t * 6 + 0],
      y: e[t * 6 + 2]
    }, N = {
      x: e[t * 6 + 3],
      y: e[t * 6 + 5]
    }, w = {
      x: e[o * 6 + 0],
      y: e[o * 6 + 2]
    }, R = {
      x: e[o * 6 + 3],
      y: e[o * 6 + 5]
    }, b = rt([E, N], [w, R]);
    if (b && u.push(t), !b && u.length) {
      u.push(t);
      const c = new i.Vector2(E.x, E.y).distanceTo(new i.Vector2(w.x, w.y)), l = new i.Vector2(N.x, N.y).distanceTo(new i.Vector2(R.x, R.y)), A = 300, _ = [], k = [], f = Math.max(0, u[0] - v * A), et = u[0];
      for (let r = f; r < et; r++)
        c < l ? _.push({ x: e[r * 6 + 0], y: e[r * 6 + 2] }) : _.push({ x: e[r * 6 + 3], y: e[r * 6 + 5] });
      const D = u[u.length - 1], L = Math.min(m - 1, u[u.length - 1] + v * A);
      for (let r = D; r < L; r++)
        c < l ? k.push({ x: e[r * 6 + 0], y: e[r * 6 + 2] }) : k.push({ x: e[r * 6 + 3], y: e[r * 6 + 5] });
      const H = it(_, k);
      if (H) {
        const {
          line1RelativeIndex: r,
          line2RelativeIndex: nt,
          x: Z,
          y: q
        } = H, d = f + r, h = D + nt + 2;
        for (let n = d; n < h; n++)
          c < l ? (e[n * 6 + 0] = Z, e[n * 6 + 2] = q) : (e[n * 6 + 3] = Z, e[n * 6 + 5] = q), S = n;
        let P, F, G, M, a;
        c < l ? (P = e[f * 6 + 1], F = e[d * 6 + 1], G = e[h * 6 + 1], M = e[L * 6 + 1], a = (F + G) / 2) : (P = e[f * 6 + 4], F = e[d * 6 + 4], G = e[h * 6 + 4], M = e[L * 6 + 4], a = (F + G) / 2);
        for (let n = f; n < d; n++) {
          const z = d - f, B = (n - f) / z;
          c < l ? e[n * 6 + 1] = P + (a - P) * B : e[n * 6 + 4] = P + (a - P) * B;
        }
        for (let n = d; n < h; n++)
          c < l ? e[n * 6 + 1] = a : e[n * 6 + 4] = a;
        for (let n = h; n < L; n++) {
          const z = L - h, B = (n - h + 1) / z;
          c < l ? e[n * 6 + 1] = a + (M - a) * B : e[n * 6 + 4] = a + (M - a) * B;
        }
        X.push({
          start: d,
          end: h
        });
      }
      u.length = 0;
    }
  }
  const I = new Float32Array(Y);
  X.forEach((t) => {
    for (let o = 0; o < m - 1; o++)
      o >= t.start && o <= t.end ? (I[o * 2 + 0] = 1, I[o * 2 + 1] = 1) : I[o] !== 1 && (I[o * 2 + 0] = 0, I[o * 2 + 1] = 0);
  });
  const C = new i.BufferGeometry();
  return C.setAttribute("position", new i.BufferAttribute(e, 3)), C.setAttribute("uv", new i.BufferAttribute(V, 2)), C.setIndex(new i.BufferAttribute(x, 1)), { geometry: C, maxV: W, animationWillError: X, curvePath: p, curvePoints: g };
}
function at(s) {
  var T, v;
  if (ft(s)) {
    const y = s.points.map((p) => new i.Vector3().fromArray(p));
    return new i.CatmullRomCurve3(y, (T = s.closed) != null ? T : !1, (v = s.curve_type) != null ? v : "centripetal", s.tension);
  }
}
function ft(s) {
  return s.type === "CatmullRomCurve3";
}
export {
  Rt as createLineGeometry
};
