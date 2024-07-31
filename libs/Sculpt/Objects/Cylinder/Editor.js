import { BaseEditorWithObjectHelper as c } from "../Base/Editor.js";
import * as l from "three";
class d extends c {
  constructor(e) {
    super(e, () => {
      const i = () => {
        const t = e.cylinderMesh.topCenter, o = e.cylinderMesh.bottomCenter, n = new l.Vector3().lerpVectors(t, o, 0.5);
        return { topCenter: t, bottomCenter: o, boxCenter: n };
      };
      return {
        positionFrom: "boundingBox",
        yAxis: e.cylinderMesh.normal,
        scaleHelper: {
          enable: !0,
          positions: () => {
            const t = i();
            return [
              {
                id: "top",
                handlePosition: t.topCenter,
                basePosition: t.bottomCenter
              },
              {
                id: "bottom",
                handlePosition: t.bottomCenter,
                basePosition: t.topCenter
              }
            ];
          },
          scaleCallback: (t) => {
            const { intersectPoint: o, scalePosition: n } = t, { id: s } = n, { cylinderMesh: r } = e;
            s === "top" ? r.setTopCenter(o) : s === "bottom" && r.setBottomCenter(o);
          }
        }
      };
    });
  }
}
export {
  d as CylinderEditor
};
