var h = (n, a, s) => new Promise((d, e) => {
  var m = (r) => {
    try {
      c(s.next(r));
    } catch (i) {
      e(i);
    }
  }, b = (r) => {
    try {
      c(s.throw(r));
    } catch (i) {
      e(i);
    }
  }, c = (r) => r.done ? d(r.value) : Promise.resolve(r.value).then(m, b);
  c((s = s.apply(n, a)).next());
});
import * as z from "three";
import { bject3d2LocalMatrix as U } from "../shared-utils/object3d2LocalMatrix.js";
import { transfromToMeshBasicMaterial as O } from "../shared-utils/three/transformToMeshBasicMaterial.js";
import { FBXLoader as _ } from "../shared-utils/three/FBXLoader/index.js";
import "../shared-utils/three/libs/inflate.js";
import "../shared-utils/three/libs/NURBSCurve.js";
import "../shared-utils/three/libs/NURBSUtils.js";
const X = (n, a) => {
  var j;
  const s = a.fbx_url || "//vrlab-image4.ljcdn.com/release/web/dipan2.f38a21cc.FBX", d = (j = a.north_rad) != null ? j : void 0, e = {};
  let m = { x: 0, y: 0, z: 0 }, b = [0, 0, 0], c = 1, r = d;
  n.on("modelLoaded", y);
  const i = (t) => h(void 0, null, function* () {
    var u;
    const o = (t == null ? void 0 : t.fbx_url) || s;
    if (r = (u = t == null ? void 0 : t.north_rad) != null ? u : d, typeof r != "number")
      throw new Error('"northRad"配置参数缺失：未配置指南针指向！');
    const f = yield new _().loadAsync(o);
    return O(f, {
      transparent: !0,
      side: z.DoubleSide,
      blending: z.AdditiveBlending
    }), e.object = f, y(), !0;
  }), x = ({ latitude: t }) => {
    if (!e.object)
      return;
    const o = p(t);
    o && (e.object.position.y = o);
  }, p = (t) => {
    if (e.yBase === void 0)
      return;
    const o = 0.6;
    if (t >= Math.PI / 4)
      return e.yBase - (o + 1.6);
    const l = t * (4 / Math.PI);
    return e.yBase - (o * l + 1.6);
  }, g = () => {
    if (!e.object)
      return;
    const t = p(n.getPose().latitude);
    t && (e.object.position.y = t), n.scene.add(e.object), n.needsRender = !0, n.on("cameraDirectionUpdate", x);
  }, B = () => {
    e.object && (n.scene.remove(e.object), n.needsRender = !0, n.off("cameraDirectionUpdate", x));
  };
  function y() {
    const t = e.object;
    if (!t)
      return;
    const o = n.model.bounding, l = o.max.x - o.min.x, f = o.max.z - o.min.z, u = Math.max(l, f), {
      max: { x: P, z: R },
      min: { x: w, y: M, z: L }
    } = o;
    e.yBase = M, m = { x: (P + w) / 2, y: M - 1.6, z: (R + L) / 2 }, b = [0, r - Math.PI / 2, 0], c = 45e-4 * u, U(t, { position: m, rotation: b, scale: c });
  }
  return { load: i, disable: B, enable: g };
};
export {
  X as ModelChassisCompassPlugin,
  X as default
};
