var G = Object.defineProperty;
var D = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, q = Object.prototype.propertyIsEnumerable;
var I = (t, o, r) => o in t ? G(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, L = (t, o) => {
  for (var r in o || (o = {}))
    H.call(o, r) && I(t, r, o[r]);
  if (D)
    for (var r of D(o))
      q.call(o, r) && I(t, r, o[r]);
  return t;
};
var R = (t, o, r) => new Promise((s, m) => {
  var h = (i) => {
    try {
      b(r.next(i));
    } catch (a) {
      m(a);
    }
  }, n = (i) => {
    try {
      b(r.throw(i));
    } catch (a) {
      m(a);
    }
  }, b = (i) => i.done ? s(i.value) : Promise.resolve(i.value).then(h, n);
  b((r = r.apply(t, o)).next());
});
import { Camera as X, loadAt3d as Y } from "@realsee/five";
import * as c from "three";
import { Subscribe as J } from "../shared-utils/Subscribe.js";
const _ = (t, o) => {
  var N, E;
  const r = new J();
  let s = (E = (N = o == null ? void 0 : o.initialState) == null ? void 0 : N.enabled) != null ? E : !0, m = !1, h = !0, n = null;
  const i = L(L({}, {
    lookAtCurrentCamera: !1,
    lockedPanoIndex: null,
    lockedLatitude: null,
    lockedLongitude: null
  }), o == null ? void 0 : o.config), a = new c.Scene(), u = new X(60);
  u.near = 1, u.updateTime(Date.now());
  let f = new c.Object3D(), k, C;
  {
    const e = new c.DirectionalLight(16777215, 0.5);
    e.position.copy(new c.Vector3(1, 1, 1)), a.add(e);
  }
  {
    const e = new c.DirectionalLight(16777215, 0.3);
    a.add(e);
  }
  {
    const e = new c.AmbientLight(16777215, 0.3);
    a.add(e);
  }
  a.add(f);
  const y = () => R(void 0, null, function* () {
    var e, p;
    m || (k = F(t.model, u.fov, u.aspect), C = t.model.bounding.getCenter(new c.Vector3()), a.remove(f), f = yield Y(t.work.model.file, {
      textureOptions: { size: 256, quality: 70 },
      textureArray: (e = t.work.model) == null ? void 0 : e.textures,
      textureBaseUri: (p = t.work.model) == null ? void 0 : p.textureBase
    }).then((l) => {
      const d = l.scene;
      return d.rotateX(-Math.PI / 2), d;
    }), a.add(f), m = !0, r.emit("loaded"), g());
  }), S = () => {
    if (t.renderer)
      return n || (n = new c.WebGLRenderer({ antialias: !1, alpha: !0 }), n.setPixelRatio(t.renderer.getPixelRatio()), n.outputEncoding = c.sRGBEncoding, n.setClearColor(1579548, 0), n.autoClear = !0), n;
  }, A = () => {
    a.remove(f), f = new c.Object3D(), a.add(f), m = !1, g();
  }, O = () => {
    s && (m || y());
  }, W = () => {
    s || (s = !0, a.add(f), !m && t.model.loaded && y(), g());
  }, j = () => {
    s && (a.remove(f), h = !0, P(), s = !1);
  }, z = (e, p = {}) => {
    const l = S();
    if (!l)
      return;
    e.appendChild(l.domElement), M(p);
    const d = window.getComputedStyle(e).position;
    d !== "relative" && d !== "absolute" && d !== "fixed" && d !== "sticky" && (e.style.position = "relative");
  }, M = (e = {}) => {
    if (!n)
      return;
    const l = n.domElement.parentNode;
    if (l != null && l.nodeName) {
      const { width: d = l.offsetWidth, height: w = l.offsetHeight } = e;
      n.setSize(d, w), u.aspect = d / w, u.updateProjectionMatrix();
    }
    g();
  };
  function F(e, p, l) {
    const d = e.bounding, w = Math.pow(
      Math.pow(d.max.x - d.min.x + 1, 2) + Math.pow(d.max.y - d.min.y + 1, 2) + Math.pow(d.max.z - d.min.z + 1, 2),
      1 / 2
    );
    let x = w / 2 / Math.tan(Math.PI * p / 360);
    return l < 1 && (x = x / l), isNaN(x) ? w : x;
  }
  function T(e) {
    return t.work.observers[e].standingPosition.clone();
  }
  const g = () => {
    if (!s || !k || !C)
      return;
    const e = t.getPose();
    e.fov = u.fov, e.offset = C, e.distance = k, typeof i.lockedLatitude == "number" && (e.latitude = i.lockedLatitude), typeof i.lockedLongitude == "number" && (e.longitude = i.lockedLongitude), typeof i.lockedPanoIndex == "number" && (e.offset = T(i.lockedPanoIndex)), i.lookAtCurrentCamera && (e.offset = t.camera.position.clone().setY(t.camera.position.y + 1)), u.setFromPose(e), h = !0;
  }, P = () => {
    !s || h !== !0 || !n || !n.domElement.parentNode || n.domElement.parentNode.offsetWidth === 0 || (n.render(a, u), h = !1);
  }, B = () => {
    n && n.dispose(), n = null;
  }, U = (e) => {
    Object.assign(i, e), g();
  }, V = () => ({
    enabled: s
  });
  return t.on("modelLoaded", O), t.on("modelWillLoad", A), t.on("cameraDirectionUpdate", g), t.on("dispose", B), t.on("renderFrame", P), t.on("cameraPositionUpdate", g), { appendTo: z, refresh: M, changeConfigs: U, enable: W, disable: j, getCurrentState: V, hooks: r };
};
export {
  _ as ModelViewPlugin,
  _ as default
};
