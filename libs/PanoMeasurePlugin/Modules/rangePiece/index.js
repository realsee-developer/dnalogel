var y = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? y(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    g.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      S.call(t, e) && l(a, e, t[e]);
  return a;
};
var i = (a, t, e) => (l(a, typeof t != "symbol" ? t + "" : t, e), e);
import { Raycaster as M, Mesh as v, RingGeometry as G, MeshBasicMaterial as C, DoubleSide as w } from "three";
import p from "../../Model/point.js";
import { exports as f } from "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import { htmlString as P } from "../../../shared-utils/three/PointSelector/utils/html.js";
import { requestAnimationFrameInterval as k } from "../../../shared-utils/animationFrame/index.js";
import { noop as x } from "../../../shared-utils/noop.js";
import { getMouseGroup as A } from "../../utils/mouseGroup.js";
import { calculateThreeMouse as X } from "../../../shared-utils/five/calculateThreeMouse.js";
import { getFiveModel as Y } from "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/uuid.js";
class F {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor(t) {
    i(this, "container", document.createElement("div"));
    i(this, "five");
    i(this, "group");
    i(this, "mouseGroup");
    i(this, "hasAppendMouseGroup", !1);
    i(this, "hook");
    i(this, "content");
    i(this, "intersectMesh");
    i(this, "centerMouseXY");
    i(this, "raycaster", new M());
    i(this, "pieceStyl", {
      matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      scale: 1,
      opacity: 0.4
    });
    i(this, "onCameraDirectionUpdate", () => {
      const t = this.getIntersection();
      if (t) {
        this.pieceChange(t), this.updateMouseGroup(t);
        const e = new p(this.mouseGroup.position);
        this.hook.emit("nowPointChange", e);
      }
    });
    i(this, "onWillChangeState", (t, e) => {
      var s;
      this.dotAnimation();
      const o = (s = this.getIntersection()) == null ? void 0 : s.point;
      o && (e === "editing" ? this.hook.emit("getStartPoint", new p(o)) : this.hook.emit("getEndPoint", new p(o)));
    });
    /** 计算目标中心点经纬度 */
    i(this, "computedCenterMouseXY", () => {
      const t = this.container.querySelector(".range-piece__aim");
      if (!t)
        return null;
      const { left: e, top: o, width: s, height: n } = t.getBoundingClientRect(), r = Math.round(e + s / 2), c = Math.round(o + n / 2), h = X({ x: r, y: c }, this.five.getElement());
      this.centerMouseXY = h;
    });
    /** 计算目标中心点intersection */
    i(this, "getIntersection", () => {
      if (!this.centerMouseXY)
        return null;
      this.raycaster.setFromCamera(this.centerMouseXY, this.five.camera);
      const t = Y(this.five).intersectRaycaster(this.raycaster)[0];
      return t || null;
    });
    this.five = t.five, this.hook = t.hook, this.group = t.group, this.mouseGroup = A(d({ isMobile: !0 }, t.openParams.crossHairParameter)), this.container.innerHTML = P, this.container.classList.add("range-piece-controller"), this.content = this.container.querySelector(".range-piece__content"), this.content && (this.content.style.transform = `matrix3d(${this.pieceStyl.matrix3d.toString()}) scale(${this.pieceStyl.scale})`, this.content.style.opacity = `${this.pieceStyl.opacity}`), t.container.append(this.container), this.intersectMesh = new v(
      new G(0.04, 0.08, 32),
      new C({ color: 1245179, opacity: 0, side: w, transparent: !0 })
    ), this.container.addEventListener("animationend", this.computedCenterMouseXY), this.five.on("cameraUpdate", this.onCameraDirectionUpdate), this.hook.on("willChangeState", this.onWillChangeState);
  }
  dispose() {
    this.container.removeEventListener("animationend", this.computedCenterMouseXY), this.five.off("cameraUpdate", this.onCameraDirectionUpdate), this.hook.off("willChangeState", this.onWillChangeState), this.container.remove(), this.group.remove(this.mouseGroup), this.mouseGroup.remove(), this.hasAppendMouseGroup = !1, this.five.scene.remove(this.intersectMesh);
  }
  pieceChange(t) {
    const e = t.face, o = t.point;
    if (e && o) {
      const n = e.normal.clone().clone().multiplyScalar(0.05), r = o.clone().add(n);
      this.intersectMesh.position.copy(r);
      const c = r.clone().add(n);
      this.intersectMesh.lookAt(c), this.five.scene.add(this.intersectMesh);
      const u = this.intersectMesh.modelViewMatrix.clone().toArray();
      this.changePieceStyl("matrix3d", u);
      const h = this.calculateSize(o);
      this.changePieceStyl("scale", h);
    }
  }
  calculateSize(t) {
    if (!t)
      return;
    const e = this.five.camera.position;
    let o = t.distanceTo(e);
    const s = 4, n = 1;
    return o > s && (o = s), o < n && (o = n), -0.51 / (s - n) * o + 1;
  }
  /** 点击按钮时圆片动画 */
  dotAnimation() {
    const t = f.Easing.Quadratic.InOut, e = { opacity: 0.4, scale: this.pieceStyl.scale }, o = { opacity: [1, 0.4], scale: [this.pieceStyl.scale * 0.8, this.pieceStyl.scale] };
    let s = x;
    const n = new f.Tween(e).to(o, 500).easing(t).start(0).onUpdate(({ opacity: r, scale: c }) => {
      this.changePieceStyl("scale", c), this.changePieceStyl("opacity", r);
    }).onComplete(() => {
      s();
    });
    s = k((r) => {
      n.update(r);
    });
  }
  changePieceStyl(t, e) {
    this.content && (this.pieceStyl[t] = e, this.content.style.transform = `matrix3d(${this.pieceStyl.matrix3d.toString()}) scale(${this.pieceStyl.scale})`, this.content.style.opacity = `${this.pieceStyl.opacity}`);
  }
  updateMouseGroup(t, e) {
    if (!this.hasAppendMouseGroup) {
      this.group.add(this.mouseGroup), this.hasAppendMouseGroup = !0;
      const o = this.container.querySelector(".range-piece__aim");
      o && (o.style.opacity = "0");
    }
    if (!t)
      return this.mouseGroup;
    if (this.mouseGroup.position.copy(t.point), e)
      this.mouseGroup.quaternion.copy(e.quaternion);
    else if (t.face) {
      const s = t.face.normal.clone().multiplyScalar(0.05), r = t.point.clone().add(s).clone().add(s);
      this.mouseGroup.lookAt(r);
    }
    return this.mouseGroup;
  }
}
export {
  F as default
};
