var B = Object.defineProperty, U = Object.defineProperties;
var _ = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var y = (m, i, e) => i in m ? B(m, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : m[i] = e, r = (m, i) => {
  for (var e in i || (i = {}))
    x.call(i, e) && y(m, e, i[e]);
  if (f)
    for (var e of f(i))
      E.call(i, e) && y(m, e, i[e]);
  return m;
}, g = (m, i) => U(m, _(i));
var u = (m, i, e) => (y(m, typeof i != "symbol" ? i + "" : i, e), e);
var a = (m, i, e) => new Promise((t, n) => {
  var c = (l) => {
    try {
      o(e.next(l));
    } catch (d) {
      n(d);
    }
  }, s = (l) => {
    try {
      o(e.throw(l));
    } catch (d) {
      n(d);
    }
  }, o = (l) => l.done ? t(l.value) : Promise.resolve(l.value).then(c, s);
  o((e = e.apply(m, i)).next());
});
import { globalModules as O } from "./utils/Modules/Global.js";
import { Subscribe as S } from "../shared-utils/Subscribe.js";
import { IObject3D as k } from "../shared-utils/three/IObject3D.js";
import "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../shared-utils/tag.js";
import "../shared-utils/three/core/Sphere.js";
import "animejs";
import { notNil as H } from "../shared-utils/isNil.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import { recurveFindObject as M } from "../shared-utils/three/recurveFindObject.js";
import { Polyline as I } from "./Objects/Polyline/index.js";
import { Point as w } from "./Objects/Point/index.js";
import { Polygon as P } from "./Objects/Polygon/index.js";
import { Prism as v } from "./Objects/Prism/index.js";
import { Rectangle as b } from "./Objects/Rectangle/index.js";
import { Circle as C } from "./Objects/Circle/index.js";
import { Cylinder as R } from "./Objects/Cylinder/index.js";
import { Box as D } from "./Objects/Box/index.js";
import { forReverseEach as z } from "../shared-utils/forReverseEach.js";
import { Line as L } from "./Objects/Line/index.js";
import { hotkeys as j } from "../vendor/hotkeys-js/dist/hotkeys.esm.js";
const h = class extends S {
  constructor(e, t) {
    super();
    u(this, "group");
    u(this, "theme");
    u(this, "five");
    u(this, "creatingItem", null);
    /**
     * @description: 撤销
     */
    u(this, "undo", () => {
      var e;
      console.log("undo"), (e = this.creatingItem) == null || e.undo(), this.five.needsRender = !0;
    });
    /**
     * @description: 重做
     */
    u(this, "redo", () => {
      var e;
      console.log("redo"), (e = this.creatingItem) == null || e.redo(), this.five.needsRender = !0;
    });
    this.five = e, this.theme = t, this.group = new k(), this.group.name = "Sculpt", e.scene.add(this.group), h.modules.init(e), j("ctrl+z", this.undo), j("ctrl+shift+z", this.redo), h.modules.fiveDomEvents.addEventListener(this.group, "click", ({ intersects: n, origDomEvent: c }) => {
      var o;
      const s = M((o = n == null ? void 0 : n[0]) == null ? void 0 : o.object, (l) => l.isSculptObject);
      return s && !s.editing ? this.emit("click", c, s) : !1;
    }), window.__SCULPT_DEBUG__ = this, window.__SCULPT_MODULES_DEBUG__ = h.modules;
  }
  get data() {
    return {
      items: this.items.map((e) => {
        try {
          return e.data;
        } catch (t) {
          return console.error(t), null;
        }
      }).filter(H)
    };
  }
  get items() {
    return this.group.children;
  }
  /**
   * @description: 加载数据 展示
   */
  load(e, t) {
    var c;
    this.clear();
    const n = (c = e == null ? void 0 : e.items) == null ? void 0 : c.map((s) => {
      var l;
      const o = g(r({}, s), {
        style: r(r({}, (l = this.theme) == null ? void 0 : l[s.type.toLowerCase()]), s.style)
      });
      return s.type === "Point" ? new w(o, t) : s.type === "line" ? new L(o, t) : s.type === "Polyline" ? new I(o, t) : s.type === "Polygon" ? new P(o, t) : s.type === "Prism" ? new v(o, t) : s.type === "Rectangle" ? new b(o, t) : s.type === "Circle" ? new C(o, t) : s.type === "Cylinder" ? new R(o, t) : s.type === "Box" ? new D(o, t) : null;
    });
    this.group.add(...n), this.five.needsRender = !0;
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
    var c;
    this.group.add(e);
    const t = h.modules.object3DHelper, n = t.addObject3DHelper(e);
    return (c = n == null ? void 0 : n.moveController) == null || c.moveByMouse(), t;
  }
  /**
   * @description: 开始绘制点
   */
  createPoint(e) {
    return a(this, null, function* () {
      var t;
      return this.createItem(w, r(r({}, (t = this.theme) == null ? void 0 : t.point), e));
    });
  }
  /**
   * @description: 开始绘制线段
   */
  createLine(e) {
    return a(this, null, function* () {
      var t;
      return this.createItem(L, r(r({}, (t = this.theme) == null ? void 0 : t.line), e));
    });
  }
  /**
   * @deprecated use createLine instead
   */
  createline(...e) {
    return a(this, null, function* () {
      this.createLine(...e);
    });
  }
  /**
   * @description: 开始绘制空间折线
   */
  createPolyline(e) {
    return a(this, null, function* () {
      var t;
      return this.createItem(I, r(r({}, (t = this.theme) == null ? void 0 : t.polyline), e));
    });
  }
  /**
   * @description: 开始绘制平面多边形
   */
  createPolygon(e) {
    return a(this, null, function* () {
      var t;
      return this.createItem(P, r(r({}, (t = this.theme) == null ? void 0 : t.polygon), e));
    });
  }
  /**
   * @description: 开始绘制多棱柱
   */
  createPrism(e) {
    return a(this, null, function* () {
      var t;
      return this.createItem(v, r(r({}, (t = this.theme) == null ? void 0 : t.prism), e));
    });
  }
  /**
   * @description: 开始绘制矩形
   */
  createRectangle(e) {
    return a(this, null, function* () {
      var t;
      return this.createItem(b, r(r({}, (t = this.theme) == null ? void 0 : t.rectangle), e));
    });
  }
  /**
   * @description: 开始绘制圆形
   */
  createCircle(e) {
    return a(this, null, function* () {
      var t;
      return this.createItem(C, r(r({}, (t = this.theme) == null ? void 0 : t.circle), e));
    });
  }
  /**
   * @description: 开始绘制圆柱
   */
  createCylinder(e) {
    return a(this, null, function* () {
      var t;
      return this.createItem(R, r(r({}, (t = this.theme) == null ? void 0 : t.cylinder), e));
    });
  }
  /**
   * @description: 开始绘制 Box
   */
  createBox(e) {
    return a(this, null, function* () {
      var t;
      return this.createItem(D, r(r({}, (t = this.theme) == null ? void 0 : t.box), e));
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
    z(this.items, (e) => e.delete()), this.five.needsRender = !0;
  }
  createItem(e, ...t) {
    return a(this, null, function* () {
      this.creatingItem && (this.creatingItem.stopCreating(), this.creatingItem = null);
      const n = new e();
      return this.creatingItem = n, this.group.add(n), yield n.create(...t).then((...c) => (this.creatingItem = null, c)).catch((c) => {
        console.error(c), this.group.remove(n);
      }), n;
    });
  }
};
let p = h;
u(p, "modules", O);
const ue = (m) => new p(m);
export {
  p as Sculpt,
  ue as SculptPlugin
};
