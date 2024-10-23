var T = Object.defineProperty;
var E = Object.getOwnPropertySymbols;
var U = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var N = (n, i, r) => i in n ? T(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, y = (n, i) => {
  for (var r in i || (i = {}))
    U.call(i, r) && N(n, r, i[r]);
  if (E)
    for (var r of E(i))
      V.call(i, r) && N(n, r, i[r]);
  return n;
};
import { Camera as H } from "@realsee/five";
import * as d from "three";
const J = (n, i) => {
  var k, P;
  let r = (P = (k = i == null ? void 0 : i.initialState) == null ? void 0 : k.enabled) != null ? P : !0, g = !1, h = !0, a = null;
  const f = y(y({}, {
    lookAtCurrentCamera: !1,
    lockedPanoIndex: null,
    lockedLatitude: null,
    lockedLongitude: null
  }), i == null ? void 0 : i.config), s = new d.Scene(), m = new H(60);
  let c = new d.Object3D(), b, M;
  {
    const e = new d.DirectionalLight(16777215, 0.5);
    e.position.copy(new d.Vector3(1, 1, 1)), s.add(e);
  }
  {
    const e = new d.DirectionalLight(16777215, 0.3);
    s.add(e);
  }
  {
    const e = new d.AmbientLight(16777215, 0.3);
    s.add(e);
  }
  s.add(c);
  const C = () => {
    if (g)
      return;
    b = S(n.model, m.fov, m.aspect), M = n.model.bounding.getCenter(new d.Vector3()), s.remove(c), c = u(n.model), s.add(c), g = !0, p();
    function e(o) {
      const t = o.clone();
      return t.uniforms.modelAlpha.value = 1, t.uniforms.map.value && (t.uniforms.map.value.needsUpdate = !0), t;
    }
    function u(o) {
      if (o instanceof d.Mesh) {
        const t = o.geometry, l = Array.isArray(o.material) ? o.material.map(e) : e(o.material);
        return new d.Mesh(t, l);
      } else if (o instanceof d.Group) {
        const t = new d.Group();
        return o.children.forEach((l) => t.add(u(l))), t;
      } else {
        const t = new d.Object3D();
        return o.children.forEach((l) => t.add(u(l))), t;
      }
    }
  }, D = () => {
    if (n.renderer)
      return a || (a = new d.WebGLRenderer({ antialias: !1, alpha: !0 }), a.setPixelRatio(n.renderer.getPixelRatio()), a.outputEncoding = d.sRGBEncoding, a.setClearColor(1579548, 0), a.autoClear = !0), a;
  }, R = () => {
    c.traverse((e) => {
      e instanceof d.Mesh && [].concat(e.material).forEach((o) => o.dispose());
    }), s.remove(c), c = new d.Object3D(), s.add(c), g = !1, p();
  }, j = () => {
    r && (g || C());
  }, A = () => {
    r || (r = !0, s.add(c), !g && n.model.loaded && C(), p());
  }, I = () => {
    r && (s.remove(c), h = !0, x(), r = !1);
  }, O = (e, u = {}) => {
    const o = D();
    if (!o)
      return;
    e.appendChild(o.domElement), L(u);
    const t = window.getComputedStyle(e).position;
    t !== "relative" && t !== "absolute" && t !== "fixed" && t !== "sticky" && (e.style.position = "relative");
  }, L = (e = {}) => {
    if (!a)
      return;
    const o = a.domElement.parentNode;
    if (o != null && o.nodeName) {
      const { width: t = o.offsetWidth, height: l = o.offsetHeight } = e;
      a.setSize(t, l), m.aspect = t / l, m.updateProjectionMatrix();
    }
    p();
  };
  function S(e, u, o) {
    const t = e.bounding, l = Math.pow(
      Math.pow(t.max.x - t.min.x + 1, 2) + Math.pow(t.max.y - t.min.y + 1, 2) + Math.pow(t.max.z - t.min.z + 1, 2),
      1 / 2
    );
    let w = l / 2 / Math.tan(Math.PI * u / 360);
    return o < 1 && (w = w / o), isNaN(w) ? l : w;
  }
  function W(e) {
    return n.work.observers[e].standingPosition.clone();
  }
  const p = () => {
    if (!r || !b || !M)
      return;
    const e = n.getPose();
    e.fov = m.fov, e.offset = M, e.distance = b, typeof f.lockedLatitude == "number" && (e.latitude = f.lockedLatitude), typeof f.lockedLongitude == "number" && (e.longitude = f.lockedLongitude), typeof f.lockedPanoIndex == "number" && (e.offset = W(f.lockedPanoIndex)), f.lookAtCurrentCamera && (e.offset = n.camera.position.clone().setY(n.camera.position.y + 1)), m.setFromPose(e), h = !0;
  }, x = () => {
    !r || h !== !0 || !a || !a.domElement.parentNode || a.domElement.parentNode.offsetWidth === 0 || (a.render(s, m), h = !1);
  }, F = () => {
    a && a.dispose(), a = null;
  }, G = (e) => {
    Object.assign(f, e), p();
  }, z = () => ({
    enabled: r
  });
  return Object.assign(window, { camera: m }), n.on("modelLoaded", j), n.on("modelWillLoad", R), n.on("cameraDirectionUpdate", p), n.on("dispose", F), n.on("renderFrame", x), n.on("cameraPositionUpdate", p), { appendTo: O, refresh: L, changeConfigs: G, enable: A, disable: I, getCurrentState: z };
};
export {
  J as ModelViewPlugin,
  J as default
};
