import * as o from "three";
class h extends o.Raycaster {
  intersectObject(t, n = !0, r = []) {
    return f(t, this, r, n), r.sort(a), r;
  }
  intersectObjects(t, n = !0, r = []) {
    for (let i = 0, l = t.length; i < l; i++)
      f(t[i], this, r, n);
    return r.sort(a), r;
  }
}
function a(e, t) {
  return e.distance - t.distance;
}
function f(e, t, n, r) {
  let i = !0;
  if (e.layers.test(t.layers) && e.raycast(t, n) === !1 && (i = !1), i === !0 && r === !0) {
    const l = e.children;
    for (let u = 0, s = l.length; u < s; u++)
      f(l[u], t, n, !0);
  }
}
function c(e, t, n, r) {
  let i = !0;
  if (e.type !== "Line2" && (e.layers.test(t.layers) && e.raycast(t, n) === !1 && (i = !1), i === !0 && r === !0)) {
    const l = e.children;
    for (let u = 0, s = l.length; u < s; u++)
      l[u].type !== "Line2" && c(l[u], t, n, !0);
  }
}
export {
  h as THREERaycaster,
  c as intersectWithoutLine
};
