var x = Object.defineProperty;
var v = Object.getOwnPropertySymbols;
var O = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var T = (a, r, t) => r in a ? x(a, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[r] = t, j = (a, r) => {
  for (var t in r || (r = {}))
    O.call(r, t) && T(a, t, r[t]);
  if (v)
    for (var t of v(r))
      A.call(r, t) && T(a, t, r[t]);
  return a;
};
var d = (a, r, t) => (T(a, typeof r != "symbol" ? r + "" : r, t), t);
var w = (a, r, t) => new Promise((e, o) => {
  var i = (s) => {
    try {
      l(t.next(s));
    } catch (h) {
      o(h);
    }
  }, p = (s) => {
    try {
      l(t.throw(s));
    } catch (h) {
      o(h);
    }
  }, l = (s) => s.done ? e(s.value) : Promise.resolve(s.value).then(i, p);
  l((t = t.apply(a, r)).next());
});
import { Group as y, Quaternion as G, Vector3 as C, Matrix4 as M } from "three";
import E from "../Components/Tag/index.js";
import { isMediaModelTag as P } from "../utils/tag/tagCheck.js";
import { centerPoint as I } from "../../shared-utils/three/centerPoint.js";
import { toArray as N } from "../../shared-utils/util.js";
import { TagUtil as U } from "./TagUtil.js";
import "../../vendor/svelte/internal/index.js";
import "../Components/Tag/TextTag/index.js";
import "../Components/Tag/TextTag/TextTag.js";
import "../Components/Common/Line/Straight.js";
import "../../vendor/svelte/transition/index.js";
import "../../vendor/svelte/easing/index.js";
import "../../shared-utils/uuid.js";
import "../Components/Common/Shadow.js";
import "../Components/Common/Text/FlyMText.js";
import "../Components/Common/Text/FlyText.js";
import "animejs";
import "../../shared-utils/isNil.js";
import "../utils/search.js";
import "../utils/constants.js";
import "../Components/Common/Arrow.js";
import "../Assets/Icon.js";
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
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../../vendor/three/build/three.module.js";
import "../../shared-utils/tag.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Subscribe.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/three/temp.js";
import "../../shared-utils/dom/resizeObserver.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../utils/noTypecheck.js";
import "../Components/Tag/AudioTag/index.js";
import "../Components/Tag/AudioTag/AudioTag.js";
import "../Components/Common/Audio.js";
import "../utils/audio/SharedAudio.js";
import "../../shared-utils/audio.js";
import "../Components/Common/Icon/audioIcon.js";
import "../Components/Tag/AudioTag/AudioPlaneTag.js";
import "../Components/Tag/MediaPlane.js";
import "../Components/Tag/LinkTag.js";
import "../Components/Common/Icon/Icon.js";
import "../utils/getImageInfo.js";
import "../Components/Tag/PanoramaTag.js";
import "../Components/Tag/CustomTag.js";
import "../../vendor/classnames/index.js";
import "./Tag/ModelTag.js";
import "../../shared-utils/three/GLTFLoader.js";
import "@realsee/five/gltf-loader";
import "../utils/planeNormal.js";
import "../utils/model/mediaPlane.js";
import "../../shared-utils/three/loadTexture.js";
import "../../shared-utils/three/Quadrangle.js";
import "../../shared-utils/math/pointsIsRectangle.js";
import "../../shared-utils/three/loadVideoTexture.js";
import "../../shared-utils/device.js";
import "../../shared-utils/three/getPositionsByObjectFit.js";
import "../../shared-utils/three/FragmentTransparencyMaterial.js";
import "../../shared-utils/three/getNormal.js";
import "./Tag/BaseTag.js";
import "../utils/tag/calculateTagConfig.js";
import "../../vendor/object-assign-deep/objectAssignDeep.js";
import "../../shared-utils/typescript/entries.js";
import "../utils/tag/adaptConfig.js";
import "../typings/tag/TagConfig.js";
import "@realsee/five";
import "../../shared-utils/five/mode.js";
import "../utils/tag/format.js";
import "../../shared-utils/three/blink.js";
import "../../shared-utils/vectorToCoordinate.js";
import "../../shared-utils/formatRad.js";
import "../../shared-utils/five/lookPoint.js";
import "../utils/tagPosition.js";
import "../utils/checkRange.js";
import "../../shared-utils/url/getUrl.js";
import "../../shared-utils/five/getFloorIndex.js";
import "../../shared-utils/safeObj.js";
import "../utils/Cache.js";
import "../tag.config.js";
import "../utils/normalPositionToPositions.js";
import "../../vendor/svelte/store/index.js";
import "../../CSS3DRenderPlugin/index.js";
import "../../CSS3DRenderPlugin/Controller.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "../../CSS3DRenderPlugin/utils/three/THREEJS_CSS3DRenderer.js";
import "../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/even.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "../../shared-utils/url/absoluteUrl.js";
import "../../shared-utils/five/fiveModelLoad.js";
import "../../shared-utils/five/FiveDomEvents.js";
import "../../shared-utils/five/calculateThreeMouse.js";
import "../../shared-utils/three/core/Raycaster.js";
import "../../shared-utils/isTouchDevice.js";
import "../../base/BasePlugin.js";
class Oe extends U {
  constructor(t) {
    super(t);
    d(this, "rendererMap", /* @__PURE__ */ new Map());
    d(this, "contentTypeMap", /* @__PURE__ */ new Map());
    d(this, "group", new y());
    d(this, "imagePlaneGroup", new y());
    d(this, "gltfObjectGroup", new y());
    /** 维护一个可用模型表，用于快速删除不应该在场景中的模型 */
    d(this, "enabledModelTagSet", /* @__PURE__ */ new Set());
    /** 临时状态 */
    d(this, "temporaryState", { visible: !0 });
    /** 点标签 */
    d(this, "TagContainerSvelte");
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
  registerRenderer(t, e, o) {
    var i;
    this.rendererMap.set(t, { renderer: e, usePoint: (i = o == null ? void 0 : o.usePoint) != null ? i : !1 });
  }
  bindRenderer(t, e) {
    this.contentTypeMap.set(t, e);
  }
  clearTags() {
    var t;
    this.tags.length && (this.tags.forEach((e) => {
      var o, i, p, l, s;
      (i = (o = e.mediaPlane) == null ? void 0 : o.parent) == null || i.remove(e.mediaPlane), (s = (l = (p = e.model) == null ? void 0 : p.object) == null ? void 0 : l.parent) == null || s.remove(e.model.object);
    }), this.tags = [], this.tagsLengthWillUpdate = !0, this.hooks.emit("tagsLengthChange"), (t = this.TagContainerSvelte) == null || t.$destroy(), this.TagContainerSvelte = void 0, this.disposeAllCSS3DContainer()), this.enabledModelTagSet.clear(), this.cache.clear();
  }
  /**
   * @description 渲染3D贴片
   */
  updateRender3DDomTag(t) {
    (t ? N(t) : this.filterCSS3DTag).forEach((o) => {
      var i, p, l, s, h, b;
      if (o.tag3DContentSvelte) {
        const { svelteApp: f, css3DInstance: c, initialNormal: u, currentNormal: m } = o.tag3DContentSvelte;
        if ((p = c == null ? void 0 : c.css3DObject) == null || p.setVisible((this.state.visible && ((i = o.state) == null ? void 0 : i.visible)) !== !1), f.$set({ tag: o, hooks: this.hooks, state: this.state, temporaryState: this.temporaryState }), !u.equals(m)) {
          const n = new G().setFromUnitVectors(u, m);
          c.css3DObject.setRotationFromQuaternion(n);
        }
        return;
      } else {
        if (P(o) && !((l = o.model) != null && l.object) || ((s = o.state) == null ? void 0 : s.visible) === !1 || !this.state.visible || !this.state.enabled || !this.css3DRenderPlugin)
          return;
        if (o.stickType === "3DPoint" && !o.normal)
          return console.error("updateRenderPlaneTag: 三维点标签缺少法向量！");
        const f = this.getPositions(o);
        if (!f)
          return;
        const c = o.computeNormal();
        if (!c)
          return;
        const u = o.getConfig(), m = j({
          wrapperStyle: { zIndex: `${Math.round((1e4 - ((h = o.getDistance()) != null ? h : 0)) * 100)}` }
        }, u.tag3DConfig);
        if (o.computeRenderType() === "BehindDom" || m.mode === "behind") {
          m.mode = "behind", m.container = document.createElement("div");
          const D = "black";
          m.container.style.backgroundColor = D, m.container.style.border = `3px solid ${D}`, this.css3DRenderPlugin.hooks.on("render", () => {
            var S;
            if (n.css3DObject.opacityMesh && u.clickable !== !1) {
              const R = this.addObjectClickHandler(o, n.css3DObject.opacityMesh, (k) => {
                this.hooks.emit("click", { event: k, target: "TagContent", tag: o });
              });
              (S = this.store.css3DRenderDisposer.get(o.id)) == null || S.push(R);
            }
          });
        }
        const n = this.css3DRenderPlugin.create3DDomContainer(f, m);
        if (!n)
          return;
        this.store.css3DRenderDisposer.set(o.id, [n.dispose]);
        const g = new E({
          target: n.container,
          props: {
            tag: o,
            hooks: this.hooks,
            /** 模型标签要等模型加载好之后再展示 */
            state: this.state,
            mediaStore: this.mediaStore,
            temporaryState: this.temporaryState
          }
        });
        o.tag3DContentSvelte = {
          svelteApp: g,
          domContainer: n,
          css3DInstance: n,
          initialNormal: c,
          currentNormal: c,
          dispose: () => {
            g.$destroy(), n.dispose();
          }
        }, P(o) && ((b = o.model) != null && b.object) && this.updateTagCss3DObjectMatrix(o, o.model.object);
      }
    }), this.clearUnusedPanelTag();
  }
  /** 更新标签中多媒体面片的位置
   * @param tag 标签
   * @param model 模型
   */
  updateTagCss3DObjectMatrix(t, e) {
    var n, g, D;
    const o = (g = (n = t.getConfig().tag3DConfig) == null ? void 0 : n.ratio) != null ? g : 216e-5, i = (D = t.tag3DContentSvelte) == null ? void 0 : D.css3DInstance.css3DObject;
    if (!i)
      return;
    const p = P(t) ? t.data.mediaPosition : t.position;
    if (!p || p.length !== 4 || !Array.isArray(p[0]) || !Array.isArray(p[2]))
      return;
    e.updateWorldMatrix(!1, !1);
    const l = e.matrixWorld, s = new C().fromArray(p[0]), h = new C().fromArray(p[2]), b = I(s, h).add(new C(0, 0, 5e-4)), f = new M().setPosition(b), c = new M().makeScale(o, o, o), u = new M().multiply(l).multiply(f).multiply(c);
    u.decompose(i.position, i.quaternion, i.scale);
    const m = i.opacityMesh;
    m && u.decompose(m.position, m.quaternion, m.scale);
  }
  /** 添加模型标签 */
  addMediaModelTag(t) {
    return w(this, null, function* () {
      const e = t.filter((o) => o.stickType === "Model").map((o) => o.loadModel());
      yield Promise.all(e), t.forEach((o) => o.updateVisible());
    });
  }
  disposeAllCSS3DContainer() {
    for (const [, t] of this.store.css3DRenderDisposer)
      t == null || t.forEach((e) => e == null ? void 0 : e());
    this.store.css3DRenderDisposer = /* @__PURE__ */ new Map();
  }
  /**
   * @description 检查并销毁不用的3D贴片
   */
  clearUnusedPanelTag() {
    this.filter2DPointTag.forEach((t) => {
      var e;
      (e = t.tag3DContentSvelte) == null || e.css3DInstance.dispose(), t.tag3DContentSvelte = void 0;
    });
    for (const [t, e] of this.store.css3DRenderDisposer) {
      const o = this.getTagById(t);
      (!o || o.stickType === "2DPoint") && (e == null || e.forEach((i) => i == null ? void 0 : i()), this.store.css3DRenderDisposer.delete(t));
    }
  }
}
export {
  Oe as TagRender
};
