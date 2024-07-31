import { BaseEditorWithObjectHelper as l } from "../Base/Editor.js";
import * as a from "three";
class P extends l {
  constructor(t) {
    super(t, () => {
      const i = () => {
        var n, e;
        const o = (n = t.prismMesh.topPolygon) == null ? void 0 : n.center, s = (e = t.prismMesh.bottomPolygon) == null ? void 0 : e.center, r = new a.Vector3().lerpVectors(o, s, 0.5);
        return { topCenter: o, bottomCenter: s, boxCenter: r };
      };
      return {
        positionFrom: () => i().boxCenter.clone().applyMatrix4(t.matrixWorld),
        yAxis: t.prismMesh.up,
        scaleHelper: {
          enable: !0,
          positions: () => {
            const o = i();
            return [
              {
                id: "top",
                handlePosition: o.topCenter,
                basePosition: o.bottomCenter
              },
              {
                id: "bottom",
                handlePosition: o.bottomCenter,
                basePosition: o.topCenter
              }
            ];
          },
          scaleCallback: (o) => {
            const { intersectPoint: s, scalePosition: r } = o, { id: n } = r, { prismMesh: e } = t;
            n === "top" ? e.setPoints({ heightPoint: s }) : n === "bottom" && e.setPoints({
              points: e.topPolygon.points.map((p) => p.clone().add(s.clone().sub(r.basePosition)))
            });
          }
        }
      };
    });
  }
}
export {
  P as PrismEditor
};
