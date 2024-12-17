import { BaseEditorWithObjectHelper as r } from "../Objects/Base/Editor.js";
import * as d from "three";
class f extends r {
  constructor(o) {
    super(o, () => ({
      positionFrom: () => o.worldCenter,
      yAxis: () => o.up,
      scaleHelper: {
        enable: !0,
        positions: () => {
          const s = o.bottomPositions, e = o.topPosition, i = new d.Vector3().subVectors(e, s[0]), t = o.geometryInfo.center, n = t.clone().sub(i.clone().divideScalar(2)), c = t.clone().add(i.clone().divideScalar(2));
          return [
            {
              id: "top",
              handlePosition: c,
              basePosition: n
            },
            {
              id: "bottom",
              handlePosition: n,
              basePosition: c
            }
          ];
        },
        scaleCallback: (s) => {
          const { intersectPoint: e, scalePosition: i } = s, { id: t, basePosition: n, handlePosition: c } = i;
          if (t === "top") {
            const l = e.clone().sub(n);
            o.setPoints({ heightPoint: o.bottomPositions[0].clone().add(l) });
          } else if (t === "bottom") {
            const l = e.clone().sub(n);
            o.setPoints({
              points: o.topPositions.map((a) => a.clone().add(l))
            });
          }
        }
      }
    }));
  }
}
export {
  f as PrismMeshEditor
};
