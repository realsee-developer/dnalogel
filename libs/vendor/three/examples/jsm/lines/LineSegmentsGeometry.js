import { InstancedBufferGeometry as c, InstancedInterleavedBuffer as a, InterleavedBufferAttribute as s, WireframeGeometry as m, Box3 as f, Sphere as l, Float32BufferAttribute as h, Vector3 as b } from "../../../build/three.module.js";
var d = function() {
  c.call(this), this.type = "LineSegmentsGeometry";
  var t = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], e = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], n = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
  this.setIndex(n), this.setAttribute("position", new h(t, 3)), this.setAttribute("uv", new h(e, 2));
};
d.prototype = Object.assign(Object.create(c.prototype), {
  constructor: d,
  isLineSegmentsGeometry: !0,
  applyMatrix4: function(t) {
    var e = this.attributes.instanceStart, n = this.attributes.instanceEnd;
    return e !== void 0 && (e.applyMatrix4(t), n.applyMatrix4(t), e.data.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  },
  setPositions: function(t) {
    var e;
    t instanceof Float32Array ? e = t : Array.isArray(t) && (e = new Float32Array(t));
    var n = new a(e, 6, 1);
    return this.setAttribute("instanceStart", new s(n, 3, 0)), this.setAttribute("instanceEnd", new s(n, 3, 3)), this.computeBoundingBox(), this.computeBoundingSphere(), this;
  },
  setColors: function(t) {
    var e;
    t instanceof Float32Array ? e = t : Array.isArray(t) && (e = new Float32Array(t));
    var n = new a(e, 6, 1);
    return this.setAttribute("instanceColorStart", new s(n, 3, 0)), this.setAttribute("instanceColorEnd", new s(n, 3, 3)), this;
  },
  fromWireframeGeometry: function(t) {
    return this.setPositions(t.attributes.position.array), this;
  },
  fromEdgesGeometry: function(t) {
    return this.setPositions(t.attributes.position.array), this;
  },
  fromMesh: function(t) {
    return this.fromWireframeGeometry(new m(t.geometry)), this;
  },
  fromLineSegments: function(t) {
    var e = t.geometry;
    return e.isGeometry ? this.setPositions(e.vertices) : e.isBufferGeometry && this.setPositions(e.attributes.position.array), this;
  },
  computeBoundingBox: function() {
    var t = new f();
    return function() {
      this.boundingBox === null && (this.boundingBox = new f());
      var n = this.attributes.instanceStart, i = this.attributes.instanceEnd;
      n !== void 0 && i !== void 0 && (this.boundingBox.setFromBufferAttribute(n), t.setFromBufferAttribute(i), this.boundingBox.union(t));
    };
  }(),
  computeBoundingSphere: function() {
    var t = new b();
    return function() {
      this.boundingSphere === null && (this.boundingSphere = new l()), this.boundingBox === null && this.computeBoundingBox();
      var n = this.attributes.instanceStart, i = this.attributes.instanceEnd;
      if (n !== void 0 && i !== void 0) {
        var u = this.boundingSphere.center;
        this.boundingBox.getCenter(u);
        for (var r = 0, o = 0, p = n.count; o < p; o++)
          t.fromBufferAttribute(n, o), r = Math.max(r, u.distanceToSquared(t)), t.fromBufferAttribute(i, o), r = Math.max(r, u.distanceToSquared(t));
        this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
      }
    };
  }(),
  toJSON: function() {
  },
  applyMatrix: function(t) {
    return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(t);
  }
});
export {
  d as LineSegmentsGeometry
};
