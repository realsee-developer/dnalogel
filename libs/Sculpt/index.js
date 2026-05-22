var O = Object.defineProperty, S = Object.defineProperties;
var U = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var D = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var p = (l, n, e) => n in l ? O(l, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[n] = e, g = (l, n) => {
  for (var e in n || (n = {}))
    D.call(n, e) && p(l, e, n[e]);
  if (y)
    for (var e of y(n))
      L.call(n, e) && p(l, e, n[e]);
  return l;
}, a = (l, n) => S(l, U(n));
var u = (l, n, e) => (p(l, typeof n != "symbol" ? n + "" : n, e), e);
var m = (l, n, e) => new Promise((t, i) => {
  var c = (o) => {
    try {
      r(e.next(o));
    } catch (h) {
      i(h);
    }
  }, s = (o) => {
    try {
      r(e.throw(o));
    } catch (h) {
      i(h);
    }
  }, r = (o) => o.done ? t(o.value) : Promise.resolve(o.value).then(c, s);
  r((e = e.apply(l, n)).next());
});
import { globalModules as B } from "./utils/Modules/Global.js";
import { Subscribe as E } from "../shared-utils/Subscribe.js";
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
import "../shared-utils/three/blink.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../vendor/earcut/src/earcut.js";
import "../shared-utils/five/FivePuppet.js";
import { recurveFindObject as F } from "../shared-utils/three/recurveFindObject.js";
import { Polyline as I } from "./Objects/Polyline/index.js";
import { Point as _ } from "./Objects/Point/index.js";
import { Polygon as w } from "./Objects/Polygon/index.js";
import { Prism as b } from "./Objects/Prism/index.js";
import { Rectangle as j } from "./Objects/Rectangle/index.js";
import { Circle as v } from "./Objects/Circle/index.js";
import { Cylinder as P } from "./Objects/Cylinder/index.js";
import { Box as R } from "./Objects/Box/index.js";
import { forReverseEach as H } from "../shared-utils/forReverseEach.js";
import { Line as C } from "./Objects/Line/index.js";
import { hotkeys as x } from "../vendor/hotkeys-js/dist/hotkeys.esm.js";
import { withResolvers as M } from "../shared-utils/promise/withResolvers.js";
const d = class extends E {
  constructor(e, t, i) {
    super();
    u(this, "group");
    u(this, "theme");
    u(this, "config");
    u(this, "five");
    u(this, "creatingItem", null);
    /**
     * @description: 撤销
     */
    u(this, "undo", () => {
      if (this.creatingItem) {
        this.creatingItem.undo(), this.five.needsRender = !0;
        return;
      }
      const e = this.items.find((t) => t.selected && t.type === "Polygon");
      e && typeof e.undo == "function" && (e.undo(), console.log("[Sculpt] 撤销操作已执行", e), this.five.needsRender = !0);
    });
    /**
     * @description: 重做
     */
    u(this, "redo", () => {
      if (this.creatingItem) {
        this.creatingItem.redo(), this.five.needsRender = !0;
        return;
      }
      const e = this.items.find((t) => t.selected && t.type === "Polygon");
      e && typeof e.redo == "function" && (e.redo(), this.five.needsRender = !0);
    });
    this.five = e, this.theme = t, this.config = g({
      magnifier: { width: 190, height: 190, scale: 2, dragEnabled: !0 }
    }, i), this.group = new z(), this.group.name = "Sculpt", this.group.__sculpt__ = this, this.group.__five__ = this.five, e.scene.add(this.group), d.modules.init(e, this.config), x("ctrl+z, command+z", this.undo), x("ctrl+shift+z, command+shift+z", this.redo), d.modules.fiveDomEvents.addEventListener(this.group, "click", ({ intersects: c, origDomEvent: s }) => {
      var o;
      const r = F((o = c == null ? void 0 : c[0]) == null ? void 0 : o.object, (h) => h.isSculptObject);
      return r && !r.editing ? this.emit("click", s, r) : !1;
    }), window.__SCULPT_DEBUG__ = this, window.__SCULPT_MODULES_DEBUG__ = d.modules;
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
    var c;
    this.clear();
    const i = (c = e == null ? void 0 : e.items) == null ? void 0 : c.map((s) => {
      var o;
      const r = a(g({}, s), {
        style: g(g({}, (o = this.theme) == null ? void 0 : o[s.type.toLowerCase()]), s.style)
      });
      return s.type === "Point" ? new _(r, t) : s.type === "line" ? new C(r, t) : s.type === "Polyline" ? new I(r, t) : s.type === "Polygon" ? new w(r, t) : s.type === "Prism" ? new b(r, t) : s.type === "Rectangle" ? new j(r, t) : s.type === "Circle" ? new v(r, t) : s.type === "Cylinder" ? new P(r, t) : s.type === "Box" ? new R(r, t) : null;
    });
    this.group.add(...i), this.five.needsRender = !0;
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
    const t = d.modules.object3DHelper, i = t.addObject3DHelper(e);
    return (c = i == null ? void 0 : i.moveController) == null || c.moveByMouse(), t;
  }
  /**
   * @description: 开始绘制点
   */
  createPoint(...e) {
    return m(this, null, function* () {
      var t, i;
      return Object.assign((t = e[0]) != null ? t : {}, (i = this.theme) == null ? void 0 : i.point, e[0]), this.createItem(_, ...e);
    });
  }
  /**
   * @description: 开始绘制线段
   */
  createLine(...e) {
    return m(this, null, function* () {
      var t, i;
      return Object.assign((t = e[0]) != null ? t : {}, (i = this.theme) == null ? void 0 : i.line, e[0]), this.createItem(C, ...e);
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
      var t, i;
      return Object.assign((t = e[0]) != null ? t : {}, (i = this.theme) == null ? void 0 : i.polyline, e[0]), this.createItem(I, ...e);
    });
  }
  /**
   * @description: 开始绘制平面多边形
   */
  createPolygon(...e) {
    return m(this, null, function* () {
      var i, c, s;
      Object.assign((i = e[0]) != null ? i : {}, (c = this.theme) == null ? void 0 : c.polygon, e[0]);
      const t = (s = e[0]) != null ? s : {};
      return t.__onSelfIntersect = (r) => {
        const o = this.creatingItem;
        this.emit("polygon.experimental_self_intersect", o, r);
      }, t.__onWillAddPoint = (r, o) => {
        const h = this.creatingItem;
        this.emit("polygon.experimental_point_will_add", h, r, o);
      }, e[0] = t, this.createItem(w, ...e);
    });
  }
  /**
   * @description: 开始绘制多棱柱
   */
  createPrism(...e) {
    return m(this, null, function* () {
      var i, c, s;
      Object.assign((i = e[0]) != null ? i : {}, (c = this.theme) == null ? void 0 : c.prism, e[0]);
      const t = (s = e[0]) != null ? s : {};
      return t.__onSelfIntersect = (r) => {
        const o = this.creatingItem;
        this.emit("prism.experimental_self_intersect", o, r);
      }, t.__onWillAddPoint = (r, o) => {
        const h = this.creatingItem;
        this.emit("prism.experimental_point_will_add", h, r, o);
      }, e[0] = t, this.createItem(b, ...e);
    });
  }
  /**
   * @description: 开始绘制矩形
   */
  createRectangle(...e) {
    return m(this, null, function* () {
      var t, i;
      return Object.assign((t = e[0]) != null ? t : {}, (i = this.theme) == null ? void 0 : i.rectangle, e[0]), this.createItem(j, ...e);
    });
  }
  /**
   * @description: 开始绘制圆形
   */
  createCircle(...e) {
    return m(this, null, function* () {
      var t, i;
      return Object.assign((t = e[0]) != null ? t : {}, (i = this.theme) == null ? void 0 : i.circle, e[0]), this.createItem(v, ...e);
    });
  }
  /**
   * @description: 开始绘制圆柱
   */
  createCylinder(...e) {
    return m(this, null, function* () {
      var t, i;
      return Object.assign((t = e[0]) != null ? t : {}, (i = this.theme) == null ? void 0 : i.cylinder, e[0]), this.createItem(P, ...e);
    });
  }
  /**
   * @description: 开始绘制 Box
   */
  createBox(...e) {
    return m(this, null, function* () {
      var t, i;
      return Object.assign((t = e[0]) != null ? t : {}, (i = this.theme) == null ? void 0 : i.box, e[0]), this.createItem(R, ...e);
    });
  }
  canUndo() {
    if (this.creatingItem)
      return this.creatingItem.canUndo();
    const e = this.items.find((t) => t.selected);
    return e && typeof e.canUndo == "function" ? e.canUndo() : !1;
  }
  canRedo() {
    if (this.creatingItem)
      return this.creatingItem.canRedo();
    const e = this.items.find((t) => t.selected);
    return e && typeof e.canRedo == "function" ? e.canRedo() : !1;
  }
  /**
   * @description: 清空数据
   */
  clear() {
    H(this.items, (e) => e.delete()), this.five.needsRender = !0;
  }
  createItem(e, ...t) {
    return m(this, null, function* () {
      this.creatingItem && (this.creatingItem.stopCreating(), this.creatingItem = null);
      const i = new e();
      this.creatingItem = i, this.group.add(i);
      const { promise: c, resolve: s, reject: r } = M();
      return yield i.create(...t).then((...o) => (this.creatingItem = null, i.select({ only: !0 }), s(i), o)).catch((o) => {
        r(o), this.group.remove(i);
      }), c;
    });
  }
};
let f = d;
u(f, "modules", B);
const Ie = (l, n, e) => {
  if (n && typeof n == "object" && ("theme" in n || "config" in n)) {
    const t = n;
    return new f(l, t.theme, t.config);
  }
  return new f(l, n, e);
}, _e = (l, n) => new f(l, n == null ? void 0 : n.theme, n == null ? void 0 : n.config);
export {
  f as Sculpt,
  Ie as SculptPlugin,
  _e as SculptPluginForFive
};
