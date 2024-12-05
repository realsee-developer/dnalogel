import { getValueInRange as i } from "./math.js";
function l({
  pageIndex: r,
  particlesToShow: a,
  particlesToScroll: e,
  particlesCount: x
}) {
  const d = r === 0 ? 0 : a - e, c = r * a - r * d, s = c + Math.max(a, e) - 1, n = [];
  for (let t = c; t <= Math.min(x - 1, s); t++)
    n.push(t);
  return n;
}
function h({
  infinite: r,
  pageIndex: a,
  pagesCount: e,
  particlesCount: x,
  particlesToShow: d,
  particlesToScroll: c
}) {
  const s = i(0, a, e - 1);
  let n = s - 1, t = s + 1;
  n = r ? n < 0 ? e - 1 : n : Math.max(0, n), t = r ? t > e - 1 ? 0 : t : Math.min(e - 1, t);
  const f = [.../* @__PURE__ */ new Set([
    n,
    s,
    t,
    // because of these values outputs for infinite/non-infinites are the same
    0,
    // needed to clone first page particles
    e - 1
    // needed to clone last page particles
  ])].sort((o, m) => o - m), I = f.flatMap(
    (o) => l({
      pageIndex: o,
      particlesToShow: d,
      particlesToScroll: c,
      particlesCount: x
    })
  );
  return {
    pageIndexes: f,
    particleIndexes: [...new Set(I)].sort((o, m) => o - m)
  };
}
export {
  h as getAdjacentIndexes
};
