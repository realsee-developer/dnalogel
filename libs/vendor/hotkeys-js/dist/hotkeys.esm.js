const j = typeof navigator != "undefined" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : !1;
function A(e, t, i, n) {
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
  for (let r = 0; r < i.length; r++)
    n.indexOf(i[r]) === -1 && (s = !1);
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
  "-": j ? 173 : 189,
  "=": j ? 61 : 187,
  ";": j ? 59 : 186,
  "'": 222,
  "[": 219,
  "]": 221,
  "\\": 220
}, g = {
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
}, C = {
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
let f = [], E = null, z = "all";
const w = /* @__PURE__ */ new Map(), L = (e) => b[e.toLowerCase()] || g[e.toLowerCase()] || e.toUpperCase().charCodeAt(0), I = (e) => Object.keys(b).find((t) => b[t] === e), R = (e) => Object.keys(g).find((t) => g[t] === e);
function F(e) {
  z = e || "all";
}
function x() {
  return z || "all";
}
function V() {
  return f.slice(0);
}
function X() {
  return f.map((e) => I(e) || R(e) || String.fromCharCode(e));
}
function q() {
  const e = [];
  return Object.keys(c).forEach((t) => {
    c[t].forEach((i) => {
      let {
        key: n,
        scope: s,
        mods: r,
        shortcut: l
      } = i;
      e.push({
        scope: s,
        shortcut: l,
        mods: r,
        keys: n.split("+").map((o) => L(o))
      });
    });
  }), e;
}
function v(e) {
  const t = e.target || e.srcElement, {
    tagName: i
  } = t;
  let n = !0;
  const s = i === "INPUT" && !["checkbox", "radio", "range", "button", "file", "reset", "submit", "color"].includes(t.type);
  return (t.isContentEditable || (s || i === "TEXTAREA" || i === "SELECT") && !t.readOnly) && (n = !1), n;
}
function J(e) {
  return typeof e == "string" && (e = L(e)), f.indexOf(e) !== -1;
}
function Q(e, t) {
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
function W(e) {
  let t = e.keyCode || e.which || e.charCode;
  const i = f.indexOf(t);
  if (i >= 0 && f.splice(i, 1), e.key && e.key.toLowerCase() === "meta" && f.splice(0, f.length), (t === 93 || t === 224) && (t = 91), t in u) {
    u[t] = !1;
    for (const n in g)
      g[n] === t && (K[n] = !1);
  }
}
function G(e) {
  if (typeof e == "undefined")
    Object.keys(c).forEach((s) => {
      Array.isArray(c[s]) && c[s].forEach((r) => _(r)), delete c[s];
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
    let [s, r] = i;
    typeof s == "function" && (r = s, s = ""), _({
      key: e,
      scope: s,
      method: r,
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
    const o = l.split(s), a = o.length, y = o[a - 1], h = y === "*" ? "*" : L(y);
    if (!c[h])
      return;
    i || (i = x());
    const p = a > 1 ? B(g, o) : [], m = [];
    c[h] = c[h].filter((d) => {
      const k = (n ? d.method === n : !0) && d.scope === i && H(d.mods, p);
      return k && m.push(d.element), !k;
    }), m.forEach((d) => S(d));
  });
};
function T(e, t, i, n) {
  if (t.element !== n)
    return;
  let s;
  if (t.scope === i || t.scope === "all") {
    s = t.mods.length > 0;
    for (const r in u)
      Object.prototype.hasOwnProperty.call(u, r) && (!u[r] && t.mods.indexOf(+r) > -1 || u[r] && t.mods.indexOf(+r) === -1) && (s = !1);
    (t.mods.length === 0 && !u[16] && !u[18] && !u[17] && !u[91] || s || t.shortcut === "*") && (t.keys = [], t.keys = t.keys.concat(f), t.method(e, t) === !1 && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0)));
  }
}
function U(e, t) {
  const i = c["*"];
  let n = e.keyCode || e.which || e.charCode;
  if (!K.filter.call(this, e))
    return;
  if ((n === 93 || n === 224) && (n = 91), f.indexOf(n) === -1 && n !== 229 && f.push(n), ["metaKey", "ctrlKey", "altKey", "shiftKey"].forEach((o) => {
    const a = C[o];
    e[o] && f.indexOf(a) === -1 ? f.push(a) : !e[o] && f.indexOf(a) > -1 ? f.splice(f.indexOf(a), 1) : o === "metaKey" && e[o] && (f = f.filter((y) => y in C || y === n));
  }), n in u) {
    u[n] = !0;
    for (const o in g)
      g[o] === n && (K[o] = !0);
    if (!i)
      return;
  }
  for (const o in u)
    Object.prototype.hasOwnProperty.call(u, o) && (u[o] = e[C[o]]);
  e.getModifierState && !(e.altKey && !e.ctrlKey) && e.getModifierState("AltGraph") && (f.indexOf(17) === -1 && f.push(17), f.indexOf(18) === -1 && f.push(18), u[17] = !0, u[18] = !0);
  const s = x();
  if (i)
    for (let o = 0; o < i.length; o++)
      i[o].scope === s && (e.type === "keydown" && i[o].keydown || e.type === "keyup" && i[o].keyup) && T(e, i[o], s, t);
  if (!(n in c))
    return;
  const r = c[n], l = r.length;
  for (let o = 0; o < l; o++)
    if ((e.type === "keydown" && r[o].keydown || e.type === "keyup" && r[o].keyup) && r[o].key) {
      const a = r[o], {
        splitKey: y
      } = a, h = a.key.split(y), p = [];
      for (let m = 0; m < h.length; m++)
        p.push(L(h[m]));
      p.sort().join("") === f.sort().join("") && T(e, a, s, t);
    }
}
function K(e, t, i) {
  f = [];
  const n = D(e);
  let s = [], r = "all", l = document, o = 0, a = !1, y = !0, h = "+", p = !1, m = !1;
  for (i === void 0 && typeof t == "function" && (i = t), Object.prototype.toString.call(t) === "[object Object]" && (t.scope && (r = t.scope), t.element && (l = t.element), t.keyup && (a = t.keyup), t.keydown !== void 0 && (y = t.keydown), t.capture !== void 0 && (p = t.capture), typeof t.splitKey == "string" && (h = t.splitKey), t.single === !0 && (m = !0)), typeof t == "string" && (r = t), m && G(e, r); o < n.length; o++)
    e = n[o].split(h), s = [], e.length > 1 && (s = B(g, e)), e = e[e.length - 1], e = e === "*" ? "*" : L(e), e in c || (c[e] = []), c[e].push({
      keyup: a,
      keydown: y,
      scope: r,
      mods: s,
      shortcut: n[o],
      method: i,
      key: n[o],
      splitKey: h,
      element: l
    });
  if (typeof l != "undefined" && window) {
    if (!w.has(l)) {
      const d = function() {
        let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        return U(k, l);
      }, M = function() {
        let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        U(k, l), W(k);
      };
      w.set(l, {
        keydownListener: d,
        keyupListenr: M,
        capture: p
      }), A(l, "keydown", d, p), A(l, "keyup", M, p);
    }
    if (!E) {
      const d = () => {
        f = [];
      };
      E = {
        listener: d,
        capture: p
      }, A(window, "focus", d, p);
    }
  }
}
function Y(e) {
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
      capture: r
    } = w.get(e) || {};
    n && s && (O(e, "keyup", s, r), O(e, "keydown", n, r), w.delete(e));
  }
  if ((t.length <= 0 || w.size <= 0) && (Object.keys(w).forEach((s) => {
    const {
      keydownListener: r,
      keyupListenr: l,
      capture: o
    } = w.get(s) || {};
    r && l && (O(s, "keyup", l, o), O(s, "keydown", r, o), w.delete(s));
  }), w.clear(), Object.keys(c).forEach((s) => delete c[s]), E)) {
    const {
      listener: s,
      capture: r
    } = E;
    O(window, "focus", s, r), E = null;
  }
}
const P = {
  getPressedKeyString: X,
  setScope: F,
  getScope: x,
  deleteScope: Q,
  getPressedKeyCodes: V,
  getAllKeyCodes: q,
  isPressed: J,
  filter: v,
  trigger: Y,
  unbind: G,
  keyMap: b,
  modifier: g,
  modifierMap: C
};
for (const e in P)
  Object.prototype.hasOwnProperty.call(P, e) && (K[e] = P[e]);
if (typeof window != "undefined") {
  const e = window.hotkeys;
  K.noConflict = (t) => (t && window.hotkeys === K && (window.hotkeys = e), K), window.hotkeys = K;
}
export {
  K as hotkeys
};
