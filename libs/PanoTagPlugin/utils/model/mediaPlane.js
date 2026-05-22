var G = Object.defineProperty;
var O = (M, l, e) => l in M ? G(M, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : M[l] = e;
var a = (M, l, e) => (O(M, typeof l != "symbol" ? l + "" : l, e), e);
var m = (M, l, e) => new Promise((t, i) => {
  var s = (o) => {
    try {
      n(e.next(o));
    } catch (d) {
      i(d);
    }
  }, r = (o) => {
    try {
      n(e.throw(o));
    } catch (d) {
      i(d);
    }
  }, n = (o) => o.done ? t(o.value) : Promise.resolve(o.value).then(s, r);
  n((e = e.apply(M, l)).next());
});
import * as y from "three";
import { Vector3 as b } from "three";
import { centerPoint as I } from "../../../shared-utils/three/centerPoint.js";
import { loadPicture as H } from "../../../shared-utils/three/loadTexture.js";
import { QuadrangleGeometry as F, QuadrangleMesh as S } from "../../../shared-utils/three/Quadrangle.js";
import { getVideoTexture as V } from "../../../shared-utils/three/loadVideoTexture.js";
import { Image_Play_Icon_With_Text as B, Image_Play_Icon as E } from "../../Assets/Icon.js";
import { getPositionsByObjectFit as g } from "../../../shared-utils/three/getPositionsByObjectFit.js";
import { FragmentTransparencyMaterial as j } from "../../../shared-utils/three/FragmentTransparencyMaterial.js";
import { getNormal as P } from "../../../shared-utils/three/getNormal.js";
import { CONST as T } from "../../../shared-utils/constants.js";
import "../../../shared-utils/math/pointsIsRectangle.js";
import "../../../shared-utils/device.js";
class C extends y.Mesh {
  constructor() {
    super(...arguments);
    a(this, "name", "MediaPlane");
    a(this, "src");
    a(this, "objectFit");
  }
  /** 获取透明度 */
  get opacity() {
    var e, t;
    return (t = (e = this.material) == null ? void 0 : e.opacity) != null ? t : 1;
  }
  /** 设置透明度 (0-1) */
  set opacity(e) {
    this.material && (this.material.opacity = e, this.material.transparent = e < 1, this.material.needsUpdate = !0), this.traverse((t) => {
      if (t.isMesh && t !== this) {
        const i = t;
        i.material && (i.material.opacity = e, i.material.transparent = e < 1, i.material.needsUpdate = !0);
      }
    });
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  dispose() {
    this.traverse((e) => {
      if (e.isMesh) {
        const t = e;
        t.geometry.dispose(), (t.material instanceof Array ? t.material : [t.material]).forEach((s) => {
          s.dispose();
        });
      }
    });
  }
}
class J extends C {
  constructor(e, t, i) {
    var o, d;
    super();
    a(this, "name", "PanoTagPluginImagePlane");
    a(this, "originRatio");
    this.src = e;
    const s = (o = i == null ? void 0 : i.resolveZFighting) != null ? o : !0, r = (d = i == null ? void 0 : i.opacity) != null ? d : 1;
    let n = t;
    if (s) {
      const h = P(t).multiplyScalar(T.Z_FIGHTING_OFFSET);
      n = t.map((c) => c.clone().add(h));
    }
    H(e).then(({ texture: h, transparent: c }) => {
      var x;
      const v = new y.MeshBasicMaterial({
        map: h,
        transparent: c || r < 1,
        opacity: r,
        side: y.DoubleSide
      });
      this.originRatio = h.image.width / h.image.height, this.objectFit = (x = i == null ? void 0 : i.objectFit) != null ? x : "contain";
      const u = g(this.objectFit, n, h.image.width / h.image.height), p = I(...u), f = u.map((_) => _.clone().sub(p)), w = new F(f);
      this.position.copy(p), this.geometry = w, this.material = v;
    }).catch((h) => {
      console.error(`Imageplane error: ${h == null ? void 0 : h.message}`);
    });
  }
  changePointsOrParams(e) {
    const { cornerPoints: t, params: i = {} } = e, { objectFit: s = this.objectFit } = i;
    let r = t;
    const { resolveZFighting: n } = i != null ? i : {};
    if (n) {
      const v = P(t).multiplyScalar(T.Z_FIGHTING_OFFSET);
      r = t.map((u) => u.clone().add(v));
    }
    const o = g(s != null ? s : "contain", r, this.originRatio), d = I(...o), h = o.map((v) => v.clone().sub(d)), c = new F(h);
    this.objectFit = s != null ? s : "contain", this.position.copy(d), this.geometry = c;
  }
}
class K extends C {
  // eslint-disable-next-line max-params
  constructor(e, t, i) {
    const {
      videoCoverSrc: s,
      objectFit: r = "contain",
      playButton: n = "withText",
      paused: o = !0,
      videoTextureMap: d,
      ImageTextureMap: h,
      domEvents: c,
      opacity: v = 1
    } = i != null ? i : {};
    super();
    a(this, "isVideoPlane", !0);
    a(this, "name", "PanoTagPluginImagePlane");
    a(this, "videoInstance");
    a(this, "onVideoReady");
    a(this, "buttonSrc");
    a(this, "videoCoverSrc");
    a(this, "domEvents");
    a(this, "disposers", []);
    a(this, "cornerPoints");
    a(this, "videoMesh");
    a(this, "coverMesh");
    a(this, "buttonMesh");
    a(this, "videoTextureMap");
    a(this, "ImageTextureMap");
    a(this, "initialOpacity");
    this.cornerPoints = t, this.src = e, this.initialOpacity = v, this.buttonSrc = (() => n === "withText" ? B : n === "withoutText" ? E : typeof n == "string" ? n : E)(), this.videoCoverSrc = s, this.objectFit = r, this.videoTextureMap = d, this.ImageTextureMap = h, this.domEvents = c, this.position.copy(I(...t)), this.videoCoverSrc && o ? this.addCoverMesh().then(() => this.addButtonMesh()) : this.addVideoMesh().then(() => {
      o ? this.addButtonMesh() : this.play(!0);
    }), this.addEventListener("removed", () => {
      this.remove(...this.children);
    }), this.addEventListener("dispose", () => {
      var u;
      (u = this.disposers) == null || u.forEach((p) => p == null ? void 0 : p());
    });
  }
  play(e = !1) {
    return m(this, null, function* () {
      this.videoMesh || (yield this.addVideoMesh()), this.showPlayUI(), this.videoInstance.paused && this.videoInstance.play().then(() => this.showPlayUI()).catch((t) => {
        this.pause(), console.error("play error", t);
      }), this.videoInstance.muted = e, this.render();
    });
  }
  pause() {
    this.videoInstance && (this.videoInstance.pause(), this.showPauseUI().then(() => this.render()));
  }
  initialRenderHooks(e) {
    const i = e(() => {
      var s;
      this.videoMesh && ((s = this.videoInstance) == null ? void 0 : s.paused) === !1 && (this.videoMesh.needsRender = !0);
    });
    this.disposers.push(() => i);
  }
  showPlayUI() {
    this.coverMesh && (this.coverMesh.visible = !1), this.remove(this.buttonMesh), this.videoMesh.visible = !0;
  }
  showPauseUI() {
    return m(this, null, function* () {
      this.coverMesh ? (this.coverMesh.visible = !0, this.videoMesh && (this.videoMesh.visible = !1)) : (yield this.addCoverMesh(), this.coverMesh && (this.videoMesh.visible = !1)), this.addButtonMesh().then(() => this.render());
    });
  }
  render() {
    var e;
    this.videoMesh && (this.videoMesh.needsRender = !0), this.coverMesh && (this.coverMesh.needsRender = !0), this.buttonMesh && (this.buttonMesh.needsRender = !0), this.videoMesh && ((e = this.videoInstance) == null ? void 0 : e.paused) === !1 && (this.videoMesh.needsRender = !0);
  }
  addCoverMesh() {
    return m(this, null, function* () {
      if (this.children.includes(this.coverMesh))
        return;
      const e = yield (() => m(this, null, function* () {
        if (this.coverMesh)
          return this.coverMesh;
        if (!this.videoCoverSrc)
          return;
        const { texture: t, transparent: i } = yield this.getImageTexture(this.videoCoverSrc), s = new y.MeshBasicMaterial({
          transparent: i || this.initialOpacity < 1,
          opacity: this.initialOpacity,
          map: t,
          side: y.DoubleSide
        }), r = g(this.objectFit, this.cornerPoints, t.image.width / t.image.height), n = new S(r, s);
        n.position.copy(new b(0, 0, 0)), n.name = "videoCoverMesh";
        const o = P(r).multiplyScalar(T.Z_FIGHTING_OFFSET);
        return n.position.add(o), n;
      }))();
      return e && (this.children.includes(this.coverMesh) || (this.add(e), this.coverMesh = e)), e;
    });
  }
  addVideoMesh() {
    return m(this, null, function* () {
      var i;
      if (this.children.includes(this.videoMesh))
        return;
      const e = yield (() => m(this, null, function* () {
        if (this.videoMesh)
          return this.videoMesh;
        if (!this.src)
          return;
        const s = this.getVideoTexture(this.src), r = new y.MeshBasicMaterial({
          transparent: this.initialOpacity < 1,
          opacity: this.initialOpacity,
          map: s,
          side: y.DoubleSide
        }), n = yield new Promise((h) => {
          s.metadataLoaded ? h(g(this.objectFit, this.cornerPoints, s.image.videoWidth / s.image.videoHeight)) : s.addEventListener(
            "videoLoaded",
            () => h(g(this.objectFit, this.cornerPoints, s.image.videoWidth / s.image.videoHeight))
          );
        }), o = new S(n, r);
        o.name = "videoMesh", o.position.copy(new b(0, 0, 0));
        const d = P(n).multiplyScalar(T.Z_FIGHTING_OFFSET);
        return o.position.add(d), o;
      }))();
      if (!e)
        return;
      this.domEvents.addAutoBindEventListener(
        e,
        "click",
        () => {
          var s;
          !this.videoInstance.paused && ((s = this.videoInstance) != null && s.muted) ? this.videoInstance.muted = !1 : this.pause();
        },
        { noEmitWhenHide: !0 }
      );
      const t = e.material.map.image;
      return (i = this.onVideoReady) == null || i.call(this, t), t.addEventListener("playing", () => {
        this.coverMesh || this.remove(this.buttonMesh), this.render();
      }), t.addEventListener("pause", () => {
        this.videoInstance.paused && (this.showPauseUI(), this.render());
      }), this.children.includes(this.videoMesh) || (this.add(e), this.videoMesh = e, this.videoInstance = t), e;
    });
  }
  addButtonMesh() {
    return m(this, null, function* () {
      if (this.children.includes(this.buttonMesh))
        return;
      const e = yield (() => m(this, null, function* () {
        var u, p, f, w;
        if (this.buttonMesh)
          return this.buttonMesh;
        const t = (p = (u = this.videoMesh) == null ? void 0 : u.geometry.points[0].distanceTo(this.videoMesh.geometry.points[3])) != null ? p : 1 / 0, i = (w = (f = this.coverMesh) == null ? void 0 : f.geometry.points[0].distanceTo(this.coverMesh.geometry.points[3])) != null ? w : 1 / 0, s = this.cornerPoints[0].distanceTo(this.cornerPoints[3]), n = Math.min(t, i, s) / s * 0.3, { texture: o, transparent: d } = yield this.getImageTexture(this.buttonSrc), h = g("contain", this.cornerPoints, o.image.width / o.image.height), c = new S(h, new j(o));
        c.position.copy(new b(0, 0, 0)), c.name = "buttonMesh", c.scale.set(n, n, n), c.material.side = y.DoubleSide, this.domEvents.addAutoBindEventListener(
          c,
          "click",
          () => {
            this.play();
          },
          { noEmitWhenHide: !0 }
        );
        const v = P(h).multiplyScalar(T.Z_FIGHTING_OFFSET * 2);
        return c.position.add(v), c;
      }))();
      return this.children.includes(this.buttonMesh) || (this.add(e), this.buttonMesh = e), e;
    });
  }
  getImageTexture(e) {
    return m(this, null, function* () {
      var i, s;
      if ((i = this.ImageTextureMap) != null && i.has(e))
        return this.ImageTextureMap.get(e);
      const t = yield H(e);
      return (s = this.ImageTextureMap) == null || s.set(e, t), t;
    });
  }
  getVideoTexture(e) {
    var i, s;
    if ((i = this.videoTextureMap) != null && i.has(e))
      return this.videoTextureMap.get(e);
    const t = V(e);
    return (s = this.videoTextureMap) == null || s.set(e, t), t;
  }
  changePointsOrParams(e) {
    return m(this, null, function* () {
      const { cornerPoints: t, params: i } = e;
      t && (this.cornerPoints = t, this.position.copy(I(...t))), i != null && i.objectFit && (this.objectFit = i.objectFit), yield this.updateAllMeshes();
    });
  }
  updateAllMeshes() {
    return m(this, null, function* () {
      this.videoMesh && (yield this.updateVideoMesh()), this.coverMesh && (yield this.updateCoverMesh()), this.buttonMesh && (yield this.updateButtonMesh()), this.render();
    });
  }
  updateVideoMesh() {
    return m(this, null, function* () {
      if (!this.videoMesh || !this.src)
        return;
      const e = this.getVideoTexture(this.src), t = yield new Promise((o) => {
        e.metadataLoaded ? o(g(this.objectFit, this.cornerPoints, e.image.videoWidth / e.image.videoHeight)) : e.addEventListener(
          "videoLoaded",
          () => o(g(this.objectFit, this.cornerPoints, e.image.videoWidth / e.image.videoHeight))
        );
      }), i = I(...t), s = t.map((o) => o.clone().sub(i)), r = new F(s);
      this.videoMesh.geometry.dispose(), this.videoMesh.geometry = r, this.videoMesh.position.copy(new b(0, 0, 0));
      const n = P(t).multiplyScalar(T.Z_FIGHTING_OFFSET);
      this.videoMesh.position.add(n);
    });
  }
  updateCoverMesh() {
    return m(this, null, function* () {
      if (!this.coverMesh || !this.videoCoverSrc)
        return;
      const { texture: e } = yield this.getImageTexture(this.videoCoverSrc), t = g(this.objectFit, this.cornerPoints, e.image.width / e.image.height), i = I(...t), s = t.map((n) => n.clone().sub(i)), r = new F(s);
      this.coverMesh.geometry.dispose(), this.coverMesh.geometry = r, this.coverMesh.position.copy(new b(0, 0, 0));
    });
  }
  updateButtonMesh() {
    return m(this, null, function* () {
      var u, p, f, w;
      if (!this.buttonMesh)
        return;
      const { texture: e } = yield this.getImageTexture(this.buttonSrc), t = g("contain", this.cornerPoints, e.image.width / e.image.height), i = I(...t), s = t.map((x) => x.clone().sub(i)), r = new F(s), n = (p = (u = this.videoMesh) == null ? void 0 : u.geometry.points[0].distanceTo(this.videoMesh.geometry.points[3])) != null ? p : 1 / 0, o = (w = (f = this.coverMesh) == null ? void 0 : f.geometry.points[0].distanceTo(this.coverMesh.geometry.points[3])) != null ? w : 1 / 0, d = this.cornerPoints[0].distanceTo(this.cornerPoints[3]), c = Math.min(n, o, d) / d * 0.3;
      this.buttonMesh.geometry.dispose(), this.buttonMesh.geometry = r, this.buttonMesh.position.copy(new b(0, 0, 0)), this.buttonMesh.scale.set(c, c, c);
      const v = P(t).multiplyScalar(T.Z_FIGHTING_OFFSET * 2);
      this.buttonMesh.position.add(v);
    });
  }
}
export {
  J as ImagePlane,
  K as VideoPlane
};
