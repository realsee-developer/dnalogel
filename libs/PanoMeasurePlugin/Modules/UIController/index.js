var a = Object.defineProperty;
var h = (e, o, t) => o in e ? a(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t;
var i = (e, o, t) => (h(e, typeof o != "symbol" ? o + "" : o, t), t);
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
import "../../utils/isIntersecting.js";
import "../../utils/dom/areaDom.js";
import "../../../shared-utils/three/geometryUtil.js";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../../../vendor/three/build/three.module.js";
import "../../../shared-utils/tag.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Subscribe.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../shared-utils/three/core/Sphere.js";
import "animejs";
import "../../../shared-utils/isNil.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../../shared-utils/three/Magnifier.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../../shared-utils/three/Assets/index.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../CSS3DRenderPlugin/utils/even.js";
import "../../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../shared-utils/three/PointSelector/utils/html.js";
import "../../../shared-utils/five/initialCSS3DRender.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "../../../CSS3DRenderPlugin/utils/three/THREEJS_CSS3DRenderer.js";
import "../../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../../Sculpt/Meshes/Line.js";
import "../../../Sculpt/typings/style.js";
import "../../../Sculpt/utils/removeAllTag.js";
import "../../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../../shared-utils/util.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../../shared-utils/isTouchDevice.js";
import "../../../shared-utils/five/getPosition.js";
import "../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../shared-utils/three/PointSelector/utils/contents.js";
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
class yo {
  constructor(o, t) {
    i(this, "revoke");
    i(this, "container");
    i(this, "mainController");
    i(this, "disposers", []);
    i(this, "measureController");
    i(this, "mode");
    i(this, "svelteDom");
    i(this, "_params");
    i(this, "handleExit", () => {
      const o = this.container.querySelector(".fpm__exit-icon"), t = this.container.querySelector(".fpm__exit");
      if (!t || !o)
        throw new Error("cannot find dom");
      this.mode === "pc" && (Object.assign(t.style, E), Object.assign(o == null ? void 0 : o.style, x));
      const r = () => {
        t.style.opacity = "1";
      }, s = () => {
        t.style.opacity = "0.85";
      }, n = () => {
        this.measureController.disable();
      };
      return t.addEventListener("click", n), t.addEventListener("mouseenter", r), t.addEventListener("mouseleave", s), () => {
        t.removeEventListener("click", n), t.removeEventListener("mouseenter", r), t.removeEventListener("mouseleave", s);
      };
    });
    var s, n;
    this._params = t, this.measureController = o, this.mode = (s = t.mode) != null ? s : "pc", this.container = document.createElement("div"), this.container.innerHTML = this.mode === "mobile" ? u : d, this.container.classList.add("fpm__ui-controller", this.mode), this.container.style.background = "rgba(0, 0, 0, 0.15)";
    const r = (n = t.useNewUI) != null ? n : !1;
    if (r && (t.pointSelectorMode === "cursor" ? this.svelteDom = new _({
      target: t.container,
      props: { measureController: this.measureController, i18n: t.i18n, showExit: t.showExit }
    }) : t.pointSelectorMode === "fixed" && (this.svelteDom = new b({
      target: t.container,
      props: { measureController: this.measureController, i18n: t.i18n, showExit: t.showExit }
    }))), !r) {
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
    return this.container.style.display = "none", this.container.style.opacity = "0", this.container.style.transform = "translate(0, 10px)", this.mode === "pc" && ((o = this.revoke) == null || o.dispose()), (t = this.mainController) == null || t.dispose(), this.disposers.forEach((r) => r()), this.disposers = [], this;
  }
}
export {
  yo as UIController
};
