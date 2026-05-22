import * as t from "three";
function E(r, p) {
  const s = new t.Vector3().subVectors(p, r[0]), y = r.map((n) => n.clone().add(s)), i = [...r, ...y], e = new t.Vector3();
  i.forEach((n) => e.add(n)), e.divideScalar(8);
  const x = new t.Vector3().subVectors(r[1], r[0]).clone().normalize(), l = s.clone().normalize(), V = new t.Vector3().crossVectors(x, l).normalize(), h = new t.Matrix4().makeBasis(x, l, V), m = new t.Quaternion().setFromRotationMatrix(h), a = new t.Euler().setFromQuaternion(m), w = m.clone().inverse(), c = i.map((n) => n.clone().sub(e).applyQuaternion(w)), u = c.map((n) => n.x), z = c.map((n) => n.y), d = c.map((n) => n.z), o = new t.Vector3(
    (Math.max(...u) - Math.min(...u)) / 2,
    (Math.max(...z) - Math.min(...z)) / 2,
    (Math.max(...d) - Math.min(...d)) / 2
  ), M = new t.Vector3(e.x - o.x, e.y - o.y, e.z - o.z), A = new t.Vector3(e.x + o.x, e.y + o.y, e.z + o.z);
  return {
    start: M.toArray(),
    end: A.toArray(),
    rotation: [a.x, a.y, a.z]
  };
}
export {
  E as sculptDataToBoxPosition
};
