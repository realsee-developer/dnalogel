var V = Object.defineProperty, N = Object.defineProperties;
var P = Object.getOwnPropertyDescriptors;
var U = Object.getOwnPropertySymbols;
var W = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var b = (a, p, t) => p in a ? V(a, p, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[p] = t, l = (a, p) => {
  for (var t in p || (p = {}))
    W.call(p, t) && b(a, t, p[t]);
  if (U)
    for (var t of U(p))
      R.call(p, t) && b(a, t, p[t]);
  return a;
}, c = (a, p) => N(a, P(p));
var d = (a, p, t) => (b(a, typeof p != "symbol" ? p + "" : p, t), t);
var f = (a, p, t) => new Promise((i, s) => {
  var e = (m) => {
    try {
      r(t.next(m));
    } catch (n) {
      s(n);
    }
  }, o = (m) => {
    try {
      r(t.throw(m));
    } catch (n) {
      s(n);
    }
  }, r = (m) => m.done ? i(m.value) : Promise.resolve(m.value).then(e, o);
  r((t = t.apply(a, p)).next());
});
import { Controller as k } from "../base/BasePluginWithData.js";
import "../shared-utils/tag.js";
import * as A from "three";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import { waitFiveModelLoaded as $ } from "../shared-utils/five/fiveModelLoad.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import "../shared-utils/three/blink.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../vendor/earcut/src/earcut.js";
import { uuid as H } from "../shared-utils/uuid.js";
import { GUIDELINE_WHITE_ARROW_TEXTURE as F, GUIDELINE_DEFAULT_ARROW_TEXTURE as j } from "../shared-utils/url/defaultUrls.js";
import { replaceStaticPrefix as g } from "../shared-utils/url/replace-static-prefix.js";
import { equal as B } from "../shared-utils/equal.js";
import "../shared-utils/five/FivePuppet.js";
import { GuideLineItem as C } from "./GuideLineItem/index.js";
import J from "../CruisePlugin/Work.js";
import { objectAssignDeepExports as G } from "../vendor/object-assign-deep/objectAssignDeep.js";
import "../base/BasePlugin.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/positionToVector3.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/three/core/Raycaster.js";
import "../shared-utils/dom/resizeObserver.js";
import "../shared-utils/five/fiveEveryReadyListener.js";
import "../shared-utils/throttle.js";
import "../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../shared-utils/three/Magnifier.js";
import "../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../shared-utils/three/Assets/index.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../shared-utils/even.js";
import "../shared-utils/CSS3DRender/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "../shared-utils/isNil.js";
import "../shared-utils/three/PointSelector/utils/html.js";
import "../shared-utils/CSS3DRender/index.js";
import "../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../shared-utils/createResizeObserver.js";
import "../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../Sculpt/Meshes/Line.js";
import "../Sculpt/typings/style.js";
import "../shared-utils/three/IObject3D.js";
import "../Sculpt/utils/Meshes/getLengthHTML.js";
import "../shared-utils/three/applyObjectMatrixWorld.js";
import "../shared-utils/util.js";
import "../shared-utils/five/getFiveFromParentChain.js";
import "../shared-utils/three/core/LineGeometry.js";
import "../shared-utils/three/core/LineMaterial.js";
import "../shared-utils/three/core/Line2.js";
import "../shared-utils/three/core/LineMaterial2.js";
import "../Sculpt/utils/unit.js";
import "../Sculpt/utils/renderDom.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../shared-utils/isTouchDevice.js";
import "../shared-utils/five/getPosition.js";
import "../shared-utils/five/getRaycasterByNdcPosition.js";
import "../shared-utils/three/PointSelector/utils/contents.js";
import "../Sculpt/utils/three/rayOnLine.js";
import "../vendor/animejs/lib/anime.es.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
import "../shared-utils/url/absoluteUrl.js";
import "../shared-utils/isTruelyObject.js";
import "./GuideLineModeItem/index.js";
import "../shared-utils/log.js";
import "./utils/createLineGeometry.js";
import "../vendor/polyline-normals/index.js";
import "../vendor/polyline-miter-util/index.js";
import "../vendor/gl-vec2/add.js";
import "../vendor/gl-vec2/set.js";
import "../vendor/gl-vec2/normalize.js";
import "../vendor/gl-vec2/subtract.js";
import "../vendor/gl-vec2/dot.js";
import "../shared-utils/math/intersecting.js";
import "../shared-utils/five/mode.js";
import "../shared-utils/animationFrame/BetterTween.js";
import "../shared-utils/animationFrame/index.js";
import "../shared-utils/three/loadTexture.js";
import "../PanoTagPlugin/controller/index.js";
import "../PanoTagPlugin/utils/tag/tagCheck.js";
import "../PanoTagPlugin/utils/debounce.js";
import "../PanoTagPlugin/utils/throttle.js";
import "../PanoTagPlugin/utils/tag/format.js";
import "../shared-utils/audio.js";
import "../PanoTagPlugin/controller/TagRender.js";
import "../PanoTagPlugin/controller/TagUtil.js";
import "../PanoTagPlugin/typings/tag/TagConfig.js";
import "../PanoTagPlugin/tag.config.js";
import "../PanoTagPlugin/utils/normalPositionToPositions.js";
import "../vendor/svelte/store/index.js";
import "../vendor/svelte/internal/index.js";
import "../shared-utils/device.js";
import "../PanoTagPlugin/utils/model/mediaPlane.js";
import "../shared-utils/three/Quadrangle.js";
import "../shared-utils/math/pointsIsRectangle.js";
import "../shared-utils/three/loadVideoTexture.js";
import "../PanoTagPlugin/Assets/Icon.js";
import "../shared-utils/three/getPositionsByObjectFit.js";
import "../shared-utils/three/FragmentTransparencyMaterial.js";
import "../shared-utils/three/getNormal.js";
import "../shared-utils/constants.js";
import "../shared-utils/five/FiveDomEvents.js";
import "../shared-utils/five/calculateThreeMouse.js";
import "../PanoTagPlugin/utils/Cache.js";
import "../shared-utils/typescript/entries.js";
import "../PanoTagPlugin/utils/tag/adaptConfig.js";
import "../PanoTagPlugin/utils/DebugUtil.js";
import "../shared-utils/safeObj.js";
import "../PanoTagPlugin/utils/addDebugPoints.js";
import "../PanoTagPlugin/controller/Tag/PointTag.js";
import "../PanoTagPlugin/controller/Tag/BaseTag.js";
import "../PanoTagPlugin/utils/tag/calculateTagConfig.js";
import "../shared-utils/vectorToCoordinate.js";
import "../shared-utils/formatRad.js";
import "../shared-utils/five/lookPoint.js";
import "../PanoTagPlugin/utils/tagPosition.js";
import "../PanoTagPlugin/utils/checkRange.js";
import "../shared-utils/url/getUrl.js";
import "../shared-utils/five/getFloorIndex.js";
import "../shared-utils/promise/withResolvers.js";
import "../PanoTagPlugin/controller/Tag/ModelTag.js";
import "../shared-utils/CSS3DRender/CSS3DObject.js";
import "../shared-utils/three/GLTFLoader.js";
import "@realsee/five/gltf-loader";
import "../PanoTagPlugin/utils/planeNormal.js";
import "../PanoTagPlugin/Components/Tag/index.js";
import "../PanoTagPlugin/Components/Tag/TextTag/index.js";
import "../PanoTagPlugin/Components/Tag/TextTag/TextTag.js";
import "../PanoTagPlugin/Components/Common/Line/Straight.js";
import "../vendor/svelte/transition/index.js";
import "../vendor/svelte/easing/index.js";
import "../PanoTagPlugin/Components/Common/Shadow.js";
import "../PanoTagPlugin/Components/Common/Text/FlyMText.js";
import "../PanoTagPlugin/Components/Common/Text/FlyText.js";
import "../PanoTagPlugin/utils/search.js";
import "../PanoTagPlugin/utils/constants.js";
import "../PanoTagPlugin/Components/Common/Arrow.js";
import "../PanoTagPlugin/utils/doUtil.js";
import "../shared-utils/svelte/resizeObserver.js";
import "../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "../PanoTagPlugin/Components/Tag/TextTag/TextPlaneTag.js";
import "../PanoTagPlugin/Components/Common/Text/MText.js";
import "../PanoTagPlugin/utils/px2rem.js";
import "../PanoTagPlugin/Components/Tag/ImageTextTag.js";
import "../PanoTagPlugin/Components/Common/Line/Polyline.js";
import "../PanoTagPlugin/Components/Common/Media.js";
import "../vendor/svelte-carousel/src/components/Carousel/Carousel.js";
import "../vendor/svelte-carousel/src/components/Dots/Dots.js";
import "../vendor/svelte-carousel/src/components/Dot/Dot.js";
import "../vendor/svelte-carousel/src/components/Arrow/Arrow.js";
import "../vendor/svelte-carousel/src/direction.js";
import "../vendor/svelte-carousel/src/components/Progress/Progress.js";
import "../vendor/svelte-carousel/src/actions/swipeable/swipeable.js";
import "../vendor/svelte-carousel/src/actions/swipeable/event.js";
import "../vendor/svelte-carousel/src/utils/event.js";
import "../vendor/svelte-carousel/src/units.js";
import "../vendor/svelte-carousel/src/actions/hoverable/hoverable.js";
import "../vendor/svelte-carousel/src/actions/hoverable/event.js";
import "../vendor/svelte-carousel/src/actions/tappable/tappable.js";
import "../vendor/svelte-carousel/src/utils/math.js";
import "../vendor/svelte-carousel/src/actions/tappable/event.js";
import "../vendor/svelte-carousel/src/utils/page.js";
import "../vendor/svelte-carousel/src/utils/clones.js";
import "../vendor/svelte-carousel/src/utils/object.js";
import "../vendor/svelte-carousel/src/components/Carousel/createCarousel.js";
import "../vendor/easy-reactive/src/simply-reactive.js";
import "../vendor/lodash.get/index.js";
import "../_commonjsHelpers.js";
import "../vendor/lodash.clonedeep/index.js";
import "../vendor/easy-reactive/src/utils/subscription.js";
import "../vendor/easy-reactive/src/utils/object.js";
import "../vendor/lodash.isequal/index.js";
import "../vendor/easy-reactive/src/utils/watcher.js";
import "../vendor/svelte-carousel/src/utils/lazy.js";
import "../vendor/svelte-carousel/src/utils/ProgressManager.js";
import "../vendor/svelte-carousel/src/utils/interval.js";
import "../PanoTagPlugin/Components/Common/MediaItem.js";
import "../PanoTagPlugin/Components/Tag/MarketingTag.js";
import "../PanoTagPlugin/Components/Tag/Assets/marketingIcon.js";
import "../PanoTagPlugin/utils/noTypecheck.js";
import "../PanoTagPlugin/Components/Tag/AudioTag/index.js";
import "../PanoTagPlugin/Components/Tag/AudioTag/AudioTag.js";
import "../PanoTagPlugin/Components/Common/Audio.js";
import "../PanoTagPlugin/utils/audio/SharedAudio.js";
import "../PanoTagPlugin/utils/audio/AudioDiagnostics.js";
import "../PanoTagPlugin/Components/Common/Icon/audioIcon.js";
import "../PanoTagPlugin/Components/Tag/AudioTag/AudioPlaneTag.js";
import "../PanoTagPlugin/Components/Tag/MediaPlane.js";
import "../PanoTagPlugin/Components/Tag/LinkTag.js";
import "../PanoTagPlugin/Components/Common/Icon/Icon.js";
import "../PanoTagPlugin/utils/getImageInfo.js";
import "../PanoTagPlugin/Components/Common/Icon/animationUtils.js";
import "../PanoTagPlugin/Components/Tag/PanoramaTag.js";
import "../PanoTagPlugin/Components/Common/Icon/PanoramaIcon.js";
import "../PanoTagPlugin/Components/Tag/CustomTag.js";
import "../vendor/classnames/index.js";
import "../PanoTagPlugin/controller/Tag/PlaneTag.js";
import "../Sculpt/index.js";
import "../Sculpt/utils/Modules/Global.js";
import "../Sculpt/utils/Modules/Cursor.js";
import "../Sculpt/utils/Modules/DeleteButtonBgBorder.js";
import "../Sculpt/utils/Modules/DeleteIconSVG.js";
import "../Object3DHelperPlugin/Controller.js";
import "../shared-utils/Object3DHelper/Helper/MoveHelper.js";
import "../shared-utils/Object3DHelper/Base/BaseHelper.js";
import "../shared-utils/Object3DHelper/utils/setObjectQuaternion.js";
import "../shared-utils/three/boundingBox.js";
import "../shared-utils/Object3DHelper/Helper/Objects/ArrowGroup.js";
import "../shared-utils/Object3DHelper/utils/direction.js";
import "../shared-utils/Object3DHelper/Constants/RenderOrder.js";
import "../shared-utils/Object3DHelper/Helper/Objects/CenterHandle.js";
import "../shared-utils/Object3DHelper/Constants/color.js";
import "../shared-utils/Object3DHelper/utils/calculateScaleByCamera.js";
import "../shared-utils/Object3DHelper/utils/getPoseFromCamera.js";
import "../shared-utils/clamp.js";
import "../shared-utils/Object3DHelper/utils/getOrthographicCameraDirection.js";
import "../shared-utils/Object3DHelper/Helper/RotateHelper.js";
import "../shared-utils/Object3DHelper/Helper/HTML/tipsDom.js";
import "../shared-utils/Object3DHelper/Helper/HTML/utils/createElement.js";
import "../shared-utils/Object3DHelper/Helper/CSS3DScaleHelper.js";
import "../shared-utils/Object3DHelper/Helper/HTML/rectangleScaleDom.js";
import "../shared-utils/Object3DHelper/utils/cameraHooks.js";
import "../shared-utils/Object3DHelper/Helper/BoundingBoxHelper.js";
import "../shared-utils/Object3DHelper/Controller/MoveController.js";
import "../shared-utils/Object3DHelper/Base/BaseController.js";
import "../shared-utils/Object3DHelper/utils/solidGuide.js";
import "../shared-utils/Object3DHelper/utils/getMouseRaycaster.js";
import "../shared-utils/Object3DHelper/utils/calculateThreeMouse.js";
import "../Object3DHelperPlugin/FiveControllerWrapper.js";
import "../shared-utils/Object3DHelper/index.js";
import "../shared-utils/Object3DHelper/Controller/RotateController.js";
import "../shared-utils/math/rad2Deg.js";
import "../shared-utils/math/deg2Rad.js";
import "../shared-utils/Object3DHelper/Controller/CSS3DScaleController.js";
import "../shared-utils/Object3DHelper/Controller/RectangleScaleController.js";
import "../shared-utils/three/vectorIsEqual.js";
import "../shared-utils/Object3DHelper/Controller/BoundingBoxController.js";
import "../shared-utils/Object3DHelper/Helper/ScaleHelper.js";
import "../shared-utils/Object3DHelper/Controller/ScaleController.js";
import "../shared-utils/threex/domevents/index.js";
import "../shared-utils/three/recurveFindObject.js";
import "../Sculpt/Objects/Polyline/index.js";
import "../Sculpt/Meshes/Polyline.js";
import "../Sculpt/Meshes/LineWithDots.js";
import "../Sculpt/Meshes/Point.js";
import "../shared-utils/three/closeVectors.js";
import "../Sculpt/Objects/Base/index.js";
import "../vendor/hotkeys-js/dist/hotkeys.esm.js";
import "../Sculpt/Objects/Polyline/Editor.js";
import "../Sculpt/Objects/Line/Editor.js";
import "../Sculpt/Objects/Base/Editor.js";
import "../shared-utils/three/vector3ToArray.js";
import "../Sculpt/Objects/Point/index.js";
import "../Sculpt/Objects/Point/Editor.js";
import "../Sculpt/Objects/Polygon/index.js";
import "../Sculpt/Meshes/Area.js";
import "../Sculpt/Meshes/PolygonWithEdge.js";
import "../Sculpt/Meshes/Polygon.js";
import "../shared-utils/three/generatePolygonGeometry.js";
import "../shared-utils/three/earcut3D.js";
import "../PanoMeasurePlugin/utils/isIntersecting.js";
import "../Sculpt/utils/three/ColoredMesh.js";
import "../shared-utils/three/geometryUtil.js";
import "../Sculpt/Objects/Polygon/Editor.js";
import "../Sculpt/utils/isIntersecting.js";
import "../Sculpt/Objects/Prism/index.js";
import "../Sculpt/Meshes/Prism.js";
import "../shared-utils/three/core/PrismGeometry.js";
import "../shared-utils/three/core/polygonVertex.js";
import "../shared-utils/three/core/PrismAnimationGeometry.js";
import "../Sculpt/Editors/PrismMeshEditor.js";
import "../Sculpt/Objects/Rectangle/index.js";
import "../Sculpt/Editors/RectangleMeshEditor.js";
import "../Sculpt/Meshes/Rectangle.js";
import "../Sculpt/utils/three/RectangleGeometry.js";
import "../Sculpt/Meshes/RectangleWithEdge.js";
import "../Sculpt/utils/sortPositionsByCameraPosition.js";
import "../Sculpt/Objects/Circle/index.js";
import "../Sculpt/Editors/CircleMeshEditor.js";
import "../Sculpt/Meshes/CircleWithEdge.js";
import "../Sculpt/Meshes/Circle.js";
import "../Sculpt/utils/radiusToSegments.js";
import "../Sculpt/Objects/Cylinder/index.js";
import "../Sculpt/Meshes/Cylinder.js";
import "../Sculpt/Editors/CylinderMeshEditor.js";
import "../Sculpt/Objects/Box/index.js";
import "../Sculpt/Editors/BoxMeshEditor.js";
import "../Sculpt/Meshes/Box.js";
import "../shared-utils/forReverseEach.js";
import "../Sculpt/Objects/Line/index.js";
import "../shared-utils/five/getFloorMesh.js";
import "../PanoTagPlugin/controller/Tag/BoxTag.js";
import "../PanoTagPlugin/utils/sculptDataToBoxPosition.js";
import "../PanoTagPlugin/controller/Tag/PolygonTag.js";
import "../PanoTagPlugin/controller/Tag/MaskTag.js";
import "../PanoTagPlugin/controller/Tag/MaskTag.shaders.js";
import "../PanoTagPlugin/Components/TagContainer.js";
import "../PanoTagPlugin/Components/TagItem.js";
import "../PanoTagPlugin/Components/Common/TagPoint.js";
import "../PanoTagPlugin/Components/Tag/AudioTag/AudioPoint.js";
import "../PanoTagPlugin/Components/Common/TagPopover/index.js";
import "../PanoTagPlugin/Components/Common/TagPopover/PopoverContent.js";
import "../PanoTagPlugin/Components/Common/TagPopover/TagPopoverArrow.js";
import "../PanoTagPlugin/Components/Common/Icon/tag-popover-arrow-base64.js";
import "../PanoTagPlugin/Components/Common/TagPopover/TagPopup.js";
import "../PanoTagPlugin/Components/Common/VideoIcon.js";
import "../PanoTagPlugin/Components/Common/TagPopover/PanoramaIcon.js";
import "../PanoTagPlugin/utils/videoHelper.js";
import "../PanoTagPlugin/Components/Common/AudioPlayer.js";
import "../PanoTagPlugin/Components/Common/TagPopover/TagPopoverToolBar.js";
import "../PanoTagPlugin/Components/Common/TagPopover/ArrowRightIcon.js";
import "../PanoTagPlugin/Components/Common/TagPopover/ShareIcon.js";
import "../PanoTagPlugin/utils/popoverContainer.js";
import "./Components/Tag.js";
import "../shared-utils/fontSize.js";
import "../shared-utils/px2rem.js";
import "./utils/index.js";
import "./utils/createPath.js";
import "../shared-utils/to.js";
import "../shared-utils/five/changeMode.js";
import "../shared-utils/nearlyEqual.js";
import "../CruisePlugin/Move.js";
import "../CruisePlugin/BaseController.js";
import "../CruisePlugin/utils/getFiveStateOnCurve.js";
import "./index.js";
import "./Controller.js";
import "../CruisePlugin/utils/coordinatesAngle.js";
import "../CruisePlugin/utils/coordinatesToVector.js";
import "../CruisePlugin/utils/safeCall.js";
import "../CruisePlugin/utils/sleep.js";
import "../shared-utils/five/fiveLoaded.js";
const _ = "GuideLinePlugin", E = `${_}`, be = (a) => `${E}--${a}`;
class ge extends k {
  constructor(t, i) {
    super(t, i);
    d(this, "name", _);
    d(this, "cruisePlugin");
    /** GuideLineItem 索引 */
    d(this, "itemMap", /* @__PURE__ */ new Map());
    d(this, "state", {
      visible: !1,
      enabled: !0
    });
    d(this, "data");
    /** 当新增一根线时，整体高度的偏移值 */
    d(this, "heightOffset", 0);
    d(this, "_config");
    d(this, "_disposed", !1);
    d(this, "disposedErrorLog", () => {
      console.error(`${E} is disposed`);
    });
    this._config = i != null ? i : {}, this.cruisePlugin = new J(t), Object.assign(window, { [`__${_}_DEBUG__`]: this });
  }
  get config() {
    return this._config;
  }
  get disposed() {
    return this._disposed;
  }
  load(t, i, s = !0) {
    return f(this, null, function* () {
      var I, y, v, D, x, T, L;
      const e = this.data ? JSON.parse(JSON.stringify(this.data)) : void 0, o = yield this.formatData(t);
      this.hooks.emit("dataChange", o, e), this.data = o;
      const r = o.config, m = !o.lines && o.routes, n = (I = r == null ? void 0 : r.arrowTextureUrl) != null ? I : g(this.staticPrefix, F), h = c(l({}, r), {
        model_style: {
          texture: { url: n }
        },
        panorama_style: {
          visible: !!m,
          unit_length: (y = r == null ? void 0 : r.unitHeight) != null ? y : 0.4,
          width: (v = r == null ? void 0 : r.unitWidth) != null ? v : 0.6,
          texture: { url: n }
        }
      }), O = (x = (D = o.routes) == null ? void 0 : D.map((u) => {
        var w;
        return G({}, h, { id: (w = u.id) != null ? w : H(), pano_group: u.panoIndexList });
      })) != null ? x : [], S = (L = (T = o.lines) == null ? void 0 : T.map((u) => G({}, h, u))) != null ? L : [], M = [...O, ...S];
      yield $(this.five), this.clear(), M.forEach((u) => {
        this.addGuideLineItem(u);
      }), this.updateTagsEnable(), this.handleVisible(this.state.visible), this.handleEnable(this.state.enabled), i && this.setState(i, { userAction: s }), this.hooks.emit("dataLoaded", o), console.debug(`${E} loaded`, o);
    });
  }
  formatData(t) {
    return f(this, null, function* () {
      return this.getDataWithoutVersion(t);
    });
  }
  /** 展示插件 */
  show(t) {
    return f(this, null, function* () {
      this.setState({ visible: !0 }, t);
    });
  }
  /** 隐藏插件 */
  hide(t) {
    return f(this, null, function* () {
      this.setState({ visible: !1 }, t);
    });
  }
  /** 开启插件 */
  enable(t) {
    this.setState({ enabled: !0 }, t);
  }
  /** 关闭插件 */
  disable(t) {
    this.setState({ enabled: !1 }, t);
  }
  /** 销毁插件 */
  dispose() {
    this.disposed || (this.clear(), this.hooks.emit("dispose"));
  }
  setState(t, i) {
    var e;
    if (this.disposed)
      return this.disposedErrorLog();
    const s = l({}, this.state);
    this.state = l(l({}, this.state), t), t.visible !== void 0 && t.visible !== s.visible && this.handleVisible(t.visible, i == null ? void 0 : i.userAction), t.enabled !== void 0 && t.enabled !== s.enabled && this.handleEnable(t.enabled, i == null ? void 0 : i.userAction), B(s, this.state, { deep: !0 }) || (this.hooks.emit("stateChange", { state: this.state, prevState: s, userAction: (e = i == null ? void 0 : i.userAction) != null ? e : !0 }), this.five.needsRender = !0);
  }
  /** 添加一个 GuideLineItem */
  addGuideLineItem(t) {
    const i = t.render_id || t.id, s = this.itemMap.get(i);
    s && this.removeGuideLineItem(s);
    const e = new C({ five: this.five, id: i, plugin: this });
    return this.itemMap.set(i, e), t && e.setData(this.processItemUrls(t)), this.heightOffset += 1e-4, e.modelItem.setHeightOffset(this.heightOffset), e.panoramaItem.setHeightOffset(this.heightOffset), e;
  }
  processItemUrls(t) {
    var e, o, r, m;
    const i = l({}, t), s = j;
    if (i.panorama_style) {
      const n = (o = (e = i.panorama_style.texture) == null ? void 0 : e.url) != null ? o : s;
      i.panorama_style = c(l({}, i.panorama_style), {
        texture: c(l({}, i.panorama_style.texture), {
          url: g(this.staticPrefix, n)
        })
      });
    }
    if (i.model_style) {
      const n = (m = (r = i.model_style.texture) == null ? void 0 : r.url) != null ? m : s;
      i.model_style = c(l({}, i.model_style), {
        texture: c(l({}, i.model_style.texture), {
          url: g(this.staticPrefix, n)
        })
      });
    }
    return i;
  }
  /** 获取 Plugin 内的 GuideLineItem */
  getGuideLineItemByID(t) {
    return this.itemMap.get(t);
  }
  /** 移除一个 GuideLineItem */
  removeGuideLineItem(t) {
    this.itemMap.delete(t.id), t.panoramaItem.dispose(), t.modelItem.dispose();
  }
  /**
   * 动态更新距离格式化函数，立即刷新所有路线标签的距离显示。
   * 不传参时恢复为默认格式（i18n('全程') + 距离 + i18n('米')）。
   * @param fn 格式化函数，输入米数，返回带单位的完整字符串
   * @example
   *   // 室内英制：英尺 + 英寸（如 "5'10""）
   *   plugin.setDistanceFormatter((m) => {
   *     const totalInches = Math.round(m * 39.3701)
   *     const feet = Math.floor(totalInches / 12)
   *     const inches = totalInches % 12
   *     return `${feet}'${inches}"`
   *   })
   *   // 室外英制：英里（如 "1.24 mi"）
   *   plugin.setDistanceFormatter((m) => `${(m * 0.000621371).toFixed(2)} mi`)
   *   // 自动切换：近距离用英尺，远距离用英里
   *   plugin.setDistanceFormatter((m) => {
   *     if (m < 300) return `${Math.round(m * 3.28084)} ft`
   *     return `${(m * 0.000621371).toFixed(2)} mi`
   *   })
   *   // 恢复默认（i18n '米'）
   *   plugin.setDistanceFormatter()
   */
  setDistanceFormatter(t) {
    this._config.formatDistance = t, this.updateTagDistances();
  }
  /** 更新所有 tag 的距离显示（当 formatDistance 函数改变时调用） */
  updateTagDistances() {
    this.itemMap.forEach((t) => {
      t.panoramaItem.updateTagDistance(), t.modelItem.updateTagDistance();
    });
  }
  /** 全量更新 tag */
  updateTagsEnable() {
    const t = [];
    function i(o) {
      return Array.isArray(o) && o.every((r) => typeof r == "number");
    }
    function s(o, r) {
      return new A.Vector3().fromArray(o).distanceTo(new A.Vector3().fromArray(r)) < 0.01;
    }
    function e(o) {
      var m;
      const r = (m = o == null ? void 0 : o.tag) == null ? void 0 : m.position;
      return i(r) ? t.every((n) => {
        var h;
        return i((h = n.tag) == null ? void 0 : h.position) ? !s(r, n.tag.position) : !0;
      }) : !1;
    }
    this.itemMap.forEach((o) => {
      const r = o.modelItem.startTagContainer, m = o.modelItem.endTagContainer;
      if (!r && !m)
        return;
      const n = e(r);
      n && r && t.push(r), r == null || r.plugin.setState({ enabled: n }, {});
      const h = e(m);
      h && m && t.push(m), m == null || m.plugin.setState({ enabled: h }, {});
    });
  }
  /** 清空所有 GuideLineItem */
  clear() {
    this.heightOffset = 0, this.itemMap.forEach((t) => {
      this.removeGuideLineItem(t);
    });
  }
  handleEnable(t, i = !0) {
    this.hooks.emit(t ? "enable" : "disable", { userAction: i });
  }
  handleVisible(t, i = !0) {
    this.state.enabled && this.hooks.emit(t ? "show" : "hide", { userAction: i });
  }
  getDataWithoutVersion(t) {
    return typeof t == "object" && t !== null && t.data ? t.data : t;
  }
}
export {
  ge as default,
  be as pluginFlag
};
