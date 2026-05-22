import * as o from "three";
import { arrayPositionToVector3 as p } from "../../shared-utils/positionToVector3.js";
function M(l, y) {
  y.forEach((s) => {
    const c = new o.SphereGeometry(0.02, 16, 16), r = [], n = [
      new o.MeshBasicMaterial({ color: 16776960 }),
      // 黄
      new o.MeshBasicMaterial({ color: 16711935 }),
      // 粉
      new o.MeshBasicMaterial({ color: 16711680 }),
      // 红
      new o.MeshBasicMaterial({ color: 65535 })
      // 蓝
    ];
    if (s.stickType === "3DBox") {
      const e = s.position;
      if (e != null && e.start && (e != null && e.end)) {
        const i = new o.Mesh(c, n[0]);
        i.position.copy(p(e.start)), r.push(i);
        const t = new o.Mesh(c, n[1]);
        t.position.copy(p(e.end)), r.push(t);
      }
    } else if (s.stickType === "Polygon") {
      const e = s.position;
      Array.isArray(e) && e.length > 0 && e.forEach((i, t) => {
        const a = n[t % n.length], h = new o.Mesh(c, a);
        h.position.copy(p(i)), r.push(h);
      });
    } else if (Array.isArray(s.position) && s.position.length === 4)
      s.position.forEach((e, i) => {
        const t = n[i], a = new o.Mesh(c, t);
        a.position.copy(p(e)), r.push(a);
      });
    else if (Array.isArray(s.position)) {
      const e = n[0], i = new o.Mesh(c, e);
      i.position.copy(p(s.position)), r.push(i);
    }
    r.forEach((e) => {
      e.material.depthTest = !1, l.scene.add(e);
    });
  });
}
export {
  M as addDebugPoints
};
