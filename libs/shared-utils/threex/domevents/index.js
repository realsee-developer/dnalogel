import * as d from "three";
function n(t, e) {
  this._camera = t || null, this._domElement = e || document, this._raycaster = new d.Raycaster(), this._selected = null, this._boundObjs = {};
  var o = this;
  this._$onClick = function() {
    o._onClick.apply(o, arguments);
  }, this._$onDblClick = function() {
    o._onDblClick.apply(o, arguments);
  }, this._$onMouseMove = function() {
    o._onMouseMove.apply(o, arguments);
  }, this._$onMouseDown = function() {
    o._onMouseDown.apply(o, arguments);
  }, this._$onMouseUp = function() {
    o._onMouseUp.apply(o, arguments);
  }, this._$onTouchMove = function() {
    o._onTouchMove.apply(o, arguments);
  }, this._$onTouchStart = function() {
    o._onTouchStart.apply(o, arguments);
  }, this._$onTouchEnd = function() {
    o._onTouchEnd.apply(o, arguments);
  }, this._$onContextmenu = function() {
    o._onContextmenu.apply(o, arguments);
  }, this._domElement.addEventListener("click", this._$onClick, !1), this._domElement.addEventListener("dblclick", this._$onDblClick, !1), this._domElement.addEventListener("mousemove", this._$onMouseMove, !1), this._domElement.addEventListener("mousedown", this._$onMouseDown, !1), this._domElement.addEventListener("mouseup", this._$onMouseUp, !1), this._domElement.addEventListener("touchmove", this._$onTouchMove, !1), this._domElement.addEventListener("touchstart", this._$onTouchStart, !1), this._domElement.addEventListener("touchend", this._$onTouchEnd, !1), this._domElement.addEventListener("contextmenu", this._$onContextmenu, !1);
}
n.prototype.destroy = function() {
  this._domElement.removeEventListener("click", this._$onClick, !1), this._domElement.removeEventListener("dblclick", this._$onDblClick, !1), this._domElement.removeEventListener("mousemove", this._$onMouseMove, !1), this._domElement.removeEventListener("mousedown", this._$onMouseDown, !1), this._domElement.removeEventListener("mouseup", this._$onMouseUp, !1), this._domElement.removeEventListener("touchmove", this._$onTouchMove, !1), this._domElement.removeEventListener("touchstart", this._$onTouchStart, !1), this._domElement.removeEventListener("touchend", this._$onTouchEnd, !1), this._domElement.removeEventListener("contextmenu", this._$onContextmenu, !1);
};
n.eventNames = [
  "click",
  "dblclick",
  "mouseover",
  "mouseout",
  "mousemove",
  "mousedown",
  "mouseup",
  "contextmenu",
  "touchstart",
  "touchend"
];
n.prototype._getRelativeMouseXY = function(t) {
  var e = t.target || t.srcElement;
  e.nodeType === 3 && (e = e.parentNode);
  var o = { x: 0, y: 0 }, i = e, s = getComputedStyle(i, null);
  o.y += parseInt(s.getPropertyValue("padding-top"), 10), o.x += parseInt(s.getPropertyValue("padding-left"), 10);
  do
    o.x += i.offsetLeft, o.y += i.offsetTop, s = getComputedStyle(i, null), o.x += parseInt(s.getPropertyValue("border-left-width"), 10), o.y += parseInt(s.getPropertyValue("border-top-width"), 10);
  while (i = i.offsetParent);
  var r = {
    width: e === window ? window.innerWidth : e.offsetWidth,
    height: e === window ? window.innerHeight : e.offsetHeight
  };
  return {
    x: Number((t.pageX - o.x) / r.width) * 2 - 1,
    y: -((t.pageY - o.y) / r.height) * 2 + 1
  };
};
n.prototype._objectCtxInit = function(t) {
  t._3xDomEvent = {};
};
n.prototype._objectCtxDeinit = function(t) {
  delete t._3xDomEvent;
};
n.prototype._objectCtxIsInit = function(t) {
  return !!t._3xDomEvent;
};
n.prototype._objectCtxGet = function(t) {
  return t._3xDomEvent;
};
n.prototype.camera = function(t) {
  return t && (this._camera = t), this._camera;
};
n.prototype.bind = function(t, e, o, i) {
  console.assert(n.eventNames.indexOf(e) !== -1, "not available events:" + e), this._objectCtxIsInit(t) || this._objectCtxInit(t);
  var s = this._objectCtxGet(t);
  s[e + "Handlers"] || (s[e + "Handlers"] = []), s[e + "Handlers"].push({
    callback: o,
    useCapture: i
  }), this._boundObjs[e] === void 0 && (this._boundObjs[e] = []), this._boundObjs[e].push(t);
};
n.prototype.addEventListener = n.prototype.bind;
n.prototype.unbind = function(t, e, o, i) {
  console.assert(n.eventNames.indexOf(e) !== -1, "not available events:" + e), this._objectCtxIsInit(t) || this._objectCtxInit(t);
  var s = this._objectCtxGet(t);
  s[e + "Handlers"] || (s[e + "Handlers"] = []);
  for (var r = s[e + "Handlers"], a = 0; a < r.length; a++) {
    var u = r[a];
    if (o == u.callback && i == u.useCapture) {
      r.splice(a, 1);
      break;
    }
  }
  var h = this._boundObjs[e].indexOf(t);
  this._boundObjs[e].splice(h, 1);
};
n.prototype.removeEventListener = n.prototype.unbind;
n.prototype._bound = function(t, e) {
  var o = this._objectCtxGet(e);
  return o ? !!o[t + "Handlers"] : !1;
};
n.prototype._onMove = function(t, e, o, i) {
  var s = this._boundObjs[t];
  if (!(s === void 0 || s.length === 0)) {
    var r = new d.Vector2();
    r.set(e, o), this._raycaster.setFromCamera(r, this._camera);
    var a = this._raycaster.intersectObjects(s), u = this._selected;
    if (a.length > 0) {
      var h, c, l, p = a[0], _ = p.object;
      this._selected = _, l = this._bound("mousemove", _), u != _ && (h = this._bound("mouseover", _), c = u && this._bound("mouseout", u));
    } else
      c = u && this._bound("mouseout", u), this._selected = null;
    l && this._notify("mousemove", _, i, p), h && this._notify("mouseover", _, i, p), c && this._notify("mouseout", u, i, p);
  }
};
n.prototype._onEvent = function(t, e, o, i) {
  var s = this._boundObjs[t];
  if (!(s === void 0 || s.length === 0)) {
    var r = new d.Vector2();
    r.set(e, o), this._raycaster.setFromCamera(r, this._camera);
    var a = this._raycaster.intersectObjects(s, !0);
    if (a.length !== 0) {
      for (var u = a[0], h = u.object, c = this._objectCtxGet(h), l = h.parent; typeof c == "undefined" && l; )
        c = this._objectCtxGet(l), l = l.parent;
      c && this._notify(t, h, i, u);
    }
  }
};
n.prototype._notify = function(t, e, o, i) {
  var s = this._objectCtxGet(e), r = s ? s[t + "Handlers"] : null;
  if (!s || !r || r.length === 0) {
    e.parent && this._notify(t, e.parent, o, i);
    return;
  }
  for (var r = s[t + "Handlers"], a = 0; a < r.length; a++) {
    var u = r[a], h = !0;
    u.callback({
      type: t,
      target: e,
      origDomEvent: o,
      intersect: i,
      stopPropagation: function() {
        h = !1;
      }
    }), h && u.useCapture === !1 && e.parent && this._notify(t, e.parent, o, i);
  }
};
n.prototype._onMouseDown = function(t) {
  return this._onMouseEvent("mousedown", t);
};
n.prototype._onMouseUp = function(t) {
  return this._onMouseEvent("mouseup", t);
};
n.prototype._onMouseEvent = function(t, e) {
  var o = this._getRelativeMouseXY(e);
  this._onEvent(t, o.x, o.y, e);
};
n.prototype._onMouseMove = function(t) {
  var e = this._getRelativeMouseXY(t);
  this._onMove("mousemove", e.x, e.y, t), this._onMove("mouseover", e.x, e.y, t), this._onMove("mouseout", e.x, e.y, t);
};
n.prototype._onClick = function(t) {
  this._onMouseEvent("click", t);
};
n.prototype._onDblClick = function(t) {
  this._onMouseEvent("dblclick", t);
};
n.prototype._onContextmenu = function(t) {
  this._onMouseEvent("contextmenu", t);
};
n.prototype._onTouchStart = function(t) {
  return this._onTouchEvent("touchstart", t);
};
n.prototype._onTouchEnd = function(t) {
  return this._onTouchEvent("touchend", t);
};
n.prototype._onTouchMove = function(t) {
  if (t.touches.length == 1) {
    var e = Number(t.touches[0].pageX / window.innerWidth) * 2 - 1, o = -(t.touches[0].pageY / window.innerHeight) * 2 + 1;
    this._onMove("mousemove", e, o, t), this._onMove("mouseover", e, o, t), this._onMove("mouseout", e, o, t);
  }
};
n.prototype._onTouchEvent = function(t, e) {
  var o = e.touches;
  if (o.length == 0 && (o = e.changedTouches), o.length == 1) {
    var i = Number(o[0].pageX / window.innerWidth) * 2 - 1, s = -(o[0].pageY / window.innerHeight) * 2 + 1;
    this._onEvent(t, i, s, e);
  }
};
export {
  n as DomEvents
};
