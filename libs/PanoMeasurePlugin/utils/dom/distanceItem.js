var j = Object.defineProperty, V = Object.defineProperties;
var $ = Object.getOwnPropertyDescriptors;
var F = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var u = (i, t, e) => t in i ? j(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, y = (i, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && u(i, e, t[e]);
  if (F)
    for (var e of F(t))
      B.call(t, e) && u(i, e, t[e]);
  return i;
}, D = (i, t) => V(i, $(t));
var m = (i, t, e) => (u(i, typeof t != "symbol" ? t + "" : t, e), e);
import { ItemDom as L } from "./base.js";
import { Vector2 as I } from "three";
import { isNDCPointInFront as g } from "../isNDCPointInScreen.js";
import { centerPoint as U } from "../../../shared-utils/three/centerPoint.js";
class K extends L {
  constructor(e) {
    var n;
    e.contentStyle = D(y({}, e.contentStyle), {
      background: "#FFFFFF",
      color: "#041066",
      fontFamily: "Arial-BoldMT",
      fontWeight: "BoldMT",
      letterSpacing: "0",
      lineHeight: "20px",
      padding: "2px 8px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "--distance-scale": "1",
      transition: "font-size 0.5s ease"
    });
    super(e);
    m(this, "line");
    m(this, "lastFOV");
    m(this, "cameraUpdateHandler", null);
    m(this, "onPanoChange", () => {
      const e = this.getFiveInstance();
      e && setTimeout(() => this.update(e), 100);
    });
    if (this.line = e.line, (n = this.params.userDistanceItem) != null && n.element ? this.containerDom.appendChild(this.params.userDistanceItem.element) : this.containerDom.appendChild(this.contentDom), !document.getElementById("PanoMeasurePluginFontSizes")) {
      const a = document.createElement("style");
      a.id = "PanoMeasurePluginFontSizes", document.head.appendChild(a), a.innerHTML = `
        .pano-measure-item-content {
          transition: font-size 0.5s ease; /* Smooth transition for font size */
        }
        
        /* sm screen */
        @media screen and (max-width: 499px) {
          .pano-measure-item-content {
            font-size: calc(12px + (14px - 12px) * var(--distance-scale));
          }
        }
        
        /* md screen */
        @media screen and (min-width: 500px) and (max-width: 929px) {
          .pano-measure-item-content {
            font-size: calc(12px + (14px - 12px) * var(--distance-scale));
          }
        }
        
        /* lg screen */
        @media screen and (min-width: 930px) and (max-width: 1365px) {
          .pano-measure-item-content {
            font-size: calc(14px + (16px - 14px) * var(--distance-scale));
          }
        }
        
        /* xl screen */
        @media screen and (min-width: 1366px) and (max-width: 2549px) {
          .pano-measure-item-content {
            font-size: calc(14px + (16px - 14px) * var(--distance-scale));
          }
        }
        
        /* xxl screen */
        @media screen and (min-width: 2550px) {
          .pano-measure-item-content {
            font-size: calc(0.875rem + (1rem - 0.875rem) * var(--distance-scale));
          }
        }
      `;
    }
    this.contentDom.classList.add("pano-measure-item-content");
  }
  appendTo(e) {
    if (super.appendTo(e), !this.cameraUpdateHandler) {
      this.cameraUpdateHandler = () => this.onCameraUpdate();
      const n = this.getFiveInstance();
      n && (n.on("cameraUpdate", this.cameraUpdateHandler), n.on("cameraFovUpdate", this.cameraUpdateHandler), n.on("panoArrived", this.onPanoChange));
    }
    return this;
  }
  remove() {
    if (this.cameraUpdateHandler) {
      const e = this.getFiveInstance();
      e && (e.off("cameraUpdate", this.cameraUpdateHandler), e.off("cameraFovUpdate", this.cameraUpdateHandler), e.off("panoArrived", this.onPanoChange)), this.cameraUpdateHandler = null;
    }
    super.remove();
  }
  /** 获取内容文本 */
  getCurrentContent() {
    var l, d, s, o;
    if (this.line.points.length < 2)
      return "";
    const [e, n] = this.line.points, a = e.position.clone().distanceTo(n.position), r = (d = this.line.text) != null ? d : (l = this.line.model.config) == null ? void 0 : l.defaultText, p = (o = (s = this.line.model.config) == null ? void 0 : s.getDistanceText) == null ? void 0 : o.call(s, a), c = r != null ? r : p;
    return c != null ? c : a.toFixed(2) + "m";
  }
  update(e) {
    var v;
    if (this.line.mesh.visible === !1) {
      this.hide();
      return;
    }
    const n = e.getElement();
    if (!n)
      return;
    const a = n.clientWidth, r = n.clientHeight, p = a / 2, c = r / 2;
    if (this.line.points.length < 2)
      return;
    const [l, d] = this.line.points.map((W) => W.position.clone().applyMatrix4(this.line.mesh.matrixWorld)), s = l.clone().project(e.camera), o = d.clone().project(e.camera), h = U(l, d).clone().project(e.camera), f = new I(s.x * p, s.y * c), x = new I(o.x * p, o.y * c), P = f.distanceTo(x);
    if ((() => !(Math.abs(s.z) > 1 || Math.abs(o.z) > 1 || !g(s) && !g(o) || !g(h) || P === 0))() === !1) {
      this.hide();
      return;
    }
    const C = U(l, d).distanceTo(e.camera.position), H = e.camera.fov || 60, M = 2 * Math.tan(0.5 * H / 180 * Math.PI), z = Math.max(Math.min(1 - M * C / 40, 1), 0);
    this.contentDom.style.setProperty("--distance-scale", z.toString());
    const S = (h.x + 1) / 2 * a, w = -(h.y - 1) / 2 * r, T = -(Math.atan((f.y - x.y) / (f.x - x.x)) * 180) / Math.PI, b = this.containerDom.parentElement && this.contentDom.clientWidth > P ? -20 : 0;
    this.containerDom.style.transform = `translate(${S}px, ${w}px) rotate(${T}deg) translateY(${b}px)`, this.show(), (v = this.params.userDistanceItem) == null || v.update({ line: this.line, polyline: this.line.getPolyline() });
    const E = this.getCurrentContent();
    this.contentDom.innerText = E;
  }
  getFiveInstance() {
    var e, n;
    return (n = (e = this.line.model) == null ? void 0 : e.config) == null ? void 0 : n.five;
  }
  onCameraUpdate() {
    const e = this.getFiveInstance();
    e != null && e.camera && this.lastFOV !== e.camera.fov && (this.lastFOV = e.camera.fov, this.update(e));
  }
}
export {
  K as DistanceItem
};
