var a = {}, k = {
  get exports() {
    return a;
  },
  set exports(e) {
    a = e;
  }
};
function f(e) {
  return e === null ? "null" : typeof e == "undefined" ? "undefined" : typeof e == "object" ? Array.isArray(e) ? "array" : "object" : typeof e;
}
function h(e) {
  return f(e) === "object" ? j(e) : f(e) === "array" ? b(e) : e;
}
function b(e) {
  return e.map(h);
}
function j(e) {
  const t = {};
  for (const n in e)
    e.hasOwnProperty(n) && (t[n] = h(e[n]));
  return t;
}
function y(e, t = [], n = {}) {
  const i = {
    arrayBehaviour: n.arrayBehaviour || "replace"
    // Can be "merge" or "replace".
  }, g = t.map((c) => c || {}), r = e || {};
  for (let c = 0; c < g.length; c++) {
    const x = g[c], d = Object.keys(x);
    for (let l = 0; l < d.length; l++) {
      const o = d[l], s = x[o], A = f(s), p = f(r[o]);
      if (A === "object")
        if (p !== "undefined") {
          const u = p === "object" ? r[o] : {};
          r[o] = y({}, [u, j(s)], i);
        } else
          r[o] = j(s);
      else if (A === "array")
        if (p === "array") {
          const u = b(s);
          r[o] = i.arrayBehaviour === "merge" ? r[o].concat(u) : u;
        } else
          r[o] = b(s);
      else
        r[o] = s;
    }
  }
  return r;
}
k.exports = function(t, ...n) {
  return y(t, n);
};
a.noMutate = function(...t) {
  return y({}, t);
};
a.withOptions = function(t, n, i) {
  return y(t, n, i);
};
export {
  a as objectAssignDeepExports
};
