var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
function noop() {
}
const promise = () => Promise.resolve();
const state = {
  __queue: Promise.resolve()
};
function queue(promiseCallback = promise) {
  state.__queue = state.__queue.then(promiseCallback).catch(promise);
}
function transformCoords(coords, cw, ch) {
  const _x = coords.x;
  const _y = coords.y;
  const x = Math.floor(_x / cw * 1e4) / 1e4;
  const y = Math.floor(_y / ch * 1e4) / 1e4;
  return { x, y };
}
function unTransformCoords(coords, cw, ch) {
  const { x: _x, y: _y } = coords;
  const x = _x * cw;
  const y = _y * ch;
  return { x, y };
}
function getQuadraticCurvePoint(points) {
  if (points.length < 2)
    return {};
  const lastTwo = points.slice(-2);
  const control = lastTwo[0];
  const end = {
    x: (lastTwo[0].x + lastTwo[1].x) / 2,
    y: (lastTwo[0].y + lastTwo[1].y) / 2
  };
  return { control, end };
}
function execInterval(i, time, callback = noop) {
  new Promise((resolve) => {
    setTimeout(() => {
      callback();
      resolve(true);
    }, time * i);
  });
}
const _window = window;
const _requestAnimationFrame = window.requestAnimationFrame || _window.webkitRequestAnimationFrame || ((fn) => setTimeout(fn, 16));
function nextFrame(fn, delay = 0) {
  if (delay <= 0)
    _requestAnimationFrame(fn);
  else
    _requestAnimationFrame(() => nextFrame(fn, delay - 1));
}
var Easing$1 = {
  Linear: {
    None: function(amount) {
      return amount;
    }
  },
  Quadratic: {
    In: function(amount) {
      return amount * amount;
    },
    Out: function(amount) {
      return amount * (2 - amount);
    },
    InOut: function(amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount;
      }
      return -0.5 * (--amount * (amount - 2) - 1);
    }
  },
  Cubic: {
    In: function(amount) {
      return amount * amount * amount;
    },
    Out: function(amount) {
      return --amount * amount * amount + 1;
    },
    InOut: function(amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount * amount;
      }
      return 0.5 * ((amount -= 2) * amount * amount + 2);
    }
  },
  Quartic: {
    In: function(amount) {
      return amount * amount * amount * amount;
    },
    Out: function(amount) {
      return 1 - --amount * amount * amount * amount;
    },
    InOut: function(amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount * amount * amount;
      }
      return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
    }
  },
  Quintic: {
    In: function(amount) {
      return amount * amount * amount * amount * amount;
    },
    Out: function(amount) {
      return --amount * amount * amount * amount * amount + 1;
    },
    InOut: function(amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount * amount * amount * amount;
      }
      return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
    }
  },
  Sinusoidal: {
    In: function(amount) {
      return 1 - Math.cos(amount * Math.PI / 2);
    },
    Out: function(amount) {
      return Math.sin(amount * Math.PI / 2);
    },
    InOut: function(amount) {
      return 0.5 * (1 - Math.cos(Math.PI * amount));
    }
  },
  Exponential: {
    In: function(amount) {
      return amount === 0 ? 0 : Math.pow(1024, amount - 1);
    },
    Out: function(amount) {
      return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
    },
    InOut: function(amount) {
      if (amount === 0) {
        return 0;
      }
      if (amount === 1) {
        return 1;
      }
      if ((amount *= 2) < 1) {
        return 0.5 * Math.pow(1024, amount - 1);
      }
      return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
    }
  },
  Circular: {
    In: function(amount) {
      return 1 - Math.sqrt(1 - amount * amount);
    },
    Out: function(amount) {
      return Math.sqrt(1 - --amount * amount);
    },
    InOut: function(amount) {
      if ((amount *= 2) < 1) {
        return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
      }
      return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
    }
  },
  Elastic: {
    In: function(amount) {
      if (amount === 0) {
        return 0;
      }
      if (amount === 1) {
        return 1;
      }
      return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
    },
    Out: function(amount) {
      if (amount === 0) {
        return 0;
      }
      if (amount === 1) {
        return 1;
      }
      return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
    },
    InOut: function(amount) {
      if (amount === 0) {
        return 0;
      }
      if (amount === 1) {
        return 1;
      }
      amount *= 2;
      if (amount < 1) {
        return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
      }
      return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
    }
  },
  Back: {
    In: function(amount) {
      var s = 1.70158;
      return amount * amount * ((s + 1) * amount - s);
    },
    Out: function(amount) {
      var s = 1.70158;
      return --amount * amount * ((s + 1) * amount + s) + 1;
    },
    InOut: function(amount) {
      var s = 1.70158 * 1.525;
      if ((amount *= 2) < 1) {
        return 0.5 * (amount * amount * ((s + 1) * amount - s));
      }
      return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
    }
  },
  Bounce: {
    In: function(amount) {
      return 1 - Easing$1.Bounce.Out(1 - amount);
    },
    Out: function(amount) {
      if (amount < 1 / 2.75) {
        return 7.5625 * amount * amount;
      } else if (amount < 2 / 2.75) {
        return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
      } else if (amount < 2.5 / 2.75) {
        return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
      } else {
        return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
      }
    },
    InOut: function(amount) {
      if (amount < 0.5) {
        return Easing$1.Bounce.In(amount * 2) * 0.5;
      }
      return Easing$1.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
    }
  }
};
var now;
if (typeof self === "undefined" && typeof process !== "undefined" && process.hrtime) {
  now = function() {
    var time = process.hrtime();
    return time[0] * 1e3 + time[1] / 1e6;
  };
} else if (typeof self !== "undefined" && self.performance !== void 0 && self.performance.now !== void 0) {
  now = self.performance.now.bind(self.performance);
} else if (Date.now !== void 0) {
  now = Date.now;
} else {
  now = function() {
    return new Date().getTime();
  };
}
var now$1 = now;
var Group = function() {
  function Group2() {
    this._tweens = {};
    this._tweensAddedDuringUpdate = {};
  }
  Group2.prototype.getAll = function() {
    var _this = this;
    return Object.keys(this._tweens).map(function(tweenId) {
      return _this._tweens[tweenId];
    });
  };
  Group2.prototype.removeAll = function() {
    this._tweens = {};
  };
  Group2.prototype.add = function(tween2) {
    this._tweens[tween2.getId()] = tween2;
    this._tweensAddedDuringUpdate[tween2.getId()] = tween2;
  };
  Group2.prototype.remove = function(tween2) {
    delete this._tweens[tween2.getId()];
    delete this._tweensAddedDuringUpdate[tween2.getId()];
  };
  Group2.prototype.update = function(time, preserve) {
    if (time === void 0) {
      time = now$1();
    }
    if (preserve === void 0) {
      preserve = false;
    }
    var tweenIds = Object.keys(this._tweens);
    if (tweenIds.length === 0) {
      return false;
    }
    while (tweenIds.length > 0) {
      this._tweensAddedDuringUpdate = {};
      for (var i = 0; i < tweenIds.length; i++) {
        var tween2 = this._tweens[tweenIds[i]];
        var autoStart = !preserve;
        if (tween2 && tween2.update(time, autoStart) === false && !preserve) {
          delete this._tweens[tweenIds[i]];
        }
      }
      tweenIds = Object.keys(this._tweensAddedDuringUpdate);
    }
    return true;
  };
  return Group2;
}();
var Interpolation = {
  Linear: function(v, k) {
    var m = v.length - 1;
    var f = m * k;
    var i = Math.floor(f);
    var fn = Interpolation.Utils.Linear;
    if (k < 0) {
      return fn(v[0], v[1], f);
    }
    if (k > 1) {
      return fn(v[m], v[m - 1], m - f);
    }
    return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
  },
  Bezier: function(v, k) {
    var b = 0;
    var n = v.length - 1;
    var pw = Math.pow;
    var bn = Interpolation.Utils.Bernstein;
    for (var i = 0; i <= n; i++) {
      b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
    }
    return b;
  },
  CatmullRom: function(v, k) {
    var m = v.length - 1;
    var f = m * k;
    var i = Math.floor(f);
    var fn = Interpolation.Utils.CatmullRom;
    if (v[0] === v[m]) {
      if (k < 0) {
        i = Math.floor(f = m * (1 + k));
      }
      return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
    } else {
      if (k < 0) {
        return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
      }
      if (k > 1) {
        return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
      }
      return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
    }
  },
  Utils: {
    Linear: function(p0, p1, t) {
      return (p1 - p0) * t + p0;
    },
    Bernstein: function(n, i) {
      var fc = Interpolation.Utils.Factorial;
      return fc(n) / fc(i) / fc(n - i);
    },
    Factorial: function() {
      var a = [1];
      return function(n) {
        var s = 1;
        if (a[n]) {
          return a[n];
        }
        for (var i = n; i > 1; i--) {
          s *= i;
        }
        a[n] = s;
        return s;
      };
    }(),
    CatmullRom: function(p0, p1, p2, p3, t) {
      var v0 = (p2 - p0) * 0.5;
      var v1 = (p3 - p1) * 0.5;
      var t2 = t * t;
      var t3 = t * t2;
      return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
    }
  }
};
var Sequence = function() {
  function Sequence2() {
  }
  Sequence2.nextId = function() {
    return Sequence2._nextId++;
  };
  Sequence2._nextId = 0;
  return Sequence2;
}();
var mainGroup = new Group();
var Tween = function() {
  function Tween2(_object, _group) {
    if (_group === void 0) {
      _group = mainGroup;
    }
    this._object = _object;
    this._group = _group;
    this._isPaused = false;
    this._pauseStart = 0;
    this._valuesStart = {};
    this._valuesEnd = {};
    this._valuesStartRepeat = {};
    this._duration = 1e3;
    this._initialRepeat = 0;
    this._repeat = 0;
    this._yoyo = false;
    this._isPlaying = false;
    this._reversed = false;
    this._delayTime = 0;
    this._startTime = 0;
    this._easingFunction = Easing$1.Linear.None;
    this._interpolationFunction = Interpolation.Linear;
    this._chainedTweens = [];
    this._onStartCallbackFired = false;
    this._id = Sequence.nextId();
    this._isChainStopped = false;
    this._goToEnd = false;
  }
  Tween2.prototype.getId = function() {
    return this._id;
  };
  Tween2.prototype.isPlaying = function() {
    return this._isPlaying;
  };
  Tween2.prototype.isPaused = function() {
    return this._isPaused;
  };
  Tween2.prototype.to = function(properties, duration) {
    this._valuesEnd = Object.create(properties);
    if (duration !== void 0) {
      this._duration = duration;
    }
    return this;
  };
  Tween2.prototype.duration = function(d) {
    this._duration = d;
    return this;
  };
  Tween2.prototype.start = function(time) {
    if (this._isPlaying) {
      return this;
    }
    this._group && this._group.add(this);
    this._repeat = this._initialRepeat;
    if (this._reversed) {
      this._reversed = false;
      for (var property in this._valuesStartRepeat) {
        this._swapEndStartRepeatValues(property);
        this._valuesStart[property] = this._valuesStartRepeat[property];
      }
    }
    this._isPlaying = true;
    this._isPaused = false;
    this._onStartCallbackFired = false;
    this._isChainStopped = false;
    this._startTime = time !== void 0 ? typeof time === "string" ? now$1() + parseFloat(time) : time : now$1();
    this._startTime += this._delayTime;
    this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat);
    return this;
  };
  Tween2.prototype._setupProperties = function(_object, _valuesStart, _valuesEnd, _valuesStartRepeat) {
    for (var property in _valuesEnd) {
      var startValue = _object[property];
      var startValueIsArray = Array.isArray(startValue);
      var propType = startValueIsArray ? "array" : typeof startValue;
      var isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
      if (propType === "undefined" || propType === "function") {
        continue;
      }
      if (isInterpolationList) {
        var endValues = _valuesEnd[property];
        if (endValues.length === 0) {
          continue;
        }
        endValues = endValues.map(this._handleRelativeValue.bind(this, startValue));
        _valuesEnd[property] = [startValue].concat(endValues);
      }
      if ((propType === "object" || startValueIsArray) && startValue && !isInterpolationList) {
        _valuesStart[property] = startValueIsArray ? [] : {};
        for (var prop in startValue) {
          _valuesStart[property][prop] = startValue[prop];
        }
        _valuesStartRepeat[property] = startValueIsArray ? [] : {};
        this._setupProperties(startValue, _valuesStart[property], _valuesEnd[property], _valuesStartRepeat[property]);
      } else {
        if (typeof _valuesStart[property] === "undefined") {
          _valuesStart[property] = startValue;
        }
        if (!startValueIsArray) {
          _valuesStart[property] *= 1;
        }
        if (isInterpolationList) {
          _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
        } else {
          _valuesStartRepeat[property] = _valuesStart[property] || 0;
        }
      }
    }
  };
  Tween2.prototype.stop = function() {
    if (!this._isChainStopped) {
      this._isChainStopped = true;
      this.stopChainedTweens();
    }
    if (!this._isPlaying) {
      return this;
    }
    this._group && this._group.remove(this);
    this._isPlaying = false;
    this._isPaused = false;
    if (this._onStopCallback) {
      this._onStopCallback(this._object);
    }
    return this;
  };
  Tween2.prototype.end = function() {
    this._goToEnd = true;
    this.update(Infinity);
    return this;
  };
  Tween2.prototype.pause = function(time) {
    if (time === void 0) {
      time = now$1();
    }
    if (this._isPaused || !this._isPlaying) {
      return this;
    }
    this._isPaused = true;
    this._pauseStart = time;
    this._group && this._group.remove(this);
    return this;
  };
  Tween2.prototype.resume = function(time) {
    if (time === void 0) {
      time = now$1();
    }
    if (!this._isPaused || !this._isPlaying) {
      return this;
    }
    this._isPaused = false;
    this._startTime += time - this._pauseStart;
    this._pauseStart = 0;
    this._group && this._group.add(this);
    return this;
  };
  Tween2.prototype.stopChainedTweens = function() {
    for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
      this._chainedTweens[i].stop();
    }
    return this;
  };
  Tween2.prototype.group = function(group) {
    this._group = group;
    return this;
  };
  Tween2.prototype.delay = function(amount) {
    this._delayTime = amount;
    return this;
  };
  Tween2.prototype.repeat = function(times) {
    this._initialRepeat = times;
    this._repeat = times;
    return this;
  };
  Tween2.prototype.repeatDelay = function(amount) {
    this._repeatDelayTime = amount;
    return this;
  };
  Tween2.prototype.yoyo = function(yoyo) {
    this._yoyo = yoyo;
    return this;
  };
  Tween2.prototype.easing = function(easingFunction) {
    this._easingFunction = easingFunction;
    return this;
  };
  Tween2.prototype.interpolation = function(interpolationFunction) {
    this._interpolationFunction = interpolationFunction;
    return this;
  };
  Tween2.prototype.chain = function() {
    var tweens = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      tweens[_i] = arguments[_i];
    }
    this._chainedTweens = tweens;
    return this;
  };
  Tween2.prototype.onStart = function(callback) {
    this._onStartCallback = callback;
    return this;
  };
  Tween2.prototype.onUpdate = function(callback) {
    this._onUpdateCallback = callback;
    return this;
  };
  Tween2.prototype.onRepeat = function(callback) {
    this._onRepeatCallback = callback;
    return this;
  };
  Tween2.prototype.onComplete = function(callback) {
    this._onCompleteCallback = callback;
    return this;
  };
  Tween2.prototype.onStop = function(callback) {
    this._onStopCallback = callback;
    return this;
  };
  Tween2.prototype.update = function(time, autoStart) {
    if (time === void 0) {
      time = now$1();
    }
    if (autoStart === void 0) {
      autoStart = true;
    }
    if (this._isPaused)
      return true;
    var property;
    var elapsed;
    var endTime = this._startTime + this._duration;
    if (!this._goToEnd && !this._isPlaying) {
      if (time > endTime)
        return false;
      if (autoStart)
        this.start(time);
    }
    this._goToEnd = false;
    if (time < this._startTime) {
      return true;
    }
    if (this._onStartCallbackFired === false) {
      if (this._onStartCallback) {
        this._onStartCallback(this._object);
      }
      this._onStartCallbackFired = true;
    }
    elapsed = (time - this._startTime) / this._duration;
    elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
    var value = this._easingFunction(elapsed);
    this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
    if (this._onUpdateCallback) {
      this._onUpdateCallback(this._object, elapsed);
    }
    if (elapsed === 1) {
      if (this._repeat > 0) {
        if (isFinite(this._repeat)) {
          this._repeat--;
        }
        for (property in this._valuesStartRepeat) {
          if (!this._yoyo && typeof this._valuesEnd[property] === "string") {
            this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
          }
          if (this._yoyo) {
            this._swapEndStartRepeatValues(property);
          }
          this._valuesStart[property] = this._valuesStartRepeat[property];
        }
        if (this._yoyo) {
          this._reversed = !this._reversed;
        }
        if (this._repeatDelayTime !== void 0) {
          this._startTime = time + this._repeatDelayTime;
        } else {
          this._startTime = time + this._delayTime;
        }
        if (this._onRepeatCallback) {
          this._onRepeatCallback(this._object);
        }
        return true;
      } else {
        if (this._onCompleteCallback) {
          this._onCompleteCallback(this._object);
        }
        for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
          this._chainedTweens[i].start(this._startTime + this._duration);
        }
        this._isPlaying = false;
        return false;
      }
    }
    return true;
  };
  Tween2.prototype._updateProperties = function(_object, _valuesStart, _valuesEnd, value) {
    for (var property in _valuesEnd) {
      if (_valuesStart[property] === void 0) {
        continue;
      }
      var start = _valuesStart[property] || 0;
      var end = _valuesEnd[property];
      var startIsArray = Array.isArray(_object[property]);
      var endIsArray = Array.isArray(end);
      var isInterpolationList = !startIsArray && endIsArray;
      if (isInterpolationList) {
        _object[property] = this._interpolationFunction(end, value);
      } else if (typeof end === "object" && end) {
        this._updateProperties(_object[property], start, end, value);
      } else {
        end = this._handleRelativeValue(start, end);
        if (typeof end === "number") {
          _object[property] = start + (end - start) * value;
        }
      }
    }
  };
  Tween2.prototype._handleRelativeValue = function(start, end) {
    if (typeof end !== "string") {
      return end;
    }
    if (end.charAt(0) === "+" || end.charAt(0) === "-") {
      return start + parseFloat(end);
    } else {
      return parseFloat(end);
    }
  };
  Tween2.prototype._swapEndStartRepeatValues = function(property) {
    var tmp = this._valuesStartRepeat[property];
    var endValue = this._valuesEnd[property];
    if (typeof endValue === "string") {
      this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
    } else {
      this._valuesStartRepeat[property] = this._valuesEnd[property];
    }
    this._valuesEnd[property] = tmp;
  };
  return Tween2;
}();
var VERSION = "18.6.4";
var nextId = Sequence.nextId;
var TWEEN = mainGroup;
var getAll = TWEEN.getAll.bind(TWEEN);
var removeAll = TWEEN.removeAll.bind(TWEEN);
var add = TWEEN.add.bind(TWEEN);
var remove = TWEEN.remove.bind(TWEEN);
var update = TWEEN.update.bind(TWEEN);
var exports = {
  Easing: Easing$1,
  Group,
  Interpolation,
  now: now$1,
  Sequence,
  nextId,
  Tween,
  VERSION,
  getAll,
  removeAll,
  add,
  remove,
  update
};
const Easing = exports.Easing;
function tween(from, to, duration, easing = Easing.Linear.None) {
  const tweenInstance = new exports.Tween(from).to(to, duration).easing(easing).start();
  function animate(time) {
    if (!tweenInstance.update(time))
      return;
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
  return tweenInstance;
}
var PaintBrushTypeEnum = /* @__PURE__ */ ((PaintBrushTypeEnum2) => {
  PaintBrushTypeEnum2["Drawline"] = "Drawline";
  PaintBrushTypeEnum2["Undo"] = "Undo";
  PaintBrushTypeEnum2["Exit"] = "Exit";
  return PaintBrushTypeEnum2;
})(PaintBrushTypeEnum || {});
const EVENT_SYMBOL = Symbol("$$PAINT_BRUSH_EVENT$$");
function __generateEventIfNotExisted(instance) {
  if (!instance[EVENT_SYMBOL]) {
    instance[EVENT_SYMBOL] = {};
  }
  return instance[EVENT_SYMBOL];
}
function __removeEventIfNotExisted(instance) {
  if (!instance[EVENT_SYMBOL]) {
    delete instance[EVENT_SYMBOL];
  }
}
class Subscribe {
  hasListener(name) {
    const events = __generateEventIfNotExisted(this);
    return events && events[name] && events[name].length > 0;
  }
  on(name, callback, once) {
    const events = __generateEventIfNotExisted(this);
    if (!events[name])
      events[name] = [];
    events[name].push([callback, once || false]);
    return () => this.off(name, callback);
  }
  once(name, callback) {
    return this.on(name, callback, true);
  }
  off(name, callback) {
    if (name === void 0) {
      __removeEventIfNotExisted(this);
      return;
    }
    const events = __generateEventIfNotExisted(this);
    if (!events[name])
      events[name] = [];
    if (callback === void 0) {
      events[name].length = 0;
      return;
    }
    let index = 0;
    for (; index < events[name].length; index++) {
      if (events[name][index][0] === callback)
        break;
    }
    if (index < events[name].length) {
      events[name].splice(index, 1);
    }
  }
  emit(name, ...data) {
    let canceled = false;
    const events = __generateEventIfNotExisted(this);
    const event = events[name] || [];
    for (let one of event.slice()) {
      const [callback, once = false] = one;
      const result = callback(...data);
      if (once)
        this.off(name, callback);
      if (result === false)
        canceled = true;
    }
    return canceled;
  }
}
function S4() {
  return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
}
function uuid() {
  return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
}
const PaintBrushStyle = `
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

._paintBrush-ctrlitem--undo {
  .brush-icon {
    background-image: url("//vrlab-static.ljcdn.com/release/web/revoke.ab7694ef.svg");
    background-size: 100%;
    width: 22px;
    height: 22px;
  }
}

._paintBrush-ctrlitem--close {
  .brush-icon {
    background-image: url("//vrlab-static.ljcdn.com/release/web/exit_paintbrush.02bc1341.svg");
    background-size: 100%;
    width: 22px;
    height: 22px;
  }
}

</style>
`;
class Controller extends Subscribe {
  constructor(configs) {
    super();
    __publicField(this, "configs");
    __publicField(this, "clientWidth");
    __publicField(this, "clientHeight");
    __publicField(this, "ready", false);
    __publicField(this, "uuid", uuid());
    __publicField(this, "tween");
    __publicField(this, "tweening", false);
    __publicField(this, "container");
    __publicField(this, "canvas");
    __publicField(this, "data", {});
    __publicField(this, "tempLine", {});
    this.configs = configs;
    this.clientWidth = document.body.clientWidth;
    this.clientHeight = document.body.clientHeight;
    this.container = this.ifInsertToDOM();
    this.canvas = {};
    this.initCtrl();
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
    if (this.container) {
      return this.container;
    }
    if (this.configs.container) {
      this.configs.container.id = "_gl_paintBrush";
      this.container = this.configs.container;
    } else if (!document.getElementById("_gl_paintBrush")) {
      const container = document.createElement("div");
      container.id = "_gl_paintBrush";
      document.body.appendChild(container);
      this.container = container;
    } else {
      this.container = document.getElementById("_gl_paintBrush");
    }
    this.container.innerHTML = PaintBrushStyle;
    return this.container;
  }
  initCanvas(className) {
    const canvas = document.createElement("canvas");
    canvas.className = className;
    canvas.width = this.clientWidth;
    canvas.height = this.clientHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    ctx.lineWidth = 5 * this.dpr;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    this.container.appendChild(canvas);
    return canvas;
  }
  initCtrl() {
    const ctrl = document.createElement("div");
    ctrl.className = "_paintBrush-ctrl";
    const ctrl_inner = document.createElement("div");
    ctrl_inner.className = "_paintBrush-ctrlinner";
    const a_undo = document.createElement("a");
    a_undo.className = "_paintBrush-ctrlitem _paintBrush-ctrlitem--undo";
    a_undo.addEventListener("click", (e) => {
      var _a;
      e.stopPropagation();
      if (this.configs.onClickUndo) {
        this.configs.onClickUndo();
      }
      if (!this.canvas[this.uuid] || !this.data[this.uuid] || this.data[this.uuid].length === 0) {
        return;
      }
      const popState = this.data[this.uuid].pop();
      if (popState) {
        this.emitStateChange({
          type: PaintBrushTypeEnum.Undo,
          color: this.color,
          ready: this.ready,
          state: popState,
          uuid: this.uuid
        });
      }
      const $ctx = (_a = this.canvas[this.uuid]) == null ? void 0 : _a.getContext("2d");
      if (!this.canvas[this.uuid]) {
        return;
      }
      const { width, height } = this.canvas[this.uuid];
      if ($ctx) {
        $ctx.clearRect(0, 0, width, height);
      }
      this.data[this.uuid].forEach((ld) => this.handleDrawLine(this.uuid, ld, { withUndo: true }));
    });
    const a_close = document.createElement("a");
    a_close.className = "_paintBrush-ctrlitem _paintBrush-ctrlitem--close";
    a_close.addEventListener("click", (e) => {
      e.stopPropagation();
      this.closeBrush();
      if (this.configs.onClickClose) {
        this.configs.onClickClose();
      }
    });
    const $A = [a_undo, a_close];
    $A.forEach(($a) => {
      const $i = document.createElement("i");
      $i.className = "brush-icon";
      const $span = document.createElement("span");
      $span.className = "brush-txt";
      $span.innerText = $a.className.endsWith("undo") ? "\u56DE\u9000" : "\u5173\u95ED";
      $a.appendChild($i);
      $a.appendChild($span);
    });
    ctrl_inner.appendChild(a_undo);
    ctrl_inner.appendChild(a_close);
    ctrl.appendChild(ctrl_inner);
    this.container.appendChild(ctrl);
    return ctrl;
  }
  openBrush() {
    if (this.ready)
      return;
    if (!this.canvas[this.uuid]) {
      this.canvas[this.uuid] = this.initCanvas("_paintBrush-canvas");
    }
    this.container.className = "brushing";
    const $curCanvas = this.canvas[this.uuid];
    const $ctx = $curCanvas.getContext("2d");
    $ctx.clearRect(0, 0, $curCanvas.width, $curCanvas.height);
    this.openBrushHandle();
    this.ready = true;
    this.emit("readyChange", true);
  }
  closeBrush() {
    if (!this.ready)
      return;
    this.container.className = "";
    this.data = {};
    this.tempLine = {};
    Object.keys(this.canvas).forEach((key) => {
      this.canvas[key].ontouchstart = () => false;
      this.canvas[key].ontouchmove = () => false;
      this.canvas[key].ontouchend = () => false;
      this.canvas[key].ontouchcancel = () => false;
      const $ctx = this.canvas[key].getContext("2d");
      if ($ctx) {
        $ctx.clearRect(0, 0, this.canvas[key].width, this.canvas[key].height);
      }
    });
    this.ready = false;
    this.emit("readyChange", false);
    this.emitStateChange({
      type: PaintBrushTypeEnum.Exit,
      color: this.color,
      ready: false,
      uuid: this.uuid
    });
  }
  updateCurrentColor(color) {
    const currentCanvas = this.canvas[this.uuid];
    if (!currentCanvas)
      return;
    const currentCtx = currentCanvas.getContext("2d");
    if (!currentCtx)
      return;
    this.configs.currentColor = color;
    currentCtx.strokeStyle = color;
  }
  openBrushHandle() {
    const currentCanvas = this.canvas[this.uuid];
    if (!currentCanvas)
      return;
    const currentCtx = currentCanvas.getContext("2d");
    if (!currentCtx)
      return;
    const color = this.color || "#6D92FF";
    currentCtx.strokeStyle = color;
    let begin = null;
    let points = [];
    let move;
    let line = [];
    let startTime = 0;
    const draw = (beginPoint, controlPoint, endPoint) => {
      const color2 = this.color || "#ff0000";
      currentCtx.strokeStyle = color2;
      currentCtx.beginPath();
      currentCtx.moveTo(beginPoint.x, beginPoint.y);
      currentCtx.quadraticCurveTo(controlPoint.x, controlPoint.y, endPoint.x, endPoint.y);
      currentCtx.stroke();
    };
    currentCanvas.onmousedown = (e) => {
      e.preventDefault();
      startTime = Date.now();
      const x = e.clientX;
      const y = e.clientY;
      points = [];
      points.push({ x, y });
      begin = { x, y };
      move = transformCoords({ x, y }, this.clientWidth, this.clientHeight);
      line = [];
    };
    currentCanvas.onmousemove = (e) => {
      e.preventDefault();
      if (!begin)
        return;
      const x = Number(e.clientX);
      const y = Number(e.clientY);
      if (Math.abs(x - begin.x) < 5 && Math.abs(y - begin.y) < 5) {
        return;
      }
      points.push({ x, y });
      line.push(transformCoords({ x, y }, this.clientWidth, this.clientHeight));
      if (points.length < 3) {
        return;
      }
      const { control, end } = getQuadraticCurvePoint(points);
      if (!control || !end) {
        return;
      }
      draw(begin, control, end);
      begin = end;
    };
    currentCanvas.onmouseup = (e) => {
      e.preventDefault();
      begin = null;
      if (points.length < 3)
        return;
      if (!this.data[this.uuid]) {
        this.data[this.uuid] = [];
      }
      const duration = Date.now() - startTime;
      const state2 = {
        move: Object.assign({}, move),
        uuid: this.uuid,
        line: [...line],
        color: this.color,
        duration: duration < 1280 ? duration : duration < 2e3 ? 1280 : 0
      };
      this.data[this.uuid].push(state2);
      nextFrame(() => {
        this.emitStateChange({
          type: PaintBrushTypeEnum.Drawline,
          color: this.color,
          ready: this.ready,
          state: state2,
          uuid: this.uuid
        });
      });
    };
    currentCanvas.ontouchstart = (e) => {
      e.preventDefault();
      startTime = Date.now();
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      points = [];
      points.push({ x, y });
      begin = { x, y };
      console.log("ontouchstart", x, y, begin);
      move = transformCoords({ x, y }, this.clientWidth, this.clientHeight);
      line = [];
    };
    currentCanvas.ontouchmove = (e) => {
      e.preventDefault();
      if (!begin)
        return;
      const x = Number(e.touches[0].clientX);
      const y = Number(e.touches[0].clientY);
      if (Math.abs(x - begin.x) < 5 && Math.abs(y - begin.y) < 5)
        return;
      points.push({ x, y });
      line.push(transformCoords({ x, y }, this.clientWidth, this.clientHeight));
      if (points.length < 3)
        return;
      const { control, end } = getQuadraticCurvePoint(points);
      if (!control || !end)
        return;
      draw(begin, control, end);
      begin = end;
    };
    currentCanvas.ontouchend = currentCanvas.ontouchcancel = (e) => {
      e.preventDefault();
      begin = null;
      if (points.length < 3)
        return;
      if (!this.data[this.uuid]) {
        this.data[this.uuid] = [];
      }
      const duration = Date.now() - startTime;
      const state2 = {
        move: Object.assign({}, move),
        line: [...line],
        uuid: this.uuid,
        color: this.color,
        duration: duration < 1280 ? duration : duration < 2e3 ? 1280 : 0
      };
      this.data[this.uuid].push(state2);
      nextFrame(() => {
        this.emitStateChange({
          type: PaintBrushTypeEnum.Drawline,
          color: this.color,
          ready: this.ready,
          state: state2,
          uuid: this.uuid
        });
      });
    };
  }
  emitStateChange(action, userAction = true) {
    if (action.type !== PaintBrushTypeEnum.Drawline) {
      this.emit("stateChange", action, userAction);
      return;
    }
    const timestamp = Date.now();
    const state2 = action.state;
    if (!state2)
      return;
    if (!state2.line)
      return;
    const sliceCount = Math.ceil(state2.line.length / 100);
    for (let i = 0; i < sliceCount; i++) {
      const localityAction = {
        uuid: this.uuid,
        color: this.color,
        ready: this.ready,
        type: action.type,
        state: {
          uuid: this.uuid,
          move: state2.move,
          duration: state2.duration,
          color: this.color,
          line: state2.line.slice(i * 100, (i + 1) * 100)
        },
        timestamp,
        end: i === sliceCount - 1
      };
      execInterval(i, 20, () => {
        this.emit("stateChange", localityAction, userAction);
      });
    }
  }
  action(action) {
    const { ready, type, uuid: uuid2 } = action;
    if (!ready && this.ready) {
      this.closeBrush();
      return;
    }
    if (ready && !this.ready) {
      this.openBrush();
      return;
    }
    if (!this.ready) {
      return;
    }
    switch (type) {
      case PaintBrushTypeEnum.Drawline:
        const { state: state2, timestamp, end } = action;
        if (!timestamp)
          return;
        if (!state2)
          return;
        this.tempLine[timestamp] = [].concat(this.tempLine[timestamp] || [], state2.line);
        if (end) {
          Object.assign(state2, { line: this.tempLine[timestamp] });
          this.handleDrawLine(uuid2, state2, {}, () => delete this.tempLine[timestamp]);
        }
        break;
      case PaintBrushTypeEnum.Undo:
        this.handleUndo(uuid2);
        break;
    }
  }
  handleDrawLine(_uuid, data, { withUndo = false }, callback = noop) {
    if (!data || Object.prototype.toString.call(data) != "[object Object]" || Object.keys(data).length === 0) {
      return;
    }
    console.log("handleDrawLine", data, data.line);
    queue(() => {
      return new Promise((resolve) => {
        if (!withUndo) {
          if (!this.canvas[_uuid]) {
            this.canvas[_uuid] = this.initCanvas("_paintBrush-canvas--sync");
          }
          if (!this.data[_uuid]) {
            this.data[_uuid] = [];
          }
          this.data[_uuid].push(data);
        }
        if (!this.canvas[_uuid]) {
          return;
        }
        const $ctx = this.canvas[_uuid].getContext("2d");
        if (!$ctx)
          return;
        const { line = [], color = "black", duration = 0, uuid: uuid2 } = data;
        const move = unTransformCoords(data.move || {}, this.clientWidth, this.clientHeight);
        let points = [move];
        $ctx.strokeStyle = color;
        $ctx.beginPath();
        $ctx.moveTo(move.x, move.y);
        if (duration && !withUndo) {
          let drawCache = [];
          const self2 = this;
          self2.tween = tween({ step: 0 }, { step: line.length - 1 }, duration).onUpdate(({ step }) => {
            var _a;
            self2.tweening = true;
            if (!self2.ready) {
              $ctx.clearRect(0, 0, self2.canvas[uuid2].width, self2.canvas[uuid2].height);
              return (_a = self2.tween) == null ? void 0 : _a.stop();
            }
            const i = Math.floor(step);
            if (!drawCache.find((dc) => dc === i)) {
              drawCache.push(i);
              console.log("__debug__", line, line[i], i);
              points.push(unTransformCoords(line[i], self2.clientWidth, self2.clientHeight));
              if (points.length < 3)
                return;
              const { control, end } = getQuadraticCurvePoint(points);
              if (!control || !end)
                return;
              $ctx.quadraticCurveTo(control.x, control.y, end.x, end.y);
              $ctx.stroke();
            }
          }).onComplete((e) => {
            self2.tween = void 0;
            self2.tweening = false;
            drawCache = [];
            points = [];
            if (callback)
              callback();
            resolve();
          });
        } else {
          for (let i = 0; i < line.length; i++) {
            points.push(unTransformCoords(line[i], this.clientWidth, this.clientHeight));
            if (points.length < 3)
              continue;
            const { control, end } = getQuadraticCurvePoint(points);
            if (!control || !end)
              continue;
            $ctx.quadraticCurveTo(control.x, control.y, end.x, end.y);
          }
          $ctx.stroke();
          points = [];
          if (callback)
            callback();
          resolve();
        }
      });
    });
  }
  handleUndo(uuid2) {
    console.log("handleUndo", uuid2, this.canvas[uuid2]);
    if (!this.canvas[uuid2] || !this.data[uuid2] || this.data[uuid2].length === 0) {
      return;
    }
    this.data[uuid2].pop();
    const handle = () => {
      var _a;
      const $ctx = (_a = this.canvas[uuid2]) == null ? void 0 : _a.getContext("2d");
      if ($ctx) {
        $ctx.clearRect(0, 0, this.canvas[uuid2].width, this.canvas[uuid2].height);
      }
      this.data[uuid2].forEach((ld) => this.handleDrawLine(uuid2, ld, { withUndo: true }));
    };
    if (this.tween && this.tweening) {
      this.tween.stop();
      nextFrame(handle, 60);
      return;
    }
    handle();
  }
  destroyBrush() {
    this.closeBrush();
    this.ready = false;
    this.emit("readyChange", true);
  }
}
class PaintBrush {
  constructor(configs = {}) {
    __publicField(this, "controller");
    const _configs = Object.assign({
      currentColor: "#f44336"
    }, configs);
    this.controller = new Controller(_configs);
  }
  on(name, callback) {
    this.controller.on(name, callback);
  }
  off(name, callback) {
    this.controller.off(name, callback);
  }
  once(name, callback) {
    this.controller.once(name, callback);
  }
  show() {
    this.controller.openBrush();
  }
  action(action) {
    this.controller.action(action);
  }
  get state() {
    return this.controller.state;
  }
  get configs() {
    return this.controller.configs;
  }
  dispose() {
    return this.controller.destroyBrush();
  }
  setCurrentColor(color) {
    this.controller.updateCurrentColor(color);
  }
}
export { PaintBrush };
