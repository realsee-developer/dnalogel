var y = Object.freeze({
  Linear: Object.freeze({
    None: function(t) {
      return t;
    },
    In: function(t) {
      return this.None(t);
    },
    Out: function(t) {
      return this.None(t);
    },
    InOut: function(t) {
      return this.None(t);
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
      var e = 1.70158;
      return t === 1 ? 1 : t * t * ((e + 1) * t - e);
    },
    Out: function(t) {
      var e = 1.70158;
      return t === 0 ? 0 : --t * t * ((e + 1) * t + e) + 1;
    },
    InOut: function(t) {
      var e = 2.5949095;
      return (t *= 2) < 1 ? 0.5 * (t * t * ((e + 1) * t - e)) : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
    }
  }),
  Bounce: Object.freeze({
    In: function(t) {
      return 1 - y.Bounce.Out(1 - t);
    },
    Out: function(t) {
      return t < 0.36363636363636365 ? 7.5625 * t * t : t < 0.7272727272727273 ? 7.5625 * (t -= 0.5454545454545454) * t + 0.75 : t < 0.9090909090909091 ? 7.5625 * (t -= 0.8181818181818182) * t + 0.9375 : 7.5625 * (t -= 0.9545454545454546) * t + 0.984375;
    },
    InOut: function(t) {
      return t < 0.5 ? y.Bounce.In(t * 2) * 0.5 : y.Bounce.Out(t * 2 - 1) * 0.5 + 0.5;
    }
  }),
  generatePow: function(t) {
    return t === void 0 && (t = 4), t = t < Number.EPSILON ? Number.EPSILON : t, t = t > 1e4 ? 1e4 : t, {
      In: function(e) {
        return Math.pow(e, t);
      },
      Out: function(e) {
        return 1 - Math.pow(1 - e, t);
      },
      InOut: function(e) {
        return e < 0.5 ? Math.pow(e * 2, t) / 2 : (1 - Math.pow(2 - e * 2, t)) / 2 + 0.5;
      }
    };
  }
}), v = function() {
  return performance.now();
}, P = (
  /** @class */
  function() {
    function t() {
      this._tweens = {}, this._tweensAddedDuringUpdate = {};
    }
    return t.prototype.getAll = function() {
      var e = this;
      return Object.keys(this._tweens).map(function(i) {
        return e._tweens[i];
      });
    }, t.prototype.removeAll = function() {
      this._tweens = {};
    }, t.prototype.add = function(e) {
      this._tweens[e.getId()] = e, this._tweensAddedDuringUpdate[e.getId()] = e;
    }, t.prototype.remove = function(e) {
      delete this._tweens[e.getId()], delete this._tweensAddedDuringUpdate[e.getId()];
    }, t.prototype.update = function(e, i) {
      e === void 0 && (e = v()), i === void 0 && (i = !1);
      var r = Object.keys(this._tweens);
      if (r.length === 0)
        return !1;
      for (; r.length > 0; ) {
        this._tweensAddedDuringUpdate = {};
        for (var n = 0; n < r.length; n++) {
          var s = this._tweens[r[n]], a = !i;
          s && s.update(e, a) === !1 && !i && delete this._tweens[r[n]];
        }
        r = Object.keys(this._tweensAddedDuringUpdate);
      }
      return !0;
    }, t;
  }()
), d = {
  Linear: function(t, e) {
    var i = t.length - 1, r = i * e, n = Math.floor(r), s = d.Utils.Linear;
    return e < 0 ? s(t[0], t[1], r) : e > 1 ? s(t[i], t[i - 1], i - r) : s(t[n], t[n + 1 > i ? i : n + 1], r - n);
  },
  Bezier: function(t, e) {
    for (var i = 0, r = t.length - 1, n = Math.pow, s = d.Utils.Bernstein, a = 0; a <= r; a++)
      i += n(1 - e, r - a) * n(e, a) * t[a] * s(r, a);
    return i;
  },
  CatmullRom: function(t, e) {
    var i = t.length - 1, r = i * e, n = Math.floor(r), s = d.Utils.CatmullRom;
    return t[0] === t[i] ? (e < 0 && (n = Math.floor(r = i * (1 + e))), s(t[(n - 1 + i) % i], t[n], t[(n + 1) % i], t[(n + 2) % i], r - n)) : e < 0 ? t[0] - (s(t[0], t[0], t[1], t[1], -r) - t[0]) : e > 1 ? t[i] - (s(t[i], t[i], t[i - 1], t[i - 1], r - i) - t[i]) : s(t[n ? n - 1 : 0], t[n], t[i < n + 1 ? i : n + 1], t[i < n + 2 ? i : n + 2], r - n);
  },
  Utils: {
    Linear: function(t, e, i) {
      return (e - t) * i + t;
    },
    Bernstein: function(t, e) {
      var i = d.Utils.Factorial;
      return i(t) / i(e) / i(t - e);
    },
    Factorial: function() {
      var t = [1];
      return function(e) {
        var i = 1;
        if (t[e])
          return t[e];
        for (var r = e; r > 1; r--)
          i *= r;
        return t[e] = i, i;
      };
    }(),
    CatmullRom: function(t, e, i, r, n) {
      var s = (i - t) * 0.5, a = (r - e) * 0.5, h = n * n, f = n * h;
      return (2 * e - 2 * i + s + a) * f + (-3 * e + 3 * i - 2 * s - a) * h + s * n + e;
    }
  }
}, w = (
  /** @class */
  function() {
    function t() {
    }
    return t.nextId = function() {
      return t._nextId++;
    }, t._nextId = 0, t;
  }()
), O = new P(), M = (
  /** @class */
  function() {
    function t(e, i) {
      i === void 0 && (i = O), this._object = e, this._group = i, this._isPaused = !1, this._pauseStart = 0, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._isDynamic = !1, this._initialRepeat = 0, this._repeat = 0, this._yoyo = !1, this._isPlaying = !1, this._reversed = !1, this._delayTime = 0, this._startTime = 0, this._easingFunction = y.Linear.None, this._interpolationFunction = d.Linear, this._chainedTweens = [], this._onStartCallbackFired = !1, this._onEveryStartCallbackFired = !1, this._id = w.nextId(), this._isChainStopped = !1, this._propertiesAreSetUp = !1, this._goToEnd = !1;
    }
    return t.prototype.getId = function() {
      return this._id;
    }, t.prototype.isPlaying = function() {
      return this._isPlaying;
    }, t.prototype.isPaused = function() {
      return this._isPaused;
    }, t.prototype.getDuration = function() {
      return this._duration;
    }, t.prototype.to = function(e, i) {
      if (i === void 0 && (i = 1e3), this._isPlaying)
        throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");
      return this._valuesEnd = e, this._propertiesAreSetUp = !1, this._duration = i < 0 ? 0 : i, this;
    }, t.prototype.duration = function(e) {
      return e === void 0 && (e = 1e3), this._duration = e < 0 ? 0 : e, this;
    }, t.prototype.dynamic = function(e) {
      return e === void 0 && (e = !1), this._isDynamic = e, this;
    }, t.prototype.start = function(e, i) {
      if (e === void 0 && (e = v()), i === void 0 && (i = !1), this._isPlaying)
        return this;
      if (this._group && this._group.add(this), this._repeat = this._initialRepeat, this._reversed) {
        this._reversed = !1;
        for (var r in this._valuesStartRepeat)
          this._swapEndStartRepeatValues(r), this._valuesStart[r] = this._valuesStartRepeat[r];
      }
      if (this._isPlaying = !0, this._isPaused = !1, this._onStartCallbackFired = !1, this._onEveryStartCallbackFired = !1, this._isChainStopped = !1, this._startTime = e, this._startTime += this._delayTime, !this._propertiesAreSetUp || i) {
        if (this._propertiesAreSetUp = !0, !this._isDynamic) {
          var n = {};
          for (var s in this._valuesEnd)
            n[s] = this._valuesEnd[s];
          this._valuesEnd = n;
        }
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat, i);
      }
      return this;
    }, t.prototype.startFromCurrentValues = function(e) {
      return this.start(e, !0);
    }, t.prototype._setupProperties = function(e, i, r, n, s) {
      for (var a in r) {
        var h = e[a], f = Array.isArray(h), _ = f ? "array" : typeof h, l = !f && Array.isArray(r[a]);
        if (!(_ === "undefined" || _ === "function")) {
          if (l) {
            var u = r[a];
            if (u.length === 0)
              continue;
            for (var C = [h], p = 0, b = u.length; p < b; p += 1) {
              var I = this._handleRelativeValue(h, u[p]);
              if (isNaN(I)) {
                l = !1, console.warn("Found invalid interpolation list. Skipping.");
                break;
              }
              C.push(I);
            }
            l && (r[a] = C);
          }
          if ((_ === "object" || f) && h && !l) {
            i[a] = f ? [] : {};
            var g = h;
            for (var c in g)
              i[a][c] = g[c];
            n[a] = f ? [] : {};
            var u = r[a];
            if (!this._isDynamic) {
              var S = {};
              for (var c in u)
                S[c] = u[c];
              r[a] = u = S;
            }
            this._setupProperties(g, i[a], u, n[a], s);
          } else
            (typeof i[a] == "undefined" || s) && (i[a] = h), f || (i[a] *= 1), l ? n[a] = r[a].slice().reverse() : n[a] = i[a] || 0;
        }
      }
    }, t.prototype.stop = function() {
      return this._isChainStopped || (this._isChainStopped = !0, this.stopChainedTweens()), this._isPlaying ? (this._group && this._group.remove(this), this._isPlaying = !1, this._isPaused = !1, this._onStopCallback && this._onStopCallback(this._object), this) : this;
    }, t.prototype.end = function() {
      return this._goToEnd = !0, this.update(1 / 0), this;
    }, t.prototype.pause = function(e) {
      return e === void 0 && (e = v()), this._isPaused || !this._isPlaying ? this : (this._isPaused = !0, this._pauseStart = e, this._group && this._group.remove(this), this);
    }, t.prototype.resume = function(e) {
      return e === void 0 && (e = v()), !this._isPaused || !this._isPlaying ? this : (this._isPaused = !1, this._startTime += e - this._pauseStart, this._pauseStart = 0, this._group && this._group.add(this), this);
    }, t.prototype.stopChainedTweens = function() {
      for (var e = 0, i = this._chainedTweens.length; e < i; e++)
        this._chainedTweens[e].stop();
      return this;
    }, t.prototype.group = function(e) {
      return e === void 0 && (e = O), this._group = e, this;
    }, t.prototype.delay = function(e) {
      return e === void 0 && (e = 0), this._delayTime = e, this;
    }, t.prototype.repeat = function(e) {
      return e === void 0 && (e = 0), this._initialRepeat = e, this._repeat = e, this;
    }, t.prototype.repeatDelay = function(e) {
      return this._repeatDelayTime = e, this;
    }, t.prototype.yoyo = function(e) {
      return e === void 0 && (e = !1), this._yoyo = e, this;
    }, t.prototype.easing = function(e) {
      return e === void 0 && (e = y.Linear.None), this._easingFunction = e, this;
    }, t.prototype.interpolation = function(e) {
      return e === void 0 && (e = d.Linear), this._interpolationFunction = e, this;
    }, t.prototype.chain = function() {
      for (var e = [], i = 0; i < arguments.length; i++)
        e[i] = arguments[i];
      return this._chainedTweens = e, this;
    }, t.prototype.onStart = function(e) {
      return this._onStartCallback = e, this;
    }, t.prototype.onEveryStart = function(e) {
      return this._onEveryStartCallback = e, this;
    }, t.prototype.onUpdate = function(e) {
      return this._onUpdateCallback = e, this;
    }, t.prototype.onRepeat = function(e) {
      return this._onRepeatCallback = e, this;
    }, t.prototype.onComplete = function(e) {
      return this._onCompleteCallback = e, this;
    }, t.prototype.onStop = function(e) {
      return this._onStopCallback = e, this;
    }, t.prototype.update = function(e, i) {
      var r = this, n;
      if (e === void 0 && (e = v()), i === void 0 && (i = !0), this._isPaused)
        return !0;
      var s, a = this._startTime + this._duration;
      if (!this._goToEnd && !this._isPlaying) {
        if (e > a)
          return !1;
        i && this.start(e, !0);
      }
      if (this._goToEnd = !1, e < this._startTime)
        return !0;
      this._onStartCallbackFired === !1 && (this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = !0), this._onEveryStartCallbackFired === !1 && (this._onEveryStartCallback && this._onEveryStartCallback(this._object), this._onEveryStartCallbackFired = !0);
      var h = e - this._startTime, f = this._duration + ((n = this._repeatDelayTime) !== null && n !== void 0 ? n : this._delayTime), _ = this._duration + this._repeat * f, l = function() {
        if (r._duration === 0 || h > _)
          return 1;
        var g = Math.trunc(h / f), c = h - g * f, S = Math.min(c / r._duration, 1);
        return S === 0 && h === r._duration ? 1 : S;
      }, u = l(), C = this._easingFunction(u);
      if (this._updateProperties(this._object, this._valuesStart, this._valuesEnd, C), this._onUpdateCallback && this._onUpdateCallback(this._object, u), this._duration === 0 || h >= this._duration)
        if (this._repeat > 0) {
          var p = Math.min(Math.trunc((h - this._duration) / f) + 1, this._repeat);
          isFinite(this._repeat) && (this._repeat -= p);
          for (s in this._valuesStartRepeat)
            !this._yoyo && typeof this._valuesEnd[s] == "string" && (this._valuesStartRepeat[s] = // eslint-disable-next-line
            // @ts-ignore FIXME?
            this._valuesStartRepeat[s] + parseFloat(this._valuesEnd[s])), this._yoyo && this._swapEndStartRepeatValues(s), this._valuesStart[s] = this._valuesStartRepeat[s];
          return this._yoyo && (this._reversed = !this._reversed), this._startTime += f * p, this._onRepeatCallback && this._onRepeatCallback(this._object), this._onEveryStartCallbackFired = !1, !0;
        } else {
          this._onCompleteCallback && this._onCompleteCallback(this._object);
          for (var b = 0, I = this._chainedTweens.length; b < I; b++)
            this._chainedTweens[b].start(this._startTime + this._duration, !1);
          return this._isPlaying = !1, !1;
        }
      return !0;
    }, t.prototype._updateProperties = function(e, i, r, n) {
      for (var s in r)
        if (i[s] !== void 0) {
          var a = i[s] || 0, h = r[s], f = Array.isArray(e[s]), _ = Array.isArray(h), l = !f && _;
          l ? e[s] = this._interpolationFunction(h, n) : typeof h == "object" && h ? this._updateProperties(e[s], a, h, n) : (h = this._handleRelativeValue(a, h), typeof h == "number" && (e[s] = a + (h - a) * n));
        }
    }, t.prototype._handleRelativeValue = function(e, i) {
      return typeof i != "string" ? i : i.charAt(0) === "+" || i.charAt(0) === "-" ? e + parseFloat(i) : parseFloat(i);
    }, t.prototype._swapEndStartRepeatValues = function(e) {
      var i = this._valuesStartRepeat[e], r = this._valuesEnd[e];
      typeof r == "string" ? this._valuesStartRepeat[e] = this._valuesStartRepeat[e] + parseFloat(r) : this._valuesStartRepeat[e] = this._valuesEnd[e], this._valuesEnd[e] = i;
    }, t;
  }()
), T = "23.1.1", E = w.nextId, o = O, R = o.getAll.bind(o), k = o.removeAll.bind(o), A = o.add.bind(o), j = o.remove.bind(o), F = o.update.bind(o), U = {
  Easing: y,
  Group: P,
  Interpolation: d,
  now: v,
  Sequence: w,
  nextId: E,
  Tween: M,
  VERSION: T,
  getAll: R,
  removeAll: k,
  add: A,
  remove: j,
  update: F
};
export {
  y as Easing,
  M as Tween,
  U as exports,
  j as remove
};
