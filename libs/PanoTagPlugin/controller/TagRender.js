var n = Object.defineProperty;
var a = (p, i, t) => i in p ? n(p, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : p[i] = t;
var o = (p, i, t) => (a(p, typeof i != "symbol" ? i + "" : i, t), t);
import { Group as s } from "three";
import { TagUtil as l } from "./TagUtil.js";
import "../typings/tag/TagConfig.js";
import "../tag.config.js";
import "../../shared-utils/positionToVector3.js";
import "../utils/tag/tagCheck.js";
import "../utils/normalPositionToPositions.js";
import "../../vendor/svelte/store/index.js";
import "../../vendor/svelte/internal/index.js";
import "../../shared-utils/device.js";
import "@realsee/five";
import "../utils/model/mediaPlane.js";
import "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/loadTexture.js";
import "../../shared-utils/three/Quadrangle.js";
import "../../shared-utils/math/pointsIsRectangle.js";
import "../../shared-utils/three/loadVideoTexture.js";
import "../Assets/Icon.js";
import "../../shared-utils/three/getPositionsByObjectFit.js";
import "../../shared-utils/three/FragmentTransparencyMaterial.js";
import "../../shared-utils/three/getNormal.js";
import "../../shared-utils/constants.js";
import "../../shared-utils/tag.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Subscribe.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/three/temp.js";
import "../../shared-utils/three/core/Raycaster.js";
import "../../shared-utils/dom/resizeObserver.js";
import "../../shared-utils/five/fiveEveryReadyListener.js";
import "../../shared-utils/throttle.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../shared-utils/three/Magnifier.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../shared-utils/three/Assets/index.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../shared-utils/even.js";
import "../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../shared-utils/isNil.js";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../shared-utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../shared-utils/util.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../shared-utils/three/PointSelector/utils/html.js";
import "../../shared-utils/CSS3DRender/index.js";
import "../../shared-utils/five/fiveModelLoad.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../Sculpt/Meshes/Line.js";
import "../../Sculpt/typings/style.js";
import "../../shared-utils/three/IObject3D.js";
import "../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/three/core/LineGeometry.js";
import "../../shared-utils/three/core/LineMaterial.js";
import "../../shared-utils/three/core/Line2.js";
import "../../shared-utils/three/core/LineMaterial2.js";
import "../../Sculpt/utils/unit.js";
import "../../Sculpt/utils/renderDom.js";
import "../../shared-utils/five/FivePuppet.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../shared-utils/isTouchDevice.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
import "../../Sculpt/utils/three/rayOnLine.js";
import "../../shared-utils/five/mode.js";
import "../../shared-utils/five/FiveDomEvents.js";
import "../../shared-utils/five/calculateThreeMouse.js";
import "../utils/Cache.js";
import "../../base/BasePlugin.js";
import "../../shared-utils/url/absoluteUrl.js";
import "../../vendor/object-assign-deep/objectAssignDeep.js";
import "../../shared-utils/typescript/entries.js";
import "../utils/tag/adaptConfig.js";
class Xt extends l {
  constructor(t) {
    super(t);
    o(this, "rendererMap", /* @__PURE__ */ new Map());
    o(this, "contentTypeMap", /* @__PURE__ */ new Map());
    o(this, "group", new s());
    o(this, "imagePlaneGroup", new s());
    o(this, "gltfObjectGroup", new s());
    /** 维护一个可用模型表，用于快速删除不应该在场景中的模型 */
    o(this, "enabledModelTagSet", /* @__PURE__ */ new Set());
    /** 临时状态 */
    o(this, "temporaryState", { visible: !0 });
    /** 点标签 */
    o(this, "TagContainerSvelte");
    this.group.name = "PanoTagPluginModelGroup", this.gltfObjectGroup.name = "PanoTagPluginGLTFObjectGroup", this.imagePlaneGroup.name = "ImagePlaneGroup", this.group.add(this.gltfObjectGroup), this.group.add(this.imagePlaneGroup);
  }
  /**
   * @description 设置 contentType 的渲染器
   * @param {string} contentType
   * 如果是 `TagContentType` 中的类型，将会覆盖掉插件内部默认的渲染器,
   * 如果是其他任意 string 如：'Foo'，则可以将类似 `{id: 1, contentType: 'Foo', position: [0,0,0]}` 的 tag 交给插件渲染
   * @param config.usePoint 是否需要标签点, 默认为 false
   * @note 优先级低于 tag.element
   */
  registerRenderer(t, r, m) {
    var e;
    this.rendererMap.set(t, { renderer: r, usePoint: (e = m == null ? void 0 : m.usePoint) != null ? e : !1 });
  }
  bindRenderer(t, r) {
    this.contentTypeMap.set(t, r);
  }
  disposeAllCSS3DContainer() {
    for (const [, t] of this.store.css3DRenderDisposer)
      t == null || t.forEach((r) => r == null ? void 0 : r());
    this.store.css3DRenderDisposer = /* @__PURE__ */ new Map();
  }
  /**
   * @description 检查并销毁不用的3D贴片
   */
  clearUnusedPanelTag() {
    this.filter2DPointTag.forEach((t) => {
      var r;
      (r = t.tag3DContentSvelte) == null || r.dispose(), t.tag3DContentSvelte = void 0;
    });
    for (const [t, r] of this.store.css3DRenderDisposer) {
      const m = this.getTagById(t);
      (!m || m.stickType === "2DPoint") && (r == null || r.forEach((e) => e == null ? void 0 : e()), this.store.css3DRenderDisposer.delete(t));
    }
  }
}
export {
  Xt as TagRender
};
