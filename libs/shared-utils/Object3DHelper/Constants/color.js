import * as e from "three";
const o = {
  X: 15618642,
  Y: 4765519,
  Z: 4227839
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
