var S = Object.defineProperty, P = Object.defineProperties;
var D = Object.getOwnPropertyDescriptors;
var v = Object.getOwnPropertySymbols;
var U = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var g = (d, a, e) => a in d ? S(d, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[a] = e, f = (d, a) => {
  for (var e in a || (a = {}))
    U.call(a, e) && g(d, e, a[e]);
  if (v)
    for (var e of v(a))
      A.call(a, e) && g(d, e, a[e]);
  return d;
}, c = (d, a) => P(d, D(a));
var p = (d, a, e) => (g(d, typeof a != "symbol" ? a + "" : a, e), e);
var l = (d, a, e) => new Promise((i, t) => {
  var o = (s) => {
    try {
      n(e.next(s));
    } catch (h) {
      t(h);
    }
  }, r = (s) => {
    try {
      n(e.throw(s));
    } catch (h) {
      t(h);
    }
  }, n = (s) => s.done ? i(s.value) : Promise.resolve(s.value).then(o, r);
  n((e = e.apply(d, a)).next());
});
import * as u from "three";
import { objectAssignDeepExports as m } from "../../vendor/object-assign-deep/objectAssignDeep.js";
import { arrayPositionToVector3 as E } from "../../shared-utils/positionToVector3.js";
import { isModelTag as k, isMediaModelTag as F } from "../utils/tag/tagCheck.js";
import { debounce as w } from "../utils/debounce.js";
import { throttle as _ } from "../utils/throttle.js";
import L, { getTagStickType as I } from "../utils/tag/format.js";
import { generateBlankAudio as M, AudioNamespace as B } from "../../shared-utils/audio.js";
import { resizeObserver as y } from "../../shared-utils/dom/resizeObserver.js";
import { TagRender as O } from "./TagRender.js";
import "../../shared-utils/tag.js";
import { isModelLike as R } from "../../shared-utils/five/mode.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import { waitFiveModelLoaded as G } from "../../shared-utils/five/fiveModelLoad.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import { nextFrame as N } from "../../shared-utils/animationFrame/index.js";
import "../../shared-utils/five/FivePuppet.js";
import { DebugUtil as z } from "../utils/DebugUtil.js";
import { safeObj as b } from "../../shared-utils/safeObj.js";
import { PointTag as V } from "./Tag/PointTag.js";
import { ModelTag as j } from "./Tag/ModelTag.js";
import { PlaneTag as Q } from "./Tag/PlaneTag.js";
import $ from "../Components/TagContainer.js";
import { fiveEveryReadyListener as x } from "../../shared-utils/five/fiveEveryReadyListener.js";
import { tweenProgress as W } from "../../shared-utils/animationFrame/BetterTween.js";
import "./TagUtil.js";
import "../tag.config.js";
import "../utils/normalPositionToPositions.js";
import "../../vendor/svelte/store/index.js";
import "../../vendor/svelte/internal/index.js";
import "../../shared-utils/device.js";
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
import "../../shared-utils/five/FiveDomEvents.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/five/calculateThreeMouse.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/three/core/Raycaster.js";
import "../utils/Cache.js";
import "../../base/BasePlugin.js";
import "../../shared-utils/Subscribe.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/url/absoluteUrl.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/three/temp.js";
import "../../shared-utils/throttle.js";
import "../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../shared-utils/three/Magnifier.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../shared-utils/three/Assets/index.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../shared-utils/even.js";
import "../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../shared-utils/isNil.js";
import "../../shared-utils/three/PointSelector/utils/html.js";
import "../../shared-utils/CSS3DRender/index.js";
import "../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../shared-utils/createResizeObserver.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../Sculpt/Meshes/Line.js";
import "../../Sculpt/typings/style.js";
import "../../shared-utils/three/IObject3D.js";
import "../../Sculpt/utils/removeAllTag.js";
import "../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/util.js";
import "../../shared-utils/three/core/LineGeometry.js";
import "../../shared-utils/three/core/LineMaterial.js";
import "../../shared-utils/three/core/Line2.js";
import "../../shared-utils/three/core/LineMaterial2.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../shared-utils/isTouchDevice.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
import "@realsee/five";
import "../utils/addDebugPoints.js";
import "./Tag/BaseTag.js";
import "../utils/tag/calculateTagConfig.js";
import "../../shared-utils/typescript/entries.js";
import "../utils/tag/adaptConfig.js";
import "../typings/tag/TagConfig.js";
import "../../shared-utils/three/blink.js";
import "../../shared-utils/vectorToCoordinate.js";
import "../../shared-utils/formatRad.js";
import "../../shared-utils/five/lookPoint.js";
import "../../shared-utils/uuid.js";
import "../utils/tagPosition.js";
import "../utils/checkRange.js";
import "../../shared-utils/url/getUrl.js";
import "../../shared-utils/five/getFloorIndex.js";
import "../../shared-utils/promise/withResolvers.js";
import "../../shared-utils/CSS3DRender/CSS3DObject.js";
import "../../shared-utils/three/GLTFLoader.js";
import "@realsee/five/gltf-loader";
import "../utils/planeNormal.js";
import "../Components/Tag/index.js";
import "../Components/Tag/TextTag/index.js";
import "../Components/Tag/TextTag/TextTag.js";
import "../Components/Common/Line/Straight.js";
import "../../vendor/svelte/transition/index.js";
import "../../vendor/svelte/easing/index.js";
import "../Components/Common/Shadow.js";
import "../Components/Common/Text/FlyMText.js";
import "../Components/Common/Text/FlyText.js";
import "../utils/search.js";
import "../utils/constants.js";
import "../Components/Common/Arrow.js";
import "../utils/doUtil.js";
import "../../shared-utils/svelte/resizeObserver.js";
import "../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "../Components/Tag/TextTag/TextPlaneTag.js";
import "../Components/Common/Text/MText.js";
import "../utils/px2rem.js";
import "../Components/Tag/ImageTextTag.js";
import "../Components/Common/Line/Polyline.js";
import "../Components/Common/Media.js";
import "../../vendor/svelte-carousel/src/components/Carousel/Carousel.js";
import "../../vendor/svelte-carousel/src/components/Dots/Dots.js";
import "../../vendor/svelte-carousel/src/components/Dot/Dot.js";
import "../../vendor/svelte-carousel/src/components/Arrow/Arrow.js";
import "../../vendor/svelte-carousel/src/direction.js";
import "../../vendor/svelte-carousel/src/components/Progress/Progress.js";
import "../../vendor/svelte-carousel/src/actions/swipeable/swipeable.js";
import "../../vendor/svelte-carousel/src/actions/swipeable/event.js";
import "../../vendor/svelte-carousel/src/utils/event.js";
import "../../vendor/svelte-carousel/src/units.js";
import "../../vendor/svelte-carousel/src/actions/hoverable/hoverable.js";
import "../../vendor/svelte-carousel/src/actions/hoverable/event.js";
import "../../vendor/svelte-carousel/src/actions/tappable/tappable.js";
import "../../vendor/svelte-carousel/src/utils/math.js";
import "../../vendor/svelte-carousel/src/actions/tappable/event.js";
import "../../vendor/svelte-carousel/src/utils/page.js";
import "../../vendor/svelte-carousel/src/utils/clones.js";
import "../../vendor/svelte-carousel/src/utils/object.js";
import "../../vendor/svelte-carousel/src/components/Carousel/createCarousel.js";
import "../../vendor/easy-reactive/src/simply-reactive.js";
import "../../vendor/lodash.get/index.js";
import "../../_commonjsHelpers.js";
import "../../vendor/lodash.clonedeep/index.js";
import "../../vendor/easy-reactive/src/utils/subscription.js";
import "../../vendor/easy-reactive/src/utils/object.js";
import "../../vendor/lodash.isequal/index.js";
import "../../vendor/easy-reactive/src/utils/watcher.js";
import "../../vendor/svelte-carousel/src/utils/lazy.js";
import "../../vendor/svelte-carousel/src/utils/ProgressManager.js";
import "../../vendor/svelte-carousel/src/utils/interval.js";
import "../Components/Common/MediaItem.js";
import "../Components/Tag/MarketingTag.js";
import "../utils/noTypecheck.js";
import "../Components/Tag/AudioTag/index.js";
import "../Components/Tag/AudioTag/AudioTag.js";
import "../Components/Common/Audio.js";
import "../utils/audio/SharedAudio.js";
import "../Components/Common/Icon/audioIcon.js";
import "../Components/Tag/AudioTag/AudioPlaneTag.js";
import "../Components/Tag/MediaPlane.js";
import "../Components/Tag/LinkTag.js";
import "../Components/Common/Icon/Icon.js";
import "../utils/getImageInfo.js";
import "../Components/Tag/PanoramaTag.js";
import "../Components/Tag/CustomTag.js";
import "../../vendor/classnames/index.js";
import "../Components/TagItem.js";
import "../Components/Common/TagPoint.js";
const T = "Dnalogel-PanoTagPlugin", uo = (d) => `${T}--${d}`;
class vo extends O {
  constructor(e, i) {
    super(e);
    /** state */
    p(this, "state", { enabled: !0, visible: !0 });
    /** debug */
    p(this, "debug");
    p(this, "debugUtil", new z(this));
    /** 更改 tag 模型 */
    p(this, "changeTagModel", (e, i) => l(this, null, function* () {
      var t;
      e.data = m({}, e.data, i), yield (t = e.loadModel) == null ? void 0 : t.call(e);
    }));
    p(this, "handleFiveModeChange", (e) => {
      const i = () => {
        this.filter2DPointTag.forEach((t) => {
          t.state.visible = !1, t.applyVisible();
        }), this.five.ready().then(() => {
          this.tagsDo(this.tags, (t) => {
            t.updateVisible(), F(t) && e !== "Panorama" && this.changeTagMode(t, "behind");
          });
        });
      };
      this.tags.length < 500 ? i() : this.five.ready().then(() => i());
    });
    p(this, "handleFiveWantsMoveToPano", (e) => {
      if (this.tags.length > 500) {
        this.temporaryState.visible = !1, this.addRenderQueue({ type: "TagContainerSvelte", keys: ["temporaryState"] });
        return;
      } else
        this.temporaryState.visible = !0, this.tags.forEach((i) => {
          i.temporaryState.visible = !0;
        }), this.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }), this.tags.forEach((i) => i.applyVisible());
    });
    p(this, "clickhandler", (e) => {
      e.tag.onClick(e);
    });
    p(this, "handleFiveCameraUpdate", () => {
      this.filterPointTag.forEach((e) => e.updateScreenPosition());
    });
    p(this, "handleFiveCameraFovUpdate", () => {
      this.handleFiveCameraUpdate(), this.five.off("render.prepare", this.handleFiveCameraUpdate), this.five.on("render.prepare", this.handleFiveCameraUpdate), setTimeout(() => {
        this.five.off("render.prepare", this.handleFiveCameraUpdate);
      }, 1e3);
    });
    p(this, "handleFivePanoArrived", () => l(this, null, function* () {
      this.filter2DPointTag.forEach((e) => {
        e.state.visible = !1, e.applyVisible();
      }), this.tagsDo(this.tags, (e) => {
        e.updateVisible();
      }), this.temporaryState.visible = !0, this.addRenderQueue({ type: "TagContainerSvelte", keys: ["temporaryState"] }), yield this.setUnfolded(), this.tags.filter(k).filter((e) => {
        var i;
        return (i = e.getConfig().modelConfig) == null ? void 0 : i.autoLookAtEnabled;
      }).forEach((e) => {
        var h;
        const i = new u.Mesh(new u.BoxGeometry(), new u.MeshBasicMaterial()), t = (h = e.model) == null ? void 0 : h.object;
        if (!t)
          return;
        i.position.copy(t.position), i.quaternion.copy(t.quaternion);
        const o = this.five.camera.position;
        i.lookAt(o.clone().setY(i.position.y));
        const r = t.quaternion.clone(), n = i.quaternion.clone(), s = W();
        s.onUpdate(({ progress: C }) => {
          t.quaternion.copy(r.clone().slerp(n, C));
        }), s.play();
      });
    }));
    /** 楼层切换时，需要更新标签可见性 */
    p(this, "handleFiveModelShownFloorChange", () => {
      this.tagsDo(this.tags, (e) => e.updateVisible());
    });
    p(this, "onFiveEveryReady", () => {
      this.setUnfoldedByCamera(), R(this.five.getCurrentState().mode) && this.tagsDo(this.tags, (e) => e.updateVisible());
    });
    p(this, "render", () => {
      this.renderQueue.forEach((e, i) => {
        const { keys: t } = e;
        if (i === "TagContainerSvelte") {
          const r = this.filterPointTag.filter((s) => s.screenPosition), n = {
            hooks: this.hooks,
            tags: r,
            state: this.state,
            temporaryState: this.temporaryState,
            mediaStore: this.mediaStore,
            rendererMap: this.rendererMap,
            contentTypeMap: this.contentTypeMap,
            zIndex: this.params.containerZIndex
          };
          if (this.TagContainerSvelte) {
            let s = {};
            if (t.length === 0)
              s = n;
            else
              for (const h of t)
                s[h] = n[h];
            this.TagContainerSvelte.$set(s);
          } else {
            if (!this.container)
              return console.error("updateRenderPlaneTag: tag2DContainer not found");
            this.TagContainerSvelte = new $({
              target: this.container,
              props: c(f({}, n), { state: c(f({}, this.state), { enabled: !1 }) })
            }), N(() => {
              var s;
              (s = this.TagContainerSvelte) == null || s.$set({ state: this.state });
            });
          }
        }
      }), this.renderQueue.clear();
    });
    this.params = m({}, { debug: !1, config: this.config }, f({}, i)), this.debug = this.params.debug, this.config = this.params.config, this.debug && this.debugUtil.bindLog(), M(1, { namespace: B.PlayAudio });
    try {
      Array.isArray(window.__PANOTAGPLUGIN_DEBUG_LIST__) || (window.__PANOTAGPLUGIN_DEBUG_LIST__ = []), this.NAME = T + "-" + window.__PANOTAGPLUGIN_DEBUG_LIST__.length, window.__PANOTAGPLUGIN_DEBUG_LIST__.push(this), window.__PANOTAGPLUGIN_DEBUG__ || Object.defineProperty(window, "__PANOTAGPLUGIN_DEBUG__", {
        get: function() {
          return window.__PANOTAGPLUGIN_DEBUG_LIST__.sort((t, o) => o.tags.length - t.tags.length)[0];
        }
      });
    } catch (t) {
    }
  }
  appendTo(e) {
    var t, o, r;
    this.container = e;
    const i = (o = (t = this.TagContainerSvelte) == null ? void 0 : t.$$) == null ? void 0 : o.root;
    i && i !== this.container && ((r = this.TagContainerSvelte) == null || r.$destroy(), this.TagContainerSvelte = void 0);
  }
  /**
   * @description 加载数据
   */
  load(e) {
    return l(this, null, function* () {
      var t, o;
      this.clearTags();
      try {
        console.debug(this.NAME, " load:", { data: JSON.parse(JSON.stringify(e)) });
      } catch (r) {
      }
      this.config = m({}, this.config, {
        globalConfig: (t = e.globalConfig) != null ? t : {},
        contentTypeConfig: (o = e.contentTypeConfig) != null ? o : {}
      });
      const i = yield this.addTag(e.tagList);
      return this.hooks.emit("loaded"), i;
    });
  }
  /**
   * @description 添加标签
   */
  addTag(e) {
    return l(this, null, function* () {
      const t = (Array.isArray(e) ? e : [e]).filter((o) => o.position).map((o) => {
        const r = I(o);
        if (r === "2DPoint" || r === "3DPoint")
          return new V(this, o);
        if (r === "Model")
          return new j(this, o);
        if (r === "Plane")
          return new Q(this, o);
      });
      return t.forEach(L), this.tags.push(...t), this.tagsLengthWillUpdate = !0, G(this.five).then(() => l(this, null, function* () {
        var o, r;
        this.store.eventListenerDisposer && ((r = (o = this.store).eventListenerDisposer) == null || r.call(o)), this.state.enabled && this.handleEnable(), this.addResizeListener(), this.clearUnusedPanelTag(), this.tagsDo(t, (n) => {
          this.tags.includes(n) && (n.updateVisible(), n.updateZIndex());
        }), this.setUnfolded(), this.addRenderQueue({ type: "TagContainerSvelte" }), this.hooks.emit("tagsLengthChange");
      }));
    });
  }
  /**
   * @description 改变配置
   */
  changeConfig(e, i = !0) {
    i ? this.config = m({}, this.config, e) : this.config = e, this.tags.forEach((t) => {
      t.updateConfig();
    }), this.tagsDo(this.tags, (t) => t.updateVisible());
  }
  /**
   * @description 改变全局配置
   */
  changeGlobalConfig(e, i = !0) {
    i ? this.config.globalConfig = m({}, this.config.globalConfig, e) : this.config.globalConfig = e, this.tags.forEach((t) => {
      t.updateConfig();
    }), this.tagsDo(this.tags, (t) => {
      t.updateVisible();
    });
  }
  /**
   * @description 改变类型配置
   */
  changeContentTypeConfig(e, i, t = !0) {
    this.config.contentTypeConfig || (this.config.contentTypeConfig = {}), t ? this.config.contentTypeConfig[e] = m({}, this.config.contentTypeConfig[e], i) : this.config.contentTypeConfig[e] = i, this.tags.forEach((o) => {
      o.updateConfig();
    }), this.tagsDo(this.tags, (o) => {
      o.updateVisible();
    });
  }
  show(e) {
    return l(this, null, function* () {
      if (this.checkDisposed())
        return;
      const { userAction: i = !0 } = e != null ? e : {};
      this.setState({ visible: !0 }, { userAction: i }), this.hooks.emit("show", { userAction: i });
    });
  }
  hide(e) {
    return l(this, null, function* () {
      if (this.checkDisposed())
        return;
      const { userAction: i = !0 } = e != null ? e : {};
      this.setState({ visible: !1 }, { userAction: i }), this.hooks.emit("hide", { userAction: i });
    });
  }
  enable(e) {
    if (this.checkDisposed())
      return;
    const { userAction: i = !0 } = e != null ? e : {};
    this.setState({ enabled: !0 }, { userAction: i }), this.hooks.emit("enable", { userAction: i });
  }
  disable(e) {
    if (this.checkDisposed())
      return;
    const { userAction: i = !0 } = e != null ? e : {};
    this.setState({ enabled: !1 }, { userAction: i }), this.hooks.emit("disable", { userAction: i });
  }
  setState(e, i) {
    if (this.checkDisposed())
      return;
    const { userAction: t = !0 } = i != null ? i : {}, o = f({}, this.state);
    this.state = Object.assign(this.state, e), o.visible !== this.state.visible && (e.visible ? this.handleShow() : this.handleHide()), o.enabled !== this.state.enabled && (e.enabled ? this.handleEnable() : this.handleDisable()), this.hooks.emit("stateChange", { state: this.state, prevState: o, userAction: t });
  }
  /**
   * @description 销毁
   */
  dispose() {
    var e, i, t, o, r, n;
    this.pauseCurrentMedia(), this.disposeAllCSS3DContainer(), (e = this.TagContainerSvelte) == null || e.$destroy(), this.filterCSS3DTag.forEach((s) => {
      var h;
      return (h = s.tag3DContentSvelte) == null ? void 0 : h.svelteApp.$destroy();
    }), this.tags.forEach((s) => s.cache.clear()), this.tags = [], this.tagsLengthWillUpdate = !0, this.hooks.emit("tagsLengthChange"), (i = this.store.disposers) == null || i.forEach((s) => s == null ? void 0 : s()), this.store.disposers = [], (o = (t = this.store).eventListenerDisposer) == null || o.call(t), this.store.eventListenerDisposer = void 0, (n = (r = this.store).resizeObserverDisposer) == null || n.call(r), this.store.resizeObserverDisposer = void 0, this.store.resizeObserverDisposerAdding = !1, this.five.scene.remove(this.group), this.group.remove(...this.group.children), this.gltfObjectGroup.remove(...this.gltfObjectGroup.children), this.imagePlaneGroup.remove(...this.imagePlaneGroup.children), this.five.needsRender = !0, this.store.disposed = !0, this.hooks.emit("dispose");
  }
  /**
   * @description 闪烁标签
   * @param {TagId} id
   * @param {Partial<anime.AnimeParams>} animeConfig
   */
  blinkTagById(e, i) {
    return l(this, null, function* () {
      var t;
      return (t = this.getTagById(e)) == null ? void 0 : t.blink(i);
    });
  }
  /**
   * @description 展开/收起指定id的标签
   * @param {TagId} id
   * @param {boolean} unfolded
   */
  changeUnfoldedById(e, i) {
    const t = this.getTagById(e);
    i ? t == null || t.unfold() : t == null || t.fold();
  }
  /**
   * @description 启用/停用指定id的标签
   * @param {TagId} id
   * @param {boolean} enabled
   */
  changeEnabledById(e, i) {
    var o;
    const t = this.getTagById(e);
    t && (t.enabled = i, (o = t.hooks) == null || o.emit(i ? "enable" : "disable"));
  }
  /**
   * @description 修改3D标签normal
   * @param {TagId} id
   * @param {ArrayPosition} normal
   */
  changeTagNormalById(e, i) {
    const t = this.getTagById(e);
    t && t.tag3DContentSvelte && (t.tag3DContentSvelte.currentNormal = E(i));
  }
  /**
   * @description 改变data
   */
  changePositionById(e, i) {
    const t = this.getTagById(e);
    t && t.setPosition(i);
  }
  /**
   * @description 改变data
   */
  changeDataById(e, i, t = !0) {
    const o = this.getTagById(e);
    o && (o.setData(i, t), this.clearUnusedPanelTag(), o.hooks.emit("dataChanged", o.data));
  }
  /**
   * @description 改变tag的stickType
   */
  changeStickTypeById(e, i, t = !0) {
    this.changeTagById(e, i, t);
  }
  /**
   * @description 改变tag任意属性
   */
  changeTagById(e, i, t = !0) {
    const o = this.getTagById(e);
    o && (o.set(i), o.updateVisible(), this.clearUnusedPanelTag(), o.hooks.emit("dataChanged", o.data));
  }
  /**
   * @description 销毁tag
   */
  destroyTagById(e) {
    (Array.isArray(e) ? e : [e]).forEach((t) => {
      var o;
      return (o = this.getTagById(t)) == null ? void 0 : o.destroy();
    });
  }
  /**
   * @deprecated
   */
  updateRenderAllTags() {
    this.tagsDo(this.tags, (e) => e.updateVisible()), this.five.needsRender = !0;
  }
  /**
   * @description 清除所有标签
   */
  clearTags() {
    var e;
    this.tags.length && (this.tags.forEach((i) => {
      var t, o, r, n, s, h;
      (t = i.tag3DContentSvelte) == null || t.dispose(), (r = (o = i.mediaPlane) == null ? void 0 : o.parent) == null || r.remove(i.mediaPlane), (h = (s = (n = i.model) == null ? void 0 : n.object) == null ? void 0 : s.parent) == null || h.remove(i.model.object);
    }), this.tags = [], this.tagsLengthWillUpdate = !0, this.hooks.emit("tagsLengthChange"), (e = this.TagContainerSvelte) == null || e.$destroy(), this.TagContainerSvelte = void 0, this.disposeAllCSS3DContainer()), this.enabledModelTagSet.clear(), this.cache.clear();
  }
  /**
   * @description 设置 unfolded
   */
  setUnfolded() {
    return l(this, null, function* () {
      return new Promise((e) => {
        setTimeout(() => {
          this.setUnfoldedByCamera(), e();
        }, 100);
      });
    });
  }
  handleShow() {
    this.state.visible = !0, this.group.visible = !0, this.addRenderQueue({ type: "TagContainerSvelte", keys: ["state"] }), this.updateRenderAllTags(), this.five.needsRender = !0;
  }
  handleHide() {
    this.pauseCurrentMedia(), this.state.visible = !1, this.group.visible = !1, this.addRenderQueue({ type: "TagContainerSvelte", keys: ["state"] }), this.five.needsRender = !0;
  }
  handleEnable() {
    this.state.enabled = !0, this.store.eventListenerDisposer = this.addEventListener(), this.five.scene.children.includes(this.group) || this.five.scene.add(this.group), this.five.needsRender = !0;
  }
  handleDisable() {
    var e, i, t;
    this.pauseCurrentMedia(), this.state.enabled = !1, (i = (e = this.store).eventListenerDisposer) == null || i.call(e), this.five.scene.remove(this.group), (t = this.TagContainerSvelte) == null || t.$set({ tags: [] }), this.five.needsRender = !0;
  }
  addResizeListener() {
    if (!this.store.resizeObserverDisposer && !this.store.resizeObserverDisposerAdding) {
      const e = this.addResizeObserver();
      this.store.resizeObserverDisposerAdding = !0, setTimeout(() => {
        this.store.resizeObserverDisposer = e, this.store.resizeObserverDisposerAdding = !1;
      }, 200);
    }
  }
  addResizeObserver() {
    if (this.store.disposed)
      return;
    const e = this.five.getElement(), i = () => {
      this.state.enabled && (this.filterPointTag.forEach((h) => h.updateScreenPosition({ force: !0 })), this.temporaryState.visible = !0, this.addRenderQueue({ type: "TagContainerSvelte", keys: ["temporaryState"] }));
    }, t = () => {
      this.state.enabled && (this.temporaryState.visible = !1, this.addRenderQueue({ type: "TagContainerSvelte", keys: ["temporaryState"] }));
    }, { observe: o, unobserve: r } = y(
      _(() => {
        this.store.resizeObserverDisposer && t();
      }, 500),
      e
    ), { observe: n, unobserve: s } = y(
      w(() => i(), 400),
      e
    );
    return o(), n(), () => {
      r(), s();
    };
  }
  setUnfoldedByCamera() {
    let e = !1;
    this.filterPointTag.forEach((i) => {
      const t = i.getUnfoldedByCamera();
      if (i.state && t !== void 0) {
        if (t === !0 && i.screenPosition) {
          const o = i.getConfig().unfoldedConfig;
          b(o).keep !== "unfolded" && (e = !0);
        }
        i.state.unfolded = t;
      }
    }), e && this.filterPointTag.forEach((i) => {
      const t = i.getConfig().unfoldedConfig;
      typeof t == "object" && (t.autoUnfold || t.autoUnfold === !1 || b(t.autoUnfold).enable === !1 || t.keep) || i.state && (i.state.unfolded = !1);
    });
  }
  changeTagMode(e, i) {
    var t;
    (t = e.tag3DContentSvelte) != null && t.css3DInstance && (e.tag3DContentSvelte.css3DInstance.mode = i);
  }
  /**
   * @description 添加 cameraUpdate, panoArrived 等事件监听
   */
  addEventListener() {
    const { five: e, hooks: i } = this, t = x(this.five, this.onFiveEveryReady);
    return this.handleFivePanoArrived(), e.on("wantsMoveToPano", this.handleFiveWantsMoveToPano), e.on("models.refined", this.onFiveEveryReady), e.on("modeChange", this.handleFiveModeChange), e.on("modelShownFloorChange", this.handleFiveModelShownFloorChange), e.on("cameraUpdate", this.handleFiveCameraUpdate), e.on("cameraFovUpdate", this.handleFiveCameraFovUpdate), e.on("panoArrived", this.handleFivePanoArrived), e.on("panoArrived", this.loadVideoFirstFrame), e.on("render.prepare", this.render), i.on("click", this.clickhandler), () => {
      t(), e.off("wantsMoveToPano", this.handleFiveWantsMoveToPano), e.off("models.refined", this.onFiveEveryReady), e.off("modeChange", this.handleFiveModeChange), e.off("modelShownFloorChange", this.handleFiveModelShownFloorChange), e.off("cameraUpdate", this.handleFiveCameraUpdate), e.off("cameraFovUpdate", this.handleFiveCameraFovUpdate), e.off("panoArrived", this.handleFivePanoArrived), e.off("panoArrived", this.loadVideoFirstFrame), e.off("render.prepare", this.render), i.off("click", this.clickhandler), this.store.eventListenerDisposer = void 0;
    };
  }
}
export {
  vo as PanoTagPluginController,
  vo as default,
  uo as pluginFlag
};
