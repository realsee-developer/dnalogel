var $ = Object.defineProperty, _ = Object.defineProperties;
var k = Object.getOwnPropertyDescriptors;
var R = Object.getOwnPropertySymbols;
var P = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var C = (o, e, t) => e in o ? $(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, g = (o, e) => {
  for (var t in e || (e = {}))
    P.call(e, t) && C(o, t, e[t]);
  if (R)
    for (var t of R(e))
      L.call(e, t) && C(o, t, e[t]);
  return o;
}, v = (o, e) => _(o, k(e));
var n = (o, e, t) => (C(o, typeof e != "symbol" ? e + "" : e, t), t);
var l = (o, e, t) => new Promise((r, s) => {
  var d = (c) => {
    try {
      m(t.next(c));
    } catch (a) {
      s(a);
    }
  }, u = (c) => {
    try {
      m(t.throw(c));
    } catch (a) {
      s(a);
    }
  }, m = (c) => c.done ? r(c.value) : Promise.resolve(c.value).then(d, u);
  m((t = t.apply(o, e)).next());
});
import { anyPositionToVector3 as q } from "../../../shared-utils/positionToVector3.js";
import { ICSS3DRenderer as B } from "../../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import { Subscribe as A } from "../../../shared-utils/Subscribe.js";
import { CSS3DObjectPlus as W } from "./CSS3DObject.js";
import { CSS3DFrontScene as H, CSS3DBehindScene as T } from "./CSS3DScene.js";
import { CSS3DFrontGroup as U, CSS3DBehindGroup as z } from "./CSS3DGroup.js";
import { CSS3DObject as j } from "../../../shared-utils/three/CSS3DRenderer/index.js";
import "three";
import "../../../shared-utils/createResizeObserver.js";
import "../../../shared-utils/even.js";
import "../../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../shared-utils/tag.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/three/core/Raycaster.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../shared-utils/five/fiveEveryReadyListener.js";
import "../../../shared-utils/throttle.js";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../../shared-utils/three/Magnifier.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../../shared-utils/three/Assets/index.js";
import "../../../shared-utils/three/PointSelector/utils/html.js";
import "../../../shared-utils/CSS3DRender/index.js";
import "../../../shared-utils/five/fiveModelLoad.js";
import "../generateBehindFiveElement.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../../Sculpt/Meshes/Line.js";
import "../../../Sculpt/typings/style.js";
import "../../../shared-utils/three/IObject3D.js";
import "../../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../../shared-utils/util.js";
import "../../../shared-utils/three/core/LineGeometry.js";
import "@realsee/five/line";
import "../../../shared-utils/three/core/LineMaterial.js";
import "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/core/Line2.js";
import "../../../shared-utils/three/core/LineMaterial2.js";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../Sculpt/utils/unit.js";
import "../../../Sculpt/utils/renderDom.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "./CSS3DRender.js";
import "../../../shared-utils/five/FivePuppet.js";
import "@realsee/five";
import "./CSS3DSprite.js";
import "../../../shared-utils/isTouchDevice.js";
import "../../../shared-utils/five/getPosition.js";
import "../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../shared-utils/three/PointSelector/utils/contents.js";
import "../../../Sculpt/utils/three/rayOnLine.js";
import "../getAllCSS3DObject.js";
const J = 3, G = "CSS3DRenderer", f = `${G}@${J}`, S = () => {
  console.error(`${f} is disposed`);
}, i = {
  css3DObjects: [],
  frontModeStore: {
    css3DRenderer: new B()
  },
  behindModeStore: {
    css3DRenderer: new B()
  }
};
function w(o) {
  return i.css3DObjects.find((e) => e.id === o);
}
function K(o) {
  i.frontModeStore.css3DRenderer.setWrapper(o);
}
function Q(o) {
  i.behindModeStore.css3DRenderer.setWrapper(o);
}
class y {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(e) {
    n(this, "hooks", new A());
    n(this, "state", {
      enabled: !0,
      visible: !0,
      disposed: !1
    });
    n(this, "_scene");
    n(this, "store", {
      frontModeGroup: new U()
    });
    /**
     * @description 根据传入的四个点位创建一个 3d dom容器，可以通过ReactDom.render()的方式将react组件放到容器中
     * @param { Vector3Position[] } points 矩形四个点坐标
     * @param params 均为可选值
     * @config_document `params` 均为可选值
     *  | key                   | type                       | defaultValue        | comment |
     *  | -                     | -                          | -                   | -       |
     *  | `ratio`               | *`number`*                 | `0.00216`           | 1px对应多少米，默认为 0.00216，即1px对应2.16mm |
     *  | `devicePixelRatio`    | *`number`*                 | `1`                 | 设备的物理像素分辨率与CSS像素分辨率的比值 |
     *  | `container`           | *`HTMLElement`*            | `undefined`         | 自定义 return 中的 `container`
     *  | `pointerEvents`       | *`'none'\|'auto'`*         | `'none'`            | container 的 css属性：`pointer-events` 的值 |
     *  | `autoRender`          | *`boolean`*                | `true`              | 是否自动渲染，通常为true |
     *  | `mode`                | *`'front'\|'behind'`*      | `front`             | 两种模式:|
     *  |                                                                          | | | `front`  模式：DOM 处于 five Canvas 上方，所以无法模拟遮挡效果，需要手动检测是否可见去设置显隐 |
     *  |                                                                          | | | `behind` 模式：DOM 处于 five Canvas 下方，可以模拟真实的遮挡效果，但是 DOM 必须是非透明的 |
     *  | `scene`               | *`THREE.Scene`*            | `undefined`         | 如果 mode 为 `behind`，需要传入 |
     *
     * @return
     * ```typescript
     *    {
     *      id: string,                             // id
     *      container: HTMLDIVElement               // dom容器
     *      dispose: () => void                     // 销毁
     *      css3DObject: CSS3DObject                // THREE.CSS3DObject 实例
     *      render?: () => void                     // 渲染函数，当 config.autoRender = true || undefined 时为 undefined
     *      setVisible: (visible: boolean) => void  // 设置显隐, 同 setVisibleById(id, visible)
     *      show: () => void                        // 同 setVisible(true)
     *      hide: () => void                        // 同 setVisible(false)
     *      setEnabled: (enabled: boolean) => void   // 添加/移除 container, 同 setEnabledById(id, enabled)
     *      enable: () => void                      // 同 setEnabled(true)
     *      disable: () => void                     // 同 setEnabled(false)
     *    } | void
     * ```
     */
    n(this, "create3DElement", (e, t, r) => {
      if (this.state.disposed)
        return S();
      const s = (() => {
        const h = {
          ratio: 216e-5,
          devicePixelRatio: 1,
          mode: "front",
          autoRender: !0,
          container: document.createElement("div"),
          pointerEvents: "none",
          wrapperStyle: {}
        };
        return Object.assign(h, r);
      })(), d = t.map(q);
      if ((d == null ? void 0 : d.length) < 4)
        return console.error(`${f}: requires 4 point but params may have fewer`);
      const { ratio: u, devicePixelRatio: m, mode: c, autoRender: a, container: O, pointerEvents: F, wrapperStyle: I } = s;
      let b = !1;
      const p = this.createObject(d, { ratio: u, dpr: m, container: O, mode: c, pointerEvents: F, wrapperStyle: I });
      i.css3DObjects.push(p), s.scene && this.setScene(s.scene);
      const N = () => {
        if (b)
          return;
        const h = p.mode === "front" ? this.getFrontCSS3DObjectGroup() : this.getBehindCSS3DObjectGroup();
        h && h.add(p);
      }, E = () => {
        b || (N(), this.render(e), this.hooks.emit("render"));
      }, D = (h) => this.setVisibleById(p.id, h), M = (h) => this.setEnabledById(p.id, h), x = () => (b = !0, p.removeFromParent(), !0), V = c === "front" ? i.frontModeStore.css3DRenderer : i.behindModeStore.css3DRenderer;
      return a && E(), {
        id: p.uuid,
        container: O,
        css3DObject: p,
        render: a ? void 0 : E,
        show: () => D(!0),
        hide: () => D(!1),
        setVisible: D,
        enable: () => M(!0),
        disable: () => M(!1),
        setEnabled: M,
        dispose: x,
        appendToElement: (h) => V.setWrapper(h)
      };
    });
    n(this, "setVisibleById", (e, t) => {
      var r;
      (r = w(e)) == null || r.setVisible(t);
    });
    n(this, "setEnabledById", (e, t) => {
      const r = w(e);
      if (!r)
        return;
      const s = r.mode === "front" ? this.getFrontCSS3DObjectGroup({ addGroupIfNotExists: !1 }) : this.getBehindCSS3DObjectGroup({ addGroupIfNotExists: !1 });
      s && (t ? s.add(r) : s.remove(r));
    });
    n(this, "createObject", (e, t) => {
      const r = new W(v(g({ cornerPoints: e }, t), { style: t.wrapperStyle }));
      return r.element.classList.add(`${G}__container`), r.element.id = `${G}__container--${r.uuid}`, r;
    });
    e && this.setScene(e);
  }
  get scene() {
    return this._scene || console.error("scene doesn't exist!, please call setScene(scene) first"), this._scene;
  }
  static get frontModeCSS3DRenderer() {
    return i.frontModeStore.css3DRenderer;
  }
  static get behindModeCSS3DRenderer() {
    return i.behindModeStore.css3DRenderer;
  }
  get frontModeCSS3DRenderer() {
    return i.frontModeStore.css3DRenderer;
  }
  get behindModeCSS3DRenderer() {
    return i.behindModeStore.css3DRenderer;
  }
  setScene(e) {
    this._scene = e;
  }
  getCurrentState() {
    return this.state;
  }
  setState(e, t = { userAction: !0 }) {
    if (this.state.disposed)
      return S();
    const r = g({}, this.state);
    this.state = Object.assign(this.state, e), r.visible !== this.state.visible && (e.visible ? this.handleShow() : this.handleHide()), r.enabled !== this.state.enabled && (e.enabled ? this.handleEnable() : this.handleDisable()), r.disposed !== this.state.disposed && this.handleDispose(), this.hooks.emit("stateChange", { state: this.state, prevState: r, userAction: t.userAction });
  }
  dispose() {
    this.setState({ disposed: !0 }), this.hooks.emit("dispose");
  }
  show() {
    return l(this, arguments, function* ({ userAction: e } = { userAction: !0 }) {
      if (this.state.disposed)
        return S();
      this.setState({ visible: !0 }, { userAction: e }), this.hooks.emit("show", { userAction: e });
    });
  }
  hide() {
    return l(this, arguments, function* ({ userAction: e } = { userAction: !0 }) {
      if (this.state.disposed)
        return S();
      this.setState({ visible: !1 }, { userAction: e }), this.hooks.emit("hide", { userAction: e });
    });
  }
  enable({ userAction: e } = { userAction: !0 }) {
    if (this.state.disposed)
      return S();
    this.setState({ enabled: !0 }, { userAction: e }), this.hooks.emit("enable", { userAction: e });
  }
  disable({ userAction: e } = { userAction: !0 }) {
    if (this.state.disposed)
      return S();
    this.setState({ enabled: !1 }, { userAction: e }), this.hooks.emit("disable", { userAction: e });
  }
  getFrontCSS3DScene({ createSceneIfNotExists: e = !1 } = {}) {
    var r;
    const t = (r = i.frontModeStore) == null ? void 0 : r.css3DScene;
    if (t)
      return t;
    if (e) {
      const s = new H();
      i.frontModeStore.css3DScene = s;
    }
    return i.frontModeStore.css3DScene;
  }
  getBehindCSS3DScene({ createSceneIfNotExists: e = !1 } = {}) {
    var r, s;
    const t = (r = i.behindModeStore) == null ? void 0 : r.css3DScene;
    if (t)
      return t;
    if (e) {
      const d = (s = i.behindModeStore.scene) != null ? s : this.scene;
      if (!d) {
        console.error(`${f}: scene is required when mode is behind`);
        return;
      }
      const u = new T(d);
      i.behindModeStore.css3DScene = u, i.behindModeStore.scene = d;
    }
    return i.behindModeStore.css3DScene;
  }
  getFrontCSS3DObjectGroup({ addGroupIfNotExists: e = !0 } = {}) {
    const t = this.getFrontCSS3DScene({ createSceneIfNotExists: e });
    return e && t && (t.getObjectById(this.store.frontModeGroup.id) || t.add(this.store.frontModeGroup)), this.store.frontModeGroup;
  }
  getBehindCSS3DObjectGroup({ addGroupIfNotExists: e = !0 } = {}) {
    var r;
    const t = this.getBehindCSS3DScene({ createSceneIfNotExists: e });
    if (e && t && this.scene) {
      const s = (r = this.store.behindModeGroup) != null ? r : new z(this.scene);
      this.store.behindModeGroup = s, t.getObjectById(s.id) || t.add(s);
    }
    return this.store.behindModeGroup;
  }
  render(e) {
    var t, r;
    if (this.getFrontCSS3DObjectGroup({ addGroupIfNotExists: !1 }).CSS3DObjectLength > 0) {
      const s = this.getFrontCSS3DScene({ createSceneIfNotExists: !0 });
      if (!s)
        return console.error(`${f}: css3DScene is required when mode is front`);
      i.frontModeStore.css3DRenderer.renderEveryFrame(s, e);
    }
    if (((r = (t = this.getBehindCSS3DObjectGroup({ addGroupIfNotExists: !1 })) == null ? void 0 : t.CSS3DObjectLength) != null ? r : 0) > 0) {
      const s = this.getBehindCSS3DScene({ createSceneIfNotExists: !0 });
      if (!s)
        return console.error(`${f}: css3DScene is required when mode is behind`);
      i.behindModeStore.css3DRenderer.renderEveryFrame(s, e);
    }
  }
  handleShow() {
    return l(this, null, function* () {
      var e;
      this.store.frontModeGroup.setVisible(!0), (e = this.store.behindModeGroup) == null || e.setVisible(!0);
    });
  }
  handleHide() {
    return l(this, null, function* () {
      var e;
      this.store.frontModeGroup.setVisible(!1), (e = this.store.behindModeGroup) == null || e.setVisible(!1);
    });
  }
  handleEnable() {
    var e, t;
    (e = this.getFrontCSS3DScene()) == null || e.add(this.store.frontModeGroup), this.store.behindModeGroup && ((t = this.getBehindCSS3DScene()) == null || t.add(this.store.behindModeGroup));
  }
  handleDisable() {
    var e, t, r;
    this.store.frontModeGroup.children.forEach((s) => {
      s instanceof j && s.element instanceof Element && s.element.parentNode !== null && s.element.remove();
    }), (e = this.store.behindModeGroup) == null || e.children.forEach((s) => {
      s instanceof j && s.element instanceof Element && s.element.parentNode !== null && s.element.remove();
    }), (t = this.getFrontCSS3DScene()) == null || t.remove(this.store.frontModeGroup), this.store.behindModeGroup && ((r = this.getBehindCSS3DScene()) == null || r.remove(this.store.behindModeGroup));
  }
  handleDispose() {
    this.handleDisable();
  }
}
n(y, "setFrontModeContainer", K), n(y, "setBehindModeContainer", Q);
export {
  y as CSS3DRender,
  f as PLUGIN,
  i as globalStore
};
