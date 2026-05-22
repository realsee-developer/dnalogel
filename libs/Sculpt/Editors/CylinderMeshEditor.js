import * as i from "three";
import { BaseEditorWithObjectHelper as p } from "../Objects/Base/Editor.js";
class c extends p {
  constructor(o) {
    super(o, () => {
      const s = () => {
        const t = o.topCenter, e = o.bottomCenter, n = new i.Vector3().lerpVectors(t, e, 0.5);
        return { topCenter: t, bottomCenter: e, boxCenter: n };
      };
      return {
        positionFrom: "boundingBox",
        yAxis: () => o.normal,
        scaleHelper: {
          enable: !0,
          positions: () => {
            const t = s();
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
            const { intersectPoint: e, scalePosition: n } = t, { id: r } = n;
            r === "top" ? o.setTopCenter(e) : r === "bottom" && o.setBottomCenter(e);
          }
        }
      };
    });
  }
}
export {
  c as CylinderMeshEditor
};
