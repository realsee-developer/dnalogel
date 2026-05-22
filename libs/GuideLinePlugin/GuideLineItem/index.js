var k = Object.defineProperty, b = Object.defineProperties;
var x = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var G = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var g = (o, e, t) => e in o ? k(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, h = (o, e) => {
  for (var t in e || (e = {}))
    G.call(e, t) && g(o, t, e[t]);
  if (w)
    for (var t of w(e))
      L.call(e, t) && g(o, t, e[t]);
  return o;
}, v = (o, e) => b(o, x(e));
var s = (o, e, t) => (g(o, typeof e != "symbol" ? e + "" : e, t), t);
var c = (o, e, t) => new Promise((n, i) => {
  var u = (r) => {
    try {
      a(t.next(r));
    } catch (m) {
      i(m);
    }
  }, l = (r) => {
    try {
      a(t.throw(r));
    } catch (m) {
      i(m);
    }
  }, a = (r) => r.done ? n(r.value) : Promise.resolve(r.value).then(u, l);
  a((t = t.apply(o, e)).next());
});
import { GuideLineModeItem as y } from "../GuideLineModeItem/index.js";
import { logError as P } from "../../shared-utils/log.js";
import { to as _ } from "../../shared-utils/to.js";
import { changeMode as M } from "../../shared-utils/five/changeMode.js";
import C from "../../CruisePlugin/Move.js";
import E from "../../CruisePlugin/Work.js";
import { Subscribe as A } from "../../shared-utils/Subscribe.js";
class D {
  constructor(e) {
    s(this, "id");
    s(this, "renderID");
    s(this, "isGuideLine", !0);
    s(this, "panoramaItem");
    s(this, "modelItem");
    s(this, "hooks", new A());
    s(this, "_visible", !0);
    s(this, "plugin");
    s(this, "five");
    s(this, "logError", (e) => P("GuideLineItem: ", e));
    this.id = e.id, this.five = e.five, this.plugin = e.plugin, this.panoramaItem = new y(this.five, { mode: "panorama", plugin: this.plugin, parent: this }), this.modelItem = new y(this.five, { mode: "model", plugin: this.plugin, parent: this });
  }
  get visible() {
    return this._visible;
  }
  setData(e) {
    this.setDataByMode("panorama", e), this.setDataByMode("model", e);
  }
  setDataByMode(e, t) {
    var m;
    const n = e === "panorama" ? this.panoramaItem : this.modelItem, i = e === "panorama" ? t.panorama_style : t.model_style, u = t.path, l = i, a = i, r = i;
    if (t.pano_group) {
      const d = e === "panorama" && t.panorama_style.skip_group === !0;
      n.setGeometryByPanoGroup(t.pano_group, h(v(h({}, t), { skipPanoGroup: d }), l));
    } else
      t.path && n.setGeometryByPath(u, h({}, l));
    n.name = t.name, n.setMeshStyle(r), n.setMartial(a), n.setVisibleFloorIndexes((m = t.visible_floor_indexes) != null ? m : null), n.setStartTag(i == null ? void 0 : i.start_tag), n.setEndTag(i == null ? void 0 : i.end_tag);
  }
  show() {
    this._visible = !0, this.hooks.emit("show", { userAction: !0 });
  }
  hide() {
    this._visible = !1, this.hooks.emit("hide", { userAction: !0 });
  }
  dispose() {
    this.panoramaItem.dispose(), this.modelItem.dispose();
  }
  walk(e) {
    return c(this, null, function* () {
      if (this.hooks.emit("walkStart", { userAction: !0 }), this.panoramaItem.panoGroup.length) {
        const t = h({ panoIndexList: this.panoramaItem.panoGroup }, e), [n] = yield _(F(this.five, t));
        if (n)
          return this.logError(n.message);
      } else {
        const t = { path: this.panoramaItem.curvePath }, [n] = yield _(B(this.five, t));
        if (n)
          return this.logError(n.message);
      }
      this.hooks.emit("walkEnded", { userAction: !0 });
    });
  }
}
function B(o, e) {
  return c(this, null, function* () {
    const t = new C(o);
    yield t.load(e), t.playFromStart();
  });
}
function F(o, e) {
  return c(this, null, function* () {
    if (e.panoIndexList.length === 0)
      return;
    const t = o.getCurrentState();
    t.mode !== "Panorama" && (yield M(o, ["Panorama", { longitude: t.longitude, latitude: 0, panoIndex: e.panoIndexList[0] }]));
    const n = new E(o);
    yield n.load(e), yield new Promise((i, u) => {
      const l = o.getCurrentState();
      let a = e.panoIndexList.slice();
      l.panoIndex === a[0] && m(l.panoIndex), n.playFromStart();
      function r(p) {
        if (p !== "Panorama")
          return f(new Error("mode not match"));
      }
      function m(p) {
        const I = a[0];
        if (a = a.slice(1), p !== I)
          return f(new Error("panoIndex not match, wanted: " + I + ", got: " + p));
        if (a.length === 0)
          return S();
      }
      function d() {
        o.off("modeChange", r), o.off("panoArrived", m);
      }
      function f(p) {
        d(), u(p);
      }
      function S() {
        d(), i();
      }
      o.on("modeChange", r), o.on("panoArrived", m);
    });
  });
}
const q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GuideLineItem: D
}, Symbol.toStringTag, { value: "Module" }));
export {
  D as GuideLineItem,
  q as GuideLineItem$1
};
