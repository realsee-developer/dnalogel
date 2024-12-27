var L = Object.defineProperty, B = Object.defineProperties;
var U = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var _ = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var g = (c, n, e) => n in c ? L(c, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[n] = e, a = (c, n) => {
  for (var e in n || (n = {}))
    _.call(n, e) && g(c, e, n[e]);
  if (y)
    for (var e of y(n))
      x.call(n, e) && g(c, e, n[e]);
  return c;
}, f = (c, n) => B(c, U(n));
var h = (c, n, e) => (g(c, typeof n != "symbol" ? n + "" : n, e), e);
var m = (c, n, e) => new Promise((t, r) => {
  var l = (s) => {
    try {
      o(e.next(s));
    } catch (d) {
      r(d);
    }
  }, i = (s) => {
    try {
      o(e.throw(s));
    } catch (d) {
      r(d);
    }
  }, o = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(l, i);
  o((e = e.apply(c, n)).next());
});
import { globalModules as E } from "./utils/Modules/Global.js";
import { Subscribe as S } from "../shared-utils/Subscribe.js";
import { IObject3D as z } from "../shared-utils/three/IObject3D.js";
import "../shared-utils/tag.js";
import "three";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as k } from "../shared-utils/isNil.js";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../shared-utils/five/FivePuppet.js";
import { recurveFindObject as H } from "../shared-utils/three/recurveFindObject.js";
import { Polyline as I } from "./Objects/Polyline/index.js";
import { Point as b } from "./Objects/Point/index.js";
import { Polygon as w } from "./Objects/Polygon/index.js";
import { Prism as j } from "./Objects/Prism/index.js";
import { Rectangle as O } from "./Objects/Rectangle/index.js";
import { Circle as P } from "./Objects/Circle/index.js";
import { Cylinder as v } from "./Objects/Cylinder/index.js";
import { Box as C } from "./Objects/Box/index.js";
import { forReverseEach as M } from "../shared-utils/forReverseEach.js";
import { Line as R } from "./Objects/Line/index.js";
import { hotkeys as D } from "../vendor/hotkeys-js/dist/hotkeys.esm.js";
import { withResolvers as G } from "../shared-utils/promise/withResolvers.js";
const u = class extends S {
  constructor(e, t) {
    super();
    h(this, "group");
    h(this, "theme");
    h(this, "five");
    h(this, "creatingItem", null);
    /**
     * @description: 撤销
     */
    h(this, "undo", () => {
      var e;
      console.log("undo"), (e = this.creatingItem) == null || e.undo(), this.five.needsRender = !0;
    });
    /**
     * @description: 重做
     */
    h(this, "redo", () => {
      var e;
      console.log("redo"), (e = this.creatingItem) == null || e.redo(), this.five.needsRender = !0;
    });
    this.five = e, this.theme = t, this.group = new z(), this.group.name = "Sculpt", e.scene.add(this.group), u.modules.init(e), D("ctrl+z, command+z", this.undo), D("ctrl+shift+z, command+shift+z", this.redo), u.modules.fiveDomEvents.addEventListener(this.group, "click", ({ intersects: r, origDomEvent: l }) => {
      var o;
      const i = H((o = r == null ? void 0 : r[0]) == null ? void 0 : o.object, (s) => s.isSculptObject);
      return i && !i.editing ? this.emit("click", l, i) : !1;
    }), window.__SCULPT_DEBUG__ = this, window.__SCULPT_MODULES_DEBUG__ = u.modules;
  }
  get data() {
    return {
      items: this.items.map((e) => {
        try {
          return e.data;
        } catch (t) {
          return console.error(t), null;
        }
      }).filter(k)
    };
  }
  get items() {
    return this.group.children;
  }
  /**
   * @description: 加载数据 展示
   */
  load(e, t) {
    var l;
    this.clear();
    const r = (l = e == null ? void 0 : e.items) == null ? void 0 : l.map((i) => {
      var s;
      const o = f(a({}, i), {
        style: a(a({}, (s = this.theme) == null ? void 0 : s[i.type.toLowerCase()]), i.style)
      });
      return i.type === "Point" ? new b(o, t) : i.type === "line" ? new R(o, t) : i.type === "Polyline" ? new I(o, t) : i.type === "Polygon" ? new w(o, t) : i.type === "Prism" ? new j(o, t) : i.type === "Rectangle" ? new O(o, t) : i.type === "Circle" ? new P(o, t) : i.type === "Cylinder" ? new v(o, t) : i.type === "Box" ? new C(o, t) : null;
    });
    this.group.add(...r), this.five.needsRender = !0;
  }
  /**
   * @description: 获取物体实例
   */
  getItemById(e) {
    return this.items.find((t) => t.uuid === e);
  }
  /**
   * @description: 放置物体
   */
  putObject(e) {
    var l;
    this.group.add(e);
    const t = u.modules.object3DHelper, r = t.addObject3DHelper(e);
    return (l = r == null ? void 0 : r.moveController) == null || l.moveByMouse(), t;
  }
  /**
   * @description: 开始绘制点
   */
  createPoint(...e) {
    return m(this, null, function* () {
      var t, r;
      return Object.assign((t = e[0]) != null ? t : {}, (r = this.theme) == null ? void 0 : r.point, e[0]), this.createItem(b, ...e);
    });
  }
  /**
   * @description: 开始绘制线段
   */
  createLine(...e) {
    return m(this, null, function* () {
      var t, r;
      return Object.assign((t = e[0]) != null ? t : {}, (r = this.theme) == null ? void 0 : r.line, e[0]), this.createItem(R, ...e);
    });
  }
  /**
   * @deprecated use createLine instead
   */
  createline(...e) {
    return m(this, null, function* () {
      this.createLine(...e);
    });
  }
  /**
   * @description: 开始绘制空间折线
   */
  createPolyline(...e) {
    return m(this, null, function* () {
      var t, r;
      return Object.assign((t = e[0]) != null ? t : {}, (r = this.theme) == null ? void 0 : r.polyline, e[0]), this.createItem(I, ...e);
    });
  }
  /**
   * @description: 开始绘制平面多边形
   */
  createPolygon(...e) {
    return m(this, null, function* () {
      var t, r;
      return Object.assign((t = e[0]) != null ? t : {}, (r = this.theme) == null ? void 0 : r.polygon, e[0]), this.createItem(w, ...e);
    });
  }
  /**
   * @description: 开始绘制多棱柱
   */
  createPrism(...e) {
    return m(this, null, function* () {
      var t, r;
      return Object.assign((t = e[0]) != null ? t : {}, (r = this.theme) == null ? void 0 : r.prism, e[0]), this.createItem(j, ...e);
    });
  }
  /**
   * @description: 开始绘制矩形
   */
  createRectangle(...e) {
    return m(this, null, function* () {
      var t, r;
      return Object.assign((t = e[0]) != null ? t : {}, (r = this.theme) == null ? void 0 : r.rectangle, e[0]), this.createItem(O, ...e);
    });
  }
  /**
   * @description: 开始绘制圆形
   */
  createCircle(...e) {
    return m(this, null, function* () {
      var t, r;
      return Object.assign((t = e[0]) != null ? t : {}, (r = this.theme) == null ? void 0 : r.circle, e[0]), this.createItem(P, ...e);
    });
  }
  /**
   * @description: 开始绘制圆柱
   */
  createCylinder(...e) {
    return m(this, null, function* () {
      var t, r;
      return Object.assign((t = e[0]) != null ? t : {}, (r = this.theme) == null ? void 0 : r.cylinder, e[0]), this.createItem(v, ...e);
    });
  }
  /**
   * @description: 开始绘制 Box
   */
  createBox(...e) {
    return m(this, null, function* () {
      var t, r;
      return Object.assign((t = e[0]) != null ? t : {}, (r = this.theme) == null ? void 0 : r.box, e[0]), this.createItem(C, ...e);
    });
  }
  canUndo() {
    var e;
    return this.creatingItem ? (e = this.creatingItem) == null ? void 0 : e.canUndo() : !1;
  }
  canRedo() {
    var e;
    return this.creatingItem ? (e = this.creatingItem) == null ? void 0 : e.canRedo() : !1;
  }
  /**
   * @description: 清空数据
   */
  clear() {
    M(this.items, (e) => e.delete()), this.five.needsRender = !0;
  }
  createItem(e, ...t) {
    return m(this, null, function* () {
      this.creatingItem && (this.creatingItem.stopCreating(), this.creatingItem = null);
      const r = new e();
      this.creatingItem = r, this.group.add(r);
      const { promise: l, resolve: i, reject: o } = G();
      return yield r.create(...t).then((...s) => (this.creatingItem = null, i(r), s)).catch((s) => {
        o(s), this.group.remove(r);
      }), l;
    });
  }
};
let p = u;
h(p, "modules", E);
const ye = (c) => new p(c);
export {
  p as Sculpt,
  ye as SculptPlugin
};
