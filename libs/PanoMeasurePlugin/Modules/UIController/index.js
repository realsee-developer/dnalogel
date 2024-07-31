var a = Object.defineProperty;
var h = (r, o, t) => o in r ? a(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t;
var e = (r, o, t) => (h(r, typeof o != "symbol" ? o + "" : o, t), t);
import d from "./HTML.js";
import u from "./mobileHTML.js";
import { controllerBackgroundStyle as y, operatingSpaceStyle as f, uiWrapperStyle as v, textStyle as C, exitItemStyle as E, exitIconStyle as x } from "./style.js";
import { MainBtnController as S } from "./MainBtnController.js";
import { MobileMainBtnController as g } from "./mobileMainBtnController.js";
import w from "./Revoke/index.js";
import _ from "../../Components/Controller0.js";
import b from "../../Components/Controller1.js";
import "../../../vendor/svelte/internal/index.js";
import "../../Components/Common/Switcher0.js";
import "../../Components/Common/Exit.js";
import "../../Controller/EditController.js";
import "../../Model/line.js";
import "../../../shared-utils/uuid.js";
import "../../utils/line.js";
import "../../../shared-utils/five/FiveLine.js";
import "@realsee/five/line";
import "../../utils/constants.js";
import "three";
import "@realsee/five";
import "../../utils/dom/distanceItem.js";
import "../../utils/dom/base.js";
import "../../utils/isNDCPointInScreen.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../Model/point.js";
import "../../../shared-utils/throttle.js";
import "../../Controller/BaseController.js";
import "../../utils/ironbox.js";
import "../../Model/polyline.js";
import "../../Model/area.js";
import "../../Model/polygon.js";
import "../../../shared-utils/three/IObject3D.js";
import "../../../shared-utils/three/generatePolygonGeometry.js";
import "../../../shared-utils/three/earcut3D.js";
import "earcut";
import "../../../shared-utils/three/getNormal.js";
import "../../utils/dom/areaDom.js";
import "../../../shared-utils/three/geometryUtil.js";
import "hammerjs";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../shared-utils/util.js";
import "../../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../../CSS3DRenderPlugin/utils/even.js";
import "../../../shared-utils/Subscribe.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import "../../../shared-utils/isNil.js";
import "../../utils/isIntersecting.js";
import "../../../shared-utils/three/PointSelector.js";
import "../../../shared-utils/three/PointSelectorHelper.js";
import "../../../shared-utils/three/Magnifier.js";
import "../../../shared-utils/three/PointHelper.js";
import "../../../shared-utils/three/Assets/index.js";
import "../../../shared-utils/three/PointDomHelper.js";
import "../rangePiece/html.js";
import "../../../CSS3DRenderPlugin/index.js";
import "../../../CSS3DRenderPlugin/Controller.js";
import "../../../shared-utils/url/absoluteUrl.js";
import "../../../shared-utils/five/fiveModelLoad.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/animationFrame/BetterTween.js";
import "../../../shared-utils/animationFrame/index.js";
import "../../../shared-utils/isTouchDevice.js";
import "../../../shared-utils/five/getPosition.js";
import "../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../DeleteDom/index.js";
import "../DeleteDom/_Assets/delete.svg.js";
import "../DeleteDom/_Assets/delete_bg.png.js";
import "../DeleteDom/_Assets/delete_hover_bg.png.js";
import "../../utils/math.js";
import "../../Components/Common/icons/index.js";
import "../../Components/Common/Switcher1.js";
import "../../Components/Common/CircleButton.js";
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
class ro {
  constructor(o, t) {
    e(this, "revoke");
    e(this, "container");
    e(this, "mainController");
    e(this, "disposers", []);
    e(this, "measureController");
    e(this, "mode");
    e(this, "svelteDom");
    e(this, "_params");
    e(this, "handleExit", () => {
      const o = this.container.querySelector(".fpm__exit-icon"), t = this.container.querySelector(".fpm__exit");
      if (!t || !o)
        throw new Error("cannot find dom");
      this.mode === "pc" && (Object.assign(t.style, E), Object.assign(o == null ? void 0 : o.style, x));
      const i = () => {
        t.style.opacity = "1";
      }, s = () => {
        t.style.opacity = "0.85";
      }, n = () => {
        this.measureController.disable();
      };
      return t.addEventListener("click", n), t.addEventListener("mouseenter", i), t.addEventListener("mouseleave", s), () => {
        t.removeEventListener("click", n), t.removeEventListener("mouseenter", i), t.removeEventListener("mouseleave", s);
      };
    });
    var s, n;
    this._params = t, this.measureController = o, this.mode = (s = t.mode) != null ? s : "pc", this.container = document.createElement("div"), this.container.innerHTML = this.mode === "mobile" ? u : d, this.container.classList.add("fpm__ui-controller", this.mode), this.container.style.background = "rgba(0, 0, 0, 0.15)";
    const i = (n = t.useNewUI) != null ? n : !1;
    if (i && (t.pointSelectorMode === "cursor" ? this.svelteDom = new _({
      target: t.container,
      props: { measureController: this.measureController, i18n: t.i18n, showExit: t.showExit }
    }) : t.pointSelectorMode === "fixed" && (this.svelteDom = new b({
      target: t.container,
      props: { measureController: this.measureController, i18n: t.i18n, showExit: t.showExit }
    }))), !i) {
      t.container.appendChild(this.container);
      const l = this.container.querySelectorAll(".fpm__text"), m = this.container.querySelector(".fpm_ui-bg"), p = this.container.querySelector(".fpm_operating-space");
      Object.assign(m == null ? void 0 : m.style, y), Object.assign(p == null ? void 0 : p.style, f), Object.assign(this.container.style, v), l.forEach((c) => Object.assign(c.style, C));
    }
  }
  dispose() {
    var o;
    this.hide(), (o = this.svelteDom) == null || o.$destroy(), this.container.remove();
  }
  show() {
    return this.container.style.display = "block", this.container.style.opacity = "1", this.container.style.transform = "translate(0, 0)", this.mode === "pc" ? (this.revoke = new w(this.measureController, this.container), this.mainController = new S(this.measureController, this.container, this._params)) : this.mainController = new g(this.measureController, this.container, this._params), this.disposers.push(this.handleExit()), this;
  }
  hide() {
    var o, t;
    return this.container.style.display = "none", this.container.style.opacity = "0", this.container.style.transform = "translate(0, 10px)", this.mode === "pc" && ((o = this.revoke) == null || o.dispose()), (t = this.mainController) == null || t.dispose(), this.disposers.forEach((i) => i()), this.disposers = [], this;
  }
}
export {
  ro as UIController
};
