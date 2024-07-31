function N() {
}
const Z = (t) => t;
function kt(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function xt(t) {
  return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function";
}
function at(t) {
  return t();
}
function ut() {
  return /* @__PURE__ */ Object.create(null);
}
function M(t) {
  t.forEach(at);
}
function L(t) {
  return typeof t == "function";
}
function Ft(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let F;
function Wt(t, e) {
  return F || (F = document.createElement("a")), F.href = e, t === F.href;
}
function Et(t) {
  return Object.keys(t).length === 0;
}
function Bt(t, e, n, i) {
  if (t) {
    const r = dt(t, e, n, i);
    return t[0](r);
  }
}
function dt(t, e, n, i) {
  return t[1] && i ? kt(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Ht(t, e, n, i) {
  if (t[2] && i) {
    const r = t[2](i(n));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const s = [], c = Math.max(e.dirty.length, r.length);
      for (let o = 0; o < c; o += 1)
        s[o] = e.dirty[o] | r[o];
      return s;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function It(t, e, n, i, r, s) {
  if (r) {
    const c = dt(e, n, i, s);
    t.p(c, r);
  }
}
function Ut(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function Gt(t) {
  return t == null ? "" : t;
}
function Jt(t) {
  return t && L(t.destroy) ? t.destroy : N;
}
function Kt(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [t, "px"];
}
const ht = typeof window != "undefined";
let tt = ht ? () => window.performance.now() : () => Date.now(), et = ht ? (t) => requestAnimationFrame(t) : N;
const j = /* @__PURE__ */ new Set();
function _t(t) {
  j.forEach((e) => {
    e.c(t) || (j.delete(e), e.f());
  }), j.size !== 0 && et(_t);
}
function nt(t) {
  let e;
  return j.size === 0 && et(_t), {
    promise: new Promise((n) => {
      j.add(e = { c: t, f: n });
    }),
    abort() {
      j.delete(e);
    }
  };
}
function pt(t, e) {
  t.appendChild(e);
}
function Qt(t, e, n) {
  const i = it(t);
  if (!i.getElementById(e)) {
    const r = K("style");
    r.id = e, r.textContent = n, mt(i, r);
  }
}
function it(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function vt(t) {
  const e = K("style");
  return mt(it(t), e), e.sheet;
}
function mt(t, e) {
  return pt(t.head || t, e), e.sheet;
}
function Nt(t, e, n) {
  t.insertBefore(e, n || null);
}
function J(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Vt(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function K(t) {
  return document.createElement(t);
}
function Mt(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function gt(t) {
  return document.createTextNode(t);
}
function Xt() {
  return gt(" ");
}
function Yt() {
  return gt("");
}
function lt(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function Zt(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function te(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function At(t) {
  return Array.from(t.childNodes);
}
function ee(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function ne(t, e, n, i) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "");
}
let W;
function Tt() {
  if (W === void 0) {
    W = !1;
    try {
      typeof window != "undefined" && window.parent && window.parent.document;
    } catch (t) {
      W = !0;
    }
  }
  return W;
}
function ie(t, e) {
  getComputedStyle(t).position === "static" && (t.style.position = "relative");
  const i = K("iframe");
  i.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), i.setAttribute("aria-hidden", "true"), i.tabIndex = -1;
  const r = Tt();
  let s;
  return r ? (i.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", s = lt(window, "message", (c) => {
    c.source === i.contentWindow && e();
  })) : (i.src = "about:blank", i.onload = () => {
    s = lt(i.contentWindow, "resize", e), e();
  }), pt(t, i), () => {
    (r || s && i.contentWindow) && s(), J(i);
  };
}
function re(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function yt(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(t, n, i, e), r;
}
class se {
  constructor(e = !1) {
    this.is_svg = !1, this.is_svg = e, this.e = this.n = null;
  }
  c(e) {
    this.h(e);
  }
  m(e, n, i = null) {
    this.e || (this.is_svg ? this.e = Mt(n.nodeName) : this.e = K(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(e)), this.i(i);
  }
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes);
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1)
      Nt(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(J);
  }
}
const H = /* @__PURE__ */ new Map();
let I = 0;
function Ct(t) {
  let e = 5381, n = t.length;
  for (; n--; )
    e = (e << 5) - e ^ t.charCodeAt(n);
  return e >>> 0;
}
function Pt(t, e) {
  const n = { stylesheet: vt(e), rules: {} };
  return H.set(t, n), n;
}
function U(t, e, n, i, r, s, c, o = 0) {
  const l = 16.666 / i;
  let u = `{
`;
  for (let p = 0; p <= 1; p += l) {
    const y = e + (n - e) * s(p);
    u += p * 100 + `%{${c(y, 1 - y)}}
`;
  }
  const _ = u + `100% {${c(n, 1 - n)}}
}`, a = `__svelte_${Ct(_)}_${o}`, d = it(t), { stylesheet: f, rules: h } = H.get(d) || Pt(d, t);
  h[a] || (h[a] = !0, f.insertRule(`@keyframes ${a} ${_}`, f.cssRules.length));
  const m = t.style.animation || "";
  return t.style.animation = `${m ? `${m}, ` : ""}${a} ${i}ms linear ${r}ms 1 both`, I += 1, a;
}
function G(t, e) {
  const n = (t.style.animation || "").split(", "), i = n.filter(
    e ? (s) => s.indexOf(e) < 0 : (s) => s.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), r = n.length - i.length;
  r && (t.style.animation = i.join(", "), I -= r, I || jt());
}
function jt() {
  et(() => {
    I || (H.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && J(e);
    }), H.clear());
  });
}
let D;
function v(t) {
  D = t;
}
function A() {
  if (!D)
    throw new Error("Function called outside component initialization");
  return D;
}
function oe(t) {
  A().$$.before_update.push(t);
}
function ce(t) {
  A().$$.on_mount.push(t);
}
function ue(t) {
  A().$$.after_update.push(t);
}
function le(t) {
  A().$$.on_destroy.push(t);
}
function fe() {
  const t = A();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const s = yt(e, n, { cancelable: i });
      return r.slice().forEach((c) => {
        c.call(t, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function ae(t, e) {
  return A().$$.context.set(t, e), e;
}
function de(t) {
  return A().$$.context.get(t);
}
function he(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const P = [], ft = [];
let S = [];
const X = [], bt = /* @__PURE__ */ Promise.resolve();
let Y = !1;
function wt() {
  Y || (Y = !0, bt.then(rt));
}
function _e() {
  return wt(), bt;
}
function z(t) {
  S.push(t);
}
function pe(t) {
  X.push(t);
}
const V = /* @__PURE__ */ new Set();
let C = 0;
function rt() {
  if (C !== 0)
    return;
  const t = D;
  do {
    try {
      for (; C < P.length; ) {
        const e = P[C];
        C++, v(e), St(e.$$);
      }
    } catch (e) {
      throw P.length = 0, C = 0, e;
    }
    for (v(null), P.length = 0, C = 0; ft.length; )
      ft.pop()();
    for (let e = 0; e < S.length; e += 1) {
      const n = S[e];
      V.has(n) || (V.add(n), n());
    }
    S.length = 0;
  } while (P.length);
  for (; X.length; )
    X.pop()();
  Y = !1, V.clear(), v(t);
}
function St(t) {
  if (t.fragment !== null) {
    t.update(), M(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(z);
  }
}
function zt(t) {
  const e = [], n = [];
  S.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), S = e;
}
let O;
function st() {
  return O || (O = Promise.resolve(), O.then(() => {
    O = null;
  })), O;
}
function T(t, e, n) {
  t.dispatchEvent(yt(`${e ? "intro" : "outro"}${n}`));
}
const B = /* @__PURE__ */ new Set();
let x;
function Lt() {
  x = {
    r: 0,
    c: [],
    p: x
    // parent group
  };
}
function Ot() {
  x.r || M(x.c), x = x.p;
}
function ot(t, e) {
  t && t.i && (B.delete(t), t.i(e));
}
function $t(t, e, n, i) {
  if (t && t.o) {
    if (B.has(t))
      return;
    B.add(t), x.c.push(() => {
      B.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
const ct = { duration: 0 };
function me(t, e, n) {
  const i = { direction: "in" };
  let r = e(t, n, i), s = !1, c, o, l = 0;
  function u() {
    c && G(t, c);
  }
  function _() {
    const { delay: d = 0, duration: f = 300, easing: h = Z, tick: m = N, css: p } = r || ct;
    p && (c = U(t, 0, 1, f, d, h, p, l++)), m(0, 1);
    const y = tt() + d, E = y + f;
    o && o.abort(), s = !0, z(() => T(t, !0, "start")), o = nt((b) => {
      if (s) {
        if (b >= E)
          return m(1, 0), T(t, !0, "end"), u(), s = !1;
        if (b >= y) {
          const w = h((b - y) / f);
          m(w, 1 - w);
        }
      }
      return s;
    });
  }
  let a = !1;
  return {
    start() {
      a || (a = !0, G(t), L(r) ? (r = r(i), st().then(_)) : _());
    },
    invalidate() {
      a = !1;
    },
    end() {
      s && (u(), s = !1);
    }
  };
}
function ge(t, e, n) {
  const i = { direction: "out" };
  let r = e(t, n, i), s = !0, c;
  const o = x;
  o.r += 1;
  function l() {
    const { delay: u = 0, duration: _ = 300, easing: a = Z, tick: d = N, css: f } = r || ct;
    f && (c = U(t, 1, 0, _, u, a, f));
    const h = tt() + u, m = h + _;
    z(() => T(t, !1, "start")), nt((p) => {
      if (s) {
        if (p >= m)
          return d(0, 1), T(t, !1, "end"), --o.r || M(o.c), !1;
        if (p >= h) {
          const y = a((p - h) / _);
          d(1 - y, y);
        }
      }
      return s;
    });
  }
  return L(r) ? st().then(() => {
    r = r(i), l();
  }) : l(), {
    end(u) {
      u && r.tick && r.tick(1, 0), s && (c && G(t, c), s = !1);
    }
  };
}
function ye(t, e, n, i) {
  const r = { direction: "both" };
  let s = e(t, n, r), c = i ? 0 : 1, o = null, l = null, u = null;
  function _() {
    u && G(t, u);
  }
  function a(f, h) {
    const m = f.b - c;
    return h *= Math.abs(m), {
      a: c,
      b: f.b,
      d: m,
      duration: h,
      start: f.start,
      end: f.start + h,
      group: f.group
    };
  }
  function d(f) {
    const { delay: h = 0, duration: m = 300, easing: p = Z, tick: y = N, css: E } = s || ct, b = {
      start: tt() + h,
      b: f
    };
    f || (b.group = x, x.r += 1), o || l ? l = b : (E && (_(), u = U(t, c, f, m, h, p, E)), f && y(0, 1), o = a(b, m), z(() => T(t, f, "start")), nt((w) => {
      if (l && w > l.start && (o = a(l, m), l = null, T(t, o.b, "start"), E && (_(), u = U(t, c, o.b, o.duration, 0, p, s.css))), o) {
        if (w >= o.end)
          y(c = o.b, 1 - c), T(t, o.b, "end"), l || (o.b ? _() : --o.group.r || M(o.group.c)), o = null;
        else if (w >= o.start) {
          const R = w - o.start;
          c = o.a + o.d * p(R / o.duration), y(c, 1 - c);
        }
      }
      return !!(o || l);
    }));
  }
  return {
    run(f) {
      L(s) ? st().then(() => {
        s = s(r), d(f);
      }) : d(f);
    },
    end() {
      _(), o = l = null;
    }
  };
}
function be(t, e) {
  const n = e.token = {};
  function i(r, s, c, o) {
    if (e.token !== n)
      return;
    e.resolved = o;
    let l = e.ctx;
    c !== void 0 && (l = l.slice(), l[c] = o);
    const u = r && (e.current = r)(l);
    let _ = !1;
    e.block && (e.blocks ? e.blocks.forEach((a, d) => {
      d !== s && a && (Lt(), $t(a, 1, 1, () => {
        e.blocks[d] === a && (e.blocks[d] = null);
      }), Ot());
    }) : e.block.d(1), u.c(), ot(u, 1), u.m(e.mount(), e.anchor), _ = !0), e.block = u, e.blocks && (e.blocks[s] = u), _ && rt();
  }
  if (xt(t)) {
    const r = A();
    if (t.then((s) => {
      v(r), i(e.then, 1, e.value, s), v(null);
    }, (s) => {
      if (v(r), i(e.catch, 2, e.error, s), v(null), !e.hasCatch)
        throw s;
    }), e.current !== e.pending)
      return i(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return i(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function we(t, e, n) {
  const i = e.slice(), { resolved: r } = t;
  t.current === t.then && (i[t.value] = r), t.current === t.catch && (i[t.error] = r), t.block.p(i, n);
}
const $e = typeof window != "undefined" ? window : typeof globalThis != "undefined" ? globalThis : global;
function ke(t, e) {
  t.d(1), e.delete(t.key);
}
function xe(t, e) {
  $t(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function Ee(t, e, n, i, r, s, c, o, l, u, _, a) {
  let d = t.length, f = s.length, h = d;
  const m = {};
  for (; h--; )
    m[t[h].key] = h;
  const p = [], y = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), b = [];
  for (h = f; h--; ) {
    const g = a(r, s, h), $ = n(g);
    let k = c.get($);
    k ? i && b.push(() => k.p(g, e)) : (k = u($, g), k.c()), y.set($, p[h] = k), $ in m && E.set($, Math.abs(h - m[$]));
  }
  const w = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set();
  function Q(g) {
    ot(g, 1), g.m(o, _), c.set(g.key, g), _ = g.first, f--;
  }
  for (; d && f; ) {
    const g = p[f - 1], $ = t[d - 1], k = g.key, q = $.key;
    g === $ ? (_ = g.first, d--, f--) : y.has(q) ? !c.has(k) || w.has(k) ? Q(g) : R.has(q) ? d-- : E.get(k) > E.get(q) ? (R.add(k), Q(g)) : (w.add(q), d--) : (l($, c), d--);
  }
  for (; d--; ) {
    const g = t[d];
    y.has(g.key) || l(g, c);
  }
  for (; f; )
    Q(p[f - 1]);
  return M(b), p;
}
function ve(t, e) {
  const n = {}, i = {}, r = { $$scope: 1 };
  let s = t.length;
  for (; s--; ) {
    const c = t[s], o = e[s];
    if (o) {
      for (const l in c)
        l in o || (i[l] = 1);
      for (const l in o)
        r[l] || (n[l] = o[l], r[l] = 1);
      t[s] = o;
    } else
      for (const l in c)
        r[l] = 1;
  }
  for (const c in i)
    c in n || (n[c] = void 0);
  return n;
}
function Ne(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Me(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function Ae(t) {
  t && t.c();
}
function Dt(t, e, n, i) {
  const { fragment: r, after_update: s } = t.$$;
  r && r.m(e, n), i || z(() => {
    const c = t.$$.on_mount.map(at).filter(L);
    t.$$.on_destroy ? t.$$.on_destroy.push(...c) : M(c), t.$$.on_mount = [];
  }), s.forEach(z);
}
function Rt(t, e) {
  const n = t.$$;
  n.fragment !== null && (zt(n.after_update), M(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function qt(t, e) {
  t.$$.dirty[0] === -1 && (P.push(t), wt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Te(t, e, n, i, r, s, c, o = [-1]) {
  const l = D;
  v(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: N,
    not_equal: r,
    bound: ut(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: ut(),
    dirty: o,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  c && c(u.root);
  let _ = !1;
  if (u.ctx = n ? n(t, e.props || {}, (a, d, ...f) => {
    const h = f.length ? f[0] : d;
    return u.ctx && r(u.ctx[a], u.ctx[a] = h) && (!u.skip_bound && u.bound[a] && u.bound[a](h), _ && qt(t, a)), d;
  }) : [], u.update(), _ = !0, M(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = At(e.target);
      u.fragment && u.fragment.l(a), a.forEach(J);
    } else
      u.fragment && u.fragment.c();
    e.intro && ot(t.$$.fragment), Dt(t, e.target, e.anchor, e.customElement), rt();
  }
  v(l);
}
class Ce {
  $destroy() {
    Rt(this, 1), this.$destroy = N;
  }
  $on(e, n) {
    if (!L(n))
      return N;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  $set(e) {
    this.$$set && !Et(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
export {
  se as HtmlTag,
  Ce as SvelteComponent,
  Jt as action_destroyer,
  pe as add_flush_callback,
  z as add_render_callback,
  ie as add_resize_listener,
  ue as afterUpdate,
  pt as append,
  Qt as append_styles,
  kt as assign,
  te as attr,
  oe as beforeUpdate,
  Me as bind,
  ft as binding_callbacks,
  he as bubble,
  Ot as check_outros,
  fe as createEventDispatcher,
  ye as create_bidirectional_transition,
  Ae as create_component,
  me as create_in_transition,
  ge as create_out_transition,
  Bt as create_slot,
  ke as destroy_block,
  Rt as destroy_component,
  Vt as destroy_each,
  J as detach,
  K as element,
  Yt as empty,
  de as getContext,
  Ut as get_all_dirty_from_scope,
  Ht as get_slot_changes,
  Ne as get_spread_object,
  ve as get_spread_update,
  $e as globals,
  Lt as group_outros,
  be as handle_promise,
  Z as identity,
  Te as init,
  Nt as insert,
  L as is_function,
  lt as listen,
  Dt as mount_component,
  N as noop,
  Gt as null_to_empty,
  le as onDestroy,
  ce as onMount,
  xe as outro_and_destroy_block,
  M as run_all,
  Ft as safe_not_equal,
  ae as setContext,
  ee as set_data,
  ne as set_style,
  Xt as space,
  Kt as split_css_unit,
  Wt as src_url_equal,
  Zt as stop_propagation,
  Mt as svg_element,
  gt as text,
  _e as tick,
  re as toggle_class,
  ot as transition_in,
  $t as transition_out,
  we as update_await_block_branch,
  Ee as update_keyed_each,
  It as update_slot_base
};
