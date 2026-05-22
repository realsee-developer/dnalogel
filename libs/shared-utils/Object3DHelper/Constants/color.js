import * as e from "three";
const o = {
  X: 16730698,
  Y: 54927,
  Z: 3368703
};
class t {
  static get X() {
    return new e.Color(o.X).convertSRGBToLinear().clone();
  }
  static get Y() {
    return new e.Color(o.Y).convertSRGBToLinear().clone();
  }
  static get Z() {
    return new e.Color(o.Z).convertSRGBToLinear().clone();
  }
}
export {
  t as AXES_THREE_COLOR
};
