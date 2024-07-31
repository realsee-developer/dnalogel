var F = Object.defineProperty;
var B = (c, h, e) => h in c ? F(c, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[h] = e;
var r = (c, h, e) => (B(c, typeof h != "symbol" ? h + "" : h, e), e);
var v = (c, h, e) => new Promise((i, t) => {
  var n = (s) => {
    try {
      o(e.next(s));
    } catch (u) {
      t(u);
    }
  }, a = (s) => {
    try {
      o(e.throw(s));
    } catch (u) {
      t(u);
    }
  }, o = (s) => s.done ? i(s.value) : Promise.resolve(s.value).then(n, a);
  o((e = e.apply(c, h)).next());
});
import * as I from "three";
import { Vector3 as w } from "three";
import { centerPoint as b } from "../../../shared-utils/three/centerPoint.js";
import { loadPicture as x } from "../../../shared-utils/three/loadTexture.js";
import { QuadrangleGeometry as H, QuadrangleMesh as P } from "../../../shared-utils/three/Quadrangle.js";
import { getVideoTexture as V } from "../../../shared-utils/three/loadVideoTexture.js";
import { Image_Play_Icon_With_Text as L, Image_Play_Icon as T } from "../../Assets/Icon.js";
import { getPositionsByObjectFit as g } from "../../../shared-utils/three/getPositionsByObjectFit.js";
import { FragmentTransparencyMaterial as R } from "../../../shared-utils/three/FragmentTransparencyMaterial.js";
import { getNormal as E } from "../../../shared-utils/three/getNormal.js";
import "../../../shared-utils/math/pointIsRectangle.js";
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
        const i = e;
        i.geometry.dispose(), (i.material instanceof Array ? i.material : [i.material]).forEach((n) => {
          n.dispose();
        });
      }
    });
  }
}
class $ extends C {
  constructor(e, i, t) {
    var o;
    super();
    r(this, "name", "PanoTagPluginImagePlane");
    this.src = e;
    const n = (o = t == null ? void 0 : t.resolveZFighting) != null ? o : !0;
    let a = i;
    if (n) {
      const s = E(i, 5e-4);
      a = i.map((u) => u.clone().add(s));
    }
    x(e).then(({ texture: s, transparent: u }) => {
      var p;
      const M = new I.MeshBasicMaterial({ map: s, transparent: u }), d = g(
        (p = t == null ? void 0 : t.objectFit) != null ? p : "contain",
        a,
        s.image.width / s.image.height
      ), l = b(...d), m = d.map((y) => y.clone().sub(l)), f = new H(m);
      this.position.copy(l), this.geometry = f, this.material = M;
    }).catch((s) => {
      console.error(`Imageplane error ${s == null ? void 0 : s.message}`);
    });
  }
}
class q extends C {
  // eslint-disable-next-line max-params
  constructor(e, i, t) {
    const {
      videoCoverSrc: n,
      objectFit: a = "contain",
      playButton: o = "withText",
      paused: s = !0,
      videoTextureMap: u,
      ImageTextureMap: M,
      domEvents: d
    } = t != null ? t : {};
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
    this.cornerPoints = i, this.src = e, this.buttonSrc = (() => o === "withText" ? L : o === "withoutText" ? T : typeof o == "string" ? o : T)(), this.videoCoverSrc = n, this.objectFit = a, this.videoTextureMap = u, this.ImageTextureMap = M, this.domEvents = d, this.position.copy(b(...i)), this.videoCoverSrc && s ? this.addCoverMesh().then(() => this.addButtonMesh()) : this.addVideoMesh().then(() => {
      s ? this.addButtonMesh() : this.play(!0);
    }), this.addEventListener("removed", () => {
      this.remove(...this.children);
    }), this.addEventListener("dispose", () => {
      var l;
      (l = this.disposers) == null || l.forEach((m) => m == null ? void 0 : m());
    });
  }
  play(e = !1) {
    return v(this, null, function* () {
      this.videoMesh || (yield this.addVideoMesh()), this.showPlayUI(), this.videoInstance.paused && this.videoInstance.play().then(() => this.showPlayUI()).catch((i) => {
        this.pause(), console.error("play error", i);
      }), this.videoInstance.muted = e, this.render();
    });
  }
  pause() {
    this.videoInstance && (this.videoInstance.pause(), this.showPauseUI().then(() => this.render()));
  }
  initialRenderHooks(e) {
    const t = e(() => {
      var n;
      this.videoMesh && ((n = this.videoInstance) == null ? void 0 : n.paused) === !1 && (this.videoMesh.needsRender = !0);
    });
    this.disposers.push(() => t);
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
        const { texture: i, transparent: t } = yield this.getImageTexture(this.videoCoverSrc), n = new I.MeshBasicMaterial({ transparent: !1, map: i }), a = g(this.objectFit, this.cornerPoints, i.image.width / i.image.height), o = new P(a, n);
        return o.position.copy(new w(0, 0, 0)), o.name = "videoCoverMesh", o;
      }))();
      return e && (this.children.includes(this.coverMesh) || (this.add(e), this.coverMesh = e)), e;
    });
  }
  addVideoMesh() {
    return v(this, null, function* () {
      if (this.children.includes(this.videoMesh))
        return;
      const e = yield (() => v(this, null, function* () {
        if (this.videoMesh)
          return this.videoMesh;
        if (!this.src)
          return;
        const t = this.getVideoTexture(this.src), n = new I.MeshBasicMaterial({ transparent: !1, map: t }), a = yield new Promise((s) => {
          t.metadataLoaded ? s(g(this.objectFit, this.cornerPoints, t.image.videoWidth / t.image.videoHeight)) : t.addEventListener(
            "videoLoaded",
            () => s(g(this.objectFit, this.cornerPoints, t.image.videoWidth / t.image.videoHeight))
          );
        }), o = new P(a, n);
        return o.name = "videoMesh", o.position.copy(new w(0, 0, 0)), o;
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
      const i = e.material.map.image;
      return i.addEventListener("playing", () => {
        this.coverMesh || this.remove(this.buttonMesh), this.render();
      }), i.addEventListener("pause", () => {
        this.videoInstance.paused && (this.showPauseUI(), this.render());
      }), this.children.includes(this.videoMesh) || (this.add(e), this.videoMesh = e, this.videoInstance = i), e;
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
        const i = (f = (m = this.videoMesh) == null ? void 0 : m.geometry.points[0].distanceTo(this.videoMesh.geometry.points[3])) != null ? f : 1 / 0, t = (y = (p = this.coverMesh) == null ? void 0 : p.geometry.points[0].distanceTo(this.coverMesh.geometry.points[3])) != null ? y : 1 / 0, n = this.cornerPoints[0].distanceTo(this.cornerPoints[3]), o = Math.min(i, t, n) / n * 0.3, { texture: s, transparent: u } = yield this.getImageTexture(this.buttonSrc), M = g("contain", this.cornerPoints, s.image.width / s.image.height), d = new P(M, new R(s));
        d.position.copy(new w(0, 0, 0)), d.name = "buttonMesh", d.scale.set(o, o, o), this.domEvents.addAutoBindEventListener(
          d,
          "click",
          () => {
            this.play();
          },
          { noEmitWhenHide: !0 }
        );
        const l = E(M, 5e-4);
        return d.position.add(l), d;
      }))();
      return this.children.includes(this.buttonMesh) || (this.add(e), this.buttonMesh = e), e;
    });
  }
  getImageTexture(e) {
    return v(this, null, function* () {
      var t, n;
      if ((t = this.ImageTextureMap) != null && t.has(e))
        return this.ImageTextureMap.get(e);
      const i = yield x(e);
      return (n = this.ImageTextureMap) == null || n.set(e, i), i;
    });
  }
  getVideoTexture(e) {
    var t, n;
    if ((t = this.videoTextureMap) != null && t.has(e))
      return this.videoTextureMap.get(e);
    const i = V(e);
    return (n = this.videoTextureMap) == null || n.set(e, i), i;
  }
}
export {
  $ as ImagePlane,
  q as VideoPlane
};
