var o = {}, u = {
  get exports() {
    return o;
  },
  set exports(s) {
    o = s;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(s) {
  (function() {
    var f = {}.hasOwnProperty;
    function e() {
      for (var t = "", r = 0; r < arguments.length; r++) {
        var n = arguments[r];
        n && (t = i(t, c(n)));
      }
      return t;
    }
    function c(t) {
      if (typeof t == "string" || typeof t == "number")
        return t;
      if (typeof t != "object")
        return "";
      if (Array.isArray(t))
        return e.apply(null, t);
      if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]"))
        return t.toString();
      var r = "";
      for (var n in t)
        f.call(t, n) && t[n] && (r = i(r, n));
      return r;
    }
    function i(t, r) {
      return r ? t ? t + " " + r : t + r : t;
    }
    s.exports ? (e.default = e, s.exports = e) : window.classNames = e;
  })();
})(u);
const a = o;
export {
  a as classnames
};
