import { commonjsGlobal as P } from "../../_commonjsHelpers.js";
var M = {}, pe = {
  get exports() {
    return M;
  },
  set exports(g) {
    M = g;
  }
};
(function(g, G) {
  var Ut = 200, Y = "__lodash_hash_undefined__", Z = 9007199254740991, B = "[object Arguments]", $t = "[object Array]", Q = "[object Boolean]", z = "[object Date]", Kt = "[object Error]", R = "[object Function]", k = "[object GeneratorFunction]", A = "[object Map]", tt = "[object Number]", H = "[object Object]", rt = "[object Promise]", et = "[object RegExp]", S = "[object Set]", nt = "[object String]", ot = "[object Symbol]", L = "[object WeakMap]", at = "[object ArrayBuffer]", C = "[object DataView]", it = "[object Float32Array]", ct = "[object Float64Array]", st = "[object Int8Array]", ut = "[object Int16Array]", ft = "[object Int32Array]", lt = "[object Uint8Array]", ht = "[object Uint8ClampedArray]", pt = "[object Uint16Array]", dt = "[object Uint32Array]", Nt = /[\\^$.*+?()[\]{}|]/g, Vt = /\w*$/, Wt = /^\[object .+?Constructor\]$/, qt = /^(?:0|[1-9]\d*)$/, o = {};
  o[B] = o[$t] = o[at] = o[C] = o[Q] = o[z] = o[it] = o[ct] = o[st] = o[ut] = o[ft] = o[A] = o[tt] = o[H] = o[et] = o[S] = o[nt] = o[ot] = o[lt] = o[ht] = o[pt] = o[dt] = !0, o[Kt] = o[R] = o[L] = !1;
  var Jt = typeof P == "object" && P && P.Object === Object && P, Xt = typeof self == "object" && self && self.Object === Object && self, u = Jt || Xt || Function("return this")(), gt = G && !G.nodeType && G, _t = gt && !0 && g && !g.nodeType && g, Yt = _t && _t.exports === gt;
  function Zt(t, r) {
    return t.set(r[0], r[1]), t;
  }
  function Qt(t, r) {
    return t.add(r), t;
  }
  function zt(t, r) {
    for (var e = -1, n = t ? t.length : 0; ++e < n && r(t[e], e, t) !== !1; )
      ;
    return t;
  }
  function kt(t, r) {
    for (var e = -1, n = r.length, a = t.length; ++e < n; )
      t[a + e] = r[e];
    return t;
  }
  function bt(t, r, e, n) {
    var a = -1, i = t ? t.length : 0;
    for (n && i && (e = t[++a]); ++a < i; )
      e = r(e, t[a], a, t);
    return e;
  }
  function tr(t, r) {
    for (var e = -1, n = Array(t); ++e < t; )
      n[e] = r(e);
    return n;
  }
  function rr(t, r) {
    return t == null ? void 0 : t[r];
  }
  function yt(t) {
    var r = !1;
    if (t != null && typeof t.toString != "function")
      try {
        r = !!(t + "");
      } catch (e) {
      }
    return r;
  }
  function wt(t) {
    var r = -1, e = Array(t.size);
    return t.forEach(function(n, a) {
      e[++r] = [a, n];
    }), e;
  }
  function D(t, r) {
    return function(e) {
      return t(r(e));
    };
  }
  function vt(t) {
    var r = -1, e = Array(t.size);
    return t.forEach(function(n) {
      e[++r] = n;
    }), e;
  }
  var er = Array.prototype, nr = Function.prototype, O = Object.prototype, F = u["__core-js_shared__"], Tt = function() {
    var t = /[^.]+$/.exec(F && F.keys && F.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
  }(), At = nr.toString, l = O.hasOwnProperty, x = O.toString, or = RegExp(
    "^" + At.call(l).replace(Nt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), St = Yt ? u.Buffer : void 0, Ct = u.Symbol, Ot = u.Uint8Array, ar = D(Object.getPrototypeOf, Object), ir = Object.create, cr = O.propertyIsEnumerable, sr = er.splice, xt = Object.getOwnPropertySymbols, ur = St ? St.isBuffer : void 0, fr = D(Object.keys, Object), U = y(u, "DataView"), v = y(u, "Map"), $ = y(u, "Promise"), K = y(u, "Set"), N = y(u, "WeakMap"), T = y(Object, "create"), lr = d(U), hr = d(v), pr = d($), dr = d(K), gr = d(N), mt = Ct ? Ct.prototype : void 0, jt = mt ? mt.valueOf : void 0;
  function h(t) {
    var r = -1, e = t ? t.length : 0;
    for (this.clear(); ++r < e; ) {
      var n = t[r];
      this.set(n[0], n[1]);
    }
  }
  function _r() {
    this.__data__ = T ? T(null) : {};
  }
  function br(t) {
    return this.has(t) && delete this.__data__[t];
  }
  function yr(t) {
    var r = this.__data__;
    if (T) {
      var e = r[t];
      return e === Y ? void 0 : e;
    }
    return l.call(r, t) ? r[t] : void 0;
  }
  function wr(t) {
    var r = this.__data__;
    return T ? r[t] !== void 0 : l.call(r, t);
  }
  function vr(t, r) {
    var e = this.__data__;
    return e[t] = T && r === void 0 ? Y : r, this;
  }
  h.prototype.clear = _r, h.prototype.delete = br, h.prototype.get = yr, h.prototype.has = wr, h.prototype.set = vr;
  function f(t) {
    var r = -1, e = t ? t.length : 0;
    for (this.clear(); ++r < e; ) {
      var n = t[r];
      this.set(n[0], n[1]);
    }
  }
  function Tr() {
    this.__data__ = [];
  }
  function Ar(t) {
    var r = this.__data__, e = m(r, t);
    if (e < 0)
      return !1;
    var n = r.length - 1;
    return e == n ? r.pop() : sr.call(r, e, 1), !0;
  }
  function Sr(t) {
    var r = this.__data__, e = m(r, t);
    return e < 0 ? void 0 : r[e][1];
  }
  function Cr(t) {
    return m(this.__data__, t) > -1;
  }
  function Or(t, r) {
    var e = this.__data__, n = m(e, t);
    return n < 0 ? e.push([t, r]) : e[n][1] = r, this;
  }
  f.prototype.clear = Tr, f.prototype.delete = Ar, f.prototype.get = Sr, f.prototype.has = Cr, f.prototype.set = Or;
  function _(t) {
    var r = -1, e = t ? t.length : 0;
    for (this.clear(); ++r < e; ) {
      var n = t[r];
      this.set(n[0], n[1]);
    }
  }
  function xr() {
    this.__data__ = {
      hash: new h(),
      map: new (v || f)(),
      string: new h()
    };
  }
  function mr(t) {
    return j(this, t).delete(t);
  }
  function jr(t) {
    return j(this, t).get(t);
  }
  function Er(t) {
    return j(this, t).has(t);
  }
  function Ir(t, r) {
    return j(this, t).set(t, r), this;
  }
  _.prototype.clear = xr, _.prototype.delete = mr, _.prototype.get = jr, _.prototype.has = Er, _.prototype.set = Ir;
  function b(t) {
    this.__data__ = new f(t);
  }
  function Pr() {
    this.__data__ = new f();
  }
  function Mr(t) {
    return this.__data__.delete(t);
  }
  function Gr(t) {
    return this.__data__.get(t);
  }
  function Br(t) {
    return this.__data__.has(t);
  }
  function Rr(t, r) {
    var e = this.__data__;
    if (e instanceof f) {
      var n = e.__data__;
      if (!v || n.length < Ut - 1)
        return n.push([t, r]), this;
      e = this.__data__ = new _(n);
    }
    return e.set(t, r), this;
  }
  b.prototype.clear = Pr, b.prototype.delete = Mr, b.prototype.get = Gr, b.prototype.has = Br, b.prototype.set = Rr;
  function Hr(t, r) {
    var e = q(t) || ie(t) ? tr(t.length, String) : [], n = e.length, a = !!n;
    for (var i in t)
      (r || l.call(t, i)) && !(a && (i == "length" || ee(i, n))) && e.push(i);
    return e;
  }
  function Et(t, r, e) {
    var n = t[r];
    (!(l.call(t, r) && Gt(n, e)) || e === void 0 && !(r in t)) && (t[r] = e);
  }
  function m(t, r) {
    for (var e = t.length; e--; )
      if (Gt(t[e][0], r))
        return e;
    return -1;
  }
  function Lr(t, r) {
    return t && It(r, J(r), t);
  }
  function V(t, r, e, n, a, i, s) {
    var c;
    if (n && (c = i ? n(t, a, i, s) : n(t)), c !== void 0)
      return c;
    if (!E(t))
      return t;
    var Ht = q(t);
    if (Ht) {
      if (c = kr(t), !r)
        return Zr(t, c);
    } else {
      var w = p(t), Lt = w == R || w == k;
      if (se(t))
        return Nr(t, r);
      if (w == H || w == B || Lt && !i) {
        if (yt(t))
          return i ? t : {};
        if (c = te(Lt ? {} : t), !r)
          return Qr(t, Lr(c, t));
      } else {
        if (!o[w])
          return i ? t : {};
        c = re(t, w, V, r);
      }
    }
    s || (s = new b());
    var Dt = s.get(t);
    if (Dt)
      return Dt;
    if (s.set(t, c), !Ht)
      var Ft = e ? zr(t) : J(t);
    return zt(Ft || t, function(X, I) {
      Ft && (I = X, X = t[I]), Et(c, I, V(X, r, e, n, I, t, s));
    }), c;
  }
  function Dr(t) {
    return E(t) ? ir(t) : {};
  }
  function Fr(t, r, e) {
    var n = r(t);
    return q(t) ? n : kt(n, e(t));
  }
  function Ur(t) {
    return x.call(t);
  }
  function $r(t) {
    if (!E(t) || oe(t))
      return !1;
    var r = Rt(t) || yt(t) ? or : Wt;
    return r.test(d(t));
  }
  function Kr(t) {
    if (!Mt(t))
      return fr(t);
    var r = [];
    for (var e in Object(t))
      l.call(t, e) && e != "constructor" && r.push(e);
    return r;
  }
  function Nr(t, r) {
    if (r)
      return t.slice();
    var e = new t.constructor(t.length);
    return t.copy(e), e;
  }
  function W(t) {
    var r = new t.constructor(t.byteLength);
    return new Ot(r).set(new Ot(t)), r;
  }
  function Vr(t, r) {
    var e = r ? W(t.buffer) : t.buffer;
    return new t.constructor(e, t.byteOffset, t.byteLength);
  }
  function Wr(t, r, e) {
    var n = r ? e(wt(t), !0) : wt(t);
    return bt(n, Zt, new t.constructor());
  }
  function qr(t) {
    var r = new t.constructor(t.source, Vt.exec(t));
    return r.lastIndex = t.lastIndex, r;
  }
  function Jr(t, r, e) {
    var n = r ? e(vt(t), !0) : vt(t);
    return bt(n, Qt, new t.constructor());
  }
  function Xr(t) {
    return jt ? Object(jt.call(t)) : {};
  }
  function Yr(t, r) {
    var e = r ? W(t.buffer) : t.buffer;
    return new t.constructor(e, t.byteOffset, t.length);
  }
  function Zr(t, r) {
    var e = -1, n = t.length;
    for (r || (r = Array(n)); ++e < n; )
      r[e] = t[e];
    return r;
  }
  function It(t, r, e, n) {
    e || (e = {});
    for (var a = -1, i = r.length; ++a < i; ) {
      var s = r[a], c = n ? n(e[s], t[s], s, e, t) : void 0;
      Et(e, s, c === void 0 ? t[s] : c);
    }
    return e;
  }
  function Qr(t, r) {
    return It(t, Pt(t), r);
  }
  function zr(t) {
    return Fr(t, J, Pt);
  }
  function j(t, r) {
    var e = t.__data__;
    return ne(r) ? e[typeof r == "string" ? "string" : "hash"] : e.map;
  }
  function y(t, r) {
    var e = rr(t, r);
    return $r(e) ? e : void 0;
  }
  var Pt = xt ? D(xt, Object) : le, p = Ur;
  (U && p(new U(new ArrayBuffer(1))) != C || v && p(new v()) != A || $ && p($.resolve()) != rt || K && p(new K()) != S || N && p(new N()) != L) && (p = function(t) {
    var r = x.call(t), e = r == H ? t.constructor : void 0, n = e ? d(e) : void 0;
    if (n)
      switch (n) {
        case lr:
          return C;
        case hr:
          return A;
        case pr:
          return rt;
        case dr:
          return S;
        case gr:
          return L;
      }
    return r;
  });
  function kr(t) {
    var r = t.length, e = t.constructor(r);
    return r && typeof t[0] == "string" && l.call(t, "index") && (e.index = t.index, e.input = t.input), e;
  }
  function te(t) {
    return typeof t.constructor == "function" && !Mt(t) ? Dr(ar(t)) : {};
  }
  function re(t, r, e, n) {
    var a = t.constructor;
    switch (r) {
      case at:
        return W(t);
      case Q:
      case z:
        return new a(+t);
      case C:
        return Vr(t, n);
      case it:
      case ct:
      case st:
      case ut:
      case ft:
      case lt:
      case ht:
      case pt:
      case dt:
        return Yr(t, n);
      case A:
        return Wr(t, n, e);
      case tt:
      case nt:
        return new a(t);
      case et:
        return qr(t);
      case S:
        return Jr(t, n, e);
      case ot:
        return Xr(t);
    }
  }
  function ee(t, r) {
    return r = r == null ? Z : r, !!r && (typeof t == "number" || qt.test(t)) && t > -1 && t % 1 == 0 && t < r;
  }
  function ne(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  function oe(t) {
    return !!Tt && Tt in t;
  }
  function Mt(t) {
    var r = t && t.constructor, e = typeof r == "function" && r.prototype || O;
    return t === e;
  }
  function d(t) {
    if (t != null) {
      try {
        return At.call(t);
      } catch (r) {
      }
      try {
        return t + "";
      } catch (r) {
      }
    }
    return "";
  }
  function ae(t) {
    return V(t, !0, !0);
  }
  function Gt(t, r) {
    return t === r || t !== t && r !== r;
  }
  function ie(t) {
    return ce(t) && l.call(t, "callee") && (!cr.call(t, "callee") || x.call(t) == B);
  }
  var q = Array.isArray;
  function Bt(t) {
    return t != null && ue(t.length) && !Rt(t);
  }
  function ce(t) {
    return fe(t) && Bt(t);
  }
  var se = ur || he;
  function Rt(t) {
    var r = E(t) ? x.call(t) : "";
    return r == R || r == k;
  }
  function ue(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Z;
  }
  function E(t) {
    var r = typeof t;
    return !!t && (r == "object" || r == "function");
  }
  function fe(t) {
    return !!t && typeof t == "object";
  }
  function J(t) {
    return Bt(t) ? Hr(t) : Kr(t);
  }
  function le() {
    return [];
  }
  function he() {
    return !1;
  }
  g.exports = ae;
})(pe, M);
const ge = M;
export {
  ge as cloneDeep
};
