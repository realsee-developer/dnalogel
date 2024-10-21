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
var i = (o, e, t) => (C(o, typeof e != "symbol" ? e + "" : e, t), t);
var l = (o, e, t) => new Promise((s, r) => {
  var d = (c) => {
    try {
      f(t.next(c));
    } catch (S) {
      r(S);
    }
  }, u = (c) => {
    try {
      f(t.throw(c));
    } catch (S) {
      r(S);
    }
  }, f = (c) => c.done ? s(c.value) : Promise.resolve(c.value).then(d, u);
  f((t = t.apply(o, e)).next());
});
import { anyPositionToVector3 as q } from "../../../shared-utils/positionToVector3.js";
import B from "./CSS3DRenderer.js";
import { Subscribe as A } from "../../../shared-utils/Subscribe.js";
import { CSS3DObjectPlus as W } from "./CSS3DObject.js";
import { MinRatio as xe } from "./CSS3DObject.js";
import { CSS3DFrontScene as H, CSS3DBehindScene as T } from "./CSS3DScene.js";
import { CSS3DFrontGroup as U, CSS3DBehindGroup as z } from "./CSS3DGroup.js";
import { CSS3DObject as j } from "three/examples/jsm/renderers/CSS3DRenderer";
import "three";
import "./THREEJS_CSS3DRenderer.js";
import "../createResizeObserver.js";
import "../even.js";
import "./OpacityMesh.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "hammerjs";
import "@realsee/five/line";
import "../../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../../../vendor/three/build/three.module.js";
import "../../../shared-utils/tag.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../shared-utils/three/core/Sphere.js";
import "animejs";
import "../../../shared-utils/isNil.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../getAllCSS3DObject.js";
import "../../../shared-utils/util.js";
const J = 3, G = "CSS3DRenderer", b = `${G}@${J}`, p = () => {
  console.error(`${b} is disposed`);
}, n = {
  css3DObjects: [],
  frontModeStore: {
    css3DRenderer: new B()
  },
  behindModeStore: {
    css3DRenderer: new B()
  }
};
function w(o) {
  return n.css3DObjects.find((e) => e.id === o);
}
function K(o) {
  n.frontModeStore.css3DRenderer.setWrapper(o);
}
function Q(o) {
  n.behindModeStore.css3DRenderer.setWrapper(o);
}
class y {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(e) {
    i(this, "hooks", new A());
    i(this, "state", {
      enabled: !0,
      visible: !0,
      disposed: !1
    });
    i(this, "_scene");
    i(this, "store", {
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
    i(this, "create3DElement", (e, t, s) => {
      if (this.state.disposed)
        return p();
      const r = (() => {
        const h = {
          ratio: 216e-5,
          devicePixelRatio: 1,
          mode: "front",
          autoRender: !0,
          container: document.createElement("div"),
          pointerEvents: "none",
          wrapperStyle: {}
        };
        return Object.assign(h, s);
      })(), d = t.map(q);
      if ((d == null ? void 0 : d.length) < 4)
        return console.error(`${b}: requires 4 point but params may have fewer`);
      const { ratio: u, devicePixelRatio: f, mode: c, autoRender: S, container: O, pointerEvents: F, wrapperStyle: I } = r;
      let m = !1;
      const a = this.createObject(d, { ratio: u, dpr: f, container: O, mode: c, pointerEvents: F, wrapperStyle: I });
      n.css3DObjects.push(a), r.scene && this.setScene(r.scene);
      const N = () => {
        if (m)
          return;
        const h = a.mode === "front" ? this.getFrontCSS3DObjectGroup() : this.getBehindCSS3DObjectGroup();
        h && h.add(a);
      }, E = () => {
        m || (N(), this.render(e), this.hooks.emit("render"));
      }, D = (h) => this.setVisibleById(a.id, h), M = (h) => this.setEnabledById(a.id, h), x = () => (m = !0, a.removeFromParent(), !0), V = c === "front" ? n.frontModeStore.css3DRenderer : n.behindModeStore.css3DRenderer;
      return S && E(), {
        id: a.uuid,
        container: O,
        css3DObject: a,
        render: S ? void 0 : E,
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
    i(this, "setVisibleById", (e, t) => {
      var s;
      (s = w(e)) == null || s.setVisible(t);
    });
    i(this, "setEnabledById", (e, t) => {
      const s = w(e);
      if (!s)
        return;
      const r = s.mode === "front" ? this.getFrontCSS3DObjectGroup({ addGroupIfNotExists: !1 }) : this.getBehindCSS3DObjectGroup({ addGroupIfNotExists: !1 });
      r && (t ? r.add(s) : r.remove(s));
    });
    i(this, "createObject", (e, t) => {
      const s = new W(v(g({ cornerPoints: e }, t), { style: t.wrapperStyle }));
      return s.element.classList.add(`${G}__container`), s.element.id = `${G}__container--${s.uuid}`, s;
    });
    e && this.setScene(e);
  }
  get scene() {
    return this._scene || console.error("scene doesn't exist!, please call setScene(scene) first"), this._scene;
  }
  static get frontModeCSS3DRenderer() {
    return n.frontModeStore.css3DRenderer;
  }
  static get behindModeCSS3DRenderer() {
    return n.behindModeStore.css3DRenderer;
  }
  get frontModeCSS3DRenderer() {
    return n.frontModeStore.css3DRenderer;
  }
  get behindModeCSS3DRenderer() {
    return n.behindModeStore.css3DRenderer;
  }
  setScene(e) {
    this._scene = e;
  }
  getCurrentState() {
    return this.state;
  }
  setState(e, t = { userAction: !0 }) {
    if (this.state.disposed)
      return p();
    const s = g({}, this.state);
    this.state = Object.assign(this.state, e), s.visible !== this.state.visible && (e.visible ? this.handleShow() : this.handleHide()), s.enabled !== this.state.enabled && (e.enabled ? this.handleEnable() : this.handleDisable()), s.disposed !== this.state.disposed && this.handleDispose(), this.hooks.emit("stateChange", { state: this.state, prevState: s, userAction: t.userAction });
  }
  dispose() {
    this.setState({ disposed: !0 }), this.hooks.emit("dispose");
  }
  show() {
    return l(this, arguments, function* ({ userAction: e } = { userAction: !0 }) {
      if (this.state.disposed)
        return p();
      this.setState({ visible: !0 }, { userAction: e }), this.hooks.emit("show", { userAction: e });
    });
  }
  hide() {
    return l(this, arguments, function* ({ userAction: e } = { userAction: !0 }) {
      if (this.state.disposed)
        return p();
      this.setState({ visible: !1 }, { userAction: e }), this.hooks.emit("hide", { userAction: e });
    });
  }
  enable({ userAction: e } = { userAction: !0 }) {
    if (this.state.disposed)
      return p();
    this.setState({ enabled: !0 }, { userAction: e }), this.hooks.emit("enable", { userAction: e });
  }
  disable({ userAction: e } = { userAction: !0 }) {
    if (this.state.disposed)
      return p();
    this.setState({ enabled: !1 }, { userAction: e }), this.hooks.emit("disable", { userAction: e });
  }
  getFrontCSS3DScene({ createSceneIfNotExists: e = !1 } = {}) {
    var s;
    const t = (s = n.frontModeStore) == null ? void 0 : s.css3DScene;
    if (t)
      return t;
    if (e) {
      const r = new H();
      n.frontModeStore.css3DScene = r;
    }
    return n.frontModeStore.css3DScene;
  }
  getBehindCSS3DScene({ createSceneIfNotExists: e = !1 } = {}) {
    var s, r;
    const t = (s = n.behindModeStore) == null ? void 0 : s.css3DScene;
    if (t)
      return t;
    if (e) {
      const d = (r = n.behindModeStore.scene) != null ? r : this.scene;
      if (!d) {
        console.error(`${b}: scene is required when mode is behind`);
        return;
      }
      const u = new T(d);
      n.behindModeStore.css3DScene = u, n.behindModeStore.scene = d;
    }
    return n.behindModeStore.css3DScene;
  }
  getFrontCSS3DObjectGroup({ addGroupIfNotExists: e = !0 } = {}) {
    const t = this.getFrontCSS3DScene({ createSceneIfNotExists: e });
    return e && t && (t.getObjectById(this.store.frontModeGroup.id) || t.add(this.store.frontModeGroup)), this.store.frontModeGroup;
  }
  getBehindCSS3DObjectGroup({ addGroupIfNotExists: e = !0 } = {}) {
    var s;
    const t = this.getBehindCSS3DScene({ createSceneIfNotExists: e });
    if (e && t && this.scene) {
      const r = (s = this.store.behindModeGroup) != null ? s : new z(this.scene);
      this.store.behindModeGroup = r, t.getObjectById(r.id) || t.add(r);
    }
    return this.store.behindModeGroup;
  }
  render(e) {
    var t, s;
    if (this.getFrontCSS3DObjectGroup({ addGroupIfNotExists: !1 }).CSS3DObjectLength > 0) {
      const r = this.getFrontCSS3DScene({ createSceneIfNotExists: !0 });
      if (!r)
        return console.error(`${b}: css3DScene is required when mode is front`);
      n.frontModeStore.css3DRenderer.renderEveryFrame(r, e);
    }
    if (((s = (t = this.getBehindCSS3DObjectGroup({ addGroupIfNotExists: !1 })) == null ? void 0 : t.CSS3DObjectLength) != null ? s : 0) > 0) {
      const r = this.getBehindCSS3DScene({ createSceneIfNotExists: !0 });
      if (!r)
        return console.error(`${b}: css3DScene is required when mode is behind`);
      n.behindModeStore.css3DRenderer.renderEveryFrame(r, e);
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
    var e, t, s;
    this.store.frontModeGroup.children.forEach((r) => {
      r instanceof j && r.element instanceof Element && r.element.parentNode !== null && r.element.remove();
    }), (e = this.store.behindModeGroup) == null || e.children.forEach((r) => {
      r instanceof j && r.element instanceof Element && r.element.parentNode !== null && r.element.remove();
    }), (t = this.getFrontCSS3DScene()) == null || t.remove(this.store.frontModeGroup), this.store.behindModeGroup && ((s = this.getBehindCSS3DScene()) == null || s.remove(this.store.behindModeGroup));
  }
  handleDispose() {
    this.handleDisable();
  }
}
i(y, "setFrontModeContainer", K), i(y, "setBehindModeContainer", Q);
export {
  y as CSS3DRender,
  xe as MinRatio,
  b as PLUGIN,
  n as globalStore
};
