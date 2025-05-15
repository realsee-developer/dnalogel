var C = (t, s, e) => new Promise((P, E) => {
  var h = (r) => {
    try {
      l(e.next(r));
    } catch (u) {
      E(u);
    }
  }, x = (r) => {
    try {
      l(e.throw(r));
    } catch (u) {
      E(u);
    }
  }, l = (r) => r.done ? P(r.value) : Promise.resolve(r.value).then(h, x);
  l((e = e.apply(t, s)).next());
});
import * as S from "three";
import { MeshBasicMaterial as z, AnimationMixer as B } from "three";
import { createCanvasTextTexture as _ } from "../shared-utils/createCanvasTextTexture.js";
import { transformPositionToVector3 as v } from "../shared-utils/three/transformPositionToVector3.js";
import { transfromToMeshBasicMaterial as H } from "../shared-utils/three/transformToMeshBasicMaterial.js";
import { FBXLoader as L } from "../shared-utils/three/FBXLoader/index.js";
import "../shared-utils/three/libs/inflate.js";
import "../shared-utils/three/libs/NURBSCurve.js";
import "../shared-utils/three/libs/NURBSUtils.js";
const W = (t, s) => {
  var G, T, R;
  const e = {}, P = (G = s.animationEnabled) != null ? G : !0, E = (T = s.position) != null ? T : void 0, h = (R = s.rad) != null ? R : void 0, x = s.fbx_url || "//vrlab-image4.ljcdn.com/release/web/entryDoorMini/Anim_Door1.fbx", l = [], r = (o) => C(void 0, null, function* () {
    var m, b, M, p, f, j, y, q;
    const c = (m = o == null ? void 0 : o.position) != null ? m : E;
    if (!c)
      return Promise.reject(new Error("ModelEntryDoorGuidePlugin.load(): position is undefined"));
    const i = v(c), n = (b = o == null ? void 0 : o.rad) != null ? b : h, A = (M = o == null ? void 0 : o.fbx_url) != null ? M : x;
    if (e.rad = n, n === void 0)
      return Promise.reject(new Error(`ModelEntryDoorGuidePlugin.load(): rad is ${n}`));
    const a = yield new L().loadAsync(A);
    a.position.copy(i), a.rotation.z = n, a.scale.set(0.8, 0.8, 0.8), H(a, { transparent: !0, side: S.DoubleSide });
    const d = (y = (j = (f = (p = a.children) == null ? void 0 : p[0]) == null ? void 0 : f.children) == null ? void 0 : j[3]) == null ? void 0 : y.clone();
    if (!d)
      return Promise.reject(new Error(`ModelEntryDoorGuidePlugin.load(): textMesh is ${d}`));
    const w = (q = s.name) != null ? q : "入户门";
    return d.material = new z({ transparent: !0, map: _(w) }), d.renderOrder = 3, a.children[0].add(d), e.object = a, !0;
  }), u = () => {
    if (e.animation)
      return;
    if (!e.object)
      return console.error("ModelEntryDoorGuidePlugin.initAnimation(): state.object is ", e.object);
    const o = 1, c = new B(e.object);
    l.push(c);
    const i = c.clipAction(e.object.animations[0]);
    i.timeScale = o;
    let n;
    const A = () => {
      let m = 0, b = 0;
      const M = 1e3 / 30, p = (f) => {
        m = requestAnimationFrame(p);
        const j = f - b;
        j < M || (b = f, l.forEach((y) => y.update(j / 1e3)), t.needsRender = !0);
      };
      return m = requestAnimationFrame(p), () => {
        cancelAnimationFrame(m);
      };
    }, w = { play: () => {
      n || (i.play(), n = A(), requestAnimationFrame(() => {
        e.object && e.object.rotation.z !== e.rad && (e.object.rotation.z = e.rad);
      }));
    }, stop: () => {
      i.stop(), n == null || n(), n = void 0;
    } };
    e.animation = w;
  }, g = (o) => {
    var i;
    if (!e.object)
      return console.error("ModelEntryDoorGuidePlugin.enable(): object is ", e.object);
    ((i = o == null ? void 0 : o.animationEnable) != null ? i : P) && (e.animation || u(), e.animation.play()), t.scene.add(e.object), t.needsRender = !0;
  }, F = () => {
    e.object && (e.animation && e.animation.stop(), t.scene.remove(e.object), t.needsRender = !0);
  }, D = (o) => o === "Floorplan" ? g() : F();
  return { load: r, enable: (o) => (e.enabled || (e.enabled = !0, D(t.currentMode), t.on("modeChange", D), g(o)), !0), disable: () => (e.enabled && (e.enabled = !1, F(), t.off("modeChange", D)), !0) };
}, Y = {
  name: "ModelEntryDoorGuidePlugin",
  version: 0
};
export {
  W as ModelEntryDoorGuidePlugin,
  W as default,
  Y as modelEntryDoorGuidePluginServerParams
};
