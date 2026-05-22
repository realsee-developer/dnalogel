var j = Object.defineProperty, V = Object.defineProperties;
var k = Object.getOwnPropertyDescriptors;
var F = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var b = (c, d, t) => d in c ? j(c, d, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[d] = t, I = (c, d) => {
  for (var t in d || (d = {}))
    M.call(d, t) && b(c, t, d[t]);
  if (F)
    for (var t of F(d))
      w.call(d, t) && b(c, t, d[t]);
  return c;
}, S = (c, d) => V(c, k(d));
var v = (c, d, t) => (b(c, typeof d != "symbol" ? d + "" : d, t), t);
var C = (c, d, t) => new Promise((e, i) => {
  var o = (r) => {
    try {
      p(t.next(r));
    } catch (a) {
      i(a);
    }
  }, l = (r) => {
    try {
      p(t.throw(r));
    } catch (a) {
      i(a);
    }
  }, p = (r) => r.done ? e(r.value) : Promise.resolve(r.value).then(o, l);
  p((t = t.apply(c, d)).next());
});
import { CONST as _ } from "../../../shared-utils/constants.js";
import { CSS3DObjectPlus as O } from "../../../shared-utils/CSS3DRender/CSS3DObject.js";
import { anyPositionToVector3 as E, arrayPositionToVector3 as P } from "../../../shared-utils/positionToVector3.js";
import * as x from "three";
import { planeNormal as A } from "../../utils/planeNormal.js";
import { centerPoint as H } from "../../../shared-utils/three/centerPoint.js";
import { VideoPlane as G, ImagePlane as L } from "../../utils/model/mediaPlane.js";
import B from "../../Components/Tag/index.js";
import { BaseTag as N } from "./BaseTag.js";
import "../../../shared-utils/tag.js";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import { initialCSS3DRender as $ } from "../../../shared-utils/CSS3DRender/index.js";
import "@realsee/five/line";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../shared-utils/three/blink.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { waitFiveModelLoaded as T } from "../../../shared-utils/five/fiveModelLoad.js";
import "../../../vendor/earcut/src/earcut.js";
import { uuid as U } from "../../../shared-utils/uuid.js";
import "../../../shared-utils/five/FivePuppet.js";
import { Sculpt as R } from "../../../Sculpt/index.js";
import { Rectangle as W } from "../../../Sculpt/Objects/Rectangle/index.js";
import { getFloorMesh as q } from "../../../shared-utils/five/getFloorMesh.js";
import "../../../shared-utils/even.js";
import "../../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/loadTexture.js";
import "../../../shared-utils/three/Quadrangle.js";
import "../../../shared-utils/math/pointsIsRectangle.js";
import "../../../shared-utils/three/loadVideoTexture.js";
import "../../../shared-utils/device.js";
import "../../Assets/Icon.js";
import "../../../shared-utils/three/getPositionsByObjectFit.js";
import "../../../shared-utils/three/FragmentTransparencyMaterial.js";
import "../../../shared-utils/three/getNormal.js";
import "../../../vendor/svelte/internal/index.js";
import "../../Components/Tag/TextTag/index.js";
import "../../Components/Tag/TextTag/TextTag.js";
import "../../Components/Common/Line/Straight.js";
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
import "../../Components/Common/Shadow.js";
import "../../Components/Common/Text/FlyMText.js";
import "../../Components/Common/Text/FlyText.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../utils/search.js";
import "../../utils/constants.js";
import "../../Components/Common/Arrow.js";
import "../../utils/doUtil.js";
import "../../../shared-utils/svelte/resizeObserver.js";
import "../../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "../../Components/Tag/TextTag/TextPlaneTag.js";
import "../../Components/Common/Text/MText.js";
import "../../utils/px2rem.js";
import "../../Components/Tag/ImageTextTag.js";
import "../../Components/Common/Line/Polyline.js";
import "../../Components/Common/Media.js";
import "../../../vendor/svelte-carousel/src/components/Carousel/Carousel.js";
import "../../../vendor/svelte-carousel/src/components/Dots/Dots.js";
import "../../../vendor/svelte-carousel/src/components/Dot/Dot.js";
import "../../../vendor/svelte-carousel/src/components/Arrow/Arrow.js";
import "../../../vendor/svelte-carousel/src/direction.js";
import "../../../vendor/svelte-carousel/src/components/Progress/Progress.js";
import "../../../vendor/svelte-carousel/src/actions/swipeable/swipeable.js";
import "../../../vendor/svelte-carousel/src/actions/swipeable/event.js";
import "../../../vendor/svelte-carousel/src/utils/event.js";
import "../../../vendor/svelte-carousel/src/units.js";
import "../../../vendor/svelte-carousel/src/actions/hoverable/hoverable.js";
import "../../../vendor/svelte-carousel/src/actions/hoverable/event.js";
import "../../../vendor/svelte-carousel/src/actions/tappable/tappable.js";
import "../../../vendor/svelte-carousel/src/utils/math.js";
import "../../../vendor/svelte-carousel/src/actions/tappable/event.js";
import "../../../vendor/svelte-carousel/src/utils/page.js";
import "../../../vendor/svelte-carousel/src/utils/clones.js";
import "../../../vendor/svelte-carousel/src/utils/object.js";
import "../../../vendor/svelte-carousel/src/components/Carousel/createCarousel.js";
import "../../../vendor/easy-reactive/src/simply-reactive.js";
import "../../../vendor/lodash.get/index.js";
import "../../../_commonjsHelpers.js";
import "../../../vendor/lodash.clonedeep/index.js";
import "../../../vendor/easy-reactive/src/utils/subscription.js";
import "../../../vendor/easy-reactive/src/utils/object.js";
import "../../../vendor/lodash.isequal/index.js";
import "../../../vendor/easy-reactive/src/utils/watcher.js";
import "../../../vendor/svelte-carousel/src/utils/lazy.js";
import "../../../vendor/svelte-carousel/src/utils/ProgressManager.js";
import "../../../vendor/svelte-carousel/src/utils/interval.js";
import "../../Components/Common/MediaItem.js";
import "../../Components/Tag/MarketingTag.js";
import "../../Components/Tag/Assets/marketingIcon.js";
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
import "../../../shared-utils/throttle.js";
import "../../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../../shared-utils/three/Magnifier.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../../shared-utils/three/Assets/index.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../shared-utils/three/PointSelector/utils/html.js";
import "../../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../../shared-utils/createResizeObserver.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../../Sculpt/Meshes/Line.js";
import "../../../Sculpt/typings/style.js";
import "../../../shared-utils/three/IObject3D.js";
import "../../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../../shared-utils/util.js";
import "../../../shared-utils/five/getFiveFromParentChain.js";
import "../../../shared-utils/three/core/LineGeometry.js";
import "../../../shared-utils/three/core/LineMaterial.js";
import "../../../shared-utils/three/core/Line2.js";
import "../../../shared-utils/three/core/LineMaterial2.js";
import "../../../Sculpt/utils/unit.js";
import "../../../Sculpt/utils/renderDom.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../../shared-utils/isTouchDevice.js";
import "../../../shared-utils/five/getPosition.js";
import "../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../shared-utils/three/PointSelector/utils/contents.js";
import "../../../Sculpt/utils/three/rayOnLine.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
import "../../utils/noTypecheck.js";
import "../../Components/Tag/AudioTag/index.js";
import "../../Components/Tag/AudioTag/AudioTag.js";
import "../../Components/Common/Audio.js";
import "../../utils/audio/SharedAudio.js";
import "../../../shared-utils/audio.js";
import "../../utils/audio/AudioDiagnostics.js";
import "../../Components/Common/Icon/audioIcon.js";
import "../../Components/Tag/AudioTag/AudioPlaneTag.js";
import "../../Components/Tag/MediaPlane.js";
import "../../Components/Tag/LinkTag.js";
import "../../Components/Common/Icon/Icon.js";
import "../../utils/getImageInfo.js";
import "../../Components/Common/Icon/animationUtils.js";
import "../../Components/Tag/PanoramaTag.js";
import "../../Components/Common/Icon/PanoramaIcon.js";
import "../../Components/Tag/CustomTag.js";
import "../../../vendor/classnames/index.js";
import "./ModelTag.js";
import "../../../shared-utils/three/GLTFLoader.js";
import "@realsee/five/gltf-loader";
import "../../utils/tag/tagCheck.js";
import "../../../shared-utils/five/mode.js";
import "../../utils/tag/calculateTagConfig.js";
import "../../../vendor/object-assign-deep/objectAssignDeep.js";
import "../../../shared-utils/typescript/entries.js";
import "../../utils/tag/adaptConfig.js";
import "../../typings/tag/TagConfig.js";
import "../../utils/tag/format.js";
import "../../../shared-utils/url/defaultUrls.js";
import "../../../shared-utils/vectorToCoordinate.js";
import "../../../shared-utils/formatRad.js";
import "../../../shared-utils/five/lookPoint.js";
import "../../utils/tagPosition.js";
import "../../utils/checkRange.js";
import "../../../shared-utils/url/getUrl.js";
import "../../../shared-utils/five/getFloorIndex.js";
import "../../../shared-utils/safeObj.js";
import "../../utils/Cache.js";
import "../../../shared-utils/promise/withResolvers.js";
import "../../../Sculpt/utils/Modules/Global.js";
import "../../../Sculpt/utils/Modules/Cursor.js";
import "../../../Sculpt/utils/Modules/DeleteButtonBgBorder.js";
import "../../../Sculpt/utils/Modules/DeleteIconSVG.js";
import "../../../Object3DHelperPlugin/Controller.js";
import "../../../base/BasePlugin.js";
import "../../../shared-utils/Object3DHelper/Helper/MoveHelper.js";
import "../../../shared-utils/Object3DHelper/Base/BaseHelper.js";
import "../../../shared-utils/Object3DHelper/utils/setObjectQuaternion.js";
import "../../../shared-utils/three/boundingBox.js";
import "../../../shared-utils/Object3DHelper/Helper/Objects/ArrowGroup.js";
import "../../../shared-utils/Object3DHelper/utils/direction.js";
import "../../../shared-utils/Object3DHelper/Constants/RenderOrder.js";
import "../../../shared-utils/Object3DHelper/Helper/Objects/CenterHandle.js";
import "../../../shared-utils/Object3DHelper/Constants/color.js";
import "../../../shared-utils/Object3DHelper/utils/calculateScaleByCamera.js";
import "../../../shared-utils/Object3DHelper/utils/getPoseFromCamera.js";
import "../../../shared-utils/clamp.js";
import "../../../shared-utils/Object3DHelper/utils/getOrthographicCameraDirection.js";
import "../../../shared-utils/Object3DHelper/Helper/RotateHelper.js";
import "../../../shared-utils/Object3DHelper/Helper/HTML/tipsDom.js";
import "../../../shared-utils/Object3DHelper/Helper/HTML/utils/createElement.js";
import "../../../shared-utils/Object3DHelper/Helper/CSS3DScaleHelper.js";
import "../../../shared-utils/Object3DHelper/Helper/HTML/rectangleScaleDom.js";
import "../../../shared-utils/Object3DHelper/utils/cameraHooks.js";
import "../../../shared-utils/Object3DHelper/Helper/BoundingBoxHelper.js";
import "../../../shared-utils/Object3DHelper/Controller/MoveController.js";
import "../../../shared-utils/Object3DHelper/Base/BaseController.js";
import "../../../shared-utils/Object3DHelper/utils/solidGuide.js";
import "../../../shared-utils/Object3DHelper/utils/getMouseRaycaster.js";
import "../../../shared-utils/Object3DHelper/utils/calculateThreeMouse.js";
import "../../../Object3DHelperPlugin/FiveControllerWrapper.js";
import "../../../shared-utils/Object3DHelper/index.js";
import "../../../shared-utils/Object3DHelper/Controller/RotateController.js";
import "../../../shared-utils/math/rad2Deg.js";
import "../../../shared-utils/math/deg2Rad.js";
import "../../../shared-utils/Object3DHelper/Controller/CSS3DScaleController.js";
import "../../../shared-utils/Object3DHelper/Controller/RectangleScaleController.js";
import "../../../shared-utils/three/vectorIsEqual.js";
import "../../../shared-utils/Object3DHelper/Controller/BoundingBoxController.js";
import "../../../shared-utils/Object3DHelper/Helper/ScaleHelper.js";
import "../../../shared-utils/Object3DHelper/Controller/ScaleController.js";
import "../../../shared-utils/threex/domevents/index.js";
import "../../../shared-utils/five/FiveDomEvents.js";
import "../../../shared-utils/five/calculateThreeMouse.js";
import "../../../shared-utils/three/recurveFindObject.js";
import "../../../Sculpt/Objects/Polyline/index.js";
import "../../../Sculpt/Meshes/Polyline.js";
import "../../../Sculpt/Meshes/LineWithDots.js";
import "../../../Sculpt/Meshes/Point.js";
import "../../../shared-utils/three/closeVectors.js";
import "../../../Sculpt/Objects/Base/index.js";
import "../../../vendor/hotkeys-js/dist/hotkeys.esm.js";
import "../../../Sculpt/Objects/Polyline/Editor.js";
import "../../../Sculpt/Objects/Line/Editor.js";
import "../../../Sculpt/Objects/Base/Editor.js";
import "../../../shared-utils/three/vector3ToArray.js";
import "../../../Sculpt/Objects/Point/index.js";
import "../../../Sculpt/Objects/Point/Editor.js";
import "../../../Sculpt/Objects/Polygon/index.js";
import "../../../Sculpt/Meshes/Area.js";
import "../../../Sculpt/Meshes/PolygonWithEdge.js";
import "../../../Sculpt/Meshes/Polygon.js";
import "../../../shared-utils/three/generatePolygonGeometry.js";
import "../../../shared-utils/three/earcut3D.js";
import "../../../PanoMeasurePlugin/utils/isIntersecting.js";
import "../../../Sculpt/utils/three/ColoredMesh.js";
import "../../../shared-utils/three/geometryUtil.js";
import "../../../Sculpt/Objects/Polygon/Editor.js";
import "../../../Sculpt/utils/isIntersecting.js";
import "../../../Sculpt/Objects/Prism/index.js";
import "../../../Sculpt/Meshes/Prism.js";
import "../../../shared-utils/three/core/PrismGeometry.js";
import "../../../shared-utils/three/core/polygonVertex.js";
import "../../../shared-utils/three/core/PrismAnimationGeometry.js";
import "../../../Sculpt/Editors/PrismMeshEditor.js";
import "../../../Sculpt/Objects/Circle/index.js";
import "../../../Sculpt/Editors/CircleMeshEditor.js";
import "../../../Sculpt/Meshes/CircleWithEdge.js";
import "../../../Sculpt/Meshes/Circle.js";
import "../../../Sculpt/utils/radiusToSegments.js";
import "../../../Sculpt/Objects/Cylinder/index.js";
import "../../../Sculpt/Meshes/Cylinder.js";
import "../../../Sculpt/Editors/CylinderMeshEditor.js";
import "../../../Sculpt/Objects/Box/index.js";
import "../../../Sculpt/Editors/BoxMeshEditor.js";
import "../../../Sculpt/Meshes/Box.js";
import "../../../Sculpt/Meshes/RectangleWithEdge.js";
import "../../../Sculpt/Meshes/Rectangle.js";
import "../../../Sculpt/utils/three/RectangleGeometry.js";
import "../../../shared-utils/forReverseEach.js";
import "../../../Sculpt/Objects/Line/index.js";
import "../../../Sculpt/Editors/RectangleMeshEditor.js";
import "../../../Sculpt/utils/sortPositionsByCameraPosition.js";
const Z = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map();
class tn extends N {
  constructor(t, e) {
    super(t, e);
    v(this, "_floorIndex");
    v(this, "_floorIndexDirty", !0);
    v(this, "_opacity");
    this.state.unfolded = !0, this.loadModel();
  }
  /** 获取透明度 */
  get opacity() {
    var t, e;
    return this._opacity !== void 0 ? this._opacity : (e = (t = this.data) == null ? void 0 : t.opacity) != null ? e : 1;
  }
  /** 设置透明度 (0-1) */
  set opacity(t) {
    t !== this._opacity && (this._opacity = t, this.mediaPlane && (this.mediaPlane.opacity = t));
  }
  /** 获取楼层索引（惰性计算 + 缓存） */
  get floorIndex() {
    return (this._floorIndexDirty || this._floorIndex === void 0) && (this._floorIndex = this.computeFloorIndex(), this._floorIndexDirty = !1), this._floorIndex;
  }
  /** 标记 floorIndex 需要重新计算（在位置等相关数据变化时调用） */
  invalidateFloorIndex() {
    this._floorIndexDirty = !0;
  }
  applyVisible() {
    var e, i, o, l, p, r;
    this.computeRenderType() === "Mesh" ? (this.initialSculpt(), ((i = (e = this.data.mediaData) == null ? void 0 : e[0]) == null ? void 0 : i.type) === "Video" ? this.renderVideoPlane() : ((l = (o = this.data.mediaData) == null ? void 0 : o[0]) == null ? void 0 : l.type) === "Image" ? this.renderImagePlane() : this.renderEmptyPlane()) : ((p = this.tag3DContentSvelte) == null || p.svelteApp.$set({ tag: this, state: this.plugin.state, temporaryState: this.plugin.temporaryState }), (r = this.tag3DContentSvelte) != null && r.css3DInstance && (this.tag3DContentSvelte.css3DInstance.visible = this.visible, this.five.needsRender = !0)), this.syncEditorAuxiliaryVisibility();
  }
  set(t, e = !0) {
    super.set(t, e), T(this.five).then(() => {
      this.tag3DContentSvelte && (t.data ? this.tag3DContentSvelte.svelteApp.$set({ tag: this, state: this.plugin.state, temporaryState: this.plugin.temporaryState }) : t.position && this.loadModel());
    });
  }
  setData(...t) {
    var i, o, l, p, r;
    super.setData(...t), this.computeRenderType() === "Mesh" ? (((o = (i = this.data.mediaData) == null ? void 0 : i[0]) == null ? void 0 : o.type) === "Video" ? this.renderVideoPlane() : ((p = (l = this.data.mediaData) == null ? void 0 : l[0]) == null ? void 0 : p.type) === "Image" ? this.renderImagePlane() : this.renderEmptyPlane(), this.mediaPlane && (this.mediaPlane.opacity = this.opacity)) : (r = this.tag3DContentSvelte) == null || r.svelteApp.$set({ tag: this });
  }
  /** 计算楼层索引 */
  computeFloorIndex() {
    var p, r;
    const t = /* @__PURE__ */ new Map();
    ((r = (p = this.five.works.getWork(this.workUtil.workCode)) == null ? void 0 : p.observers) != null ? r : []).forEach((a) => {
      var h;
      const m = (h = a.floorIndex) != null ? h : 0;
      if (!t.has(m)) {
        const u = q(this.five, m);
        u.isEmpty() || t.set(m, u);
      }
    });
    const i = H(...this.position.map(E)), o = [], l = [];
    if (t.forEach((a, m) => {
      l.push({ floorIndex: m, box: a }), a.containsPoint(i) && o.push({ floorIndex: m, box: a });
    }), o.length === 1)
      return o[0].floorIndex;
    if (o.length > 1) {
      let a = 1 / 0, m = o[0].floorIndex;
      return o.forEach(({ floorIndex: h, box: u }) => {
        const s = new x.Vector3();
        u.getCenter(s);
        const n = i.distanceTo(s);
        n < a && (a = n, m = h);
      }), m;
    }
    if (l.length > 0) {
      let a = 1 / 0, m = l[0].floorIndex;
      return l.forEach(({ floorIndex: h, box: u }) => {
        const s = new x.Vector3();
        u.getCenter(s);
        const n = i.distanceTo(s);
        n < a && (a = n, m = h);
      }), m;
    }
  }
  loadModel() {
    return C(this, null, function* () {
      var e, i, o, l, p, r;
      if (yield T(this.five), this.computeRenderType() === "Mesh")
        this.initialSculpt(), ((i = (e = this.data.mediaData) == null ? void 0 : e[0]) == null ? void 0 : i.type) === "Video" ? this.renderVideoPlane() : ((l = (o = this.data.mediaData) == null ? void 0 : o[0]) == null ? void 0 : l.type) === "Image" ? this.renderImagePlane() : this.renderEmptyPlane();
      else {
        $(this.five);
        const a = this.position.map(E);
        (r = (p = this.tag3DContentSvelte) == null ? void 0 : p.dispose) == null || r.call(p);
        const m = document.createElement("div");
        m.classList.add("tag-media-container");
        const h = I({ mode: "front", cornerPoints: a, container: m }, this.config.tag3DConfig), u = this.computeRenderType() === "BehindDom" || h.mode === "behind" ? "behind" : "front", s = new O(S(I({}, h), { mode: u })), n = this.computeNormal();
        s.position.add(n.clone().setLength(_.Z_FIGHTING_OFFSET)), this.plugin.group.add(s);
        let y;
        s.mode === "behind" && this.config.clickable !== !1 && (y = this.addObjectClickHandler(this, s, (g) => {
          this.plugin.hooks.emit("click", { event: g, target: "TagContent", tag: this });
        }));
        const f = new B({
          target: m,
          props: {
            tag: this,
            hooks: this.plugin.hooks,
            /** 模型标签要等模型加载好之后再展示 */
            state: this.plugin.state,
            mediaStore: this.plugin.mediaStore,
            temporaryState: this.plugin.temporaryState
          }
        });
        this.tag3DContentSvelte = {
          svelteApp: f,
          domContainer: {
            css3DObject: s
          },
          css3DInstance: s,
          initialNormal: n,
          currentNormal: n,
          dispose: () => {
            f.$destroy(), s.dispose(), y == null || y();
          }
        }, this.five.needsRender = !0;
      }
    });
  }
  initialSculpt() {
    if (this.rectanglePlane)
      return;
    const t = new R(this.five, void 0, {
      magnifier: null
    });
    t.clear(), t.group.removeFromParent();
    const e = U(), i = new W(
      {
        id: e,
        type: "Rectangle",
        points: this.position.map(P),
        style: {
          color: 2203620,
          opacity: 0.1,
          lineColor: 6737907
        }
      },
      {
        defaultAction: !1
      }
    );
    i.visible = !1, this.plugin.imagePlaneGroup.add(i), this.rectanglePlane = i, i.editor.hooks.on("objectUpdate", () => {
      var o;
      (o = this.mediaPlane) == null || o.changePointsOrParams({ cornerPoints: i.data.points.map(P) });
    }), i.editor.disable();
  }
  editorEnable() {
    this.rectanglePlane || this.initialSculpt(), this.rectanglePlane.visible = !0, this.rectanglePlane.editor.enable(), this.syncEditorAuxiliaryVisibility();
  }
  editorDisable(t) {
    var i;
    this.rectanglePlane.visible = !1;
    const e = t || this.position.map(P);
    (i = this.mediaPlane) == null || i.changePointsOrParams({ cornerPoints: e }), this.rectanglePlane.setData({
      points: e
    }), this.rectanglePlane.editor.disable();
  }
  getRectangleHelper() {
    var e, i;
    const t = (e = this.rectanglePlane) == null ? void 0 : e.rectangleMesh;
    if (t)
      return (i = R.modules.object3DHelper.getObject3DHelper(t)) == null ? void 0 : i.helper;
  }
  /**
   * 标签因为 visiblePanoIndex 等可见性规则被隐藏时，同时隐藏编辑辅助元素。
   * 当标签重新可见且仍处于编辑态时，再恢复辅助元素显示。
   */
  syncEditorAuxiliaryVisibility() {
    if (!this.rectanglePlane)
      return;
    const t = this.getRectangleHelper(), e = !!this.rectanglePlane.editor.parent;
    if (!this.currentVisible || !e) {
      this.rectanglePlane.visible = !1, t == null || t.hide(), this.five.needsRender = !0;
      return;
    }
    this.rectanglePlane.visible = !0, t == null || t.show(), this.five.needsRender = !0;
  }
  renderVideoPlane() {
    var m, h, u;
    const t = this.data.mediaData[0];
    if (!t)
      return;
    const { url: e } = t;
    if (!e)
      return;
    const i = (m = this.data.objectFit) != null ? m : "contain", o = this.currentVisible, l = (() => !!(this.mediaPlane && !o))(), p = (() => !!(!this.mediaPlane && o))(), r = (() => !!(this.mediaPlane && (this.mediaPlane.src !== e || this.mediaPlane.objectFit !== i)))();
    (l || r) && this.mediaPlane && (this.plugin.imagePlaneGroup.remove(this.mediaPlane), this.mediaPlane.dispose(), this.mediaPlane.removeFromParent(), this.mediaPlane = void 0);
    const a = (() => !!(this.mediaPlane && this.mediaPlane.objectFit && this.mediaPlane.objectFit !== i))();
    if (p || r) {
      let s = this.position.map(P);
      this.rectanglePlane && (s = this.rectanglePlane.data.points.map(P));
      const n = new G(e, s, {
        videoCoverSrc: t.videoCoverUrl,
        playButton: this.data.playIcon,
        paused: !((h = this.data.autoplayConfig) != null && h.autoplayVideo),
        objectFit: this.data.objectFit,
        videoTextureMap: Z,
        ImageTextureMap: z,
        domEvents: this.plugin.domEvents,
        opacity: this.opacity
      });
      this.plugin.domEvents.addAutoBindEventListener(n, "click", (f) => {
        var g, D;
        !((g = n.videoInstance) != null && g.paused) && ((D = n.videoInstance) == null ? void 0 : D.muted) === !1 && this.plugin.hooks.emit("playStateChange", {
          event: f,
          state: "playing",
          tag: this,
          mediaInstance: n.videoInstance
        });
      }), n.onVideoReady = (f) => {
        f.addEventListener("play", (g) => {
          this.plugin.mediaStore.set({ currentMediaElement: n.videoInstance }), this.plugin.hooks.emit("playStateChange", { event: g, state: "playing", tag: this, mediaInstance: n.videoInstance });
        }), f.addEventListener("pause", (g) => {
          this.plugin.hooks.emit("playStateChange", { event: g, state: "paused", tag: this, mediaInstance: n.videoInstance });
        }), f.addEventListener("ended", (g) => {
          this.plugin.hooks.emit("playStateChange", { event: g, state: "paused", tag: this, mediaInstance: n.videoInstance });
        });
      };
      const y = (f) => (this.five.on("renderFrame", f), () => this.five.off("renderFrame", f));
      n.initialRenderHooks(y), this.mediaPlane = n, this.play = () => n.play(), this.pause = () => n.pause(), this.plugin.imagePlaneGroup.add(this.mediaPlane);
    }
    if (a) {
      const s = this.rectanglePlane.data.points.map(P);
      (u = this.mediaPlane) == null || u.changePointsOrParams({ cornerPoints: s, params: { objectFit: i } });
    }
    this.five.needsRender = !0;
  }
  renderImagePlane() {
    var h, u;
    const t = this.data.mediaData[0], e = (h = this.data.objectFit) != null ? h : "contain";
    if (!t)
      return;
    const { url: i } = t;
    if (!i)
      return;
    let o = this.position.map(P);
    const l = this.currentVisible, p = (() => !!(this.mediaPlane && !l))(), r = (() => !!(!this.mediaPlane && l))(), a = (() => !!(this.mediaPlane && this.mediaPlane.src !== i))(), m = (() => !!(this.mediaPlane && this.mediaPlane.objectFit && this.mediaPlane.objectFit !== e))();
    if ((p || a) && this.mediaPlane && (this.plugin.imagePlaneGroup.remove(this.mediaPlane), this.mediaPlane.dispose(), this.mediaPlane.removeFromParent(), this.mediaPlane = void 0), (r || a) && (this.rectanglePlane && (o = this.rectanglePlane.data.points.map(P)), this.mediaPlane = new L(i, o, { objectFit: this.data.objectFit, opacity: this.opacity }), this.getConfig().clickable !== !1 && this.plugin.domEvents.addAutoBindEventListener(
      this.mediaPlane,
      "click",
      (s) => {
        this.plugin.hooks.emit("click", { tag: this, target: "TagContent", event: s.origDomEvent });
      },
      { noEmitWhenHide: !0 }
    ), this.plugin.imagePlaneGroup.add(this.mediaPlane)), m) {
      const s = this.rectanglePlane.data.points.map(P);
      (u = this.mediaPlane) == null || u.changePointsOrParams({ cornerPoints: s, params: { objectFit: e } });
    }
    this.five.needsRender = !0;
  }
  renderEmptyPlane() {
    this.mediaPlane && (this.plugin.imagePlaneGroup.remove(this.mediaPlane), this.mediaPlane.dispose(), this.mediaPlane.removeFromParent(), this.mediaPlane = void 0);
  }
  computeNormal() {
    return A(this.position);
  }
}
export {
  tn as PlaneTag
};
