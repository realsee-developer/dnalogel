var b = Object.defineProperty, F = Object.defineProperties;
var C = Object.getOwnPropertyDescriptors;
var v = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable;
var d = (r, i, e) => i in r ? b(r, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[i] = e, a = (r, i) => {
  for (var e in i || (i = {}))
    S.call(i, e) && d(r, e, i[e]);
  if (v)
    for (var e of v(i))
      O.call(i, e) && d(r, e, i[e]);
  return r;
}, l = (r, i) => F(r, C(i));
var n = (r, i, e) => (d(r, typeof i != "symbol" ? i + "" : i, e), e);
import { CSS3DRender as x } from "./utils/three/CSS3DRender.js";
import P from "./utils/generateBehindFiveElement.js";
import "../shared-utils/tag.js";
import "three";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import { waitFiveModelLoaded as j } from "../shared-utils/five/fiveModelLoad.js";
import "@realsee/five/line";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import { absoluteUrl as w } from "../shared-utils/url/absoluteUrl.js";
import "../shared-utils/five/FivePuppet.js";
import "../shared-utils/positionToVector3.js";
import "../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../shared-utils/createResizeObserver.js";
import "../shared-utils/even.js";
import "../shared-utils/Subscribe.js";
import "./utils/three/CSS3DObject.js";
import "../shared-utils/CSS3DRender/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "../shared-utils/isNil.js";
import "./utils/three/CSS3DScene.js";
import "./utils/getAllCSS3DObject.js";
import "../shared-utils/util.js";
import "./utils/three/CSS3DGroup.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/three/core/Raycaster.js";
import "../shared-utils/dom/resizeObserver.js";
import "../shared-utils/five/fiveEveryReadyListener.js";
import "../shared-utils/throttle.js";
import "../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../shared-utils/three/Magnifier.js";
import "../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../shared-utils/three/Assets/index.js";
import "../shared-utils/three/PointSelector/utils/html.js";
import "../shared-utils/CSS3DRender/index.js";
import "../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../Sculpt/Meshes/Line.js";
import "../Sculpt/typings/style.js";
import "../shared-utils/three/IObject3D.js";
import "../Sculpt/utils/Meshes/getLengthHTML.js";
import "../shared-utils/three/applyObjectMatrixWorld.js";
import "../shared-utils/three/core/LineGeometry.js";
import "../shared-utils/three/core/LineMaterial.js";
import "../shared-utils/three/core/Line2.js";
import "../shared-utils/three/core/LineMaterial2.js";
import "../Sculpt/utils/unit.js";
import "../Sculpt/utils/renderDom.js";
import "./utils/three/CSS3DSprite.js";
import "../shared-utils/isTouchDevice.js";
import "../shared-utils/five/getPosition.js";
import "../shared-utils/five/getRaycasterByNdcPosition.js";
import "../shared-utils/three/PointSelector/utils/contents.js";
import "../Sculpt/utils/three/rayOnLine.js";
import "@realsee/five";
const E = "v2.0.1", f = `CSS3DRenderPlugin@${E}`;
class _e extends x {
  constructor(e) {
    super();
    n(this, "five");
    n(this, "behindFiveContainer");
    n(this, "frontFiveContainer");
    n(this, "VERSION", E);
    n(this, "staticPrefix", "//vr-image-4.realsee-cdn.cn");
    n(this, "created3DElementResults", []);
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
    n(this, "create3DDomContainer", (e, t) => {
      if (this.state.disposed)
        return;
      const s = (() => {
        var p;
        (t == null ? void 0 : t.dpr) !== void 0 && console.warn(`${f}: please use "config.devicePixelRatio" replace "config.dpr"`);
        const m = {
          ratio: 216e-5,
          devicePixelRatio: (p = t == null ? void 0 : t.dpr) != null ? p : 1,
          mode: "front",
          autoRender: !0,
          wrapperStyle: {}
        };
        return Object.assign(m, t, (t == null ? void 0 : t.mode) === "behind" ? { scene: this.five.scene } : void 0);
      })(), { autoRender: h } = s;
      s.mode === "behind" && s.behindFiveContainer && (this.behindFiveContainer = s.behindFiveContainer);
      const o = this.create3DElement(this.five.camera, e, l(a({}, s), { autoRender: !1 }));
      if (!o)
        return;
      const R = o.dispose;
      o.dispose = () => (this.created3DElementResults.includes(o) && this.created3DElementResults.splice(this.created3DElementResults.indexOf(o), 1), R());
      const D = () => {
        var p, u;
        const m = o.css3DObject.mode === "front" ? (u = this.frontFiveContainer) != null ? u : (p = this.five.getElement()) == null ? void 0 : p.parentElement : this.getBehindFiveElement();
        if (!m)
          return console.error(`${f}: wrapper is ${m}; mode is ${o.css3DObject.mode}`);
        o.appendToElement(m), o.render(), this.created3DElementResults.push(o);
      }, c = () => {
        j(this.five).then(() => D());
      };
      return h && c(), l(a({}, o), { render: h ? void 0 : c });
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
    return this.behindFiveContainer ? this.behindFiveContainer : (this.behindFiveContainer = P(this.five), this.behindFiveContainer);
  }
  /**
   * @description: 获取静态资源的url
   */
  absoluteUrl(e) {
    return w(this.staticPrefix, e);
  }
  clear() {
    this.created3DElementResults.forEach((e) => {
      e.dispose();
    }), this.created3DElementResults = [];
  }
}
export {
  f as PLUGIN_NAME,
  _e as default
};
