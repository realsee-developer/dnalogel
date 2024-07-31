var B = Object.defineProperty, _ = Object.defineProperties;
var x = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable;
var d = (n, i, e) => i in n ? B(n, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[i] = e, r = (n, i) => {
  for (var e in i || (i = {}))
    E.call(i, e) && d(n, e, i[e]);
  if (f)
    for (var e of f(i))
      O.call(i, e) && d(n, e, i[e]);
  return n;
}, w = (n, i) => _(n, x(i));
var h = (n, i, e) => (d(n, typeof i != "symbol" ? i + "" : i, e), e);
var u = (n, i, e) => new Promise((t, o) => {
  var l = (c) => {
    try {
      m(e.next(c));
    } catch (y) {
      o(y);
    }
  }, s = (c) => {
    try {
      m(e.throw(c));
    } catch (y) {
      o(y);
    }
  }, m = (c) => c.done ? t(c.value) : Promise.resolve(c.value).then(l, s);
  m((e = e.apply(n, i)).next());
});
import { globalModules as R } from "./utils/Modules/Global.js";
import { Subscribe as S } from "../shared-utils/Subscribe.js";
import { IObject3D as L } from "../shared-utils/three/IObject3D.js";
import "hammerjs";
import "three";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import { notNil as U } from "../shared-utils/isNil.js";
import { recurveFindObject as H } from "../shared-utils/three/recurveFindObject.js";
import { Polyline as g } from "./Objects/Polyline/index.js";
import { Point as P } from "./Objects/Point/index.js";
import { Polygon as I } from "./Objects/Polygon/index.js";
import { Prism as b } from "./Objects/Prism/index.js";
import { Rectangle as v } from "./Objects/Rectangle/index.js";
import { Circle as C } from "./Objects/Circle/index.js";
import { Cylinder as D } from "./Objects/Cylinder/index.js";
import { Box as j } from "./Objects/Box/index.js";
import { forReverseEach as M } from "../shared-utils/forReverseEach.js";
const a = class extends S {
  constructor(e, t) {
    super();
    h(this, "group");
    h(this, "five");
    h(this, "theme");
    this.five = e, this.theme = t, this.group = new L(), this.group.name = "Sculpt", e.scene.add(this.group), a.modules.init(e), a.modules.fiveDomEvents.addEventListener(this.group, "click", ({ intersects: o }) => {
      var s;
      const l = H((s = o == null ? void 0 : o[0]) == null ? void 0 : s.object, (m) => m.isSculptObject);
      return l ? this.emit("click", l) : !1;
    }), window.__SCLUPT_DEBUG__ = this, window.__SCLUPT_MODULES_DEBUG__ = a.modules;
  }
  get data() {
    return {
      items: this.items.map((e) => {
        try {
          return e.data;
        } catch (t) {
          return console.error(t), null;
        }
      }).filter(U)
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
    const o = (l = e == null ? void 0 : e.items) == null ? void 0 : l.map((s) => {
      var c;
      const m = w(r({}, s), {
        style: r(r({}, (c = this.theme) == null ? void 0 : c[s.type.toLowerCase()]), s.style)
      });
      return s.type === "Point" ? new P(m, t) : s.type === "Polyline" ? new g(m, t) : s.type === "Polygon" ? new I(m, t) : s.type === "Prism" ? new b(m, t) : s.type === "Rectangle" ? new v(m, t) : s.type === "Circle" ? new C(m, t) : s.type === "Cylinder" ? new D(m, t) : s.type === "Box" ? new j(m, t) : null;
    });
    this.group.add(...o), this.five.needsRender = !0;
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
    const t = a.modules.object3DHelper, o = t.addObject3DHelper(e);
    return (l = o == null ? void 0 : o.moveController) == null || l.moveByMouse(), t;
  }
  /**
   * @description: 开始绘制点
   */
  createPoint(e) {
    return u(this, null, function* () {
      var t;
      return this.createItem(P, r(r({}, (t = this.theme) == null ? void 0 : t.point), e));
    });
  }
  /**
   * @description: 开始绘制空间折线
   */
  createPolyline(e) {
    return u(this, null, function* () {
      var t;
      return this.createItem(g, r(r({}, (t = this.theme) == null ? void 0 : t.polyline), e));
    });
  }
  /**
   * @description: 开始绘制平面多边形
   */
  createPolygon(e) {
    return u(this, null, function* () {
      var t;
      return this.createItem(I, r(r({}, (t = this.theme) == null ? void 0 : t.polygon), e));
    });
  }
  /**
   * @description: 开始绘制多棱柱
   */
  createPrism(e) {
    return u(this, null, function* () {
      var t;
      return this.createItem(b, r(r({}, (t = this.theme) == null ? void 0 : t.prism), e));
    });
  }
  /**
   * @description: 开始绘制矩形
   */
  createRectangle(e) {
    return u(this, null, function* () {
      var t;
      return this.createItem(v, r(r({}, (t = this.theme) == null ? void 0 : t.rectangle), e));
    });
  }
  /**
   * @description: 开始绘制圆形
   */
  createCircle(e) {
    return u(this, null, function* () {
      var t;
      return this.createItem(C, r(r({}, (t = this.theme) == null ? void 0 : t.circle), e));
    });
  }
  /**
   * @description: 开始绘制圆柱
   */
  createCylinder(e) {
    return u(this, null, function* () {
      var t;
      return this.createItem(D, r(r({}, (t = this.theme) == null ? void 0 : t.cylinder), e));
    });
  }
  /**
   * @description: 开始绘制 Box
   */
  createBox(e) {
    return u(this, null, function* () {
      var t;
      return this.createItem(j, r(r({}, (t = this.theme) == null ? void 0 : t.box), e));
    });
  }
  /**
   * @description: 撤销
   */
  undo() {
  }
  /**
   * @description: 重做
   */
  redo() {
  }
  /**
   * @description: 清空数据
   */
  clear() {
    M(this.items, (e) => e.delete()), this.five.needsRender = !0;
  }
  createItem(e, ...t) {
    return u(this, null, function* () {
      const o = new e();
      return this.group.add(o), yield o.create(...t).catch((l) => {
        console.error(l), this.group.remove(o);
      }), o;
    });
  }
};
let p = a;
h(p, "modules", R);
const oe = (n) => new p(n);
export {
  p as Sculpt,
  oe as SculptPlugin
};
