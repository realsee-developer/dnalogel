var T = Object.defineProperty, k = Object.defineProperties;
var x = Object.getOwnPropertyDescriptors;
var A = Object.getOwnPropertySymbols;
var N = Object.prototype.hasOwnProperty, $ = Object.prototype.propertyIsEnumerable;
var c = (p, e, t) => e in p ? T(p, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : p[e] = t, u = (p, e) => {
  for (var t in e || (e = {}))
    N.call(e, t) && c(p, t, e[t]);
  if (A)
    for (var t of A(e))
      $.call(e, t) && c(p, t, e[t]);
  return p;
}, G = (p, e) => k(p, x(e));
var h = (p, e, t) => (c(p, typeof e != "symbol" ? e + "" : e, t), t);
var f = (p, e, t) => new Promise((i, a) => {
  var s = (m) => {
    try {
      r(t.next(m));
    } catch (n) {
      a(n);
    }
  }, o = (m) => {
    try {
      r(t.throw(m));
    } catch (n) {
      a(n);
    }
  }, r = (m) => m.done ? i(m.value) : Promise.resolve(m.value).then(s, o);
  r((t = t.apply(p, e)).next());
});
import { Controller as P } from "../base/BasePluginWithData.js";
import "../shared-utils/tag.js";
import * as S from "three";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import { waitFiveModelLoaded as W } from "../shared-utils/five/fiveModelLoad.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { uuid as H } from "../shared-utils/uuid.js";
import { equal as U } from "../shared-utils/equal.js";
import "../shared-utils/five/FivePuppet.js";
import { GuideLineItem as j } from "./GuideLineItem/index.js";
import B from "../CruisePlugin/Work.js";
import { objectAssignDeepExports as M } from "../vendor/object-assign-deep/objectAssignDeep.js";
import "../base/BasePlugin.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/url/absoluteUrl.js";
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
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
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
import "../shared-utils/three/blink.js";
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
import "../PanoTagPlugin/utils/noTypecheck.js";
import "../PanoTagPlugin/Components/Tag/AudioTag/index.js";
import "../PanoTagPlugin/Components/Tag/AudioTag/AudioTag.js";
import "../PanoTagPlugin/Components/Common/Audio.js";
import "../PanoTagPlugin/utils/audio/SharedAudio.js";
import "../PanoTagPlugin/Components/Common/Icon/audioIcon.js";
import "../PanoTagPlugin/Components/Tag/AudioTag/AudioPlaneTag.js";
import "../PanoTagPlugin/Components/Tag/MediaPlane.js";
import "../PanoTagPlugin/Components/Tag/LinkTag.js";
import "../PanoTagPlugin/Components/Common/Icon/Icon.js";
import "../PanoTagPlugin/utils/getImageInfo.js";
import "../PanoTagPlugin/Components/Tag/PanoramaTag.js";
import "../PanoTagPlugin/Components/Common/Icon/PanoramaIcon.js";
import "../PanoTagPlugin/Components/Tag/CustomTag.js";
import "../vendor/classnames/index.js";
import "../PanoTagPlugin/controller/Tag/PlaneTag.js";
import "../PanoTagPlugin/Components/TagContainer.js";
import "../PanoTagPlugin/Components/TagItem.js";
import "../PanoTagPlugin/Components/Common/TagPoint.js";
import "../PanoTagPlugin/Components/Common/TagPopover/index.js";
import "../PanoTagPlugin/Components/Common/TagPopover/PopoverContent.js";
import "../PanoTagPlugin/Components/Common/TagPopover/TagPopoverArrow.js";
import "../PanoTagPlugin/Components/Common/Icon/tag-popover-arrow-base64.js";
import "../PanoTagPlugin/Components/Common/TagPopover/TagPopup.js";
import "../PanoTagPlugin/Components/Common/VideoIcon.js";
import "../PanoTagPlugin/Components/Common/TagPopover/PanoramaIcon.js";
import "../PanoTagPlugin/utils/videoHelper.js";
import "../PanoTagPlugin/Components/Common/TagPopover/TagPopoverToolBar.js";
import "../PanoTagPlugin/Components/Common/TagPopover/ArrowRightIcon.js";
import "../PanoTagPlugin/Components/Common/TagPopover/ShareIcon.js";
import "../PanoTagPlugin/utils/popoverContainer.js";
import "./Components/Tag.js";
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
const b = "GuideLinePlugin", g = `${b}`, he = (p) => `${g}--${p}`;
class de extends P {
  constructor(t, i) {
    super(t, i);
    h(this, "name", b);
    h(this, "cruisePlugin");
    /** GuideLineItem 索引 */
    h(this, "itemMap", /* @__PURE__ */ new Map());
    h(this, "state", {
      visible: !1,
      enabled: !0
    });
    h(this, "data");
    /** 当新增一根线时，整体高度的偏移值 */
    h(this, "heightOffset", 0);
    h(this, "_config");
    h(this, "_disposed", !1);
    h(this, "disposedErrorLog", () => {
      console.error(`${g} is disposed`);
    });
    this._config = i != null ? i : {}, this.cruisePlugin = new B(t), Object.assign(window, { [`__${b}_DEBUG__`]: this });
  }
  get config() {
    return this._config;
  }
  get disposed() {
    return this._disposed;
  }
  load(t, i, a = !0) {
    return f(this, null, function* () {
      var v, I, w, E, y, L, _;
      const s = this.data ? JSON.parse(JSON.stringify(this.data)) : void 0, o = yield this.formatData(t);
      this.hooks.emit("dataChange", o, s), this.data = o;
      const r = o.config, m = !o.lines && o.routes, n = G(u({}, r), {
        panorama_style: {
          visible: !!m,
          unit_length: (v = r == null ? void 0 : r.unitHeight) != null ? v : 0.4,
          width: (I = r == null ? void 0 : r.unitWidth) != null ? I : 0.6,
          texture: { url: (w = r == null ? void 0 : r.arrowTextureUrl) != null ? w : this.staticPrefix + "/release/web/arrow-white.5c2c79a5.png" }
        }
      }), d = (y = (E = o.routes) == null ? void 0 : E.map((l) => {
        var D;
        return M({}, n, { id: (D = l.id) != null ? D : H(), pano_group: l.panoIndexList });
      })) != null ? y : [], O = (_ = (L = o.lines) == null ? void 0 : L.map((l) => M({}, n, l))) != null ? _ : [], V = [...d, ...O];
      yield W(this.five), this.clear(), V.forEach((l) => {
        this.addGuideLineItem(l);
      }), this.updateTagsEnable(), this.handleVisible(this.state.visible), this.handleEnable(this.state.enabled), i && this.setState(i, { userAction: a }), this.hooks.emit("dataLoaded", o), console.debug(`${g} loaded`, o);
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
    var s;
    if (this.disposed)
      return this.disposedErrorLog();
    const a = u({}, this.state);
    this.state = u(u({}, this.state), t), t.visible !== void 0 && t.visible !== a.visible && this.handleVisible(t.visible, i == null ? void 0 : i.userAction), t.enabled !== void 0 && t.enabled !== a.enabled && this.handleEnable(t.enabled, i == null ? void 0 : i.userAction), U(a, this.state, { deep: !0 }) || (this.hooks.emit("stateChange", { state: this.state, prevState: a, userAction: (s = i == null ? void 0 : i.userAction) != null ? s : !0 }), this.five.needsRender = !0);
  }
  /** 添加一个 GuideLineItem */
  addGuideLineItem(t) {
    const i = t.render_id || t.id, a = this.itemMap.get(i);
    a && this.removeGuideLineItem(a);
    const s = new j({ five: this.five, id: i, plugin: this });
    return this.itemMap.set(i, s), t && s.setData(t), this.heightOffset += 1e-4, s.modelItem.setHeightOffset(this.heightOffset), s.panoramaItem.setHeightOffset(this.heightOffset), s;
  }
  /** 获取 Plugin 内的 GuideLineItem */
  getGuideLineItemByID(t) {
    return this.itemMap.get(t);
  }
  /** 移除一个 GuideLineItem */
  removeGuideLineItem(t) {
    this.itemMap.delete(t.id), t.panoramaItem.dispose(), t.modelItem.dispose();
  }
  /** 全量更新 tag */
  updateTagsEnable() {
    const t = [];
    function i(o) {
      return Array.isArray(o) && o.every((r) => typeof r == "number");
    }
    function a(o, r) {
      return new S.Vector3().fromArray(o).distanceTo(new S.Vector3().fromArray(r)) < 0.01;
    }
    function s(o) {
      var m;
      const r = (m = o == null ? void 0 : o.tag) == null ? void 0 : m.position;
      return i(r) ? t.every((n) => {
        var d;
        return i((d = n.tag) == null ? void 0 : d.position) ? !a(r, n.tag.position) : !0;
      }) : !1;
    }
    this.itemMap.forEach((o) => {
      const r = o.modelItem.startTagContainer, m = o.modelItem.endTagContainer, n = s(r);
      n && t.push(r), r == null || r.plugin.setState({ enabled: n }, {});
      const d = s(m);
      d && t.push(m), m == null || m.plugin.setState({ enabled: d }, {});
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
  de as default,
  he as pluginFlag
};
