var Qt = {}, He = {
  get exports() {
    return Qt;
  },
  set exports(k) {
    Qt = k;
  }
};
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(k) {
  (function(u, yt, jt, l) {
    var Pt = ["", "webkit", "Moz", "MS", "ms", "o"], Kt = yt.createElement("div"), $t = "function", L = Math.round, S = Math.abs, ot = Date.now;
    function ht(t, e, i) {
      return setTimeout(lt(t, i), e);
    }
    function x(t, e, i) {
      return Array.isArray(t) ? (P(t, i[e], i), !0) : !1;
    }
    function P(t, e, i) {
      var r;
      if (t)
        if (t.forEach)
          t.forEach(e, i);
        else if (t.length !== l)
          for (r = 0; r < t.length; )
            e.call(i, t[r], r, t), r++;
        else
          for (r in t)
            t.hasOwnProperty(r) && e.call(i, t[r], r, t);
    }
    function Nt(t, e, i) {
      var r = "DEPRECATED METHOD: " + e + `
` + i + ` AT 
`;
      return function() {
        var n = new Error("get-stack-trace"), s = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", a = u.console && (u.console.warn || u.console.log);
        return a && a.call(u.console, r, s), t.apply(this, arguments);
      };
    }
    var g;
    typeof Object.assign != "function" ? g = function(e) {
      if (e === l || e === null)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var i = Object(e), r = 1; r < arguments.length; r++) {
        var n = arguments[r];
        if (n !== l && n !== null)
          for (var s in n)
            n.hasOwnProperty(s) && (i[s] = n[s]);
      }
      return i;
    } : g = Object.assign;
    var Ot = Nt(function(e, i, r) {
      for (var n = Object.keys(i), s = 0; s < n.length; )
        (!r || r && e[n[s]] === l) && (e[n[s]] = i[n[s]]), s++;
      return e;
    }, "extend", "Use `assign`."), te = Nt(function(e, i) {
      return Ot(e, i, !0);
    }, "merge", "Use `assign`.");
    function T(t, e, i) {
      var r = e.prototype, n;
      n = t.prototype = Object.create(r), n.constructor = t, n._super = r, i && g(n, i);
    }
    function lt(t, e) {
      return function() {
        return t.apply(e, arguments);
      };
    }
    function ct(t, e) {
      return typeof t == $t ? t.apply(e && e[0] || l, e) : t;
    }
    function At(t, e) {
      return t === l ? e : t;
    }
    function z(t, e, i) {
      P(B(e), function(r) {
        t.addEventListener(r, i, !1);
      });
    }
    function Z(t, e, i) {
      P(B(e), function(r) {
        t.removeEventListener(r, i, !1);
      });
    }
    function Ct(t, e) {
      for (; t; ) {
        if (t == e)
          return !0;
        t = t.parentNode;
      }
      return !1;
    }
    function D(t, e) {
      return t.indexOf(e) > -1;
    }
    function B(t) {
      return t.trim().split(/\s+/g);
    }
    function Y(t, e, i) {
      if (t.indexOf && !i)
        return t.indexOf(e);
      for (var r = 0; r < t.length; ) {
        if (i && t[r][i] == e || !i && t[r] === e)
          return r;
        r++;
      }
      return -1;
    }
    function J(t) {
      return Array.prototype.slice.call(t, 0);
    }
    function St(t, e, i) {
      for (var r = [], n = [], s = 0; s < t.length; ) {
        var a = e ? t[s][e] : t[s];
        Y(n, a) < 0 && r.push(t[s]), n[s] = a, s++;
      }
      return i && (e ? r = r.sort(function(c, v) {
        return c[e] > v[e];
      }) : r = r.sort()), r;
    }
    function Q(t, e) {
      for (var i, r, n = e[0].toUpperCase() + e.slice(1), s = 0; s < Pt.length; ) {
        if (i = Pt[s], r = i ? i + n : e, r in t)
          return r;
        s++;
      }
      return l;
    }
    var ee = 1;
    function ie() {
      return ee++;
    }
    function Dt(t) {
      var e = t.ownerDocument || t;
      return e.defaultView || e.parentWindow || u;
    }
    var re = /mobile|tablet|ip(ad|hone|od)|android/i, Mt = "ontouchstart" in u, ne = Q(u, "PointerEvent") !== l, se = Mt && re.test(navigator.userAgent), b = "touch", ae = "pen", ut = "mouse", oe = "kinect", he = 25, f = 1, M = 2, o = 4, p = 8, j = 1, X = 2, F = 4, V = 8, W = 16, I = X | F, U = V | W, Ut = I | U, Rt = ["x", "y"], K = ["clientX", "clientY"];
    function m(t, e) {
      var i = this;
      this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(r) {
        ct(t.options.enable, [t]) && i.handler(r);
      }, this.init();
    }
    m.prototype = {
      /**
       * should handle the inputEvent data and trigger the callback
       * @virtual
       */
      handler: function() {
      },
      /**
       * bind the events
       */
      init: function() {
        this.evEl && z(this.element, this.evEl, this.domHandler), this.evTarget && z(this.target, this.evTarget, this.domHandler), this.evWin && z(Dt(this.element), this.evWin, this.domHandler);
      },
      /**
       * unbind the events
       */
      destroy: function() {
        this.evEl && Z(this.element, this.evEl, this.domHandler), this.evTarget && Z(this.target, this.evTarget, this.domHandler), this.evWin && Z(Dt(this.element), this.evWin, this.domHandler);
      }
    };
    function le(t) {
      var e, i = t.options.inputClass;
      return i ? e = i : ne ? e = vt : se ? e = et : Mt ? e = pt : e = tt, new e(t, ce);
    }
    function ce(t, e, i) {
      var r = i.pointers.length, n = i.changedPointers.length, s = e & f && r - n === 0, a = e & (o | p) && r - n === 0;
      i.isFirst = !!s, i.isFinal = !!a, s && (t.session = {}), i.eventType = e, ue(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i;
    }
    function ue(t, e) {
      var i = t.session, r = e.pointers, n = r.length;
      i.firstInput || (i.firstInput = Lt(e)), n > 1 && !i.firstMultiple ? i.firstMultiple = Lt(e) : n === 1 && (i.firstMultiple = !1);
      var s = i.firstInput, a = i.firstMultiple, h = a ? a.center : s.center, c = e.center = xt(r);
      e.timeStamp = ot(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = ft(h, c), e.distance = $(h, c), fe(i, e), e.offsetDirection = Ht(e.deltaX, e.deltaY);
      var v = Yt(e.deltaTime, e.deltaX, e.deltaY);
      e.overallVelocityX = v.x, e.overallVelocityY = v.y, e.overallVelocity = S(v.x) > S(v.y) ? v.x : v.y, e.scale = a ? Te(a.pointers, r) : 1, e.rotation = a ? pe(a.pointers, r) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, ve(i, e);
      var y = t.element;
      Ct(e.srcEvent.target, y) && (y = e.srcEvent.target), e.target = y;
    }
    function fe(t, e) {
      var i = e.center, r = t.offsetDelta || {}, n = t.prevDelta || {}, s = t.prevInput || {};
      (e.eventType === f || s.eventType === o) && (n = t.prevDelta = {
        x: s.deltaX || 0,
        y: s.deltaY || 0
      }, r = t.offsetDelta = {
        x: i.x,
        y: i.y
      }), e.deltaX = n.x + (i.x - r.x), e.deltaY = n.y + (i.y - r.y);
    }
    function ve(t, e) {
      var i = t.lastInterval || e, r = e.timeStamp - i.timeStamp, n, s, a, h;
      if (e.eventType != p && (r > he || i.velocity === l)) {
        var c = e.deltaX - i.deltaX, v = e.deltaY - i.deltaY, y = Yt(r, c, v);
        s = y.x, a = y.y, n = S(y.x) > S(y.y) ? y.x : y.y, h = Ht(c, v), t.lastInterval = e;
      } else
        n = i.velocity, s = i.velocityX, a = i.velocityY, h = i.direction;
      e.velocity = n, e.velocityX = s, e.velocityY = a, e.direction = h;
    }
    function Lt(t) {
      for (var e = [], i = 0; i < t.pointers.length; )
        e[i] = {
          clientX: L(t.pointers[i].clientX),
          clientY: L(t.pointers[i].clientY)
        }, i++;
      return {
        timeStamp: ot(),
        pointers: e,
        center: xt(e),
        deltaX: t.deltaX,
        deltaY: t.deltaY
      };
    }
    function xt(t) {
      var e = t.length;
      if (e === 1)
        return {
          x: L(t[0].clientX),
          y: L(t[0].clientY)
        };
      for (var i = 0, r = 0, n = 0; n < e; )
        i += t[n].clientX, r += t[n].clientY, n++;
      return {
        x: L(i / e),
        y: L(r / e)
      };
    }
    function Yt(t, e, i) {
      return {
        x: e / t || 0,
        y: i / t || 0
      };
    }
    function Ht(t, e) {
      return t === e ? j : S(t) >= S(e) ? t < 0 ? X : F : e < 0 ? V : W;
    }
    function $(t, e, i) {
      i || (i = Rt);
      var r = e[i[0]] - t[i[0]], n = e[i[1]] - t[i[1]];
      return Math.sqrt(r * r + n * n);
    }
    function ft(t, e, i) {
      i || (i = Rt);
      var r = e[i[0]] - t[i[0]], n = e[i[1]] - t[i[1]];
      return Math.atan2(n, r) * 180 / Math.PI;
    }
    function pe(t, e) {
      return ft(e[1], e[0], K) + ft(t[1], t[0], K);
    }
    function Te(t, e) {
      return $(e[0], e[1], K) / $(t[0], t[1], K);
    }
    var me = {
      mousedown: f,
      mousemove: M,
      mouseup: o
    }, de = "mousedown", Ee = "mousemove mouseup";
    function tt() {
      this.evEl = de, this.evWin = Ee, this.pressed = !1, m.apply(this, arguments);
    }
    T(tt, m, {
      /**
       * handle mouse events
       * @param {Object} ev
       */
      handler: function(e) {
        var i = me[e.type];
        i & f && e.button === 0 && (this.pressed = !0), i & M && e.which !== 1 && (i = o), this.pressed && (i & o && (this.pressed = !1), this.callback(this.manager, i, {
          pointers: [e],
          changedPointers: [e],
          pointerType: ut,
          srcEvent: e
        }));
      }
    });
    var ge = {
      pointerdown: f,
      pointermove: M,
      pointerup: o,
      pointercancel: p,
      pointerout: p
    }, Ie = {
      2: b,
      3: ae,
      4: ut,
      5: oe
      // see https://twitter.com/jacobrossi/status/480596438489890816
    }, bt = "pointerdown", Xt = "pointermove pointerup pointercancel";
    u.MSPointerEvent && !u.PointerEvent && (bt = "MSPointerDown", Xt = "MSPointerMove MSPointerUp MSPointerCancel");
    function vt() {
      this.evEl = bt, this.evWin = Xt, m.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }
    T(vt, m, {
      /**
       * handle mouse events
       * @param {Object} ev
       */
      handler: function(e) {
        var i = this.store, r = !1, n = e.type.toLowerCase().replace("ms", ""), s = ge[n], a = Ie[e.pointerType] || e.pointerType, h = a == b, c = Y(i, e.pointerId, "pointerId");
        s & f && (e.button === 0 || h) ? c < 0 && (i.push(e), c = i.length - 1) : s & (o | p) && (r = !0), !(c < 0) && (i[c] = e, this.callback(this.manager, s, {
          pointers: i,
          changedPointers: [e],
          pointerType: a,
          srcEvent: e
        }), r && i.splice(c, 1));
      }
    });
    var _e = {
      touchstart: f,
      touchmove: M,
      touchend: o,
      touchcancel: p
    }, ye = "touchstart", Pe = "touchstart touchmove touchend touchcancel";
    function Ft() {
      this.evTarget = ye, this.evWin = Pe, this.started = !1, m.apply(this, arguments);
    }
    T(Ft, m, {
      handler: function(e) {
        var i = _e[e.type];
        if (i === f && (this.started = !0), !!this.started) {
          var r = Ne.call(this, e, i);
          i & (o | p) && r[0].length - r[1].length === 0 && (this.started = !1), this.callback(this.manager, i, {
            pointers: r[0],
            changedPointers: r[1],
            pointerType: b,
            srcEvent: e
          });
        }
      }
    });
    function Ne(t, e) {
      var i = J(t.touches), r = J(t.changedTouches);
      return e & (o | p) && (i = St(i.concat(r), "identifier", !0)), [i, r];
    }
    var Oe = {
      touchstart: f,
      touchmove: M,
      touchend: o,
      touchcancel: p
    }, Ae = "touchstart touchmove touchend touchcancel";
    function et() {
      this.evTarget = Ae, this.targetIds = {}, m.apply(this, arguments);
    }
    T(et, m, {
      handler: function(e) {
        var i = Oe[e.type], r = Ce.call(this, e, i);
        r && this.callback(this.manager, i, {
          pointers: r[0],
          changedPointers: r[1],
          pointerType: b,
          srcEvent: e
        });
      }
    });
    function Ce(t, e) {
      var i = J(t.touches), r = this.targetIds;
      if (e & (f | M) && i.length === 1)
        return r[i[0].identifier] = !0, [i, i];
      var n, s, a = J(t.changedTouches), h = [], c = this.target;
      if (s = i.filter(function(v) {
        return Ct(v.target, c);
      }), e === f)
        for (n = 0; n < s.length; )
          r[s[n].identifier] = !0, n++;
      for (n = 0; n < a.length; )
        r[a[n].identifier] && h.push(a[n]), e & (o | p) && delete r[a[n].identifier], n++;
      if (h.length)
        return [
          // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
          St(s.concat(h), "identifier", !0),
          h
        ];
    }
    var Se = 2500, Vt = 25;
    function pt() {
      m.apply(this, arguments);
      var t = lt(this.handler, this);
      this.touch = new et(this.manager, t), this.mouse = new tt(this.manager, t), this.primaryTouch = null, this.lastTouches = [];
    }
    T(pt, m, {
      /**
       * handle mouse and touch events
       * @param {Hammer} manager
       * @param {String} inputEvent
       * @param {Object} inputData
       */
      handler: function(e, i, r) {
        var n = r.pointerType == b, s = r.pointerType == ut;
        if (!(s && r.sourceCapabilities && r.sourceCapabilities.firesTouchEvents)) {
          if (n)
            De.call(this, i, r);
          else if (s && Me.call(this, r))
            return;
          this.callback(e, i, r);
        }
      },
      /**
       * remove the event listeners
       */
      destroy: function() {
        this.touch.destroy(), this.mouse.destroy();
      }
    });
    function De(t, e) {
      t & f ? (this.primaryTouch = e.changedPointers[0].identifier, Wt.call(this, e)) : t & (o | p) && Wt.call(this, e);
    }
    function Wt(t) {
      var e = t.changedPointers[0];
      if (e.identifier === this.primaryTouch) {
        var i = { x: e.clientX, y: e.clientY };
        this.lastTouches.push(i);
        var r = this.lastTouches, n = function() {
          var s = r.indexOf(i);
          s > -1 && r.splice(s, 1);
        };
        setTimeout(n, Se);
      }
    }
    function Me(t) {
      for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, r = 0; r < this.lastTouches.length; r++) {
        var n = this.lastTouches[r], s = Math.abs(e - n.x), a = Math.abs(i - n.y);
        if (s <= Vt && a <= Vt)
          return !0;
      }
      return !1;
    }
    var qt = Q(Kt.style, "touchAction"), wt = qt !== l, Gt = "compute", kt = "auto", Tt = "manipulation", R = "none", q = "pan-x", w = "pan-y", it = Re();
    function mt(t, e) {
      this.manager = t, this.set(e);
    }
    mt.prototype = {
      /**
       * set the touchAction value on the element or enable the polyfill
       * @param {String} value
       */
      set: function(t) {
        t == Gt && (t = this.compute()), wt && this.manager.element.style && it[t] && (this.manager.element.style[qt] = t), this.actions = t.toLowerCase().trim();
      },
      /**
       * just re-set the touchAction value
       */
      update: function() {
        this.set(this.manager.options.touchAction);
      },
      /**
       * compute the value for the touchAction property based on the recognizer's settings
       * @returns {String} value
       */
      compute: function() {
        var t = [];
        return P(this.manager.recognizers, function(e) {
          ct(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
        }), Ue(t.join(" "));
      },
      /**
       * this method is called on each input cycle and provides the preventing of the browser behavior
       * @param {Object} input
       */
      preventDefaults: function(t) {
        var e = t.srcEvent, i = t.offsetDirection;
        if (this.manager.session.prevented) {
          e.preventDefault();
          return;
        }
        var r = this.actions, n = D(r, R) && !it[R], s = D(r, w) && !it[w], a = D(r, q) && !it[q];
        if (n) {
          var h = t.pointers.length === 1, c = t.distance < 2, v = t.deltaTime < 250;
          if (h && c && v)
            return;
        }
        if (!(a && s) && (n || s && i & I || a && i & U))
          return this.preventSrc(e);
      },
      /**
       * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
       * @param {Object} srcEvent
       */
      preventSrc: function(t) {
        this.manager.session.prevented = !0, t.preventDefault();
      }
    };
    function Ue(t) {
      if (D(t, R))
        return R;
      var e = D(t, q), i = D(t, w);
      return e && i ? R : e || i ? e ? q : w : D(t, Tt) ? Tt : kt;
    }
    function Re() {
      if (!wt)
        return !1;
      var t = {}, e = u.CSS && u.CSS.supports;
      return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(i) {
        t[i] = e ? u.CSS.supports("touch-action", i) : !0;
      }), t;
    }
    var rt = 1, d = 2, H = 4, C = 8, N = C, G = 16, _ = 32;
    function O(t) {
      this.options = g({}, this.defaults, t || {}), this.id = ie(), this.manager = null, this.options.enable = At(this.options.enable, !0), this.state = rt, this.simultaneous = {}, this.requireFail = [];
    }
    O.prototype = {
      /**
       * @virtual
       * @type {Object}
       */
      defaults: {},
      /**
       * set options
       * @param {Object} options
       * @return {Recognizer}
       */
      set: function(t) {
        return g(this.options, t), this.manager && this.manager.touchAction.update(), this;
      },
      /**
       * recognize simultaneous with an other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      recognizeWith: function(t) {
        if (x(t, "recognizeWith", this))
          return this;
        var e = this.simultaneous;
        return t = nt(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this;
      },
      /**
       * drop the simultaneous link. it doesnt remove the link on the other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      dropRecognizeWith: function(t) {
        return x(t, "dropRecognizeWith", this) ? this : (t = nt(t, this), delete this.simultaneous[t.id], this);
      },
      /**
       * recognizer can only run when an other is failing
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      requireFailure: function(t) {
        if (x(t, "requireFailure", this))
          return this;
        var e = this.requireFail;
        return t = nt(t, this), Y(e, t) === -1 && (e.push(t), t.requireFailure(this)), this;
      },
      /**
       * drop the requireFailure link. it does not remove the link on the other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      dropRequireFailure: function(t) {
        if (x(t, "dropRequireFailure", this))
          return this;
        t = nt(t, this);
        var e = Y(this.requireFail, t);
        return e > -1 && this.requireFail.splice(e, 1), this;
      },
      /**
       * has require failures boolean
       * @returns {boolean}
       */
      hasRequireFailures: function() {
        return this.requireFail.length > 0;
      },
      /**
       * if the recognizer can recognize simultaneous with an other recognizer
       * @param {Recognizer} otherRecognizer
       * @returns {Boolean}
       */
      canRecognizeWith: function(t) {
        return !!this.simultaneous[t.id];
      },
      /**
       * You should use `tryEmit` instead of `emit` directly to check
       * that all the needed recognizers has failed before emitting.
       * @param {Object} input
       */
      emit: function(t) {
        var e = this, i = this.state;
        function r(n) {
          e.manager.emit(n, t);
        }
        i < C && r(e.options.event + zt(i)), r(e.options.event), t.additionalEvent && r(t.additionalEvent), i >= C && r(e.options.event + zt(i));
      },
      /**
       * Check that all the require failure recognizers has failed,
       * if true, it emits a gesture event,
       * otherwise, setup the state to FAILED.
       * @param {Object} input
       */
      tryEmit: function(t) {
        if (this.canEmit())
          return this.emit(t);
        this.state = _;
      },
      /**
       * can we emit?
       * @returns {boolean}
       */
      canEmit: function() {
        for (var t = 0; t < this.requireFail.length; ) {
          if (!(this.requireFail[t].state & (_ | rt)))
            return !1;
          t++;
        }
        return !0;
      },
      /**
       * update the recognizer
       * @param {Object} inputData
       */
      recognize: function(t) {
        var e = g({}, t);
        if (!ct(this.options.enable, [this, e])) {
          this.reset(), this.state = _;
          return;
        }
        this.state & (N | G | _) && (this.state = rt), this.state = this.process(e), this.state & (d | H | C | G) && this.tryEmit(e);
      },
      /**
       * return the state of the recognizer
       * the actual recognizing happens in this method
       * @virtual
       * @param {Object} inputData
       * @returns {Const} STATE
       */
      process: function(t) {
      },
      // jshint ignore:line
      /**
       * return the preferred touch-action
       * @virtual
       * @returns {Array}
       */
      getTouchAction: function() {
      },
      /**
       * called when the gesture isn't allowed to recognize
       * like when another is being recognized or it is disabled
       * @virtual
       */
      reset: function() {
      }
    };
    function zt(t) {
      return t & G ? "cancel" : t & C ? "end" : t & H ? "move" : t & d ? "start" : "";
    }
    function Zt(t) {
      return t == W ? "down" : t == V ? "up" : t == X ? "left" : t == F ? "right" : "";
    }
    function nt(t, e) {
      var i = e.manager;
      return i ? i.get(t) : t;
    }
    function E() {
      O.apply(this, arguments);
    }
    T(E, O, {
      /**
       * @namespace
       * @memberof AttrRecognizer
       */
      defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
      },
      /**
       * Used to check if it the recognizer receives valid input, like input.distance > 10.
       * @memberof AttrRecognizer
       * @param {Object} input
       * @returns {Boolean} recognized
       */
      attrTest: function(t) {
        var e = this.options.pointers;
        return e === 0 || t.pointers.length === e;
      },
      /**
       * Process the input and return the state for the recognizer
       * @memberof AttrRecognizer
       * @param {Object} input
       * @returns {*} State
       */
      process: function(t) {
        var e = this.state, i = t.eventType, r = e & (d | H), n = this.attrTest(t);
        return r && (i & p || !n) ? e | G : r || n ? i & o ? e | C : e & d ? e | H : d : _;
      }
    });
    function st() {
      E.apply(this, arguments), this.pX = null, this.pY = null;
    }
    T(st, E, {
      /**
       * @namespace
       * @memberof PanRecognizer
       */
      defaults: {
        event: "pan",
        threshold: 10,
        pointers: 1,
        direction: Ut
      },
      getTouchAction: function() {
        var t = this.options.direction, e = [];
        return t & I && e.push(w), t & U && e.push(q), e;
      },
      directionTest: function(t) {
        var e = this.options, i = !0, r = t.distance, n = t.direction, s = t.deltaX, a = t.deltaY;
        return n & e.direction || (e.direction & I ? (n = s === 0 ? j : s < 0 ? X : F, i = s != this.pX, r = Math.abs(t.deltaX)) : (n = a === 0 ? j : a < 0 ? V : W, i = a != this.pY, r = Math.abs(t.deltaY))), t.direction = n, i && r > e.threshold && n & e.direction;
      },
      attrTest: function(t) {
        return E.prototype.attrTest.call(this, t) && (this.state & d || !(this.state & d) && this.directionTest(t));
      },
      emit: function(t) {
        this.pX = t.deltaX, this.pY = t.deltaY;
        var e = Zt(t.direction);
        e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
      }
    });
    function dt() {
      E.apply(this, arguments);
    }
    T(dt, E, {
      /**
       * @namespace
       * @memberof PinchRecognizer
       */
      defaults: {
        event: "pinch",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [R];
      },
      attrTest: function(t) {
        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & d);
      },
      emit: function(t) {
        if (t.scale !== 1) {
          var e = t.scale < 1 ? "in" : "out";
          t.additionalEvent = this.options.event + e;
        }
        this._super.emit.call(this, t);
      }
    });
    function Et() {
      O.apply(this, arguments), this._timer = null, this._input = null;
    }
    T(Et, O, {
      /**
       * @namespace
       * @memberof PressRecognizer
       */
      defaults: {
        event: "press",
        pointers: 1,
        time: 251,
        // minimal time of the pointer to be pressed
        threshold: 9
        // a minimal movement is ok, but keep it low
      },
      getTouchAction: function() {
        return [kt];
      },
      process: function(t) {
        var e = this.options, i = t.pointers.length === e.pointers, r = t.distance < e.threshold, n = t.deltaTime > e.time;
        if (this._input = t, !r || !i || t.eventType & (o | p) && !n)
          this.reset();
        else if (t.eventType & f)
          this.reset(), this._timer = ht(function() {
            this.state = N, this.tryEmit();
          }, e.time, this);
        else if (t.eventType & o)
          return N;
        return _;
      },
      reset: function() {
        clearTimeout(this._timer);
      },
      emit: function(t) {
        this.state === N && (t && t.eventType & o ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = ot(), this.manager.emit(this.options.event, this._input)));
      }
    });
    function gt() {
      E.apply(this, arguments);
    }
    T(gt, E, {
      /**
       * @namespace
       * @memberof RotateRecognizer
       */
      defaults: {
        event: "rotate",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [R];
      },
      attrTest: function(t) {
        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & d);
      }
    });
    function It() {
      E.apply(this, arguments);
    }
    T(It, E, {
      /**
       * @namespace
       * @memberof SwipeRecognizer
       */
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: 0.3,
        direction: I | U,
        pointers: 1
      },
      getTouchAction: function() {
        return st.prototype.getTouchAction.call(this);
      },
      attrTest: function(t) {
        var e = this.options.direction, i;
        return e & (I | U) ? i = t.overallVelocity : e & I ? i = t.overallVelocityX : e & U && (i = t.overallVelocityY), this._super.attrTest.call(this, t) && e & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && S(i) > this.options.velocity && t.eventType & o;
      },
      emit: function(t) {
        var e = Zt(t.offsetDirection);
        e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
      }
    });
    function at() {
      O.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
    }
    T(at, O, {
      /**
       * @namespace
       * @memberof PinchRecognizer
       */
      defaults: {
        event: "tap",
        pointers: 1,
        taps: 1,
        interval: 300,
        // max time between the multi-tap taps
        time: 250,
        // max time of the pointer to be down (like finger on the screen)
        threshold: 9,
        // a minimal movement is ok, but keep it low
        posThreshold: 10
        // a multi-tap can be a bit off the initial position
      },
      getTouchAction: function() {
        return [Tt];
      },
      process: function(t) {
        var e = this.options, i = t.pointers.length === e.pointers, r = t.distance < e.threshold, n = t.deltaTime < e.time;
        if (this.reset(), t.eventType & f && this.count === 0)
          return this.failTimeout();
        if (r && n && i) {
          if (t.eventType != o)
            return this.failTimeout();
          var s = this.pTime ? t.timeStamp - this.pTime < e.interval : !0, a = !this.pCenter || $(this.pCenter, t.center) < e.posThreshold;
          this.pTime = t.timeStamp, this.pCenter = t.center, !a || !s ? this.count = 1 : this.count += 1, this._input = t;
          var h = this.count % e.taps;
          if (h === 0)
            return this.hasRequireFailures() ? (this._timer = ht(function() {
              this.state = N, this.tryEmit();
            }, e.interval, this), d) : N;
        }
        return _;
      },
      failTimeout: function() {
        return this._timer = ht(function() {
          this.state = _;
        }, this.options.interval, this), _;
      },
      reset: function() {
        clearTimeout(this._timer);
      },
      emit: function() {
        this.state == N && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
      }
    });
    function A(t, e) {
      return e = e || {}, e.recognizers = At(e.recognizers, A.defaults.preset), new _t(t, e);
    }
    A.VERSION = "2.0.7", A.defaults = {
      /**
       * set if DOM events are being triggered.
       * But this is slower and unused by simple implementations, so disabled by default.
       * @type {Boolean}
       * @default false
       */
      domEvents: !1,
      /**
       * The value for the touchAction property/fallback.
       * When set to `compute` it will magically set the correct value based on the added recognizers.
       * @type {String}
       * @default compute
       */
      touchAction: Gt,
      /**
       * @type {Boolean}
       * @default true
       */
      enable: !0,
      /**
       * EXPERIMENTAL FEATURE -- can be removed/changed
       * Change the parent input target element.
       * If Null, then it is being set the to main element.
       * @type {Null|EventTarget}
       * @default null
       */
      inputTarget: null,
      /**
       * force an input class
       * @type {Null|Function}
       * @default null
       */
      inputClass: null,
      /**
       * Default recognizer setup when calling `Hammer()`
       * When creating a new Manager these will be skipped.
       * @type {Array}
       */
      preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [gt, { enable: !1 }],
        [dt, { enable: !1 }, ["rotate"]],
        [It, { direction: I }],
        [st, { direction: I }, ["swipe"]],
        [at],
        [at, { event: "doubletap", taps: 2 }, ["tap"]],
        [Et]
      ],
      /**
       * Some CSS properties can be used to improve the working of Hammer.
       * Add them to this method and they will be set when creating a new Manager.
       * @namespace
       */
      cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: "none",
        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: "none",
        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: "none",
        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: "none",
        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: "none",
        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: "rgba(0,0,0,0)"
      }
    };
    var Le = 1, Bt = 2;
    function _t(t, e) {
      this.options = g({}, A.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = le(this), this.touchAction = new mt(this, this.options.touchAction), Jt(this, !0), P(this.options.recognizers, function(i) {
        var r = this.add(new i[0](i[1]));
        i[2] && r.recognizeWith(i[2]), i[3] && r.requireFailure(i[3]);
      }, this);
    }
    _t.prototype = {
      /**
       * set options
       * @param {Object} options
       * @returns {Manager}
       */
      set: function(t) {
        return g(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this;
      },
      /**
       * stop recognizing for this session.
       * This session will be discarded, when a new [input]start event is fired.
       * When forced, the recognizer cycle is stopped immediately.
       * @param {Boolean} [force]
       */
      stop: function(t) {
        this.session.stopped = t ? Bt : Le;
      },
      /**
       * run the recognizers!
       * called by the inputHandler function on every movement of the pointers (touches)
       * it walks through all the recognizers and tries to detect the gesture that is being made
       * @param {Object} inputData
       */
      recognize: function(t) {
        var e = this.session;
        if (!e.stopped) {
          this.touchAction.preventDefaults(t);
          var i, r = this.recognizers, n = e.curRecognizer;
          (!n || n && n.state & N) && (n = e.curRecognizer = null);
          for (var s = 0; s < r.length; )
            i = r[s], e.stopped !== Bt && // 1
            (!n || i == n || // 2
            i.canRecognizeWith(n)) ? i.recognize(t) : i.reset(), !n && i.state & (d | H | C) && (n = e.curRecognizer = i), s++;
        }
      },
      /**
       * get a recognizer by its event name.
       * @param {Recognizer|String} recognizer
       * @returns {Recognizer|Null}
       */
      get: function(t) {
        if (t instanceof O)
          return t;
        for (var e = this.recognizers, i = 0; i < e.length; i++)
          if (e[i].options.event == t)
            return e[i];
        return null;
      },
      /**
       * add a recognizer to the manager
       * existing recognizers with the same event name will be removed
       * @param {Recognizer} recognizer
       * @returns {Recognizer|Manager}
       */
      add: function(t) {
        if (x(t, "add", this))
          return this;
        var e = this.get(t.options.event);
        return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t;
      },
      /**
       * remove a recognizer by name or instance
       * @param {Recognizer|String} recognizer
       * @returns {Manager}
       */
      remove: function(t) {
        if (x(t, "remove", this))
          return this;
        if (t = this.get(t), t) {
          var e = this.recognizers, i = Y(e, t);
          i !== -1 && (e.splice(i, 1), this.touchAction.update());
        }
        return this;
      },
      /**
       * bind event
       * @param {String} events
       * @param {Function} handler
       * @returns {EventEmitter} this
       */
      on: function(t, e) {
        if (t !== l && e !== l) {
          var i = this.handlers;
          return P(B(t), function(r) {
            i[r] = i[r] || [], i[r].push(e);
          }), this;
        }
      },
      /**
       * unbind event, leave emit blank to remove all handlers
       * @param {String} events
       * @param {Function} [handler]
       * @returns {EventEmitter} this
       */
      off: function(t, e) {
        if (t !== l) {
          var i = this.handlers;
          return P(B(t), function(r) {
            e ? i[r] && i[r].splice(Y(i[r], e), 1) : delete i[r];
          }), this;
        }
      },
      /**
       * emit event to the listeners
       * @param {String} event
       * @param {Object} data
       */
      emit: function(t, e) {
        this.options.domEvents && xe(t, e);
        var i = this.handlers[t] && this.handlers[t].slice();
        if (!(!i || !i.length)) {
          e.type = t, e.preventDefault = function() {
            e.srcEvent.preventDefault();
          };
          for (var r = 0; r < i.length; )
            i[r](e), r++;
        }
      },
      /**
       * destroy the manager and unbinds all events
       * it doesn't unbind dom events, that is the user own responsibility
       */
      destroy: function() {
        this.element && Jt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
      }
    };
    function Jt(t, e) {
      var i = t.element;
      if (i.style) {
        var r;
        P(t.options.cssProps, function(n, s) {
          r = Q(i.style, s), e ? (t.oldCssProps[r] = i.style[r], i.style[r] = n) : i.style[r] = t.oldCssProps[r] || "";
        }), e || (t.oldCssProps = {});
      }
    }
    function xe(t, e) {
      var i = yt.createEvent("Event");
      i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i);
    }
    g(A, {
      INPUT_START: f,
      INPUT_MOVE: M,
      INPUT_END: o,
      INPUT_CANCEL: p,
      STATE_POSSIBLE: rt,
      STATE_BEGAN: d,
      STATE_CHANGED: H,
      STATE_ENDED: C,
      STATE_RECOGNIZED: N,
      STATE_CANCELLED: G,
      STATE_FAILED: _,
      DIRECTION_NONE: j,
      DIRECTION_LEFT: X,
      DIRECTION_RIGHT: F,
      DIRECTION_UP: V,
      DIRECTION_DOWN: W,
      DIRECTION_HORIZONTAL: I,
      DIRECTION_VERTICAL: U,
      DIRECTION_ALL: Ut,
      Manager: _t,
      Input: m,
      TouchAction: mt,
      TouchInput: et,
      MouseInput: tt,
      PointerEventInput: vt,
      TouchMouseInput: pt,
      SingleTouchInput: Ft,
      Recognizer: O,
      AttrRecognizer: E,
      Tap: at,
      Pan: st,
      Swipe: It,
      Pinch: dt,
      Rotate: gt,
      Press: Et,
      on: z,
      off: Z,
      each: P,
      merge: te,
      extend: Ot,
      assign: g,
      inherit: T,
      bindFn: lt,
      prefixed: Q
    });
    var Ye = typeof u != "undefined" ? u : typeof self != "undefined" ? self : {};
    Ye.Hammer = A, typeof l == "function" && l.amd ? l(function() {
      return A;
    }) : k.exports ? k.exports = A : u[jt] = A;
  })(window, document, "Hammer");
})(He);
export {
  Qt as hammerExports
};
