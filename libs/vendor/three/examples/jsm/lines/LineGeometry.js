import { LineSegmentsGeometry as n } from "./LineSegmentsGeometry.js";
var r = function() {
  n.call(this), this.type = "LineGeometry";
};
r.prototype = Object.assign(Object.create(n.prototype), {
  constructor: r,
  isLineGeometry: !0,
  setPositions: function(e) {
    for (var s = e.length - 3, o = new Float32Array(2 * s), t = 0; t < s; t += 3)
      o[2 * t] = e[t], o[2 * t + 1] = e[t + 1], o[2 * t + 2] = e[t + 2], o[2 * t + 3] = e[t + 3], o[2 * t + 4] = e[t + 4], o[2 * t + 5] = e[t + 5];
    return n.prototype.setPositions.call(this, o), this;
  },
  setColors: function(e) {
    for (var s = e.length - 3, o = new Float32Array(2 * s), t = 0; t < s; t += 3)
      o[2 * t] = e[t], o[2 * t + 1] = e[t + 1], o[2 * t + 2] = e[t + 2], o[2 * t + 3] = e[t + 3], o[2 * t + 4] = e[t + 4], o[2 * t + 5] = e[t + 5];
    return n.prototype.setColors.call(this, o), this;
  },
  fromLine: function(e) {
    var s = e.geometry;
    return s.isGeometry ? this.setPositions(s.vertices) : s.isBufferGeometry && this.setPositions(s.attributes.position.array), this;
  },
  copy: function() {
    return this;
  }
});
export {
  r as LineGeometry
};
