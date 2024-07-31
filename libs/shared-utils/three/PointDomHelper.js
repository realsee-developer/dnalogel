var l = Object.defineProperty;
var m = (o, e, t) => e in o ? l(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var n = (o, e, t) => (m(o, typeof e != "symbol" ? e + "" : e, t), t);
import * as c from "three";
import { Easing as p } from "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "hammerjs";
import { rangePieceImg as h } from "../../PanoMeasurePlugin/Modules/rangePiece/html.js";
import { CSS3DRenderPlugin as b } from "../../CSS3DRenderPlugin/index.js";
import "animejs";
import { BetterTween as u } from "../animationFrame/BetterTween.js";
class C {
  constructor(e) {
    n(this, "five");
    n(this, "contentElement", document.createElement("div"));
    n(this, "animeIns");
    n(this, "container");
    n(this, "css3DObject");
    n(this, "disposeCss3DObject");
    n(this, "state", { enabled: !1 });
    this.five = e;
    const s = 0.4 / 2, r = b(e).create3DDomContainer(
      [
        [-s, s, 0],
        [-s, -s, 0],
        [s, -s, 0],
        [s, s, 0]
      ].map((i) => new c.Vector3().fromArray(i))
    );
    if (r) {
      const { container: i, dispose: a, css3DObject: d } = r;
      this.container = i, this.css3DObject = d, this.disposeCss3DObject = a;
    }
    this.contentElement.style.width = "100%", this.contentElement.style.height = "100%", this.contentElement.style.backgroundImage = `url(${h})`, this.contentElement.style.backgroundSize = "100%", this.contentElement.style.backgroundRepeat = "no-repeat";
  }
  enable() {
    var e;
    this.state.enabled || (this.state.enabled = !0, (e = this.container) == null || e.appendChild(this.contentElement));
  }
  disable() {
    this.state.enabled && (this.state.enabled = !1, this.contentElement.remove());
  }
  updateWithIntersect(e) {
    if (!e.face || !this.css3DObject)
      return;
    const t = new c.Vector3().addVectors(e.point, e.face.normal);
    this.css3DObject.position.copy(e.point), this.css3DObject.lookAt(t), this.five.needsRender = !0;
  }
  /** 缩放动画 */
  doAnimation() {
    var e;
    (e = this.animeIns) == null || e.dispose(), new u({ progress: 0 }).to({ progress: [1, 0] }).duration(500).easing(p.Quadratic.InOut).onUpdate(({ progress: t }) => {
    }).play();
  }
  dispose() {
    var e;
    (e = this.disposeCss3DObject) == null || e.call(this);
  }
}
export {
  C as PointDomHelper
};
