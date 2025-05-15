var p = Object.defineProperty;
var d = (o, t, e) => t in o ? p(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var n = (o, t, e) => (d(o, typeof t != "symbol" ? t + "" : t, e), e);
import * as c from "three";
import { Easing as l } from "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../tag.js";
import "../../vendor/hammerjs/hammer.js";
import "./PointSelector/index.js";
import "./CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "./core/Five_LineMaterial2.js";
import "./core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import { rangePieceImg as h } from "../../PanoMeasurePlugin/Modules/rangePiece/html.js";
import { CSS3DRenderPlugin as b } from "../../CSS3DRenderPlugin/index.js";
import { BetterTween as u } from "../animationFrame/BetterTween.js";
import "../five/FivePuppet.js";
class V {
  constructor(t) {
    n(this, "five");
    n(this, "contentElement", document.createElement("div"));
    n(this, "animeIns");
    n(this, "container");
    n(this, "css3DObject");
    n(this, "disposeCss3DObject");
    n(this, "state", { enabled: !1 });
    this.five = t;
    const s = 0.4 / 2, r = b(t).create3DDomContainer(
      [
        [-s, s, 0],
        [-s, -s, 0],
        [s, -s, 0],
        [s, s, 0]
      ].map((i) => new c.Vector3().fromArray(i))
    );
    if (r) {
      const { container: i, dispose: a, css3DObject: m } = r;
      this.container = i, this.css3DObject = m, this.disposeCss3DObject = a;
    }
    this.contentElement.style.width = "100%", this.contentElement.style.height = "100%", this.contentElement.style.backgroundImage = `url(${h})`, this.contentElement.style.backgroundSize = "100%", this.contentElement.style.backgroundRepeat = "no-repeat";
  }
  enable() {
    var t;
    this.state.enabled || (this.state.enabled = !0, (t = this.container) == null || t.appendChild(this.contentElement));
  }
  disable() {
    this.state.enabled && (this.state.enabled = !1, this.contentElement.remove());
  }
  updateWithIntersect(t) {
    if (!t.face || !this.css3DObject)
      return;
    const e = new c.Vector3().addVectors(t.point, t.face.normal);
    this.css3DObject.position.copy(t.point), this.css3DObject.lookAt(e), this.five.needsRender = !0;
  }
  /** 缩放动画 */
  doAnimation() {
    var t;
    (t = this.animeIns) == null || t.dispose(), new u({ progress: 0 }).to({ progress: [1, 0] }).duration(500).easing(l.Quadratic.InOut).onUpdate(({ progress: e }) => {
    }).play();
  }
  dispose() {
    var t;
    (t = this.disposeCss3DObject) == null || t.call(this);
  }
}
export {
  V as PointDomHelper
};
