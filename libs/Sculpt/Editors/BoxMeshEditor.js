import { BaseEditorWithObjectHelper as m } from "../Objects/Base/Editor.js";
import * as r from "three";
class V extends m {
  constructor(e) {
    super(e, () => ({
      positionFrom: () => e.worldCenter,
      yAxis: () => new r.Vector3().subVectors(e.topPosition, e.bottomPositions[0]).normalize(),
      zAxis: () => new r.Vector3().subVectors(e.bottomPositions[0], e.bottomPositions[1]).normalize(),
      scaleHelper: {
        enable: !0,
        positions: () => {
          const l = e.bottomPositions, c = e.topPosition, a = new r.Vector3().subVectors(c, l[0]), s = new r.Vector3().subVectors(l[1], l[0]), i = new r.Vector3().subVectors(l[2], l[1]), o = e.geometryInfo.center, f = o.clone().sub(a.clone().divideScalar(2)), d = o.clone().add(a.clone().divideScalar(2)), n = o.clone().sub(s.clone().divideScalar(2)), t = o.clone().add(s.clone().divideScalar(2)), P = o.clone().sub(i.clone().divideScalar(2)), b = o.clone().add(i.clone().divideScalar(2));
          return [
            {
              id: "top",
              handlePosition: d,
              basePosition: f
            },
            {
              id: "bottom",
              handlePosition: f,
              basePosition: d
            },
            {
              id: "left",
              handlePosition: n,
              basePosition: t
            },
            {
              id: "right",
              handlePosition: t,
              basePosition: n
            },
            {
              id: "front",
              handlePosition: P,
              basePosition: b
            },
            {
              id: "back",
              handlePosition: b,
              basePosition: P
            }
          ];
        },
        scaleCallback: (l) => {
          const { intersectPoint: c, scalePosition: a } = l, { id: s, basePosition: i } = a, o = e.bottomPositions, f = e.topPositions;
          let d = new r.Vector3().subVectors(e.topPosition, o[0]), n;
          if (s === "top")
            d = c.clone().sub(i), n = o;
          else if (s === "bottom") {
            const t = c.clone().sub(i);
            n = f.map((P) => P.clone().add(t)), d = void 0;
          } else if (s === "left") {
            const t = c.clone().sub(i);
            n = [
              o[1].clone().add(t),
              o[1],
              o[2],
              o[2].clone().add(t)
            ];
          } else if (s === "right") {
            const t = c.clone().sub(i);
            n = [
              o[0],
              o[0].clone().add(t),
              o[3].clone().add(t),
              o[3]
            ];
          } else if (s === "front") {
            const t = c.clone().sub(i);
            n = [
              o[3].clone().add(t),
              o[2].clone().add(t),
              o[2],
              o[3]
            ];
          } else if (s === "back") {
            const t = c.clone().sub(i);
            n = [
              o[0],
              o[1],
              o[1].clone().add(t),
              o[0].clone().add(t)
            ];
          }
          e.setPoints({
            points: n,
            heightPoint: d ? n[0].clone().add(d) : void 0
          });
        }
      }
    }));
  }
}
export {
  V as BoxMeshEditor
};
