var pr = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: "normal",
  autoplay: !0,
  timelineOffset: 0
}, Y = {
  duration: 1e3,
  delay: 0,
  endDelay: 0,
  easing: "easeOutElastic(1, .5)",
  round: 0
}, Fr = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"], U = {
  CSS: {},
  springs: {}
};
function D(r, e, n) {
  return Math.min(Math.max(r, e), n);
}
function R(r, e) {
  return r.indexOf(e) > -1;
}
function K(r, e) {
  return r.apply(null, e);
}
var c = {
  arr: function(r) {
    return Array.isArray(r);
  },
  obj: function(r) {
    return R(Object.prototype.toString.call(r), "Object");
  },
  pth: function(r) {
    return c.obj(r) && r.hasOwnProperty("totalLength");
  },
  svg: function(r) {
    return r instanceof SVGElement;
  },
  inp: function(r) {
    return r instanceof HTMLInputElement;
  },
  dom: function(r) {
    return r.nodeType || c.svg(r);
  },
  str: function(r) {
    return typeof r == "string";
  },
  fnc: function(r) {
    return typeof r == "function";
  },
  und: function(r) {
    return typeof r == "undefined";
  },
  nil: function(r) {
    return c.und(r) || r === null;
  },
  hex: function(r) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r);
  },
  rgb: function(r) {
    return /^rgb/.test(r);
  },
  hsl: function(r) {
    return /^hsl/.test(r);
  },
  col: function(r) {
    return c.hex(r) || c.rgb(r) || c.hsl(r);
  },
  key: function(r) {
    return !pr.hasOwnProperty(r) && !Y.hasOwnProperty(r) && r !== "targets" && r !== "keyframes";
  }
};
function mr(r) {
  var e = /\(([^)]+)\)/.exec(r);
  return e ? e[1].split(",").map(function(n) {
    return parseFloat(n);
  }) : [];
}
function yr(r, e) {
  var n = mr(r), a = D(c.und(n[0]) ? 1 : n[0], 0.1, 100), t = D(c.und(n[1]) ? 100 : n[1], 0.1, 100), u = D(c.und(n[2]) ? 10 : n[2], 0.1, 100), o = D(c.und(n[3]) ? 0 : n[3], 0.1, 100), f = Math.sqrt(t / a), i = u / (2 * Math.sqrt(t * a)), p = i < 1 ? f * Math.sqrt(1 - i * i) : 0, s = 1, l = i < 1 ? (i * f + -o) / p : -o + f;
  function h(m) {
    var v = e ? e * m / 1e3 : m;
    return i < 1 ? v = Math.exp(-v * i * f) * (s * Math.cos(p * v) + l * Math.sin(p * v)) : v = (s + l * v) * Math.exp(-v * f), m === 0 || m === 1 ? m : 1 - v;
  }
  function w() {
    var m = U.springs[r];
    if (m)
      return m;
    for (var v = 1 / 6, y = 0, M = 0; ; )
      if (y += v, h(y) === 1) {
        if (M++, M >= 16)
          break;
      } else
        M = 0;
    var g = y * v * 1e3;
    return U.springs[r] = g, g;
  }
  return e ? h : w;
}
function Vr(r) {
  return r === void 0 && (r = 10), function(e) {
    return Math.ceil(D(e, 1e-6, 1) * r) * (1 / r);
  };
}
var jr = function() {
  var r = 11, e = 1 / (r - 1);
  function n(s, l) {
    return 1 - 3 * l + 3 * s;
  }
  function a(s, l) {
    return 3 * l - 6 * s;
  }
  function t(s) {
    return 3 * s;
  }
  function u(s, l, h) {
    return ((n(l, h) * s + a(l, h)) * s + t(l)) * s;
  }
  function o(s, l, h) {
    return 3 * n(l, h) * s * s + 2 * a(l, h) * s + t(l);
  }
  function f(s, l, h, w, m) {
    var v, y, M = 0;
    do
      y = l + (h - l) / 2, v = u(y, w, m) - s, v > 0 ? h = y : l = y;
    while (Math.abs(v) > 1e-7 && ++M < 10);
    return y;
  }
  function i(s, l, h, w) {
    for (var m = 0; m < 4; ++m) {
      var v = o(l, h, w);
      if (v === 0)
        return l;
      var y = u(l, h, w) - s;
      l -= y / v;
    }
    return l;
  }
  function p(s, l, h, w) {
    if (!(0 <= s && s <= 1 && 0 <= h && h <= 1))
      return;
    var m = new Float32Array(r);
    if (s !== l || h !== w)
      for (var v = 0; v < r; ++v)
        m[v] = u(v * e, s, h);
    function y(M) {
      for (var g = 0, d = 1, P = r - 1; d !== P && m[d] <= M; ++d)
        g += e;
      --d;
      var E = (M - m[d]) / (m[d + 1] - m[d]), b = g + E * e, S = o(b, s, h);
      return S >= 1e-3 ? i(M, b, s, h) : S === 0 ? b : f(M, g, g + e, s, h);
    }
    return function(M) {
      return s === l && h === w || M === 0 || M === 1 ? M : u(y(M), l, w);
    };
  }
  return p;
}(), br = function() {
  var r = { linear: function() {
    return function(a) {
      return a;
    };
  } }, e = {
    Sine: function() {
      return function(a) {
        return 1 - Math.cos(a * Math.PI / 2);
      };
    },
    Expo: function() {
      return function(a) {
        return a ? Math.pow(2, 10 * a - 10) : 0;
      };
    },
    Circ: function() {
      return function(a) {
        return 1 - Math.sqrt(1 - a * a);
      };
    },
    Back: function() {
      return function(a) {
        return a * a * (3 * a - 2);
      };
    },
    Bounce: function() {
      return function(a) {
        for (var t, u = 4; a < ((t = Math.pow(2, --u)) - 1) / 11; )
          ;
        return 1 / Math.pow(4, 3 - u) - 7.5625 * Math.pow((t * 3 - 2) / 22 - a, 2);
      };
    },
    Elastic: function(a, t) {
      a === void 0 && (a = 1), t === void 0 && (t = 0.5);
      var u = D(a, 1, 10), o = D(t, 0.1, 2);
      return function(f) {
        return f === 0 || f === 1 ? f : -u * Math.pow(2, 10 * (f - 1)) * Math.sin((f - 1 - o / (Math.PI * 2) * Math.asin(1 / u)) * (Math.PI * 2) / o);
      };
    }
  }, n = ["Quad", "Cubic", "Quart", "Quint"];
  return n.forEach(function(a, t) {
    e[a] = function() {
      return function(u) {
        return Math.pow(u, t + 2);
      };
    };
  }), Object.keys(e).forEach(function(a) {
    var t = e[a];
    r["easeIn" + a] = t, r["easeOut" + a] = function(u, o) {
      return function(f) {
        return 1 - t(u, o)(1 - f);
      };
    }, r["easeInOut" + a] = function(u, o) {
      return function(f) {
        return f < 0.5 ? t(u, o)(f * 2) / 2 : 1 - t(u, o)(f * -2 + 2) / 2;
      };
    }, r["easeOutIn" + a] = function(u, o) {
      return function(f) {
        return f < 0.5 ? (1 - t(u, o)(1 - f * 2)) / 2 : (t(u, o)(f * 2 - 1) + 1) / 2;
      };
    };
  }), r;
}();
function G(r, e) {
  if (c.fnc(r))
    return r;
  var n = r.split("(")[0], a = br[n], t = mr(r);
  switch (n) {
    case "spring":
      return yr(r, e);
    case "cubicBezier":
      return K(jr, t);
    case "steps":
      return K(Vr, t);
    default:
      return K(a, t);
  }
}
function xr(r) {
  try {
    var e = document.querySelectorAll(r);
    return e;
  } catch (n) {
    return;
  }
}
function W(r, e) {
  for (var n = r.length, a = arguments.length >= 2 ? arguments[1] : void 0, t = [], u = 0; u < n; u++)
    if (u in r) {
      var o = r[u];
      e.call(a, o, u, r) && t.push(o);
    }
  return t;
}
function q(r) {
  return r.reduce(function(e, n) {
    return e.concat(c.arr(n) ? q(n) : n);
  }, []);
}
function lr(r) {
  return c.arr(r) ? r : (c.str(r) && (r = xr(r) || r), r instanceof NodeList || r instanceof HTMLCollection ? [].slice.call(r) : [r]);
}
function X(r, e) {
  return r.some(function(n) {
    return n === e;
  });
}
function rr(r) {
  var e = {};
  for (var n in r)
    e[n] = r[n];
  return e;
}
function _(r, e) {
  var n = rr(r);
  for (var a in r)
    n[a] = e.hasOwnProperty(a) ? e[a] : r[a];
  return n;
}
function N(r, e) {
  var n = rr(r);
  for (var a in e)
    n[a] = c.und(r[a]) ? e[a] : r[a];
  return n;
}
function zr(r) {
  var e = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);
  return e ? "rgba(" + e[1] + ",1)" : r;
}
function Rr(r) {
  var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, n = r.replace(e, function(f, i, p, s) {
    return i + i + p + p + s + s;
  }), a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n), t = parseInt(a[1], 16), u = parseInt(a[2], 16), o = parseInt(a[3], 16);
  return "rgba(" + t + "," + u + "," + o + ",1)";
}
function Hr(r) {
  var e = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r), n = parseInt(e[1], 10) / 360, a = parseInt(e[2], 10) / 100, t = parseInt(e[3], 10) / 100, u = e[4] || 1;
  function o(h, w, m) {
    return m < 0 && (m += 1), m > 1 && (m -= 1), m < 1 / 6 ? h + (w - h) * 6 * m : m < 1 / 2 ? w : m < 2 / 3 ? h + (w - h) * (2 / 3 - m) * 6 : h;
  }
  var f, i, p;
  if (a == 0)
    f = i = p = t;
  else {
    var s = t < 0.5 ? t * (1 + a) : t + a - t * a, l = 2 * t - s;
    f = o(l, s, n + 1 / 3), i = o(l, s, n), p = o(l, s, n - 1 / 3);
  }
  return "rgba(" + f * 255 + "," + i * 255 + "," + p * 255 + "," + u + ")";
}
function Ur(r) {
  if (c.rgb(r))
    return zr(r);
  if (c.hex(r))
    return Rr(r);
  if (c.hsl(r))
    return Hr(r);
}
function O(r) {
  var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);
  if (e)
    return e[1];
}
function Wr(r) {
  if (R(r, "translate") || r === "perspective")
    return "px";
  if (R(r, "rotate") || R(r, "skew"))
    return "deg";
}
function J(r, e) {
  return c.fnc(r) ? r(e.target, e.id, e.total) : r;
}
function k(r, e) {
  return r.getAttribute(e);
}
function er(r, e, n) {
  var a = O(e);
  if (X([n, "deg", "rad", "turn"], a))
    return e;
  var t = U.CSS[e + n];
  if (!c.und(t))
    return t;
  var u = 100, o = document.createElement(r.tagName), f = r.parentNode && r.parentNode !== document ? r.parentNode : document.body;
  f.appendChild(o), o.style.position = "absolute", o.style.width = u + n;
  var i = u / o.offsetWidth;
  f.removeChild(o);
  var p = i * parseFloat(e);
  return U.CSS[e + n] = p, p;
}
function Mr(r, e, n) {
  if (e in r.style) {
    var a = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), t = r.style[e] || getComputedStyle(r).getPropertyValue(a) || "0";
    return n ? er(r, t, n) : t;
  }
}
function nr(r, e) {
  if (c.dom(r) && !c.inp(r) && (!c.nil(k(r, e)) || c.svg(r) && r[e]))
    return "attribute";
  if (c.dom(r) && X(Fr, e))
    return "transform";
  if (c.dom(r) && e !== "transform" && Mr(r, e))
    return "css";
  if (r[e] != null)
    return "object";
}
function Tr(r) {
  if (c.dom(r)) {
    for (var e = r.style.transform || "", n = /(\w+)\(([^)]*)\)/g, a = /* @__PURE__ */ new Map(), t; t = n.exec(e); )
      a.set(t[1], t[2]);
    return a;
  }
}
function qr(r, e, n, a) {
  var t = R(e, "scale") ? 1 : 0 + Wr(e), u = Tr(r).get(e) || t;
  return n && (n.transforms.list.set(e, u), n.transforms.last = e), a ? er(r, u, a) : u;
}
function tr(r, e, n, a) {
  switch (nr(r, e)) {
    case "transform":
      return qr(r, e, a, n);
    case "css":
      return Mr(r, e, n);
    case "attribute":
      return k(r, e);
    default:
      return r[e] || 0;
  }
}
function ar(r, e) {
  var n = /^(\*=|\+=|-=)/.exec(r);
  if (!n)
    return r;
  var a = O(r) || 0, t = parseFloat(e), u = parseFloat(r.replace(n[0], ""));
  switch (n[0][0]) {
    case "+":
      return t + u + a;
    case "-":
      return t - u + a;
    case "*":
      return t * u + a;
  }
}
function wr(r, e) {
  if (c.col(r))
    return Ur(r);
  if (/\s/g.test(r))
    return r;
  var n = O(r), a = n ? r.substr(0, r.length - n.length) : r;
  return e ? a + e : a;
}
function ir(r, e) {
  return Math.sqrt(Math.pow(e.x - r.x, 2) + Math.pow(e.y - r.y, 2));
}
function Nr(r) {
  return Math.PI * 2 * k(r, "r");
}
function Zr(r) {
  return k(r, "width") * 2 + k(r, "height") * 2;
}
function $r(r) {
  return ir(
    { x: k(r, "x1"), y: k(r, "y1") },
    { x: k(r, "x2"), y: k(r, "y2") }
  );
}
function Pr(r) {
  for (var e = r.points, n = 0, a, t = 0; t < e.numberOfItems; t++) {
    var u = e.getItem(t);
    t > 0 && (n += ir(a, u)), a = u;
  }
  return n;
}
function Qr(r) {
  var e = r.points;
  return Pr(r) + ir(e.getItem(e.numberOfItems - 1), e.getItem(0));
}
function Ir(r) {
  if (r.getTotalLength)
    return r.getTotalLength();
  switch (r.tagName.toLowerCase()) {
    case "circle":
      return Nr(r);
    case "rect":
      return Zr(r);
    case "line":
      return $r(r);
    case "polyline":
      return Pr(r);
    case "polygon":
      return Qr(r);
  }
}
function Kr(r) {
  var e = Ir(r);
  return r.setAttribute("stroke-dasharray", e), e;
}
function _r(r) {
  for (var e = r.parentNode; c.svg(e) && c.svg(e.parentNode); )
    e = e.parentNode;
  return e;
}
function Cr(r, e) {
  var n = e || {}, a = n.el || _r(r), t = a.getBoundingClientRect(), u = k(a, "viewBox"), o = t.width, f = t.height, i = n.viewBox || (u ? u.split(" ") : [0, 0, o, f]);
  return {
    el: a,
    viewBox: i,
    x: i[0] / 1,
    y: i[1] / 1,
    w: o,
    h: f,
    vW: i[2],
    vH: i[3]
  };
}
function Jr(r, e) {
  var n = c.str(r) ? xr(r)[0] : r, a = e || 100;
  return function(t) {
    return {
      property: t,
      el: n,
      svg: Cr(n),
      totalLength: Ir(n) * (a / 100)
    };
  };
}
function Yr(r, e, n) {
  function a(s) {
    s === void 0 && (s = 0);
    var l = e + s >= 1 ? e + s : 0;
    return r.el.getPointAtLength(l);
  }
  var t = Cr(r.el, r.svg), u = a(), o = a(-1), f = a(1), i = n ? 1 : t.w / t.vW, p = n ? 1 : t.h / t.vH;
  switch (r.property) {
    case "x":
      return (u.x - t.x) * i;
    case "y":
      return (u.y - t.y) * p;
    case "angle":
      return Math.atan2(f.y - o.y, f.x - o.x) * 180 / Math.PI;
  }
}
function vr(r, e) {
  var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g, a = wr(c.pth(r) ? r.totalLength : r, e) + "";
  return {
    original: a,
    numbers: a.match(n) ? a.match(n).map(Number) : [0],
    strings: c.str(r) || e ? a.split(n) : []
  };
}
function ur(r) {
  var e = r ? q(c.arr(r) ? r.map(lr) : lr(r)) : [];
  return W(e, function(n, a, t) {
    return t.indexOf(n) === a;
  });
}
function Dr(r) {
  var e = ur(r);
  return e.map(function(n, a) {
    return { target: n, id: a, total: e.length, transforms: { list: Tr(n) } };
  });
}
function Gr(r, e) {
  var n = rr(e);
  if (/^spring/.test(n.easing) && (n.duration = yr(n.easing)), c.arr(r)) {
    var a = r.length, t = a === 2 && !c.obj(r[0]);
    t ? r = { value: r } : c.fnc(e.duration) || (n.duration = e.duration / a);
  }
  var u = c.arr(r) ? r : [r];
  return u.map(function(o, f) {
    var i = c.obj(o) && !c.pth(o) ? o : { value: o };
    return c.und(i.delay) && (i.delay = f ? 0 : e.delay), c.und(i.endDelay) && (i.endDelay = f === u.length - 1 ? e.endDelay : 0), i;
  }).map(function(o) {
    return N(o, n);
  });
}
function Xr(r) {
  for (var e = W(q(r.map(function(u) {
    return Object.keys(u);
  })), function(u) {
    return c.key(u);
  }).reduce(function(u, o) {
    return u.indexOf(o) < 0 && u.push(o), u;
  }, []), n = {}, a = function(u) {
    var o = e[u];
    n[o] = r.map(function(f) {
      var i = {};
      for (var p in f)
        c.key(p) ? p == o && (i.value = f[p]) : i[p] = f[p];
      return i;
    });
  }, t = 0; t < e.length; t++)
    a(t);
  return n;
}
function re(r, e) {
  var n = [], a = e.keyframes;
  a && (e = N(Xr(a), e));
  for (var t in e)
    c.key(t) && n.push({
      name: t,
      tweens: Gr(e[t], r)
    });
  return n;
}
function ee(r, e) {
  var n = {};
  for (var a in r) {
    var t = J(r[a], e);
    c.arr(t) && (t = t.map(function(u) {
      return J(u, e);
    }), t.length === 1 && (t = t[0])), n[a] = t;
  }
  return n.duration = parseFloat(n.duration), n.delay = parseFloat(n.delay), n;
}
function ne(r, e) {
  var n;
  return r.tweens.map(function(a) {
    var t = ee(a, e), u = t.value, o = c.arr(u) ? u[1] : u, f = O(o), i = tr(e.target, r.name, f, e), p = n ? n.to.original : i, s = c.arr(u) ? u[0] : p, l = O(s) || O(i), h = f || l;
    return c.und(o) && (o = p), t.from = vr(s, h), t.to = vr(ar(o, s), h), t.start = n ? n.end : 0, t.end = t.start + t.delay + t.duration + t.endDelay, t.easing = G(t.easing, t.duration), t.isPath = c.pth(u), t.isPathTargetInsideSVG = t.isPath && c.svg(e.target), t.isColor = c.col(t.from.original), t.isColor && (t.round = 1), n = t, t;
  });
}
var kr = {
  css: function(r, e, n) {
    return r.style[e] = n;
  },
  attribute: function(r, e, n) {
    return r.setAttribute(e, n);
  },
  object: function(r, e, n) {
    return r[e] = n;
  },
  transform: function(r, e, n, a, t) {
    if (a.list.set(e, n), e === a.last || t) {
      var u = "";
      a.list.forEach(function(o, f) {
        u += f + "(" + o + ") ";
      }), r.style.transform = u;
    }
  }
};
function Or(r, e) {
  var n = Dr(r);
  n.forEach(function(a) {
    for (var t in e) {
      var u = J(e[t], a), o = a.target, f = O(u), i = tr(o, t, f, a), p = f || O(i), s = ar(wr(u, p), i), l = nr(o, t);
      kr[l](o, t, s, a.transforms, !0);
    }
  });
}
function te(r, e) {
  var n = nr(r.target, e.name);
  if (n) {
    var a = ne(e, r), t = a[a.length - 1];
    return {
      type: n,
      property: e.name,
      animatable: r,
      tweens: a,
      duration: t.end,
      delay: a[0].delay,
      endDelay: t.endDelay
    };
  }
}
function ae(r, e) {
  return W(q(r.map(function(n) {
    return e.map(function(a) {
      return te(n, a);
    });
  })), function(n) {
    return !c.und(n);
  });
}
function Er(r, e) {
  var n = r.length, a = function(u) {
    return u.timelineOffset ? u.timelineOffset : 0;
  }, t = {};
  return t.duration = n ? Math.max.apply(Math, r.map(function(u) {
    return a(u) + u.duration;
  })) : e.duration, t.delay = n ? Math.min.apply(Math, r.map(function(u) {
    return a(u) + u.delay;
  })) : e.delay, t.endDelay = n ? t.duration - Math.max.apply(Math, r.map(function(u) {
    return a(u) + u.duration - u.endDelay;
  })) : e.endDelay, t;
}
var dr = 0;
function ie(r) {
  var e = _(pr, r), n = _(Y, r), a = re(n, r), t = Dr(r.targets), u = ae(t, a), o = Er(u, n), f = dr;
  return dr++, N(e, {
    id: f,
    children: [],
    animatables: t,
    animations: u,
    duration: o.duration,
    delay: o.delay,
    endDelay: o.endDelay
  });
}
var C = [], Sr = function() {
  var r;
  function e() {
    !r && (!gr() || !x.suspendWhenDocumentHidden) && C.length > 0 && (r = requestAnimationFrame(n));
  }
  function n(t) {
    for (var u = C.length, o = 0; o < u; ) {
      var f = C[o];
      f.paused ? (C.splice(o, 1), u--) : (f.tick(t), o++);
    }
    r = o > 0 ? requestAnimationFrame(n) : void 0;
  }
  function a() {
    x.suspendWhenDocumentHidden && (gr() ? r = cancelAnimationFrame(r) : (C.forEach(
      function(t) {
        return t._onDocumentVisibility();
      }
    ), Sr()));
  }
  return typeof document != "undefined" && document.addEventListener("visibilitychange", a), e;
}();
function gr() {
  return !!document && document.hidden;
}
function x(r) {
  r === void 0 && (r = {});
  var e = 0, n = 0, a = 0, t, u = 0, o = null;
  function f(g) {
    var d = window.Promise && new Promise(function(P) {
      return o = P;
    });
    return g.finished = d, d;
  }
  var i = ie(r);
  f(i);
  function p() {
    var g = i.direction;
    g !== "alternate" && (i.direction = g !== "normal" ? "normal" : "reverse"), i.reversed = !i.reversed, t.forEach(function(d) {
      return d.reversed = i.reversed;
    });
  }
  function s(g) {
    return i.reversed ? i.duration - g : g;
  }
  function l() {
    e = 0, n = s(i.currentTime) * (1 / x.speed);
  }
  function h(g, d) {
    d && d.seek(g - d.timelineOffset);
  }
  function w(g) {
    if (i.reversePlayback)
      for (var P = u; P--; )
        h(g, t[P]);
    else
      for (var d = 0; d < u; d++)
        h(g, t[d]);
  }
  function m(g) {
    for (var d = 0, P = i.animations, E = P.length; d < E; ) {
      var b = P[d], S = b.animatable, F = b.tweens, L = F.length - 1, T = F[L];
      L && (T = W(F, function(Br) {
        return g < Br.end;
      })[0] || T);
      for (var A = D(g - T.start - T.delay, 0, T.duration) / T.duration, H = isNaN(A) ? 1 : T.easing(A), I = T.to.strings, Z = T.round, $ = [], Ar = T.to.numbers.length, B = void 0, V = 0; V < Ar; V++) {
        var j = void 0, or = T.to.numbers[V], fr = T.from.numbers[V] || 0;
        T.isPath ? j = Yr(T.value, H * or, T.isPathTargetInsideSVG) : j = fr + H * (or - fr), Z && (T.isColor && V > 2 || (j = Math.round(j * Z) / Z)), $.push(j);
      }
      var sr = I.length;
      if (!sr)
        B = $[0];
      else {
        B = I[0];
        for (var z = 0; z < sr; z++) {
          I[z];
          var cr = I[z + 1], Q = $[z];
          isNaN(Q) || (cr ? B += Q + cr : B += Q + " ");
        }
      }
      kr[b.type](S.target, b.property, B, S.transforms), b.currentValue = B, d++;
    }
  }
  function v(g) {
    i[g] && !i.passThrough && i[g](i);
  }
  function y() {
    i.remaining && i.remaining !== !0 && i.remaining--;
  }
  function M(g) {
    var d = i.duration, P = i.delay, E = d - i.endDelay, b = s(g);
    i.progress = D(b / d * 100, 0, 100), i.reversePlayback = b < i.currentTime, t && w(b), !i.began && i.currentTime > 0 && (i.began = !0, v("begin")), !i.loopBegan && i.currentTime > 0 && (i.loopBegan = !0, v("loopBegin")), b <= P && i.currentTime !== 0 && m(0), (b >= E && i.currentTime !== d || !d) && m(d), b > P && b < E ? (i.changeBegan || (i.changeBegan = !0, i.changeCompleted = !1, v("changeBegin")), v("change"), m(b)) : i.changeBegan && (i.changeCompleted = !0, i.changeBegan = !1, v("changeComplete")), i.currentTime = D(b, 0, d), i.began && v("update"), g >= d && (n = 0, y(), i.remaining ? (e = a, v("loopComplete"), i.loopBegan = !1, i.direction === "alternate" && p()) : (i.paused = !0, i.completed || (i.completed = !0, v("loopComplete"), v("complete"), !i.passThrough && "Promise" in window && (o(), f(i)))));
  }
  return i.reset = function() {
    var g = i.direction;
    i.passThrough = !1, i.currentTime = 0, i.progress = 0, i.paused = !0, i.began = !1, i.loopBegan = !1, i.changeBegan = !1, i.completed = !1, i.changeCompleted = !1, i.reversePlayback = !1, i.reversed = g === "reverse", i.remaining = i.loop, t = i.children, u = t.length;
    for (var d = u; d--; )
      i.children[d].reset();
    (i.reversed && i.loop !== !0 || g === "alternate" && i.loop === 1) && i.remaining++, m(i.reversed ? i.duration : 0);
  }, i._onDocumentVisibility = l, i.set = function(g, d) {
    return Or(g, d), i;
  }, i.tick = function(g) {
    a = g, e || (e = a), M((a + (n - e)) * x.speed);
  }, i.seek = function(g) {
    M(s(g));
  }, i.pause = function() {
    i.paused = !0, l();
  }, i.play = function() {
    i.paused && (i.completed && i.reset(), i.paused = !1, C.push(i), l(), Sr());
  }, i.reverse = function() {
    p(), i.completed = !i.reversed, l();
  }, i.restart = function() {
    i.reset(), i.play();
  }, i.remove = function(g) {
    var d = ur(g);
    Lr(d, i);
  }, i.reset(), i.autoplay && i.play(), i;
}
function hr(r, e) {
  for (var n = e.length; n--; )
    X(r, e[n].animatable.target) && e.splice(n, 1);
}
function Lr(r, e) {
  var n = e.animations, a = e.children;
  hr(r, n);
  for (var t = a.length; t--; ) {
    var u = a[t], o = u.animations;
    hr(r, o), !o.length && !u.children.length && a.splice(t, 1);
  }
  !n.length && !a.length && e.pause();
}
function ue(r) {
  for (var e = ur(r), n = C.length; n--; ) {
    var a = C[n];
    Lr(e, a);
  }
}
function oe(r, e) {
  e === void 0 && (e = {});
  var n = e.direction || "normal", a = e.easing ? G(e.easing) : null, t = e.grid, u = e.axis, o = e.from || 0, f = o === "first", i = o === "center", p = o === "last", s = c.arr(r), l = parseFloat(s ? r[0] : r), h = s ? parseFloat(r[1]) : 0, w = O(s ? r[1] : r) || 0, m = e.start || 0 + (s ? l : 0), v = [], y = 0;
  return function(M, g, d) {
    if (f && (o = 0), i && (o = (d - 1) / 2), p && (o = d - 1), !v.length) {
      for (var P = 0; P < d; P++) {
        if (!t)
          v.push(Math.abs(o - P));
        else {
          var E = i ? (t[0] - 1) / 2 : o % t[0], b = i ? (t[1] - 1) / 2 : Math.floor(o / t[0]), S = P % t[0], F = Math.floor(P / t[0]), L = E - S, T = b - F, A = Math.sqrt(L * L + T * T);
          u === "x" && (A = -L), u === "y" && (A = -T), v.push(A);
        }
        y = Math.max.apply(Math, v);
      }
      a && (v = v.map(function(I) {
        return a(I / y) * y;
      })), n === "reverse" && (v = v.map(function(I) {
        return u ? I < 0 ? I * -1 : -I : Math.abs(y - I);
      }));
    }
    var H = s ? (h - l) / y : l;
    return m + H * (Math.round(v[g] * 100) / 100) + w;
  };
}
function fe(r) {
  r === void 0 && (r = {});
  var e = x(r);
  return e.duration = 0, e.add = function(n, a) {
    var t = C.indexOf(e), u = e.children;
    t > -1 && C.splice(t, 1);
    function o(h) {
      h.passThrough = !0;
    }
    for (var f = 0; f < u.length; f++)
      o(u[f]);
    var i = N(n, _(Y, r));
    i.targets = i.targets || r.targets;
    var p = e.duration;
    i.autoplay = !1, i.direction = e.direction, i.timelineOffset = c.und(a) ? p : ar(a, p), o(e), e.seek(i.timelineOffset);
    var s = x(i);
    o(s), u.push(s);
    var l = Er(u, r);
    return e.delay = l.delay, e.endDelay = l.endDelay, e.duration = l.duration, e.seek(0), e.reset(), e.autoplay && e.play(), e;
  }, e;
}
x.version = "3.2.1";
x.speed = 1;
x.suspendWhenDocumentHidden = !0;
x.running = C;
x.remove = ue;
x.get = tr;
x.set = Or;
x.convertPx = er;
x.path = Jr;
x.setDashoffset = Kr;
x.stagger = oe;
x.timeline = fe;
x.easing = G;
x.penner = br;
x.random = function(r, e) {
  return Math.floor(Math.random() * (e - r + 1)) + r;
};
export {
  x as anime
};
