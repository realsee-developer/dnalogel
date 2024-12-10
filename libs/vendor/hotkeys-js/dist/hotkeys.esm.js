const M = typeof navigator != "undefined" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : !1;
function j(e, t, i, n) {
  e.addEventListener ? e.addEventListener(t, i, n) : e.attachEvent && e.attachEvent("on".concat(t), i);
}
function O(e, t, i, n) {
  e.removeEventListener ? e.removeEventListener(t, i, n) : e.detachEvent && e.detachEvent("on".concat(t), i);
}
function B(e, t) {
  const i = t.slice(0, t.length - 1);
  for (let n = 0; n < i.length; n++)
    i[n] = e[i[n].toLowerCase()];
  return i;
}
function D(e) {
  typeof e != "string" && (e = ""), e = e.replace(/\s/g, "");
  const t = e.split(",");
  let i = t.lastIndexOf("");
  for (; i >= 0; )
    t[i - 1] += ",", t.splice(i, 1), i = t.lastIndexOf("");
  return t;
}
function H(e, t) {
  const i = e.length >= t.length ? e : t, n = e.length >= t.length ? t : e;
  let s = !0;
  for (let f = 0; f < i.length; f++)
    n.indexOf(i[f]) === -1 && (s = !1);
  return s;
}
const b = {
  backspace: 8,
  "⌫": 8,
  tab: 9,
  clear: 12,
  enter: 13,
  "↩": 13,
  return: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  del: 46,
  delete: 46,
  ins: 45,
  insert: 45,
  home: 36,
  end: 35,
  pageup: 33,
  pagedown: 34,
  capslock: 20,
  num_0: 96,
  num_1: 97,
  num_2: 98,
  num_3: 99,
  num_4: 100,
  num_5: 101,
  num_6: 102,
  num_7: 103,
  num_8: 104,
  num_9: 105,
  num_multiply: 106,
  num_add: 107,
  num_enter: 108,
  num_subtract: 109,
  num_decimal: 110,
  num_divide: 111,
  "⇪": 20,
  ",": 188,
  ".": 190,
  "/": 191,
  "`": 192,
  "-": M ? 173 : 189,
  "=": M ? 61 : 187,
  ";": M ? 59 : 186,
  "'": 222,
  "[": 219,
  "]": 221,
  "\\": 220
}, h = {
  // shiftKey
  "⇧": 16,
  shift: 16,
  // altKey
  "⌥": 18,
  alt: 18,
  option: 18,
  // ctrlKey
  "⌃": 17,
  ctrl: 17,
  control: 17,
  // metaKey
  "⌘": 91,
  cmd: 91,
  command: 91
}, P = {
  16: "shiftKey",
  18: "altKey",
  17: "ctrlKey",
  91: "metaKey",
  shiftKey: 16,
  ctrlKey: 17,
  altKey: 18,
  metaKey: 91
}, u = {
  16: !1,
  18: !1,
  17: !1,
  91: !1
}, c = {};
for (let e = 1; e < 20; e++)
  b["f".concat(e)] = 111 + e;
