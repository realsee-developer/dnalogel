import { BaseEditorWithObjectHelper as H } from "../Objects/Base/Editor.js";
import { getNormal as L } from "../../shared-utils/three/getNormal.js";
class F extends H {
  constructor(n) {
    super(n, () => ({
      yAxis: () => {
        const o = n.points;
        return L(o).normalize();
      },
      zAxis: () => {
        const o = n.points;
        return o[0].clone().sub(o[1]).normalize();
      },
      scaleHelper: {
        enable: !0,
        positions: () => {
          const o = n.points, l = o[0].clone().lerp(o[3], 0.5), d = o[1].clone().lerp(o[2], 0.5), e = o[0].clone().lerp(o[1], 0.5), r = o[3].clone().lerp(o[2], 0.5);
          return [
            {
              id: "left",
              handlePosition: l,
              basePosition: d
            },
            {
              id: "right",
              handlePosition: d,
              basePosition: l
            },
            {
              id: "top",
              handlePosition: e,
              basePosition: r
            },
            {
              id: "bottom",
              handlePosition: r,
              basePosition: e
            },
            {
              id: "topleft",
              handlePosition: o[0],
              basePosition: o[2]
            },
            {
              id: "topright",
              handlePosition: o[1],
              basePosition: o[3]
            },
            {
              id: "bottomleft",
              handlePosition: o[3],
              basePosition: o[1]
            },
            {
              id: "bottomright",
              handlePosition: o[2],
              basePosition: o[0]
            }
          ];
        },
        scaleCallback: (o) => {
          const { intersectPoint: l, scalePosition: d } = o, { id: e, basePosition: r } = d, s = l.clone().sub(r), t = n.points, p = (A) => {
            const c = A, B = (c + 2) % 4, f = (c + 1) % 4, u = (c + 3) % 4, i = t[c].clone(), x = l.clone(), h = t[f].clone().sub(i), C = t[u].clone().sub(i), S = h.length(), g = C.length();
            if (S < 1e-6 || g < 1e-6)
              return t.map((m) => m.clone());
            const b = h.clone().normalize(), P = C.clone().normalize(), w = x.clone().sub(i), y = w.dot(b), z = w.dot(P), v = i.clone().add(b.clone().multiplyScalar(y)), O = i.clone().add(P.clone().multiplyScalar(z)), E = i.clone().add(b.clone().multiplyScalar(y)).add(P.clone().multiplyScalar(z)), a = t.map((m) => m.clone());
            return a[c] = i, a[f] = v, a[u] = O, a[B] = E, a;
          };
          e === "top" ? n.setPoints([
            // 2,3 不变
            t[3].clone().add(s),
            t[2].clone().add(s),
            t[2],
            t[3]
          ]) : e === "bottom" ? n.setPoints([
            // 0,1 不变
            t[0],
            t[1],
            t[1].clone().add(s),
            t[0].clone().add(s)
          ]) : e === "left" ? n.setPoints([
            // 1,2 不变
            t[1].clone().add(s),
            t[1],
            t[2],
            t[2].clone().add(s)
          ]) : e === "right" ? n.setPoints([
            // 0,3 不变
            t[0],
            t[0].clone().add(s),
            t[3].clone().add(s),
            t[3]
          ]) : e === "topleft" ? n.setPoints(p(2)) : e === "topright" ? n.setPoints(p(3)) : e === "bottomleft" ? n.setPoints(p(1)) : e === "bottomright" && n.setPoints(p(0));
        }
      }
    }));
  }
}
export {
  F as RectangleMeshEditor
};
