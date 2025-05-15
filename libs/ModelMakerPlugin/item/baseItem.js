var p = Object.defineProperty;
var h = (o, e, i) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[e] = i;
var t = (o, e, i) => (h(o, typeof e != "symbol" ? e + "" : e, i), i);
import { Vector3 as l } from "three";
import { addIfNotExists as d } from "../../shared-utils/three/addIfNotExists.js";
import { Subscribe as n } from "../../shared-utils/Subscribe.js";
import { tag as a } from "../../shared-utils/tag.js";
import { boundingBox as v } from "../../shared-utils/three/boundingBox.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
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
import "../../shared-utils/three/centerPoint.js";
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
import "@realsee/five";
import "../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../shared-utils/isTouchDevice.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
import "../../Sculpt/utils/three/rayOnLine.js";
class Mi extends n {
  constructor(i) {
    var s, m;
    super();
    t(this, "__renderer");
    t(this, "__disposeRenderer");
    t(this, "type");
    t(this, "tag");
    t(this, "rawData");
    t(this, "model");
    t(this, "visibles", []);
    t(this, "five");
    t(this, "group");
    t(this, "fiveDomEvents");
    t(this, "disposers", []);
    this.five = i.five, this.model = i.model, this.group = i.group, this.type = i.type, this.rawData = i.rawData, this.fiveDomEvents = i.fiveDomEvents;
    const r = (m = (s = i.position) != null ? s : this.model.center) != null ? m : v(this.model).getCenter(new l());
    this.tag = a(this.five, r, { wrapper: i.tagWrapper, disableOpacityTransition: this.type === "prism" }), this.tag.extraObjectsForIntersectCheck.push(this.group);
  }
  get container() {
    return this.tag.container;
  }
  get state() {
    return {
      visible: this.model.visible,
      enabled: this.group.children.includes(this.model)
    };
  }
  show() {
    this.visibles[0] = !0, this.updateVisible(), this.emit("show");
  }
  hide() {
    this.visibles[0] = !1, this.updateVisible(), this.emit("hide");
  }
  enable() {
    d(this.group, this.model), this.five.needsRender = !0, this.model.updateMatrixWorld(!0), this.tag.setTransformMatrix(this.model.matrixWorld), this.tag.enable();
    const i = this.onClick.bind(this);
    this.fiveDomEvents.removeEventListener(this.model, "click"), this.fiveDomEvents.addEventListener(this.model, "click", i, { skipPano: !0 }), this.disposers.push(() => {
      this.fiveDomEvents.removeEventListener(this.model, "click");
    }), this.updateVisible(), this.emit("enable");
  }
  disable() {
    this.group.remove(this.model), this.five.needsRender = !0, this.tag.disable(), this.disposers.forEach((i) => i()), this.disposers = [], this.emit("disable");
  }
  updateVisible() {
    !this.visibles.some((r) => r === !1) ? (this.tag.show(), this.model.visible = !0) : (this.tag.hide(), this.model.visible = !1), this.five.needsRender = !0;
  }
  onClick() {
    return this.emit("click", this);
  }
}
export {
  Mi as ModelMakerBaseItem
};
