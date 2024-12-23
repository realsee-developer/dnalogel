import { BaseEditorWithObjectHelper as c } from "../Objects/Base/Editor.js";
import { getNormal as d } from "../../shared-utils/three/getNormal.js";
class b extends c {
  constructor(n) {
    super(n, () => ({
      yAxis: () => {
        const t = n.points;
        return d(t).normalize();
      },
      zAxis: () => {
        const t = n.points;
        return t[0].clone().sub(t[1]).normalize();
      },
      scaleHelper: {
        enable: !0,
        positions: () => {
          const t = n.points, e = t[0].clone().lerp(t[3], 0.5), l = t[1].clone().lerp(t[2], 0.5), s = t[0].clone().lerp(t[1], 0.5), r = t[3].clone().lerp(t[2], 0.5);
          return [
            {
              id: "left",
              handlePosition: e,
              basePosition: l
            },
            {
              id: "right",
              handlePosition: l,
              basePosition: e
            },
            {
              id: "top",
              handlePosition: s,
              basePosition: r
            },
            {
              id: "bottom",
              handlePosition: r,
              basePosition: s
            }
          ];
        },
        scaleCallback: (t) => {
          const { intersectPoint: e, scalePosition: l } = t, { id: s, basePosition: r } = l, i = e.clone().sub(r), o = n.points;
          s === "top" ? n.setPoints([
            // 2,3 不变
            o[3].clone().add(i),
            o[2].clone().add(i),
            o[2],
            o[3]
          ]) : s === "bottom" ? n.setPoints([
            // 0,1 不变
            o[0],
            o[1],
            o[1].clone().add(i),
            o[0].clone().add(i)
          ]) : s === "left" ? n.setPoints([
            // 1,2 不变
            o[1].clone().add(i),
            o[1],
            o[2],
            o[2].clone().add(i)
          ]) : s === "right" && n.setPoints([
            // 0,3 不变
            o[0],
            o[0].clone().add(i),
            o[3].clone().add(i),
            o[3]
          ]);
        }
      }
    }));
  }
}
export {
  b as RectangleMeshEditor
};
