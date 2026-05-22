import { Group as g, Vector3 as r, Raycaster as C } from "three";
import { createLine as u } from "../shared-utils/createLine/index.js";
import "../shared-utils/five/FiveLine.js";
import "@realsee/five/line";
const U = (e) => {
  const a = {
    intersection: null,
    disposers: []
  }, p = (t) => {
    a.intersection = t;
  }, l = () => {
    a.intersection = null;
  };
  e.on("modelLoaded", () => {
    e.on("intersectionOnModelUpdate", p), e.on("intersectionHidden", l);
  }), e.on("dispose", () => {
    e.off("intersectionOnModelUpdate", p), e.off("intersectionHidden", l);
  });
  const P = (t, c = 2, o = 0.1) => {
    const s = c / 2, n = x(t, o), i = new g();
    i.add(
      u(
        new r(n.x + s, n.y, n.z),
        new r(n.x - s, n.y, n.z),
        new r(1, 0, 0)
      ),
      u(
        new r(n.x, n.y + s, n.z),
        new r(n.x, n.y - s, n.z),
        new r(0, 1, 0)
      ),
      u(
        new r(n.x, n.y, n.z + s),
        new r(n.x, n.y, n.z - s),
        new r(0, 0, 1)
      )
    ), e.scene.add(i), e.needsRender = !0;
    const d = () => {
      e.scene.remove(i);
    };
    return a.disposers.push(d), { clear: d, pointAxesHelperMesh: i };
  }, h = (t, c = 0) => {
    var d, y;
    const o = (d = e == null ? void 0 : e.camera) == null ? void 0 : d.position;
    if (!o)
      return !1;
    const s = t.distanceTo(o), m = t.sub(o).normalize(), n = new C(o, m), i = (y = e.model.intersectRaycaster(n)) == null ? void 0 : y[0];
    return !(i && i.distance + c < s);
  }, z = () => a.intersection, w = () => {
    var t, c;
    (c = (t = a.disposers) == null ? void 0 : t.forEach) == null || c.call(t, (o) => o == null ? void 0 : o()), e.off("intersectionOnModelUpdate", p), e.off("intersectionHidden", l);
  }, H = w, x = (t, c) => {
    const o = t.clone();
    return e.camera.position.clone().sub(o).setLength(c).add(o);
  };
  return { intersection: z, pointAxesHelper: P, movePointTowardsCamera: x, destroy: w, dispose: H, canSeePoint: h };
};
export {
  U as PanoCursorRaycasterPlugin,
  U as default
};
