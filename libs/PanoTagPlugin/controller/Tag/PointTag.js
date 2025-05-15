var h = Object.defineProperty;
var c = (s, o, t) => o in s ? h(s, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[o] = t;
var p = (s, o, t) => (c(s, typeof o != "symbol" ? o + "" : o, t), t);
import { BaseTag as g } from "./BaseTag.js";
import * as l from "three";
import "../../../shared-utils/Subscribe.js";
import "../../utils/tag/calculateTagConfig.js";
import "../../../vendor/object-assign-deep/objectAssignDeep.js";
import "../../../shared-utils/typescript/entries.js";
import "../../utils/tag/adaptConfig.js";
import "../../typings/tag/TagConfig.js";
import "@realsee/five";
import "../../../shared-utils/tag.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/three/core/Raycaster.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../shared-utils/five/fiveEveryReadyListener.js";
import "../../../shared-utils/throttle.js";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../../shared-utils/three/Magnifier.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../../shared-utils/three/Assets/index.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../shared-utils/even.js";
import "../../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
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
import "../../../shared-utils/three/IObject3D.js";
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
import "../../../shared-utils/five/mode.js";
import "../../utils/tag/format.js";
import "../../../shared-utils/three/blink.js";
import "../../../shared-utils/vectorToCoordinate.js";
import "../../../shared-utils/formatRad.js";
import "../../../shared-utils/five/lookPoint.js";
import "../../../shared-utils/uuid.js";
import "../../utils/tagPosition.js";
import "../../utils/tag/tagCheck.js";
import "../../utils/checkRange.js";
import "../../../shared-utils/url/getUrl.js";
import "../../../shared-utils/five/getFloorIndex.js";
import "../../../shared-utils/safeObj.js";
import "../../utils/Cache.js";
import "../../../shared-utils/promise/withResolvers.js";
const v = new l.Vector2();
class Jt extends g {
  constructor(t, i) {
    super(t, i);
    p(this, "__Object__");
    p(this, "requestIdleCallbackId");
  }
  /**
   * @description 展开自己，收起其他标签
   */
  unfoldAndFoldOthers() {
    if (this.isPopoverConfigEnabled())
      return;
    const t = this.can("fold"), i = this.can("unfold");
    t && i && (this.state.unfolded = !this.state.unfolded, this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }), this.state.unfolded && this.plugin.tags.forEach((r) => {
      r.id !== this.id && r.fold();
    }));
  }
  onClick(t) {
    t.target === "TagPoint" && this.unfoldAndFoldOthers();
  }
  applyVisible() {
    var t, i;
    this.currentVisible && this.updateScreenPosition(), (t = this.tag3DContentSvelte) != null && t.css3DInstance && (this.tag3DContentSvelte.css3DInstance.visible = this.visible), (i = this.tag3DContentSvelte) == null || i.svelteApp.$set({
      state: this.plugin.state,
      temporaryState: this.temporaryState
    }), this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
  }
  unfold() {
    this.isPopoverConfigEnabled() || this.setUnfold(!0);
  }
  fold() {
    this.isPopoverConfigEnabled() || this.setUnfold(!1);
  }
  /**
   * @description 展开/收起指定id的标签
   * @param {boolean} unfolded
   */
  setUnfold(t) {
    if (this.isPopoverConfigEnabled())
      return;
    const i = this.can("fold"), r = this.can("unfold");
    i && r && (this.state.unfolded = t, this.hooks.emit(t ? "unfolded" : "folded"), this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }));
  }
  setPosition(t) {
    this.originPosition = t, this.position = t, this.cache.clear(), this.updateVisible(), this.updateScreenPosition(), this.updateZIndex(), this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
  }
  updateScreenPosition(t) {
    var a;
    if (this.stickType !== "2DPoint" && this.stickType !== "3DPoint")
      return;
    const { force: i = !1 } = t != null ? t : {}, r = i ? this.state.visible : this.currentVisible, e = (a = this.__Object__) != null ? a : {
      timeoutId: void 0,
      inAnimation: !1
    };
    if (this.__Object__ = e, !r && this.screenPosition ? (e.inAnimation = !0, e.timeoutId = setTimeout(() => {
      requestAnimationFrame(() => {
        this.currentVisible || (e.inAnimation = !1, this.screenPosition = null, this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }));
      });
    }, 1e3)) : e.timeoutId && (clearTimeout(e.timeoutId), e.inAnimation = !1, e.timeoutId = void 0), !r && !e.inAnimation)
      return;
    const n = this.computeTagProject();
    if (n && this.five.renderer) {
      const m = (() => {
        if (!this.currentConfig.simulate3D)
          return 1;
        const u = 2 * Math.tan(0.5 * this.five.camera.fov / 180 * Math.PI), f = this.getDistance(void 0, 1);
        return Math.max(Math.min(1 - u * f / 40, 1), 0.7);
      })(), d = this.five.renderer.getSize(v);
      this.screenPosition = {
        leftPx: (n.x + 1) / 2 * d.x,
        topPx: (-n.y + 1) / 2 * d.y,
        scale: m
      };
    } else
      this.screenPosition = null;
    this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
  }
  set(t, i = !0) {
    super.set(t, i), this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }), t.position && this.setPosition(this.position);
  }
  setData(...t) {
    super.setData(...t), this.plugin.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] });
  }
  updateUnfoldedByPanoIndex() {
    if (this.isPopoverConfigEnabled())
      return;
    const t = this.getUnfoldedByPanoIndex();
    if (this.state && (t !== void 0 && (this.state.unfolded = t), t && !this.state.visible)) {
      const i = this.getConfig();
      typeof i.unfoldedConfig == "object" && i.unfoldedConfig.autoFoldWhenHide !== !1 && (this.state.unfolded = !1);
    }
  }
  computeNormal() {
    return new l.Vector3().fromArray(this.normal);
  }
}
export {
  Jt as PointTag
};