let r = [], E = null, z = "all";
const m = /* @__PURE__ */ new Map(), L = (e) => b[e.toLowerCase()] || h[e.toLowerCase()] || e.toUpperCase().charCodeAt(0), I = (e) => Object.keys(b).find((t) => b[t] === e), R = (e) => Object.keys(h).find((t) => h[t] === e);
function F(e) {
  z = e || "all";
}
function x() {
  return z || "all";
}
function V() {
  return r.slice(0);
}
function X() {
  return r.map((e) => I(e) || R(e) || String.fromCharCode(e));
}
function q() {
  const e = [];
  return Object.keys(c).forEach((t) => {
    c[t].forEach((i) => {
      let {
        key: n,
        scope: s,
        mods: f,
        shortcut: l
      } = i;
      e.push({
        scope: s,
        shortcut: l,
        mods: f,
        keys: n.split("+").map((o) => L(o))
      });
    });
  }), e;
}
function J(e) {
  const t = e.target || e.srcElement, {
    tagName: i
  } = t;
  let n = !0;
  const s = i === "INPUT" && !["checkbox", "radio", "range", "button", "file", "reset", "submit", "color"].includes(t.type);
  return (t.isContentEditable || (s || i === "TEXTAREA" || i === "SELECT") && !t.readOnly) && (n = !1), n;
}
function Q(e) {
  return typeof e == "string" && (e = L(e)), r.indexOf(e) !== -1;
}
function W(e, t) {
  let i, n;
  e || (e = x());
  for (const s in c)
    if (Object.prototype.hasOwnProperty.call(c, s))
      for (i = c[s], n = 0; n < i.length; )
        i[n].scope === e ? i.splice(n, 1).forEach((l) => {
          let {
            element: o
          } = l;
          return S(o);
        }) : n++;
  x() === e && F(t || "all");
}
function Y(e) {
  let t = e.keyCode || e.which || e.charCode;
  const i = r.indexOf(t);
  if (i >= 0 && r.splice(i, 1), e.key && e.key.toLowerCase() === "meta" && r.splice(0, r.length), (t === 93 || t === 224) && (t = 91), t in u) {
    u[t] = !1;
    for (const n in h)
      h[n] === t && (w[n] = !1);
  }
}
function G(e) {
  if (typeof e == "undefined")
    Object.keys(c).forEach((s) => {
      Array.isArray(c[s]) && c[s].forEach((f) => _(f)), delete c[s];
    }), S(null);
  else if (Array.isArray(e))
    e.forEach((s) => {
      s.key && _(s);
    });
  else if (typeof e == "object")
    e.key && _(e);
  else if (typeof e == "string") {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      i[n - 1] = arguments[n];
    let [s, f] = i;
    typeof s == "function" && (f = s, s = ""), _({
      key: e,
      scope: s,
      method: f,
      splitKey: "+"
    });
  }
}
const _ = (e) => {
  let {
    key: t,
    scope: i,
    method: n,
    splitKey: s = "+"
  } = e;
  D(t).forEach((l) => {
    const o = l.split(s), a = o.length, K = o[a - 1], y = K === "*" ? "*" : L(K);
    if (!c[y])
      return;
    i || (i = x());
    const p = a > 1 ? B(h, o) : [], g = [];
    c[y] = c[y].filter((d) => {
      const k = (n ? d.method === n : !0) && d.scope === i && H(d.mods, p);
      return k && g.push(d.element), !k;
    }), g.forEach((d) => S(d));
  });
};
function T(e, t, i, n) {
  if (t.element !== n)
    return;
  let s;
  if (t.scope === i || t.scope === "all") {
    s = t.mods.length > 0;
    for (const f in u)
      Object.prototype.hasOwnProperty.call(u, f) && (!u[f] && t.mods.indexOf(+f) > -1 || u[f] && t.mods.indexOf(+f) === -1) && (s = !1);
    (t.mods.length === 0 && !u[16] && !u[18] && !u[17] && !u[91] || s || t.shortcut === "*") && (t.keys = [], t.keys = t.keys.concat(r), t.method(e, t) === !1 && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0)));
  }
}
function U(e, t) {
  const i = c["*"];
  let n = e.keyCode || e.which || e.charCode;
  if (!w.filter.call(this, e))
    return;
  if ((n === 93 || n === 224) && (n = 91), r.indexOf(n) === -1 && n !== 229 && r.push(n), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach((o) => {
    const a = P[o];
    e[o] && r.indexOf(a) === -1 ? r.push(a) : !e[o] && r.indexOf(a) > -1 ? r.splice(r.indexOf(a), 1) : o === "metaKey" && e[o] && r.length === 3 && (e.ctrlKey || e.shiftKey || e.altKey || (r = r.slice(r.indexOf(a))));
  }), n in u) {
    u[n] = !0;
    for (const o in h)
      h[o] === n && (w[o] = !0);
    if (!i)
      return;
  }
  for (const o in u)
    Object.prototype.hasOwnProperty.call(u, o) && (u[o] = e[P[o]]);
  e.getModifierState && !(e.altKey && !e.ctrlKey) && e.getModifierState("AltGraph") && (r.indexOf(17) === -1 && r.push(17), r.indexOf(18) === -1 && r.push(18), u[17] = !0, u[18] = !0);
  const s = x();
  if (i)
    for (let o = 0; o < i.length; o++)
      i[o].scope === s && (e.type === "keydown" && i[o].keydown || e.type === "keyup" && i[o].keyup) && T(e, i[o], s, t);
  if (!(n in c))
    return;
  const f = c[n], l = f.length;
  for (let o = 0; o < l; o++)
    if ((e.type === "keydown" && f[o].keydown || e.type === "keyup" && f[o].keyup) && f[o].key) {
      const a = f[o], {
        splitKey: K
      } = a, y = a.key.split(K), p = [];
      for (let g = 0; g < y.length; g++)
        p.push(L(y[g]));
      p.sort().join("") === r.sort().join("") && T(e, a, s, t);
    }
}
function w(e, t, i) {
  r = [];
  const n = D(e);
  let s = [], f = "all", l = document, o = 0, a = !1, K = !0, y = "+", p = !1, g = !1;
  for (i === void 0 && typeof t == "function" && (i = t), Object.prototype.toString.call(t) === "[object Object]" && (t.scope && (f = t.scope), t.element && (l = t.element), t.keyup && (a = t.keyup), t.keydown !== void 0 && (K = t.keydown), t.capture !== void 0 && (p = t.capture), typeof t.splitKey == "string" && (y = t.splitKey), t.single === !0 && (g = !0)), typeof t == "string" && (f = t), g && G(e, f); o < n.length; o++)
    e = n[o].split(y), s = [], e.length > 1 && (s = B(h, e)), e = e[e.length - 1], e = e === "*" ? "*" : L(e), e in c || (c[e] = []), c[e].push({
      keyup: a,
      keydown: K,
      scope: f,
      mods: s,
      shortcut: n[o],
      method: i,
      key: n[o],
      splitKey: y,
      element: l
    });
  if (typeof l != "undefined" && window) {
    if (!m.has(l)) {
      const d = function() {
        let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        return U(k, l);
      }, C = function() {
        let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        U(k, l), Y(k);
      };
      m.set(l, {
        keydownListener: d,
        keyupListenr: C,
        capture: p
      }), j(l, "keydown", d, p), j(l, "keyup", C, p);
    }
    if (!E) {
      const d = () => {
        r = [];
      };
      E = {
        listener: d,
        capture: p
      }, j(window, "focus", d, p);
    }
  }
}
function Z(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(c).forEach((i) => {
    c[i].filter((s) => s.scope === t && s.shortcut === e).forEach((s) => {
      s && s.method && s.method();
    });
  });
}
function S(e) {
  const t = Object.values(c).flat();
  if (t.findIndex((n) => {
    let {
      element: s
    } = n;
    return s === e;
  }) < 0) {
    const {
      keydownListener: n,
      keyupListenr: s,
      capture: f
    } = m.get(e) || {};
    n && s && (O(e, "keyup", s, f), O(e, "keydown", n, f), m.delete(e));
  }
  if ((t.length <= 0 || m.size <= 0) && (Object.keys(m).forEach((s) => {
    const {
      keydownListener: f,
      keyupListenr: l,
      capture: o
    } = m.get(s) || {};
    f && l && (O(s, "keyup", l, o), O(s, "keydown", f, o), m.delete(s));
  }), m.clear(), Object.keys(c).forEach((s) => delete c[s]), E)) {
    const {
      listener: s,
      capture: f
    } = E;
    O(window, "focus", s, f), E = null;
  }
}
const A = {
  getPressedKeyString: X,
  setScope: F,
  getScope: x,
  deleteScope: W,
  getPressedKeyCodes: V,
  getAllKeyCodes: q,
  isPressed: Q,
  filter: J,
  trigger: Z,
  unbind: G,
  keyMap: b,
  modifier: h,
  modifierMap: P
};
for (const e in A)
  Object.prototype.hasOwnProperty.call(A, e) && (w[e] = A[e]);
if (typeof window != "undefined") {
  const e = window.hotkeys;
  w.noConflict = (t) => (t && window.hotkeys === w && (window.hotkeys = e), w), window.hotkeys = w;
}
export {
  w as hotkeys
};
