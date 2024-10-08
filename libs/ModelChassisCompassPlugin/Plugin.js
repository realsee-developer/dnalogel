var h = (n, i, s) => new Promise((d, t) => {
  var b = (r) => {
    try {
      c(s.next(r));
    } catch (a) {
      t(a);
    }
  }, l = (r) => {
    try {
      c(s.throw(r));
    } catch (a) {
      t(a);
    }
  }, c = (r) => r.done ? d(r.value) : Promise.resolve(r.value).then(b, l);
  c((s = s.apply(n, i)).next());
});
import * as z from "three";
import { FBXLoader as U } from "three/examples/jsm/loaders/FBXLoader";
import { bject3d2LocalMatrix as O } from "../shared-utils/object3d2LocalMatrix.js";
import { transfromToMeshBasicMaterial as _ } from "../shared-utils/three/transformToMeshBasicMaterial.js";
const I = (n, i) => {
  var j;
  const s = i.fbx_url || "//vrlab-image4.ljcdn.com/release/web/dipan2.f38a21cc.FBX", d = (j = i.north_rad) != null ? j : void 0, t = {};
  let b = { x: 0, y: 0, z: 0 }, l = [0, 0, 0], c = 1, r = d;
  n.on("modelLoaded", y);
  const a = (e) => h(void 0, null, function* () {
    var u;
    const o = (e == null ? void 0 : e.fbx_url) || s;
    if (r = (u = e == null ? void 0 : e.north_rad) != null ? u : d, typeof r != "number")
      throw new Error('"northRad"配置参数缺失：未配置指南针指向！');
    const m = yield new U().loadAsync(o);
    return _(m, {
      transparent: !0,
      side: z.DoubleSide,
      blending: z.AdditiveBlending
    }), t.object = m, y(), !0;
  }), x = ({ latitude: e }) => {
    if (!t.object)
      return;
    const o = p(e);
    o && (t.object.position.y = o);
  }, p = (e) => {
    if (t.yBase === void 0)
      return;
    const o = 0.6;
    if (e >= Math.PI / 4)
      return t.yBase - (o + 1.6);
    const f = e * (4 / Math.PI);
    return t.yBase - (o * f + 1.6);
  }, g = () => {
    if (!t.object)
      return;
    const e = p(n.getPose().latitude);
    e && (t.object.position.y = e), n.scene.add(t.object), n.needsRender = !0, n.on("cameraDirectionUpdate", x);
  }, B = () => {
    t.object && (n.scene.remove(t.object), n.needsRender = !0, n.off("cameraDirectionUpdate", x));
  };
  function y() {
    const e = t.object;
    if (!e)
      return;
    const o = n.model.bounding, f = o.max.x - o.min.x, m = o.max.z - o.min.z, u = Math.max(f, m), {
      max: { x: P, z: R },
      min: { x: w, y: M, z: L }
    } = o;
    t.yBase = M, b = { x: (P + w) / 2, y: M - 1.6, z: (R + L) / 2 }, l = [0, r - Math.PI / 2, 0], c = 45e-4 * u, O(e, { position: b, rotation: l, scale: c });
  }
  return { load: a, disable: B, enable: g };
};
export {
  I as ModelChassisCompassPlugin,
  I as default
};
