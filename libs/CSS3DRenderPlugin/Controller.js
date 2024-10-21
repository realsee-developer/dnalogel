var R = Object.defineProperty, F = Object.defineProperties;
var C = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var O = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var p = (o, i, e) => i in o ? R(o, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[i] = e, a = (o, i) => {
  for (var e in i || (i = {}))
    O.call(i, e) && p(o, e, i[e]);
  if (f)
    for (var e of f(i))
      S.call(i, e) && p(o, e, i[e]);
  return o;
}, l = (o, i) => F(o, C(i));
var s = (o, i, e) => (p(o, typeof i != "symbol" ? i + "" : i, e), e);
import { CSS3DRender as j } from "./utils/three/CSS3DRender.js";
import x from "./utils/generateBehindFiveElement.js";
import "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../shared-utils/tag.js";
import "../shared-utils/three/core/Sphere.js";
import "animejs";
import { absoluteUrl as P } from "../shared-utils/url/absoluteUrl.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import { waitFiveModelLoaded as w } from "../shared-utils/five/fiveModelLoad.js";
import "../shared-utils/positionToVector3.js";
import "./utils/three/CSS3DRenderer.js";
import "./utils/three/THREEJS_CSS3DRenderer.js";
import "./utils/createResizeObserver.js";
import "./utils/even.js";
import "../shared-utils/Subscribe.js";
import "./utils/three/CSS3DObject.js";
import "./utils/three/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "../shared-utils/isNil.js";
import "./utils/three/CSS3DScene.js";
import "./utils/getAllCSS3DObject.js";
import "../shared-utils/util.js";
import "./utils/three/CSS3DGroup.js";
import "../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../vendor/three/build/three.module.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/dom/resizeObserver.js";
const b = "v2.0.1", E = `CSS3DRenderPlugin@${b}`;
class ue extends j {
  constructor(e) {
    super();
    s(this, "five");
    s(this, "behindFiveContainer");
    s(this, "frontFiveContainer");
    s(this, "VERSION", b);
    s(this, "staticPrefix", "//vr-image-4.realsee-cdn.cn");
    s(this, "created3DElementResults", []);
    /**
     * @description 根据传入的四个点位创建一个 3d dom容器，可以通过ReactDom.render()的方式将react组件放到容器中
     * @param { Vector3Position[] } points 矩形四个点坐标
     * @param config 均为可选值
     * @config_document `config` 均为可选值
     *  | key                   | type                       | defaultValue        | comment |
     *  | -                     | -                          | -                   | -       |
     *  | `ratio`               | *`number`*                 | `0.00216`           | 1px对应多少米，默认为 0.00216，即1px对应2.16mm |
     *  | ~~`dpr`~~             | ~~*`number`*~~             | ~~`undefined`~~     | ~~**已改名**，请使用~~ `devicePixelRatio` |
     *  | `devicePixelRatio`    | *`number`*                 | `1`                 | 设备的物理像素分辨率与CSS像素分辨率的比值 |
     *  | `container`           | *`HTMLElement`*            | `undefined`         | 自定义 return 中的 `container`
     *  | `pointerEvents`       | *`'none'\|'auto'`*         | `'none'`            | container 的 css属性：`pointer-events` 的值 |
     *  | `autoRender`          | *`boolean`*                | `true`              | 是否自动渲染，通常为true |
     *  | `mode`                | *`'front'\|'behind'`*      | `front`             | 两种模式:|
     *  |                                                                          | | | `front`  模式：DOM 处于 five Canvas 上方，所以无法模拟遮挡效果，需要手动检测是否可见去设置显隐 |
     *  |                                                                          | | | `behind` 模式：DOM 处于 five Canvas 下方，可以模拟真实的遮挡效果，但是 DOM 必须是非透明的 |
     *  | `behindFiveContainer` | *`HTMLElement`*            | `undefined`         | 如果 mode 为 `behind`，需要传入容器，并确保此容器位five下方，且中间无其他不透明的dom元素遮挡 |
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
     *      setEnabled: (enabled: boolean) => void  // 添加/移除 container, 同 setEnabledById(id, enabled)
     *      enable: () => void                      // 同 setEnabled(true)
     *      disable: () => void                     // 同 setEnabled(false)
     *    } | void
     * ```
     */
    s(this, "create3DDomContainer", (e, t) => {
      if (this.state.disposed)
        return;
      const n = (() => {
        var m;
        (t == null ? void 0 : t.dpr) !== void 0 && console.warn(`${E}: please use "config.devicePixelRatio" replace "config.dpr"`);
        const d = {
          ratio: 216e-5,
          devicePixelRatio: (m = t == null ? void 0 : t.dpr) != null ? m : 1,
          mode: "front",
          autoRender: !0,
          wrapperStyle: {}
        };
        return Object.assign(d, t, (t == null ? void 0 : t.mode) === "behind" ? { scene: this.five.scene } : void 0);
      })(), { autoRender: h } = n;
      n.mode === "behind" && n.behindFiveContainer && (this.behindFiveContainer = n.behindFiveContainer);
      const r = this.create3DElement(this.five.camera, e, l(a({}, n), { autoRender: !1 }));
      if (!r)
        return;
      const D = r.dispose;
      r.dispose = () => (this.created3DElementResults.includes(r) && this.created3DElementResults.splice(this.created3DElementResults.indexOf(r), 1), D());
      const c = () => {
        var m, v;
        const d = r.css3DObject.mode === "front" ? (v = this.frontFiveContainer) != null ? v : (m = this.five.getElement()) == null ? void 0 : m.parentElement : this.getBehindFiveElement();
        if (!d)
          return console.error(`${E}: wrapper is ${d}; mode is ${r.css3DObject.mode}`);
        r.appendToElement(d), r.render(), this.created3DElementResults.push(r);
      }, u = () => {
        r.css3DObject.mode === "front" && c(), r.css3DObject.mode === "behind" && w(this.five).then(() => c());
      };
      return h && u(), l(a({}, r), { render: h ? void 0 : u });
    });
    this.five = e;
  }
  /** @deprecated disposeAll() renamed as dispose() */
  disposeAll() {
    return this.dispose();
  }
  setState(...e) {
    const t = super.setState(...e);
    return this.five.needsRender = !0, t;
  }
  appendToFrontFiveContainer(e) {
    this.frontFiveContainer = e, this.created3DElementResults.forEach((t) => {
      t.css3DObject.mode === "front" && t.appendToElement(e);
    });
  }
  appendToBehindFiveContainer(e) {
    this.behindFiveContainer = e, this.created3DElementResults.forEach((t) => {
      t.css3DObject.mode === "behind" && t.appendToElement(e);
    });
  }
  getBehindFiveElement() {
    return this.behindFiveContainer ? this.behindFiveContainer : (this.behindFiveContainer = x(this.five), this.behindFiveContainer);
  }
  /**
   * @description: 获取静态资源的url
   */
  absoluteUrl(e) {
    return P(this.staticPrefix, e);
  }
  clear() {
    this.created3DElementResults.forEach((e) => {
      e.dispose();
    }), this.created3DElementResults = [];
  }
}
export {
  E as PLUGIN_NAME,
  ue as default
};
