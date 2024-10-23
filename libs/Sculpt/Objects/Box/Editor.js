import { BaseEditorWithObjectHelper as a } from "../Base/Editor.js";
import * as c from "three";
class m extends a {
  constructor(e) {
    super(e, () => {
      const i = () => {
        var s, t;
        const o = (s = e.boxMesh.topPlane) == null ? void 0 : s.center, n = (t = e.boxMesh.bottomPlane) == null ? void 0 : t.center, r = new c.Vector3().lerpVectors(o, n, 0.5);
        return { topCenter: o, bottomCenter: n, boxCenter: r };
      };
      return {
        positionFrom: "boundingBox",
        yAxis: e.boxMesh.bottomPlane.up,
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
            const { intersectPoint: n, scalePosition: r } = o, { id: s } = r, { boxMesh: t } = e;
            s === "top" ? t.setTopHeightPoint(n) : s === "bottom" && t.setPoints({
              points: t.topPlane.points.map((p) => p.clone().add(n.clone().sub(r.basePosition)))
            });
          }
        }
      };
    });
  }
}
export {
  m as BoxEditor
};
