var I = Object.defineProperty;
var j = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable;
var C = (u, l, e) => l in u ? I(u, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : u[l] = e, k = (u, l) => {
  for (var e in l || (l = {}))
    x.call(l, e) && C(u, e, l[e]);
  if (j)
    for (var e of j(l))
      O.call(l, e) && C(u, e, l[e]);
  return u;
};
var h = (u, l, e) => (C(u, typeof l != "symbol" ? l + "" : l, e), e);
var M = (u, l, e) => new Promise((o, t) => {
  var i = (s) => {
    try {
      n(e.next(s));
    } catch (a) {
      t(a);
    }
  }, r = (s) => {
    try {
      n(e.throw(s));
    } catch (a) {
      t(a);
    }
  }, n = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(i, r);
  n((e = e.apply(u, l)).next());
});
import { TagComputer as E } from "./TagComputer.js";
import { Group as R, Quaternion as G, Vector3 as D, Matrix4 as g } from "three";
import F from "../Components/TagContainer.js";
import _ from "../Components/Tag/index.js";
import { loadGLTF as L } from "../../shared-utils/three/GLTFLoader.js";
import { isMediaModelTag as y, isStickModelTag as W } from "../utils/tag/tagCheck.js";
import { VideoPlane as q, ImagePlane as w } from "../utils/model/mediaPlane.js";
import { centerPoint as U } from "../../shared-utils/three/centerPoint.js";
import { arrayPositionToVector3 as S } from "../../shared-utils/positionToVector3.js";
import { debounceByKey as $ } from "../utils/debounce.js";
import { toArray as v } from "../../shared-utils/util.js";
import "../utils/tagPosition.js";
import "../utils/checkRange.js";
import "../../shared-utils/five/mode.js";
import "hammerjs";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/even.js";
import "../../shared-utils/Subscribe.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import "../../shared-utils/isNil.js";
import "./TagUtil.js";
import "../typings/tag/TagConfig.js";
import "../../vendor/object-assign-deep/objectAssignDeep.js";
import "../tag.config.js";
import "../utils/planeNormal.js";
import "../utils/normalPositionToPositions.js";
import "./TagCache.js";
import "../../base/BasePlugin.js";
import "../../shared-utils/url/absoluteUrl.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../vendor/svelte/store/index.js";
import "../../vendor/svelte/internal/index.js";
import "../../shared-utils/device.js";
import "../../CSS3DRenderPlugin/index.js";
import "../../CSS3DRenderPlugin/Controller.js";
import "../../shared-utils/five/fiveModelLoad.js";
import "@realsee/five";
import "../../shared-utils/five/FiveDomEvents.js";
import "../../shared-utils/five/calculateThreeMouse.js";
import "../utils/tag/adaptConfig.js";
import "../../shared-utils/typescript/entries.js";
import "../../shared-utils/url/getUrl.js";
import "../../shared-utils/five/getFloorIndex.js";
import "../../shared-utils/safeObj.js";
import "../../shared-utils/three/loadTexture.js";
import "../../shared-utils/three/Quadrangle.js";
import "../../shared-utils/math/pointIsRectangle.js";
import "../../shared-utils/three/loadVideoTexture.js";
import "../Assets/Icon.js";
import "../../shared-utils/three/getPositionsByObjectFit.js";
import "../../shared-utils/three/FragmentTransparencyMaterial.js";
import "../../shared-utils/three/getNormal.js";
import "../Components/TagItem.js";
import "../utils/noTypecheck.js";
import "../Components/Common/TagPoint.js";
import "../Components/Common/Shadow.js";
import "../../vendor/svelte/transition/index.js";
import "../../vendor/svelte/easing/index.js";
import "../Components/Common/Icon/Icon.js";
import "../utils/getImageInfo.js";
import "../utils/px2rem.js";
import "../../vendor/classnames/index.js";
import "../Components/Tag/TextTag/index.js";
import "../Components/Tag/TextTag/TextTag.js";
import "../Components/Common/Line/Straight.js";
import "../../shared-utils/uuid.js";
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
import "../Components/Tag/AudioTag/index.js";
import "../Components/Tag/AudioTag/AudioTag.js";
import "../Components/Common/Audio.js";
import "../utils/audio/SharedAudio.js";
import "../../shared-utils/audio.js";
import "../Components/Common/Icon/audioIcon.js";
import "../Components/Tag/AudioTag/AudioPlaneTag.js";
import "../Components/Tag/MediaPlane.js";
import "../Components/Tag/LinkTag.js";
import "../Components/Tag/PanoramaTag.js";
import "../Components/Tag/CustomTag.js";
import "@realsee/five/gltf-loader";
const B = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map();
class Si extends E {
  constructor(e) {
    super(e);
    h(this, "rendererMap", /* @__PURE__ */ new Map());
    h(this, "contentTypeMap", /* @__PURE__ */ new Map());
    h(this, "group", new R());
    h(this, "imagePlaneGroup", new R());
    h(this, "gltfObjectGroup", new R());
    /** 维护一个可用模型表，用于快速删除不应该在场景中的模型 */
    h(this, "enabledModelTagSet", /* @__PURE__ */ new Set());
    /** 临时状态 */
    h(this, "temporaryState", { visible: !0 });
    /** 点标签 */
    h(this, "TagContainerSvelte");
    /**
     * @description 渲染3D贴片
     */
    h(this, "updateRender3DDomTag", (e) => {
      (e ? v(e) : this.filterCSS3DTag).forEach((t) => {
        var i, r, n, s, a;
        if (t.tag3DContentSvelte) {
          const { svelteApp: c, css3DInstance: m, initialNormal: f, currentNormal: d } = t.tag3DContentSvelte;
          if ((r = m == null ? void 0 : m.css3DObject) == null || r.setVisible((this.state.visible && ((i = t.state) == null ? void 0 : i.visible)) !== !1), c.$set({ tag: t, hooks: this.hooks, state: this.state, temporaryState: this.temporaryState }), !f.equals(d)) {
            const p = new G().setFromUnitVectors(f, d);
            m.css3DObject.setRotationFromQuaternion(p);
          }
          return;
        } else {
          if (y(t) && !((n = t.model) != null && n.object) || ((s = t.state) == null ? void 0 : s.visible) === !1 || !this.state.visible || !this.state.enabled || !this.css3DRenderPlugin)
            return;
          if (t.stickType === "3DPoint" && !t.normal)
            return console.error("updateRenderPlaneTag: 三维点标签缺少法向量！");
          const c = this.getPositions(t);
          if (!c)
            return;
          const m = this.getTagNormal(t);
          if (!m)
            return;
          const f = this.getTagConfig(t), d = k({ wrapperStyle: { zIndex: this.calculateTagZIndex(t).toString() } }, f.tag3DConfig);
          if (this.getRenderType(t) === "BehindDom" || d.mode === "behind") {
            d.mode = "behind", d.container = document.createElement("div");
            const P = "black";
            d.container.style.backgroundColor = P, d.container.style.border = `3px solid ${P}`, this.css3DRenderPlugin.hooks.on("render", () => {
              var b;
              if (p.css3DObject.opacityMesh && f.clickable !== !1) {
                const A = this.addObjectClickHandler(t, p.css3DObject.opacityMesh, (V) => {
                  this.hooks.emit("click", { event: V, target: "TagContent", tag: t });
                });
                (b = this.store.css3DRenderDisposer.get(t.id)) == null || b.push(A);
              }
            });
          }
          const p = this.css3DRenderPlugin.create3DDomContainer(c, d);
          if (!p)
            return;
          this.store.css3DRenderDisposer.set(t.id, [p.dispose]);
          const T = new _({
            target: p.container,
            props: {
              tag: t,
              hooks: this.hooks,
              /** 模型标签要等模型加载好之后再展示 */
              state: this.state,
              mediaStore: this.mediaStore,
              temporaryState: this.temporaryState
            }
          });
          t.tag3DContentSvelte = {
            svelteApp: T,
            domContainer: p,
            css3DInstance: p,
            initialNormal: m,
            currentNormal: m,
            dispose: () => {
              T.$destroy(), p.dispose();
            }
          }, y(t) && ((a = t.model) != null && a.object) && this.updateTagCss3DObjectMatrix(t, t.model.object);
        }
      }), this.clearUnusedPanelTag();
    });
    /**
     * @description 渲染单个点的标签
     */
    h(this, "updateRenderPointTag", (e) => {
      const o = e ? v(e) : this.filterPointTag;
      this.setTagZIndex(o), this.setPointTagPosition(), $("updateDomView", this.updateDomView)();
    });
    /** 加载外部模型 */
    h(this, "loadModel", (e) => M(this, null, function* () {
      var n;
      const o = e.data.modelUrl;
      if (!o)
        return;
      e.loading = !0;
      const t = L(o).then((s) => {
        var m;
        const a = Object.assign(s.scene, {
          customID: e.id,
          isTagModel: !0,
          removeEventListener: this.getTagConfig(e).clickable === !1 ? () => {
          } : this.addObjectClickHandler(e, s.scene, (f) => {
            this.hooks.emit("click", { target: "TagModel", tag: e, event: f });
          })
        });
        return a.visible = this.getCurrentVisibleState(e), new g().fromArray(e.matrix).decompose(a.position, a.quaternion, a.scale), a.updateWorldMatrix(!0, !0), a.visible = this.getVisible(e), (m = this.getTagConfig(e).modelConfig) != null && m.autoLookAtEnabled && a.lookAt(this.five.camera.position.clone().setY(a.position.y)), a;
      });
      e.model = { promise: t };
      const i = yield t;
      if (e.loading = !1, ((n = e.model) == null ? void 0 : n.promise) !== t || !this.tags.includes(e))
        return;
      e.model.object = i;
      const r = this.gltfObjectGroup.children.find((s) => s.customID === e.id);
      if (r && (this.gltfObjectGroup.remove(r), r.removeEventListener()), this.updateRender3DDomTag(), y(e)) {
        if (this.getRenderType(e) === "Mesh" && !e.mediaPlane) {
          const s = e.data.mediaPosition.map(S);
          e.mediaPlane = new w(e.data.mediaData[0].url, e.data.mediaPosition.map(S), {
            objectFit: e.data.objectFit
          });
          const a = new D().addVectors(s[0], s[2]).divideScalar(2);
          e.mediaPlane.position.copy(a), i.add(e.mediaPlane);
        }
        this.getRenderType(e) !== "Mesh" && (i.updateTagCss3DObjectMatrix = () => this.updateTagCss3DObjectMatrix(e, i), i.updateTagCss3DObjectMatrix());
      }
      return this.gltfObjectGroup.add(i), i;
    }));
    h(this, "updateDomView", (e = {}) => {
      var t;
      const o = this.filterPointTag.filter((i) => i.state.visible);
      if (this.TagContainerSvelte)
        this.TagContainerSvelte.$set({ tags: o, state: this.state, temporaryState: this.temporaryState });
      else {
        if (!o.length)
          return;
        const i = this.container;
        if (!i)
          return console.error("updateRenderPlaneTag: tag2DContainer not found");
        this.TagContainerSvelte = new F({
          target: i,
          props: {
            hooks: this.hooks,
            tags: o,
            state: this.state,
            temporaryState: this.temporaryState,
            mediaStore: this.mediaStore,
            rendererMap: this.rendererMap,
            contentTypeMap: this.contentTypeMap,
            withAnimation: (t = e == null ? void 0 : e.withAnimation) != null ? t : this.store.visibleWithAnimation,
            zIndex: this.params.containerZIndex
          }
        });
      }
    });
    this.group.name = "PanoTagPluginModelGroup", this.gltfObjectGroup.name = "PanoTagPluginGLTFObjectGroup", this.imagePlaneGroup.name = "ImagePlaneGroup", this.group.add(this.gltfObjectGroup), this.group.add(this.imagePlaneGroup);
  }
  /**
   * @description 设置 contentType 的渲染器
   * @param {string} contentType
   * 如果是 `TagContentType` 中的类型，将会覆盖掉插件内部默认的渲染器,
   * 如果是其他任意 str
   * ing 如：'Foo'，则可以将类似 `{id: 1, contentType: 'Foo', position: [0,0,0]}` 的 tag 交给插件渲染
   * @param config.usePoint 是否需要标签点, 默认为 false
   * @note 优先级低于 tag.element
   */
  registerRenderer(e, o, t) {
    var i;
    this.rendererMap.set(e, { renderer: o, usePoint: (i = t == null ? void 0 : t.usePoint) != null ? i : !1 });
  }
  bindRenderer(e, o) {
    this.contentTypeMap.set(e, o);
  }
  clearTags() {
    var e;
    this.tags.length && (this.tags.forEach((o) => {
      var t, i;
      (i = (t = o.mediaPlane) == null ? void 0 : t.parent) == null || i.remove(o.mediaPlane);
    }), this.tags = [], this.tagsLengthWillUpdate = !0, (e = this.TagContainerSvelte) == null || e.$destroy(), this.TagContainerSvelte = void 0, this.disposeAllCSS3DContainer(), this.updateRenderAllTags()), this.enabledModelTagSet.clear(), this.clearCache(), this.tagsLengthWillUpdate = !0;
  }
  /**
   * @description 更新所有标签
   */
  updateRenderAllTags() {
    this.enabledModelTagSet.clear(), this.tags.forEach((e) => e.stickType === "Model" && this.enabledModelTagSet.add(e.id)), this.updateRenderPointTag(), this.updateRender3DDomTag(), this.updateRenderModelTag(), this.updateRenderImagePlane(), this.updateRenderVideoPlane();
  }
  updateAllTagsNextFrame() {
    requestAnimationFrame(() => this.updateRenderAllTags());
  }
  updateTag(e) {
    e.stickType === "2DPoint" ? this.updateRenderPointTag(e) : e.stickType === "3DPoint" ? (this.updateRenderPointTag(e), this.updateRender3DDomTag(e)) : e.stickType === "Model" ? (this.enabledModelTagSet.clear(), this.tags.forEach((o) => o.stickType === "Model" && this.enabledModelTagSet.add(o.id)), this.updateRenderModelTag()) : e.stickType === "Plane" && (this.getRenderType(e) === "Mesh" ? (this.updateRenderImagePlane(e), this.updateRenderVideoPlane(e)) : this.updateRender3DDomTag(e));
  }
  updateRenderVideoPlane(e) {
    (e ? v(e) : this.filterImagePlane.filter((t) => {
      var i, r;
      return ((r = (i = t.data.mediaData) == null ? void 0 : i[0]) == null ? void 0 : r.type) === "Video";
    })).forEach((t) => {
      var m;
      const i = t.data.mediaData[0];
      if (!i)
        return;
      const { url: r } = i;
      if (!r)
        return;
      const n = this.getCurrentVisibleState(t), s = (() => !!(t.mediaPlane && !n))(), a = (() => !!(!t.mediaPlane && n))(), c = (() => !!(t.mediaPlane && t.mediaPlane.src !== r))();
      if ((s || c) && t.mediaPlane && (this.imagePlaneGroup.remove(t.mediaPlane), t.mediaPlane.dispose(), t.mediaPlane.removeFromParent(), t.mediaPlane = void 0), a || c) {
        const f = t.position.map(S), d = new q(r, f, {
          videoCoverSrc: i.videoCoverUrl,
          playButton: t.data.playIcon,
          paused: !((m = t.data.autoplayConfig) != null && m.autoplayVideo),
          objectFit: t.data.objectFit,
          videoTextureMap: B,
          ImageTextureMap: N,
          domEvents: this.domEvents
        });
        d.onVideoReady = (T) => {
          T.addEventListener("play", () => this.mediaStore.set({ currentMediaElement: d.videoInstance }));
        };
        const p = (T) => (this.five.on("renderFrame", T), () => this.five.off("renderFrame", T));
        d.initialRenderHooks(p), t.mediaPlane = d, this.imagePlaneGroup.add(t.mediaPlane);
      }
    });
  }
  /**
   * @description 渲染图片贴片
   */
  updateRenderImagePlane(e) {
    (e ? v(e) : this.filterImagePlane.filter((t) => {
      var i, r;
      return ((r = (i = t.data.mediaData) == null ? void 0 : i[0]) == null ? void 0 : r.type) === "Image";
    })).forEach((t) => {
      const { url: i } = t.data.mediaData[0];
      if (!i)
        return;
      const r = t.position.map(S), n = this.getCurrentVisibleState(t), s = (() => !!(t.mediaPlane && !n))(), a = (() => !!(!t.mediaPlane && n))(), c = (() => !!(t.mediaPlane && t.mediaPlane.src !== i))();
      (s || c) && t.mediaPlane && (this.imagePlaneGroup.remove(t.mediaPlane), t.mediaPlane.dispose(), t.mediaPlane.removeFromParent(), t.mediaPlane = void 0), (a || c) && (t.mediaPlane = new w(i, r, { objectFit: t.data.objectFit }), this.getTagConfig(t).clickable !== !1 && this.domEvents.addAutoBindEventListener(
        t.mediaPlane,
        "click",
        (m) => {
          this.hooks.emit("click", { tag: t, target: "TagContent", event: m.origDomEvent });
        },
        { noEmitWhenHide: !0 }
      ), this.imagePlaneGroup.add(t.mediaPlane));
    }), this.five.needsRender = !0;
  }
  /** 更新所有模型标签
   *
   * 1. 移除不应该在场景中的模型
   * 2. 更新模型的可见性
   *
   * FIXME: 有性能问题，但是之前的逻辑都是这么写，暂时先这样吧
   */
  updateRenderModelTag() {
    const e = (i) => !this.enabledModelTagSet.has(i.customID), o = this.gltfObjectGroup.children.filter(e);
    o.forEach((i) => i.removeEventListener()), this.gltfObjectGroup.remove(...o), this.tags.filter((i) => i.stickType === "Model").forEach((i) => {
      var r;
      (r = i.model) == null || r.promise.then((n) => {
        n.visible = this.getCurrentVisibleState(i);
      });
    }), this.five.needsRender = !0;
  }
  updateTagModelVisible() {
    this.tags.forEach((e) => {
      var t;
      const o = this.getCurrentVisibleState(e);
      o === !0 && this.getRenderType(e) && !e.tag3DContentSvelte && this.updateRender3DDomTag(), e.mediaPlane ? e.mediaPlane.visible = o : e.tag3DContentSvelte && (e.tag3DContentSvelte.css3DInstance.setVisible(o), this.updateDomView()), (t = e.model) != null && t.object && (e.model.object.visible = o);
    });
  }
  /** 更新标签中多媒体面片的位置
   * @param tag 标签
   * @param model 模型
   */
  updateTagCss3DObjectMatrix(e, o) {
    var T, P, b;
    const t = (P = (T = this.getTagConfig(e).tag3DConfig) == null ? void 0 : T.ratio) != null ? P : 216e-5, i = (b = e.tag3DContentSvelte) == null ? void 0 : b.css3DInstance.css3DObject;
    if (!i)
      return;
    const r = y(e) ? e.data.mediaPosition : e.position;
    if (!r || r.length !== 4 || !Array.isArray(r[0]) || !Array.isArray(r[2]))
      return;
    o.updateWorldMatrix(!1, !1);
    const n = o.matrixWorld, s = new D().fromArray(r[0]), a = new D().fromArray(r[2]), c = U(s, a).add(new D(0, 0, 5e-4)), m = new g().setPosition(c), f = new g().makeScale(t, t, t), d = new g().multiply(n).multiply(m).multiply(f);
    d.decompose(i.position, i.quaternion, i.scale);
    const p = i.opacityMesh;
    p && d.decompose(p.position, p.quaternion, p.scale);
  }
  /** 添加模型标签 */
  addMediaModelTag(e) {
    return M(this, null, function* () {
      const o = e.filter(W).map((t) => this.loadModel(t));
      yield Promise.all(o), this.setVisible(), this.updateRenderAllTags();
    });
  }
  /**
   * @description 一个点的标签
   */
  setPointTagPosition(e) {
    const o = e ? v(e) : this.filterPointTag;
    o.length !== 0 && o.forEach((t) => {
      var s;
      const i = this.getCurrentVisibleState(t), r = (s = t.__Object__) != null ? s : {
        timeoutId: void 0,
        inAnimation: !1
      };
      if (t.__Object__ = r, !i && t.screenPosition ? (r.inAnimation = !0, r.timeoutId = setTimeout(() => {
        requestAnimationFrame(() => {
          this.getCurrentVisibleState(t) || (r.inAnimation = !1, t.screenPosition = null, this.updateDomView());
        });
      }, 1e3)) : r.timeoutId && (clearTimeout(r.timeoutId), r.inAnimation = !1, r.timeoutId = void 0), !i && !r.inAnimation)
        return;
      const n = this.getTagProject(t);
      n ? t.screenPosition = { leftPercent: (n.x + 1) / 2 * 100, topPercent: (-n.y + 1) / 2 * 100 } : t.screenPosition = null;
    });
  }
  updateTagContainerVisible() {
    var e;
    (e = this.TagContainerSvelte) == null || e.$set({
      state: this.state,
      temporaryState: this.temporaryState,
      withAnimation: this.store.visibleWithAnimation
    }), this.filterCSS3DTag.forEach((o) => {
      var t, i, r, n, s;
      (n = (i = (t = o.tag3DContentSvelte) == null ? void 0 : t.css3DInstance) == null ? void 0 : i.css3DObject) == null || n.setVisible((this.state.visible && ((r = o.state) == null ? void 0 : r.visible)) !== !1), (s = o.tag3DContentSvelte) == null || s.svelteApp.$set({
        state: this.state,
        temporaryState: this.temporaryState,
        withAnimation: this.store.visibleWithAnimation
      });
    });
  }
  disposeAllCSS3DContainer() {
    for (const [, e] of this.store.css3DRenderDisposer)
      e == null || e.forEach((o) => o == null ? void 0 : o());
    this.store.css3DRenderDisposer = /* @__PURE__ */ new Map();
  }
  /**
   * @description 检查并销毁不用的3D贴片
   */
  clearUnusedPanelTag() {
    this.filter2DPointTag.forEach((e) => {
      var o;
      (o = e.tag3DContentSvelte) == null || o.css3DInstance.dispose(), e.tag3DContentSvelte = void 0;
    });
    for (const [e, o] of this.store.css3DRenderDisposer) {
      const t = this.getTagById(e);
      (!t || t.stickType === "2DPoint") && (o == null || o.forEach((i) => i == null ? void 0 : i()), this.store.css3DRenderDisposer.delete(e));
    }
  }
}
export {
  Si as TagRender
};
