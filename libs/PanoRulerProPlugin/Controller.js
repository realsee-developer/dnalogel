var m = Object.defineProperty;
var f = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
var p = (i, t, e) => t in i ? m(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, c = (i, t) => {
  for (var e in t || (t = {}))
    v.call(t, e) && p(i, e, t[e]);
  if (f)
    for (var e of f(t))
      b.call(t, e) && p(i, e, t[e]);
  return i;
};
var r = (i, t, e) => (p(i, typeof t != "symbol" ? t + "" : t, e), e);
var d = (i, t, e) => new Promise((a, o) => {
  var n = (s) => {
    try {
      h(e.next(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => {
    try {
      h(e.throw(s));
    } catch (u) {
      o(u);
    }
  }, h = (s) => s.done ? a(s.value) : Promise.resolve(s.value).then(n, l);
  h((e = e.apply(i, t)).next());
});
import I from "./RulerItems.js";
import "../vendor/svelte/internal/index.js";
import "@realsee/five";
import "../shared-utils/animationFrame/index.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../shared-utils/equal.js";
import "../shared-utils/isTruelyObject.js";
import "../shared-utils/math/planimetry.js";
import "../shared-utils/throttle.js";
import "three";
import "./RulerItem.js";
class A {
  constructor(t, e) {
    r(this, "five");
    r(this, "container", document.createElement("div"));
    r(this, "panoRulerProData");
    r(this, "rulerItems");
    r(this, "state", {
      enabled: !1,
      loaded: !1,
      options: {
        className: "",
        distanceText: (t) => `${t.toFixed(1)}m`
      }
    });
    var a, o;
    this.five = t, this.container.classList.add("panoRulerProPlugin-container"), this.container.setAttribute(
      "style",
      "position: absolute;pointer-events: none;width: 100%;height: 100%;left: 0;top: 0;overflow: hidden;"
    ), e && (e.data && this.load(e.data), this.state.options = c(c({}, this.state.options), e.options || {}), (a = e.options) != null && a.className && this.container.classList.add((o = e.options) == null ? void 0 : o.className)), this.five.once("modelLoaded", () => d(this, null, function* () {
      var n, l;
      (l = (n = this.five.getElement()) == null ? void 0 : n.parentNode) == null || l.append(this.container);
    })), this.five.once("dispose", () => this.dispose());
  }
  load(t) {
    return d(this, null, function* () {
      if (!this.five.work)
        return;
      const e = t.data;
      if (!e)
        throw new Error("标尺数据依赖不齐全！");
      this.panoRulerProData = e, this.state.loaded = !0;
    });
  }
  enable() {
    return this.state.loaded ? (this.state.enabled || (this.state.enabled = !0, this.render()), !0) : !1;
  }
  disable() {
    return this.state.enabled && (this.state.enabled = !1, this.render()), !0;
  }
  render() {
    return d(this, null, function* () {
      var t;
      if (this.state.enabled) {
        if (!this.panoRulerProData || !this.container)
          return;
        this.rulerItems = new I({
          target: this.container,
          props: {
            five: this.five,
            rulerDatas: this.panoRulerProData,
            options: this.state.options
          }
        });
      } else
        (t = this.rulerItems) == null || t.$destroy(), this.rulerItems = void 0;
    });
  }
  dispose() {
    var t;
    this.container && ((t = this.rulerItems) == null || t.$destroy(), this.rulerItems = void 0), this.container.remove();
  }
}
export {
  A as default
};
