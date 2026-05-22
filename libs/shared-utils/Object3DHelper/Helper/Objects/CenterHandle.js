var u = Object.defineProperty;
var f = (c, t, o) => t in c ? u(c, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : c[t] = o;
var a = (c, t, o) => (f(c, typeof t != "symbol" ? t + "" : t, o), o);
import * as e from "three";
import { DirectionGroup as b } from "../../utils/direction.js";
import { RENDER_ORDER as C } from "../../Constants/RenderOrder.js";
class p extends b {
  constructor(o) {
    var r, n;
    super("plane");
    a(this, "cube");
    a(this, "name", "CenterHandle");
    a(this, "faceMaterials");
    a(this, "baseColor");
    // 立方体6个面的法线方向（局部坐标系）
    a(this, "faceNormals", [
      new e.Vector3(1, 0, 0),
      // right (+X)
      new e.Vector3(-1, 0, 0),
      // left (-X)
      new e.Vector3(0, 1, 0),
      // top (+Y)
      new e.Vector3(0, -1, 0),
      // bottom (-Y)
      new e.Vector3(0, 0, 1),
      // front (+Z)
      new e.Vector3(0, 0, -1)
      // back (-Z)
    ]);
    this.baseColor = new e.Color((r = o == null ? void 0 : o.color) != null ? r : 16419862);
    const i = (n = o == null ? void 0 : o.size) != null ? n : 0.05, d = new e.Color(16755008).convertSRGBToLinear();
    this.faceMaterials = Array.from(
      { length: 6 },
      () => new e.MeshBasicMaterial({
        color: d,
        // 初始都使用最亮色
        transparent: !0,
        opacity: 1,
        depthTest: !1,
        depthWrite: !1,
        side: e.FrontSide
      })
    );
    const l = new e.BoxGeometry(i, i, i), s = new e.Mesh(l, this.faceMaterials);
    s.direction = "plane", s.renderOrder = C.MOVE_HELPER_CENTER, s.name = "center-plane-handle", this.cube = s, this.add(this.cube);
  }
  /**
   * 更新各个面的颜色，根据与相机的角度动态调整
   * @param camera 相机对象
   */
  update(o) {
    const i = new e.Vector3().subVectors(o.position, this.cube.getWorldPosition(new e.Vector3())).normalize(), d = this.cube.getWorldQuaternion(new e.Quaternion()), l = this.faceNormals.map((r, n) => {
      const w = r.clone().applyQuaternion(d).dot(i);
      return { index: n, angle: Math.acos(Math.abs(w)) };
    });
    l.sort((r, n) => r.angle - n.angle);
    const s = [
      new e.Color(16755008).convertSRGBToLinear(),
      // 最亮 #FFA940（最正对相机）
      new e.Color(16419862).convertSRGBToLinear(),
      // 一般 #FA8C16
      new e.Color(13921032).convertSRGBToLinear()
      // 最暗 #D46B08
    ];
    l.forEach((r, n) => {
      const h = Math.floor(n / 2);
      this.faceMaterials[r.index].color.copy(s[h]);
    });
  }
}
export {
  p as CenterHandle
};
