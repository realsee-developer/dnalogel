import { Line as r, LineGeometry as i, THREE_Line2 as s, LineMaterial as n } from "@realsee/five/line";
class a extends r {
  constructor(...e) {
    super(...e);
  }
  toJSON() {
    return {
      type: "FiveLine",
      points: this.points.toJSON()
    };
  }
}
class u extends s {
  constructor(...e) {
    super(...e);
  }
  toJSON() {
    return {
      type: "Five_THREE_Line2",
      geometryAttributes: this.geometry.attributes
    };
  }
}
class L extends i {
  constructor(...e) {
    super(...e);
  }
  toJSON() {
    return {
      type: "FiveLineGeometry",
      attributes: this.attributes
    };
  }
}
class c extends n {
  constructor(...e) {
    super(...e);
  }
  toJSON() {
    return {
      type: "FiveLineMaterial",
      color: this.color
    };
  }
}
export {
  a as FiveLine,
  L as LineGeometry,
  c as LineMaterial,
  u as THREE_Line2
};
