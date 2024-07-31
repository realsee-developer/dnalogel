var k = Object.defineProperty, F = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var P = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable;
var y = (d, a, e) => a in d ? k(d, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[a] = e, c = (d, a) => {
  for (var e in a || (a = {}))
    M.call(a, e) && y(d, e, a[e]);
  if (P)
    for (var e of P(a))
      O.call(a, e) && y(d, e, a[e]);
  return d;
}, T = (d, a) => F(d, E(a));
var f = (d, a, e) => (y(d, typeof a != "symbol" ? a + "" : a, e), e);
var g = (d, a, e) => new Promise((t, i) => {
  var s = (r) => {
    try {
      n(e.next(r));
    } catch (h) {
      i(h);
    }
  }, o = (r) => {
    try {
      n(e.throw(r));
    } catch (h) {
      i(h);
    }
  }, n = (r) => r.done ? t(r.value) : Promise.resolve(r.value).then(s, o);
  n((e = e.apply(d, a)).next());
});
import * as C from "three";
import { Subscribe as _ } from "@realsee/five";
import { objectAssignDeepExports as m } from "../../vendor/object-assign-deep/objectAssignDeep.js";
import { addDebugPoints as R } from "../utils/addDebugPoints.js";
import { arrayPositionToVector3 as w } from "../../shared-utils/positionToVector3.js";
import { isMediaModelTag as L, isModelTag as G } from "../utils/tag/tagCheck.js";
import { debounce as N } from "../utils/debounce.js";
import { throttle as S } from "../utils/throttle.js";
import x, { getTagStickType as z } from "../utils/tag/format.js";
import { generateBlankAudio as W, AudioNamespace as $ } from "../../shared-utils/audio.js";
import { resizeObserver as U } from "../../shared-utils/dom/resizeObserver.js";
import { TagRender as j } from "./TagRender.js";
import { uuid as J } from "../../shared-utils/uuid.js";
import { isModelLike as q } from "../../shared-utils/five/mode.js";
import "hammerjs";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { waitFiveModelLoaded as H } from "../../shared-utils/five/fiveModelLoad.js";
import { blink as Q, reblink as Y } from "../../shared-utils/three/blink.js";
import { tweenProgress as Z } from "../../shared-utils/animationFrame/BetterTween.js";
import { DebugUtil as K } from "../utils/DebugUtil.js";
import { safeObj as I } from "../../shared-utils/safeObj.js";
import { sleep as X } from "../../CruisePlugin/utils/sleep.js";
import "./TagComputer.js";
import "../utils/tagPosition.js";
import "../../shared-utils/three/centerPoint.js";
import "../utils/checkRange.js";
import "animejs";
import "../../shared-utils/util.js";
import "../../shared-utils/isNil.js";
import "./TagUtil.js";
import "../typings/tag/TagConfig.js";
import "../tag.config.js";
import "../utils/planeNormal.js";
import "../utils/normalPositionToPositions.js";
import "./TagCache.js";
import "../../base/BasePlugin.js";
import "../../shared-utils/Subscribe.js";
import "../../shared-utils/url/absoluteUrl.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/even.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../vendor/svelte/store/index.js";
import "../../vendor/svelte/internal/index.js";
import "../../shared-utils/device.js";
import "../../CSS3DRenderPlugin/index.js";
import "../../CSS3DRenderPlugin/Controller.js";
import "../utils/model/mediaPlane.js";
import "../../shared-utils/three/loadTexture.js";
import "../../shared-utils/three/Quadrangle.js";
import "../../shared-utils/math/pointIsRectangle.js";
import "../../shared-utils/three/loadVideoTexture.js";
import "../Assets/Icon.js";
import "../../shared-utils/three/getPositionsByObjectFit.js";
import "../../shared-utils/three/FragmentTransparencyMaterial.js";
import "../../shared-utils/three/getNormal.js";
import "../../shared-utils/five/FiveDomEvents.js";
import "../../shared-utils/five/calculateThreeMouse.js";
import "../utils/tag/adaptConfig.js";
import "../../shared-utils/typescript/entries.js";
import "../../shared-utils/url/getUrl.js";
import "../../shared-utils/five/getFloorIndex.js";
import "../Components/TagContainer.js";
import "../Components/TagItem.js";
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
import "../Components/Common/TagPoint.js";
import "../../shared-utils/three/GLTFLoader.js";
import "@realsee/five/gltf-loader";
import "../../shared-utils/animationFrame/index.js";
const B = "Dnalogel-PanoTagPlugin", xi = (d) => `${B}--${d}`;
class zi extends j {
  constructor(e, t) {
    super(e);
    /** state */
    f(this, "state", { enabled: !0, visible: !0 });
    /** debug */
    f(this, "debug");
    f(this, "debugUtil", new K(this));
    /** 更改 tag 模型 */
    f(this, "changeTagModel", (e, t) => g(this, null, function* () {
      e.data = m({}, e.data, t), yield this.loadModel(e), this.updateTag(e);
    }));
    f(this, "whyHide", (e) => {
      var s;
      if (!this.state.enabled)
        return { reason: `plugin.state.enabled is ${this.state.enabled}` };
      if (!this.state.visible)
        return { reason: `plugin.state.visible is ${this.state.visible}` };
      const t = this.getTagById(e);
      if (!t)
        return { reason: `tag ${e} not found` };
      if (!t.enabled)
        return { reason: `tag ${e} enabled is: ${t.enabled}` };
      const i = T(c({}, this.computeTagVisible(t)), {
        tagInstance: t
      });
      return t.state.visible ? { reason: "应该是能看见才对", info: i } : t.stickType === "Model" || t.stickType === "Plane" ? { reason: "maybe blocked by the five model", info: i } : i.value === !0 ? { reason: "插件bug，请联系维护人员", info: i } : { reason: (s = i.reason.type) != null ? s : i.reason, info: i };
    });
    f(this, "updateVisible", () => {
      const e = this.five.getCurrentState().mode;
      this.tags.forEach((t) => {
        L(t) && e !== "Panorama" && this.changeTagMode(t, "behind");
      }), this.setVisible(), this.updateRenderAllTags();
    });
    f(this, "handleFiveModeChange", () => {
      this.tags.length < 200 ? this.updateVisible() : this.five.ready().then(() => {
        this.updateVisible();
      });
    });
    f(this, "handleFiveWantsMoveToPano", (e) => {
      this.tags.forEach((t) => {
        this.getVisible(t, { panoIndex: e }) && (t.state.visible = !0);
        const s = this.getTagConfig(t);
        typeof s.visibleConfig == "object" && t.temporaryState && (s.visibleConfig.keep ? t.temporaryState.visible = s.visibleConfig.keep === "visible" : t.temporaryState.visible = !!s.visibleConfig.alwaysShowWhenMovePano);
      }), this.updateTagContainerVisible(), this.updateRenderImagePlane(), this.updateRenderVideoPlane();
    });
    /**
     * @description 走点/切换模型后显示
     */
    // private temporaryShow({ withAnimation }: { withAnimation?: boolean } = { withAnimation: false }) {
    //   this.temporaryState.visible = true
    //   this.updateTagContainerVisible()
    // }
    /**
     * @description 走点/切换模型时临时隐藏
     */
    // private temporaryHide({ withAnimation }: { withAnimation?: boolean } = { withAnimation: false }) {
    //   this.temporaryState.visible = false
    //   this.updateTagContainerVisible()
    // }
    f(this, "clickhandler", (e) => {
      if (e.target !== "TagPoint")
        return;
      if (!e.tag.state)
        return console.warn("Clickhandler: params.tag.state is undefined");
      const t = this.can("fold", e.tag), i = this.can("unfold", e.tag);
      t && i && (e.tag.state.unfolded = !e.tag.state.unfolded, e.tag.state.unfolded && this.tags.forEach((s) => {
        s.id !== e.tag.id && s.state && this.can("fold", s) && (s.state.unfolded = !1);
      }), this.updateRenderAllTags());
    });
    f(this, "handleFiveCameraUpdate", () => {
      this.setPointTagPosition(), this.updateDomView();
    });
    f(this, "handleFivePanoArrived", () => g(this, null, function* () {
      this.setVisible(), this.setPointTagPosition(), this.updateDomView(), yield this.setVisibleAndUnfolded(), this.tags.forEach((e) => {
        e.temporaryState = T(c({}, e.temporaryState), { visible: !0 });
      }), this.tags.filter(G).filter((e) => {
        var t;
        return (t = this.getTagConfig(e).modelConfig) == null ? void 0 : t.autoLookAtEnabled;
      }).forEach((e) => {
        var h;
        const t = new C.Mesh(new C.BoxGeometry(), new C.MeshBasicMaterial()), i = (h = e.model) == null ? void 0 : h.object;
        if (!i)
          return;
        t.position.copy(i.position), t.quaternion.copy(i.quaternion);
        const s = this.five.camera.position;
        t.lookAt(s.clone().setY(t.position.y));
        const o = i.quaternion.clone(), n = t.quaternion.clone(), r = Z();
        r.onUpdate(({ progress: l }) => {
          i.quaternion.copy(o.clone().slerp(n, l));
        }), r.play();
      }), this.store.visibleWithAnimation = !0, this.updateTagContainerVisible(), this.updateRenderAllTags();
    }));
    /** 楼层切换时，需要更新标签可见性 */
    f(this, "handleFiveModelShownFloorChange", () => {
      this.setVisible(), this.updateRenderAllTags();
    });
    f(this, "onFiveEveryReady", () => {
      this.setUnfoldedByCamera(), q(this.five.getCurrentState().mode) && (this.setTagZIndex(this.filterPointTag), this.setVisible(), this.setPointTagPosition()), this.updateDomView({ withAnimation: !0 });
    });
    this.params = m({}, { debug: !1, config: this.config }, c({}, t)), this.debug = this.params.debug, this.config = this.params.config, W(1, { namespace: $.PlayAudio });
    try {
      Array.isArray(window.__PANOTAGPLUGIN_DEBUG_LIST__) || (window.__PANOTAGPLUGIN_DEBUG_LIST__ = []), window.__PANOTAGPLUGIN_DEBUG_LIST__.push(this), window.__PANOTAGPLUGIN_DEBUG__ || Object.defineProperty(window, "__PANOTAGPLUGIN_DEBUG__", {
        get: function() {
          return window.__PANOTAGPLUGIN_DEBUG_LIST__.sort((i, s) => s.tags.length - i.tags.length)[0];
        }
      });
    } catch (i) {
    }
  }
  appendTo(e) {
    var i, s, o, n;
    this.container = e, (i = this.css3DRenderPlugin) == null || i.appendToFrontFiveContainer(this.container);
    const t = (o = (s = this.TagContainerSvelte) == null ? void 0 : s.$$) == null ? void 0 : o.root;
    t && t !== this.container && ((n = this.TagContainerSvelte) == null || n.$destroy(), this.TagContainerSvelte = void 0, this.updateDomView());
  }
  /**
   * @description 加载数据
   */
  load(e, t) {
    return g(this, null, function* () {
      var s, o;
      this.clearTags(), console.debug(B, " load:", { data: JSON.parse(JSON.stringify(e)) }), this.config = m({}, this.config, {
        globalConfig: (s = e.globalConfig) != null ? s : {},
        contentTypeConfig: (o = e.contentTypeConfig) != null ? o : {}
      }), this.store.visibleWithAnimation = !0;
      const i = yield this.addTag(e.tagList, t);
      if (this.store.visibleWithAnimation = void 0, this.debug)
        try {
          R(this.five, this.tags);
        } catch (n) {
          console.error(n);
        }
      return i;
    });
  }
  /**
   * @description 添加标签
   */
  addTag(e, t) {
    return g(this, null, function* () {
      const s = (Array.isArray(e) ? e : [e]).filter((o) => o.position).map((o) => {
        var b, v, D, A;
        o.stickType = z(o);
        const n = JSON.parse(JSON.stringify(o.data)), r = (b = o.initialConfig) != null ? b : o.config ? JSON.parse(JSON.stringify(o.config)) : {};
        o.initialConfig = r;
        const h = this.calculateTagConfig(o), l = this.getTagConfig(o);
        o.config = l;
        const p = T(c({}, o), {
          enabled: (v = o.enabled) != null ? v : !0,
          id: (D = o.id) != null ? D : J(),
          data: (A = l.initialData) != null && A.important ? m(o.data, n, l.initialData) : m(o.data, l.initialData, n),
          state: c({
            visible: void 0,
            unfolded: !this.can("fold", o)
          }, l.initialState),
          hooks: new _(),
          originPosition: o.position,
          position: (() => {
            const u = this.getTransformedPostion(o.position);
            return Array.isArray(u) ? u.map((V) => V.toArray()) : u.toArray();
          })(),
          matrix: o.matrix ? this.getTransformedMatrix(o.matrix) : o.matrix,
          initialConfig: r,
          computedConfig: h,
          config: l,
          unfold: () => this.changeUnfoldedById(p.id, !0),
          fold: () => this.changeUnfoldedById(p.id, !1),
          enable: () => this.changeEnabledById(p.id, !0),
          disable: () => this.changeEnabledById(p.id, !1),
          destroy: () => this.destroyTagById(p.id),
          changeData: (u) => this.changeDataById(p.id, u),
          changePosition: (u) => this.changePositionById(p.id, u),
          blink: (u) => this.blinkTagById(p.id, u)
        });
        return p;
      });
      return s.forEach(x), this.tags.push(...s), this.tagsLengthWillUpdate = !0, H(this.five).then(() => g(this, null, function* () {
        var o, n, r;
        this.store.eventListenerDisposer && ((n = (o = this.store).eventListenerDisposer) == null || n.call(o)), this.state.enabled && this.handleEnable(), this.addResizeListener(), this.clearUnusedPanelTag(), this.addMediaModelTag(s), this.setVisibleAndUnfolded({ withAnimation: (r = t == null ? void 0 : t.withAnimation) != null ? r : !0 }), this.updateRenderAllTags();
      }));
    });
  }
  /**
   * @description 改变配置
   */
  changeConfig(e, t = !0) {
    t ? this.config = m({}, this.config, e) : this.config = e, this.updateTagConfig(), this.setVisible(), this.updateRenderAllTags();
  }
  /**
   * @description 改变全局配置
   */
  changeGlobalConfig(e, t = !0) {
    t ? this.config.globalConfig = m({}, this.config.globalConfig, e) : this.config.globalConfig = e, this.updateTagConfig(), this.setVisible(), this.updateRenderAllTags();
  }
  /**
   * @description 改变类型配置
   */
  changeContentTypeConfig(e, t, i = !0) {
    this.config.contentTypeConfig || (this.config.contentTypeConfig = {}), i ? this.config.contentTypeConfig[e] = m({}, this.config.contentTypeConfig[e], t) : this.config.contentTypeConfig[e] = t, this.updateTagConfig(), this.setVisible(), this.updateRenderAllTags();
  }
  show(e) {
    return g(this, null, function* () {
      if (this.checkDisposed())
        return;
      const { userAction: t = !0, withAnimation: i = !1 } = e != null ? e : {};
      this.setState({ visible: !0 }, { userAction: t, visibleWithAnimation: i }), this.hooks.emit("show", { userAction: t, withAnimation: i });
    });
  }
  hide(e) {
    return g(this, null, function* () {
      if (this.checkDisposed())
        return;
      const { userAction: t = !0, withAnimation: i = !1 } = e != null ? e : {};
      this.setState({ visible: !1 }, { userAction: t, visibleWithAnimation: i }), this.hooks.emit("hide", { userAction: t, withAnimation: i });
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
    const { userAction: i = !0, visibleWithAnimation: s = !1 } = t != null ? t : {}, o = c({}, this.state);
    this.state = Object.assign(this.state, e), this.store.visibleWithAnimation = s, o.visible !== this.state.visible && (e.visible ? this.handleShow() : this.handleHide()), o.enabled !== this.state.enabled && (e.enabled ? this.handleEnable() : this.handleDisable()), this.hooks.emit("stateChange", { state: this.state, prevState: o, userAction: i });
  }
  /**
   * @description 销毁
   */
  dispose() {
    var e, t, i, s, o, n;
    this.tagsLengthWillUpdate = !0, this.pauseCurrentMedia(), this.disposeAllCSS3DContainer(), (e = this.TagContainerSvelte) == null || e.$destroy(), this.filterCSS3DTag.forEach((r) => {
      var h;
      return (h = r.tag3DContentSvelte) == null ? void 0 : h.svelteApp.$destroy();
    }), this.tags = [], (t = this.store.disposers) == null || t.forEach((r) => r == null ? void 0 : r()), this.store.disposers = [], (s = (i = this.store).eventListenerDisposer) == null || s.call(i), this.store.eventListenerDisposer = void 0, (n = (o = this.store).resizeObserverDisposer) == null || n.call(o), this.store.resizeObserverDisposer = void 0, this.store.resizeObserverDisposerAdding = !1, this.five.scene.remove(this.group), this.group.remove(...this.group.children), this.gltfObjectGroup.remove(...this.gltfObjectGroup.children), this.imagePlaneGroup.remove(...this.imagePlaneGroup.children), this.clearCache(), this.five.needsRender = !0, this.store.disposed = !0, this.hooks.emit("dispose");
  }
  /**
   * @description 闪烁标签
   * @param {TagId} id
   * @param {Partial<anime.AnimeParams>} animeConfig
   */
  blinkTagById(e, t) {
    return g(this, null, function* () {
      var l, p;
      const i = this.getTagById(e);
      if (!i)
        return;
      const s = (l = i.enabled) != null ? l : !0, o = (p = i.state) == null ? void 0 : p.visible, n = s && o;
      n === !1 && (i.state.visible = !0, i.enabled = !0, this.setPointTagPosition(), this.updateTag(i), this.updateDomView(), yield X(0), i.dom && (i.dom.style.visibility = "hidden"), i.contentDom && (i.contentDom.style.visibility = "hidden"));
      const r = (() => {
        var v;
        const b = [];
        return b.push(i.dom), i.stickType !== "2DPoint" && b.push(i.contentDom), b.push((v = i.model) == null ? void 0 : v.object), b.push(i.mediaPlane), b.filter(Boolean);
      })();
      if (!r.length)
        return;
      yield (n ? Q : Y)(r, c({
        begin: () => {
          n === !1 && (i.dom && (i.dom.style.visibility = ""), i.contentDom && (i.contentDom.style.visibility = ""));
        },
        updateRender: () => {
          this.five.needsRender = !0;
        }
      }, t)).finished, s === !1 && (i.enabled = !1), o === !1 && this.setVisible(i), this.updateTag(i), this.updateDomView(), n === !1 && (i.dom && (i.dom.style.visibility = ""), i.contentDom && (i.contentDom.style.visibility = ""));
    });
  }
  /**
   * @description 展开/收起指定id的标签
   * @param {TagId} id
   * @param {boolean} unfolded
   */
  changeUnfoldedById(e, t) {
    var n;
    const i = this.getTagById(e);
    if (!i)
      return;
    const s = this.can("fold", i), o = this.can("unfold", i);
    if (s && o) {
      i.state.unfolded = t;
      const r = this.filterPointTag;
      (n = this.TagContainerSvelte) == null || n.$set({ tags: r });
    } else
      console.warn(`tag ${e} cannot be ${t ? "unfolded" : "folded"}`);
  }
  /**
   * @description 启用/停用指定id的标签
   * @param {TagId} id
   * @param {boolean} enabled
   */
  changeEnabledById(e, t) {
    var s;
    const i = this.getTagById(e);
    i && (i.enabled = t, (s = i.hooks) == null || s.emit(t ? "enable" : "disable"), this.setVisible(i), this.updateTag(i));
  }
  /**
   * @description 修改3D标签normal
   * @param {TagId} id
   * @param {ArrayPosition} normal
   */
  changeTagNormalById(e, t) {
    const i = this.getTagById(e);
    i && i.tag3DContentSvelte && (i.tag3DContentSvelte.currentNormal = w(t));
  }
  /**
   * @description 改变data
   */
  changePositionById(e, t) {
    const i = this.getTagById(e);
    if (!i)
      return;
    i.originPosition = t, i.position = t, this.clearCacheById(e);
    const s = this.getVisible(i);
    i.state && (i.state.visible = s), this.updateTag(i);
  }
  /**
   * @description 改变data
   */
  changeDataById(e, t, i = !0) {
    const s = this.getTagById(e);
    let o = !1;
    s && (s.data && (o = !0), i ? s.data = m(s.data, t) : s.data = c(c({}, s.data), t), this.clearUnusedPanelTag(), this.updateTag(s), o && s.hooks.emit("dataChanged", s.data));
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
    const s = this.getTagById(e);
    let o = !1;
    t && (this.tagsLengthWillUpdate = !0, t.data && (o = !0), i ? m(s, t) : Object.assign(s, t), s != null && s.tag3DContentSvelte && (t != null && t.normal) && (s.tag3DContentSvelte.currentNormal = w(t.normal)), this.clearCacheById(e), this.setVisible(s), this.updateRenderAllTags(), this.clearUnusedPanelTag(), o && s.hooks.emit("dataChanged", s.data));
  }
  /**
   * @description 销毁tag
   */
  destroyTagById(e) {
    (Array.isArray(e) ? e : [e]).forEach((i) => {
      const s = this.tags.findIndex((o) => o.id === i);
      s !== -1 && this.tags.splice(s, 1);
    }), this.tagsLengthWillUpdate = !0, this.updateRenderAllTags(), this.updateDomView();
  }
  /**
   * @description 设置 visible 和 unfolded
   */
  setVisibleAndUnfolded() {
    return g(this, arguments, function* ({ withAnimation: e } = { withAnimation: !1 }) {
      return this.store.visibleWithAnimation = e, this.setVisible(), e ? new Promise((t) => {
        setTimeout(() => {
          this.setUnfoldedByPanoIndex(), t();
        }, 10);
      }) : (this.setUnfoldedByPanoIndex(), Promise.resolve());
    });
  }
  handleShow() {
    this.state.visible = !0, this.group.visible = !0, this.updateTagContainerVisible(), this.updateTagModelVisible(), this.five.needsRender = !0;
  }
  handleHide() {
    this.pauseCurrentMedia(), this.state.visible = !1, this.group.visible = !1, this.updateTagContainerVisible(), this.updateTagModelVisible(), this.five.needsRender = !0;
  }
  handleEnable() {
    this.state.enabled = !0, this.store.eventListenerDisposer = this.addEventListener(), this.five.scene.children.includes(this.group) || this.five.scene.add(this.group), this.group.traverse((e) => {
      var t;
      (t = e == null ? void 0 : e.updateTagCss3DObjectMatrix) == null || t.call(e);
    }), this.updateRenderAllTags(), this.five.needsRender = !0;
  }
  handleDisable() {
    var e, t, i;
    this.pauseCurrentMedia(), this.state.enabled = !1, (t = (e = this.store).eventListenerDisposer) == null || t.call(e), this.five.scene.remove(this.group), (i = this.TagContainerSvelte) == null || i.$set({ tags: [] }), this.filterCSS3DTag.forEach((s) => {
      var o;
      (o = s.tag3DContentSvelte) == null || o.dispose(), s.tag3DContentSvelte = void 0;
    }), this.five.needsRender = !0;
  }
  /**
   * @description 添加 cameraUpdate, panoArrived 等事件监听
   */
  addEventListener() {
    const { five: e, hooks: t } = this;
    let i = !1;
    const s = S(() => {
      i || (i = !0, e.ready().then(() => {
        this.onFiveEveryReady(), i = !1;
      }));
    }, 150);
    return e.on("cameraUpdate", s), this.updateVisible(), this.handleFivePanoArrived(), e.on("wantsMoveToPano", this.handleFiveWantsMoveToPano), e.on("models.refined", this.onFiveEveryReady), e.on("modeChange", this.handleFiveModeChange), e.on("initAnimationEnded", this.updateVisible), e.on("modelShownFloorChange", this.handleFiveModelShownFloorChange), e.on("cameraUpdate", this.handleFiveCameraUpdate), e.on("panoArrived", this.handleFivePanoArrived), e.on("panoArrived", this.loadVideoFirstFrame), t.on("click", this.clickhandler), () => {
      e.off("wantsMoveToPano", this.handleFiveWantsMoveToPano), e.off("models.refined", this.onFiveEveryReady), e.off("modeChange", this.handleFiveModeChange), e.off("initAnimationEnded", this.updateVisible), e.off("modelShownFloorChange", this.handleFiveModelShownFloorChange), e.off("cameraUpdate", this.handleFiveCameraUpdate), e.off("cameraUpdate", s), e.off("panoArrived", this.handleFivePanoArrived), e.off("panoArrived", this.loadVideoFirstFrame), t.off("click", this.clickhandler), this.store.eventListenerDisposer = void 0;
    };
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
    if (!this.store.disposed)
      return;
    const e = this.five.getElement(), t = () => {
      this.state.enabled && (this.show(), this.updateRenderAllTags());
    }, i = () => {
      this.state.enabled && this.hide();
    }, { observe: s, unobserve: o } = U(
      S(() => {
        this.store.resizeObserverDisposer && i();
      }, 500),
      e
    ), { observe: n, unobserve: r } = U(
      N(() => t(), 400),
      e
    );
    return s(), n(), () => {
      o(), r();
    };
  }
  setUnfoldedByCamera() {
    let e = !1;
    this.filterPointTag.forEach((t) => {
      const i = this.getUnfoldedByCamera(t);
      if (t.state && i !== void 0) {
        if (i === !0 && t.screenPosition) {
          const s = this.getTagConfig(t).unfoldedConfig;
          I(s).keep !== "unfolded" && (e = !0);
        }
        t.state.unfolded = i;
      }
    }), e && this.filterPointTag.forEach((t) => {
      const i = this.getTagConfig(t).unfoldedConfig;
      typeof i == "object" && (i.autoUnfold || i.autoUnfold === !1 || I(i.autoUnfold).enable === !1 || i.keep) || t.state && (t.state.unfolded = !1);
    });
  }
  changeTagMode(e, t) {
    var i, s, o, n, r, h;
    ((i = e.config) == null ? void 0 : i.renderType) !== "Mesh" && ((n = (o = (s = e.tag3DContentSvelte) == null ? void 0 : s.css3DInstance) == null ? void 0 : o.css3DObject) == null ? void 0 : n.mode) !== t && ((r = e.config) != null && r.tag3DConfig ? e.config.tag3DConfig.mode = t : e.config ? e.config.tag3DConfig = { mode: t } : e.config = { tag3DConfig: { mode: t } }, (h = this.store.css3DRenderDisposer.get(e.id)) == null || h.forEach((l) => l == null ? void 0 : l()), e.tag3DContentSvelte = void 0);
  }
}
export {
  zi as PanoTagPluginController,
  zi as default,
  xi as pluginFlag
};
