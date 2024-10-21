import * as o from "three";
import { arrayPositionToVector3 as c } from "../../shared-utils/positionToVector3.js";
function M(h, p) {
  p.forEach((t) => {
    const r = new o.SphereGeometry(0.02, 16, 16), i = [], a = [
      new o.MeshBasicMaterial({ color: 16776960 }),
      // 黄
      new o.MeshBasicMaterial({ color: 16711935 }),
      // 粉
      new o.MeshBasicMaterial({ color: 16711680 }),
      // 红
      new o.MeshBasicMaterial({ color: 65535 })
      // 蓝
    ];
    if (t.position.length === 4)
      t.position.forEach((e, s) => {
        const l = a[s], n = new o.Mesh(r, l);
        n.position.copy(c(e)), i.push(n);
      });
    else {
      const e = a[0], s = new o.Mesh(r, e);
      s.position.copy(c(t.position)), i.push(s);
    }
    i.forEach((e) => {
      e.material.depthTest = !1, h.scene.add(e);
    });
  });
}
export {
  M as addDebugPoints
};
