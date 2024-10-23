var k = Object.defineProperty, b = Object.defineProperties;
var x = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var G = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var I = (o, e, t) => e in o ? k(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, d = (o, e) => {
  for (var t in e || (e = {}))
    G.call(e, t) && I(o, t, e[t]);
  if (y)
    for (var t of y(e))
      L.call(e, t) && I(o, t, e[t]);
  return o;
}, _ = (o, e) => b(o, x(e));
var s = (o, e, t) => (I(o, typeof e != "symbol" ? e + "" : e, t), t);
var f = (o, e, t) => new Promise((n, i) => {
  var p = (r) => {
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
  }, a = (r) => r.done ? n(r.value) : Promise.resolve(r.value).then(p, l);
  a((t = t.apply(o, e)).next());
});
import { GuideLineModeItem as v } from "../GuideLineModeItem/index.js";
import { logError as P } from "../../shared-utils/log.js";
import { to as S } from "../../shared-utils/to.js";
import { changeMode as D } from "../../shared-utils/five/changeMode.js";
import M from "../../CruisePlugin/Move.js";
import C from "../../CruisePlugin/Work.js";
import { Subscribe as E } from "../../shared-utils/Subscribe.js";
class A {
  constructor(e) {
    s(this, "id");
    s(this, "renderID");
    s(this, "isGuideLine", !0);
    s(this, "panoramaItem");
    s(this, "modelItem");
    s(this, "hooks", new E());
    s(this, "_visible", !0);
    s(this, "plugin");
    s(this, "five");
    s(this, "logError", (e) => P("GuideLineItem: ", e));
    this.id = e.id, this.five = e.five, this.plugin = e.plugin, this.panoramaItem = new v(this.five, { mode: "panorama", plugin: this.plugin, parent: this }), this.modelItem = new v(this.five, { mode: "model", plugin: this.plugin, parent: this });
  }
  get visible() {
    return this._visible;
  }
  setData(e) {
    this.setDataByMode("panorama", e), this.setDataByMode("model", e);
  }
  setDataByMode(e, t) {
    var h;
    const n = e === "panorama" ? this.panoramaItem : this.modelItem, i = e === "panorama" ? t.panorama_style : t.model_style, p = e === "panorama" && t.panorama_style.use_auto_depthtest, l = t.panorama_style.auto_depth_test_effect_distance, a = t.path, r = i, m = i, c = i;
    if (t.pano_group) {
      const g = e === "panorama" && t.panorama_style.skip_group === !0;
      n.setGeometryByPanoGroup(t.pano_group, _(d({ skipPanoGroup: g }, r), { useAutoDepthTest: p, autoDepthTestEffectDistance: l }));
    } else
      t.path && n.setGeometryByPath(a, _(d({}, r), { useAutoDepthTest: p, autoDepthTestEffectDistance: l }));
    n.name = t.name, n.setMeshStyle(c), n.setMartial(m), n.setVisibleFloorIndexes((h = t.visible_floor_indexes) != null ? h : null), n.setStartTag(i == null ? void 0 : i.start_tag), n.setEndTag(i == null ? void 0 : i.end_tag);
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
    return f(this, null, function* () {
      if (this.hooks.emit("walkStart", { userAction: !0 }), this.panoramaItem.panoGroup.length) {
        const t = d({ panoIndexList: this.panoramaItem.panoGroup }, e), [n] = yield S(F(this.five, t));
        if (n)
          return this.logError(n.message);
      } else {
        const t = { path: this.panoramaItem.curvePath }, [n] = yield S(B(this.five, t));
        if (n)
          return this.logError(n.message);
      }
      this.hooks.emit("walkEnded", { userAction: !0 });
    });
  }
}
function B(o, e) {
  return f(this, null, function* () {
    const t = new M(o);
    yield t.load(e), t.playFromStart();
  });
}
function F(o, e) {
  return f(this, null, function* () {
    if (e.panoIndexList.length === 0)
      return;
    const t = o.getCurrentState();
    t.mode !== "Panorama" && (yield D(o, ["Panorama", { longitude: t.longitude, latitude: 0, panoIndex: e.panoIndexList[0] }]));
    const n = new C(o);
    yield n.load(e), yield new Promise((i, p) => {
      const l = o.getCurrentState();
      let a = e.panoIndexList.slice();
      l.panoIndex === a[0] && m(l.panoIndex), n.playFromStart();
      function r(u) {
        if (u !== "Panorama")
          return h(new Error("mode not match"));
      }
      function m(u) {
        const w = a[0];
        if (a = a.slice(1), u !== w)
          return h(new Error("panoIndex not match, wanted: " + w + ", got: " + u));
        if (a.length === 0)
          return g();
      }
      function c() {
        o.off("modeChange", r), o.off("panoArrived", m);
      }
      function h(u) {
        c(), p(u);
      }
      function g() {
        c(), i();
      }
      o.on("modeChange", r), o.on("panoArrived", m);
    });
  });
}
const q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GuideLineItem: A
}, Symbol.toStringTag, { value: "Module" }));
export {
  A as GuideLineItem,
  q as GuideLineItem$1
};
