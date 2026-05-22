import * as p from "three";
function H(d, r, a) {
  if (d === "fill")
    return r;
  if (d === "contain") {
    const [t, e, c, n] = r, u = t.distanceTo(e), i = c.distanceTo(n), f = t.distanceTo(n), h = e.distanceTo(c), w = u, b = f, m = w / b;
    if (m > a) {
      const o = b * a, s = new p.Vector3().subVectors(e, t).multiplyScalar((u - o) / 2 / u), l = new p.Vector3().subVectors(c, n).multiplyScalar((i - o) / 2 / i);
      return [t.clone().add(s), e.clone().sub(s), c.clone().sub(l), n.clone().add(l)];
    } else if (m < a) {
      const o = w / a, s = new p.Vector3().subVectors(n, t).multiplyScalar((f - o) / 2 / f), l = new p.Vector3().subVectors(c, e).multiplyScalar((h - o) / 2 / h);
      return [t.clone().add(s), e.clone().add(l), c.clone().sub(l), n.clone().sub(s)];
    } else
      return r;
  } else
    return console.warn(`objectFit: ${d} is not supported yet`), r;
}
export {
  H as getPositionsByObjectFit
};
