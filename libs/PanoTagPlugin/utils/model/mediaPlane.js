var H = Object.defineProperty;
var S = (u, a, e) => a in u ? H(u, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : u[a] = e;
var r = (u, a, e) => (S(u, typeof a != "symbol" ? a + "" : a, e), e);
var v = (u, a, e) => new Promise((t, s) => {
  var i = (n) => {
    try {
      o(e.next(n));
    } catch (h) {
      s(h);
    }
  }, d = (n) => {
    try {
      o(e.throw(n));
    } catch (h) {
      s(h);
    }
  }, o = (n) => n.done ? t(n.value) : Promise.resolve(n.value).then(i, d);
  o((e = e.apply(u, a)).next());
});
import * as I from "three";
import { Vector3 as w } from "three";
import { centerPoint as b } from "../../../shared-utils/three/centerPoint.js";
import { loadPicture as x } from "../../../shared-utils/three/loadTexture.js";
import { QuadrangleGeometry as B, QuadrangleMesh as T } from "../../../shared-utils/three/Quadrangle.js";
import { getVideoTexture as V } from "../../../shared-utils/three/loadVideoTexture.js";
import { Image_Play_Icon_With_Text as _, Image_Play_Icon as P } from "../../Assets/Icon.js";
import { getPositionsByObjectFit as g } from "../../../shared-utils/three/getPositionsByObjectFit.js";
import { FragmentTransparencyMaterial as L } from "../../../shared-utils/three/FragmentTransparencyMaterial.js";
import { getNormal as E } from "../../../shared-utils/three/getNormal.js";
import { CONST as F } from "../../../shared-utils/constants.js";
import "../../../shared-utils/math/pointsIsRectangle.js";
import "../../../shared-utils/device.js";
class C extends I.Mesh {
  constructor() {
    super(...arguments);
    r(this, "name", "MediaPlane");
    r(this, "src");
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  dispose() {
    this.traverse((e) => {
      if (e.isMesh) {
        const t = e;
        t.geometry.dispose(), (t.material instanceof Array ? t.material : [t.material]).forEach((i) => {
          i.dispose();
        });
      }
    });
  }
}
class z extends C {
  constructor(e, t, s) {
    var o;
    super();
    r(this, "name", "PanoTagPluginImagePlane");
    this.src = e;
    const i = (o = s == null ? void 0 : s.resolveZFighting) != null ? o : !0;
    let d = t;
    if (i) {
      const n = E(t).multiplyScalar(F.Z_FIGHTING_OFFSET);
      d = t.map((h) => h.clone().add(n));
    }
    x(e).then(({ texture: n, transparent: h }) => {
      var p;
      const M = new I.MeshBasicMaterial({ map: n, transparent: h }), c = g(
        (p = s == null ? void 0 : s.objectFit) != null ? p : "contain",
        d,
        n.image.width / n.image.height
      ), l = b(...c), m = c.map((y) => y.clone().sub(l)), f = new B(m);
      this.position.copy(l), this.geometry = f, this.material = M;
    }).catch((n) => {
      console.error(`Imageplane error: ${n == null ? void 0 : n.message}`);
    });
  }
}
class D extends C {
  // eslint-disable-next-line max-params
  constructor(e, t, s) {
    const {
      videoCoverSrc: i,
      objectFit: d = "contain",
      playButton: o = "withText",
      paused: n = !0,
      videoTextureMap: h,
      ImageTextureMap: M,
      domEvents: c
    } = s != null ? s : {};
    super();
    r(this, "isVideoPlane", !0);
    r(this, "name", "PanoTagPluginImagePlane");
    r(this, "videoInstance");
    r(this, "onVideoReady");
    r(this, "objectFit");
    r(this, "buttonSrc");
    r(this, "videoCoverSrc");
    r(this, "domEvents");
    r(this, "disposers", []);
    r(this, "cornerPoints");
    r(this, "videoMesh");
    r(this, "coverMesh");
    r(this, "buttonMesh");
    r(this, "videoTextureMap");
    r(this, "ImageTextureMap");
    this.cornerPoints = t, this.src = e, this.buttonSrc = (() => o === "withText" ? _ : o === "withoutText" ? P : typeof o == "string" ? o : P)(), this.videoCoverSrc = i, this.objectFit = d, this.videoTextureMap = h, this.ImageTextureMap = M, this.domEvents = c, this.position.copy(b(...t)), this.videoCoverSrc && n ? this.addCoverMesh().then(() => this.addButtonMesh()) : this.addVideoMesh().then(() => {
      n ? this.addButtonMesh() : this.play(!0);
    }), this.addEventListener("removed", () => {
      this.remove(...this.children);
    }), this.addEventListener("dispose", () => {
      var l;
      (l = this.disposers) == null || l.forEach((m) => m == null ? void 0 : m());
    });
  }
  play(e = !1) {
    return v(this, null, function* () {
      this.videoMesh || (yield this.addVideoMesh()), this.showPlayUI(), this.videoInstance.paused && this.videoInstance.play().then(() => this.showPlayUI()).catch((t) => {
        this.pause(), console.error("play error", t);
      }), this.videoInstance.muted = e, this.render();
    });
  }
  pause() {
    this.videoInstance && (this.videoInstance.pause(), this.showPauseUI().then(() => this.render()));
  }
  initialRenderHooks(e) {
    const s = e(() => {
      var i;
      this.videoMesh && ((i = this.videoInstance) == null ? void 0 : i.paused) === !1 && (this.videoMesh.needsRender = !0);
    });
    this.disposers.push(() => s);
  }
  showPlayUI() {
    this.coverMesh && (this.coverMesh.visible = !1), this.remove(this.buttonMesh), this.videoMesh.visible = !0;
  }
  showPauseUI() {
    return v(this, null, function* () {
      this.coverMesh ? (this.coverMesh.visible = !0, this.videoMesh && (this.videoMesh.visible = !1)) : (yield this.addCoverMesh(), this.coverMesh && (this.videoMesh.visible = !1)), this.addButtonMesh().then(() => this.render());
    });
  }
  render() {
    var e;
    this.videoMesh && (this.videoMesh.needsRender = !0), this.coverMesh && (this.coverMesh.needsRender = !0), this.buttonMesh && (this.buttonMesh.needsRender = !0), this.videoMesh && ((e = this.videoInstance) == null ? void 0 : e.paused) === !1 && (this.videoMesh.needsRender = !0);
  }
  addCoverMesh() {
    return v(this, null, function* () {
      if (this.children.includes(this.coverMesh))
        return;
      const e = yield (() => v(this, null, function* () {
        if (this.coverMesh)
          return this.coverMesh;
        if (!this.videoCoverSrc)
          return;
        const { texture: t, transparent: s } = yield this.getImageTexture(this.videoCoverSrc), i = new I.MeshBasicMaterial({ transparent: !1, map: t }), d = g(this.objectFit, this.cornerPoints, t.image.width / t.image.height), o = new T(d, i);
        return o.position.copy(new w(0, 0, 0)), o.name = "videoCoverMesh", o;
      }))();
      return e && (this.children.includes(this.coverMesh) || (this.add(e), this.coverMesh = e)), e;
    });
  }
  addVideoMesh() {
    return v(this, null, function* () {
      var s;
      if (this.children.includes(this.videoMesh))
        return;
      const e = yield (() => v(this, null, function* () {
        if (this.videoMesh)
          return this.videoMesh;
        if (!this.src)
          return;
        const i = this.getVideoTexture(this.src), d = new I.MeshBasicMaterial({ transparent: !1, map: i }), o = yield new Promise((h) => {
          i.metadataLoaded ? h(g(this.objectFit, this.cornerPoints, i.image.videoWidth / i.image.videoHeight)) : i.addEventListener(
            "videoLoaded",
            () => h(g(this.objectFit, this.cornerPoints, i.image.videoWidth / i.image.videoHeight))
          );
        }), n = new T(o, d);
        return n.name = "videoMesh", n.position.copy(new w(0, 0, 0)), n;
      }))();
      if (!e)
        return;
      this.domEvents.addAutoBindEventListener(
        e,
        "click",
        () => {
          !this.videoInstance.paused && this.videoInstance.muted ? this.videoInstance.muted = !1 : this.pause();
        },
        { noEmitWhenHide: !0 }
      );
      const t = e.material.map.image;
      return (s = this.onVideoReady) == null || s.call(this, t), t.addEventListener("playing", () => {
        this.coverMesh || this.remove(this.buttonMesh), this.render();
      }), t.addEventListener("pause", () => {
        this.videoInstance.paused && (this.showPauseUI(), this.render());
      }), this.children.includes(this.videoMesh) || (this.add(e), this.videoMesh = e, this.videoInstance = t), e;
    });
  }
  addButtonMesh() {
    return v(this, null, function* () {
      if (this.children.includes(this.buttonMesh))
        return;
      const e = yield (() => v(this, null, function* () {
        var m, f, p, y;
        if (this.buttonMesh)
          return this.buttonMesh;
        const t = (f = (m = this.videoMesh) == null ? void 0 : m.geometry.points[0].distanceTo(this.videoMesh.geometry.points[3])) != null ? f : 1 / 0, s = (y = (p = this.coverMesh) == null ? void 0 : p.geometry.points[0].distanceTo(this.coverMesh.geometry.points[3])) != null ? y : 1 / 0, i = this.cornerPoints[0].distanceTo(this.cornerPoints[3]), o = Math.min(t, s, i) / i * 0.3, { texture: n, transparent: h } = yield this.getImageTexture(this.buttonSrc), M = g("contain", this.cornerPoints, n.image.width / n.image.height), c = new T(M, new L(n));
        c.position.copy(new w(0, 0, 0)), c.name = "buttonMesh", c.scale.set(o, o, o), this.domEvents.addAutoBindEventListener(
          c,
          "click",
          () => {
            this.play();
          },
          { noEmitWhenHide: !0 }
        );
        const l = E(M).multiplyScalar(F.Z_FIGHTING_OFFSET);
        return c.position.add(l), c;
      }))();
      return this.children.includes(this.buttonMesh) || (this.add(e), this.buttonMesh = e), e;
    });
  }
  getImageTexture(e) {
    return v(this, null, function* () {
      var s, i;
      if ((s = this.ImageTextureMap) != null && s.has(e))
        return this.ImageTextureMap.get(e);
      const t = yield x(e);
      return (i = this.ImageTextureMap) == null || i.set(e, t), t;
    });
  }
  getVideoTexture(e) {
    var s, i;
    if ((s = this.videoTextureMap) != null && s.has(e))
      return this.videoTextureMap.get(e);
    const t = V(e);
    return (i = this.videoTextureMap) == null || i.set(e, t), t;
  }
}
export {
  z as ImagePlane,
  D as VideoPlane
};
