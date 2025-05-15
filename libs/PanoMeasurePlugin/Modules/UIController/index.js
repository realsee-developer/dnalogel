var h = Object.defineProperty;
var c = (r, i, t) => i in r ? h(r, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[i] = t;
var o = (r, i, t) => (c(r, typeof i != "symbol" ? i + "" : i, t), t);
import d from "./HTML.js";
import u from "./mobileHTML.js";
import { controllerBackgroundStyle as y, operatingSpaceStyle as f, uiWrapperStyle as v, textStyle as w, exitItemStyle as C, exitIconStyle as E } from "./style.js";
import { MainBtnController as x } from "./MainBtnController.js";
import { MobileMainBtnController as g } from "./mobileMainBtnController.js";
import S from "./Revoke/index.js";
import b from "../../Components/Controller0.js";
import _ from "../../Components/Controller1.js";
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
import "../../../vendor/earcut/src/earcut.js";
import "../../../shared-utils/three/getNormal.js";
import "../../utils/isIntersecting.js";
import "../../utils/dom/areaDom.js";
import "../../../shared-utils/three/geometryUtil.js";
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
import "../../../shared-utils/three/core/Raycaster.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../shared-utils/five/fiveEveryReadyListener.js";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../../shared-utils/three/Magnifier.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../../shared-utils/three/Assets/index.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../shared-utils/even.js";
import "../../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../../shared-utils/createResizeObserver.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../shared-utils/util.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../../shared-utils/three/PointSelector/utils/html.js";
import "../../../shared-utils/CSS3DRender/index.js";
import "../../../shared-utils/five/fiveModelLoad.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../../Sculpt/Meshes/Line.js";
import "../../../Sculpt/typings/style.js";
import "../../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../../shared-utils/three/core/LineGeometry.js";
import "../../../shared-utils/three/core/LineMaterial.js";
import "../../../shared-utils/three/core/Line2.js";
import "../../../shared-utils/three/core/LineMaterial2.js";
import "../../../Sculpt/utils/unit.js";
import "../../../Sculpt/utils/renderDom.js";
import "../../../shared-utils/five/FivePuppet.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../../shared-utils/isTouchDevice.js";
import "../../../shared-utils/five/getPosition.js";
import "../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../shared-utils/three/PointSelector/utils/contents.js";
import "../../../Sculpt/utils/three/rayOnLine.js";
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
class ki {
  constructor(i, t) {
    o(this, "revoke");
    o(this, "container");
    o(this, "wrapper");
    o(this, "mainController");
    o(this, "disposers", []);
    o(this, "measureController");
    o(this, "mode");
    o(this, "svelteDom");
    o(this, "_params");
    o(this, "useNewUI", !1);
    o(this, "handleExit", () => {
      const i = this.container.querySelector(".fpm__exit-icon"), t = this.container.querySelector(".fpm__exit");
      if (!t || !i)
        throw new Error("cannot find dom");
      this.mode === "pc" && (Object.assign(t.style, C), Object.assign(i == null ? void 0 : i.style, E));
      const e = () => {
        t.style.opacity = "1";
      }, s = () => {
        t.style.opacity = "0.85";
      }, n = () => {
        this.measureController.disable();
      };
      return t.addEventListener("click", n), t.addEventListener("mouseenter", e), t.addEventListener("mouseleave", s), () => {
        t.removeEventListener("click", n), t.removeEventListener("mouseenter", e), t.removeEventListener("mouseleave", s);
      };
    });
    var s, n;
    this._params = t, this.measureController = i, this.mode = (s = t.mode) != null ? s : "pc", this.wrapper = t.container, this.container = document.createElement("div"), this.wrapper.appendChild(this.container);
    const e = (n = t.useNewUI) != null ? n : !1;
    if (this.useNewUI = e, e && (this.container.style.position = "absolute", this.container.style.top = "0", this.container.style.left = "0", this.container.style.width = "100%", this.container.style.height = "100%", t.pointSelectorMode === "cursor" ? this.svelteDom = new b({
      target: this.container,
      props: { measureController: this.measureController, i18n: t.i18n, showExit: t.showExit }
    }) : t.pointSelectorMode === "fixed" && (this.svelteDom = new _({
      target: this.container,
      props: { measureController: this.measureController, i18n: t.i18n, showExit: t.showExit }
    }))), !e) {
      this.container.innerHTML = this.mode === "mobile" ? u : d, this.container.classList.add("fpm__ui-controller", this.mode), this.container.style.background = "rgba(0, 0, 0, 0.15)";
      const l = this.container.querySelectorAll(".fpm__text"), m = this.container.querySelector(".fpm_ui-bg"), p = this.container.querySelector(".fpm_operating-space");
      Object.assign(m == null ? void 0 : m.style, y), Object.assign(p == null ? void 0 : p.style, f), Object.assign(this.container.style, v), l.forEach((a) => Object.assign(a.style, w));
    }
  }
  dispose() {
    var i;
    this.hide(), (i = this.svelteDom) == null || i.$destroy(), this.container.remove();
  }
  show() {
    return this.container.style.display = "block", this.container.style.opacity = "1", this.container.style.transform = "translate(0, 0)", this.useNewUI === !1 && (this.mode === "pc" ? (this.revoke = new S(this.measureController, this.container), this.mainController = new x(this.measureController, this.container, this._params)) : this.mainController = new g(this.measureController, this.container, this._params), this.disposers.push(this.handleExit())), this;
  }
  hide() {
    var i, t;
    return this.container.style.display = "none", this.container.style.opacity = "0", this.container.style.transform = "translate(0, 10px)", this.useNewUI === !1 && this.mode === "pc" && ((i = this.revoke) == null || i.dispose()), (t = this.mainController) == null || t.dispose(), this.disposers.forEach((e) => e()), this.disposers = [], this;
  }
}
export {
  ki as UIController
};
