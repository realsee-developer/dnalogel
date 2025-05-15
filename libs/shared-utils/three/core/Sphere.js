import * as h from "three";
const t = new h.Vector3();
class c extends h.Sphere {
  expandByPoint(s) {
    if (this.isEmpty())
      return this.center.copy(s), this.radius = 0, this;
    t.subVectors(s, this.center);
    const e = t.lengthSq();
    if (e > this.radius * this.radius) {
      const r = Math.sqrt(e), i = (r - this.radius) * 0.5;
      this.center.addScaledVector(t, i / r), this.radius += i;
    }
    return this;
  }
}
export {
  c as THREESphere
};
