import { commonjsGlobal as f } from "../../_commonjsHelpers.js";
var $ = "Expected a function", O = "__lodash_hash_undefined__", j = 1 / 0, D = "[object Function]", N = "[object GeneratorFunction]", F = "[object Symbol]", H = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, G = /^\w*$/, R = /^\./, A = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, M = /[\\^$.*+?()[\]{}|]/g, K = /\\(\\)?/g, L = /^\[object .+?Constructor\]$/, z = typeof f == "object" && f && f.Object === Object && f, U = typeof self == "object" && self && self.Object === Object && self, d = z || U || Function("return this")();
function q(t, e) {
  return t == null ? void 0 : t[e];
}
function J(t) {
  var e = !1;
  if (t != null && typeof t.toString != "function")
    try {
      e = !!(t + "");
    } catch (r) {
    }
  return e;
}
var V = Array.prototype, X = Function.prototype, w = Object.prototype, l = d["__core-js_shared__"], m = function() {
  var t = /[^.]+$/.exec(l && l.keys && l.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}(), x = X.toString, _ = w.hasOwnProperty, P = w.toString, Y = RegExp(
  "^" + x.call(_).replace(M, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
), v = d.Symbol, B = V.splice, Q = T(d, "Map"), u = T(Object, "create"), C = v ? v.prototype : void 0, S = C ? C.toString : void 0;
function a(t) {
  var e = -1, r = t ? t.length : 0;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
function W() {
  this.__data__ = u ? u(null) : {};
}
function Z(t) {
  return this.has(t) && delete this.__data__[t];
}
function k(t) {
  var e = this.__data__;
  if (u) {
    var r = e[t];
    return r === O ? void 0 : r;
  }
  return _.call(e, t) ? e[t] : void 0;
}
function tt(t) {
  var e = this.__data__;
  return u ? e[t] !== void 0 : _.call(e, t);
}
function et(t, e) {
  var r = this.__data__;
  return r[t] = u && e === void 0 ? O : e, this;
}
a.prototype.clear = W;
a.prototype.delete = Z;
a.prototype.get = k;
a.prototype.has = tt;
a.prototype.set = et;
function i(t) {
  var e = -1, r = t ? t.length : 0;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
function rt() {
  this.__data__ = [];
}
function nt(t) {
  var e = this.__data__, r = h(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : B.call(e, r, 1), !0;
}
function at(t) {
  var e = this.__data__, r = h(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function ot(t) {
  return h(this.__data__, t) > -1;
}
function it(t, e) {
  var r = this.__data__, n = h(r, t);
  return n < 0 ? r.push([t, e]) : r[n][1] = e, this;
}
i.prototype.clear = rt;
i.prototype.delete = nt;
i.prototype.get = at;
i.prototype.has = ot;
i.prototype.set = it;
function o(t) {
  var e = -1, r = t ? t.length : 0;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
function ct() {
  this.__data__ = {
    hash: new a(),
    map: new (Q || i)(),
    string: new a()
  };
}
function st(t) {
  return p(this, t).delete(t);
}
function ut(t) {
  return p(this, t).get(t);
}
function ft(t) {
  return p(this, t).has(t);
}
function ht(t, e) {
  return p(this, t).set(t, e), this;
}
o.prototype.clear = ct;
o.prototype.delete = st;
o.prototype.get = ut;
o.prototype.has = ft;
o.prototype.set = ht;
function h(t, e) {
  for (var r = t.length; r--; )
    if (St(t[r][0], e))
      return r;
  return -1;
}
function pt(t, e) {
  e = yt(e, t) ? [e] : _t(e);
  for (var r = 0, n = e.length; t != null && r < n; )
    t = t[vt(e[r++])];
  return r && r == n ? t : void 0;
}
function lt(t) {
  if (!E(t) || bt(t))
    return !1;
  var e = Ot(t) || J(t) ? Y : L;
  return e.test(Ct(t));
}
function dt(t) {
  if (typeof t == "string")
    return t;
  if (g(t))
    return S ? S.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -j ? "-0" : e;
}
function _t(t) {
  return I(t) ? t : mt(t);
}
function p(t, e) {
  var r = t.__data__;
  return gt(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function T(t, e) {
  var r = q(t, e);
  return lt(r) ? r : void 0;
}
function yt(t, e) {
  if (I(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || g(t) ? !0 : G.test(t) || !H.test(t) || e != null && t in Object(e);
}
function gt(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function bt(t) {
  return !!m && m in t;
}
var mt = y(function(t) {
  t = wt(t);
  var e = [];
  return R.test(t) && e.push(""), t.replace(A, function(r, n, c, s) {
    e.push(c ? s.replace(K, "$1") : n || r);
  }), e;
});
function vt(t) {
  if (typeof t == "string" || g(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -j ? "-0" : e;
}
function Ct(t) {
  if (t != null) {
    try {
      return x.call(t);
    } catch (e) {
    }
    try {
      return t + "";
    } catch (e) {
    }
  }
  return "";
}
function y(t, e) {
  if (typeof t != "function" || e && typeof e != "function")
    throw new TypeError($);
  var r = function() {
    var n = arguments, c = e ? e.apply(this, n) : n[0], s = r.cache;
    if (s.has(c))
      return s.get(c);
    var b = t.apply(this, n);
    return r.cache = s.set(c, b), b;
  };
  return r.cache = new (y.Cache || o)(), r;
}
y.Cache = o;
function St(t, e) {
  return t === e || t !== t && e !== e;
}
var I = Array.isArray;
function Ot(t) {
  var e = E(t) ? P.call(t) : "";
  return e == D || e == N;
}
function E(t) {
  var e = typeof t;
  return !!t && (e == "object" || e == "function");
}
function jt(t) {
  return !!t && typeof t == "object";
}
function g(t) {
  return typeof t == "symbol" || jt(t) && P.call(t) == F;
}
function wt(t) {
  return t == null ? "" : dt(t);
}
function xt(t, e, r) {
  var n = t == null ? void 0 : pt(t, e);
  return n === void 0 ? r : n;
}
var Tt = xt;
export {
  Tt as lodash_get
};
