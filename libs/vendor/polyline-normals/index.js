import { polylineMiterUtil as A } from "../polyline-miter-util/index.js";
var e = A, t = [0, 0], f = [0, 0], g = [0, 0], u = [0, 0], U = function(r, i) {
  var a = null, l = [];
  i && (r = r.slice(), r.push(r[0]));
  for (var c = r.length, v = 1; v < c; v++) {
    var M = r[v - 1], n = r[v], o = v < r.length - 1 ? r[v + 1] : null;
    if (e.direction(t, n, M), a || (a = [0, 0], e.normal(a, t)), v === 1 && m(l, a, 1), !o)
      e.normal(a, t), m(l, a, 1);
    else {
      e.direction(f, o, n);
      var N = e.computeMiter(g, u, t, f, 1);
      m(l, u, N);
    }
  }
  if (r.length > 2 && i) {
    var y = r[c - 2], d = r[0], x = r[1];
    e.direction(t, d, y), e.direction(f, x, d), e.normal(a, t);
    var h = e.computeMiter(g, u, t, f, 1);
    l[0][0] = u.slice(), l[c - 1][0] = u.slice(), l[0][1] = h, l[c - 1][1] = h, l.pop();
  }
  return l;
};
function m(r, i, a) {
  r.push([[i[0], i[1]], a]);
}
export {
  U as polylineNormals
};
