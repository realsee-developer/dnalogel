var x = Object.defineProperty, D = Object.defineProperties;
var G = Object.getOwnPropertyDescriptors;
var I = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var f = (n, s, t) => s in n ? x(n, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[s] = t, p = (n, s) => {
  for (var t in s || (s = {}))
    S.call(s, t) && f(n, t, s[t]);
  if (I)
    for (var t of I(s))
      L.call(s, t) && f(n, t, s[t]);
  return n;
}, U = (n, s) => D(n, G(s));
var o = (n, s, t) => (f(n, typeof s != "symbol" ? s + "" : s, t), t);
import c from "./EditController.js";
import k from "./ViewController.js";
import E from "./WatchController.js";
import u from "./MixedController.js";
import { omit as O } from "../../shared-utils/filter.js";
import { Group as V } from "three";
import { Model as W } from "../Model/index.js";
import { getMouseGroup as A } from "../utils/mouseGroup.js";
import { UIController as B } from "../Modules/UIController/index.js";
import { GuideController as K } from "../Modules/GuideController.js";
import { ShortcutKeyController as H } from "./ShortcutKeyController.js";
import { safeObj as T } from "../../shared-utils/safeObj.js";
import "../../shared-utils/tag.js";
import { Magnifier as j } from "../../shared-utils/three/Magnifier.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/five/FivePuppet.js";
import { isTouchDevice as F } from "../../shared-utils/isTouchDevice.js";
import { Controller as J } from "../../base/BasePlugin.js";
import "../Model/line.js";
import "../../shared-utils/uuid.js";
import "../utils/line.js";
import "../../shared-utils/five/FiveLine.js";
import "../utils/constants.js";
import "@realsee/five";
import "../utils/dom/distanceItem.js";
import "../utils/dom/base.js";
import "../utils/isNDCPointInScreen.js";
import "../../shared-utils/three/centerPoint.js";
import "../Model/point.js";
import "../../shared-utils/throttle.js";
import "./BaseController.js";
import "../utils/ironbox.js";
import "../Model/polyline.js";
import "../Model/area.js";
import "../Model/polygon.js";
import "../../shared-utils/three/IObject3D.js";
import "../../shared-utils/three/generatePolygonGeometry.js";
import "../../shared-utils/three/earcut3D.js";
import "../../vendor/earcut/src/earcut.js";
import "../../shared-utils/three/getNormal.js";
import "../utils/isIntersecting.js";
import "../utils/dom/areaDom.js";
import "../../shared-utils/three/geometryUtil.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/isNil.js";
import "../Modules/DeleteDom/index.js";
import "../Modules/DeleteDom/_Assets/delete.svg.js";
import "../Modules/DeleteDom/_Assets/delete_bg.png.js";
import "../Modules/DeleteDom/_Assets/delete_hover_bg.png.js";
import "../utils/math.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../shared-utils/three/Assets/index.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../shared-utils/even.js";
import "../../shared-utils/Subscribe.js";
import "../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/three/temp.js";
import "../../shared-utils/three/core/Raycaster.js";
import "../../shared-utils/dom/resizeObserver.js";
import "../../shared-utils/five/fiveEveryReadyListener.js";
import "../../shared-utils/five/fiveModelLoad.js";
import "../../shared-utils/three/PointSelector/utils/html.js";
import "../../shared-utils/CSS3DRender/index.js";
import "../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../shared-utils/createResizeObserver.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../Sculpt/Meshes/Line.js";
import "../../Sculpt/typings/style.js";
import "../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/util.js";
import "../../shared-utils/three/core/LineGeometry.js";
import "../../shared-utils/three/core/LineMaterial.js";
import "../../shared-utils/three/core/Line2.js";
import "../../shared-utils/three/core/LineMaterial2.js";
import "../../Sculpt/utils/unit.js";
import "../../Sculpt/utils/renderDom.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
import "../../Sculpt/utils/three/rayOnLine.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../utils/findClosestPoint.js";
import "../utils/ndc2Screen.js";
import "../../shared-utils/getPointFromHammerEvent.js";
import "../Modules/rangePiece/index.js";
import "../../shared-utils/animationFrame/index.js";
import "../../shared-utils/noop.js";
import "../../shared-utils/five/calculateThreeMouse.js";
import "../../shared-utils/tap.js";
import "../Modules/UIController/HTML.js";
import "../Modules/UIController/mobileHTML.js";
import "../Modules/UIController/style.js";
import "../Modules/UIController/MainBtnController.js";
import "../Modules/UIController/mobileMainBtnController.js";
import "../Modules/UIController/Revoke/index.js";
import "../Components/Controller0.js";
import "../../vendor/svelte/internal/index.js";
import "../Components/Common/Switcher0.js";
import "../Components/Common/Exit.js";
import "../Components/Common/icons/index.js";
import "../Components/Controller1.js";
import "../Components/Common/Switcher1.js";
import "../Components/Common/CircleButton.js";
import "../../vendor/svelte/transition/index.js";
import "../../vendor/svelte/easing/index.js";
import "../../vendor/object-assign-deep/objectAssignDeep.js";
import "../Components/Tip.js";
import "../../shared-utils/url/absoluteUrl.js";
class ci extends J {
  constructor(t, e) {
    var l, m, h, a, g, y, C, M, w, P, v, b;
    super(t);
    o(this, "state", { enabled: !0 });
    o(this, "hasOpen", !1);
    /** @deprecated use hooks instead */
    o(this, "hook");
    o(this, "magnifier");
    o(this, "controller", null);
    /** 允许的测量类型 */
    o(this, "allowMeasureType");
    /** 当前的测量类型 */
    o(this, "currentMeasureType");
    o(this, "model");
    o(this, "group");
    o(this, "config");
    o(this, "isMobile");
    o(this, "useUIController");
    o(this, "params");
    o(this, "useGuideController");
    o(this, "container", document.createElement("div"));
    o(this, "shortcutKeyController");
    /** 关闭插件功能
     * @description 清除标尺线条
     * @description 还原点位展示和默认鼠标 UI
     */
    o(this, "disable", () => {
      var t, e, r, i;
      this.hasOpen = !1, this.state.enabled = !1, this.container.style.visibility = "hidden", this.container.style.opacity = "0", (t = this.controller) == null || t.dispose(), (e = this.useUIController) == null || e.hide(), (r = this.useGuideController) == null || r.hide(), (i = this.shortcutKeyController) == null || i.dispose(), this.controller = null, this.five.helperVisible = !0, this.five.scene.remove(this.group), this.five.needsRender = !0, this.hook.emit("disable", !0);
    });
    o(this, "getCurrentMode", () => this.controller instanceof c ? "Edit" : this.controller instanceof E ? "Watch" : this.controller instanceof u ? "Mixed" : this.controller instanceof k ? "View" : null);
    /** 变更场景
     * @description 如果从编辑场景改变到观看场景，不会自动保存，默认丢弃所有改动
     */
    o(this, "changeMode", (t) => {
      var i, l, m, h, a;
      if (!this.hasOpen || this.getCurrentMode() === t)
        return;
      (i = this.controller) == null || i.dispose();
      const e = {
        View: k,
        Watch: E,
        Edit: c,
        Mixed: u
      };
      if (!e[t])
        throw new Error("不存在的 Mode");
      const r = this.createControllerParams();
      this.controller = new e[t](r), t === "View" ? ((l = this.useUIController) == null || l.hide(), (m = this.useGuideController) == null || m.hide()) : ((h = this.useUIController) == null || h.show(), (a = this.useGuideController) == null || a.show()), this.hook.emit("modeChange", t);
    });
    /**
     * @description: 切换测量的类型
     */
    o(this, "changeMeasureType", (t) => {
      this.currentMeasureType = t, this.hook.emit("measureTypeChange", t);
    });
    this.five = t, this.hook = this.hooks, this.params = e, this.config = O(e, ["openParams", "magnifierParams"]), this.model = new W(this.config), this.isMobile = (m = (l = e == null ? void 0 : e.openParams) == null ? void 0 : l.isMobile) != null ? m : !1, this.magnifier = new j(
      t,
      (y = (g = e.magnifierParams) != null ? g : (a = (h = e.pointSelectorConfig) == null ? void 0 : h.helper) == null ? void 0 : a.magnifierParams) != null ? y : { width: 190, height: 190, scale: 2 }
    ), this.allowMeasureType = Array.from(new Set((M = (C = e.editParams) == null ? void 0 : C.allowMeasureType) != null ? M : ["line"])), this.currentMeasureType = (w = this.allowMeasureType[0]) != null ? w : "line", this.group = new V(), this.group.name = "plugin-measure-group", this.container.classList.add("five-plugin-measure-container"), this.container.style.position = "absolute", this.container.style.left = "0", this.container.style.top = "0", this.container.style.visibility = "hidden", this.container.style.pointerEvents = "none", this.container.style.width = "100%", this.container.style.height = "100%", this.container.style.opacity = "0", this.container.style.zIndex = "1";
    const r = (v = (P = e.editParams) == null ? void 0 : P.pointSelectorMode) != null ? v : F ? "fixed" : "cursor", i = (b = this.params.openParams) != null ? b : {};
    if (this.params.useUIController !== !1) {
      const d = p({
        container: this.container,
        openParams: i,
        i18n: e.i18n,
        pointSelectorMode: r,
        useNewUI: this.allowMeasureType.length > 1
      }, T(this.params.useUIController));
      this.useUIController = new B(this, d);
    }
    if (this.params.useGuideController !== !1) {
      const d = p({
        container: this.container,
        pointSelectorMode: r,
        i18n: e.i18n
      }, T(this.params.useGuideController));
      this.useGuideController = new K(this, d);
    }
  }
  appendTo(t) {
    t.append(this.container);
  }
  clear() {
    this.model.clear();
  }
  dispose() {
    var t, e;
    this.disable(), this.clear(), (t = this.useUIController) == null || t.dispose(), (e = this.magnifier) == null || e.dispose(), this.five.needsRender = !0;
  }
  /** 加载数据
   * @description 数据加载时会覆盖当前已保存的数据
   * @description 如果当前正在编辑中，会自动退出并保存编辑
   */
  load(t) {
    let e = t;
    t.list && (e = {
      polylines: t.list.map((i) => i.polyline).map((i) => {
        var l;
        return U(p({}, i), {
          visibleFiveMode: (l = i.visibleFiveMode) != null ? l : ["Panorama"]
        });
      })
    }), this.model.parse(e), this.save();
  }
  /** 插件功能入口
   * @description 会隐藏鼠标的默认聚焦环
   * @description 会隐藏当前 VR 内的点位展示
   */
  enable(t) {
    var e, r, i;
    this.hasOpen || (!this.container.parentElement && ((e = this.five.getElement()) != null && e.parentElement) && this.appendTo(this.five.getElement().parentElement), this.state.enabled = !0, this.hasOpen = !0, this.group.matrix.copy(this.workUtil.transform), this.group.matrix.decompose(this.group.position, this.group.quaternion, this.group.scale), this.group.updateMatrixWorld(), this.five.scene.add(this.group), this.container.style.visibility = "visible", this.container.style.opacity = "1", t != null && t.mode ? this.changeMode(t.mode) : this.isMobile ? this.changeMode("Mixed") : this.changeMode("Watch"), (t == null ? void 0 : t.mode) !== "View" && ((r = this.useUIController) == null || r.show(), (i = this.useGuideController) == null || i.show()), this.shortcutKeyController = new H(this, this.five), this.hook.emit("enable", !0));
  }
  /** 进入编辑模式 */
  edit(t) {
    t && this.changeMeasureType(t);
    const e = this.isMobile ? "Mixed" : "Edit";
    this.changeMode(e);
  }
  /** 撤销编辑 */
  revoke() {
    this.controller instanceof c && this.controller.revoke();
  }
  removePolyline(t) {
    this.model.removePolyline(t);
  }
  removeArea(t) {
    this.model.removeArea(t);
  }
  removePolylineByID(t) {
    const e = this.model.getPolylineByID(t);
    e && this.model.removePolyline(e);
  }
  getPolylineByID(t) {
    return this.model.getPolylineByID(t);
  }
  getEditedPolyline() {
  }
  /**
   * 高亮当前线段
   */
  highlightLine(t) {
    if (this.getCurrentMode() !== "Watch")
      return !1;
    const e = this.model.getLineByID(t);
    return e ? (this.controller.highlightLine(e), !0) : !1;
  }
  clearHighlightLines() {
    return this.getCurrentMode() !== "Watch" ? !1 : (this.controller.clearHighlightLines(), !0);
  }
  /** 保存编辑
   * @description 以下情况可能报错
   */
  save(t) {
    var i;
    if (!(this.controller instanceof c) && !(this.controller instanceof u))
      return this;
    const e = (i = t == null ? void 0 : t.mode) != null ? i : "View", r = this.controller.model.areas;
    return this.controller instanceof c ? this.controller.complete() : r.forEach((l) => {
      l.showArea(), this.model.addArea(l);
    }), this.changeMode(e), this;
  }
  /** Mixed 模式才有用，添加起点 */
  addStartPoint() {
    this.controller instanceof u && this.hook.emit("willChangeState", "watching", "editing");
  }
  /** Mixed 模式才有用，添加终点 */
  addEndPoint() {
    this.controller instanceof u && this.hook.emit("willChangeState", "editing", "watching");
  }
  /** 导出数据 */
  toJson() {
    return this.model.toJson();
  }
  /**
   * @deprecated 暂不支持
   * @description 改变插件的模式（pc端模式或移动端模式）
   * @param isMobile true为移动端模式，false为pc端
   */
  changeIsMobile(t) {
  }
  changeConfigs(t) {
    var e, r;
    Object.assign(this.config, t), (e = this.controller) == null || e.updateDistanceUI(), (r = this.controller) == null || r.updateAreaUI();
  }
  /** 设置线段的文本 */
  setCustomText(t, e) {
    var i;
    const r = this.model.getLineByID(t);
    if (!r)
      throw new Error("不存在的线段");
    r.setText(e), (i = this.controller) == null || i.updateDistanceUI();
  }
  createControllerParams() {
    var r, i;
    const t = (r = this.params.openParams) != null ? r : {}, e = (i = this.params.editParams) != null ? i : {};
    return t.isMobile = this.isMobile, {
      five: this.five,
      hook: this.hook,
      group: this.group,
      model: this.model,
      config: this.config,
      magnifier: this.magnifier,
      container: this.container,
      workUtil: this.workUtil,
      openParams: t,
      editParams: e,
      pointSelectorConfig: this.params.pointSelectorConfig,
      magnifierParams: this.params.magnifierParams,
      getMeasureType: () => this.currentMeasureType,
      mouseGroup: A(p({}, t.crossHairParameter)),
      userDistanceItemCreator: this.params.userDistanceItemCreator
    };
  }
}
export {
  ci as default
};
