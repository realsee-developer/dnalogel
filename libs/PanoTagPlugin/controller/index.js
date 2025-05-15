var P = Object.defineProperty, E = Object.defineProperties;
var U = Object.getOwnPropertyDescriptors;
var v = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var g = (d, a, e) => a in d ? P(d, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[a] = e, f = (d, a) => {
  for (var e in a || (a = {}))
    A.call(a, e) && g(d, e, a[e]);
  if (v)
    for (var e of v(a))
      k.call(a, e) && g(d, e, a[e]);
  return d;
}, c = (d, a) => E(d, U(a));
var p = (d, a, e) => (g(d, typeof a != "symbol" ? a + "" : a, e), e);
var l = (d, a, e) => new Promise((t, i) => {
  var o = (r) => {
    try {
      n(e.next(r));
    } catch (h) {
      i(h);
    }
  }, s = (r) => {
    try {
      n(e.throw(r));
    } catch (h) {
      i(h);
    }
  }, n = (r) => r.done ? t(r.value) : Promise.resolve(r.value).then(o, s);
  n((e = e.apply(d, a)).next());
});
import * as u from "three";
import { objectAssignDeepExports as m } from "../../vendor/object-assign-deep/objectAssignDeep.js";
import { arrayPositionToVector3 as F } from "../../shared-utils/positionToVector3.js";
import { isModelTag as w, isMediaModelTag as _ } from "../utils/tag/tagCheck.js";
import { debounce as b } from "../utils/debounce.js";
import { throttle as I } from "../utils/throttle.js";
import L, { getTagStickType as M } from "../utils/tag/format.js";
import { generateBlankAudio as B, AudioNamespace as G } from "../../shared-utils/audio.js";
import { resizeObserver as y } from "../../shared-utils/dom/resizeObserver.js";
import { TagRender as O } from "./TagRender.js";
import "../../shared-utils/tag.js";
import { isModelLike as T } from "../../shared-utils/five/mode.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import { waitFiveModelLoaded as R } from "../../shared-utils/five/fiveModelLoad.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { nextFrame as N } from "../../shared-utils/animationFrame/index.js";
import "../../shared-utils/five/FivePuppet.js";
import { DebugUtil as V } from "../utils/DebugUtil.js";
import { safeObj as C } from "../../shared-utils/safeObj.js";
import { PointTag as z } from "./Tag/PointTag.js";
import { ModelTag as j } from "./Tag/ModelTag.js";
import { PlaneTag as Q } from "./Tag/PlaneTag.js";
import $ from "../Components/TagContainer.js";
import { fiveEveryReadyListener as H } from "../../shared-utils/five/fiveEveryReadyListener.js";
import { tweenProgress as x } from "../../shared-utils/animationFrame/BetterTween.js";
import "./TagUtil.js";
import "../typings/tag/TagConfig.js";
import "../tag.config.js";
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
import "../../shared-utils/typescript/entries.js";
import "../utils/tag/adaptConfig.js";
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
import "../../shared-utils/isTouchDevice.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
import "../../Sculpt/utils/three/rayOnLine.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../utils/addDebugPoints.js";
import "./Tag/BaseTag.js";
import "../utils/tag/calculateTagConfig.js";
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
import "../Components/Common/Icon/PanoramaIcon.js";
import "../Components/Tag/CustomTag.js";
import "../../vendor/classnames/index.js";
import "../Components/TagItem.js";
import "../Components/Common/TagPoint.js";
import "../Components/Common/TagPopover/index.js";
import "../Components/Common/TagPopover/PopoverContent.js";
import "../Components/Common/TagPopover/TagPopoverArrow.js";
import "../Components/Common/Icon/tag-popover-arrow-base64.js";
import "../Components/Common/TagPopover/TagPopup.js";
import "../Components/Common/VideoIcon.js";
import "../Components/Common/TagPopover/PanoramaIcon.js";
import "../utils/videoHelper.js";
import "../Components/Common/TagPopover/TagPopoverToolBar.js";
import "../Components/Common/TagPopover/ArrowRightIcon.js";
import "../Components/Common/TagPopover/ShareIcon.js";
import "../utils/popoverContainer.js";
const S = "Dnalogel-PanoTagPlugin", Bo = (d) => `${S}--${d}`;
class Go extends O {
  constructor(e, t) {
    super(e);
    /** state */
    p(this, "state", { enabled: !0, visible: !0 });
    /** debug */
    p(this, "debug");
    p(this, "debugUtil", new V(this));
    /** 全局 hover 启用状态，默认 true */
    p(this, "globalHoverEnabled", !0);
    /** 更改 tag 模型 */
    p(this, "changeTagModel", (e, t) => l(this, null, function* () {
      var i;
      e.data = m({}, e.data, t), yield (i = e.loadModel) == null ? void 0 : i.call(e);
    }));
    p(this, "handleFiveModeChange", (e) => {
      const t = () => {
        this.filter2DPointTag.forEach((i) => {
          i.state.visible = !1, i.applyVisible();
        }), this.five.ready().then(() => {
          this.tagsDo(this.tags, (i) => {
            i.updateVisible(), _(i) && e !== "Panorama" && this.changeTagMode(i, "behind");
          });
        });
      };
      this.tags.length < 500 ? t() : this.five.ready().then(() => t());
    });
    p(this, "handleFiveWantsMoveToPano", (e) => {
      if (this.tags.length > 500) {
        this.temporaryState.visible = !1, this.addRenderQueue({ type: "TagContainerSvelte", keys: ["temporaryState"] });
        return;
      } else
        this.temporaryState.visible = !0, this.tags.forEach((t) => {
          t.temporaryState.visible = !0;
        }), this.addRenderQueue({ type: "TagContainerSvelte", keys: ["tags"] }), this.tags.forEach((t) => t.applyVisible());
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
      }), this.temporaryState.visible = !0, this.addRenderQueue({ type: "TagContainerSvelte", keys: ["temporaryState"] }), yield this.setUnfolded(), this.tags.filter(w).filter((e) => {
        var t;
        return (t = e.getConfig().modelConfig) == null ? void 0 : t.autoLookAtEnabled;
      }).forEach((e) => {
        var h;
        const t = new u.Mesh(new u.BoxGeometry(), new u.MeshBasicMaterial()), i = (h = e.model) == null ? void 0 : h.object;
        if (!i)
          return;
        t.position.copy(i.position), t.quaternion.copy(i.quaternion);
        const o = this.five.camera.position;
        t.lookAt(o.clone().setY(t.position.y));
        const s = i.quaternion.clone(), n = t.quaternion.clone(), r = x();
        r.onUpdate(({ progress: D }) => {
          i.quaternion.copy(s.clone().slerp(n, D));
        }), r.play();
      });
    }));
    /** 楼层切换时，需要更新标签可见性 */
    p(this, "handleFiveModelShownFloorChange", () => {
      this.tagsDo(this.tags, (e) => e.updateVisible());
    });
    p(this, "onFiveRefined", b(() => {
      T(this.five.getCurrentState().mode) ? this.setUnfoldedByCamera() : this.tags.forEach((e) => e.cache.clear()), this.tagsDo(this.tags, (e) => e.updateVisible());
    }));
    p(this, "onFiveEveryReady", () => {
      this.setUnfoldedByCamera(), T(this.five.getCurrentState().mode) && this.tagsDo(this.tags, (e) => e.updateVisible());
    });
    p(this, "render", () => {
      this.renderQueue.forEach((e, t) => {
        const { keys: i } = e;
        if (t === "TagContainerSvelte") {
          const s = this.filterPointTag.filter((r) => r.screenPosition), n = {
            hooks: this.hooks,
            tags: s,
            state: this.state,
            temporaryState: this.temporaryState,
            mediaStore: this.mediaStore,
            rendererMap: this.rendererMap,
            contentTypeMap: this.contentTypeMap,
            zIndex: this.params.containerZIndex
          };
          if (this.TagContainerSvelte) {
            let r = {};
            if (i.length === 0)
              r = n;
            else
              for (const h of i)
                r[h] = n[h];
            this.TagContainerSvelte.$set(r);
          } else {
            if (!this.container)
              return console.error("updateRenderPlaneTag: tag2DContainer not found");
            this.TagContainerSvelte = new $({
              target: this.container,
              props: c(f({}, n), { state: c(f({}, this.state), { enabled: !1 }) })
            }), N(() => {
              var r;
              (r = this.TagContainerSvelte) == null || r.$set({ state: this.state });
            });
          }
        }
      }), this.renderQueue.clear();
    });
    this.params = m({}, { debug: !1, config: this.config }, f({}, t)), this.debug = this.params.debug, this.config = this.params.config, this.debug && this.debugUtil.bindLog(), B(1, { namespace: G.PlayAudio });
    try {
      Array.isArray(window.__PANOTAGPLUGIN_DEBUG_LIST__) || (window.__PANOTAGPLUGIN_DEBUG_LIST__ = []), this.NAME = S + "-" + window.__PANOTAGPLUGIN_DEBUG_LIST__.length, window.__PANOTAGPLUGIN_DEBUG_LIST__.push(this), window.__PANOTAGPLUGIN_DEBUG__ || Object.defineProperty(window, "__PANOTAGPLUGIN_DEBUG__", {
        get: function() {
          return window.__PANOTAGPLUGIN_DEBUG_LIST__.sort((i, o) => o.tags.length - i.tags.length)[0];
        }
      });
    } catch (i) {
    }
  }
  appendTo(e) {
    var i, o, s;
    this.container = e;
    const t = (o = (i = this.TagContainerSvelte) == null ? void 0 : i.$$) == null ? void 0 : o.root;
    t && t !== this.container && ((s = this.TagContainerSvelte) == null || s.$destroy(), this.TagContainerSvelte = void 0);
  }
  /**
   * @description 加载数据
   */
  load(e) {
    return l(this, null, function* () {
      var i, o;
      this.clearTags();
      try {
        console.debug(this.NAME, " load:", { data: JSON.parse(JSON.stringify(e)) });
      } catch (s) {
      }
      this.config = m({}, this.config, {
        globalConfig: (i = e.globalConfig) != null ? i : {},
        contentTypeConfig: (o = e.contentTypeConfig) != null ? o : {}
      });
      const t = yield this.addTag(e.tagList);
      return this.hooks.emit("loaded"), t;
    });
  }
  /**
   * @description 添加标签
   */
  addTag(e) {
    return l(this, null, function* () {
      const i = (Array.isArray(e) ? e : [e]).filter((o) => o.position).map((o) => {
        const s = M(o);
        if (s === "2DPoint" || s === "3DPoint")
          return new z(this, o);
        if (s === "Model")
          return new j(this, o);
        if (s === "Plane")
          return new Q(this, o);
      });
      return i.forEach(L), this.tags.push(...i), this.tagsLengthWillUpdate = !0, R(this.five).then(() => l(this, null, function* () {
        var o, s;
        this.store.eventListenerDisposer && ((s = (o = this.store).eventListenerDisposer) == null || s.call(o)), this.state.enabled && this.handleEnable(), this.addResizeListener(), this.clearUnusedPanelTag(), this.tagsDo(i, (n) => {
          this.tags.includes(n) && (n.updateVisible(), n.updateZIndex());
        }), this.setUnfolded(), this.addRenderQueue({ type: "TagContainerSvelte" }), this.hooks.emit("tagsLengthChange");
      }));
    });
  }
  /**
   * @description 改变配置
   */
  changeConfig(e, t = !0) {
    t ? this.config = m({}, this.config, e) : this.config = e, this.tags.forEach((i) => {
      i.updateConfig();
    }), this.tagsDo(this.tags, (i) => i.updateVisible());
  }
  /**
   * @description 改变全局配置
   */
  changeGlobalConfig(e, t = !0) {
    t ? this.config.globalConfig = m({}, this.config.globalConfig, e) : this.config.globalConfig = e, this.tags.forEach((i) => {
      i.updateConfig();
    }), this.tagsDo(this.tags, (i) => {
      i.updateVisible();
    });
  }
  /**
   * @description 改变类型配置
   */
  changeContentTypeConfig(e, t, i = !0) {
    this.config.contentTypeConfig || (this.config.contentTypeConfig = {}), i ? this.config.contentTypeConfig[e] = m({}, this.config.contentTypeConfig[e], t) : this.config.contentTypeConfig[e] = t, this.tags.forEach((o) => {
      o.updateConfig();
    }), this.tagsDo(this.tags, (o) => {
      o.updateVisible();
    });
  }
  show(e) {
    return l(this, null, function* () {
      if (this.checkDisposed())
        return;
      const { userAction: t = !0 } = e != null ? e : {};
      this.setState({ visible: !0 }, { userAction: t }), this.hooks.emit("show", { userAction: t });
    });
  }
  hide(e) {
    return l(this, null, function* () {
      if (this.checkDisposed())
        return;
      const { userAction: t = !0 } = e != null ? e : {};
      this.setState({ visible: !1 }, { userAction: t }), this.hooks.emit("hide", { userAction: t });
    });
  }
  enable(e) {
    if (this.checkDisposed())
      return;
    const { userAction: t = !0 } = e != null ? e : {};
    this.setState({ enabled: !0 }, { userAction: t }), this.hooks.emit("enable", { userAction: t });
  }
  disable(e) {
    if (this.checkDisposed())
      return;
    const { userAction: t = !0 } = e != null ? e : {};
    this.setState({ enabled: !1 }, { userAction: t }), this.hooks.emit("disable", { userAction: t });
  }
  setState(e, t) {
    if (this.checkDisposed())
      return;
    const { userAction: i = !0 } = t != null ? t : {}, o = f({}, this.state);
    this.state = Object.assign(this.state, e), o.visible !== this.state.visible && (e.visible ? this.handleShow() : this.handleHide()), o.enabled !== this.state.enabled && (e.enabled ? this.handleEnable() : this.handleDisable()), this.hooks.emit("stateChange", { state: this.state, prevState: o, userAction: i });
  }
  /**
   * @description 销毁
   */
  dispose() {
    var e, t, i, o, s, n;
    this.pauseCurrentMedia(), this.disposeAllCSS3DContainer(), (e = this.TagContainerSvelte) == null || e.$destroy(), this.filterCSS3DTag.forEach((r) => {
      var h;
      return (h = r.tag3DContentSvelte) == null ? void 0 : h.svelteApp.$destroy();
    }), this.tags.forEach((r) => r.cache.clear()), this.tags = [], this.tagsLengthWillUpdate = !0, this.hooks.emit("tagsLengthChange"), (t = this.store.disposers) == null || t.forEach((r) => r == null ? void 0 : r()), this.store.disposers = [], (o = (i = this.store).eventListenerDisposer) == null || o.call(i), this.store.eventListenerDisposer = void 0, (n = (s = this.store).resizeObserverDisposer) == null || n.call(s), this.store.resizeObserverDisposer = void 0, this.store.resizeObserverDisposerAdding = !1, this.five.scene.remove(this.group), this.group.remove(...this.group.children), this.gltfObjectGroup.remove(...this.gltfObjectGroup.children), this.imagePlaneGroup.remove(...this.imagePlaneGroup.children), this.five.needsRender = !0, this.store.disposed = !0, this.hooks.emit("dispose");
  }
  /**
   * @description 闪烁标签
   * @param {TagId} id
   * @param {Partial<anime.AnimeParams>} animeConfig
   */
  blinkTagById(e, t) {
    return l(this, null, function* () {
      var i;
      return (i = this.getTagById(e)) == null ? void 0 : i.blink(t);
    });
  }
  /**
   * @description 展开/收起指定id的标签
   * @param {TagId} id
   * @param {boolean} unfolded
   */
  changeUnfoldedById(e, t) {
    const i = this.getTagById(e);
    t ? i == null || i.unfold() : i == null || i.fold();
  }
  /**
   * @description 启用/停用指定id的标签
   * @param {TagId} id
   * @param {boolean} enabled
   */
  changeEnabledById(e, t) {
    var o;
    const i = this.getTagById(e);
    i && (i.enabled = t, (o = i.hooks) == null || o.emit(t ? "enable" : "disable"));
  }
  /**
   * @description 修改3D标签normal
   * @param {TagId} id
   * @param {ArrayPosition} normal
   */
  changeTagNormalById(e, t) {
    const i = this.getTagById(e);
    i && i.tag3DContentSvelte && (i.tag3DContentSvelte.currentNormal = F(t));
  }
  /**
   * @description 改变data
   */
  changePositionById(e, t) {
    const i = this.getTagById(e);
    i && i.setPosition(t);
  }
  /**
   * @description 改变data
   */
  changeDataById(e, t, i = !0) {
    const o = this.getTagById(e);
    o && (o.setData(t, i), this.clearUnusedPanelTag(), o.hooks.emit("dataChanged", o.data));
  }
  /**
   * @description 改变tag的stickType
   */
  changeStickTypeById(e, t, i = !0) {
    this.changeTagById(e, t, i);
  }
  /**
   * @description 改变tag任意属性
   */
  changeTagById(e, t, i = !0) {
    const o = this.getTagById(e);
    o && (o.set(t), o.updateVisible(), this.clearUnusedPanelTag(), o.hooks.emit("dataChanged", o.data));
  }
  /**
   * @description 销毁tag
   */
  destroyTagById(e) {
    (Array.isArray(e) ? e : [e]).forEach((i) => {
      var o;
      return (o = this.getTagById(i)) == null ? void 0 : o.destroy();
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
    this.tags.length && (this.tags.forEach((t) => {
      var i, o, s, n, r, h;
      (i = t.tag3DContentSvelte) == null || i.dispose(), (s = (o = t.mediaPlane) == null ? void 0 : o.parent) == null || s.remove(t.mediaPlane), (h = (r = (n = t.model) == null ? void 0 : n.object) == null ? void 0 : r.parent) == null || h.remove(t.model.object);
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
    var e, t, i;
    this.pauseCurrentMedia(), this.state.enabled = !1, (t = (e = this.store).eventListenerDisposer) == null || t.call(e), this.five.scene.remove(this.group), (i = this.TagContainerSvelte) == null || i.$set({ tags: [] }), this.five.needsRender = !0;
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
    const e = this.five.getElement(), t = () => {
      this.state.enabled && (this.filterPointTag.forEach((h) => h.updateScreenPosition({ force: !0 })), this.temporaryState.visible = !0, this.addRenderQueue({ type: "TagContainerSvelte", keys: ["temporaryState"] }));
    }, i = () => {
      this.state.enabled && (this.temporaryState.visible = !1, this.addRenderQueue({ type: "TagContainerSvelte", keys: ["temporaryState"] }));
    }, { observe: o, unobserve: s } = y(
      I(() => {
        this.store.resizeObserverDisposer && i();
      }, 500),
      e
    ), { observe: n, unobserve: r } = y(
      b(() => t(), 400),
      e
    );
    return o(), n(), () => {
      s(), r();
    };
  }
  setUnfoldedByCamera() {
    let e = !1;
    this.filterPointTag.forEach((t) => {
      const i = t.getUnfoldedByCamera();
      if (t.state && i !== void 0) {
        if (i === !0 && t.screenPosition) {
          const o = t.getConfig().unfoldedConfig;
          C(o).keep !== "unfolded" && (e = !0);
        }
        t.state.unfolded = i;
      }
    }), e && this.filterPointTag.forEach((t) => {
      const i = t.getConfig().unfoldedConfig;
      typeof i == "object" && (i.autoUnfold || i.autoUnfold === !1 || C(i.autoUnfold).enable === !1 || i.keep) || t.state && (t.state.unfolded = !1);
    });
  }
  changeTagMode(e, t) {
    var i;
    (i = e.tag3DContentSvelte) != null && i.css3DInstance && (e.tag3DContentSvelte.css3DInstance.mode = t);
  }
  /**
   * @description 添加 cameraUpdate, panoArrived 等事件监听
   */
  addEventListener() {
    const { five: e, hooks: t } = this, i = H(this.five, this.onFiveEveryReady);
    return this.handleFivePanoArrived(), e.on("wantsMoveToPano", this.handleFiveWantsMoveToPano), e.on("models.refined", this.onFiveRefined), e.on("modeChange", this.handleFiveModeChange), e.on("modelShownFloorChange", this.handleFiveModelShownFloorChange), e.on("cameraUpdate", this.handleFiveCameraUpdate), e.on("cameraFovUpdate", this.handleFiveCameraFovUpdate), e.on("panoArrived", this.handleFivePanoArrived), e.on("panoArrived", this.loadVideoFirstFrame), e.on("render.prepare", this.render), t.on("click", this.clickhandler), () => {
      i(), e.off("wantsMoveToPano", this.handleFiveWantsMoveToPano), e.off("models.refined", this.onFiveRefined), e.off("modeChange", this.handleFiveModeChange), e.off("modelShownFloorChange", this.handleFiveModelShownFloorChange), e.off("cameraUpdate", this.handleFiveCameraUpdate), e.off("cameraFovUpdate", this.handleFiveCameraFovUpdate), e.off("panoArrived", this.handleFivePanoArrived), e.off("panoArrived", this.loadVideoFirstFrame), e.off("render.prepare", this.render), t.off("click", this.clickhandler), this.store.eventListenerDisposer = void 0;
    };
  }
  /**
   * @description 设置标签 hover 启用状态
   */
  setTagHoverEnabled(e, t) {
    const i = this.getTagById(e);
    i && (i.hoverEnabled = t);
  }
  /**
   * @description 获取标签 hover 启用状态
   */
  getTagHoverEnabled(e) {
    const t = this.getTagById(e);
    return t == null ? void 0 : t.hoverEnabled;
  }
  /**
   * 设置全局 hover 启用状态
   */
  setGlobalHoverEnabled(e) {
    this.globalHoverEnabled = e;
  }
  /**
   * 获取全局 hover 启用状态
   */
  getGlobalHoverEnabled() {
    return this.globalHoverEnabled;
  }
}
export {
  Go as PanoTagPluginController,
  Go as default,
  Bo as pluginFlag
};
