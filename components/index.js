var z = Object.defineProperty;
var Z = (t, i, e) => i in t ? z(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[i] = e;
var C = (t, i, e) => (Z(t, typeof i != "symbol" ? i + "" : i, e), e);
function m() {
}
const B = () => Promise.resolve(), k = {
  __queue: Promise.resolve()
};
function G(t = B) {
  k.__queue = k.__queue.then(t).catch(B);
}
function T(t, i, e) {
  const n = t.x, s = t.y, r = Math.floor(n / i * 1e4) / 1e4, a = Math.floor(s / e * 1e4) / 1e4;
  return { x: r, y: a };
}
function L(t, i, e) {
  const { x: n, y: s } = t, r = n * i, a = s * e;
  return { x: r, y: a };
}
function j(t) {
  if (t.length < 2)
    return {};
  const i = t.slice(-2), e = i[0], n = {
    x: (i[0].x + i[1].x) / 2,
    y: (i[0].y + i[1].y) / 2
  };
  return { control: e, end: n };
}
function U(t, i, e = m) {
  new Promise((n) => {
    setTimeout(() => {
      e(), n(!0);
    }, i * t);
  });
}
const W = window, R = window.requestAnimationFrame || W.webkitRequestAnimationFrame || ((t) => setTimeout(t, 16));
function P(t, i = 0) {
  i <= 0 ? R(t) : R(() => P(t, i - 1));
}
var b = Object.freeze({
  Linear: Object.freeze({
    None: function(t) {
      return t;
    },
    In: function(t) {
      return t;
    },
    Out: function(t) {
      return t;
    },
    InOut: function(t) {
      return t;
    }
  }),
  Quadratic: Object.freeze({
    In: function(t) {
      return t * t;
    },
    Out: function(t) {
      return t * (2 - t);
    },
    InOut: function(t) {
      return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
    }
  }),
  Cubic: Object.freeze({
    In: function(t) {
      return t * t * t;
    },
    Out: function(t) {
      return --t * t * t + 1;
    },
    InOut: function(t) {
      return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
    }
  }),
  Quartic: Object.freeze({
    In: function(t) {
      return t * t * t * t;
    },
    Out: function(t) {
      return 1 - --t * t * t * t;
    },
    InOut: function(t) {
      return (t *= 2) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
    }
  }),
  Quintic: Object.freeze({
    In: function(t) {
      return t * t * t * t * t;
    },
    Out: function(t) {
      return --t * t * t * t * t + 1;
    },
    InOut: function(t) {
      return (t *= 2) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
    }
  }),
  Sinusoidal: Object.freeze({
    In: function(t) {
      return 1 - Math.sin((1 - t) * Math.PI / 2);
    },
    Out: function(t) {
      return Math.sin(t * Math.PI / 2);
    },
    InOut: function(t) {
      return 0.5 * (1 - Math.sin(Math.PI * (0.5 - t)));
    }
  }),
  Exponential: Object.freeze({
    In: function(t) {
      return t === 0 ? 0 : Math.pow(1024, t - 1);
    },
    Out: function(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    },
    InOut: function(t) {
      return t === 0 ? 0 : t === 1 ? 1 : (t *= 2) < 1 ? 0.5 * Math.pow(1024, t - 1) : 0.5 * (-Math.pow(2, -10 * (t - 1)) + 2);
    }
  }),
  Circular: Object.freeze({
    In: function(t) {
      return 1 - Math.sqrt(1 - t * t);
    },
    Out: function(t) {
      return Math.sqrt(1 - --t * t);
    },
    InOut: function(t) {
      return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    }
  }),
  Elastic: Object.freeze({
    In: function(t) {
      return t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI);
    },
    Out: function(t) {
      return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t - 0.1) * 5 * Math.PI) + 1;
    },
    InOut: function(t) {
      return t === 0 ? 0 : t === 1 ? 1 : (t *= 2, t < 1 ? -0.5 * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI) : 0.5 * Math.pow(2, -10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI) + 1);
    }
  }),
  Back: Object.freeze({
    In: function(t) {
      var i = 1.70158;
      return t === 1 ? 1 : t * t * ((i + 1) * t - i);
    },
    Out: function(t) {
      var i = 1.70158;
      return t === 0 ? 0 : --t * t * ((i + 1) * t + i) + 1;
    },
    InOut: function(t) {
      var i = 2.5949095;
      return (t *= 2) < 1 ? 0.5 * (t * t * ((i + 1) * t - i)) : 0.5 * ((t -= 2) * t * ((i + 1) * t + i) + 2);
    }
  }),
  Bounce: Object.freeze({
    In: function(t) {
      return 1 - b.Bounce.Out(1 - t);
    },
    Out: function(t) {
      return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    },
    InOut: function(t) {
      return t < 0.5 ? b.Bounce.In(t * 2) * 0.5 : b.Bounce.Out(t * 2 - 1) * 0.5 + 0.5;
    }
  }),
  generatePow: function(t) {
    return t === void 0 && (t = 4), t = t < Number.EPSILON ? Number.EPSILON : t, t = t > 1e4 ? 1e4 : t, {
      In: function(i) {
        return Math.pow(i, t);
      },
      Out: function(i) {
        return 1 - Math.pow(1 - i, t);
      },
      InOut: function(i) {
        return i < 0.5 ? Math.pow(i * 2, t) / 2 : (1 - Math.pow(2 - i * 2, t)) / 2 + 0.5;
      }
    };
  }
}), N = function() {
  return performance.now();
}, Y = (
  /** @class */
  function() {
    function t() {
      this._tweens = {}, this._tweensAddedDuringUpdate = {};
    }
    return t.prototype.getAll = function() {
      var i = this;
      return Object.keys(this._tweens).map(function(e) {
        return i._tweens[e];
      });
    }, t.prototype.removeAll = function() {
      this._tweens = {};
    }, t.prototype.add = function(i) {
      this._tweens[i.getId()] = i, this._tweensAddedDuringUpdate[i.getId()] = i;
    }, t.prototype.remove = function(i) {
      delete this._tweens[i.getId()], delete this._tweensAddedDuringUpdate[i.getId()];
    }, t.prototype.update = function(i, e) {
      i === void 0 && (i = N()), e === void 0 && (e = !1);
      var n = Object.keys(this._tweens);
      if (n.length === 0)
        return !1;
      for (; n.length > 0; ) {
        this._tweensAddedDuringUpdate = {};
        for (var s = 0; s < n.length; s++) {
          var r = this._tweens[n[s]], a = !e;
          r && r.update(i, a) === !1 && !e && delete this._tweens[n[s]];
        }
        n = Object.keys(this._tweensAddedDuringUpdate);
      }
      return !0;
    }, t;
  }()
), w = {
  Linear: function(t, i) {
    var e = t.length - 1, n = e * i, s = Math.floor(n), r = w.Utils.Linear;
    return i < 0 ? r(t[0], t[1], n) : i > 1 ? r(t[e], t[e - 1], e - n) : r(t[s], t[s + 1 > e ? e : s + 1], n - s);
  },
  Bezier: function(t, i) {
    for (var e = 0, n = t.length - 1, s = Math.pow, r = w.Utils.Bernstein, a = 0; a <= n; a++)
      e += s(1 - i, n - a) * s(i, a) * t[a] * r(n, a);
    return e;
  },
  CatmullRom: function(t, i) {
    var e = t.length - 1, n = e * i, s = Math.floor(n), r = w.Utils.CatmullRom;
    return t[0] === t[e] ? (i < 0 && (s = Math.floor(n = e * (1 + i))), r(t[(s - 1 + e) % e], t[s], t[(s + 1) % e], t[(s + 2) % e], n - s)) : i < 0 ? t[0] - (r(t[0], t[0], t[1], t[1], -n) - t[0]) : i > 1 ? t[e] - (r(t[e], t[e], t[e - 1], t[e - 1], n - e) - t[e]) : r(t[s ? s - 1 : 0], t[s], t[e < s + 1 ? e : s + 1], t[e < s + 2 ? e : s + 2], n - s);
  },
  Utils: {
    Linear: function(t, i, e) {
      return (i - t) * e + t;
    },
    Bernstein: function(t, i) {
      var e = w.Utils.Factorial;
      return e(t) / e(i) / e(t - i);
    },
    Factorial: function() {
      var t = [1];
      return function(i) {
        var e = 1;
        if (t[i])
          return t[i];
        for (var n = i; n > 1; n--)
          e *= n;
        return t[i] = e, e;
      };
    }(),
    CatmullRom: function(t, i, e, n, s) {
      var r = (e - t) * 0.5, a = (n - i) * 0.5, o = s * s, c = s * o;
      return (2 * i - 2 * e + r + a) * c + (-3 * i + 3 * e - 2 * r - a) * o + r * s + i;
    }
  }
}, H = (
  /** @class */
  function() {
    function t() {
    }
    return t.nextId = function() {
      return t._nextId++;
    }, t._nextId = 0, t;
  }()
), E = new Y(), Q = (
  /** @class */
  function() {
    function t(i, e) {
      e === void 0 && (e = E), this._object = i, this._group = e, this._isPaused = !1, this._pauseStart = 0, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._isDynamic = !1, this._initialRepeat = 0, this._repeat = 0, this._yoyo = !1, this._isPlaying = !1, this._reversed = !1, this._delayTime = 0, this._startTime = 0, this._easingFunction = b.Linear.None, this._interpolationFunction = w.Linear, this._chainedTweens = [], this._onStartCallbackFired = !1, this._onEveryStartCallbackFired = !1, this._id = H.nextId(), this._isChainStopped = !1, this._propertiesAreSetUp = !1, this._goToEnd = !1;
    }
    return t.prototype.getId = function() {
      return this._id;
    }, t.prototype.isPlaying = function() {
      return this._isPlaying;
    }, t.prototype.isPaused = function() {
      return this._isPaused;
    }, t.prototype.getDuration = function() {
      return this._duration;
    }, t.prototype.to = function(i, e) {
      if (e === void 0 && (e = 1e3), this._isPlaying)
        throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");
      return this._valuesEnd = i, this._propertiesAreSetUp = !1, this._duration = e < 0 ? 0 : e, this;
    }, t.prototype.duration = function(i) {
      return i === void 0 && (i = 1e3), this._duration = i < 0 ? 0 : i, this;
    }, t.prototype.dynamic = function(i) {
      return i === void 0 && (i = !1), this._isDynamic = i, this;
    }, t.prototype.start = function(i, e) {
      if (i === void 0 && (i = N()), e === void 0 && (e = !1), this._isPlaying)
        return this;
      if (this._group && this._group.add(this), this._repeat = this._initialRepeat, this._reversed) {
        this._reversed = !1;
        for (var n in this._valuesStartRepeat)
          this._swapEndStartRepeatValues(n), this._valuesStart[n] = this._valuesStartRepeat[n];
      }
      if (this._isPlaying = !0, this._isPaused = !1, this._onStartCallbackFired = !1, this._onEveryStartCallbackFired = !1, this._isChainStopped = !1, this._startTime = i, this._startTime += this._delayTime, !this._propertiesAreSetUp || e) {
        if (this._propertiesAreSetUp = !0, !this._isDynamic) {
          var s = {};
          for (var r in this._valuesEnd)
            s[r] = this._valuesEnd[r];
          this._valuesEnd = s;
        }
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat, e);
      }
      return this;
    }, t.prototype.startFromCurrentValues = function(i) {
      return this.start(i, !0);
    }, t.prototype._setupProperties = function(i, e, n, s, r) {
      for (var a in n) {
        var o = i[a], c = Array.isArray(o), d = c ? "array" : typeof o, I = !c && Array.isArray(n[a]);
        if (!(d === "undefined" || d === "function")) {
          if (I) {
            var u = n[a];
            if (u.length === 0)
              continue;
            for (var l = [o], h = 0, g = u.length; h < g; h += 1) {
              var f = this._handleRelativeValue(o, u[h]);
              if (isNaN(f)) {
                I = !1, console.warn("Found invalid interpolation list. Skipping.");
                break;
              }
              l.push(f);
            }
            I && (n[a] = l);
          }
          if ((d === "object" || c) && o && !I) {
            e[a] = c ? [] : {};
            var p = o;
            for (var A in p)
              e[a][A] = p[A];
            s[a] = c ? [] : {};
            var u = n[a];
            if (!this._isDynamic) {
              var v = {};
              for (var A in u)
                v[A] = u[A];
              n[a] = u = v;
            }
            this._setupProperties(p, e[a], u, s[a], r);
          } else
            (typeof e[a] == "undefined" || r) && (e[a] = o), c || (e[a] *= 1), I ? s[a] = n[a].slice().reverse() : s[a] = e[a] || 0;
        }
      }
    }, t.prototype.stop = function() {
      return this._isChainStopped || (this._isChainStopped = !0, this.stopChainedTweens()), this._isPlaying ? (this._group && this._group.remove(this), this._isPlaying = !1, this._isPaused = !1, this._onStopCallback && this._onStopCallback(this._object), this) : this;
    }, t.prototype.end = function() {
      return this._goToEnd = !0, this.update(1 / 0), this;
    }, t.prototype.pause = function(i) {
      return i === void 0 && (i = N()), this._isPaused || !this._isPlaying ? this : (this._isPaused = !0, this._pauseStart = i, this._group && this._group.remove(this), this);
    }, t.prototype.resume = function(i) {
      return i === void 0 && (i = N()), !this._isPaused || !this._isPlaying ? this : (this._isPaused = !1, this._startTime += i - this._pauseStart, this._pauseStart = 0, this._group && this._group.add(this), this);
    }, t.prototype.stopChainedTweens = function() {
      for (var i = 0, e = this._chainedTweens.length; i < e; i++)
        this._chainedTweens[i].stop();
      return this;
    }, t.prototype.group = function(i) {
      return i === void 0 && (i = E), this._group = i, this;
    }, t.prototype.delay = function(i) {
      return i === void 0 && (i = 0), this._delayTime = i, this;
    }, t.prototype.repeat = function(i) {
      return i === void 0 && (i = 0), this._initialRepeat = i, this._repeat = i, this;
    }, t.prototype.repeatDelay = function(i) {
      return this._repeatDelayTime = i, this;
    }, t.prototype.yoyo = function(i) {
      return i === void 0 && (i = !1), this._yoyo = i, this;
    }, t.prototype.easing = function(i) {
      return i === void 0 && (i = b.Linear.None), this._easingFunction = i, this;
    }, t.prototype.interpolation = function(i) {
      return i === void 0 && (i = w.Linear), this._interpolationFunction = i, this;
    }, t.prototype.chain = function() {
      for (var i = [], e = 0; e < arguments.length; e++)
        i[e] = arguments[e];
      return this._chainedTweens = i, this;
    }, t.prototype.onStart = function(i) {
      return this._onStartCallback = i, this;
    }, t.prototype.onEveryStart = function(i) {
      return this._onEveryStartCallback = i, this;
    }, t.prototype.onUpdate = function(i) {
      return this._onUpdateCallback = i, this;
    }, t.prototype.onRepeat = function(i) {
      return this._onRepeatCallback = i, this;
    }, t.prototype.onComplete = function(i) {
      return this._onCompleteCallback = i, this;
    }, t.prototype.onStop = function(i) {
      return this._onStopCallback = i, this;
    }, t.prototype.update = function(i, e) {
      var n = this, s;
      if (i === void 0 && (i = N()), e === void 0 && (e = !0), this._isPaused)
        return !0;
      var r, a = this._startTime + this._duration;
      if (!this._goToEnd && !this._isPlaying) {
        if (i > a)
          return !1;
        e && this.start(i, !0);
      }
      if (this._goToEnd = !1, i < this._startTime)
        return !0;
      this._onStartCallbackFired === !1 && (this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = !0), this._onEveryStartCallbackFired === !1 && (this._onEveryStartCallback && this._onEveryStartCallback(this._object), this._onEveryStartCallbackFired = !0);
      var o = i - this._startTime, c = this._duration + ((s = this._repeatDelayTime) !== null && s !== void 0 ? s : this._delayTime), d = this._duration + this._repeat * c, I = function() {
        if (n._duration === 0 || o > d)
          return 1;
        var p = Math.trunc(o / c), A = o - p * c, v = Math.min(A / n._duration, 1);
        return v === 0 && o === n._duration ? 1 : v;
      }, u = I(), l = this._easingFunction(u);
      if (this._updateProperties(this._object, this._valuesStart, this._valuesEnd, l), this._onUpdateCallback && this._onUpdateCallback(this._object, u), this._duration === 0 || o >= this._duration)
        if (this._repeat > 0) {
          var h = Math.min(Math.trunc((o - this._duration) / c) + 1, this._repeat);
          isFinite(this._repeat) && (this._repeat -= h);
          for (r in this._valuesStartRepeat)
            !this._yoyo && typeof this._valuesEnd[r] == "string" && (this._valuesStartRepeat[r] = // eslint-disable-next-line
            // @ts-ignore FIXME?
            this._valuesStartRepeat[r] + parseFloat(this._valuesEnd[r])), this._yoyo && this._swapEndStartRepeatValues(r), this._valuesStart[r] = this._valuesStartRepeat[r];
          return this._yoyo && (this._reversed = !this._reversed), this._startTime += c * h, this._onRepeatCallback && this._onRepeatCallback(this._object), this._onEveryStartCallbackFired = !1, !0;
        } else {
          this._onCompleteCallback && this._onCompleteCallback(this._object);
          for (var g = 0, f = this._chainedTweens.length; g < f; g++)
            this._chainedTweens[g].start(this._startTime + this._duration, !1);
          return this._isPlaying = !1, !1;
        }
      return !0;
    }, t.prototype._updateProperties = function(i, e, n, s) {
      for (var r in n)
        if (e[r] !== void 0) {
          var a = e[r] || 0, o = n[r], c = Array.isArray(i[r]), d = Array.isArray(o), I = !c && d;
          I ? i[r] = this._interpolationFunction(o, s) : typeof o == "object" && o ? this._updateProperties(i[r], a, o, s) : (o = this._handleRelativeValue(a, o), typeof o == "number" && (i[r] = a + (o - a) * s));
        }
    }, t.prototype._handleRelativeValue = function(i, e) {
      return typeof e != "string" ? e : e.charAt(0) === "+" || e.charAt(0) === "-" ? i + parseFloat(e) : parseFloat(e);
    }, t.prototype._swapEndStartRepeatValues = function(i) {
      var e = this._valuesStartRepeat[i], n = this._valuesEnd[i];
      typeof n == "string" ? this._valuesStartRepeat[i] = this._valuesStartRepeat[i] + parseFloat(n) : this._valuesStartRepeat[i] = this._valuesEnd[i], this._valuesEnd[i] = e;
    }, t;
  }()
), _ = E;
_.getAll.bind(_);
_.removeAll.bind(_);
_.add.bind(_);
_.remove.bind(_);
_.update.bind(_);
function F(t, i, e, n = b.Linear.None) {
  const s = new Q(t).to(i, e).easing(n).start();
  function r(a) {
    s.update(a) && requestAnimationFrame(r);
  }
  return requestAnimationFrame(r), s;
}
var y = /* @__PURE__ */ ((t) => (t.Drawline = "Drawline", t.Undo = "Undo", t.Exit = "Exit", t))(y || {});
const x = Symbol("$$PAINT_BRUSH_EVENT$$");
function S(t) {
  return t[x] || (t[x] = {}), t[x];
}
function J(t) {
  t[x] || delete t[x];
}
class K {
  /**
   * 判断是否注册了事件
   * @param name  事件类型
   */
  hasListener(i) {
    const e = S(this);
    return e && e[i] && e[i].length > 0;
  }
  /**
   * 注册事件
   * @param  name    事件类型
   * @param  callback 事件回调函数
   * @param  once     是否只执行一次
   * @returns 解除事件
   * @template K 预设的监听事件名称
   * @template C 回调函数函数上下文
   */
  on(i, e, n) {
    const s = S(this);
    return s[i] || (s[i] = []), s[i].push([e, n || !1]), () => this.off(i, e);
  }
  /**
   * 注册事件(是否只执行一次)
   * @param  name     事件类型
   * @param  callback 事件回调函数
   * @returns 解除事件
   * @template K 预设的监听事件名称
   * @template C 回调函数函数上下文
   */
  once(i, e) {
    return this.on(i, e, !0);
  }
  /**
   * 解除事件
   *
   * 如果 name 不传的话解除对应所有事件
   * 如果 name, callback 不传的话解除所有name的所有事件
   * @param  name     事件类型
   * @param  callback 事件回调函数
   * @template K 预设的监听事件名称
   */
  off(i, e) {
    if (i === void 0) {
      J(this);
      return;
    }
    const n = S(this);
    if (n[i] || (n[i] = []), e === void 0) {
      n[i].length = 0;
      return;
    }
    let s = 0;
    for (; s < n[i].length && n[i][s][0] !== e; s++)
      ;
    s < n[i].length && n[i].splice(s, 1);
  }
  /**
   * 触发事件
   * @param  name  事件类型
   * @param  data  触发事件的数据
   * @returns canceled 是否被触发取消
   * @template K 预设的监听事件名称
   */
  emit(i, ...e) {
    let n = !1;
    const r = S(this)[i] || [];
    for (let a of r.slice()) {
      const [o, c = !1] = a, d = o(...e);
      c && this.off(i, o), d === !1 && (n = !0);
    }
    return n;
  }
}
function M() {
  return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
}
function X() {
  return (M() + M() + "-" + M() + "-4" + M().substr(0, 3) + "-" + M() + "-" + M() + M() + M()).toLowerCase();
}
const V = `
<style type="text/css">

#_gl_paintBrush {
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
transform: translateZ(0);
z-index: 1997;
pointer-events: none;
opacity: 0;
transition: all 500ms;
}

#_gl_paintBrush.brushing {
  opacity: 1;
}

#_gl_paintBrush ._paintBrush-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

#_gl_paintBrush ._paintBrush-canvas--sync {
  pointer-events: none;
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

#_gl_paintBrush ._paintBrush-canvas {
  pointer-events: none;
  z-index: 1;
}

#_gl_paintBrush.brushing ._paintBrush-canvas {
  pointer-events: auto;
}

#_gl_paintBrush ._paintBrush-ctrl {
  width: 140px;
  height: 52px;
  position: absolute;
  bottom: 28px;
  right: 50%;
  transform: translateX(50%);
  font-size: 10px;
  color: white;
  z-index: 2;
}

#_gl_paintBrush.brushing ._paintBrush-ctrl {
  pointer-events: auto;
}

#_gl_paintBrush ._paintBrush-ctrl ._paintBrush-ctrlinner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 26px;
  padding: 8px 16px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(180deg, hsl(0deg 0% 0% / 57%), hsl(0deg 0% 0% / 70%) 117%);
}

._paintBrush-ctrlitem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  cursor: pointer;
}

._paintBrush-ctrlitem--undo >.brush-icon{
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjQ1LjY3NTI0OCUiIHgyPSItMTYuOTYxMDIzJSIgeTI9Ijg0LjIzODQxOTglIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjMwMzY3Njc5MiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDAuMDAwMDAwLCAtNzQwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDAuMDAwMDAwLCA3NDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPSIjRDhEOEQ4IiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuMDAwMDAwLCAyLjk5MDY1OSkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCwzLjc1ODc1NzA5IEw5Ljg0Mzc1LDMuNzU4NzU3MDkgQzEyLjY5MTQ2ODIsMy43NTg3NTcwOSAxNSw2LjA2NzI4ODg1IDE1LDguOTE1MDA3MDkgQzE1LDExLjc2MjcyNTMgMTIuNjkxNDY4MiwxNC4wNzEyNTcxIDkuODQzNzUsMTQuMDcxMjU3MSBMMSwxNC4wNzEyNTcxIiBzdHJva2U9InVybCgjbGluZWFyR3JhZGllbnQtMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwb2ludHM9IjMuNzkwMjI3MDcgNy41Mzk2NjA2NCAwIDMuNzU4NzU3MDkgMy43OTAyMjcwNyAwIj48L3BvbHlsaW5lPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
    background-size: 100%;
    width: 22px;
    height: 22px;
}

._paintBrush-ctrlitem--close >.brush-icon {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwLjAyMDY5MyUiIHkxPSItMTMuNzMzMzc1MSUiIHgyPSI1MCUiIHkyPSIxMTQuMTEwOTk0JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZGRkZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIHN0b3Atb3BhY2l0eT0iMC42MDEwNDM0ODgiIG9mZnNldD0iNDkuMzA4NDg4MiUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZGRkZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIG9mZnNldD0iNTUuOTY4MTUzNSUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnPgogICAgICAgICAgICA8cmVjdCBmaWxsPSIjRDhEOEQ4IiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiPjwvcmVjdD4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4wMDAwMDAsIDUuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03LC0yLjk4ODE2NTY4IEM3LjUxMjgzNTg0LC0yLjk4ODE2NTY4IDcuOTM1NTA3MTYsLTIuNjAyMTI1NDkgNy45OTMyNzIyNywtMi4xMDQ3ODY4MSBMOCwtMS45ODgxNjU2OCBMOCwxMy45OTgxMTQ2IEM4LDE0LjU1MDM5OTMgNy41NTIyODQ3NSwxNC45OTgxMTQ2IDcsMTQuOTk4MTE0NiBDNi40ODcxNjQxNiwxNC45OTgxMTQ2IDYuMDY0NDkyODQsMTQuNjEyMDc0NCA2LjAwNjcyNzczLDE0LjExNDczNTcgTDYsMTMuOTk4MTE0NiBMNiwtMS45ODgxNjU2OCBDNiwtMi41NDA0NTA0MyA2LjQ0NzcxNTI1LC0yLjk4ODE2NTY4IDcsLTIuOTg4MTY1NjggWiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy4wMDAwMDAsIDYuMDA0OTc0KSByb3RhdGUoLTQ1LjAwMDAwMCkgdHJhbnNsYXRlKC03LjAwMDAwMCwgLTYuMDA0OTc0KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNywtMi45ODgxNjU2OCBDNy41MTI4MzU4NCwtMi45ODgxNjU2OCA3LjkzNTUwNzE2LC0yLjYwMjEyNTQ5IDcuOTkzMjcyMjcsLTIuMTA0Nzg2ODEgTDgsLTEuOTg4MTY1NjggTDgsMTMuOTk4MTE0NiBDOCwxNC41NTAzOTkzIDcuNTUyMjg0NzUsMTQuOTk4MTE0NiA3LDE0Ljk5ODExNDYgQzYuNDg3MTY0MTYsMTQuOTk4MTE0NiA2LjA2NDQ5Mjg0LDE0LjYxMjA3NDQgNi4wMDY3Mjc3MywxNC4xMTQ3MzU3IEw2LDEzLjk5ODExNDYgTDYsLTEuOTg4MTY1NjggQzYsLTIuNTQwNDUwNDMgNi40NDc3MTUyNSwtMi45ODgxNjU2OCA3LC0yLjk4ODE2NTY4IFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuMDAwMDAwLCA2LjAwNDk3NCkgcm90YXRlKC0xMzUuMDAwMDAwKSB0cmFuc2xhdGUoLTcuMDAwMDAwLCAtNi4wMDQ5NzQpICI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
    background-size: 100%;
    width: 22px;
    height: 22px;
}

</style>
`;
class q extends K {
  constructor(e) {
    super();
    C(this, "configs");
    C(this, "clientWidth");
    C(this, "clientHeight");
    C(this, "ready", !1);
    C(this, "uuid", X());
    C(this, "tween");
    C(this, "tweening", !1);
    C(this, "container");
    C(this, "canvas");
    C(this, "data", {});
    C(this, "tempLine", {});
    this.configs = e, this.clientWidth = document.body.clientWidth, this.clientHeight = document.body.clientHeight, this.container = this.ifInsertToDOM(), this.canvas = {}, this.initCtrl();
  }
  get color() {
    return this.configs.currentColor;
  }
  get state() {
    return this.data;
  }
  get dpr() {
    return this.configs.DPR || 1;
  }
  ifInsertToDOM() {
    if (this.container)
      return this.container;
    if (this.configs.container)
      this.configs.container.id = "_gl_paintBrush", this.container = this.configs.container;
    else if (document.getElementById("_gl_paintBrush"))
      this.container = document.getElementById("_gl_paintBrush");
    else {
      const e = document.createElement("div");
      e.id = "_gl_paintBrush", document.body.appendChild(e), this.container = e;
    }
    return this.container.innerHTML = V, this.container;
  }
  /**
   *
   * @param className 初始化画板
   * @returns
   */
  initCanvas(e) {
    const n = document.createElement("canvas");
    n.className = e, n.width = this.clientWidth, n.height = this.clientHeight;
    const s = n.getContext("2d");
    if (s)
      return s.lineWidth = 5 * this.dpr, s.lineCap = "round", s.lineJoin = "round", this.container.appendChild(n), n;
  }
  /**
   * 初始化操作面板
   * @returns
   */
  initCtrl() {
    const e = document.createElement("div");
    e.className = "_paintBrush-ctrl";
    const n = document.createElement("div");
    n.className = "_paintBrush-ctrlinner";
    const s = document.createElement("a");
    s.className = "_paintBrush-ctrlitem _paintBrush-ctrlitem--undo", s.addEventListener("click", (o) => {
      var l;
      if (o.stopPropagation(), this.configs.onClickUndo && this.configs.onClickUndo(), !this.canvas[this.uuid] || !this.data[this.uuid] || this.data[this.uuid].length === 0)
        return;
      const c = this.data[this.uuid].pop();
      c && this.emitStateChange({
        type: y.Undo,
        color: this.color,
        ready: this.ready,
        state: c,
        uuid: this.uuid
      });
      const d = (l = this.canvas[this.uuid]) == null ? void 0 : l.getContext("2d");
      if (!this.canvas[this.uuid])
        return;
      const { width: I, height: u } = this.canvas[this.uuid];
      d && d.clearRect(0, 0, I, u), this.data[this.uuid].forEach((h) => this.handleDrawLine(this.uuid, h, { withUndo: !0 }));
    });
    const r = document.createElement("a");
    return r.className = "_paintBrush-ctrlitem _paintBrush-ctrlitem--close", r.addEventListener("click", (o) => {
      o.stopPropagation(), this.closeBrush(), this.configs.onClickClose && this.configs.onClickClose();
    }), [s, r].forEach((o) => {
      const c = document.createElement("i");
      c.className = "brush-icon";
      const d = document.createElement("span");
      d.className = "brush-txt", d.innerText = o.className.endsWith("undo") ? this.configs.onUndoText : this.configs.onExitText, o.appendChild(c), o.appendChild(d);
    }), n.appendChild(s), n.appendChild(r), e.appendChild(n), this.container.appendChild(e), e;
  }
  openBrush() {
    if (this.ready)
      return;
    this.canvas[this.uuid] || (this.canvas[this.uuid] = this.initCanvas("_paintBrush-canvas")), this.container.className = "brushing";
    const e = this.canvas[this.uuid];
    e.getContext("2d").clearRect(0, 0, e.width, e.height), this.openBrushHandle(), this.ready = !0, this.emit("readyChange", !0);
  }
  closeBrush() {
    this.ready && (this.container.className = "", this.data = {}, this.tempLine = {}, Object.keys(this.canvas).forEach((e) => {
      this.canvas[e].ontouchstart = () => !1, this.canvas[e].ontouchmove = () => !1, this.canvas[e].ontouchend = () => !1, this.canvas[e].ontouchcancel = () => !1;
      const n = this.canvas[e].getContext("2d");
      n && n.clearRect(0, 0, this.canvas[e].width, this.canvas[e].height);
    }), this.ready = !1, this.emit("readyChange", !1), this.emitStateChange({
      type: y.Exit,
      color: this.color,
      ready: !1,
      uuid: this.uuid
    }));
  }
  updateCurrentColor(e) {
    const n = this.canvas[this.uuid];
    if (!n)
      return;
    const s = n.getContext("2d");
    s && (this.configs.currentColor = e, s.strokeStyle = e);
  }
  openBrushHandle() {
    const e = this.canvas[this.uuid];
    if (!e)
      return;
    const n = e.getContext("2d");
    if (!n)
      return;
    const s = this.color || "#6D92FF";
    n.strokeStyle = s;
    let r = null, a = [], o, c = [], d = 0;
    const I = (u, l, h) => {
      const g = this.color || "#ff0000";
      n.strokeStyle = g, n.beginPath(), n.moveTo(u.x, u.y), n.quadraticCurveTo(l.x, l.y, h.x, h.y), n.stroke();
    };
    e.onmousedown = (u) => {
      u.preventDefault(), d = Date.now();
      const l = u.clientX, h = u.clientY;
      a = [], a.push({ x: l, y: h }), r = { x: l, y: h }, o = T({ x: l, y: h }, this.clientWidth, this.clientHeight), c = [];
    }, e.onmousemove = (u) => {
      if (u.preventDefault(), !r)
        return;
      const l = Number(u.clientX), h = Number(u.clientY);
      if (Math.abs(l - r.x) < 5 && Math.abs(h - r.y) < 5 || (a.push({ x: l, y: h }), c.push(T({ x: l, y: h }, this.clientWidth, this.clientHeight)), a.length < 3))
        return;
      const { control: g, end: f } = j(a);
      !g || !f || (I(r, g, f), r = f);
    }, e.onmouseup = (u) => {
      if (u.preventDefault(), r = null, a.length < 3)
        return;
      this.data[this.uuid] || (this.data[this.uuid] = []);
      const l = Date.now() - d, h = {
        move: Object.assign({}, o),
        uuid: this.uuid,
        line: [...c],
        color: this.color,
        duration: l < 1280 ? l : l < 2e3 ? 1280 : 0
        // 单次笔迹时长超过2000ms不加动画
      };
      this.data[this.uuid].push(h), P(() => {
        this.emitStateChange({
          type: y.Drawline,
          color: this.color,
          ready: this.ready,
          state: h,
          uuid: this.uuid
        });
      });
    }, e.ontouchstart = (u) => {
      u.preventDefault(), d = Date.now();
      const l = u.touches[0].clientX, h = u.touches[0].clientY;
      a = [], a.push({ x: l, y: h }), r = { x: l, y: h }, o = T({ x: l, y: h }, this.clientWidth, this.clientHeight), c = [];
    }, e.ontouchmove = (u) => {
      if (u.preventDefault(), !r)
        return;
      const l = Number(u.touches[0].clientX), h = Number(u.touches[0].clientY);
      if (Math.abs(l - r.x) < 5 && Math.abs(h - r.y) < 5 || (a.push({ x: l, y: h }), c.push(T({ x: l, y: h }, this.clientWidth, this.clientHeight)), a.length < 3))
        return;
      const { control: g, end: f } = j(a);
      !g || !f || (I(r, g, f), r = f);
    }, e.ontouchend = e.ontouchcancel = (u) => {
      if (u.preventDefault(), r = null, a.length < 3)
        return;
      this.data[this.uuid] || (this.data[this.uuid] = []);
      const l = Date.now() - d, h = {
        move: Object.assign({}, o),
        line: [...c],
        uuid: this.uuid,
        color: this.color,
        duration: l < 1280 ? l : l < 2e3 ? 1280 : 0
        // 单次笔迹时长超过2000ms不加动画
      };
      this.data[this.uuid].push(h), P(() => {
        this.emitStateChange({
          type: y.Drawline,
          color: this.color,
          ready: this.ready,
          state: h,
          uuid: this.uuid
        });
      });
    };
  }
  emitStateChange(e, n = !0) {
    if (e.type !== y.Drawline) {
      this.emit("stateChange", e, n);
      return;
    }
    const s = Date.now(), r = e.state;
    if (!r || !r.line)
      return;
    const a = Math.ceil(r.line.length / 100);
    for (let o = 0; o < a; o++) {
      const c = {
        uuid: this.uuid,
        color: this.color,
        ready: this.ready,
        type: e.type,
        state: {
          uuid: this.uuid,
          move: r.move,
          duration: r.duration,
          color: this.color,
          line: r.line.slice(o * 100, (o + 1) * 100)
        },
        timestamp: s,
        end: o === a - 1
      };
      U(o, 20, () => {
        this.emit("stateChange", c, n);
      });
    }
  }
  action(e) {
    const { ready: n, type: s, uuid: r } = e;
    if (!n && this.ready) {
      this.closeBrush();
      return;
    }
    if (n && !this.ready) {
      this.openBrush();
      return;
    }
    if (this.ready)
      switch (s) {
        case y.Drawline:
          const { state: a, timestamp: o, end: c } = e;
          if (!o || !a)
            return;
          this.tempLine[o] = [].concat(this.tempLine[o] || [], a.line), c && (Object.assign(a, { line: this.tempLine[o] }), this.handleDrawLine(r, a, {}, () => delete this.tempLine[o]));
          break;
        case y.Undo:
          this.handleUndo(r);
          break;
      }
  }
  handleDrawLine(e, n, { withUndo: s = !1 }, r = m) {
    !n || Object.prototype.toString.call(n) != "[object Object]" || Object.keys(n).length === 0 || G(() => new Promise((a) => {
      if (s || (this.canvas[e] || (this.canvas[e] = this.initCanvas("_paintBrush-canvas--sync")), this.data[e] || (this.data[e] = []), this.data[e].push(n)), !this.canvas[e])
        return;
      const o = this.canvas[e].getContext("2d");
      if (!o)
        return;
      const { line: c = [], color: d = "black", duration: I = 0, uuid: u } = n, l = L(n.move || {}, this.clientWidth, this.clientHeight);
      let h = [l];
      if (o.strokeStyle = d, o.beginPath(), o.moveTo(l.x, l.y), I && !s) {
        let g = [];
        const f = this;
        f.tween = F({ step: 0 }, { step: c.length - 1 }, I).onUpdate(({ step: p }) => {
          var v;
          if (f.tweening = !0, !f.ready)
            return o.clearRect(0, 0, f.canvas[u].width, f.canvas[u].height), (v = f.tween) == null ? void 0 : v.stop();
          const A = Math.floor(p);
          if (!g.find((D) => D === A)) {
            if (g.push(A), h.push(L(c[A], f.clientWidth, f.clientHeight)), h.length < 3)
              return;
            const { control: D, end: O } = j(h);
            if (!D || !O)
              return;
            o.quadraticCurveTo(D.x, D.y, O.x, O.y), o.stroke();
          }
        }).onComplete((p) => {
          f.tween = void 0, f.tweening = !1, g = [], h = [], r && r(), a();
        });
      } else {
        for (let g = 0; g < c.length; g++) {
          if (h.push(L(c[g], this.clientWidth, this.clientHeight)), h.length < 3)
            continue;
          const { control: f, end: p } = j(h);
          !f || !p || o.quadraticCurveTo(f.x, f.y, p.x, p.y);
        }
        o.stroke(), h = [], r && r(), a();
      }
    }));
  }
  handleUndo(e) {
    if (!this.canvas[e] || !this.data[e] || this.data[e].length === 0)
      return;
    this.data[e].pop();
    const n = () => {
      var r;
      const s = (r = this.canvas[e]) == null ? void 0 : r.getContext("2d");
      s && s.clearRect(0, 0, this.canvas[e].width, this.canvas[e].height), this.data[e].forEach((a) => this.handleDrawLine(e, a, { withUndo: !0 }));
    };
    if (this.tween && this.tweening) {
      this.tween.stop(), P(n, 60);
      return;
    }
    n();
  }
  destroyBrush() {
    this.closeBrush(), this.ready = !1, this.emit("readyChange", !0);
  }
}
class tt {
  constructor(i = {}) {
    C(this, "controller");
    const e = Object.assign({
      currentColor: "#f44336",
      onUndoText: "回退",
      onExitText: "关闭"
    }, i);
    this.controller = new q(e);
  }
  on(i, e) {
    this.controller.on(i, e);
  }
  off(i, e) {
    this.controller.off(i, e);
  }
  once(i, e) {
    this.controller.once(i, e);
  }
  /**
   * 显示画笔。
   */
  show() {
    this.controller.openBrush();
  }
  action(i) {
    this.controller.action(i);
  }
  /**
   * 获取画笔状态。
   */
  get state() {
    return this.controller.state;
  }
  get configs() {
    return this.controller.configs;
  }
  /**
   * 销毁。
   *
   * @deprecated
   *
   * @description 画笔应该维护一个 **全局单例**，重复利用。
   */
  dispose() {
    return this.controller.destroyBrush();
  }
  setCurrentColor(i) {
    this.controller.updateCurrentColor(i);
  }
}
export {
  tt as PaintBrush,
  y as PaintBrushTypeEnum
};
