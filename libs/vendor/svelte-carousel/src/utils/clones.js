var g = Object.defineProperty, p = Object.defineProperties;
var a = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var h = (n, t, e) => t in n ? g(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, s = (n, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(n, e, t[e]);
  if (f)
    for (var e of f(t))
      r.call(t, e) && h(n, e, t[e]);
  return n;
}, d = (n, t) => p(n, a(t));
function N({
  clonesCountHead: n,
  clonesCountTail: t,
  particlesContainerChildren: e
}) {
  const o = [];
  for (let l = 0; l < t; l++)
    o.push(e[l].cloneNode(!0));
  const u = [], c = e.length;
  for (let l = c - 1; l > c - 1 - n; l--)
    u.push(e[l].cloneNode(!0));
  return {
    clonesToAppend: o,
    clonesToPrepend: u
  };
}
function x({
  particlesContainer: n,
  clonesToAppend: t,
  clonesToPrepend: e
}) {
  for (let o = 0; o < t.length; o++)
    n.append(t[o]);
  for (let o = 0; o < e.length; o++)
    n.prepend(e[o]);
}
function y({
  infinite: n,
  particlesToShow: t,
  partialPageSize: e
}) {
  const o = n ? {
    // need to round with ceil as particlesToShow, particlesToShow can be floating (e.g. 1.5, 3.75)
    head: Math.ceil(e || t),
    tail: Math.ceil(t)
  } : {
    head: 0,
    tail: 0
  };
  return d(s({}, o), {
    total: o.head + o.tail
  });
}
export {
  x as applyClones,
  N as getClones,
  y as getClonesCount
};
